import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';
import MagicString from 'magic-string';

var Node = function Node () {};

Node.prototype.ancestor = function ancestor (level) {
	var node = this;
	while (level--) {
		node = node.parent;
		if (!node) { return null; }
	}

	return node;
};

Node.prototype.contains = function contains (node) {
	while (node) {
		if (node === this) { return true; }
		node = node.parent;
	}

	return false;
};

Node.prototype.findLexicalBoundary = function findLexicalBoundary () {
	return this.parent.findLexicalBoundary();
};

Node.prototype.findNearest = function findNearest (type) {
	if (typeof type === 'string') { type = new RegExp(("^" + type + "$")); }
	if (type.test(this.type)) { return this; }
	return this.parent.findNearest(type);
};

Node.prototype.unparenthesizedParent = function unparenthesizedParent () {
	var node = this.parent;
	while (node && node.type === 'ParenthesizedExpression') {
		node = node.parent;
	}
	return node;
};

Node.prototype.unparenthesize = function unparenthesize () {
	var node = this;
	while (node.type === 'ParenthesizedExpression') {
		node = node.expression;
	}
	return node;
};

Node.prototype.findScope = function findScope (functionScope) {
	return this.parent.findScope(functionScope);
};

Node.prototype.getIndentation = function getIndentation () {
	return this.parent.getIndentation();
};

Node.prototype.initialise = function initialise (transforms) {
	for (var i = 0, list = this.keys; i < list.length; i += 1) {
		var key = list[i];

			var value = this[key];

		if (Array.isArray(value)) {
			value.forEach(function (node) { return node && node.initialise(transforms); });
		} else if (value && typeof value === 'object') {
			value.initialise(transforms);
		}
	}
};

Node.prototype.toJSON = function toJSON$1 () {
	return toJSON(this);
};

Node.prototype.toString = function toString () {
	return this.program.magicString.original.slice(this.start, this.end);
};

Node.prototype.transpile = function transpile (code, transforms) {
	for (var i = 0, list = this.keys; i < list.length; i += 1) {
		var key = list[i];

			var value = this[key];

		if (Array.isArray(value)) {
			value.forEach(function (node) { return node && node.transpile(code, transforms); });
		} else if (value && typeof value === 'object') {
			value.transpile(code, transforms);
		}
	}
};

function extractNames(node) {
	var names = [];
	extractors[node.type](names, node);
	return names;
}

var extractors = {
	Identifier: function Identifier(names, node) {
		names.push(node);
	},
};

var reserved = Object.create(null);
'do if in for let new try var case else enum eval null this true void with await break catch class const false super throw while yield delete export import public return static switch typeof default extends finally package private continue debugger function arguments interface protected implements instanceof'
	.split(' ')
	.forEach(function (word) { return (reserved[word] = true); });

function Scope(options) {
	options = options || {};

	this.parent = options.parent;
	this.isBlockScope = !!options.block;
	this.createDeclarationCallback = options.declare;

	var scope = this;
	while (scope.isBlockScope) { scope = scope.parent; }
	this.functionScope = scope;

	this.identifiers = [];
	this.declarations = Object.create(null);
	this.references = Object.create(null);
	this.blockScopedDeclarations = this.isBlockScope ? null : Object.create(null);
	this.aliases = Object.create(null);
}

Scope.prototype = {
	addDeclaration: function addDeclaration(node, kind) {
		for (var i = 0, list = extractNames(node); i < list.length; i += 1) {
			var identifier = list[i];

			var name = identifier.name;

			var declaration = { name: name, node: identifier, kind: kind, instances: [] };
			this.declarations[name] = declaration;

			if (this.isBlockScope) {
				if (!this.functionScope.blockScopedDeclarations[name])
					{ this.functionScope.blockScopedDeclarations[name] = []; }
				this.functionScope.blockScopedDeclarations[name].push(declaration);
			}
		}
	},

	addReference: function addReference(identifier) {
		if (this.consolidated) {
			this.consolidateReference(identifier);
		} else {
			this.identifiers.push(identifier);
		}
	},

	consolidate: function consolidate() {
		for (var i = 0; i < this.identifiers.length; i += 1) {
			// we might push to the array during consolidation, so don't cache length
			var identifier = this.identifiers[i];
			this.consolidateReference(identifier);
		}

		this.consolidated = true; // TODO understand why this is necessary... seems bad
	},

	consolidateReference: function consolidateReference(identifier) {
		var declaration = this.declarations[identifier.name];
		if (declaration) {
			declaration.instances.push(identifier);
		} else {
			this.references[identifier.name] = true;
			if (this.parent) { this.parent.addReference(identifier); }
		}
	},

	contains: function contains(name) {
		return (
			this.declarations[name] ||
			(this.parent ? this.parent.contains(name) : false)
		);
	},

	createIdentifier: function createIdentifier(base) {
		if (typeof base === 'number') { base = base.toString(); }

		base = base
			.replace(/\s/g, '')
			.replace(/\[([^\]]+)\]/g, '_$1')
			.replace(/[^a-zA-Z0-9_$]/g, '_')
			.replace(/_{2,}/, '_');

		var name = base;
		var counter = 1;

		while (
			this.declarations[name] ||
			this.references[name] ||
			this.aliases[name] ||
			name in reserved
		) {
			name = base + "$" + (counter++);
		}

		this.aliases[name] = true;
		return name;
	},

	createDeclaration: function createDeclaration(base) {
		var id = this.createIdentifier(base);
		this.createDeclarationCallback(id);
		return id;
	},

	findDeclaration: function findDeclaration(name) {
		return (
			this.declarations[name] ||
			(this.parent && this.parent.findDeclaration(name))
		);
	},

	// Sometimes, block scope declarations change name during transpilation
	resolveName: function resolveName(name) {
		var declaration = this.findDeclaration(name);
		return declaration ? declaration.name : name;
	}
};

function locate(source, index) {
	var lines = source.split('\n');
	var len = lines.length;

	var lineStart = 0;
	var i;

	for (i = 0; i < len; i += 1) {
		var line = lines[i];
		var lineEnd = lineStart + line.length + 1; // +1 for newline

		if (lineEnd > index) {
			return { line: i + 1, column: index - lineStart, char: i };
		}

		lineStart = lineEnd;
	}

	throw new Error('Could not determine location of character');
}

function pad(num, len) {
	var result = String(num);
	return result + repeat(' ', len - result.length);
}

function repeat(str, times) {
	var result = '';
	while (times--) { result += str; }
	return result;
}

function getSnippet(source, loc, length) {
	if ( length === void 0 ) length = 1;

	var first = Math.max(loc.line - 5, 0);
	var last = loc.line;

	var numDigits = String(last).length;

	var lines = source.split('\n').slice(first, last);

	var lastLine = lines[lines.length - 1];
	var offset = lastLine.slice(0, loc.column).replace(/\t/g, '  ').length;

	var snippet = lines
		.map(function (line, i) { return ((pad(i + first + 1, numDigits)) + " : " + (line.replace(/\t/g, '  '))); })
		.join('\n');

	snippet += '\n' + repeat(' ', numDigits + 3 + offset) + repeat('^', length);

	return snippet;
}

var CompileError = /*@__PURE__*/(function (Error) {
	function CompileError(message, node) {
		Error.call(this, message);

		this.name = 'CompileError';
		if (!node) {
			return;
		}

		var source = node.program.magicString.original;
		var loc = locate(source, node.start);

		this.message = message + " (" + (loc.line) + ":" + (loc.column) + ")";

		this.stack = new Error().stack.replace(
			new RegExp((".+new " + (this.name) + ".+\\n"), 'm'),
			''
		);

		this.loc = loc;
		this.snippet = getSnippet(source, loc, node.end - node.start);
	}

	if ( Error ) CompileError.__proto__ = Error;
	CompileError.prototype = Object.create( Error && Error.prototype );
	CompileError.prototype.constructor = CompileError;

	CompileError.prototype.toString = function toString () {
		return ((this.name) + ": " + (this.message) + "\n" + (this.snippet));
	};

	CompileError.missingTransform = function missingTransform (feature, transformKey, node, dangerousKey) {
		if ( dangerousKey === void 0 ) dangerousKey = null;

		var maybeDangerous = dangerousKey ? (", or `transforms: { " + dangerousKey + ": true }` if you know what you're doing") : '';
		throw new CompileError(("Transforming " + feature + " is not " + (dangerousKey ? "fully supported" : "implemented") + ". Use `transforms: { " + transformKey + ": false }` to skip transformation and disable this error" + maybeDangerous + "."), node);
	};

	return CompileError;
}(Error));

var BlockStatement = /*@__PURE__*/(function (Node) {
	function BlockStatement () {
		Node.apply(this, arguments);
	}

	if ( Node ) BlockStatement.__proto__ = Node;
	BlockStatement.prototype = Object.create( Node && Node.prototype );
	BlockStatement.prototype.constructor = BlockStatement;

	BlockStatement.prototype.createScope = function createScope () {
		var this$1$1 = this;

		this.parentIsFunction = /Function/.test(this.parent.type);
		this.isFunctionBlock = this.parentIsFunction || this.parent.type === 'Root';
		this.scope = new Scope({
			block: !this.isFunctionBlock,
			parent: this.parent.findScope(false),
			declare: function (id) { return this$1$1.createdDeclarations.push(id); }
		});

		if (this.parentIsFunction) {
			this.parent.params.forEach(function (node) {
				this$1$1.scope.addDeclaration(node, 'param');
			});
		}
	};

	BlockStatement.prototype.initialise = function initialise (transforms) {
		this.thisAlias = null;
		this.argumentsAlias = null;
		this.defaultParameters = [];
		this.createdDeclarations = [];

		// normally the scope gets created here, during initialisation,
		// but in some cases (e.g. `for` statements), we need to create
		// the scope early, as it pertains to both the init block and
		// the body of the statement
		if (!this.scope) { this.createScope(); }

		this.body.forEach(function (node) { return node.initialise(transforms); });

		this.scope.consolidate();
	};

	BlockStatement.prototype.findLexicalBoundary = function findLexicalBoundary () {
		if (this.type === 'Program') { return this; }
		if (/^Function/.test(this.parent.type)) { return this; }

		return this.parent.findLexicalBoundary();
	};

	BlockStatement.prototype.findScope = function findScope (functionScope) {
		return this.scope;
	};

	BlockStatement.prototype.getIndentation = function getIndentation () {
		return this.indentation;
	};

	BlockStatement.prototype.transpile = function transpile (code, transforms) {
		var indentation = this.getIndentation();

		var introStatementGenerators = [];

		if (/Function/.test(this.parent.type)) {
			this.transpileParameters(
				this.parent.params,
				code,
				transforms,
				indentation,
				introStatementGenerators
			);
		}

		Node.prototype.transpile.call(this, code, transforms);
	};
	BlockStatement.prototype.transpileParameters = function transpileParameters () { };

	return BlockStatement;
}(Node));

var ArrowFunctionExpression = /*@__PURE__*/(function (Node) {
	function ArrowFunctionExpression () {
		Node.apply(this, arguments);
	}

	if ( Node ) ArrowFunctionExpression.__proto__ = Node;
	ArrowFunctionExpression.prototype = Object.create( Node && Node.prototype );
	ArrowFunctionExpression.prototype.constructor = ArrowFunctionExpression;

	ArrowFunctionExpression.prototype.initialise = function initialise (transforms) {
		this.body.createScope();
		Node.prototype.initialise.call(this, transforms);
	};

	ArrowFunctionExpression.prototype.transpile = function transpile (code, transforms) {
		var openParensPos = this.start;
		for (var end = (this.body || this.params[0]).start - 1; code.original[openParensPos] !== '(' && openParensPos < end;) {
			++openParensPos;
		}
		if (code.original[openParensPos] !== '(') { openParensPos = -1; }

    Node.prototype.transpile.call(this, code, transforms);
	};

	// Returns whether any transforms that will happen use `arguments`
	ArrowFunctionExpression.prototype.needsArguments = function needsArguments (transforms) {
		return false;
	};

	return ArrowFunctionExpression;
}(Node));

function isReference(node, parent) {
	if (node.type === 'MemberExpression') {
		return !node.computed && isReference(node.object, node);
	}

	if (node.type === 'Identifier') {
		// the only time we could have an identifier node without a parent is
		// if it's the entire body of a function without a block statement –
		// i.e. an arrow function expression like `a => a`
		if (!parent) { return true; }

		if (/(Function|Class)Expression/.test(parent.type)) { return false; }

		if (parent.type === 'VariableDeclarator') { return node === parent.init; }

		// TODO is this right?
		if (
			parent.type === 'MemberExpression' ||
			parent.type === 'MethodDefinition'
		) {
			return parent.computed || node === parent.object;
		}

		if (parent.type === 'ArrayPattern') { return false; }

		// disregard the `bar` in `{ bar: foo }`, but keep it in `{ [bar]: foo }`
		if (parent.type === 'Property') {
			if (parent.parent.type === 'ObjectPattern') { return false; }
			return parent.computed || node === parent.value;
		}

		// disregard the `bar` in `class Foo { bar () {...} }`
		if (parent.type === 'MethodDefinition') { return false; }

		// disregard the `bar` in `export { foo as bar }`
		if (parent.type === 'ExportSpecifier' && node !== parent.local)
			{ return false; }

		return true;
	}
}

var Identifier = /*@__PURE__*/(function (Node) {
	function Identifier () {
		Node.apply(this, arguments);
	}

	if ( Node ) Identifier.__proto__ = Node;
	Identifier.prototype = Object.create( Node && Node.prototype );
	Identifier.prototype.constructor = Identifier;

	Identifier.prototype.findScope = function findScope (functionScope) {
		if (this.parent.params && ~this.parent.params.indexOf(this)) {
			return this.parent.body.scope;
		}

		if (this.parent.type === 'FunctionExpression' && this === this.parent.id) {
			return this.parent.body.scope;
		}

		return this.parent.findScope(functionScope);
	};

	Identifier.prototype.initialise = function initialise (transforms) {
		if (this.isLabel()) {
			return;
		}

		if (isReference(this, this.parent)) {
			this.findScope(false).addReference(this);
		}
	};

	Identifier.prototype.isLabel = function isLabel () {
		switch (this.parent.type) {
			case 'BreakStatement': return true;
			case 'ContinueStatement': return true;
			case 'LabeledStatement': return true;
			default: return false;
		}
	};

	Identifier.prototype.transpile = function transpile (code) {
		if (this.alias) {
			code.overwrite(this.start, this.end, this.alias, {
				storeName: true,
				contentOnly: true
			});
		}
	};

	return Identifier;
}(Node));

var hasDashes = function (val) { return /-/.test(val); };

var formatKey = function (key) { return (hasDashes(key) ? ("'" + key + "'") : key); };

var formatVal = function (val) { return (val ? '' : 'true'); };

var JSXAttribute = /*@__PURE__*/(function (Node) {
	function JSXAttribute () {
		Node.apply(this, arguments);
	}

	if ( Node ) JSXAttribute.__proto__ = Node;
	JSXAttribute.prototype = Object.create( Node && Node.prototype );
	JSXAttribute.prototype.constructor = JSXAttribute;

	JSXAttribute.prototype.transpile = function transpile (code, transforms) {
		var ref = this.name;
		var start = ref.start;
		var name = ref.name;

		// Overwrite equals sign if value is present.
		var end = this.value ? this.value.start : this.name.end;

		code.overwrite(start, end, ((formatKey(name)) + ": " + (formatVal(this.value))));

		Node.prototype.transpile.call(this, code, transforms);
	};

	return JSXAttribute;
}(Node));

function containsNewLine$1(node) {
  return (
    node.type === "JSXText" && !/\S/.test(node.value) && /\n/.test(node.value)
  );
}

var JSXClosingElement = /*@__PURE__*/(function (Node) {
  function JSXClosingElement () {
    Node.apply(this, arguments);
  }

  if ( Node ) JSXClosingElement.__proto__ = Node;
  JSXClosingElement.prototype = Object.create( Node && Node.prototype );
  JSXClosingElement.prototype.constructor = JSXClosingElement;

  JSXClosingElement.prototype.transpile = function transpile (code) {
    var spaceBeforeParen = true;

    var lastChild = this.parent.children[this.parent.children.length - 1];

    // omit space before closing paren if
    //   a) this is on a separate line, or
    //   b) there are no children but there are attributes
    if (
      (lastChild && containsNewLine$1(lastChild)) ||
      this.parent.openingElement.attributes.length
    ) {
      spaceBeforeParen = false;
    }
    code.overwrite(this.start, this.end, spaceBeforeParen ? " )" : ")");
  };

  return JSXClosingElement;
}(Node));

function containsNewLine(node) {
  return (
    node.type === "JSXText" && !/\S/.test(node.value) && /\n/.test(node.value)
  );
}

var JSXClosingFragment = /*@__PURE__*/(function (Node) {
  function JSXClosingFragment () {
    Node.apply(this, arguments);
  }

  if ( Node ) JSXClosingFragment.__proto__ = Node;
  JSXClosingFragment.prototype = Object.create( Node && Node.prototype );
  JSXClosingFragment.prototype.constructor = JSXClosingFragment;

  JSXClosingFragment.prototype.transpile = function transpile (code) {
    var spaceBeforeParen = true;

    var lastChild = this.parent.children[this.parent.children.length - 1];

    // omit space before closing paren if this is on a separate line
    if (lastChild && containsNewLine(lastChild)) {
      spaceBeforeParen = false;
    }

    code.overwrite(this.start, this.end, spaceBeforeParen ? " )" : ")");
  };

  return JSXClosingFragment;
}(Node));

function normalise(str, removeTrailingWhitespace) {

	if (removeTrailingWhitespace && /\n/.test(str)) {
		str = str.replace(/[ \f\n\r\t\v]+$/, '');
	}

	str = str
		.replace(/^\n\r?[ \f\n\r\t\v]+/, '') // remove leading newline + space
		.replace(/[ \f\n\r\t\v]*\n\r?[ \f\n\r\t\v]*/gm, ' '); // replace newlines with spaces

	// TODO prefer single quotes?
	return JSON.stringify(str);
}

var JSXElement = /*@__PURE__*/(function (Node) {
	function JSXElement () {
		Node.apply(this, arguments);
	}

	if ( Node ) JSXElement.__proto__ = Node;
	JSXElement.prototype = Object.create( Node && Node.prototype );
	JSXElement.prototype.constructor = JSXElement;

	JSXElement.prototype.transpile = function transpile (code, transforms) {
		Node.prototype.transpile.call(this, code, transforms);

		var children = this.children.filter(function (child) {
			if (child.type !== 'JSXText') { return true; }

			// remove whitespace-only literals, unless on a single line
			return /[^ \f\n\r\t\v]/.test(child.raw) || !/\n/.test(child.raw);
		});

		if (children.length) {
			var c = (this.openingElement || this.openingFragment).end;

			var i;
			for (i = 0; i < children.length; i += 1) {
				var child = children[i];

				if (
					child.type === 'JSXExpressionContainer' &&
					child.expression.type === 'JSXEmptyExpression'
				) ; else {
					var tail =
						code.original[c] === '\n' && child.type !== 'JSXText' ? '' : ' ';
					code.appendLeft(c, ("," + tail));
				}

				if (child.type === 'JSXText') {
					var str = normalise(child.value, i === children.length - 1);
					code.overwrite(child.start, child.end, str);
				}

				c = child.end;
			}
		}
	};

	return JSXElement;
}(Node));

var JSXExpressionContainer = /*@__PURE__*/(function (Node) {
	function JSXExpressionContainer () {
		Node.apply(this, arguments);
	}

	if ( Node ) JSXExpressionContainer.__proto__ = Node;
	JSXExpressionContainer.prototype = Object.create( Node && Node.prototype );
	JSXExpressionContainer.prototype.constructor = JSXExpressionContainer;

	JSXExpressionContainer.prototype.transpile = function transpile (code, transforms) {
		code.remove(this.start, this.expression.start);
		code.remove(this.expression.end, this.end);

		Node.prototype.transpile.call(this, code, transforms);
	};

	return JSXExpressionContainer;
}(Node));

var JSXFragment = /*@__PURE__*/(function (JSXElement) {
	function JSXFragment () {
		JSXElement.apply(this, arguments);
	}if ( JSXElement ) JSXFragment.__proto__ = JSXElement;
	JSXFragment.prototype = Object.create( JSXElement && JSXElement.prototype );
	JSXFragment.prototype.constructor = JSXFragment;

	

	return JSXFragment;
}(JSXElement));

var JSXOpeningElement = /*@__PURE__*/(function (Node) {
  function JSXOpeningElement () {
    Node.apply(this, arguments);
  }

  if ( Node ) JSXOpeningElement.__proto__ = Node;
  JSXOpeningElement.prototype = Object.create( Node && Node.prototype );
  JSXOpeningElement.prototype.constructor = JSXOpeningElement;

  JSXOpeningElement.prototype.transpile = function transpile (code, transforms) {
    Node.prototype.transpile.call(this, code, transforms);

    code.overwrite(this.start, this.name.start, ((this.program.jsx) + "( "));

    var html =
      this.name.type === "JSXIdentifier" &&
      this.name.name[0] === this.name.name[0].toLowerCase();
    if (html) { code.prependRight(this.name.start, "'"); }

    var len = this.attributes.length;
    var c = this.name.end;

    if (len) {
      var i;

      var hasSpread = false;
      for (i = 0; i < len; i += 1) {
        if (this.attributes[i].type === "JSXSpreadAttribute") {
          hasSpread = true;
          break;
        }
      }

      c = this.attributes[0].end;

      for (i = 0; i < len; i += 1) {
        var attr = this.attributes[i];

        if (i > 0) {
          if (attr.start === c) { code.prependRight(c, ", "); }
          else { code.overwrite(c, attr.start, ", "); }
        }

        if (hasSpread && attr.type !== "JSXSpreadAttribute") {
          var lastAttr = this.attributes[i - 1];
          var nextAttr = this.attributes[i + 1];

          if (!lastAttr || lastAttr.type === "JSXSpreadAttribute") {
            code.prependRight(attr.start, "{ ");
          }

          if (!nextAttr || nextAttr.type === "JSXSpreadAttribute") {
            code.appendLeft(attr.end, " }");
          }
        }

        c = attr.end;
      }

      var after;
      var before;
      if (hasSpread) {
        if (len === 1) {
          before = html ? "'," : ",";
        } else {
          if (!this.program.options.objectAssign) {
            throw new CompileError(
              "Mixed JSX attributes ending in spread requires specified objectAssign option with 'Object.assign' or polyfill helper.",
              this
            );
          }
          before = html
            ? ("', " + (this.program.options.objectAssign) + "({},")
            : (", " + (this.program.options.objectAssign) + "({},");
          after = ")";
        }
      } else {
        before = html ? "', {" : ", {";
        after = " }";
      }

      code.prependRight(this.name.end, before);

      if (after) {
        code.appendLeft(this.attributes[len - 1].end, after);
      }
    } else {
      code.appendLeft(this.name.end, html ? "', null" : ", null");
      c = this.name.end;
    }

    if (this.selfClosing) {
      code.overwrite(c, this.end, this.attributes.length ? ")" : " )");
    } else {
      code.remove(c, this.end);
    }
  };

  return JSXOpeningElement;
}(Node));

var JSXOpeningFragment = /*@__PURE__*/(function (Node) {
	function JSXOpeningFragment () {
		Node.apply(this, arguments);
	}

	if ( Node ) JSXOpeningFragment.__proto__ = Node;
	JSXOpeningFragment.prototype = Object.create( Node && Node.prototype );
	JSXOpeningFragment.prototype.constructor = JSXOpeningFragment;

	JSXOpeningFragment.prototype.transpile = function transpile (code) {
		code.overwrite(this.start, this.end, ((this.program.jsx) + "( " + (this.program.jsxFragment) + ", null"));
	};

	return JSXOpeningFragment;
}(Node));

var JSXSpreadAttribute = /*@__PURE__*/(function (Node) {
	function JSXSpreadAttribute () {
		Node.apply(this, arguments);
	}

	if ( Node ) JSXSpreadAttribute.__proto__ = Node;
	JSXSpreadAttribute.prototype = Object.create( Node && Node.prototype );
	JSXSpreadAttribute.prototype.constructor = JSXSpreadAttribute;

	JSXSpreadAttribute.prototype.transpile = function transpile (code, transforms) {
		code.remove(this.start, this.argument.start);
		code.remove(this.argument.end, this.end);

		Node.prototype.transpile.call(this, code, transforms);
	};

	return JSXSpreadAttribute;
}(Node));

var nonAsciiLsOrPs = /[\u2028-\u2029]/g;

var Literal = /*@__PURE__*/(function (Node) {
	function Literal () {
		Node.apply(this, arguments);
	}

	if ( Node ) Literal.__proto__ = Node;
	Literal.prototype = Object.create( Node && Node.prototype );
	Literal.prototype.constructor = Literal;

	Literal.prototype.initialise = function initialise () {
		if (typeof this.value === 'string') {
			this.program.indentExclusionElements.push(this);
		}
	};

	Literal.prototype.transpile = function transpile (code, transforms) {

		if (this.regex) {
			var ref = this.regex;
			ref.pattern;
			ref.flags;
		} else if (typeof this.value === "string" && this.value.match(nonAsciiLsOrPs)) {
			code.overwrite(
				this.start,
				this.end,
				this.raw.replace(nonAsciiLsOrPs, function (m) { return m == '\u2028' ? '\\u2028' : '\\u2029'; }),
				{
					contentOnly: true
				}
			);
		}
	};

	return Literal;
}(Node));

var VariableDeclaration = /*@__PURE__*/(function (Node) {
	function VariableDeclaration () {
		Node.apply(this, arguments);
	}

	if ( Node ) VariableDeclaration.__proto__ = Node;
	VariableDeclaration.prototype = Object.create( Node && Node.prototype );
	VariableDeclaration.prototype.constructor = VariableDeclaration;

	VariableDeclaration.prototype.initialise = function initialise (transforms) {
		this.scope = this.findScope(this.kind === 'var');
		this.declarations.forEach(function (declarator) { return declarator.initialise(transforms); });
	};

	VariableDeclaration.prototype.transpile = function transpile (code, transforms) {
		this.getIndentation();
		this.kind;

    this.declarations.forEach(function (declarator) {
      declarator.transpile(code, transforms);
    });
	};

	return VariableDeclaration;
}(Node));

var VariableDeclarator = /*@__PURE__*/(function (Node) {
	function VariableDeclarator () {
		Node.apply(this, arguments);
	}

	if ( Node ) VariableDeclarator.__proto__ = Node;
	VariableDeclarator.prototype = Object.create( Node && Node.prototype );
	VariableDeclarator.prototype.constructor = VariableDeclarator;

	VariableDeclarator.prototype.initialise = function initialise (transforms) {
		var kind = this.parent.kind;
		if (kind === 'let' && this.parent.parent.type === 'ForStatement') {
			kind = 'for.let'; // special case...
		}

		this.parent.scope.addDeclaration(this.id, kind);
		Node.prototype.initialise.call(this, transforms);
	};

	VariableDeclarator.prototype.transpile = function transpile (code, transforms) {
		if (this.id) { this.id.transpile(code, transforms); }
		if (this.init) { this.init.transpile(code, transforms); }
	};

	VariableDeclarator.prototype.isLeftDeclaratorOfLoop = function isLeftDeclaratorOfLoop () {
		return (
			this.parent &&
			this.parent.type === 'VariableDeclaration' &&
			this.parent.parent &&
			(this.parent.parent.type === 'ForInStatement' ||
				this.parent.parent.type === 'ForOfStatement') &&
			this.parent.parent.left &&
			this.parent.parent.left.declarations[0] === this
		);
	};

	return VariableDeclarator;
}(Node));

var types = {
	ArrowFunctionExpression: ArrowFunctionExpression,
	Identifier: Identifier,
	JSXAttribute: JSXAttribute,
	JSXClosingElement: JSXClosingElement,
	JSXClosingFragment: JSXClosingFragment,
	JSXElement: JSXElement,
	JSXExpressionContainer: JSXExpressionContainer,
	JSXFragment: JSXFragment,
	JSXOpeningElement: JSXOpeningElement,
	JSXOpeningFragment: JSXOpeningFragment,
	JSXSpreadAttribute: JSXSpreadAttribute,
	Literal: Literal,
	VariableDeclaration: VariableDeclaration,
	VariableDeclarator: VariableDeclarator,
};

var keys = {
	Program: ['body'],
	Literal: []
};

var statementsWithBlocks = {
	IfStatement: 'consequent',
	ForStatement: 'body',
	ForInStatement: 'body',
	ForOfStatement: 'body',
	WhileStatement: 'body',
	DoWhileStatement: 'body',
	ArrowFunctionExpression: 'body'
};

function wrap(raw, parent) {
	if (!raw) { return; }

	if ('length' in raw) {
		var i = raw.length;
		while (i--) { wrap(raw[i], parent); }
		return;
	}

	// with e.g. shorthand properties, key and value are
	// the same node. We don't want to wrap an object twice
	if (raw.__wrapped) { return; }
	raw.__wrapped = true;

	if (!keys[raw.type]) {
		keys[raw.type] = Object.keys(raw).filter(
			function (key) { return typeof raw[key] === 'object'; }
		);
	}

	// special case – body-less if/for/while statements. TODO others?
	var bodyType = statementsWithBlocks[raw.type];
	if (bodyType && raw[bodyType].type !== 'BlockStatement') {
		var expression = raw[bodyType];

		// create a synthetic block statement, otherwise all hell
		// breaks loose when it comes to block scoping
		raw[bodyType] = {
			start: expression.start,
			end: expression.end,
			type: 'BlockStatement',
			body: [expression],
			synthetic: true
		};
	}

	raw.parent = parent;
	raw.program = parent.program || parent;
	raw.depth = parent.depth + 1;
	raw.keys = keys[raw.type];
	raw.indentation = undefined;

	for (var i$1 = 0, list = keys[raw.type]; i$1 < list.length; i$1 += 1) {
		var key = list[i$1];

		wrap(raw[key], raw);
	}

	raw.program.magicString.addSourcemapLocation(raw.start);
	raw.program.magicString.addSourcemapLocation(raw.end);

	var type =
		(raw.type === 'BlockStatement' ? BlockStatement : types[raw.type]) || Node;
	raw.__proto__ = type.prototype;
}

function Program(source, ast, transforms, options) {
	this.type = 'Root';

	// options
	this.jsx = options.jsx || 'React.createElement';
	this.jsxFragment = options.jsxFragment || 'React.Fragment';
	this.options = options;

	this.source = source;
	this.magicString = new MagicString(source);

	this.ast = ast;
	this.depth = 0;

	wrap((this.body = ast), this);
	this.body.__proto__ = BlockStatement.prototype;

	this.templateLiteralQuasis = Object.create(null);
	for (var i = 0; i < this.body.body.length; ++i) {
		if (!this.body.body[i].directive) {
			this.prependAt = this.body.body[i].start;
			break;
		}
	}
	this.objectWithoutPropertiesHelper = null;

	this.indentExclusionElements = [];
	this.body.initialise(transforms);

	this.indentExclusions = Object.create(null);
	for (var i$2 = 0, list = this.indentExclusionElements; i$2 < list.length; i$2 += 1) {
		var node = list[i$2];

		for (var i$1 = node.start; i$1 < node.end; i$1 += 1) {
			this.indentExclusions[i$1] = true;
		}
	}

	this.body.transpile(this.magicString, transforms);
}

Program.prototype = {
	export: function export$1(options) {
		if ( options === void 0 ) options = {};

		return {
			code: this.magicString.toString(),
			map: this.magicString.generateMap({
				file: options.file,
				source: options.source,
				includeContent: options.includeContent !== false
			})
		};
	},

	findNearest: function findNearest() {
		return null;
	},

	findScope: function findScope() {
		return null;
	},

	getObjectWithoutPropertiesHelper: function getObjectWithoutPropertiesHelper(code) {
		if (!this.objectWithoutPropertiesHelper) {
			this.objectWithoutPropertiesHelper = this.body.scope.createIdentifier('objectWithoutProperties');
			code.prependLeft(this.prependAt, "function " + (this.objectWithoutPropertiesHelper) + " (obj, exclude) { " +
				"var target = {}; for (var k in obj) " +
				"if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) " +
				"target[k] = obj[k]; return target; }\n"
			);
		}
		return this.objectWithoutPropertiesHelper;
	}
};

var version = "0.21.0";

var parser = Parser.extend(acornJsx());

function transform(source, options) {
  if ( options === void 0 ) options = {};

  var ast;
  var jsx = null;

  try {
    ast = parser.parse(source, {
      ecmaVersion: 10,
      preserveParens: false,
      sourceType: "module",
      allowAwaitOutsideFunction: true,
      allowReturnOutsideFunction: true,
      allowHashBang: true,
      onComment: function (block, text) {
        if (!jsx) {
          var match = /@jsx\s+([^\s]+)/.exec(text);
          if (match) { jsx = match[1]; }
        }
      },
    });
    options.jsx = jsx || options.jsx;
  } catch (err) {
    err.snippet = getSnippet(source, err.loc);
    err.toString = function () { return ((err.name) + ": " + (err.message) + "\n" + (err.snippet)); };
    throw err;
  }

  var transforms = {};
  Object.keys(options.transforms || {}).forEach(function (name) {
    if (name === "modules") {
      if (!("moduleImport" in options.transforms))
        { transforms.moduleImport = options.transforms.modules; }
      if (!("moduleExport" in options.transforms))
        { transforms.moduleExport = options.transforms.modules; }
      return;
    }

    if (!(name in transforms)) { throw new Error(("Unknown transform '" + name + "'")); }
    transforms[name] = options.transforms[name];
  });
  if (options.objectAssign === true) { options.objectAssign = "Object.assign"; }
  return new Program(source, ast, transforms, options).export(options);
}

export { version as VERSION, transform };
//# sourceMappingURL=buble-browser.es.js.map

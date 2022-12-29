GLOBAL(O) = function (tagNameOrClass, props, ...children) { 
    
    if (!tagNameOrClass || 
      ["_$connections", "_$objects", "_$cib"].includes(tagNameOrClass)) {
      return children;
    }
 
    if (tagNameOrClass === "_$outlet") {
      const { value, object, path } = props;
      return object.isa.objj_msgSend2(
        object,
        "setValue:forKeyPath:",
        value,
        path
      );
    }

    if(tagNameOrClass === "_$action") {
        const {target, action, sender} = props;
        sender.isa.objj_msgSend2(
            sender,
            "setTarget:",
            target 
        );
        sender.isa.objj_msgSend2(
            sender,
            "setAction:",
            action 
        );
        return;
    }
  
    const { innerHTML, nodes } = _parseChildren(...children);
    
    let cpObj;
    const { ref, ...rest } = props || {};
  
    if (objj_isString(tagNameOrClass)) {
      //TODO: init a CTView
      //   cpObj = new View({
      //     tagName: tagNameOrClass,
      //     ...(rest || {}),
      //   });
      //   if (innerHTML) {
      //     cpObj.node.innerHTML = innerHTML;
      //   }
    } else {
      if (tagNameOrClass.isa) {
        var allocator = tagNameOrClass.isa.objj_msgSend2(tagNameOrClass, "alloc");
        cpObj = allocator.isa.objj_msgSend2(
          allocator,
          "initWithProps:",
          rest || {}
        );
      }
    }
    if (cpObj) {
      if (nodes && nodes.length > 0) {
        if (!!class_getInstanceMethod(cpObj.isa, "addChild:")) {
          for (const child of nodes) {
            cpObj.isa.objj_msgSend2(cpObj, "addChild:", child);
          }
        } else {
          throw new Error(
            `${class_getName(cpObj.isa)} must implement method "addChild:".`
          );
        }
      }
      if (objj_isFunction(ref)) {
        ref(cpObj);
      }
      return cpObj;
    }
};

function _parseChildren(...children) {
    let _setInnerHtml = null,
      _children = null;
  
    if (children.length > 0 && objj_isString(children[0])) {
      _setInnerHtml = children.join(" ");
    } else {
      _children = children;
    }
    return {
      innerHTML: _setInnerHtml,
      nodes: _children,
    };
  }
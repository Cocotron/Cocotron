var ObjectiveJ = {};
(function (global, exports) {
    if (typeof window !== "undefined") {
        window.setNativeTimeout = window.setTimeout;
        window.clearNativeTimeout = window.clearTimeout;
        window.setNativeInterval = window.setInterval;
        window.clearNativeInterval = window.clearInterval;
    }
    NO = false;
    YES = true;
    nil = null;
    Nil = null;
    NULL = null;
    ABS = Math.abs;
    ASIN = Math.asin;
    ACOS = Math.acos;
    ATAN = Math.atan;
    ATAN2 = Math.atan2;
    SIN = Math.sin;
    COS = Math.cos;
    TAN = Math.tan;
    EXP = Math.exp;
    POW = Math.pow;
    CEIL = Math.ceil;
    FLOOR = Math.floor;
    ROUND = Math.round;
    MIN = Math.min;
    MAX = Math.max;
    RAND = Math.random;
    SQRT = Math.sqrt;
    E = Math.E;
    LN2 = Math.LN2;
    LN10 = Math.LN10;
    LOG = Math.log;
    LOG2E = Math.LOG2E;
    LOG10E = Math.LOG10E;
    PI = Math.PI;
    PI2 = Math.PI * 2.0;
    PI_2 = Math.PI / 2.0;
    SQRT1_2 = Math.SQRT1_2;
    SQRT2 = Math.SQRT2;
    var CLS_CLASS = 0x1,
        CLS_META = 0x2,
        CLS_INITIALIZED = 0x4,
        CLS_INITIALIZING = 0x8;
    var OBJECT_COUNT = 0;
    objj_generateObjectUID = function () {
        return OBJECT_COUNT++;
    }
    objj_ivar = function (aName, aType) {
        this.name = aName;
        this.type = aType;
    }
    objj_method = function (aName, anImplementation, types) {
        var method = anImplementation || function (aReceiver, aSelector) { CPException.isa.objj_msgSend2(CPException, "raise:reason:", CPInternalInconsistencyException, aReceiver.isa.method_msgSend0(self, "className") + " does not have an implementation for selector '" + aSelector + "'") };
        method.method_name = aName;
        method.method_imp = anImplementation;
        method.method_types = types;
        return method;
    }
    objj_class = function (displayName) {
        this.isa = NULL;
        this.version = 0;
        this.super_class = NULL;
        this.name = NULL;
        this.info = 0;
        this.ivar_list = [];
        this.ivar_store = function () { };
        this.ivar_dtable = this.ivar_store.prototype;
        this.method_list = [];
        this.method_store = function () { };
        this.method_dtable = this.method_store.prototype;
        this.protocol_list = [];
        this.allocator = function () { };
        this._UID = -1;
    }
    objj_protocol = function (aName) {
        this.name = aName;
        this.instance_methods = {};
        this.class_methods = {};
    }
    objj_object = function () {
        this.isa = NULL;
        this._UID = -1;
    }
    objj_typeDef = function (aName) {
        this.name = aName;
    }
    class_getName = function (aClass) {
        if (aClass == Nil)
            return "";
        return aClass.name;
    }
    class_isMetaClass = function (aClass) {
        if (!aClass)
            return NO;
        return ((aClass.info & (CLS_META)));
    }
    class_getSuperclass = function (aClass) {
        if (aClass == Nil)
            return Nil;
        return aClass.super_class;
    }
    class_setSuperclass = function (aClass, aSuperClass) {
        aClass.super_class = aSuperClass;
        aClass.isa.super_class = aSuperClass.isa;
    }
    class_addIvar = function (aClass, aName, aType) {
        var thePrototype = aClass.allocator.prototype;
        if (typeof thePrototype[aName] != "undefined")
            return NO;
        var ivar = new objj_ivar(aName, aType);
        aClass.ivar_list.push(ivar);
        aClass.ivar_dtable[aName] = ivar;
        thePrototype[aName] = NULL;
        return YES;
    }
    class_addIvars = function (aClass, ivars) {
        var index = 0,
            count = ivars.length,
            thePrototype = aClass.allocator.prototype;
        for (; index < count; ++index) {
            var ivar = ivars[index],
                name = ivar.name;
            if (typeof thePrototype[name] === "undefined") {
                aClass.ivar_list.push(ivar);
                aClass.ivar_dtable[name] = ivar;
                thePrototype[name] = NULL;
            }
        }
    }
    class_copyIvarList = function (aClass) {
        return aClass.ivar_list.slice(0);
    }
    class_addMethod = function (aClass, aName, anImplementation, types) {
        var method = new objj_method(aName, anImplementation, types);
        aClass.method_list.push(method);
        aClass.method_dtable[aName] = method;
        if (!((aClass.info & (CLS_META))) && (((aClass.info & (CLS_META))) ? aClass : aClass.isa).isa === (((aClass.info & (CLS_META))) ? aClass : aClass.isa))
            class_addMethod((((aClass.info & (CLS_META))) ? aClass : aClass.isa), aName, anImplementation, types);
        return YES;
    }
    class_addMethods = function (aClass, methods) {
        var index = 0,
            count = methods.length,
            method_list = aClass.method_list,
            method_dtable = aClass.method_dtable;
        for (; index < count; ++index) {
            var method = methods[index];
            method_list.push(method);
            method_dtable[method.method_name] = method;
        }
        if (!((aClass.info & (CLS_META))) && (((aClass.info & (CLS_META))) ? aClass : aClass.isa).isa === (((aClass.info & (CLS_META))) ? aClass : aClass.isa))
            class_addMethods((((aClass.info & (CLS_META))) ? aClass : aClass.isa), methods);
    }
    class_getInstanceMethod = function (aClass, aSelector) {
        if (!aClass || !aSelector)
            return NULL;
        var method = aClass.method_dtable[aSelector];
        return method ? method : NULL;
    }
    class_getInstanceVariable = function (aClass, aName) {
        if (!aClass || !aName)
            return NULL;
        var variable = aClass.ivar_dtable[aName];
        return variable;
    }
    class_getClassMethod = function (aClass, aSelector) {
        if (!aClass || !aSelector)
            return NULL;
        var method = (((aClass.info & (CLS_META))) ? aClass : aClass.isa).method_dtable[aSelector];
        return method ? method : NULL;
    }
    class_respondsToSelector = function (aClass, aSelector) {
        return class_getClassMethod(aClass, aSelector) != NULL;
    }
    class_copyMethodList = function (aClass) {
        return aClass.method_list.slice(0);
    }
    class_getVersion = function (aClass) {
        return aClass.version;
    }
    class_setVersion = function (aClass, aVersion) {
        aClass.version = parseInt(aVersion, 10);
    }
    class_replaceMethod = function (aClass, aSelector, aMethodImplementation) {
        if (!aClass || !aSelector)
            return NULL;
        var method = aClass.method_dtable[aSelector],
            method_imp = method.method_imp,
            new_method = new objj_method(method.method_name, aMethodImplementation, method.method_types);
        new_method.displayName = method.displayName;
        aClass.method_dtable[aSelector] = new_method;
        var index = aClass.method_list.indexOf(method);
        if (index !== -1) {
            aClass.method_list[index] = new_method;
        }
        else {
            aClass.method_list.push(new_method);
        }
        return method_imp;
    }
    class_addProtocol = function (aClass, aProtocol) {
        if (!aProtocol || class_conformsToProtocol(aClass, aProtocol)) {
            return;
        }
        (aClass.protocol_list || (aClass.protocol_list = [])).push(aProtocol);
        return true;
    }
    class_conformsToProtocol = function (aClass, aProtocol) {
        if (!aProtocol)
            return false;
        while (aClass) {
            var protocols = aClass.protocol_list,
                size = protocols ? protocols.length : 0;
            for (var i = 0; i < size; i++) {
                var p = protocols[i];
                if (p.name === aProtocol.name) {
                    return true;
                }
                if (protocol_conformsToProtocol(p, aProtocol)) {
                    return true;
                }
            }
            aClass = class_getSuperclass(aClass);
        }
        return false;
    }
    class_copyProtocolList = function (aClass) {
        var protocols = aClass.protocol_list;
        return protocols ? protocols.slice(0) : [];
    }
    protocol_conformsToProtocol = function (p1, p2) {
        if (!p1 || !p2)
            return false;
        if (p1.name === p2.name)
            return true;
        var protocols = p1.protocol_list,
            size = protocols ? protocols.length : 0;
        for (var i = 0; i < size; i++) {
            var p = protocols[i];
            if (p.name === p2.name) {
                return true;
            }
            if (protocol_conformsToProtocol(p, p2)) {
                return true;
            }
        }
        return false;
    }
    var REGISTERED_PROTOCOLS = Object.create(null);
    objj_allocateProtocol = function (aName) {
        var protocol = new objj_protocol(aName);
        return protocol;
    }
    objj_registerProtocol = function (proto) {
        REGISTERED_PROTOCOLS[proto.name] = proto;
    }
    protocol_getName = function (proto) {
        return proto.name;
    }
    protocol_addMethodDescription = function (proto, selector, types, isRequiredMethod, isInstanceMethod) {
        if (!proto || !selector) return;
        if (isRequiredMethod)
            (isInstanceMethod ? proto.instance_methods : proto.class_methods)[selector] = new objj_method(selector, null, types);
    }
    protocol_addMethodDescriptions = function (proto, methods, isRequiredMethod, isInstanceMethod) {
        if (!isRequiredMethod) return;
        var index = 0,
            count = methods.length,
            method_dtable = isInstanceMethod ? proto.instance_methods : proto.class_methods;
        for (; index < count; ++index) {
            var method = methods[index];
            method_dtable[method.method_name] = method;
        }
    }
    protocol_copyMethodDescriptionList = function (proto, isRequiredMethod, isInstanceMethod) {
        if (!isRequiredMethod)
            return [];
        var method_dtable = isInstanceMethod ? proto.instance_methods : proto.class_methods,
            methodList = [];
        for (var selector in method_dtable)
            if (method_dtable.hasOwnProperty(selector))
                methodList.push(method_dtable[selector]);
        return methodList;
    }
    protocol_addProtocol = function (proto, addition) {
        if (!proto || !addition) return;
        (proto.protocol_list || (proto.protocol_list = [])).push(addition);
    }
    var REGISTERED_TYPEDEFS = Object.create(null);
    objj_allocateTypeDef = function (aName) {
        var typeDef = new objj_typeDef(aName);
        return typeDef;
    }
    objj_registerTypeDef = function (typeDef) {
        REGISTERED_TYPEDEFS[typeDef.name] = typeDef;
    }
    typeDef_getName = function (typeDef) {
        return typeDef.name;
    }
    var _class_initialize = function (aClass) {
        var meta = (((aClass.info & (CLS_META))) ? aClass : aClass.isa);
        if ((aClass.info & (CLS_META)))
            aClass = objj_getClass(aClass.name);
        if (aClass.super_class && !((((aClass.super_class.info & (CLS_META))) ? aClass.super_class : aClass.super_class.isa).info & (CLS_INITIALIZED)))
            _class_initialize(aClass.super_class);
        if (!(meta.info & (CLS_INITIALIZED)) && !(meta.info & (CLS_INITIALIZING))) {
            meta.info = (meta.info | (CLS_INITIALIZING)) & ~(0);
            aClass.objj_msgSend = objj_msgSendFast;
            aClass.objj_msgSend0 = objj_msgSendFast0;
            aClass.objj_msgSend1 = objj_msgSendFast1;
            aClass.objj_msgSend2 = objj_msgSendFast2;
            aClass.objj_msgSend3 = objj_msgSendFast3;
            meta.objj_msgSend = objj_msgSendFast;
            meta.objj_msgSend0 = objj_msgSendFast0;
            meta.objj_msgSend1 = objj_msgSendFast1;
            meta.objj_msgSend2 = objj_msgSendFast2;
            meta.objj_msgSend3 = objj_msgSendFast3;
            aClass.method_msgSend = aClass.method_dtable;
            var metaMethodDTable = meta.method_msgSend = meta.method_dtable,
                initializeImp = metaMethodDTable["initialize"];
            if (initializeImp)
                initializeImp(aClass, "initialize");
            meta.info = (meta.info | (CLS_INITIALIZED)) & ~(CLS_INITIALIZING);
        }
    }
    _objj_forward = function (self, _cmd) {
        var isa = self.isa,
            meta = (((isa.info & (CLS_META))) ? isa : isa.isa);
        if (!(meta.info & (CLS_INITIALIZED)) && !(meta.info & (CLS_INITIALIZING))) {
            _class_initialize(isa);
        }
        var implementation = isa.method_msgSend[_cmd];
        if (implementation) {
            return implementation.apply(isa, arguments);
        }
        implementation = isa.method_dtable[SEL_forwardingTargetForSelector_];
        if (implementation) {
            var target = implementation(self, SEL_forwardingTargetForSelector_, _cmd);
            if (target && target !== self) {
                arguments[0] = target;
                return target.isa.objj_msgSend.apply(target.isa, arguments);
            }
        }
        implementation = isa.method_dtable[SEL_methodSignatureForSelector_];
        if (implementation) {
            var forwardInvocationImplementation = isa.method_dtable[SEL_forwardInvocation_];
            if (forwardInvocationImplementation) {
                var signature = implementation(self, SEL_methodSignatureForSelector_, _cmd);
                if (signature) {
                    var invocationClass = objj_lookUpClass("CPInvocation");
                    if (invocationClass) {
                        var invocation = invocationClass.isa.objj_msgSend1(invocationClass, SEL_invocationWithMethodSignature_, signature),
                            index = 0,
                            count = arguments.length;
                        if (invocation != null) {
                            var invocationIsa = invocation.isa;
                            for (; index < count; ++index)
                                invocationIsa.objj_msgSend2(invocation, SEL_setArgument_atIndex_, arguments[index], index);
                        }
                        forwardInvocationImplementation(self, SEL_forwardInvocation_, invocation);
                        return invocation == null ? null : invocationIsa.objj_msgSend0(invocation, SEL_returnValue);
                    }
                }
            }
        }
        implementation = isa.method_dtable[SEL_doesNotRecognizeSelector_];
        if (implementation)
            return implementation(self, SEL_doesNotRecognizeSelector_, _cmd);
        throw class_getName(isa) + " does not implement doesNotRecognizeSelector: when sending " + sel_getName(_cmd) + ". Did you forget a superclass for " + class_getName(isa) + "?";
    };
    class_getMethodImplementation = function (aClass, aSelector) {
        if (!((((aClass.info & (CLS_META))) ? aClass : aClass.isa).info & (CLS_INITIALIZED))) _class_initialize(aClass); var implementation = aClass.method_dtable[aSelector] || _objj_forward;;
        return implementation;
    }
    var REGISTERED_CLASSES = Object.create(null);
    objj_enumerateClassesUsingBlock = function (aBlock) {
        for (var key in REGISTERED_CLASSES) {
            aBlock(REGISTERED_CLASSES[key]);
        }
    }
    objj_allocateClassPair = function (superclass, aName) {
        var classObject = new objj_class(aName),
            metaClassObject = new objj_class(aName),
            rootClassObject = classObject;
        if (superclass) {
            rootClassObject = superclass;
            while (rootClassObject.superclass)
                rootClassObject = rootClassObject.superclass;
            classObject.allocator.prototype = new superclass.allocator;
            classObject.ivar_dtable = classObject.ivar_store.prototype = new superclass.ivar_store;
            classObject.method_dtable = classObject.method_store.prototype = new superclass.method_store;
            metaClassObject.method_dtable = metaClassObject.method_store.prototype = new superclass.isa.method_store;
            classObject.super_class = superclass;
            metaClassObject.super_class = superclass.isa;
        }
        else
            classObject.allocator.prototype = new objj_object();
        classObject.isa = metaClassObject;
        classObject.name = aName;
        classObject.info = CLS_CLASS;
        classObject._UID = objj_generateObjectUID();
        classObject.init = true;
        metaClassObject.isa = rootClassObject.isa;
        metaClassObject.name = aName;
        metaClassObject.info = CLS_META;
        metaClassObject._UID = objj_generateObjectUID();
        metaClassObject.init = true;
        return classObject;
    }
    var CONTEXT_BUNDLE = nil;
    objj_registerClassPair = function (aClass) {
        global[aClass.name] = aClass;
        REGISTERED_CLASSES[aClass.name] = aClass;
    }
    objj_resetRegisterClasses = function () {
        for (var key in REGISTERED_CLASSES)
            delete global[key];
        REGISTERED_CLASSES = Object.create(null);
        REGISTERED_PROTOCOLS = Object.create(null);
        REGISTERED_TYPEDEFS = Object.create(null);
        resetBundle();
    }
    class_createInstance = function (aClass) {
        if (!aClass)
            throw new Error("*** Attempting to create object with Nil class.");
        var object = new aClass.allocator();
        object.isa = aClass;
        object._UID = objj_generateObjectUID();
        return object;
    }
    var prototype_bug = function () { }
    prototype_bug.prototype.member = false;
    with (new prototype_bug())
    member = true;
    if (new prototype_bug().member) {
        var fast_class_createInstance = class_createInstance;
        class_createInstance = function (aClass) {
            var object = fast_class_createInstance(aClass);
            if (object) {
                var theClass = object.isa,
                    actualClass = theClass;
                while (theClass) {
                    var ivars = theClass.ivar_list,
                        count = ivars.length;
                    while (count--)
                        object[ivars[count].name] = NULL;
                    theClass = theClass.super_class;
                }
                object.isa = actualClass;
            }
            return object;
        }
    }
    object_getClassName = function (anObject) {
        if (!anObject)
            return "";
        var theClass = anObject.isa;
        return theClass ? class_getName(theClass) : "";
    }
    objj_lookUpClass = function (aName) {
        var theClass = REGISTERED_CLASSES[aName];
        return theClass ? theClass : Nil;
    }
    objj_getClass = function (aName) {
        var theClass = REGISTERED_CLASSES[aName];
        if (!theClass) {
        }
        return theClass ? theClass : Nil;
    }
    objj_getClassList = function (buffer, bufferLen) {
        for (var aName in REGISTERED_CLASSES) {
            buffer.push(REGISTERED_CLASSES[aName]);
            if (bufferLen && --bufferLen === 0)
                break;
        }
        return buffer.length;
    }
    objj_getMetaClass = function (aName) {
        var theClass = objj_getClass(aName);
        return (((theClass.info & (CLS_META))) ? theClass : theClass.isa);
    }
    objj_getProtocol = function (aName) {
        return REGISTERED_PROTOCOLS[aName];
    }
    objj_getTypeDef = function (aName) {
        return REGISTERED_TYPEDEFS[aName];
    }
    ivar_getName = function (anIvar) {
        return anIvar.name;
    }
    ivar_getTypeEncoding = function (anIvar) {
        return anIvar.type;
    }
    objj_msgSend = function (aReceiver, aSelector) {
        if (aReceiver == nil)
            return aReceiver;
        var isa = aReceiver.isa;
        if (isa.init)
            _class_initialize(isa);
        var method = isa.method_dtable[aSelector];
        var implementation = method ? method.method_imp : _objj_forward;
        switch (arguments.length) {
            case 2: return implementation(aReceiver, aSelector);
            case 3: return implementation(aReceiver, aSelector, arguments[2]);
            case 4: return implementation(aReceiver, aSelector, arguments[2], arguments[3]);
            case 5: return implementation(aReceiver, aSelector, arguments[2], arguments[3], arguments[4]);
            case 6: return implementation(aReceiver, aSelector, arguments[2], arguments[3], arguments[4], arguments[5]);
            case 7: return implementation(aReceiver, aSelector, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
        }
        return implementation.apply(aReceiver, arguments);
    }
    objj_msgSendSuper = function (aSuper, aSelector) {
        var super_class = aSuper.super_class;
        arguments[0] = aSuper.receiver;
        if (!((((super_class.info & (CLS_META))) ? super_class : super_class.isa).info & (CLS_INITIALIZED))) _class_initialize(super_class); var implementation = super_class.method_dtable[aSelector] || _objj_forward;;
        return implementation.apply(aSuper.receiver, arguments);
    }
    objj_msgSendSuper0 = function (aSuper, aSelector) {
        return (aSuper.super_class.method_dtable[aSelector] || _objj_forward)(aSuper.receiver, aSelector);
    }
    objj_msgSendSuper1 = function (aSuper, aSelector, arg0) {
        return (aSuper.super_class.method_dtable[aSelector] || _objj_forward)(aSuper.receiver, aSelector, arg0);
    }
    objj_msgSendSuper2 = function (aSuper, aSelector, arg0, arg1) {
        return (aSuper.super_class.method_dtable[aSelector] || _objj_forward)(aSuper.receiver, aSelector, arg0, arg1);
    }
    objj_msgSendSuper3 = function (aSuper, aSelector, arg0, arg1, arg2) {
        return (aSuper.super_class.method_dtable[aSelector] || _objj_forward)(aSuper.receiver, aSelector, arg0, arg1, arg2);
    }
    objj_msgSendFast = function (aReceiver, aSelector) {
        return (this.method_dtable[aSelector] || _objj_forward).apply(aReceiver, arguments);
    }
    var objj_msgSendFastInitialize = function (aReceiver, aSelector) {
        _class_initialize(this);
        return this.objj_msgSend.apply(this, arguments);
    }
    objj_msgSendFast0 = function (aReceiver, aSelector) {
        return (this.method_dtable[aSelector] || _objj_forward)(aReceiver, aSelector);
    }
    var objj_msgSendFast0Initialize = function (aReceiver, aSelector) {
        _class_initialize(this);
        return this.objj_msgSend0(aReceiver, aSelector);
    }
    objj_msgSendFast1 = function (aReceiver, aSelector, arg0) {
        return (this.method_dtable[aSelector] || _objj_forward)(aReceiver, aSelector, arg0);
    }
    var objj_msgSendFast1Initialize = function (aReceiver, aSelector, arg0) {
        _class_initialize(this);
        return this.objj_msgSend1(aReceiver, aSelector, arg0);
    }
    objj_msgSendFast2 = function (aReceiver, aSelector, arg0, arg1) {
        return (this.method_dtable[aSelector] || _objj_forward)(aReceiver, aSelector, arg0, arg1);
    }
    var objj_msgSendFast2Initialize = function (aReceiver, aSelector, arg0, arg1) {
        _class_initialize(this);
        return this.objj_msgSend2(aReceiver, aSelector, arg0, arg1);
    }
    objj_msgSendFast3 = function (aReceiver, aSelector, arg0, arg1, arg2) {
        return (this.method_dtable[aSelector] || _objj_forward)(aReceiver, aSelector, arg0, arg1, arg2);
    }
    var objj_msgSendFast3Initialize = function (aReceiver, aSelector, arg0, arg1, arg2) {
        _class_initialize(this);
        return this.objj_msgSend3(aReceiver, aSelector, arg0, arg1, arg2);
    }
    method_getName = function (aMethod) {
        return aMethod.method_name;
    }
    method_copyReturnType = function (aMethod) {
        var types = aMethod.method_types;
        if (types) {
            var argType = types[0];
            return argType != NULL ? argType : NULL;
        }
        else
            return NULL;
    }
    method_copyArgumentType = function (aMethod, index) {
        switch (index) {
            case 0:
                return "id";
            case 1:
                return "SEL";
            default:
                var types = aMethod.method_types;
                if (types) {
                    var argType = types[index - 1];
                    return argType != NULL ? argType : NULL;
                }
                else
                    return NULL;
        }
    }
    method_getNumberOfArguments = function (aMethod) {
        var types = aMethod.method_types;
        return types ? types.length + 1 : ((aMethod.method_name.match(/:/g) || []).length + 2);
    }
    method_getImplementation = function (aMethod) {
        return aMethod.method_imp;
    }
    method_setImplementation = function (aMethod, anImplementation) {
        var oldImplementation = aMethod.method_imp;
        aMethod.method_imp = anImplementation;
        return oldImplementation;
    }
    method_exchangeImplementations = function (lhs, rhs) {
        var lhs_imp = method_getImplementation(lhs),
            rhs_imp = method_getImplementation(rhs);
        method_setImplementation(lhs, rhs_imp);
        method_setImplementation(rhs, lhs_imp);
    }
    sel_getName = function (aSelector) {
        return aSelector ? aSelector : "<null selector>";
    }
    sel_getUid = function (aName) {
        return aName;
    }
    sel_isEqual = function (lhs, rhs) {
        return lhs === rhs;
    }
    sel_registerName = function (aName) {
        return aName;
    }
    objj_class.prototype.toString = objj_object.prototype.toString = function () {
        var isa = this.isa;
        if (class_getInstanceMethod(isa, SEL_description))
            return isa.objj_msgSend0(this, SEL_description);
        if (class_isMetaClass(isa))
            return this.name;
        return "[" + isa.name + " Object](-description not implemented)";
    }
    objj_class.prototype.objj_msgSend = objj_msgSendFastInitialize;
    objj_class.prototype.objj_msgSend0 = objj_msgSendFast0Initialize;
    objj_class.prototype.objj_msgSend1 = objj_msgSendFast1Initialize;
    objj_class.prototype.objj_msgSend2 = objj_msgSendFast2Initialize;
    objj_class.prototype.objj_msgSend3 = objj_msgSendFast3Initialize;
    objj_class.prototype.method_msgSend = Object.create(null);
    var SEL_description = sel_getUid("description"),
        SEL_forwardingTargetForSelector_ = sel_getUid("forwardingTargetForSelector:"),
        SEL_methodSignatureForSelector_ = sel_getUid("methodSignatureForSelector:"),
        SEL_forwardInvocation_ = sel_getUid("forwardInvocation:"),
        SEL_doesNotRecognizeSelector_ = sel_getUid("doesNotRecognizeSelector:"),
        SEL_invocationWithMethodSignature_ = sel_getUid("invocationWithMethodSignature:"),
        SEL_setTarget_ = sel_getUid("setTarget:"),
        SEL_setSelector_ = sel_getUid("setSelector:"),
        SEL_setArgument_atIndex_ = sel_getUid("setArgument:atIndex:"),
        SEL_returnValue = sel_getUid("returnValue");

    objj_styleInject = function (css) {
        if (!css) return;

        if (typeof window == 'undefined') return;
        var style = document.createElement('style');
        style.setAttribute('media', 'screen');

        style.innerHTML = css;
        document.head.appendChild(style);
        return css;
    };


})(typeof window === "undefined" ? global : window, ObjectiveJ);

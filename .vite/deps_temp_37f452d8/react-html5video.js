import {
  require_react_dom
} from "./chunk-SRAQOA3L.js";
import {
  __commonJS,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-html5video/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-html5video/dist/index.js"(exports, module) {
    module.exports = /******/
    function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
          return installedModules[moduleId].exports;
        var module2 = installedModules[moduleId] = {
          /******/
          exports: {},
          /******/
          id: moduleId,
          /******/
          loaded: false
          /******/
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.loaded = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.p = "";
      return __webpack_require__(0);
    }([
      /* 0 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(1);
      },
      /* 1 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.Overlay = exports2.Fullscreen = exports2.PlayPause = exports2.Captions = exports2.Volume = exports2.Seek = exports2.Time = exports2.DefaultPlayer = exports2.apiHelpers = exports2.default = void 0;
        var _video = __webpack_require__(2);
        var _video2 = _interopRequireDefault(_video);
        var _api = __webpack_require__(96);
        var apiHelpers = _interopRequireWildcard(_api);
        var _DefaultPlayer = __webpack_require__(107);
        var _DefaultPlayer2 = _interopRequireDefault(_DefaultPlayer);
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = _video2.default;
        exports2.apiHelpers = apiHelpers;
        exports2.DefaultPlayer = _DefaultPlayer2.default;
        exports2.Time = _DefaultPlayer.Time;
        exports2.Seek = _DefaultPlayer.Seek;
        exports2.Volume = _DefaultPlayer.Volume;
        exports2.Captions = _DefaultPlayer.Captions;
        exports2.PlayPause = _DefaultPlayer.PlayPause;
        exports2.Fullscreen = _DefaultPlayer.Fullscreen;
        exports2.Overlay = _DefaultPlayer.Overlay;
      },
      /* 2 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _assign = __webpack_require__(89);
        var _assign2 = _interopRequireDefault(_assign);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _reactDom = __webpack_require__(94);
        var _constants = __webpack_require__(95);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var defaultMapStateToProps = function defaultMapStateToProps2() {
          var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return (0, _assign2.default)({
            video: (0, _extends3.default)({}, state)
          });
        };
        var defaultMapVideoElToProps = function defaultMapVideoElToProps2(videoEl) {
          return {
            videoEl
          };
        };
        var defaultMergeProps = function defaultMergeProps2() {
          var stateProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var videoElProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var ownProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return (0, _assign2.default)({}, stateProps, videoElProps, ownProps);
        };
        exports2.default = function(BaseComponent) {
          var mapStateToProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultMapStateToProps;
          var mapVideoElToProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultMapVideoElToProps;
          var mergeProps = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : defaultMergeProps;
          return function(_Component) {
            (0, _inherits3.default)(Video, _Component);
            function Video(props) {
              (0, _classCallCheck3.default)(this, Video);
              var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));
              _this.updateState = _this.updateState.bind(_this);
              _this.state = {};
              return _this;
            }
            (0, _createClass3.default)(Video, [{
              key: "updateState",
              value: function updateState() {
                var _this2 = this;
                this.setState(_constants.PROPERTIES.reduce(function(p, c) {
                  p[c] = _this2.videoEl && _this2.videoEl[c];
                  return p;
                }, {}));
              }
            }, {
              key: "bindEventsToUpdateState",
              value: function bindEventsToUpdateState() {
                var _this3 = this;
                _constants.EVENTS.forEach(function(event) {
                  _this3.videoEl.addEventListener(event.toLowerCase(), _this3.updateState);
                });
                _constants.TRACKEVENTS.forEach(function(event) {
                  _this3.videoEl.textTracks.addEventListener && _this3.videoEl.textTracks.addEventListener(event.toLowerCase(), _this3.updateState);
                });
                var sources = this.videoEl.getElementsByTagName("source");
                if (sources.length) {
                  var lastSource = sources[sources.length - 1];
                  lastSource.addEventListener("error", this.updateState);
                }
              }
            }, {
              key: "unbindEvents",
              value: function unbindEvents() {
                var _this4 = this;
                _constants.EVENTS.forEach(function(event) {
                  _this4.videoEl.removeEventListener(event.toLowerCase(), _this4.updateState);
                });
                _constants.TRACKEVENTS.forEach(function(event) {
                  _this4.videoEl.textTracks.removeEventListener && _this4.videoEl.textTracks.removeEventListener(event.toLowerCase(), _this4.updateState);
                });
                var sources = this.videoEl.getElementsByTagName("source");
                if (sources.length) {
                  var lastSource = sources[sources.length - 1];
                  lastSource.removeEventListener("error", this.updateState);
                }
              }
            }, {
              key: "componentWillUnmount",
              value: function componentWillUnmount() {
                this.unbindEvents();
              }
              // Stop `this.el` from being null briefly on every render,
              // see: https://github.com/mderrick/react-html5video/pull/65
            }, {
              key: "setRef",
              value: function setRef(el) {
                this.el = (0, _reactDom.findDOMNode)(el);
              }
            }, {
              key: "componentDidMount",
              value: function componentDidMount() {
                this.videoEl = this.el.getElementsByTagName("video")[0];
                this.bindEventsToUpdateState();
              }
            }, {
              key: "render",
              value: function render() {
                var stateProps = mapStateToProps(this.state, this.props);
                var videoElProps = mapVideoElToProps(this.videoEl, this.state, this.props);
                return _react2.default.createElement(
                  "div",
                  { ref: this.setRef.bind(this) },
                  _react2.default.createElement(BaseComponent, mergeProps(stateProps, videoElProps, this.props))
                );
              }
            }]);
            return Video;
          }(_react.Component);
        };
      },
      /* 3 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(4), __esModule: true };
      },
      /* 4 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(5);
        module2.exports = __webpack_require__(16).Object.getPrototypeOf;
      },
      /* 5 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var toObject = __webpack_require__(6);
        var $getPrototypeOf = __webpack_require__(8);
        __webpack_require__(14)("getPrototypeOf", function() {
          return function getPrototypeOf(it) {
            return $getPrototypeOf(toObject(it));
          };
        });
      },
      /* 6 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var defined = __webpack_require__(7);
        module2.exports = function(it) {
          return Object(defined(it));
        };
      },
      /* 7 */
      /***/
      function(module2, exports2) {
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError("Can't call method on  " + it);
          return it;
        };
      },
      /* 8 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__(9);
        var toObject = __webpack_require__(6);
        var IE_PROTO = __webpack_require__(10)("IE_PROTO");
        var ObjectProto = Object.prototype;
        module2.exports = Object.getPrototypeOf || function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO))
            return O[IE_PROTO];
          if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectProto : null;
        };
      },
      /* 9 */
      /***/
      function(module2, exports2) {
        var hasOwnProperty = {}.hasOwnProperty;
        module2.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
      },
      /* 10 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var shared = __webpack_require__(11)("keys");
        var uid = __webpack_require__(13);
        module2.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };
      },
      /* 11 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__(12);
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});
        module2.exports = function(key) {
          return store[key] || (store[key] = {});
        };
      },
      /* 12 */
      /***/
      function(module2, exports2) {
        var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number")
          __g = global;
      },
      /* 13 */
      /***/
      function(module2, exports2) {
        var id = 0;
        var px = Math.random();
        module2.exports = function(key) {
          return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
        };
      },
      /* 14 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(15);
        var core = __webpack_require__(16);
        var fails = __webpack_require__(25);
        module2.exports = function(KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export($export.S + $export.F * fails(function() {
            fn(1);
          }), "Object", exp);
        };
      },
      /* 15 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__(12);
        var core = __webpack_require__(16);
        var ctx = __webpack_require__(17);
        var hide = __webpack_require__(19);
        var PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports3[PROTOTYPE];
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL)
            source = name;
          for (key in source) {
            own = !IS_FORCED && target && target[key] !== void 0;
            if (own && key in exports3)
              continue;
            out = own ? target[key] : source[key];
            exports3[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
              var F = function(a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C();
                    case 1:
                      return new C(a);
                    case 2:
                      return new C(a, b);
                  }
                  return new C(a, b, c);
                }
                return C.apply(this, arguments);
              };
              F[PROTOTYPE] = C[PROTOTYPE];
              return F;
            }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
            if (IS_PROTO) {
              (exports3.virtual || (exports3.virtual = {}))[key] = out;
              if (type & $export.R && expProto && !expProto[key])
                hide(expProto, key, out);
            }
          }
        };
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        module2.exports = $export;
      },
      /* 16 */
      /***/
      function(module2, exports2) {
        var core = module2.exports = { version: "2.5.1" };
        if (typeof __e == "number")
          __e = core;
      },
      /* 17 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__(18);
        module2.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === void 0)
            return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
      },
      /* 18 */
      /***/
      function(module2, exports2) {
        module2.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };
      },
      /* 19 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__(20);
        var createDesc = __webpack_require__(28);
        module2.exports = __webpack_require__(24) ? function(object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      },
      /* 20 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(21);
        var IE8_DOM_DEFINE = __webpack_require__(23);
        var toPrimitive = __webpack_require__(27);
        var dP = Object.defineProperty;
        exports2.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return dP(O, P, Attributes);
            } catch (e) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError("Accessors not supported!");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      },
      /* 21 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(22);
        module2.exports = function(it) {
          if (!isObject(it))
            throw TypeError(it + " is not an object!");
          return it;
        };
      },
      /* 22 */
      /***/
      function(module2, exports2) {
        module2.exports = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
      },
      /* 23 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = !__webpack_require__(24) && !__webpack_require__(25)(function() {
          return Object.defineProperty(__webpack_require__(26)("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      /* 24 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = !__webpack_require__(25)(function() {
          return Object.defineProperty({}, "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      /* 25 */
      /***/
      function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
      },
      /* 26 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(22);
        var document2 = __webpack_require__(12).document;
        var is = isObject(document2) && isObject(document2.createElement);
        module2.exports = function(it) {
          return is ? document2.createElement(it) : {};
        };
      },
      /* 27 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(22);
        module2.exports = function(it, S) {
          if (!isObject(it))
            return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
            return val;
          if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
            return val;
          if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      /* 28 */
      /***/
      function(module2, exports2) {
        module2.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      },
      /* 29 */
      /***/
      function(module2, exports2) {
        "use strict";
        exports2.__esModule = true;
        exports2.default = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };
      },
      /* 30 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        exports2.__esModule = true;
        var _defineProperty = __webpack_require__(31);
        var _defineProperty2 = _interopRequireDefault(_defineProperty);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              (0, _defineProperty2.default)(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
      },
      /* 31 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(32), __esModule: true };
      },
      /* 32 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(33);
        var $Object = __webpack_require__(16).Object;
        module2.exports = function defineProperty(it, key, desc) {
          return $Object.defineProperty(it, key, desc);
        };
      },
      /* 33 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(15);
        $export($export.S + $export.F * !__webpack_require__(24), "Object", { defineProperty: __webpack_require__(20).f });
      },
      /* 34 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        exports2.__esModule = true;
        var _typeof2 = __webpack_require__(35);
        var _typeof3 = _interopRequireDefault(_typeof2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self2;
        };
      },
      /* 35 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        exports2.__esModule = true;
        var _iterator = __webpack_require__(36);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _symbol = __webpack_require__(65);
        var _symbol2 = _interopRequireDefault(_symbol);
        var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
        };
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
          return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        } : function(obj) {
          return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };
      },
      /* 36 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(37), __esModule: true };
      },
      /* 37 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(38);
        __webpack_require__(60);
        module2.exports = __webpack_require__(64).f("iterator");
      },
      /* 38 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__(39)(true);
        __webpack_require__(41)(String, "String", function(iterated) {
          this._t = String(iterated);
          this._i = 0;
        }, function() {
          var O = this._t;
          var index = this._i;
          var point;
          if (index >= O.length)
            return { value: void 0, done: true };
          point = $at(O, index);
          this._i += point.length;
          return { value: point, done: false };
        });
      },
      /* 39 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(40);
        var defined = __webpack_require__(7);
        module2.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l)
              return TO_STRING ? "" : void 0;
            a = s.charCodeAt(i);
            return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
          };
        };
      },
      /* 40 */
      /***/
      function(module2, exports2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
      },
      /* 41 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__(42);
        var $export = __webpack_require__(15);
        var redefine = __webpack_require__(43);
        var hide = __webpack_require__(19);
        var has = __webpack_require__(9);
        var Iterators = __webpack_require__(44);
        var $iterCreate = __webpack_require__(45);
        var setToStringTag = __webpack_require__(58);
        var getPrototypeOf = __webpack_require__(8);
        var ITERATOR = __webpack_require__(59)("iterator");
        var BUGGY = !([].keys && "next" in [].keys());
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto)
              return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + " Iterator";
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
          var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              setToStringTag(IteratorPrototype, TAG, true);
              if (!LIBRARY && !has(IteratorPrototype, ITERATOR))
                hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED)
              for (key in methods) {
                if (!(key in proto))
                  redefine(proto, key, methods[key]);
              }
            else
              $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }
          return methods;
        };
      },
      /* 42 */
      /***/
      function(module2, exports2) {
        module2.exports = true;
      },
      /* 43 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(19);
      },
      /* 44 */
      /***/
      function(module2, exports2) {
        module2.exports = {};
      },
      /* 45 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(46);
        var descriptor = __webpack_require__(28);
        var setToStringTag = __webpack_require__(58);
        var IteratorPrototype = {};
        __webpack_require__(19)(IteratorPrototype, __webpack_require__(59)("iterator"), function() {
          return this;
        });
        module2.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
          setToStringTag(Constructor, NAME + " Iterator");
        };
      },
      /* 46 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(21);
        var dPs = __webpack_require__(47);
        var enumBugKeys = __webpack_require__(56);
        var IE_PROTO = __webpack_require__(10)("IE_PROTO");
        var Empty = function() {
        };
        var PROTOTYPE = "prototype";
        var createDict = function() {
          var iframe = __webpack_require__(26)("iframe");
          var i = enumBugKeys.length;
          var lt = "<";
          var gt = ">";
          var iframeDocument;
          iframe.style.display = "none";
          __webpack_require__(57).appendChild(iframe);
          iframe.src = "javascript:";
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--)
            delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = createDict();
          return Properties === void 0 ? result : dPs(result, Properties);
        };
      },
      /* 47 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var dP = __webpack_require__(20);
        var anObject = __webpack_require__(21);
        var getKeys = __webpack_require__(48);
        module2.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i = 0;
          var P;
          while (length > i)
            dP.f(O, P = keys[i++], Properties[P]);
          return O;
        };
      },
      /* 48 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $keys = __webpack_require__(49);
        var enumBugKeys = __webpack_require__(56);
        module2.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };
      },
      /* 49 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__(9);
        var toIObject = __webpack_require__(50);
        var arrayIndexOf = __webpack_require__(53)(false);
        var IE_PROTO = __webpack_require__(10)("IE_PROTO");
        module2.exports = function(object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            if (key != IE_PROTO)
              has(O, key) && result.push(key);
          while (names.length > i)
            if (has(O, key = names[i++])) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };
      },
      /* 50 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var IObject = __webpack_require__(51);
        var defined = __webpack_require__(7);
        module2.exports = function(it) {
          return IObject(defined(it));
        };
      },
      /* 51 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__(52);
        module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
          return cof(it) == "String" ? it.split("") : Object(it);
        };
      },
      /* 52 */
      /***/
      function(module2, exports2) {
        var toString = {}.toString;
        module2.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };
      },
      /* 53 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__(50);
        var toLength = __webpack_require__(54);
        var toAbsoluteIndex = __webpack_require__(55);
        module2.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el)
                    return IS_INCLUDES || index || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };
      },
      /* 54 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(40);
        var min = Math.min;
        module2.exports = function(it) {
          return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
      },
      /* 55 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(40);
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };
      },
      /* 56 */
      /***/
      function(module2, exports2) {
        module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      /* 57 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var document2 = __webpack_require__(12).document;
        module2.exports = document2 && document2.documentElement;
      },
      /* 58 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var def = __webpack_require__(20).f;
        var has = __webpack_require__(9);
        var TAG = __webpack_require__(59)("toStringTag");
        module2.exports = function(it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG))
            def(it, TAG, { configurable: true, value: tag });
        };
      },
      /* 59 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var store = __webpack_require__(11)("wks");
        var uid = __webpack_require__(13);
        var Symbol2 = __webpack_require__(12).Symbol;
        var USE_SYMBOL = typeof Symbol2 == "function";
        var $exports = module2.exports = function(name) {
          return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
        };
        $exports.store = store;
      },
      /* 60 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(61);
        var global = __webpack_require__(12);
        var hide = __webpack_require__(19);
        var Iterators = __webpack_require__(44);
        var TO_STRING_TAG = __webpack_require__(59)("toStringTag");
        var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
        for (var i = 0; i < DOMIterables.length; i++) {
          var NAME = DOMIterables[i];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          if (proto && !proto[TO_STRING_TAG])
            hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = Iterators.Array;
        }
      },
      /* 61 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__(62);
        var step = __webpack_require__(63);
        var Iterators = __webpack_require__(44);
        var toIObject = __webpack_require__(50);
        module2.exports = __webpack_require__(41)(Array, "Array", function(iterated, kind) {
          this._t = toIObject(iterated);
          this._i = 0;
          this._k = kind;
        }, function() {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;
          if (!O || index >= O.length) {
            this._t = void 0;
            return step(1);
          }
          if (kind == "keys")
            return step(0, index);
          if (kind == "values")
            return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      },
      /* 62 */
      /***/
      function(module2, exports2) {
        module2.exports = function() {
        };
      },
      /* 63 */
      /***/
      function(module2, exports2) {
        module2.exports = function(done, value) {
          return { value, done: !!done };
        };
      },
      /* 64 */
      /***/
      function(module2, exports2, __webpack_require__) {
        exports2.f = __webpack_require__(59);
      },
      /* 65 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(66), __esModule: true };
      },
      /* 66 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(67);
        __webpack_require__(77);
        __webpack_require__(78);
        __webpack_require__(79);
        module2.exports = __webpack_require__(16).Symbol;
      },
      /* 67 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var global = __webpack_require__(12);
        var has = __webpack_require__(9);
        var DESCRIPTORS = __webpack_require__(24);
        var $export = __webpack_require__(15);
        var redefine = __webpack_require__(43);
        var META = __webpack_require__(68).KEY;
        var $fails = __webpack_require__(25);
        var shared = __webpack_require__(11);
        var setToStringTag = __webpack_require__(58);
        var uid = __webpack_require__(13);
        var wks = __webpack_require__(59);
        var wksExt = __webpack_require__(64);
        var wksDefine = __webpack_require__(69);
        var enumKeys = __webpack_require__(70);
        var isArray = __webpack_require__(73);
        var anObject = __webpack_require__(21);
        var toIObject = __webpack_require__(50);
        var toPrimitive = __webpack_require__(27);
        var createDesc = __webpack_require__(28);
        var _create = __webpack_require__(46);
        var gOPNExt = __webpack_require__(74);
        var $GOPD = __webpack_require__(76);
        var $DP = __webpack_require__(20);
        var $keys = __webpack_require__(48);
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = "prototype";
        var HIDDEN = wks("_hidden");
        var TO_PRIMITIVE = wks("toPrimitive");
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared("symbol-registry");
        var AllSymbols = shared("symbols");
        var OPSymbols = shared("op-symbols");
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == "function";
        var QObject = global.QObject;
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
          return _create(dP({}, "a", {
            get: function() {
              return dP(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(it, key, D) {
          var protoDesc = gOPD(ObjectProto, key);
          if (protoDesc)
            delete ObjectProto[key];
          dP(it, key, D);
          if (protoDesc && it !== ObjectProto)
            dP(ObjectProto, key, protoDesc);
        } : dP;
        var wrap = function(tag) {
          var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
          sym._k = tag;
          return sym;
        };
        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return it instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(it, key, D) {
          if (it === ObjectProto)
            $defineProperty(OPSymbols, key, D);
          anObject(it);
          key = toPrimitive(key, true);
          anObject(D);
          if (has(AllSymbols, key)) {
            if (!D.enumerable) {
              if (!has(it, HIDDEN))
                dP(it, HIDDEN, createDesc(1, {}));
              it[HIDDEN][key] = true;
            } else {
              if (has(it, HIDDEN) && it[HIDDEN][key])
                it[HIDDEN][key] = false;
              D = _create(D, { enumerable: createDesc(0, false) });
            }
            return setSymbolDesc(it, key, D);
          }
          return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
          anObject(it);
          var keys = enumKeys(P = toIObject(P));
          var i = 0;
          var l = keys.length;
          var key;
          while (l > i)
            $defineProperty(it, key = keys[i++], P[key]);
          return it;
        };
        var $create = function create(it, P) {
          return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
          var E = isEnum.call(this, key = toPrimitive(key, true));
          if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
            return false;
          return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
          it = toIObject(it);
          key = toPrimitive(key, true);
          if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
            return;
          var D = gOPD(it, key);
          if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
            D.enumerable = true;
          return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
          var names = gOPN(toIObject(it));
          var result = [];
          var i = 0;
          var key;
          while (names.length > i) {
            if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
              result.push(key);
          }
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
          var IS_OP = it === ObjectProto;
          var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
          var result = [];
          var i = 0;
          var key;
          while (names.length > i) {
            if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
              result.push(AllSymbols[key]);
          }
          return result;
        };
        if (!USE_NATIVE) {
          $Symbol = function Symbol2() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
            var $set = function(value) {
              if (this === ObjectProto)
                $set.call(OPSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDesc(this, tag, createDesc(1, value));
            };
            if (DESCRIPTORS && setter)
              setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
            return wrap(tag);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return this._k;
          });
          $GOPD.f = $getOwnPropertyDescriptor;
          $DP.f = $defineProperty;
          __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
          __webpack_require__(72).f = $propertyIsEnumerable;
          __webpack_require__(71).f = $getOwnPropertySymbols;
          if (DESCRIPTORS && !__webpack_require__(42)) {
            redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
          }
          wksExt.f = function(name) {
            return wrap(wks(name));
          };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
        for (var es6Symbols = (
          // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
          "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
        ), j = 0; es6Symbols.length > j; )
          wks(es6Symbols[j++]);
        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
          wksDefine(wellKnownSymbols[k++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
          // 19.4.2.1 Symbol.for(key)
          "for": function(key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
          },
          // 19.4.2.5 Symbol.keyFor(sym)
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym))
              throw TypeError(sym + " is not a symbol!");
            for (var key in SymbolRegistry)
              if (SymbolRegistry[key] === sym)
                return key;
          },
          useSetter: function() {
            setter = true;
          },
          useSimple: function() {
            setter = false;
          }
        });
        $export($export.S + $export.F * !USE_NATIVE, "Object", {
          // 19.1.2.2 Object.create(O [, Properties])
          create: $create,
          // 19.1.2.4 Object.defineProperty(O, P, Attributes)
          defineProperty: $defineProperty,
          // 19.1.2.3 Object.defineProperties(O, Properties)
          defineProperties: $defineProperties,
          // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
          // 19.1.2.7 Object.getOwnPropertyNames(O)
          getOwnPropertyNames: $getOwnPropertyNames,
          // 19.1.2.8 Object.getOwnPropertySymbols(O)
          getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
          var S = $Symbol();
          return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
        })), "JSON", {
          stringify: function stringify(it) {
            if (it === void 0 || isSymbol(it))
              return;
            var args = [it];
            var i = 1;
            var replacer, $replacer;
            while (arguments.length > i)
              args.push(arguments[i++]);
            replacer = args[1];
            if (typeof replacer == "function")
              $replacer = replacer;
            if ($replacer || !isArray(replacer))
              replacer = function(key, value) {
                if ($replacer)
                  value = $replacer.call(this, key, value);
                if (!isSymbol(value))
                  return value;
              };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
          }
        });
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        setToStringTag($Symbol, "Symbol");
        setToStringTag(Math, "Math", true);
        setToStringTag(global.JSON, "JSON", true);
      },
      /* 68 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var META = __webpack_require__(13)("meta");
        var isObject = __webpack_require__(22);
        var has = __webpack_require__(9);
        var setDesc = __webpack_require__(20).f;
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
          return true;
        };
        var FREEZE = !__webpack_require__(25)(function() {
          return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
          setDesc(it, META, { value: {
            i: "O" + ++id,
            // object ID
            w: {}
            // weak collections IDs
          } });
        };
        var fastKey = function(it, create) {
          if (!isObject(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, META)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMeta(it);
          }
          return it[META].i;
        };
        var getWeak = function(it, create) {
          if (!has(it, META)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMeta(it);
          }
          return it[META].w;
        };
        var onFreeze = function(it) {
          if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
            setMeta(it);
          return it;
        };
        var meta = module2.exports = {
          KEY: META,
          NEED: false,
          fastKey,
          getWeak,
          onFreeze
        };
      },
      /* 69 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var global = __webpack_require__(12);
        var core = __webpack_require__(16);
        var LIBRARY = __webpack_require__(42);
        var wksExt = __webpack_require__(64);
        var defineProperty = __webpack_require__(20).f;
        module2.exports = function(name) {
          var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
          if (name.charAt(0) != "_" && !(name in $Symbol))
            defineProperty($Symbol, name, { value: wksExt.f(name) });
        };
      },
      /* 70 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var getKeys = __webpack_require__(48);
        var gOPS = __webpack_require__(71);
        var pIE = __webpack_require__(72);
        module2.exports = function(it) {
          var result = getKeys(it);
          var getSymbols = gOPS.f;
          if (getSymbols) {
            var symbols = getSymbols(it);
            var isEnum = pIE.f;
            var i = 0;
            var key;
            while (symbols.length > i)
              if (isEnum.call(it, key = symbols[i++]))
                result.push(key);
          }
          return result;
        };
      },
      /* 71 */
      /***/
      function(module2, exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      },
      /* 72 */
      /***/
      function(module2, exports2) {
        exports2.f = {}.propertyIsEnumerable;
      },
      /* 73 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__(52);
        module2.exports = Array.isArray || function isArray(arg) {
          return cof(arg) == "Array";
        };
      },
      /* 74 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var toIObject = __webpack_require__(50);
        var gOPN = __webpack_require__(75).f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return gOPN(it);
          } catch (e) {
            return windowNames.slice();
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
        };
      },
      /* 75 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $keys = __webpack_require__(49);
        var hiddenKeys = __webpack_require__(56).concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };
      },
      /* 76 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var pIE = __webpack_require__(72);
        var createDesc = __webpack_require__(28);
        var toIObject = __webpack_require__(50);
        var toPrimitive = __webpack_require__(27);
        var has = __webpack_require__(9);
        var IE8_DOM_DEFINE = __webpack_require__(23);
        var gOPD = Object.getOwnPropertyDescriptor;
        exports2.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P) {
          O = toIObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE)
            try {
              return gOPD(O, P);
            } catch (e) {
            }
          if (has(O, P))
            return createDesc(!pIE.f.call(O, P), O[P]);
        };
      },
      /* 77 */
      /***/
      function(module2, exports2) {
      },
      /* 78 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(69)("asyncIterator");
      },
      /* 79 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(69)("observable");
      },
      /* 80 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        exports2.__esModule = true;
        var _setPrototypeOf = __webpack_require__(81);
        var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
        var _create = __webpack_require__(85);
        var _create2 = _interopRequireDefault(_create);
        var _typeof2 = __webpack_require__(35);
        var _typeof3 = _interopRequireDefault(_typeof2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
          }
          subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass)
            _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
        };
      },
      /* 81 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(82), __esModule: true };
      },
      /* 82 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(83);
        module2.exports = __webpack_require__(16).Object.setPrototypeOf;
      },
      /* 83 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(15);
        $export($export.S, "Object", { setPrototypeOf: __webpack_require__(84).set });
      },
      /* 84 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(22);
        var anObject = __webpack_require__(21);
        var check = function(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null)
            throw TypeError(proto + ": can't set as prototype!");
        };
        module2.exports = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? (
            // eslint-disable-line
            function(test, buggy, set) {
              try {
                set = __webpack_require__(17)(Function.call, __webpack_require__(76).f(Object.prototype, "__proto__").set, 2);
                set(test, []);
                buggy = !(test instanceof Array);
              } catch (e) {
                buggy = true;
              }
              return function setPrototypeOf(O, proto) {
                check(O, proto);
                if (buggy)
                  O.__proto__ = proto;
                else
                  set(O, proto);
                return O;
              };
            }({}, false)
          ) : void 0),
          check
        };
      },
      /* 85 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(86), __esModule: true };
      },
      /* 86 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(87);
        var $Object = __webpack_require__(16).Object;
        module2.exports = function create(P, D) {
          return $Object.create(P, D);
        };
      },
      /* 87 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(15);
        $export($export.S, "Object", { create: __webpack_require__(46) });
      },
      /* 88 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        exports2.__esModule = true;
        var _assign = __webpack_require__(89);
        var _assign2 = _interopRequireDefault(_assign);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = _assign2.default || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
      },
      /* 89 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(90), __esModule: true };
      },
      /* 90 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(91);
        module2.exports = __webpack_require__(16).Object.assign;
      },
      /* 91 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var $export = __webpack_require__(15);
        $export($export.S + $export.F, "Object", { assign: __webpack_require__(92) });
      },
      /* 92 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var getKeys = __webpack_require__(48);
        var gOPS = __webpack_require__(71);
        var pIE = __webpack_require__(72);
        var toObject = __webpack_require__(6);
        var IObject = __webpack_require__(51);
        var $assign = Object.assign;
        module2.exports = !$assign || __webpack_require__(25)(function() {
          var A = {};
          var B = {};
          var S = Symbol();
          var K = "abcdefghijklmnopqrst";
          A[S] = 7;
          K.split("").forEach(function(k) {
            B[k] = k;
          });
          return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
        }) ? function assign(target, source) {
          var T = toObject(target);
          var aLen = arguments.length;
          var index = 1;
          var getSymbols = gOPS.f;
          var isEnum = pIE.f;
          while (aLen > index) {
            var S = IObject(arguments[index++]);
            var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j)
              if (isEnum.call(S, key = keys[j++]))
                T[key] = S[key];
          }
          return T;
        } : $assign;
      },
      /* 93 */
      /***/
      function(module2, exports2) {
        module2.exports = require_react();
      },
      /* 94 */
      /***/
      function(module2, exports2) {
        module2.exports = require_react_dom();
      },
      /* 95 */
      /***/
      function(module2, exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var EVENTS = exports2.EVENTS = ["abort", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "loadedData", "loadedMetadata", "loadStart", "pause", "play", "playing", "progress", "rateChange", "seeked", "seeking", "stalled", "suspend", "timeUpdate", "volumeChange", "waiting"];
        var TRACKEVENTS = exports2.TRACKEVENTS = ["change", "addTrack", "removeTrack"];
        var METHODS = exports2.METHODS = ["addTextTrack", "canPlayType", "load", "play", "pause"];
        var PROPERTIES = exports2.PROPERTIES = ["audioTracks", "autoPlay", "buffered", "controller", "controls", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"];
      },
      /* 96 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.getPercentagePlayed = exports2.getPercentageBuffered = exports2.toggleTracks = exports2.hideTracks = exports2.showTrack = exports2.toggleFullscreen = exports2.toggleMute = exports2.unmute = exports2.mute = exports2.setVolume = exports2.setCurrentTime = exports2.togglePause = void 0;
        var _toConsumableArray2 = __webpack_require__(97);
        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var togglePause = exports2.togglePause = function togglePause2(videoEl, _ref) {
          var paused = _ref.paused;
          if (paused) {
            videoEl.play();
          } else {
            videoEl.pause();
          }
        };
        var setCurrentTime = exports2.setCurrentTime = function setCurrentTime2(videoEl, state, value) {
          videoEl.currentTime = value;
        };
        var setVolume = exports2.setVolume = function setVolume2(videoEl, state, value) {
          videoEl.muted = false;
          videoEl.volume = value;
        };
        var mute = exports2.mute = function mute2(videoEl) {
          videoEl.muted = true;
        };
        var unmute = exports2.unmute = function unmute2(videoEl) {
          videoEl.muted = false;
        };
        var toggleMute = exports2.toggleMute = function toggleMute2(videoEl, _ref2) {
          var volume = _ref2.volume, muted = _ref2.muted;
          if (muted || volume <= 0) {
            if (volume <= 0) {
              videoEl.volume = 1;
            }
            videoEl.muted = false;
          } else {
            videoEl.muted = true;
          }
        };
        var toggleFullscreen = exports2.toggleFullscreen = function toggleFullscreen2(videoEl) {
          videoEl.requestFullScreen = videoEl.requestFullscreen || videoEl.msRequestFullscreen || videoEl.mozRequestFullScreen || videoEl.webkitRequestFullscreen;
          document.exitFullscreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
          var fullscreenElement = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
          if (fullscreenElement === videoEl) {
            document.exitFullscreen();
          } else {
            videoEl.requestFullScreen();
          }
        };
        var showTrack = exports2.showTrack = function showTrack2(_ref3, track) {
          var textTracks = _ref3.textTracks;
          hideTracks({ textTracks });
          track.mode = track.SHOWING || "showing";
        };
        var hideTracks = exports2.hideTracks = function hideTracks2(_ref4) {
          var textTracks = _ref4.textTracks;
          for (var i = 0; i < textTracks.length; i++) {
            textTracks[i].mode = textTracks[i].DISABLED || "disabled";
          }
        };
        var toggleTracks = exports2.toggleTracks = function() {
          var previousTrack = void 0;
          return function(_ref5) {
            var textTracks = _ref5.textTracks;
            var currentTrack = [].concat((0, _toConsumableArray3.default)(textTracks)).filter(function(track) {
              return track.mode === track.SHOWING || track.mode === "showing";
            })[0];
            if (currentTrack) {
              hideTracks({ textTracks });
              previousTrack = currentTrack;
            } else {
              showTrack({ textTracks }, previousTrack || textTracks[0]);
            }
          };
        }();
        var getPercentageBuffered = exports2.getPercentageBuffered = function getPercentageBuffered2(_ref6) {
          var buffered = _ref6.buffered, duration = _ref6.duration;
          return buffered && buffered.length && buffered.end(buffered.length - 1) / duration * 100 || 0;
        };
        var getPercentagePlayed = exports2.getPercentagePlayed = function getPercentagePlayed2(_ref7) {
          var currentTime = _ref7.currentTime, duration = _ref7.duration;
          return currentTime / duration * 100;
        };
      },
      /* 97 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        exports2.__esModule = true;
        var _from = __webpack_require__(98);
        var _from2 = _interopRequireDefault(_from);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return (0, _from2.default)(arr);
          }
        };
      },
      /* 98 */
      /***/
      function(module2, exports2, __webpack_require__) {
        module2.exports = { "default": __webpack_require__(99), __esModule: true };
      },
      /* 99 */
      /***/
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(38);
        __webpack_require__(100);
        module2.exports = __webpack_require__(16).Array.from;
      },
      /* 100 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var ctx = __webpack_require__(17);
        var $export = __webpack_require__(15);
        var toObject = __webpack_require__(6);
        var call = __webpack_require__(101);
        var isArrayIter = __webpack_require__(102);
        var toLength = __webpack_require__(54);
        var createProperty = __webpack_require__(103);
        var getIterFn = __webpack_require__(104);
        $export($export.S + $export.F * !__webpack_require__(106)(function(iter) {
          Array.from(iter);
        }), "Array", {
          // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
          from: function from(arrayLike) {
            var O = toObject(arrayLike);
            var C = typeof this == "function" ? this : Array;
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : void 0;
            var mapping = mapfn !== void 0;
            var index = 0;
            var iterFn = getIterFn(O);
            var length, result, step, iterator;
            if (mapping)
              mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
            if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
              for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
              }
            } else {
              length = toLength(O.length);
              for (result = new C(length); length > index; index++) {
                createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
              }
            }
            result.length = index;
            return result;
          }
        });
      },
      /* 101 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(21);
        module2.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (e) {
            var ret = iterator["return"];
            if (ret !== void 0)
              anObject(ret.call(iterator));
            throw e;
          }
        };
      },
      /* 102 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var Iterators = __webpack_require__(44);
        var ITERATOR = __webpack_require__(59)("iterator");
        var ArrayProto = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };
      },
      /* 103 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var $defineProperty = __webpack_require__(20);
        var createDesc = __webpack_require__(28);
        module2.exports = function(object, index, value) {
          if (index in object)
            $defineProperty.f(object, index, createDesc(0, value));
          else
            object[index] = value;
        };
      },
      /* 104 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__(105);
        var ITERATOR = __webpack_require__(59)("iterator");
        var Iterators = __webpack_require__(44);
        module2.exports = __webpack_require__(16).getIteratorMethod = function(it) {
          if (it != void 0)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
      },
      /* 105 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var cof = __webpack_require__(52);
        var TAG = __webpack_require__(59)("toStringTag");
        var ARG = cof(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (e) {
          }
        };
        module2.exports = function(it) {
          var O, T, B;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
        };
      },
      /* 106 */
      /***/
      function(module2, exports2, __webpack_require__) {
        var ITERATOR = __webpack_require__(59)("iterator");
        var SAFE_CLOSING = false;
        try {
          var riter = [7][ITERATOR]();
          riter["return"] = function() {
            SAFE_CLOSING = true;
          };
          Array.from(riter, function() {
            throw 2;
          });
        } catch (e) {
        }
        module2.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING)
            return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function() {
              return { done: safe = true };
            };
            arr[ITERATOR] = function() {
              return iter;
            };
            exec(arr);
          } catch (e) {
          }
          return safe;
        };
      },
      /* 107 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.Overlay = exports2.Fullscreen = exports2.PlayPause = exports2.Captions = exports2.Volume = exports2.Seek = exports2.Time = exports2.DefaultPlayer = exports2.default = void 0;
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _objectWithoutProperties2 = __webpack_require__(108);
        var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _propTypes = __webpack_require__(109);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _video = __webpack_require__(2);
        var _video2 = _interopRequireDefault(_video);
        var _copy = __webpack_require__(110);
        var _copy2 = _interopRequireDefault(_copy);
        var _api = __webpack_require__(96);
        var _DefaultPlayer = __webpack_require__(111);
        var _DefaultPlayer2 = _interopRequireDefault(_DefaultPlayer);
        var _Time = __webpack_require__(115);
        var _Time2 = _interopRequireDefault(_Time);
        var _Seek = __webpack_require__(118);
        var _Seek2 = _interopRequireDefault(_Seek);
        var _Volume = __webpack_require__(121);
        var _Volume2 = _interopRequireDefault(_Volume);
        var _Captions = __webpack_require__(126);
        var _Captions2 = _interopRequireDefault(_Captions);
        var _PlayPause = __webpack_require__(130);
        var _PlayPause2 = _interopRequireDefault(_PlayPause);
        var _Fullscreen = __webpack_require__(135);
        var _Fullscreen2 = _interopRequireDefault(_Fullscreen);
        var _Overlay = __webpack_require__(139);
        var _Overlay2 = _interopRequireDefault(_Overlay);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var DefaultPlayer = function DefaultPlayer2(_ref) {
          var copy = _ref.copy, video = _ref.video, style = _ref.style, controls2 = _ref.controls, children = _ref.children, className = _ref.className, onSeekChange = _ref.onSeekChange, onVolumeChange = _ref.onVolumeChange, onVolumeClick = _ref.onVolumeClick, onCaptionsClick = _ref.onCaptionsClick, onPlayPauseClick = _ref.onPlayPauseClick, onFullscreenClick = _ref.onFullscreenClick, onCaptionsItemClick = _ref.onCaptionsItemClick, restProps = (0, _objectWithoutProperties3.default)(_ref, ["copy", "video", "style", "controls", "children", "className", "onSeekChange", "onVolumeChange", "onVolumeClick", "onCaptionsClick", "onPlayPauseClick", "onFullscreenClick", "onCaptionsItemClick"]);
          return _react2.default.createElement(
            "div",
            {
              className: [_DefaultPlayer2.default.component, className].join(" "),
              style
            },
            _react2.default.createElement(
              "video",
              (0, _extends3.default)({
                className: _DefaultPlayer2.default.video
              }, restProps),
              children
            ),
            _react2.default.createElement(_Overlay2.default, (0, _extends3.default)({
              onClick: onPlayPauseClick
            }, video)),
            controls2 && controls2.length && !video.error ? _react2.default.createElement(
              "div",
              { className: _DefaultPlayer2.default.controls },
              controls2.map(function(control, i) {
                switch (control) {
                  case "Seek":
                    return _react2.default.createElement(_Seek2.default, (0, _extends3.default)({
                      key: i,
                      ariaLabel: copy.seek,
                      className: _DefaultPlayer2.default.seek,
                      onChange: onSeekChange
                    }, video));
                  case "PlayPause":
                    return _react2.default.createElement(_PlayPause2.default, (0, _extends3.default)({
                      key: i,
                      ariaLabelPlay: copy.play,
                      ariaLabelPause: copy.pause,
                      onClick: onPlayPauseClick
                    }, video));
                  case "Fullscreen":
                    return _react2.default.createElement(_Fullscreen2.default, (0, _extends3.default)({
                      key: i,
                      ariaLabel: copy.fullscreen,
                      onClick: onFullscreenClick
                    }, video));
                  case "Time":
                    return _react2.default.createElement(_Time2.default, (0, _extends3.default)({
                      key: i
                    }, video));
                  case "Volume":
                    return _react2.default.createElement(_Volume2.default, (0, _extends3.default)({
                      key: i,
                      onClick: onVolumeClick,
                      onChange: onVolumeChange,
                      ariaLabelMute: copy.mute,
                      ariaLabelUnmute: copy.unmute,
                      ariaLabelVolume: copy.volume
                    }, video));
                  case "Captions":
                    return video.textTracks && video.textTracks.length ? _react2.default.createElement(_Captions2.default, (0, _extends3.default)({
                      key: i,
                      onClick: onCaptionsClick,
                      ariaLabel: copy.captions,
                      onItemClick: onCaptionsItemClick
                    }, video)) : null;
                  default:
                    return null;
                }
              })
            ) : null
          );
        };
        var controls = ["PlayPause", "Seek", "Time", "Volume", "Fullscreen", "Captions"];
        DefaultPlayer.defaultProps = {
          copy: _copy2.default,
          controls,
          video: {}
        };
        DefaultPlayer.propTypes = {
          copy: _propTypes2.default.object.isRequired,
          controls: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(controls)),
          video: _propTypes2.default.object.isRequired
        };
        var connectedPlayer = (0, _video2.default)(DefaultPlayer, function(_ref2) {
          var networkState = _ref2.networkState, readyState = _ref2.readyState, error = _ref2.error, restState = (0, _objectWithoutProperties3.default)(_ref2, ["networkState", "readyState", "error"]);
          return {
            video: (0, _extends3.default)({
              readyState,
              networkState,
              error: error || networkState === 3,
              // TODO: This is not pretty. Doing device detection to remove
              // spinner on iOS devices for a quick and dirty win. We should see if
              // we can use the same readyState check safely across all browsers.
              loading: readyState < (/iPad|iPhone|iPod/.test(navigator.userAgent) ? 1 : 4),
              percentagePlayed: (0, _api.getPercentagePlayed)(restState),
              percentageBuffered: (0, _api.getPercentageBuffered)(restState)
            }, restState)
          };
        }, function(videoEl, state) {
          return {
            onFullscreenClick: function onFullscreenClick() {
              return (0, _api.toggleFullscreen)(videoEl.parentElement);
            },
            onVolumeClick: function onVolumeClick() {
              return (0, _api.toggleMute)(videoEl, state);
            },
            onCaptionsClick: function onCaptionsClick() {
              return (0, _api.toggleTracks)(state);
            },
            onPlayPauseClick: function onPlayPauseClick() {
              return (0, _api.togglePause)(videoEl, state);
            },
            onCaptionsItemClick: function onCaptionsItemClick(track) {
              return (0, _api.showTrack)(state, track);
            },
            onVolumeChange: function onVolumeChange(e) {
              return (0, _api.setVolume)(videoEl, state, e.target.value);
            },
            onSeekChange: function onSeekChange(e) {
              return (0, _api.setCurrentTime)(videoEl, state, e.target.value * state.duration / 100);
            }
          };
        });
        exports2.default = connectedPlayer;
        exports2.DefaultPlayer = DefaultPlayer;
        exports2.Time = _Time2.default;
        exports2.Seek = _Seek2.default;
        exports2.Volume = _Volume2.default;
        exports2.Captions = _Captions2.default;
        exports2.PlayPause = _PlayPause2.default;
        exports2.Fullscreen = _Fullscreen2.default;
        exports2.Overlay = _Overlay2.default;
      },
      /* 108 */
      /***/
      function(module2, exports2) {
        "use strict";
        exports2.__esModule = true;
        exports2.default = function(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0)
              continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i))
              continue;
            target[i] = obj[i];
          }
          return target;
        };
      },
      /* 109 */
      /***/
      function(module2, exports2) {
        module2.exports = require_prop_types();
      },
      /* 110 */
      /***/
      function(module2, exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var copy = {
          play: "Play video",
          pause: "Pause video",
          mute: "Mute video",
          unmute: "Unmute video",
          volume: "Change volume",
          fullscreen: "View video fullscreen",
          seek: "Seek video",
          captions: "Toggle captions"
        };
        exports2.default = copy;
      },
      /* 111 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-DefaultPlayer_component", "video": "rh5v-DefaultPlayer_video", "controls": "rh5v-DefaultPlayer_controls", "seek": "rh5v-DefaultPlayer_seek" };
      },
      ,
      ,
      ,
      /* 115 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _Time = __webpack_require__(116);
        var _Time2 = _interopRequireDefault(_Time);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var formatTime = function formatTime2(seconds) {
          var date = new Date(Date.UTC(1970, 1, 1, 0, 0, 0, 0));
          seconds = isNaN(seconds) || seconds > 86400 ? 0 : Math.floor(seconds);
          date.setSeconds(seconds);
          var duration = date.toISOString().substr(11, 8).replace(/^0{1,2}:?0{0,1}/, "");
          return duration;
        };
        exports2.default = function(_ref) {
          var currentTime = _ref.currentTime, duration = _ref.duration, className = _ref.className;
          return _react2.default.createElement(
            "div",
            { className: [_Time2.default.component, className].join(" ") },
            _react2.default.createElement(
              "span",
              { className: _Time2.default.current },
              formatTime(currentTime)
            ),
            "/",
            _react2.default.createElement(
              "span",
              { className: _Time2.default.duration },
              formatTime(duration)
            )
          );
        };
      },
      /* 116 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-Time_component", "current": "rh5v-Time_current", "duration": "rh5v-Time_duration" };
      },
      ,
      /* 118 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _Seek = __webpack_require__(119);
        var _Seek2 = _interopRequireDefault(_Seek);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(_ref) {
          var onChange = _ref.onChange, percentagePlayed = _ref.percentagePlayed, percentageBuffered = _ref.percentageBuffered, className = _ref.className, ariaLabel = _ref.ariaLabel;
          return _react2.default.createElement(
            "div",
            { className: [_Seek2.default.component, className].join(" ") },
            _react2.default.createElement(
              "div",
              { className: _Seek2.default.track },
              _react2.default.createElement("div", {
                className: _Seek2.default.buffer,
                style: {
                  width: (percentageBuffered || 0) + "%"
                }
              }),
              _react2.default.createElement("div", {
                className: _Seek2.default.fill,
                style: {
                  width: (percentagePlayed || 0) + "%"
                }
              }),
              _react2.default.createElement("input", {
                min: "0",
                step: 1,
                max: "100",
                type: "range",
                orient: "horizontal",
                onChange,
                "aria-label": ariaLabel,
                className: _Seek2.default.input,
                value: percentagePlayed || 0
              })
            )
          );
        };
      },
      /* 119 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-Seek_component", "track": "rh5v-Seek_track", "buffer": "rh5v-Seek_buffer", "fill": "rh5v-Seek_fill", "input": "rh5v-Seek_input" };
      },
      ,
      /* 121 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _Volume = __webpack_require__(122);
        var _Volume2 = _interopRequireDefault(_Volume);
        var _volume_off = __webpack_require__(124);
        var _volume_off2 = _interopRequireDefault(_volume_off);
        var _volume_up = __webpack_require__(125);
        var _volume_up2 = _interopRequireDefault(_volume_up);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(_ref) {
          var onChange = _ref.onChange, onClick = _ref.onClick, volume = _ref.volume, muted = _ref.muted, className = _ref.className, ariaLabelMute = _ref.ariaLabelMute, ariaLabelUnmute = _ref.ariaLabelUnmute, ariaLabelVolume = _ref.ariaLabelVolume;
          var volumeValue = muted || !volume ? 0 : +volume;
          var isSilent = muted || volume <= 0;
          return _react2.default.createElement(
            "div",
            { className: [_Volume2.default.component, className].join(" ") },
            _react2.default.createElement(
              "button",
              {
                "aria-label": isSilent ? ariaLabelUnmute : ariaLabelMute,
                className: _Volume2.default.button,
                onClick,
                type: "button"
              },
              isSilent ? _react2.default.createElement(_volume_off2.default, {
                height: 20,
                width: 20,
                className: _Volume2.default.icon,
                fill: "#fff"
              }) : _react2.default.createElement(_volume_up2.default, {
                height: 20,
                width: 20,
                className: _Volume2.default.icon,
                fill: "#fff"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: _Volume2.default.slider },
              _react2.default.createElement(
                "div",
                { className: _Volume2.default.track },
                _react2.default.createElement("div", {
                  className: _Volume2.default.fill,
                  style: {
                    height: volumeValue * 100 + "%"
                  }
                }),
                _react2.default.createElement("input", {
                  min: "0",
                  step: 0.1,
                  max: "1",
                  type: "range",
                  orient: "vertical",
                  onChange,
                  "aria-label": ariaLabelVolume,
                  className: _Volume2.default.input,
                  value: volumeValue
                })
              )
            )
          );
        };
      },
      /* 122 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-Volume_component", "button": "rh5v-Volume_button", "icon": "rh5v-Volume_icon", "slider": "rh5v-Volume_slider", "track": "rh5v-Volume_track", "fill": "rh5v-Volume_fill", "input": "rh5v-Volume_input" };
      },
      ,
      /* 124 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M12 3.984v4.219L9.891 6.094zM4.266 3L21 19.734 19.734 21l-2.063-2.063c-1.078.844-2.297 1.5-3.656 1.828v-2.063c.844-.234 1.594-.656 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016H2.999v-6h4.734L2.999 4.264zm14.718 9c0-3.188-2.063-5.859-4.969-6.703V3.234c4.031.891 6.984 4.5 6.984 8.766a8.87 8.87 0 0 1-1.031 4.172l-1.5-1.547A6.901 6.901 0 0 0 18.984 12zM16.5 12c0 .234 0 .422-.047.609l-2.438-2.438V7.968c1.5.75 2.484 2.25 2.484 4.031z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 125 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M14.016 3.234C18.047 4.125 21 7.734 21 12s-2.953 7.875-6.984 8.766v-2.063c2.906-.844 4.969-3.516 4.969-6.703s-2.063-5.859-4.969-6.703V3.234zM16.5 12a4.451 4.451 0 0 1-2.484 4.031V7.968c1.5.75 2.484 2.25 2.484 4.031zM3 9h3.984L12 3.984v16.031l-5.016-5.016H3v-6z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 126 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _toConsumableArray2 = __webpack_require__(97);
        var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _Captions = __webpack_require__(127);
        var _Captions2 = _interopRequireDefault(_Captions);
        var _closed_caption = __webpack_require__(129);
        var _closed_caption2 = _interopRequireDefault(_closed_caption);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(_ref) {
          var textTracks = _ref.textTracks, onClick = _ref.onClick, onItemClick = _ref.onItemClick, className = _ref.className, ariaLabel = _ref.ariaLabel;
          return _react2.default.createElement(
            "div",
            { className: [_Captions2.default.component, className].join(" ") },
            _react2.default.createElement(
              "button",
              {
                type: "button",
                onClick,
                "aria-label": ariaLabel,
                className: _Captions2.default.button
              },
              _react2.default.createElement(_closed_caption2.default, {
                className: _Captions2.default.icon,
                fill: "#fff"
              })
            ),
            _react2.default.createElement(
              "ul",
              { className: _Captions2.default.trackList },
              textTracks && [].concat((0, _toConsumableArray3.default)(textTracks)).map(function(track) {
                return _react2.default.createElement(
                  "li",
                  {
                    key: track.language,
                    className: track.mode === track.SHOWING || track.mode == "showing" ? _Captions2.default.activeTrackItem : _Captions2.default.trackItem,
                    onClick: onItemClick.bind(void 0, track)
                  },
                  track.label
                );
              })
            )
          );
        };
      },
      /* 127 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-Captions_component", "button": "rh5v-Captions_button", "icon": "rh5v-Captions_icon", "trackList": "rh5v-Captions_trackList", "trackItem": "rh5v-Captions_trackItem", "activeTrackItem": "rh5v-Captions_activeTrackItem rh5v-Captions_trackItem" };
      },
      ,
      /* 129 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M18 11.016V9.985a.96.96 0 0 0-.984-.984h-3c-.563 0-1.031.422-1.031.984v4.031c0 .563.469.984 1.031.984h3a.96.96 0 0 0 .984-.984v-1.031h-1.5v.516h-2.016v-3H16.5v.516H18zm-6.984 0V9.985c0-.563-.469-.984-1.031-.984h-3a.96.96 0 0 0-.984.984v4.031a.96.96 0 0 0 .984.984h3c.563 0 1.031-.422 1.031-.984v-1.031h-1.5v.516H7.5v-3h2.016v.516h1.5zm7.968-7.032C20.062 3.984 21 4.922 21 6v12c0 1.078-.938 2.016-2.016 2.016H5.015c-1.125 0-2.016-.938-2.016-2.016V6c0-1.078.891-2.016 2.016-2.016h13.969z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 130 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _PlayPause = __webpack_require__(131);
        var _PlayPause2 = _interopRequireDefault(_PlayPause);
        var _play_arrow = __webpack_require__(133);
        var _play_arrow2 = _interopRequireDefault(_play_arrow);
        var _pause = __webpack_require__(134);
        var _pause2 = _interopRequireDefault(_pause);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(_ref) {
          var onClick = _ref.onClick, paused = _ref.paused, className = _ref.className, ariaLabelPlay = _ref.ariaLabelPlay, ariaLabelPause = _ref.ariaLabelPause;
          return _react2.default.createElement(
            "div",
            { className: [_PlayPause2.default.component, className].join(" ") },
            _react2.default.createElement(
              "button",
              {
                className: _PlayPause2.default.button,
                onClick,
                "aria-label": paused ? ariaLabelPlay : ariaLabelPause,
                type: "button"
              },
              paused ? _react2.default.createElement(_play_arrow2.default, {
                className: _PlayPause2.default.icon,
                fill: "#fff"
              }) : _react2.default.createElement(_pause2.default, {
                className: _PlayPause2.default.icon,
                fill: "#fff"
              })
            )
          );
        };
      },
      /* 131 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-PlayPause_component", "button": "rh5v-PlayPause_button", "icon": "rh5v-PlayPause_icon" };
      },
      ,
      /* 133 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M8.016 5.016L18.985 12 8.016 18.984V5.015z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 134 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 135 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _Fullscreen = __webpack_require__(136);
        var _Fullscreen2 = _interopRequireDefault(_Fullscreen);
        var _fullscreen = __webpack_require__(138);
        var _fullscreen2 = _interopRequireDefault(_fullscreen);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        exports2.default = function(_ref) {
          var onClick = _ref.onClick, className = _ref.className, ariaLabel = _ref.ariaLabel;
          return _react2.default.createElement(
            "div",
            { className: [_Fullscreen2.default.component, className].join(" ") },
            _react2.default.createElement(
              "button",
              {
                type: "button",
                onClick,
                "aria-label": ariaLabel,
                className: _Fullscreen2.default.button
              },
              _react2.default.createElement(_fullscreen2.default, {
                fill: "#fff",
                className: _Fullscreen2.default.icon
              })
            )
          );
        };
      },
      /* 136 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-Fullscreen_component", "button": "rh5v-Fullscreen_button", "icon": "rh5v-Fullscreen_icon" };
      },
      ,
      /* 138 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M14.016 5.016h4.969v4.969h-1.969v-3h-3V5.016zm3 12v-3h1.969v4.969h-4.969v-1.969h3zm-12-7.032V5.015h4.969v1.969h-3v3H5.016zm1.968 4.032v3h3v1.969H5.015v-4.969h1.969z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 139 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        var _Overlay = __webpack_require__(140);
        var _Overlay2 = _interopRequireDefault(_Overlay);
        var _play_arrow = __webpack_require__(133);
        var _play_arrow2 = _interopRequireDefault(_play_arrow);
        var _spin = __webpack_require__(142);
        var _spin2 = _interopRequireDefault(_spin);
        var _report = __webpack_require__(143);
        var _report2 = _interopRequireDefault(_report);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var Overlay = function(_Component) {
          (0, _inherits3.default)(Overlay2, _Component);
          function Overlay2() {
            (0, _classCallCheck3.default)(this, Overlay2);
            return (0, _possibleConstructorReturn3.default)(this, (Overlay2.__proto__ || (0, _getPrototypeOf2.default)(Overlay2)).apply(this, arguments));
          }
          (0, _createClass3.default)(Overlay2, [{
            key: "renderContent",
            value: function renderContent() {
              var _props = this.props, error = _props.error, paused = _props.paused, loading = _props.loading;
              var iconProps = {
                className: _Overlay2.default.icon,
                height: 40,
                width: 40,
                fill: "#fff"
              };
              if (error) {
                return _react2.default.createElement(
                  "span",
                  { className: _Overlay2.default.inner },
                  _react2.default.createElement(_report2.default, iconProps)
                );
              } else if (loading) {
                return _react2.default.createElement(
                  "span",
                  { className: _Overlay2.default.inner },
                  _react2.default.createElement(_spin2.default, iconProps)
                );
              } else if (paused) {
                return _react2.default.createElement(
                  "span",
                  { className: _Overlay2.default.inner },
                  _react2.default.createElement(_play_arrow2.default, iconProps)
                );
              }
            }
          }, {
            key: "render",
            value: function render() {
              var _props2 = this.props, className = _props2.className, onClick = _props2.onClick;
              return _react2.default.createElement(
                "div",
                {
                  className: [_Overlay2.default.component, className].join(" "),
                  onClick
                },
                this.renderContent()
              );
            }
          }]);
          return Overlay2;
        }(_react.Component);
        exports2.default = Overlay;
      },
      /* 140 */
      /***/
      function(module2, exports2) {
        module2.exports = { "component": "rh5v-Overlay_component", "inner": "rh5v-Overlay_inner", "icon": "rh5v-Overlay_icon" };
      },
      ,
      /* 142 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "uil-ring-alt" }, this.props),
                _react2.default.createElement("path", { fill: "none", className: "bk", d: "M0 0h100v100H0z" }),
                _react2.default.createElement("circle", { cx: "50", cy: "50", r: "40", stroke: "#757575", fill: "none", strokeWidth: "10", strokeLinecap: "round" }),
                _react2.default.createElement(
                  "circle",
                  { cx: "50", cy: "50", r: "40", stroke: "#fff", fill: "none", strokeWidth: "6", strokeLinecap: "round" },
                  _react2.default.createElement("animate", { attributeName: "stroke-dashoffset", dur: "2s", repeatCount: "indefinite", from: "0", to: "502" }),
                  _react2.default.createElement("animate", { attributeName: "stroke-dasharray", dur: "2s", repeatCount: "indefinite", values: "150.6 100.4;1 250;150.6 100.4" })
                )
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      },
      /* 143 */
      /***/
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends2 = __webpack_require__(88);
        var _extends3 = _interopRequireDefault(_extends2);
        var _getPrototypeOf = __webpack_require__(3);
        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
        var _classCallCheck2 = __webpack_require__(29);
        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
        var _createClass2 = __webpack_require__(30);
        var _createClass3 = _interopRequireDefault(_createClass2);
        var _possibleConstructorReturn2 = __webpack_require__(34);
        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
        var _inherits2 = __webpack_require__(80);
        var _inherits3 = _interopRequireDefault(_inherits2);
        var _react = __webpack_require__(93);
        var _react2 = _interopRequireDefault(_react);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SVG = function(_React$Component) {
          (0, _inherits3.default)(SVG2, _React$Component);
          function SVG2() {
            (0, _classCallCheck3.default)(this, SVG2);
            return (0, _possibleConstructorReturn3.default)(this, (SVG2.__proto__ || (0, _getPrototypeOf2.default)(SVG2)).apply(this, arguments));
          }
          (0, _createClass3.default)(SVG2, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                "svg",
                (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
                _react2.default.createElement("path", { d: "M12.984 12.984v-6h-1.969v6h1.969zM12 17.297c.703 0 1.313-.609 1.313-1.313s-.609-1.266-1.313-1.266-1.313.563-1.313 1.266.609 1.313 1.313 1.313zM15.75 3L21 8.25v7.5L15.75 21h-7.5L3 15.75v-7.5L8.25 3h7.5z" })
              );
            }
          }]);
          return SVG2;
        }(_react2.default.Component);
        exports2.default = SVG;
      }
      /******/
    ]);
  }
});
export default require_dist();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-html5video.js.map

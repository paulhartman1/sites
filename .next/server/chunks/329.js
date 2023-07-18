exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 15045:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;


/***/ }),

/***/ 84448:
/***/ (() => {



/***/ }),

/***/ 35040:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var clsx_1 = __importDefault(__webpack_require__(21578));
var Navigation_1 = __importDefault(__webpack_require__(62218));
var CenturyView_1 = __importDefault(__webpack_require__(26433));
var DecadeView_1 = __importDefault(__webpack_require__(56900));
var YearView_1 = __importDefault(__webpack_require__(81004));
var MonthView_1 = __importDefault(__webpack_require__(33002));
var dates_1 = __webpack_require__(19368);
var propTypes_1 = __webpack_require__(33825);
var utils_1 = __webpack_require__(61657);
var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = ['decade', 'year', 'month', 'day'];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */
function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */
function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */
function getView(view, minDetail, maxDetail) {
    if (!view) {
        return maxDetail;
    }
    if (isViewAllowed(view, minDetail, maxDetail)) {
        return view;
    }
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */
function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    var valueDate = toDate(rawValue);
    if (isNaN(valueDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
    }
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    var valueType = getValueType(maxDetail);
    var detailValueFrom = (function () {
        switch (index) {
            case 0:
                return (0, dates_1.getBegin)(valueType, valuePiece);
            case 1:
                return (0, dates_1.getEnd)(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    })();
    return (0, utils_1.between)(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function (args) { return getDetailValue(args, 0); };
var getDetailValueTo = function (args) { return getDetailValue(args, 1); };
var getDetailValueArray = function (args) {
    return [getDetailValueFrom, getDetailValueTo].map(function (fn) { return fn(args); });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail,
    }) || new Date();
    return (0, dates_1.getBegin)(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) {
        return (0, dates_1.getBegin)(rangeType, valueFrom);
    }
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView,
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, react_1.forwardRef)(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? 'month' : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? 'century' : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? 'start' : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
    var _j = (0, react_1.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0, react_1.useState)(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0, react_1.useState)(Array.isArray(defaultValue)
        ? defaultValue.map(function (el) { return (el !== null ? toDate(el) : el); })
        : defaultValue !== null && defaultValue !== undefined
            ? toDate(defaultValue)
            : defaultValue), valueState = _l[0], setValueState = _l[1];
    var _m = (0, react_1.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps ||
        activeStartDateState ||
        getInitialActiveStartDate({
            activeStartDate: activeStartDateProps,
            defaultActiveStartDate: defaultActiveStartDate,
            defaultValue: defaultValue,
            defaultView: defaultView,
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            minDetail: minDetail,
            value: valueProps,
            view: viewProps,
        });
    var value = (function () {
        var rawValue = (function () {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) {
                return valueState;
            }
            return valueProps !== undefined ? valueProps : valueState;
        })();
        if (!rawValue) {
            return null;
        }
        return Array.isArray(rawValue)
            ? rawValue.map(function (el) { return (el !== null ? toDate(el) : el); })
            : rawValue !== null
                ? toDate(rawValue)
                : rawValue;
    })();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0, react_1.useCallback)(function (value) {
        var processFunction = (function () {
            switch (returnValue) {
                case 'start':
                    return getDetailValueFrom;
                case 'end':
                    return getDetailValueTo;
                case 'range':
                    return getDetailValueArray;
                default:
                    throw new Error('Invalid returnValue.');
            }
        })();
        return processFunction({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            value: value,
        });
    }, [maxDate, maxDetail, minDate, returnValue]);
    var setActiveStartDate = (0, react_1.useCallback)(function (nextActiveStartDate, action) {
        setActiveStartDateState(nextActiveStartDate);
        var args = {
            action: action,
            activeStartDate: nextActiveStartDate,
            value: value,
            view: view,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
    }, [activeStartDate, onActiveStartDateChange, value, view]);
    var onClickTile = (0, react_1.useCallback)(function (value, event) {
        var callback = (function () {
            switch (view) {
                case 'century':
                    return onClickDecade;
                case 'decade':
                    return onClickYear;
                case 'year':
                    return onClickMonth;
                case 'month':
                    return onClickDay;
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        })();
        if (callback)
            callback(value, event);
    }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
    var drillDown = (0, react_1.useCallback)(function (nextActiveStartDate, event) {
        if (!drillDownAvailable) {
            return;
        }
        onClickTile(nextActiveStartDate, event);
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) {
            throw new Error('Attempted to drill down from the lowest view.');
        }
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillDown',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillDown) {
            onDrillDown(args);
        }
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views,
    ]);
    var drillUp = (0, react_1.useCallback)(function () {
        if (!drillUpAvailable) {
            return;
        }
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) {
            throw new Error('Attempted to drill up from the highest view.');
        }
        var nextActiveStartDate = (0, dates_1.getBegin)(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillUp',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillUp) {
            onDrillUp(args);
        }
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views,
    ]);
    var onChange = (0, react_1.useCallback)(function (rawNextValue, event) {
        var previousValue = value;
        onClickTile(rawNextValue, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) {
                // Value has 0 or 2 elements - either way we're starting a new array
                // First value
                nextValue = (0, dates_1.getBegin)(valueType, rawNextValue);
            }
            else {
                if (!previousValue) {
                    throw new Error('previousValue is required');
                }
                if (Array.isArray(previousValue)) {
                    throw new Error('previousValue must not be an array');
                }
                // Second value
                nextValue = (0, dates_1.getValueRange)(valueType, previousValue, rawNextValue);
            }
        }
        else {
            // Range selection turned off
            nextValue = getProcessedValue(rawNextValue);
        }
        var nextActiveStartDate = 
        // Range selection turned off
        !selectRange ||
            // Range selection turned on, first value
            isFirstValueInRange ||
            // Range selection turned on, second value, goToRangeStartOnSelect toggled on
            goToRangeStartOnSelect
            ? getActiveStartDate({
                maxDate: maxDate,
                maxDetail: maxDetail,
                minDate: minDate,
                minDetail: minDetail,
                value: nextValue,
                view: view,
            })
            : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        var args = {
            action: 'onChange',
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view: view,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onChangeProps) {
            if (selectRange) {
                var isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) {
                    onChangeProps(nextValue || null, event);
                }
                else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) {
                        throw new Error('value must not be an array');
                    }
                    onChangeProps([nextValue || null, null], event);
                }
            }
            else {
                onChangeProps(nextValue || null, event);
            }
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view,
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        activeStartDate: activeStartDate,
        drillDown: drillDown,
        drillUp: drillUp,
        onChange: onChange,
        setActiveStartDate: setActiveStartDate,
        value: value,
        view: view,
    }); }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
    function renderContent(next) {
        var currentActiveStartDate = next
            ? (0, dates_1.getBeginNext)(view, activeStartDate)
            : (0, dates_1.getBegin)(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : null,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType,
        };
        switch (view) {
            case 'century': {
                return react_1.default.createElement(CenturyView_1.default, __assign({ formatYear: formatYear }, commonProps));
            }
            case 'decade': {
                return react_1.default.createElement(DecadeView_1.default, __assign({ formatYear: formatYear }, commonProps));
            }
            case 'year': {
                return (react_1.default.createElement(YearView_1.default, __assign({ formatMonth: formatMonth, formatMonthYear: formatMonthYear }, commonProps)));
            }
            case 'month': {
                return (react_1.default.createElement(MonthView_1.default, __assign({ calendarType: calendarType, formatDay: formatDay, formatLongDate: formatLongDate, formatShortWeekday: formatShortWeekday, formatWeekday: formatWeekday, onClickWeekNumber: onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : null, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined'
                        ? showFixedNumberOfWeeks
                        : showDoubleView, showNeighboringMonth: showNeighboringMonth, showWeekNumbers: showWeekNumbers }, commonProps)));
            }
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) {
            return null;
        }
        return (react_1.default.createElement(Navigation_1.default, { activeStartDate: activeStartDate, drillUp: drillUp, formatMonthYear: formatMonthYear, formatYear: formatYear, locale: locale, maxDate: maxDate, minDate: minDate, navigationAriaLabel: navigationAriaLabel, navigationAriaLive: navigationAriaLive, navigationLabel: navigationLabel, next2AriaLabel: next2AriaLabel, next2Label: next2Label, nextAriaLabel: nextAriaLabel, nextLabel: nextLabel, prev2AriaLabel: prev2AriaLabel, prev2Label: prev2Label, prevAriaLabel: prevAriaLabel, prevLabel: prevLabel, setActiveStartDate: setActiveStartDate, showDoubleView: showDoubleView, view: view, views: views }));
    }
    var valueArray = Array.isArray(value) ? value : [value];
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className), ref: inputRef },
        renderNavigation(),
        react_1.default.createElement("div", { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : undefined, onMouseLeave: selectRange ? onMouseLeave : undefined },
            renderContent(),
            showDoubleView ? renderContent(true) : null)));
});
var isActiveStartDate = prop_types_1.default.instanceOf(Date);
var isValue = prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.instanceOf(Date)]);
var isValueOrValueArray = prop_types_1.default.oneOfType([isValue, (0, propTypes_1.rangeOf)(isValue)]);
Calendar.propTypes = {
    activeStartDate: isActiveStartDate,
    allowPartialRange: prop_types_1.default.bool,
    calendarType: propTypes_1.isCalendarType,
    className: propTypes_1.isClassName,
    defaultActiveStartDate: isActiveStartDate,
    defaultValue: isValueOrValueArray,
    defaultView: propTypes_1.isView,
    formatDay: prop_types_1.default.func,
    formatLongDate: prop_types_1.default.func,
    formatMonth: prop_types_1.default.func,
    formatMonthYear: prop_types_1.default.func,
    formatShortWeekday: prop_types_1.default.func,
    formatWeekday: prop_types_1.default.func,
    formatYear: prop_types_1.default.func,
    goToRangeStartOnSelect: prop_types_1.default.bool,
    inputRef: propTypes_1.isRef,
    locale: prop_types_1.default.string,
    maxDate: propTypes_1.isMaxDate,
    maxDetail: prop_types_1.default.oneOf(allViews),
    minDate: propTypes_1.isMinDate,
    minDetail: prop_types_1.default.oneOf(allViews),
    navigationAriaLabel: prop_types_1.default.string,
    navigationAriaLive: prop_types_1.default.oneOf(['off', 'polite', 'assertive']),
    navigationLabel: prop_types_1.default.func,
    next2AriaLabel: prop_types_1.default.string,
    next2Label: prop_types_1.default.node,
    nextAriaLabel: prop_types_1.default.string,
    nextLabel: prop_types_1.default.node,
    onActiveStartDateChange: prop_types_1.default.func,
    onChange: prop_types_1.default.func,
    onClickDay: prop_types_1.default.func,
    onClickDecade: prop_types_1.default.func,
    onClickMonth: prop_types_1.default.func,
    onClickWeekNumber: prop_types_1.default.func,
    onClickYear: prop_types_1.default.func,
    onDrillDown: prop_types_1.default.func,
    onDrillUp: prop_types_1.default.func,
    onViewChange: prop_types_1.default.func,
    prev2AriaLabel: prop_types_1.default.string,
    prev2Label: prop_types_1.default.node,
    prevAriaLabel: prop_types_1.default.string,
    prevLabel: prop_types_1.default.node,
    returnValue: prop_types_1.default.oneOf(['start', 'end', 'range']),
    selectRange: prop_types_1.default.bool,
    showDoubleView: prop_types_1.default.bool,
    showFixedNumberOfWeeks: prop_types_1.default.bool,
    showNavigation: prop_types_1.default.bool,
    showNeighboringMonth: prop_types_1.default.bool,
    showWeekNumbers: prop_types_1.default.bool,
    tileClassName: prop_types_1.default.oneOfType([prop_types_1.default.func, propTypes_1.isClassName]),
    tileContent: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    tileDisabled: prop_types_1.default.func,
    value: isValueOrValueArray,
    view: propTypes_1.isView,
};
exports["default"] = Calendar;


/***/ }),

/***/ 62218:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var get_user_locale_1 = __webpack_require__(6293);
var dates_1 = __webpack_require__(19368);
var dateFormatter_1 = __webpack_require__(90546);
var propTypes_1 = __webpack_require__(33825);
var className = 'react-calendar__navigation';
function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? dateFormatter_1.formatMonthYear : _b, _c = _a.formatYear, formatYear = _c === void 0 ? dateFormatter_1.formatYear : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? '' : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? '' : _e, _f = _a.next2Label, next2Label = _f === void 0 ? '»' : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? '' : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? '›' : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? '' : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? '«' : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? '' : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? '‹' : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = (0, dates_1.getBeginPrevious)(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons
        ? (0, dates_1.getBeginPrevious2)(view, activeStartDate)
        : undefined;
    var nextActiveStartDate = (0, dates_1.getBeginNext)(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons
        ? (0, dates_1.getBeginNext2)(view, activeStartDate)
        : undefined;
    var prevButtonDisabled = (function () {
        if (previousActiveStartDate.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = (0, dates_1.getEndPrevious)(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    })();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons &&
        (function () {
            if (previousActiveStartDate2.getFullYear() < 0) {
                return true;
            }
            var previousActiveEndDate = (0, dates_1.getEndPrevious2)(view, activeStartDate);
            return minDate && minDate >= previousActiveEndDate;
        })();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        var label = (function () {
            switch (view) {
                case 'century':
                    return (0, dates_1.getCenturyLabel)(locale, formatYear, date);
                case 'decade':
                    return (0, dates_1.getDecadeLabel)(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        })();
        return navigationLabel
            ? navigationLabel({
                date: date,
                label: label,
                locale: locale || (0, get_user_locale_1.getUserLocale)() || undefined,
                view: view,
            })
            : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return (react_1.default.createElement("button", { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button" },
            react_1.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from") }, renderLabel(activeStartDate)),
            showDoubleView ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: "".concat(labelClassName, "__divider") }, " \u2013 "),
                react_1.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to") }, renderLabel(nextActiveStartDate)))) : null));
    }
    return (react_1.default.createElement("div", { className: className },
        prev2Label !== null && shouldShowPrevNext2Buttons ? (react_1.default.createElement("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button" }, prev2Label)) : null,
        prevLabel !== null && (react_1.default.createElement("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button" }, prevLabel)),
        renderButton(),
        nextLabel !== null && (react_1.default.createElement("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button" }, nextLabel)),
        next2Label !== null && shouldShowPrevNext2Buttons ? (react_1.default.createElement("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button" }, next2Label)) : null));
}
exports["default"] = Navigation;
Navigation.propTypes = {
    activeStartDate: prop_types_1.default.instanceOf(Date).isRequired,
    drillUp: prop_types_1.default.func.isRequired,
    formatMonthYear: prop_types_1.default.func,
    formatYear: prop_types_1.default.func,
    locale: prop_types_1.default.string,
    maxDate: prop_types_1.default.instanceOf(Date),
    minDate: prop_types_1.default.instanceOf(Date),
    navigationAriaLabel: prop_types_1.default.string,
    navigationAriaLive: prop_types_1.default.string,
    navigationLabel: prop_types_1.default.func,
    next2AriaLabel: prop_types_1.default.string,
    next2Label: prop_types_1.default.node,
    nextAriaLabel: prop_types_1.default.string,
    nextLabel: prop_types_1.default.node,
    prev2AriaLabel: prop_types_1.default.string,
    prev2Label: prop_types_1.default.node,
    prevAriaLabel: prop_types_1.default.string,
    prevLabel: prop_types_1.default.node,
    setActiveStartDate: prop_types_1.default.func.isRequired,
    showDoubleView: prop_types_1.default.bool,
    view: propTypes_1.isView.isRequired,
    views: propTypes_1.isViews.isRequired,
};


/***/ }),

/***/ 26433:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var Decades_1 = __importDefault(__webpack_require__(61462));
function CenturyView(props) {
    function renderDecades() {
        return react_1.default.createElement(Decades_1.default, __assign({}, props));
    }
    return react_1.default.createElement("div", { className: "react-calendar__century-view" }, renderDecades());
}
exports["default"] = CenturyView;


/***/ }),

/***/ 46475:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var Tile_1 = __importDefault(__webpack_require__(39824));
var dates_1 = __webpack_require__(19368);
var dateFormatter_1 = __webpack_require__(90546);
var propTypes_1 = __webpack_require__(33825);
var className = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatYear, formatYear = _c === void 0 ? dateFormatter_1.formatYear : _c, otherProps = __rest(_a, ["classes", "formatYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    return (react_1.default.createElement(Tile_1.default, __assign({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className], false), maxDateTransform: date_utils_1.getDecadeEnd, minDateTransform: date_utils_1.getDecadeStart, view: "century" }), (0, dates_1.getDecadeLabel)(locale, formatYear, date)));
}
exports["default"] = Decade;
Decade.propTypes = __assign(__assign({}, propTypes_1.tileProps), { formatYear: prop_types_1.default.func });


/***/ }),

/***/ 61462:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var date_utils_1 = __webpack_require__(34315);
var TileGroup_1 = __importDefault(__webpack_require__(91348));
var Decade_1 = __importDefault(__webpack_require__(46475));
var dates_1 = __webpack_require__(19368);
var propTypes_1 = __webpack_require__(33825);
function Decades(props) {
    var activeStartDate = props.activeStartDate;
    var start = (0, dates_1.getBeginOfCenturyYear)(activeStartDate);
    var end = start + 99;
    return (react_1.default.createElement(TileGroup_1.default, __assign({}, props, { className: "react-calendar__century-view__decades", dateTransform: date_utils_1.getDecadeStart, dateType: "decade", end: end, start: start, step: 10, tile: Decade_1.default })));
}
exports["default"] = Decades;
Decades.propTypes = __assign({}, propTypes_1.tileGroupProps);


/***/ }),

/***/ 56900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var Years_1 = __importDefault(__webpack_require__(40136));
function DecadeView(props) {
    function renderYears() {
        return react_1.default.createElement(Years_1.default, __assign({}, props));
    }
    return react_1.default.createElement("div", { className: "react-calendar__decade-view" }, renderYears());
}
exports["default"] = DecadeView;


/***/ }),

/***/ 60449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var Tile_1 = __importDefault(__webpack_require__(39824));
var dateFormatter_1 = __webpack_require__(90546);
var propTypes_1 = __webpack_require__(33825);
var className = 'react-calendar__decade-view__years__year';
function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatYear, formatYear = _c === void 0 ? dateFormatter_1.formatYear : _c, otherProps = __rest(_a, ["classes", "formatYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    return (react_1.default.createElement(Tile_1.default, __assign({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className], false), maxDateTransform: date_utils_1.getYearEnd, minDateTransform: date_utils_1.getYearStart, view: "decade" }), formatYear(locale, date)));
}
exports["default"] = Year;
Year.propTypes = __assign(__assign({}, propTypes_1.tileProps), { formatYear: prop_types_1.default.func });


/***/ }),

/***/ 40136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var TileGroup_1 = __importDefault(__webpack_require__(91348));
var Year_1 = __importDefault(__webpack_require__(60449));
var dates_1 = __webpack_require__(19368);
var propTypes_1 = __webpack_require__(33825);
function Years(props) {
    var activeStartDate = props.activeStartDate;
    var start = (0, dates_1.getBeginOfDecadeYear)(activeStartDate);
    var end = start + 9;
    return (react_1.default.createElement(TileGroup_1.default, __assign({}, props, { className: "react-calendar__decade-view__years", dateTransform: function (year) {
            var date = new Date();
            date.setFullYear(year, 0, 1);
            date.setHours(0, 0, 0, 0);
            return date;
        }, dateType: "year", end: end, start: start, tile: Year_1.default })));
}
exports["default"] = Years;
Years.propTypes = __assign({}, propTypes_1.tileGroupProps);


/***/ }),

/***/ 10529:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
function toPercent(num) {
    return "".concat(num, "%");
}
function Flex(_a) {
    var children = _a.children, className = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
    return (react_1.default.createElement("div", __assign({ className: className, style: __assign({ display: 'flex', flexDirection: direction, flexWrap: wrap ? 'wrap' : 'nowrap' }, style) }, otherProps), react_1.default.Children.map(children, function (child, index) {
        var marginInlineStart = offset && index === 0 ? toPercent((100 * offset) / count) : null;
        return react_1.default.cloneElement(child, __assign(__assign({}, child.props), { style: {
                flexBasis: toPercent(100 / count),
                flexShrink: 0,
                flexGrow: 0,
                overflow: 'hidden',
                marginLeft: marginInlineStart,
                marginInlineStart: marginInlineStart,
                marginInlineEnd: 0,
            } }));
    })));
}
exports["default"] = Flex;
Flex.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    count: prop_types_1.default.number.isRequired,
    direction: prop_types_1.default.string,
    offset: prop_types_1.default.number,
    style: prop_types_1.default.objectOf(prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])),
    wrap: prop_types_1.default.bool,
};


/***/ }),

/***/ 33002:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var clsx_1 = __importDefault(__webpack_require__(21578));
var Days_1 = __importDefault(__webpack_require__(3837));
var Weekdays_1 = __importDefault(__webpack_require__(71700));
var WeekNumbers_1 = __importDefault(__webpack_require__(66688));
var const_1 = __webpack_require__(9534);
var propTypes_1 = __webpack_require__(33825);
function getCalendarTypeFromLocale(locale) {
    for (var _i = 0, _a = Object.entries(const_1.CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
        var _b = _a[_i], calendarType = _b[0], locales = _b[1];
        if (locales.includes(locale)) {
            return calendarType;
        }
    }
    return const_1.CALENDAR_TYPES.ISO_8601;
}
function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
    function renderWeekdays() {
        return (react_1.default.createElement(Weekdays_1.default, { calendarType: calendarType, formatShortWeekday: formatShortWeekday, formatWeekday: formatWeekday, locale: locale, onMouseLeave: onMouseLeave }));
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) {
            return null;
        }
        return (react_1.default.createElement(WeekNumbers_1.default, { activeStartDate: activeStartDate, calendarType: calendarType, onClickWeekNumber: onClickWeekNumber, onMouseLeave: onMouseLeave, showFixedNumberOfWeeks: showFixedNumberOfWeeks }));
    }
    function renderDays() {
        return react_1.default.createElement(Days_1.default, __assign({ calendarType: calendarType }, childProps));
    }
    var className = 'react-calendar__month-view';
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : '') },
        react_1.default.createElement("div", { style: {
                display: 'flex',
                alignItems: 'flex-end',
            } },
            renderWeekNumbers(),
            react_1.default.createElement("div", { style: {
                    flexGrow: 1,
                    width: '100%',
                } },
                renderWeekdays(),
                renderDays()))));
}
exports["default"] = MonthView;
MonthView.propTypes = __assign(__assign({}, propTypes_1.tileGroupProps), { calendarType: propTypes_1.isCalendarType, formatDay: prop_types_1.default.func, formatLongDate: prop_types_1.default.func, formatShortWeekday: prop_types_1.default.func, formatWeekday: prop_types_1.default.func, onClickWeekNumber: prop_types_1.default.func, onMouseLeave: prop_types_1.default.func, showFixedNumberOfWeeks: prop_types_1.default.bool, showNeighboringMonth: prop_types_1.default.bool, showWeekNumbers: prop_types_1.default.bool });


/***/ }),

/***/ 59339:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var Tile_1 = __importDefault(__webpack_require__(39824));
var dates_1 = __webpack_require__(19368);
var dateFormatter_1 = __webpack_require__(90546);
var propTypes_1 = __webpack_require__(33825);
var utils_1 = __webpack_require__(61657);
var className = 'react-calendar__month-view__days__day';
function Day(_a) {
    var calendarTypeOrDeprecatedCalendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? dateFormatter_1.formatDay : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? dateFormatter_1.formatLongDate : _d, otherProps = __rest(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
    var calendarType = (0, utils_1.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if ((0, dates_1.isWeekend)(date, calendarType)) {
        classesProps.push("".concat(className, "--weekend"));
    }
    if (date.getMonth() !== currentMonthIndex) {
        classesProps.push("".concat(className, "--neighboringMonth"));
    }
    return (react_1.default.createElement(Tile_1.default, __assign({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate, maxDateTransform: date_utils_1.getDayEnd, minDateTransform: date_utils_1.getDayStart, view: "month" }), formatDay(locale, date)));
}
exports["default"] = Day;
Day.propTypes = __assign(__assign({}, propTypes_1.tileProps), { currentMonthIndex: prop_types_1.default.number.isRequired, formatDay: prop_types_1.default.func, formatLongDate: prop_types_1.default.func });


/***/ }),

/***/ 3837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var TileGroup_1 = __importDefault(__webpack_require__(91348));
var Day_1 = __importDefault(__webpack_require__(59339));
var dates_1 = __webpack_require__(19368);
var propTypes_1 = __webpack_require__(33825);
var utils_1 = __webpack_require__(61657);
function Days(props) {
    var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType;
    var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, otherProps = __rest(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);
    var calendarType = (0, utils_1.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var year = (0, date_utils_1.getYear)(activeStartDate);
    var monthIndex = (0, date_utils_1.getMonth)(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = (0, dates_1.getDayOfWeek)(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */
    var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */
    var end = (function () {
        if (showFixedNumberOfWeeks) {
            // Always show 6 weeks
            return start + 6 * 7 - 1;
        }
        var daysInMonth = (0, date_utils_1.getDaysInMonth)(activeStartDate);
        if (showNeighboringMonth) {
            var activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            var daysUntilEndOfTheWeek = 7 - (0, dates_1.getDayOfWeek)(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    })();
    return (react_1.default.createElement(TileGroup_1.default, __assign({}, otherProps, { className: "react-calendar__month-view__days", count: 7, currentMonthIndex: monthIndex, dateTransform: function (day) {
            var date = new Date();
            date.setFullYear(year, monthIndex, day);
            date.setHours(0, 0, 0, 0);
            return date;
        }, dateType: "day", end: end, offset: offset, start: start, tile: Day_1.default })));
}
exports["default"] = Days;
Days.propTypes = __assign({ calendarType: propTypes_1.isCalendarType, showFixedNumberOfWeeks: prop_types_1.default.bool, showNeighboringMonth: prop_types_1.default.bool }, propTypes_1.tileGroupProps);


/***/ }),

/***/ 18903:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var className = 'react-calendar__tile';
function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = react_1.default.createElement("span", null, weekNumber);
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, ["date", "onClickWeekNumber", "weekNumber"]);
        return (react_1.default.createElement("button", __assign({}, otherProps, { className: className, onClick: function (event) { return onClickWeekNumber_1(weekNumber_1, date_1, event); }, type: "button" }), children));
    }
    else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, ["date", "onClickWeekNumber", "weekNumber"]);
        return (react_1.default.createElement("div", __assign({}, otherProps, { className: className }), children));
    }
}
exports["default"] = WeekNumber;
WeekNumber.propTypes = {
    date: prop_types_1.default.instanceOf(Date).isRequired,
    onClickWeekNumber: prop_types_1.default.func,
    weekNumber: prop_types_1.default.node.isRequired,
};


/***/ }),

/***/ 66688:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var WeekNumber_1 = __importDefault(__webpack_require__(18903));
var Flex_1 = __importDefault(__webpack_require__(10529));
var dates_1 = __webpack_require__(19368);
var propTypes_1 = __webpack_require__(33825);
var utils_1 = __webpack_require__(61657);
function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var calendarType = (0, utils_1.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var numberOfWeeks = (function () {
        if (showFixedNumberOfWeeks) {
            return 6;
        }
        var numberOfDays = (0, date_utils_1.getDaysInMonth)(activeStartDate);
        var startWeekday = (0, dates_1.getDayOfWeek)(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    })();
    var dates = (function () {
        var year = (0, date_utils_1.getYear)(activeStartDate);
        var monthIndex = (0, date_utils_1.getMonth)(activeStartDate);
        var day = (0, date_utils_1.getDate)(activeStartDate);
        var result = [];
        for (var index = 0; index < numberOfWeeks; index += 1) {
            result.push((0, dates_1.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
        }
        return result;
    })();
    var weekNumbers = dates.map(function (date) { return (0, dates_1.getWeekNumber)(date, calendarType); });
    return (react_1.default.createElement(Flex_1.default, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: 'calc(100% * (1 / 8)', flexShrink: 0 } }, weekNumbers.map(function (weekNumber, weekIndex) {
        var date = dates[weekIndex];
        if (!date) {
            throw new Error('date is not defined');
        }
        return (react_1.default.createElement(WeekNumber_1.default, { key: weekNumber, date: date, onClickWeekNumber: onClickWeekNumber, weekNumber: weekNumber }));
    })));
}
exports["default"] = WeekNumbers;
WeekNumbers.propTypes = {
    activeStartDate: prop_types_1.default.instanceOf(Date).isRequired,
    calendarType: propTypes_1.isCalendarType,
    onClickWeekNumber: prop_types_1.default.func,
    onMouseLeave: prop_types_1.default.func,
    showFixedNumberOfWeeks: prop_types_1.default.bool,
};


/***/ }),

/***/ 71700:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var clsx_1 = __importDefault(__webpack_require__(21578));
var date_utils_1 = __webpack_require__(34315);
var Flex_1 = __importDefault(__webpack_require__(10529));
var dates_1 = __webpack_require__(19368);
var dateFormatter_1 = __webpack_require__(90546);
var propTypes_1 = __webpack_require__(33825);
var utils_1 = __webpack_require__(61657);
var className = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className, "__weekday");
function Weekdays(props) {
    var calendarTypeOrDeprecatedCalendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday = _a === void 0 ? dateFormatter_1.formatShortWeekday : _a, _b = props.formatWeekday, formatWeekday = _b === void 0 ? dateFormatter_1.formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
    var calendarType = (0, utils_1.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var anyDate = new Date();
    var beginOfMonth = (0, date_utils_1.getMonthStart)(anyDate);
    var year = (0, date_utils_1.getYear)(beginOfMonth);
    var monthIndex = (0, date_utils_1.getMonth)(beginOfMonth);
    var weekdays = [];
    for (var weekday = 1; weekday <= 7; weekday += 1) {
        var weekdayDate = new Date(year, monthIndex, weekday - (0, dates_1.getDayOfWeek)(beginOfMonth, calendarType));
        var abbr = formatWeekday(locale, weekdayDate);
        weekdays.push(react_1.default.createElement("div", { key: weekday, className: (0, clsx_1.default)(weekdayClassName, (0, dates_1.isCurrentDayOfWeek)(weekdayDate) && "".concat(weekdayClassName, "--current"), (0, dates_1.isWeekend)(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")) },
            react_1.default.createElement("abbr", { "aria-label": abbr, title: abbr }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
    }
    return (react_1.default.createElement(Flex_1.default, { className: className, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave }, weekdays));
}
exports["default"] = Weekdays;
Weekdays.propTypes = {
    calendarType: propTypes_1.isCalendarType,
    formatShortWeekday: prop_types_1.default.func,
    formatWeekday: prop_types_1.default.func,
    locale: prop_types_1.default.string,
    onMouseLeave: prop_types_1.default.func,
};


/***/ }),

/***/ 39824:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var clsx_1 = __importDefault(__webpack_require__(21578));
var propTypes_1 = __webpack_require__(33825);
function Tile(props) {
    var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
    var tileClassName = (0, react_1.useMemo)(function () {
        var args = { activeStartDate: activeStartDate, date: date, view: view };
        return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
    }, [activeStartDate, date, tileClassNameProps, view]);
    var tileContent = (0, react_1.useMemo)(function () {
        var args = { activeStartDate: activeStartDate, date: date, view: view };
        return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
    }, [activeStartDate, date, tileContentProps, view]);
    return (react_1.default.createElement("button", { className: (0, clsx_1.default)(classes, tileClassName), disabled: (minDate && minDateTransform(minDate) > date) ||
            (maxDate && maxDateTransform(maxDate) < date) ||
            (tileDisabled && tileDisabled({ activeStartDate: activeStartDate, date: date, view: view })), onClick: onClick ? function (event) { return onClick(date, event); } : undefined, onFocus: onMouseOver ? function () { return onMouseOver(date); } : undefined, onMouseOver: onMouseOver ? function () { return onMouseOver(date); } : undefined, style: style, type: "button" },
        formatAbbr ? react_1.default.createElement("abbr", { "aria-label": formatAbbr(locale, date) }, children) : children,
        tileContent));
}
exports["default"] = Tile;
Tile.propTypes = __assign(__assign({}, propTypes_1.tileProps), { children: prop_types_1.default.node.isRequired, formatAbbr: prop_types_1.default.func, maxDateTransform: prop_types_1.default.func.isRequired, minDateTransform: prop_types_1.default.func.isRequired });


/***/ }),

/***/ 91348:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var Flex_1 = __importDefault(__webpack_require__(10529));
var utils_1 = __webpack_require__(61657);
var propTypes_1 = __webpack_require__(33825);
function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, Tile = _a.tile, value = _a.value, valueType = _a.valueType, tileProps = __rest(_a, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);
    var tiles = [];
    for (var point = start; point <= end; point += step) {
        var date = dateTransform(point);
        tiles.push(react_1.default.createElement(Tile, __assign({ key: date.getTime(), classes: (0, utils_1.getTileClasses)({
                value: value,
                valueType: valueType,
                date: date,
                dateType: dateType,
                hover: hover,
            }), date: date, point: point }, tileProps)));
    }
    return (react_1.default.createElement(Flex_1.default, { className: className, count: count, offset: offset, wrap: true }, tiles));
}
exports["default"] = TileGroup;
TileGroup.propTypes = __assign(__assign({}, propTypes_1.tileGroupProps), { className: prop_types_1.default.string, count: prop_types_1.default.number, dateTransform: prop_types_1.default.func.isRequired, dateType: prop_types_1.default.string, end: prop_types_1.default.number.isRequired, offset: prop_types_1.default.number, step: prop_types_1.default.number, start: prop_types_1.default.number.isRequired, tile: prop_types_1.default.func.isRequired });


/***/ }),

/***/ 81004:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var Months_1 = __importDefault(__webpack_require__(42700));
function YearView(props) {
    function renderMonths() {
        return react_1.default.createElement(Months_1.default, __assign({}, props));
    }
    return react_1.default.createElement("div", { className: "react-calendar__year-view" }, renderMonths());
}
exports["default"] = YearView;


/***/ }),

/***/ 87624:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var Tile_1 = __importDefault(__webpack_require__(39824));
var dateFormatter_1 = __webpack_require__(90546);
var propTypes_1 = __webpack_require__(33825);
var className = 'react-calendar__year-view__months__month';
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? dateFormatter_1.formatMonth : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? dateFormatter_1.formatMonthYear : _d, otherProps = __rest(_a, ["classes", "formatMonth", "formatMonthYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    return (react_1.default.createElement(Tile_1.default, __assign({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className], false), formatAbbr: formatMonthYear, maxDateTransform: date_utils_1.getMonthEnd, minDateTransform: date_utils_1.getMonthStart, view: "year" }), formatMonth(locale, date)));
}
exports["default"] = Month;
Month.propTypes = __assign(__assign({}, propTypes_1.tileProps), { formatMonth: prop_types_1.default.func, formatMonthYear: prop_types_1.default.func });


/***/ }),

/***/ 42700:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(18038));
var prop_types_1 = __importDefault(__webpack_require__(69232));
var date_utils_1 = __webpack_require__(34315);
var TileGroup_1 = __importDefault(__webpack_require__(91348));
var Month_1 = __importDefault(__webpack_require__(87624));
var propTypes_1 = __webpack_require__(33825);
function Months(props) {
    var activeStartDate = props.activeStartDate;
    var start = 0;
    var end = 11;
    var year = (0, date_utils_1.getYear)(activeStartDate);
    return (react_1.default.createElement(TileGroup_1.default, __assign({}, props, { className: "react-calendar__year-view__months", dateTransform: function (monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            date.setHours(0, 0, 0, 0);
            return date;
        }, dateType: "month", end: end, start: start, tile: Month_1.default })));
}
exports["default"] = Months;
Months.propTypes = __assign(__assign({}, propTypes_1.tileGroupProps), { locale: prop_types_1.default.string });


/***/ }),

/***/ 77726:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonthView = exports.YearView = exports.DecadeView = exports.CenturyView = exports.Navigation = exports.Calendar = void 0;
var Calendar_1 = __importDefault(__webpack_require__(35040));
exports.Calendar = Calendar_1.default;
var Navigation_1 = __importDefault(__webpack_require__(62218));
exports.Navigation = Navigation_1.default;
var CenturyView_1 = __importDefault(__webpack_require__(26433));
exports.CenturyView = CenturyView_1.default;
var DecadeView_1 = __importDefault(__webpack_require__(56900));
exports.DecadeView = DecadeView_1.default;
var YearView_1 = __importDefault(__webpack_require__(81004));
exports.YearView = YearView_1.default;
var MonthView_1 = __importDefault(__webpack_require__(33002));
exports.MonthView = MonthView_1.default;
exports["default"] = Calendar_1.default;


/***/ }),

/***/ 9534:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WEEKDAYS = exports.CALENDAR_TYPE_LOCALES = exports.DEPRECATED_CALENDAR_TYPES = exports.CALENDAR_TYPES = void 0;
exports.CALENDAR_TYPES = {
    GREGORY: 'gregory',
    HEBREW: 'hebrew',
    ISLAMIC: 'islamic',
    ISO_8601: 'iso8601',
};
exports.DEPRECATED_CALENDAR_TYPES = {
    ARABIC: 'Arabic',
    HEBREW: 'Hebrew',
    ISO_8601: 'ISO 8601',
    US: 'US',
};
exports.CALENDAR_TYPE_LOCALES = (_a = {},
    _a[exports.CALENDAR_TYPES.GREGORY] = [
        'en-CA',
        'en-US',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-SV',
        'es-VE',
        'pt-BR',
    ],
    _a[exports.CALENDAR_TYPES.HEBREW] = ['he', 'he-IL'],
    _a[exports.CALENDAR_TYPES.ISLAMIC] = [
        // ar-LB, ar-MA intentionally missing
        'ar',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LY',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SD',
        'ar-SY',
        'ar-YE',
        'dv',
        'dv-MV',
        'ps',
        'ps-AR',
    ],
    _a);
exports.WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];


/***/ }),

/***/ 90546:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatYear = exports.formatWeekday = exports.formatShortWeekday = exports.formatMonthYear = exports.formatMonth = exports.formatLongDate = exports.formatDay = exports.formatDate = void 0;
var get_user_locale_1 = __importDefault(__webpack_require__(6293));
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, get_user_locale_1.default)();
        if (!formatterCache.has(localeWithDefault)) {
            formatterCache.set(localeWithDefault, new Map());
        }
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) {
            formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        }
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */
function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function (locale, date) { return getFormatter(options)(locale, toSafeHour(date)); };
}
var formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
};
var formatDayOptions = { day: 'numeric' };
var formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};
var formatMonthOptions = { month: 'long' };
var formatMonthYearOptions = {
    month: 'long',
    year: 'numeric',
};
var formatShortWeekdayOptions = { weekday: 'short' };
var formatWeekdayOptions = { weekday: 'long' };
var formatYearOptions = { year: 'numeric' };
exports.formatDate = getSafeFormatter(formatDateOptions);
exports.formatDay = getSafeFormatter(formatDayOptions);
exports.formatLongDate = getSafeFormatter(formatLongDateOptions);
exports.formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonthYear = getSafeFormatter(formatMonthYearOptions);
exports.formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
exports.formatWeekday = getSafeFormatter(formatWeekdayOptions);
exports.formatYear = getSafeFormatter(formatYearOptions);


/***/ }),

/***/ 19368:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isWeekend = exports.isCurrentDayOfWeek = exports.getDecadeLabel = exports.getCenturyLabel = exports.getValueRange = exports.getRange = exports.getEndPrevious2 = exports.getEndPrevious = exports.getEnd = exports.getBeginNext2 = exports.getBeginPrevious2 = exports.getBeginNext = exports.getBeginPrevious = exports.getBegin = exports.getWeekNumber = exports.getBeginOfWeek = exports.getBeginOfDecadeYear = exports.getBeginOfCenturyYear = exports.getDayOfWeek = void 0;
var date_utils_1 = __webpack_require__(34315);
var const_1 = __webpack_require__(9534);
var dateFormatter_1 = __webpack_require__(90546);
var SUNDAY = const_1.WEEKDAYS[0];
var FRIDAY = const_1.WEEKDAYS[5];
var SATURDAY = const_1.WEEKDAYS[6];
/* Simple getters - getting a property of a given point in time */
/**
 * Gets day of the week of a given date.
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Day of the week.
 */
function getDayOfWeek(date, calendarType) {
    if (calendarType === void 0) { calendarType = const_1.CALENDAR_TYPES.ISO_8601; }
    var weekday = date.getDay();
    switch (calendarType) {
        case const_1.CALENDAR_TYPES.ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case const_1.CALENDAR_TYPES.ISLAMIC:
            return (weekday + 1) % 7;
        case const_1.CALENDAR_TYPES.HEBREW:
        case const_1.CALENDAR_TYPES.GREGORY:
            return weekday;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
exports.getDayOfWeek = getDayOfWeek;
/**
 * Century
 */
/**
 * Gets the year of the beginning of a century of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a century.
 */
function getBeginOfCenturyYear(date) {
    var beginOfCentury = (0, date_utils_1.getCenturyStart)(date);
    return (0, date_utils_1.getYear)(beginOfCentury);
}
exports.getBeginOfCenturyYear = getBeginOfCenturyYear;
/**
 * Decade
 */
/**
 * Gets the year of the beginning of a decade of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a decade.
 */
function getBeginOfDecadeYear(date) {
    var beginOfDecade = (0, date_utils_1.getDecadeStart)(date);
    return (0, date_utils_1.getYear)(beginOfDecade);
}
exports.getBeginOfDecadeYear = getBeginOfDecadeYear;
/**
 * Week
 */
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {Date} Beginning of a given week.
 */
function getBeginOfWeek(date, calendarType) {
    if (calendarType === void 0) { calendarType = const_1.CALENDAR_TYPES.ISO_8601; }
    var year = (0, date_utils_1.getYear)(date);
    var monthIndex = (0, date_utils_1.getMonth)(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
exports.getBeginOfWeek = getBeginOfWeek;
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Week number.
 */
function getWeekNumber(date, calendarType) {
    if (calendarType === void 0) { calendarType = const_1.CALENDAR_TYPES.ISO_8601; }
    var calendarTypeForWeekNumber = calendarType === const_1.CALENDAR_TYPES.GREGORY ? const_1.CALENDAR_TYPES.GREGORY : const_1.CALENDAR_TYPES.ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = (0, date_utils_1.getYear)(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === const_1.CALENDAR_TYPES.ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    } while (date < beginOfFirstWeek);
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
exports.getWeekNumber = getWeekNumber;
/**
 * Others
 */
/**
 * Returns the beginning of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a given range.
 */
function getBegin(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0, date_utils_1.getCenturyStart)(date);
        case 'decade':
            return (0, date_utils_1.getDecadeStart)(date);
        case 'year':
            return (0, date_utils_1.getYearStart)(date);
        case 'month':
            return (0, date_utils_1.getMonthStart)(date);
        case 'day':
            return (0, date_utils_1.getDayStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getBegin = getBegin;
/**
 * Returns the beginning of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a previous given range.
 */
function getBeginPrevious(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0, date_utils_1.getPreviousCenturyStart)(date);
        case 'decade':
            return (0, date_utils_1.getPreviousDecadeStart)(date);
        case 'year':
            return (0, date_utils_1.getPreviousYearStart)(date);
        case 'month':
            return (0, date_utils_1.getPreviousMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getBeginPrevious = getBeginPrevious;
/**
 * Returns the beginning of a next given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a next given range.
 */
function getBeginNext(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0, date_utils_1.getNextCenturyStart)(date);
        case 'decade':
            return (0, date_utils_1.getNextDecadeStart)(date);
        case 'year':
            return (0, date_utils_1.getNextYearStart)(date);
        case 'month':
            return (0, date_utils_1.getNextMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getBeginNext = getBeginNext;
function getBeginPrevious2(rangeType, date) {
    switch (rangeType) {
        case 'decade':
            return (0, date_utils_1.getPreviousDecadeStart)(date, -100);
        case 'year':
            return (0, date_utils_1.getPreviousYearStart)(date, -10);
        case 'month':
            return (0, date_utils_1.getPreviousMonthStart)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getBeginPrevious2 = getBeginPrevious2;
function getBeginNext2(rangeType, date) {
    switch (rangeType) {
        case 'decade':
            return (0, date_utils_1.getNextDecadeStart)(date, 100);
        case 'year':
            return (0, date_utils_1.getNextYearStart)(date, 10);
        case 'month':
            return (0, date_utils_1.getNextMonthStart)(date, 12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getBeginNext2 = getBeginNext2;
/**
 * Returns the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a given range.
 */
function getEnd(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0, date_utils_1.getCenturyEnd)(date);
        case 'decade':
            return (0, date_utils_1.getDecadeEnd)(date);
        case 'year':
            return (0, date_utils_1.getYearEnd)(date);
        case 'month':
            return (0, date_utils_1.getMonthEnd)(date);
        case 'day':
            return (0, date_utils_1.getDayEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getEnd = getEnd;
/**
 * Returns the end of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a previous given range.
 */
function getEndPrevious(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0, date_utils_1.getPreviousCenturyEnd)(date);
        case 'decade':
            return (0, date_utils_1.getPreviousDecadeEnd)(date);
        case 'year':
            return (0, date_utils_1.getPreviousYearEnd)(date);
        case 'month':
            return (0, date_utils_1.getPreviousMonthEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getEndPrevious = getEndPrevious;
function getEndPrevious2(rangeType, date) {
    switch (rangeType) {
        case 'decade':
            return (0, date_utils_1.getPreviousDecadeEnd)(date, -100);
        case 'year':
            return (0, date_utils_1.getPreviousYearEnd)(date, -10);
        case 'month':
            return (0, date_utils_1.getPreviousMonthEnd)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getEndPrevious2 = getEndPrevious2;
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getRange(rangeType, date) {
    switch (rangeType) {
        case 'century':
            return (0, date_utils_1.getCenturyRange)(date);
        case 'decade':
            return (0, date_utils_1.getDecadeRange)(date);
        case 'year':
            return (0, date_utils_1.getYearRange)(date);
        case 'month':
            return (0, date_utils_1.getMonthRange)(date);
        case 'day':
            return (0, date_utils_1.getDayRange)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
exports.getRange = getRange;
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {Date[]} Beginning and end of a given range.
 */
function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [date1, date2].sort(function (a, b) { return a.getTime() - b.getTime(); });
    return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
exports.getValueRange = getValueRange;
function toYearLabel(locale, formatYear, dates) {
    if (formatYear === void 0) { formatYear = dateFormatter_1.formatYear; }
    return dates.map(function (date) { return formatYear(locale, date); }).join(' – ');
}
/**
 * @callback FormatYear
 * @param {string} locale Locale.
 * @param {Date} date Date.
 * @returns {string} Formatted year.
 */
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a century of a given date.
 */
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, date_utils_1.getCenturyRange)(date));
}
exports.getCenturyLabel = getCenturyLabel;
/**
 * Returns a string labelling a decade of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a decade of a given date.
 */
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, date_utils_1.getDecadeRange)(date));
}
exports.getDecadeLabel = getDecadeLabel;
/**
 * Returns a boolean determining whether a given date is the current day of the week.
 *
 * @param {Date} date Date.
 * @returns {boolean} Whether a given date is the current day of the week.
 */
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
exports.isCurrentDayOfWeek = isCurrentDayOfWeek;
/**
 * Returns a boolean determining whether a given date is a weekend day.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {boolean} Whether a given date is a weekend day.
 */
function isWeekend(date, calendarType) {
    if (calendarType === void 0) { calendarType = const_1.CALENDAR_TYPES.ISO_8601; }
    var weekday = date.getDay();
    switch (calendarType) {
        case const_1.CALENDAR_TYPES.ISLAMIC:
        case const_1.CALENDAR_TYPES.HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case const_1.CALENDAR_TYPES.ISO_8601:
        case const_1.CALENDAR_TYPES.GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
exports.isWeekend = isWeekend;


/***/ }),

/***/ 33825:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tileProps = exports.tileGroupProps = exports.rangeOf = exports.isView = exports.isViews = exports.isValue = exports.isRef = exports.isMaxDate = exports.isMinDate = exports.isClassName = exports.isCalendarType = void 0;
var prop_types_1 = __importDefault(__webpack_require__(69232));
var const_1 = __webpack_require__(9534);
var calendarTypes = Object.values(const_1.CALENDAR_TYPES);
var deprecatedCalendarTypes = Object.values(const_1.DEPRECATED_CALENDAR_TYPES);
var allViews = ['century', 'decade', 'year', 'month'];
exports.isCalendarType = prop_types_1.default.oneOf(__spreadArray(__spreadArray([], calendarTypes, true), deprecatedCalendarTypes, true));
exports.isClassName = prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.arrayOf(prop_types_1.default.string),
]);
var isMinDate = function isMinDate(props, propName, componentName) {
    var _a = props, _b = propName, minDate = _a[_b];
    if (!minDate) {
        return null;
    }
    if (!(minDate instanceof Date)) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }
    var maxDate = props.maxDate;
    if (maxDate && minDate > maxDate) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
    }
    return null;
};
exports.isMinDate = isMinDate;
var isMaxDate = function isMaxDate(props, propName, componentName) {
    var _a = props, _b = propName, maxDate = _a[_b];
    if (!maxDate) {
        return null;
    }
    if (!(maxDate instanceof Date)) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }
    var minDate = props.minDate;
    if (minDate && maxDate < minDate) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
    }
    return null;
};
exports.isMaxDate = isMaxDate;
exports.isRef = prop_types_1.default.oneOfType([
    prop_types_1.default.func,
    prop_types_1.default.exact({
        current: prop_types_1.default.any,
    }),
]);
exports.isValue = prop_types_1.default.oneOfType([
    prop_types_1.default.instanceOf(Date),
    prop_types_1.default.arrayOf(prop_types_1.default.instanceOf(Date)),
]);
exports.isViews = prop_types_1.default.arrayOf(prop_types_1.default.oneOf(allViews));
var isView = function isView(props, propName, componentName) {
    var _a = props, _b = propName, view = _a[_b];
    if (view !== undefined && (typeof view !== 'string' || allViews.indexOf(view) === -1)) {
        return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allViews
            .map(function (a) { return "\"".concat(a, "\""); })
            .join(', '), "]."));
    }
    // Everything is fine
    return null;
};
exports.isView = isView;
exports.isView.isRequired = function isViewIsRequired(props, propName, componentName, location, propFullName) {
    var _a = props, _b = propName, view = _a[_b];
    if (!view) {
        return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
    }
    return (0, exports.isView)(props, propName, componentName, location, propFullName);
};
var rangeOf = function (type) {
    return prop_types_1.default.arrayOf(type);
};
exports.rangeOf = rangeOf;
exports.tileGroupProps = {
    activeStartDate: prop_types_1.default.instanceOf(Date).isRequired,
    hover: prop_types_1.default.instanceOf(Date),
    locale: prop_types_1.default.string,
    maxDate: exports.isMaxDate,
    minDate: exports.isMinDate,
    onClick: prop_types_1.default.func,
    onMouseOver: prop_types_1.default.func,
    tileClassName: prop_types_1.default.oneOfType([prop_types_1.default.func, exports.isClassName]),
    tileContent: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    value: exports.isValue,
    valueType: prop_types_1.default.string,
};
exports.tileProps = {
    activeStartDate: prop_types_1.default.instanceOf(Date).isRequired,
    classes: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired,
    date: prop_types_1.default.instanceOf(Date).isRequired,
    locale: prop_types_1.default.string,
    maxDate: exports.isMaxDate,
    minDate: exports.isMinDate,
    onClick: prop_types_1.default.func,
    onMouseOver: prop_types_1.default.func,
    style: prop_types_1.default.objectOf(prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])),
    tileClassName: prop_types_1.default.oneOfType([prop_types_1.default.func, exports.isClassName]),
    tileContent: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    tileDisabled: prop_types_1.default.func,
};


/***/ }),

/***/ 61657:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapCalendarType = exports.getTileClasses = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.between = void 0;
var tiny_warning_1 = __importDefault(__webpack_require__(69342));
var const_1 = __webpack_require__(9534);
var dates_1 = __webpack_require__(19368);
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */
function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
exports.between = between;
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
exports.isValueWithinRange = isValueWithinRange;
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
exports.isRangeWithinRange = isRangeWithinRange;
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
exports.doRangesOverlap = doRangesOverlap;
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) {
            classes.push("".concat(baseClassName, "Start"));
        }
        if (isRangeEnd) {
            classes.push("".concat(baseClassName, "End"));
        }
        if (isRangeStart && isRangeEnd) {
            classes.push("".concat(baseClassName, "BothEnds"));
        }
    }
    return classes;
}
function getTileClasses(args) {
    if (!args) {
        throw new Error('args is required');
    }
    var value = args.value, date = args.date, hover = args.hover;
    var className = 'react-calendar__tile';
    var classes = [className];
    if (!date) {
        return classes;
    }
    var now = new Date();
    var dateRange = (function () {
        if (Array.isArray(date)) {
            return date;
        }
        var dateType = args.dateType;
        if (!dateType) {
            throw new Error('dateType is required when date is not an array of two dates');
        }
        return (0, dates_1.getRange)(dateType, date);
    })();
    if (isValueWithinRange(now, dateRange)) {
        classes.push("".concat(className, "--now"));
    }
    if (!value) {
        return classes;
    }
    var valueRange = (function () {
        if (Array.isArray(value)) {
            return value;
        }
        var valueType = args.valueType;
        if (!valueType) {
            throw new Error('valueType is required when value is not an array of two dates');
        }
        return (0, dates_1.getRange)(valueType, value);
    })();
    if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push("".concat(className, "--active"));
    }
    else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push("".concat(className, "--hasActive"));
    }
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [value];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}
exports.getTileClasses = getTileClasses;
var calendarTypeMap = (_a = {},
    _a[const_1.DEPRECATED_CALENDAR_TYPES.ARABIC] = const_1.CALENDAR_TYPES.ISLAMIC,
    _a[const_1.DEPRECATED_CALENDAR_TYPES.HEBREW] = const_1.CALENDAR_TYPES.HEBREW,
    _a[const_1.DEPRECATED_CALENDAR_TYPES.ISO_8601] = const_1.CALENDAR_TYPES.ISO_8601,
    _a[const_1.DEPRECATED_CALENDAR_TYPES.US] = const_1.CALENDAR_TYPES.GREGORY,
    _a);
function isDeprecatedCalendarType(calendarType) {
    return calendarType !== undefined && calendarType in const_1.DEPRECATED_CALENDAR_TYPES;
}
var warned = false;
function mapCalendarType(calendarTypeOrDeprecatedCalendarType) {
    if (isDeprecatedCalendarType(calendarTypeOrDeprecatedCalendarType)) {
        var calendarType = calendarTypeMap[calendarTypeOrDeprecatedCalendarType];
        (0, tiny_warning_1.default)(warned, "Specifying calendarType=\"".concat(calendarTypeOrDeprecatedCalendarType, "\" is deprecated. Use calendarType=\"").concat(calendarType, "\" instead."));
        warned = true;
        return calendarType;
    }
    return calendarTypeOrDeprecatedCalendarType;
}
exports.mapCalendarType = mapCalendarType;


/***/ }),

/***/ 21578:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ }),

/***/ 69342:
/***/ ((module) => {

"use strict";


var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;


/***/ }),

/***/ 34315:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getISOLocalDateTime = exports.getISOLocalDate = exports.getISOLocalMonth = exports.getHoursMinutesSeconds = exports.getHoursMinutes = exports.getDaysInMonth = exports.getDayRange = exports.getNextDayEnd = exports.getPreviousDayEnd = exports.getDayEnd = exports.getNextDayStart = exports.getPreviousDayStart = exports.getDayStart = exports.getMonthRange = exports.getNextMonthEnd = exports.getPreviousMonthEnd = exports.getMonthEnd = exports.getNextMonthStart = exports.getPreviousMonthStart = exports.getMonthStart = exports.getYearRange = exports.getNextYearEnd = exports.getPreviousYearEnd = exports.getYearEnd = exports.getNextYearStart = exports.getPreviousYearStart = exports.getYearStart = exports.getDecadeRange = exports.getNextDecadeEnd = exports.getPreviousDecadeEnd = exports.getDecadeEnd = exports.getNextDecadeStart = exports.getPreviousDecadeStart = exports.getDecadeStart = exports.getCenturyRange = exports.getNextCenturyEnd = exports.getPreviousCenturyEnd = exports.getCenturyEnd = exports.getNextCenturyStart = exports.getPreviousCenturyStart = exports.getCenturyStart = exports.getSeconds = exports.getMinutes = exports.getHours = exports.getDate = exports.getMonthHuman = exports.getMonth = exports.getYear = void 0;
/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [getStart(date), getEnd(date)];
    };
}
/**
 * Simple getters - getting a property of a given point in time
 */
/**
 * Gets year from a given date.
 *
 * @param {DateLike} date Date to get year from
 * @returns {number} Year
 */
function getYear(date) {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    if (typeof date === 'number') {
        return date;
    }
    var year = parseInt(date, 10);
    if (typeof date === 'string' && !isNaN(year)) {
        return year;
    }
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
exports.getYear = getYear;
/**
 * Gets month from a given date.
 *
 * @param {Date} date Date to get month from
 * @returns {number} Month
 */
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error("Failed to get month from date: ".concat(date, "."));
}
exports.getMonth = getMonth;
/**
 * Gets human-readable month from a given date.
 *
 * @param {Date} date Date to get human-readable month from
 * @returns {number} Human-readable month
 */
function getMonthHuman(date) {
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
exports.getMonthHuman = getMonthHuman;
/**
 * Gets day of the month from a given date.
 *
 * @param {Date} date Date to get day of the month from
 * @returns {number} Day of the month
 */
function getDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
exports.getDate = getDate;
/**
 * Gets hours from a given date.
 *
 * @param {Date | string} date Date to get hours from
 * @returns {number} Hours
 */
function getHours(date) {
    if (date instanceof Date) {
        return date.getHours();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var hoursString = datePieces[0];
            if (hoursString) {
                var hours = parseInt(hoursString, 10);
                if (!isNaN(hours)) {
                    return hours;
                }
            }
        }
    }
    throw new Error("Failed to get hours from date: ".concat(date, "."));
}
exports.getHours = getHours;
/**
 * Gets minutes from a given date.
 *
 * @param {Date | string} date Date to get minutes from
 * @returns {number} Minutes
 */
function getMinutes(date) {
    if (date instanceof Date) {
        return date.getMinutes();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var minutesString = datePieces[1] || '0';
            var minutes = parseInt(minutesString, 10);
            if (!isNaN(minutes)) {
                return minutes;
            }
        }
    }
    throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
exports.getMinutes = getMinutes;
/**
 * Gets seconds from a given date.
 *
 * @param {Date | string} date Date to get seconds from
 * @returns {number} Seconds
 */
function getSeconds(date) {
    if (date instanceof Date) {
        return date.getSeconds();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var secondsString = datePieces[2] || '0';
            var seconds = parseInt(secondsString, 10);
            if (!isNaN(seconds)) {
                return seconds;
            }
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
exports.getSeconds = getSeconds;
/**
 * Century
 */
/**
 * Gets century start date from a given date.
 *
 * @param {DateLike} date Date to get century start from
 * @returns {Date} Century start date
 */
function getCenturyStart(date) {
    var year = getYear(date);
    var centuryStartYear = year + ((-year + 1) % 100);
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
exports.getCenturyStart = getCenturyStart;
/**
 * Gets previous century start date from a given date.
 *
 * @param {DateLike} date Date to get previous century start from
 * @returns {Date} Previous century start date
 */
exports.getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
/**
 * Gets next century start date from a given date.
 *
 * @param {DateLike} date Date to get next century start from
 * @returns {Date} Next century start date
 */
exports.getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
/**
 * Gets century end date from a given date.
 *
 * @param {DateLike} date Date to get century end from
 * @returns {Date} Century end date
 */
exports.getCenturyEnd = makeGetEnd(exports.getNextCenturyStart);
/**
 * Gets previous century end date from a given date.
 *
 * @param {DateLike} date Date to get previous century end from
 * @returns {Date} Previous century end date
 */
exports.getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, exports.getCenturyEnd, -100);
/**
 * Gets next century end date from a given date.
 *
 * @param {DateLike} date Date to get next century end from
 * @returns {Date} Next century end date
 */
exports.getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, exports.getCenturyEnd, 100);
/**
 * Gets century start and end dates from a given date.
 *
 * @param {DateLike} date Date to get century start and end from
 * @returns {[Date, Date]} Century start and end dates
 */
exports.getCenturyRange = makeGetRange(getCenturyStart, exports.getCenturyEnd);
/**
 * Decade
 */
/**
 * Gets decade start date from a given date.
 *
 * @param {DateLike} date Date to get decade start from
 * @returns {Date} Decade start date
 */
function getDecadeStart(date) {
    var year = getYear(date);
    var decadeStartYear = year + ((-year + 1) % 10);
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
exports.getDecadeStart = getDecadeStart;
/**
 * Gets previous decade start date from a given date.
 *
 * @param {DateLike} date Date to get previous decade start from
 * @returns {Date} Previous decade start date
 */
exports.getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
/**
 * Gets next decade start date from a given date.
 *
 * @param {DateLike} date Date to get next decade start from
 * @returns {Date} Next decade start date
 */
exports.getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
/**
 * Gets decade end date from a given date.
 *
 * @param {DateLike} date Date to get decade end from
 * @returns {Date} Decade end date
 */
exports.getDecadeEnd = makeGetEnd(exports.getNextDecadeStart);
/**
 * Gets previous decade end date from a given date.
 *
 * @param {DateLike} date Date to get previous decade end from
 * @returns {Date} Previous decade end date
 */
exports.getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, exports.getDecadeEnd, -10);
/**
 * Gets next decade end date from a given date.
 *
 * @param {DateLike} date Date to get next decade end from
 * @returns {Date} Next decade end date
 */
exports.getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, exports.getDecadeEnd, 10);
/**
 * Gets decade start and end dates from a given date.
 *
 * @param {DateLike} date Date to get decade start and end from
 * @returns {[Date, Date]} Decade start and end dates
 */
exports.getDecadeRange = makeGetRange(getDecadeStart, exports.getDecadeEnd);
/**
 * Year
 */
/**
 * Gets year start date from a given date.
 *
 * @param {DateLike} date Date to get year start from
 * @returns {Date} Year start date
 */
function getYearStart(date) {
    var year = getYear(date);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
exports.getYearStart = getYearStart;
/**
 * Gets previous year start date from a given date.
 *
 * @param {DateLike} date Date to get previous year start from
 * @returns {Date} Previous year start date
 */
exports.getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
/**
 * Gets next year start date from a given date.
 *
 * @param {DateLike} date Date to get next year start from
 * @returns {Date} Next year start date
 */
exports.getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
/**
 * Gets year end date from a given date.
 *
 * @param {DateLike} date Date to get year end from
 * @returns {Date} Year end date
 */
exports.getYearEnd = makeGetEnd(exports.getNextYearStart);
/**
 * Gets previous year end date from a given date.
 *
 * @param {DateLike} date Date to get previous year end from
 * @returns {Date} Previous year end date
 */
exports.getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, exports.getYearEnd, -1);
/**
 * Gets next year end date from a given date.
 *
 * @param {DateLike} date Date to get next year end from
 * @returns {Date} Next year end date
 */
exports.getNextYearEnd = makeGetEdgeOfNeighbor(getYear, exports.getYearEnd, 1);
/**
 * Gets year start and end dates from a given date.
 *
 * @param {DateLike} date Date to get year start and end from
 * @returns {[Date, Date]} Year start and end dates
 */
exports.getYearRange = makeGetRange(getYearStart, exports.getYearEnd);
/**
 * Month
 */
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var year = getYear(date);
        var month = getMonth(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
/**
 * Gets month start date from a given date.
 *
 * @param {DateLike} date Date to get month start from
 * @returns {Date} Month start date
 */
function getMonthStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
exports.getMonthStart = getMonthStart;
/**
 * Gets previous month start date from a given date.
 *
 * @param {DateLike} date Date to get previous month start from
 * @returns {Date} Previous month start date
 */
exports.getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
/**
 * Gets next month start date from a given date.
 *
 * @param {DateLike} date Date to get next month start from
 * @returns {Date} Next month start date
 */
exports.getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
/**
 * Gets month end date from a given date.
 *
 * @param {DateLike} date Date to get month end from
 * @returns {Date} Month end date
 */
exports.getMonthEnd = makeGetEnd(exports.getNextMonthStart);
/**
 * Gets previous month end date from a given date.
 *
 * @param {DateLike} date Date to get previous month end from
 * @returns {Date} Previous month end date
 */
exports.getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(exports.getMonthEnd, -1);
/**
 * Gets next month end date from a given date.
 *
 * @param {DateLike} date Date to get next month end from
 * @returns {Date} Next month end date
 */
exports.getNextMonthEnd = makeGetEdgeOfNeighborMonth(exports.getMonthEnd, 1);
/**
 * Gets month start and end dates from a given date.
 *
 * @param {DateLike} date Date to get month start and end from
 * @returns {[Date, Date]} Month start and end dates
 */
exports.getMonthRange = makeGetRange(getMonthStart, exports.getMonthEnd);
/**
 * Day
 */
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var year = getYear(date);
        var month = getMonth(date);
        var day = getDate(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
/**
 * Gets day start date from a given date.
 *
 * @param {DateLike} date Date to get day start from
 * @returns {Date} Day start date
 */
function getDayStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
exports.getDayStart = getDayStart;
/**
 * Gets previous day start date from a given date.
 *
 * @param {DateLike} date Date to get previous day start from
 * @returns {Date} Previous day start date
 */
exports.getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
/**
 * Gets next day start date from a given date.
 *
 * @param {DateLike} date Date to get next day start from
 * @returns {Date} Next day start date
 */
exports.getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
/**
 * Gets day end date from a given date.
 *
 * @param {DateLike} date Date to get day end from
 * @returns {Date} Day end date
 */
exports.getDayEnd = makeGetEnd(exports.getNextDayStart);
/**
 * Gets previous day end date from a given date.
 *
 * @param {DateLike} date Date to get previous day end from
 * @returns {Date} Previous day end date
 */
exports.getPreviousDayEnd = makeGetEdgeOfNeighborDay(exports.getDayEnd, -1);
/**
 * Gets next day end date from a given date.
 *
 * @param {DateLike} date Date to get next day end from
 * @returns {Date} Next day end date
 */
exports.getNextDayEnd = makeGetEdgeOfNeighborDay(exports.getDayEnd, 1);
/**
 * Gets day start and end dates from a given date.
 *
 * @param {DateLike} date Date to get day start and end from
 * @returns {[Date, Date]} Day start and end dates
 */
exports.getDayRange = makeGetRange(getDayStart, exports.getDayEnd);
/**
 * Other
 */
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date
 * @returns {number} Number of days in a month
 */
function getDaysInMonth(date) {
    return getDate((0, exports.getMonthEnd)(date));
}
exports.getDaysInMonth = getDaysInMonth;
function padStart(num, val) {
    if (val === void 0) { val = 2; }
    var numStr = "".concat(num);
    if (numStr.length >= val) {
        return num;
    }
    return "0000".concat(numStr).slice(-val);
}
/**
 * Returns local hours and minutes (hh:mm).
 *
 * @param {Date | string} date Date to get hours and minutes from
 * @returns {string} Local hours and minutes
 */
function getHoursMinutes(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    return "".concat(hours, ":").concat(minutes);
}
exports.getHoursMinutes = getHoursMinutes;
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 *
 * @param {Date | string} date Date to get hours, minutes and seconds from
 * @returns {string} Local hours, minutes and seconds
 */
function getHoursMinutesSeconds(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    var seconds = padStart(getSeconds(date));
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
exports.getHoursMinutesSeconds = getHoursMinutesSeconds;
/**
 * Returns local month in ISO-like format (YYYY-MM).
 *
 * @param {Date} date Date to get month in ISO-like format from
 * @returns {string} Local month in ISO-like format
 */
function getISOLocalMonth(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    return "".concat(year, "-").concat(month);
}
exports.getISOLocalMonth = getISOLocalMonth;
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 *
 * @param {Date} date Date to get date in ISO-like format from
 * @returns {string} Local date in ISO-like format
 */
function getISOLocalDate(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    var day = padStart(getDate(date));
    return "".concat(year, "-").concat(month, "-").concat(day);
}
exports.getISOLocalDate = getISOLocalDate;
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 *
 * @param {Date} date Date to get date & time in ISO-like format from
 * @returns {string} Local date & time in ISO-like format
 */
function getISOLocalDateTime(date) {
    return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}
exports.getISOLocalDateTime = getISOLocalDateTime;


/***/ }),

/***/ 6293:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUserLocale = exports.getUserLocales = void 0;
var lodash_memoize_1 = __importDefault(__webpack_require__(15045));
function resolver(options) {
    return JSON.stringify(options);
}
function isString(el) {
    return typeof el === 'string';
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
    if (!locale) {
        return locale;
    }
    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {
        return 'en-US';
    }
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf('.') !== -1) {
        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf('@') !== -1) {
        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {
        return locale;
    }
    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;
    var languageList = [];
    if (typeof navigator !== 'undefined') {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) {
        languageList.push(fallbackLocale);
    }
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
exports.getUserLocales = (0, lodash_memoize_1.default)(getUserLocalesInternal, resolver);
function getUserLocaleInternal(options) {
    return (0, exports.getUserLocales)(options)[0] || null;
}
exports.getUserLocale = (0, lodash_memoize_1.default)(getUserLocaleInternal, resolver);
exports["default"] = exports.getUserLocale;


/***/ })

};
;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('source-map'), require('acorn-walk')) :
  typeof define === 'function' && define.amd ? define(['exports', 'source-map', 'acorn-walk'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ObjJCompiler = {}, global.ObjectiveJ.sourceMap, global.acorn.walk));
})(this, (function (exports, sourceMap, walk) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var walk__default = /*#__PURE__*/_interopDefaultLegacy(walk);

  // This file was generated. Do not modify manually!
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

  // This file was generated. Do not modify manually!
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];

  // This file was generated. Do not modify manually!
  var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

  // This file was generated. Do not modify manually!
  var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";

  // These are a run-length and offset encoded representation of the

  // Reserved word lists for various dialects of the language

  var reservedWords = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments"
  };

  // And the keywords

  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

  var keywords$1 = {
    5: ecma5AndLessKeywords,
    "5module": ecma5AndLessKeywords + " export import",
    6: ecma5AndLessKeywords + " const class extends export import super"
  };

  var keywordRelationalOperator = /^in(stanceof)?$/;

  // ## Character categories

  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  // This has a complexity linear to the value of the code. The
  // assumption is that looking up astral identifier characters is
  // rare.
  function isInAstralSet(code, set) {
    var pos = 0x10000;
    for (var i = 0; i < set.length; i += 2) {
      pos += set[i];
      if (pos > code) { return false }
      pos += set[i + 1];
      if (pos >= code) { return true }
    }
  }

  // Test whether a given character code starts an identifier.

  function isIdentifierStart(code, astral) {
    if (code < 65) { return code === 36 }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes)
  }

  // Test whether a given character is part of an identifier.

  function isIdentifierChar(code, astral) {
    if (code < 48) { return code === 36 }
    if (code < 58) { return true }
    if (code < 65) { return false }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
  }

  var ref = Object.prototype;
  var hasOwnProperty = ref.hasOwnProperty;
  var toString = ref.toString;

  var hasOwn = Object.hasOwn || (function (obj, propName) {
    return (
      hasOwnProperty.call(obj, propName)
    );
  });

  var isArray = Array.isArray || (function (obj) {
    return (
      toString.call(obj) === "[object Array]"
    );
  });

  function wordsRegexp$1(words) {
    return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
  }

  function codePointToString(code) {
    // UTF-16 Decoding
    if (code <= 0xFFFF) { return String.fromCharCode(code) }
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
  }

  var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;

  // ## Token types

  // The assignment of fine-grained, information-carrying type objects
  // allows the tokenizer to store the information it has about a
  // token in a way that is very cheap for the parser to look up.

  // All token type variables start with an underscore, to make them
  // easy to recognize.

  // The `beforeExpr` property is used to disambiguate between regular
  // expressions and divisions. It is set on all token types that can
  // be followed by an expression (thus, a slash after them would be a
  // regular expression).
  //
  // The `startsExpr` property is used to check if the token ends a
  // `yield` expression. It is set on all token types that either can
  // directly start an expression (like a quotation mark) or can
  // continue an expression (like the body of a string).
  //
  // `isLoop` marks a keyword as starting a loop, which is important
  // to know when parsing a label, in order to allow or disallow
  // continue jumps to that label.

  var TokenType = function TokenType(label, conf) {
    if (conf === void 0) conf = {};

    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop || null;
    this.updateContext = null;
    this.preprocess = !!conf.preprocess;
  };

  function binop(name, prec) {
    return new TokenType(name, { beforeExpr: true, binop: prec, preprocess: true }) // FIXME: Should all binops really have preprocess: true?
  }
  var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };

  // Map keyword names to token types.

  var keywords = {};

  // Succinct definitions of keyword token types
  function kw(name, options) {
    if (options === void 0) options = {};

    options.keyword = name;
    return keywords[name] = new TokenType(name, options)
  }

  var types$1 = {
    num: new TokenType("num", startsExpr),
    regexp: new TokenType("regexp", startsExpr),
    string: new TokenType("string", startsExpr),
    name: new TokenType("name", startsExpr),
    privateId: new TokenType("privateId", startsExpr),
    eof: new TokenType("eof"),
    eol: new TokenType("eol"),

    // Punctuation token types.
    bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
    bracketR: new TokenType("]"),
    braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
    braceR: new TokenType("}"),
    parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
    parenR: new TokenType(")"),
    comma: new TokenType(",", beforeExpr),
    semi: new TokenType(";", beforeExpr),
    colon: new TokenType(":", beforeExpr),
    dot: new TokenType("."),
    question: new TokenType("?", beforeExpr),
    questionDot: new TokenType("?."),
    arrow: new TokenType("=>", beforeExpr),
    template: new TokenType("template"),
    invalidTemplate: new TokenType("invalidTemplate"),
    ellipsis: new TokenType("...", beforeExpr),
    backQuote: new TokenType("`", startsExpr),
    dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),

    // Operators. These carry several kinds of properties to help the
    // parser use them properly (the presence of these properties is
    // what categorizes them as operators).
    //
    // `binop`, when present, specifies that this operator is a binary
    // operator, and will refer to its precedence.
    //
    // `prefix` and `postfix` mark the operator as a prefix or postfix
    // unary operator.
    //
    // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
    // binary operators with a very low precedence, that should result
    // in AssignmentExpression nodes.

    eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
    assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
    incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
    prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true, preprocess: true }),
    logicalOR: binop("||", 1),
    logicalAND: binop("&&", 2),
    bitwiseOR: binop("|", 3),
    bitwiseXOR: binop("^", 4),
    bitwiseAND: binop("&", 5),
    equality: binop("==/!=/===/!==", 6),
    relational: binop("</>/<=/>=", 7),
    bitShift: binop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true, preprocess: true }),
    modulo: binop("%", 10),
    star: binop("*", 10),
    slash: binop("/", 10),
    starstar: new TokenType("**", { beforeExpr: true }),
    coalesce: binop("??", 1),

    // Keyword token types.
    _break: kw("break"),
    _case: kw("case", beforeExpr),
    _catch: kw("catch"),
    _continue: kw("continue"),
    _debugger: kw("debugger"),
    _default: kw("default", beforeExpr),
    _do: kw("do", { isLoop: true, beforeExpr: true }),
    _else: kw("else", beforeExpr),
    _finally: kw("finally"),
    _for: kw("for", { isLoop: true }),
    _function: kw("function", startsExpr),
    _if: kw("if"),
    _return: kw("return", beforeExpr),
    _switch: kw("switch"),
    _throw: kw("throw", beforeExpr),
    _try: kw("try"),
    _var: kw("var"),
    _const: kw("const"),
    _while: kw("while", { isLoop: true }),
    _with: kw("with"),
    _new: kw("new", { beforeExpr: true, startsExpr: true }),
    _this: kw("this", startsExpr),
    _super: kw("super", startsExpr),
    _class: kw("class", startsExpr),
    _extends: kw("extends", beforeExpr),
    _export: kw("export"),
    _import: kw("import", startsExpr),
    _null: kw("null", startsExpr),
    _true: kw("true", startsExpr),
    _false: kw("false", startsExpr),
    _in: kw("in", { beforeExpr: true, binop: 7 }),
    _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
    _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
    _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
    _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
  };

  var preKeywords = {};

  function pkw(name, options) {
    if (options === void 0) options = {};

    options.keyword = name;
    return preKeywords[name] = new TokenType(name, options)
  }

  var preTypes = {
    // Preprocessor token types.
    _preDefine: pkw("define"),
    _preUndef: pkw("undef"),
    _preIfdef: pkw("ifdef"),
    _preIfndef: pkw("ifndef"),
    _preIf: pkw("if"),
    _preElse: pkw("else"),
    _preEndif: pkw("endif"),
    _preElseIf: pkw("elif"),
    _preElseIfTrue: new TokenType("elif (True)"),
    _preElseIfFalse: new TokenType("elif (false)"),
    _prePragma: pkw("pragma"),
    _preDefined: pkw("defined"),
    _preBackslash: new TokenType("\\"),
    _preError: pkw("error"),
    _preWarning: pkw("warning"),
    _preprocessParamItem: new TokenType("preprocessParamItem", { type: "preprocessParamItem" }), // FIXME: type is not used anymore
    _preprocessSkipLine: new TokenType("skipLine", { type: "skipLine" }), // FIXME: type is not used anymore
    _preInclude: pkw("include")
  };

  var isKeywordPreprocessor = wordsRegexp$1(Object.keys(preKeywords).join(" "));

  var objjKeywords = {};

  function okw(name, options) {
    if (options === void 0) options = {};

    options.keyword = name;
    return objjKeywords[name] = new TokenType(name, options)
  }

  var objjTypes = {
    // Map Objective-J keyword names to token types.
    _filename: new TokenType("filename"),
    _action: okw("IBAction"),
    _outlet: okw("IBOutlet"),
    _unsigned: okw("unsigned"),
    _signed: okw("signed"),
    _byte: okw("byte"),
    _char: okw("char"),
    _short: okw("short"),
    _int: okw("int"),
    _long: okw("long"),
    _id: okw("id"),
    _float: okw("float"),
    _boolean: okw("BOOL"),
    _SEL: okw("SEL"),
    _double: okw("double")
  };

  var objjAtKeywords = {};

  function oakw(name, options) {
    if (options === void 0) options = {};

    options.keyword = name;
    return objjAtKeywords[name] = new TokenType(name, options)
  }

  var objjAtTypes = {
    // Map Objective-J "@" keyword names to token types.
    _implementation: oakw("implementation"),
    _outlet: oakw("outlet"),
    _accessors: oakw("accessors"),
    _end: oakw("end"),
    _import: oakw("import"),
    _action: oakw("action"),
    _selector: oakw("selector"),
    _class: oakw("class"),
    _global: oakw("global"),
    _ref: oakw("ref"),
    _deref: oakw("deref"),
    _protocol: oakw("protocol"),
    _optional: oakw("optional"),
    _required: oakw("required"),
    _interface: oakw("interface"),
    _typedef: oakw("typedef"),
    _dictionaryLiteral: okw("{"),
    _arrayLiteral: okw("[")
  };

  // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.

  var lineBreak = /\r\n?|\n|\u2028|\u2029/;
  var lineBreakG = new RegExp(lineBreak.source, "g");

  function isNewLine(code) {
    return code === 10 || code === 13 || code === 0x2028 || code === 0x2029
  }

  function nextLineBreak(code, from, end) {
    if (end === void 0) end = code.length;

    for (var i = from; i < end; i++) {
      var next = code.charCodeAt(i);
      if (isNewLine(next)) { return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1 }
    }
    return -1
  }

  var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

  // These are used when `options.locations` is on, for the
  // `startLoc` and `endLoc` properties.

  var Position = function Position(line, col) {
    this.line = line;
    this.column = col;
  };

  Position.prototype.offset = function offset(n) {
    return new Position(this.line, this.column + n)
  };

  var SourceLocation = function SourceLocation(p, start, end) {
    this.start = start;
    this.end = end;
    if (p.sourceFile !== null) { this.source = p.sourceFile; }
  };

  // The `getLineInfo` function is mostly useful when the
  // `locations` option is off (for performance reasons) and you
  // want to find the line/column position for a given character
  // offset. `input` should be the code string that the offset refers
  // into.

  function getLineInfo(input, offset) {
    for (var line = 1, cur = 0; ;) {
      var nextBreak = nextLineBreak(input, cur, offset);
      if (nextBreak < 0) { return new Position(line, offset - cur) }
      ++line;
      cur = nextBreak;
    }
  }

  // A second argument must be given to configure the parser process.
  // These options are recognized (only `ecmaVersion` is required):

  var defaultOptions$1 = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must be
    // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
    // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
    // (the latest version the library supports). This influences
    // support for strict mode, the set of reserved words, and support
    // for new syntax features.
    ecmaVersion: null,
    // `sourceType` indicates the mode the code should be parsed in.
    // Can be either `"script"` or `"module"`. This influences global
    // strict mode and parsing of `import` and `export` declarations.
    sourceType: "script",
    // `onInsertedSemicolon` can be a callback that will be called
    // when a semicolon is automatically inserted. It will be passed
    // the position of the comma as an offset, and if `locations` is
    // enabled, it is given the location as a `{line, column}` object
    // as second argument.
    onInsertedSemicolon: null,
    // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
    // trailing commas.
    onTrailingComma: null,
    // By default, reserved words are only enforced if ecmaVersion >= 5.
    // Set `allowReserved` to a boolean value to explicitly turn this on
    // an off. When this option has the value "never", reserved words
    // and keywords can also not be used as property names.
    allowReserved: null,
    // When enabled, a return at the top level is not considered an
    // error.
    allowReturnOutsideFunction: false,
    // When enabled, import/export statements are not constrained to
    // appearing at the top of the program, and an import.meta expression
    // in a script isn't considered an error.
    allowImportExportEverywhere: false,
    // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
    // When enabled, await identifiers are allowed to appear at the top-level scope,
    // but they are still not allowed in non-async functions.
    allowAwaitOutsideFunction: null,
    // When enabled, super identifiers are not constrained to
    // appearing in methods and do not raise an error when they appear elsewhere.
    allowSuperOutsideMethod: null,
    // When enabled, hashbang directive in the beginning of file is
    // allowed and treated as a line comment. Enabled by default when
    // `ecmaVersion` >= 2023.
    allowHashBang: true,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onToken` option, which will
    // cause Acorn to call that function with object in the same
    // format as tokens returned from `tokenizer().getToken()`. Note
    // that you are not allowed to call the parser from the
    // callback—that will corrupt its internal state.
    onToken: null,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null,
    // When enabled, parenthesized expressions are represented by
    // (non-standard) ParenthesizedExpression nodes
    preserveParens: false,
    // Turn on objj to allow Objective-J syntax
    objj: true,
    // Turn on preprocess to allow C preprocess derectives.
    // #define macro1
    // #define macro2 console.log("Hello")
    // #define macro3(x,y,z) if (x > y && y > z) console.log("Touchdown!!!")
    // #if macro1
    // #else
    // #endif
    // etc...
    preprocess: true,
    // Preprocess 'get include file' function. It should return an object with two attributes
    // 'include': a string with the file to be included
    // 'sourceFile': is optional and should be a string with the filename. It will
    // be included in the locations property as 'source'
    // Return null if file can't be found. The parser will raise an exception
    preprocessGetIncludeFile: defaultGetIncludeFile,
    // Preprocess add macro function
    preprocessAddMacro: null,
    // Preprocess get macro function
    preprocessGetMacro: null,
    // Preprocess undefine macro function. To delete a macro
    preprocessUndefineMacro: null,
    // Preprocess is macro function
    preprocessIsMacro: null,
    macros: null,
    preIncludeFiles: null
  };

  // Macro store default implementation

  function defaultGetIncludeFile(filename) {
    return { include: "#define FOO(x) x\n", sourceFile: filename }
  }

  // Interpret and default an options object

  var warnedAboutEcmaVersion = false;

  function getOptions(opts) {
    var options = {};

    for (var opt in defaultOptions$1) { options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions$1[opt]; }

    if (options.ecmaVersion === "latest") {
      options.ecmaVersion = 1e8;
    } else if (options.ecmaVersion == null) {
      if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
        warnedAboutEcmaVersion = true;
        console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
      }
      options.ecmaVersion = 11;
    } else if (options.ecmaVersion >= 2015) {
      options.ecmaVersion -= 2009;
    }

    if (options.allowReserved == null) { options.allowReserved = options.ecmaVersion < 5; }

    if (opts.allowHashBang == null) { options.allowHashBang = options.allowHashBang || options.ecmaVersion >= 14; }

    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function (token) { return tokens.push(token); };
    }
    if (isArray(options.onComment)) { options.onComment = pushComment(options, options.onComment); }

    return options
  }

  function pushComment(options, array) {
    return function (block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "Block" : "Line",
        value: text,
        start: start,
        end: end
      };
      if (options.locations) { comment.loc = new SourceLocation(this, startLoc, endLoc); }
      if (options.ranges) { comment.range = [start, end]; }
      array.push(comment);
    }
  }

  // Each scope gets a bitset that may contain these flags
  var
    SCOPE_TOP = 1,
    SCOPE_FUNCTION = 2,
    SCOPE_ASYNC = 4,
    SCOPE_GENERATOR = 8,
    SCOPE_ARROW = 16,
    SCOPE_SIMPLE_CATCH = 32,
    SCOPE_SUPER = 64,
    SCOPE_DIRECT_SUPER = 128,
    SCOPE_CLASS_STATIC_BLOCK = 256,
    SCOPE_OBJJ_METHOD = 512,
    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;

  function functionFlags(async, generator) {
    return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
  }

  // Used in checkLVal* and declareName to determine the type of a binding
  var
    BIND_NONE = 0, // Not a binding
    BIND_VAR = 1, // Var-style binding
    BIND_LEXICAL = 2, // Let- or const-style binding
    BIND_FUNCTION = 3, // Function declaration
    BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
    BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

  var Macro = function Macro(ident, macro, parameters, start, isArgument, parameterScope, variadicName, locationOffset, aSourceFile) {
    this.identifier = ident;
    if (macro != null) { this.macro = macro; }
    if (parameters) { this.parameters = parameters; }
    if (start != null) { this.start = start; }
    if (isArgument) { this.isArgument = true; }
    if (parameterScope) { this.parameterScope = parameterScope; }
    if (variadicName) { this.variadicName = variadicName; }
    if (locationOffset) { this.locationOffset = locationOffset; }
    if (aSourceFile) { this.sourceFile = aSourceFile; }
  };

  Macro.prototype.isParameterFunction = function isParameterFunction() {
    return this.isParameterFunctionVar || (this.isParameterFunctionVar = wordsRegexp$1((this.parameters || []).join(" ")))
  };

  var Parser = function Parser(options, input, startPos) {
    this.options = options = getOptions(options);
    this.sourceFile = options.sourceFile;
    this.keywords = wordsRegexp$1(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
    var reserved = "";
    if (options.allowReserved !== true) {
      reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
      if (options.sourceType === "module") { reserved += " await"; }
    }
    this.reservedWords = wordsRegexp$1(reserved);
    var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
    this.reservedWordsStrict = wordsRegexp$1(reservedStrict);
    this.reservedWordsStrictBind = wordsRegexp$1(reservedStrict + " " + reservedWords.strictBind);
    this.input = String(input);

    // Used to signal to callers of `readWord1` whether the word
    // contained any escape sequences. This is needed because words with
    // escape sequences must not be interpreted as keywords.
    this.containsEsc = false;

    // Set up token state

    // The current position of the tokenizer in the input.
    if (startPos) {
      this.pos = startPos;
      this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    } else {
      this.pos = this.lineStart = 0;
      this.curLine = 1;
    }

    // Properties of the current token:
    // Its type
    this.type = types$1.eof;
    // For tokens that include more information than their type, the value
    this.value = null;
    // Its start and end offset
    this.start = this.end = this.pos;
    // And, if locations are used, the {line, column} object
    // corresponding to those offsets
    this.startLoc = this.endLoc = this.curPosition();

    // Position information for the previous token
    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;

    // The context stack is used to superficially track syntactic
    // context to predict whether a regular expression is allowed in a
    // given position.
    this.context = this.initialContext();
    this.exprAllowed = true;

    // Figure out if it's a module code.
    this.inModule = options.sourceType === "module";
    this.strict = this.inModule || this.strictDirective(this.pos);

    // Used to signify the start of a potential arrow function
    this.potentialArrowAt = -1;
    this.potentialArrowInForAwait = false;

    // Positions to delayed-check that yield/await does not exist in default parameters.
    this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
    // Labels in scope.
    this.labels = [];
    // Thus-far undefined exports.
    this.undefinedExports = Object.create(null);

    // If enabled, skip leading hashbang line.
    if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") { this.skipLineComment(2); }

    // Scope tracking for duplicate variable names (see scope.js)
    this.scopeStack = [];
    this.enterScope(SCOPE_TOP);

    // For RegExp validation
    this.regexpState = null;

    // The stack of private names.
    // Each element has two properties: 'declared' and 'used'.
    // When it exited from the outermost class definition, all used private names must be declared.
    this.privateNameStack = [];

    // These are used by the preprocess tokenizer.
    this.preprocessParameterScope = null;
    this.preTokParameterScope = null;
    this.preprocessMacroParameterListMode = false;
    this.preprocessIsParsingPreprocess = false;
    this.preprocessStack = [];
    this.preprocessStackLastItem = null;
    this.preprocessOnlyTransformArgumentsForLastToken = null;
    this.preprocessDontConcatenate = false;
    this.preNotSkipping = true;
    this.preConcatenating = false;
    this.preIfLevel = [];

    this.preType = null;
    this.preVal = null;
    this.preStart = null;
    this.preEnd = null;

    this.preLastStart = null;
    this.preLastEnd = null;

    this.localLastEnd = null;
    this.firstEnd = null;

    this.preInput = null;

    // This is the parser's state. `inFunction` is used to reject
    // `return` statements outside of functions, `labels` to verify that
    // `break` and `continue` have somewhere to jump to, `functionIsAsync`
    // to know if await is a identifier or a keyword and `strict`
    // indicates whether strict mode is on.

    this.objjInFunction = null;
    this.objjLabels = null;
    this.objjFunctionIsAsync = null;
    this.objjStrict = null;

    this.nodeMessageSendObjectExpression = null;

    // The start and end offsets of the current token.
    // First tokstart is the same as tokStart except when the preprocessor finds a macro.
    // Then the tokFirstStart points to the start of the token that will be replaced by the macro.
    // tokStart then points at the macros first
    // tokMacroOffset is the offset to the current macro for the current token
    // tokPosMacroOffset is the offset to the current macro for the current tokPos

    this.tokFirstStart = null;
    this.firstTokEnd = null;
    this.tokMacroOffset = null;
    this.tokPosMacroOffset = null;
    this.lastTokMacroOffset = null;

    function macrosMakeBuiltin(name, macro, endPos) { return new Macro(name, macro, null, endPos - name.length) }

    if (this.options.preprocess) {
      var self = this;
      var macros = Object.create(null);
      var macrosIsRegEx;
      if (this.options.preprocessAddMacro == null) {
        this.options.preprocessAddMacro = function (macro) {
          macros[macro.identifier] = macro;
          macrosIsRegEx = null;
        };
      }
      if (this.options.preprocessGetMacro == null) {
        this.options.preprocessGetMacro = function (macroIdentifier) {
          return macros[macroIdentifier]
        };
      }
      if (this.options.preprocessUndefineMacro == null) {
        this.options.preprocessUndefineMacro = function defaultUndefineMacro(macroIdentifier) {
          delete macros[macroIdentifier];
          macrosIsRegEx = null;
        };
      }
      if (this.options.preprocessIsMacro == null) {
        this.options.preprocessIsMacro = function (macroIdentifier) {
          return (macrosIsRegEx || (macrosIsRegEx = wordsRegexp$1(Object.keys(macros).concat(Object.keys(self.macrosBuiltinMacros).filter(function (key) { return this[key]().macro != null }, self.macrosBuiltinMacros)).join(" ")))).test(macroIdentifier)
        };
      }
      this.macrosBuiltinMacros = {
        __OBJJ__: function () { return macrosMakeBuiltin("__OBJJ__", self.options.objj ? "1" : null, self.pos) }
      };

      this.macrosBuiltinMacros["__" + "BROWSER" + "__"] = function () { return macrosMakeBuiltin("__BROWSER__", (typeof window) !== "undefined" ? "1" : null, self.pos) };
      this.macrosBuiltinMacros["__" + "LINE" + "__"] = function () { return macrosMakeBuiltin("__LINE__", String(self.options.locations ? self.curLine : getLineInfo(self.input, self.pos).line), self.pos) };
      this.macrosBuiltinMacros["__" + "DATE" + "__"] = function () { var date, day; return macrosMakeBuiltin("__DATE__", (date = new Date(), day = String(date.getDate()), ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + (day.length > 1 ? " " : "  ") + day + " " + date.getFullYear()), self.pos) };
      this.macrosBuiltinMacros["__" + "TIME" + "__"] = function () { var date; return macrosMakeBuiltin("__TIME__", (date = new Date(), ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)), self.pos) };

      if (this.options.macros) { this.defineMacros(this.options.macros); }

      var preIncludeFiles = this.options.preIncludeFiles;
      if (preIncludeFiles && preIncludeFiles.length) {
        for (var i = preIncludeFiles.length - 1; i >= 0; i--) {
          var preIncludeFile = preIncludeFiles[i];

          var preIncludeMacro = new Macro(null, preIncludeFile.include, null, 0, false, null, false, null, preIncludeFile.sourceFile);
          this.pushMacroToStack(preIncludeMacro, preIncludeMacro.macro, 0, null, null, this.pos, null, true); // isIncludeFile
          this.skipSpace();
        }
      }
    }
  };

  var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };

  Parser.prototype.parse = function parse() {
    var node = this.options.program || this.startNode();
    this.nextToken();
    return this.parseTopLevel(node)
  };

  prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };

  prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit };

  prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit };

  prototypeAccessors.canAwait.get = function () {
    for (var i = this.scopeStack.length - 1; i >= 0; i--) {
      var scope = this.scopeStack[i];
      if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) { return false }
      if (scope.flags & SCOPE_FUNCTION) { return (scope.flags & SCOPE_ASYNC) > 0 }
    }
    return (this.inModule && this.options.ecmaVersion >= 13) || this.options.allowAwaitOutsideFunction
  };

  prototypeAccessors.allowSuper.get = function () {
    var ref = this.currentThisScope();
    var flags = ref.flags;
    var inClassFieldInit = ref.inClassFieldInit;
    return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod || (this.options.objj && (this.currentObjJMethodScope().flags & SCOPE_OBJJ_METHOD) > 0)
  };

  prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };

  prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

  prototypeAccessors.allowNewDotTarget.get = function () {
    var ref = this.currentThisScope();
    var flags = ref.flags;
    var inClassFieldInit = ref.inClassFieldInit;
    return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit
  };

  prototypeAccessors.inClassStaticBlock.get = function () {
    return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0
  };

  Parser.extend = function extend() {
    var plugins = [], len = arguments.length;
    while (len--) plugins[len] = arguments[len];

    var cls = this;
    for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
    return cls
  };

  Parser.parse = function parse(input, options) {
    return new this(options, input).parse()
  };

  Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
    var parser = new this(options, input, pos);
    parser.nextToken();
    return parser.parseExpression()
  };

  Parser.tokenizer = function tokenizer(input, options) {
    return new this(options, input)
  };

  Object.defineProperties(Parser.prototype, prototypeAccessors);

  var pp$c = Parser.prototype;

  // ## Parser utilities

  var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
  pp$c.strictDirective = function (start) {
    if (this.options.ecmaVersion < 5) { return false }
    for (; ;) {
      // Try to find string literal.
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      var match = literal.exec(this.input.slice(start));
      if (!match) { return false }
      if ((match[1] || match[2]) === "use strict") {
        skipWhiteSpace.lastIndex = start + match[0].length;
        var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
        var next = this.input.charAt(end);
        return next === ";" || next === "}" ||
          (lineBreak.test(spaceAfter[0]) &&
            !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "="))
      }
      start += match[0].length;

      // Skip semicolon, if any.
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      if (this.input[start] === ";") { start++; }
    }
  };

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  pp$c.eat = function (type) {
    if (this.type === type) {
      this.next();
      return true
    } else {
      return false
    }
  };

  // Tests whether parsed token is a contextual keyword.

  pp$c.isContextual = function (name) {
    return this.type === types$1.name && this.value === name && !this.containsEsc
  };

  // Consumes contextual keyword if possible.

  pp$c.eatContextual = function (name) {
    if (!this.isContextual(name)) { return false }
    this.next();
    return true
  };

  // Asserts that following token is given contextual keyword.

  pp$c.expectContextual = function (name) {
    if (!this.eatContextual(name)) { this.unexpected(); }
  };

  // Test whether a semicolon can be inserted at the current position.

  pp$c.canInsertSemicolon = function () {
    return this.type === types$1.eof ||
      this.type === types$1.braceR ||
      lineBreak.test(this.lastEndInput.slice(this.lastTokEnd, this.lastEndOfFile || this.tokFirstStart)) || this.lastEndOfFile != null ||
      (this.nodeMessageSendObjectExpression && this.nodeMessageSendObjectExpression.canInsertSemicolonBefore && this.options.objj)
  };

  pp$c.insertSemicolon = function () {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon) { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
      return true
    }
  };

  // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.

  pp$c.semicolon = function () {
    if (!this.eat(types$1.semi) && !this.insertSemicolon()) { this.nodeMessageSendObjectExpression ? this.raise((this.options.objj && this.nodeMessageSendObjectExpression.start) || this.start, "Expected a semicolon") : this.unexpected(); }
  };

  pp$c.afterTrailingComma = function (tokType, notNext) {
    if (this.type === tokType) {
      if (this.options.onTrailingComma) { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
      if (!notNext) { this.next(); }
      return true
    }
  };

  // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error.

  pp$c.expect = function (type) {
    this.eat(type) || this.unexpected();
  };

  // Raise an unexpected token error.

  pp$c.unexpected = function (pos) {
    this.raise(pos != null ? pos : this.start, "Unexpected token");
  };

  var DestructuringErrors = function DestructuringErrors() {
    this.shorthandAssign =
      this.trailingComma =
      this.parenthesizedAssign =
      this.parenthesizedBind =
      this.doubleProto =
      -1;
  };

  pp$c.checkPatternErrors = function (refDestructuringErrors, isAssign) {
    if (!refDestructuringErrors) { return }
    if (refDestructuringErrors.trailingComma > -1) { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
    var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
    if (parens > -1) { this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern"); }
  };

  pp$c.checkExpressionErrors = function (refDestructuringErrors, andThrow) {
    if (!refDestructuringErrors) { return false }
    var shorthandAssign = refDestructuringErrors.shorthandAssign;
    var doubleProto = refDestructuringErrors.doubleProto;
    if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
    if (shorthandAssign >= 0) { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
    if (doubleProto >= 0) { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
  };

  pp$c.checkYieldAwaitInDefaultParams = function () {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
    if (this.awaitPos) { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
  };

  pp$c.isSimpleAssignTarget = function (expr) {
    if (expr.type === "ParenthesizedExpression") { return this.isSimpleAssignTarget(expr.expression) }
    return expr.type === "Identifier" || expr.type === "MemberExpression"
  };

  var pp$b = Parser.prototype;

  // ### Statement parsing

  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.

  pp$b.parseTopLevel = function (node) {
    var exports = Object.create(null);
    if (!node.body) { node.body = []; }
    while (this.type !== types$1.eof) {
      var stmt = this.parseStatement(null, true, exports);
      node.body.push(stmt);
    }
    if (this.inModule) {
      for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
        var name = list[i];

        this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
      }
    }
    this.adaptDirectivePrologue(node.body);
    this.next();
    node.sourceType = this.options.sourceType;
    return this.finishNode(node, "Program")
  };

  var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };

  pp$b.isLet = function (context) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
    // For ambiguous cases, determine if a LexicalDeclaration (or only a
    // Statement) is allowed here. If context is not empty then only a Statement
    // is allowed. However, `let [` is an explicit negative lookahead for
    // ExpressionStatement, so special-case it first.
    if (nextCh === 91 || nextCh === 92 || nextCh > 0xd7ff && nextCh < 0xdc00) { return true } // '[', '/', astral
    if (context) { return false }

    if (nextCh === 123) { return true } // '{'
    if (isIdentifierStart(nextCh, true)) {
      var pos = next + 1;
      while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) { ++pos; }
      if (nextCh === 92 || nextCh > 0xd7ff && nextCh < 0xdc00) { return true }
      var ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) { return true }
    }
    return false
  };

  // check 'async [no LineTerminator here] function'
  // - 'async /*foo*/ function' is OK.
  // - 'async /*\n*/ function' is invalid.
  pp$b.isAsyncFunction = function () {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async")) { return false }

    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, after;
    return !lineBreak.test(this.input.slice(this.pos, next)) &&
      this.input.slice(next, next + 8) === "function" &&
      (next + 8 === this.input.length ||
        !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 0xd7ff && after < 0xdc00))
  };

  // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo)`, where looking at the previous token
  // does not help.

  pp$b.parseStatement = function (context, topLevel, exports) {
    var starttype = this.type, node = this.startNode(), kind;

    // This is a special case when trying figure out if this is a subscript to the former line or a new send message statement on this line...
    if (this.nodeMessageSendObjectExpression) {
      node.expression = this.parseObjjMessageSendExpression(this.nodeMessageSendObjectExpression, this.nodeMessageSendObjectExpression.object);
      this.nodeMessageSendObjectExpression = null;
      this.semicolon();
      return this.finishNode(node, "ExpressionStatement")
    }

    if (this.isLet(context)) {
      starttype = types$1._var;
      kind = "let";
    }

    // Objective-J
    if (this.options.objj) {
      switch (starttype) {
        case objjAtTypes._implementation: return this.parseObjjImplementation(node)
        case objjAtTypes._interface: return this.parseObjjInterface(node)
        case objjAtTypes._protocol:
          // If next token is a left parenthesis it is a ProtocolLiteral expression so bail out
          if (this.input.charCodeAt(this.pos) !== 40) {
            return this.parseObjjProtocol(node)
          } else {
            break
          }
        case objjAtTypes._import: return this.parseObjjImport(node)
        case objjAtTypes._preprocess: return this.parseObjjPreprocess(node)
        case objjAtTypes._class: return this.parseObjjClass(node)
        case objjAtTypes._global: return this.parseObjjGlobal(node)
        case objjAtTypes._typedef: return this.parseObjjTypedef(node)
      }
    }

    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
      case types$1._break: case types$1._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
      case types$1._debugger: return this.parseDebuggerStatement(node)
      case types$1._do: return this.parseDoStatement(node)
      case types$1._for: return this.parseForStatement(node)
      case types$1._function:
        // Function as sole body of either an if statement or a labeled statement
        // works, but not when it is part of a labeled statement that is the sole
        // body of an if statement.
        if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
        return this.parseFunctionStatement(node, false, !context)
      case types$1._class:
        if (context) { this.unexpected(); }
        return this.parseClass(node, true)
      case types$1._if: return this.parseIfStatement(node)
      case types$1._return: return this.parseReturnStatement(node)
      case types$1._switch: return this.parseSwitchStatement(node)
      case types$1._throw: return this.parseThrowStatement(node)
      case types$1._try: return this.parseTryStatement(node)
      case types$1._const: case types$1._var:
        kind = kind || this.value;
        if (context && kind !== "var") { this.unexpected(); }
        return this.parseVarStatement(node, kind)
      case types$1._while: return this.parseWhileStatement(node)
      case types$1._with: return this.parseWithStatement(node)
      case types$1.braceL: return this.parseBlock(true, node)
      case types$1.semi: return this.parseEmptyStatement(node)
      case types$1._export:
      case types$1._import:
        if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
          skipWhiteSpace.lastIndex = this.pos;
          var skip = skipWhiteSpace.exec(this.input);
          var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
          if (nextCh === 40 || nextCh === 46) // '(' or '.'
          { return this.parseExpressionStatement(node, this.parseExpression()) }
        }

        if (!this.options.allowImportExportEverywhere) {
          if (!topLevel) { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
          if (!this.inModule) { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
        }
        return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports)

      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.
      default:
        if (this.isAsyncFunction()) {
          if (context) { this.unexpected(); }
          this.next();
          return this.parseFunctionStatement(node, true, !context)
        }

        var maybeName = this.value, expr = this.parseExpression();
        if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) { return this.parseLabeledStatement(node, maybeName, expr, context) }
        else { return this.parseExpressionStatement(node, expr) }
    }
  };

  pp$b.parseBreakContinueStatement = function (node, keyword) {
    var isBreak = keyword === "break";
    this.next();
    if (this.eat(types$1.semi) || this.insertSemicolon()) { node.label = null; }
    else if (this.type !== types$1.name) { this.unexpected(); }
    else {
      node.label = this.parseIdent();
      this.semicolon();
    }

    // Verify that there is an actual destination to break or
    // continue to.
    var i = 0;
    for (; i < this.labels.length; ++i) {
      var lab = this.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
        if (node.label && isBreak) { break }
      }
    }
    if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
  };

  pp$b.parseDebuggerStatement = function (node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement")
  };

  pp$b.parseDoStatement = function (node) {
    this.next();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("do");
    this.labels.pop();
    this.expect(types$1._while);
    node.test = this.parseParenExpression();
    if (this.options.ecmaVersion >= 6) { this.eat(types$1.semi); }
    else { this.semicolon(); }
    return this.finishNode(node, "DoWhileStatement")
  };

  // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
  // loop is non-trivial. Basically, we have to parse the init `var`
  // statement or expression, disallowing the `in` operator (see
  // the second parameter to `parseExpression`), and then check
  // whether the next token is `in` or `of`. When there is no init
  // part (semicolon immediately after the opening parenthesis), it
  // is a regular `for` loop.

  pp$b.parseForStatement = function (node) {
    this.next();
    var awaitAt = (this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await")) ? this.lastTokStart : -1;
    this.labels.push(loopLabel);
    this.enterScope(0);
    this.expect(types$1.parenL);
    if (this.type === types$1.semi) {
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, null)
    }
    var isLet = this.isLet();
    if (this.type === types$1._var || this.type === types$1._const || isLet) {
      var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
      this.next();
      this.parseVar(init$1, true, kind);
      this.finishNode(init$1, "VariableDeclaration");
      if ((this.type === types$1._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
        if (this.options.ecmaVersion >= 9) {
          if (this.type === types$1._in) {
            if (awaitAt > -1) { this.unexpected(awaitAt); }
          } else { node.await = awaitAt > -1; }
        }
        return this.parseForIn(node, init$1)
      }
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, init$1)
    }
    var startsWithLet = this.isContextual("let"), isForOf = false;
    var refDestructuringErrors = new DestructuringErrors;
    var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
    if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      if (startsWithLet && isForOf) { this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'."); }
      this.toAssignable(init, false, refDestructuringErrors);
      this.checkLValPattern(init);
      return this.parseForIn(node, init)
    } else {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init)
  };

  pp$b.parseFunctionStatement = function (node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
  };

  pp$b.parseIfStatement = function (node) {
    this.next();
    node.test = this.parseParenExpression();
    // allow function declarations in branches, but only in non-strict mode
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement")
  };

  pp$b.parseReturnStatement = function (node) {
    if (!this.inFunction && !this.options.allowReturnOutsideFunction && !this.objjInFunction) { this.raise(this.start, "'return' outside of function"); }
    this.next();

    // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.

    if (this.eat(types$1.semi) || this.insertSemicolon()) { node.argument = null; }
    else { node.argument = this.parseExpression(); this.semicolon(); }
    return this.finishNode(node, "ReturnStatement")
  };

  pp$b.parseSwitchStatement = function (node) {
    this.next();
    node.discriminant = this.parseParenExpression();
    node.cases = [];
    this.expect(types$1.braceL);
    this.labels.push(switchLabel);
    this.enterScope(0);

    // Statements under must be grouped (by label) in SwitchCase
    // nodes. `cur` is used to keep the node that we are currently
    // adding statements to.

    var cur;
    for (var sawDefault = false; this.type !== types$1.braceR;) {
      if (this.type === types$1._case || this.type === types$1._default) {
        var isCase = this.type === types$1._case;
        if (cur) { this.finishNode(cur, "SwitchCase"); }
        node.cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(types$1.colon);
      } else {
        if (!cur) { this.unexpected(); }
        cur.consequent.push(this.parseStatement(null));
      }
    }
    this.exitScope();
    if (cur) { this.finishNode(cur, "SwitchCase"); }
    this.next(); // Closing brace
    this.labels.pop();
    return this.finishNode(node, "SwitchStatement")
  };

  pp$b.parseThrowStatement = function (node) {
    this.next();
    if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement")
  };

  // Reused empty array added for node fields that are always empty.

  var empty$1 = [];

  pp$b.parseTryStatement = function (node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.type === types$1._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(types$1.parenL)) {
        clause.param = this.parseBindingAtom();
        var simple = clause.param.type === "Identifier";
        this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLValPattern(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
        this.expect(types$1.parenR);
      } else {
        if (this.options.ecmaVersion < 10) { this.unexpected(); }
        clause.param = null;
        this.enterScope(0);
      }
      clause.body = this.parseBlock(false);
      this.exitScope();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer) { this.raise(node.start, "Missing catch or finally clause"); }
    return this.finishNode(node, "TryStatement")
  };

  pp$b.parseVarStatement = function (node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration")
  };

  pp$b.parseWhileStatement = function (node) {
    this.next();
    node.test = this.parseParenExpression();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("while");
    this.labels.pop();
    return this.finishNode(node, "WhileStatement")
  };

  pp$b.parseWithStatement = function (node) {
    if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement("with");
    return this.finishNode(node, "WithStatement")
  };

  pp$b.parseEmptyStatement = function (node) {
    this.next();
    return this.finishNode(node, "EmptyStatement")
  };

  pp$b.parseLabeledStatement = function (node, maybeName, expr, context) {
    for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
      var label = list[i$1];

      if (label.name === maybeName) {
        this.raise(expr.start, "Label '" + maybeName + "' is already declared");
      }
    }
    var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
    for (var i = this.labels.length - 1; i >= 0; i--) {
      var label$1 = this.labels[i];
      if (label$1.statementStart === node.start) {
        // Update information about previous labels on this node
        label$1.statementStart = this.start;
        label$1.kind = kind;
      } else { break }
    }
    this.labels.push({ name: maybeName, kind: kind, statementStart: this.start });
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement")
  };

  pp$b.parseExpressionStatement = function (node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement")
  };

  // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).

  pp$b.parseBlock = function (createNewLexicalScope, node, exitStrict) {
    if (createNewLexicalScope === void 0) createNewLexicalScope = true;
    if (node === void 0) node = this.startNode();

    node.body = [];
    this.expect(types$1.braceL);
    if (createNewLexicalScope) { this.enterScope(0); }
    while (this.type !== types$1.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    if (exitStrict) { this.strict = false; }
    this.next();
    if (createNewLexicalScope) { this.exitScope(); }
    return this.finishNode(node, "BlockStatement")
  };

  // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.

  pp$b.parseFor = function (node, init) {
    node.init = init;
    this.expect(types$1.semi);
    node.test = this.type === types$1.semi ? null : this.parseExpression();
    this.expect(types$1.semi);
    node.update = this.type === types$1.parenR ? null : this.parseExpression();
    this.expect(types$1.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, "ForStatement")
  };

  // Parse a `for`/`in` and `for`/`of` loop, which are almost
  // same from parser's perspective.

  pp$b.parseForIn = function (node, init) {
    var isForIn = this.type === types$1._in;
    this.next();

    if (
      init.type === "VariableDeclaration" &&
      init.declarations[0].init != null &&
      (
        !isForIn ||
        this.options.ecmaVersion < 8 ||
        this.strict ||
        init.kind !== "var" ||
        init.declarations[0].id.type !== "Identifier"
      )
    ) {
      this.raise(
        init.start,
        ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
      );
    }
    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types$1.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
  };

  // Parse a list of variable declarations.

  pp$b.parseVar = function (node, isFor, kind) {
    node.declarations = [];
    node.kind = kind;
    for (; ;) {
      var decl = this.startNode();
      this.parseVarId(decl, kind);
      if (this.eat(types$1.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else if (kind === "const" && !(this.type === types$1._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
        this.unexpected();
      } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
        this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
      } else {
        decl.init = null;
      }
      node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types$1.comma)) { break }
    }
    return node
  };

  pp$b.parseVarId = function (decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
  };

  var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

  // Parse a function declaration or literal (depending on the
  // `statement & FUNC_STATEMENT`).

  // Remove `allowExpressionBody` for 7.0.0, as it is only called with false
  pp$b.parseFunction = function (node, statement, allowExpressionBody, isAsync, forInit) {
    this.initFunction(node);
    if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
      if (this.type === types$1.star && (statement & FUNC_HANGING_STATEMENT)) { this.unexpected(); }
      node.generator = this.eat(types$1.star);
    }
    if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

    if (statement & FUNC_STATEMENT) {
      node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types$1.name ? null : this.parseIdent();
      if (node.id && !(statement & FUNC_HANGING_STATEMENT))
      // If it is a regular function declaration in sloppy mode, then it is
      // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
      // mode depends on properties of the current scope (see
      // treatFunctionsAsVar).
      { this.checkLValSimple(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
    }

    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(node.async, node.generator));

    if (!(statement & FUNC_STATEMENT)) { node.id = this.type === types$1.name ? this.parseIdent() : null; }

    this.parseFunctionParams(node);
    this.parseFunctionBody(node, allowExpressionBody, false, forInit);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
  };

  pp$b.parseFunctionParams = function (node) {
    this.expect(types$1.parenL);
    node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
  };

  // Parse a class declaration or literal (depending on the
  // `isStatement` parameter).

  pp$b.parseClass = function (node, isStatement) {
    this.next();

    // ecma-262 14.6 Class Definitions
    // A class definition is always strict mode code.
    var oldStrict = this.strict;
    this.strict = true;

    this.parseClassId(node, isStatement);
    this.parseClassSuper(node);
    var privateNameMap = this.enterClassBody();
    var classBody = this.startNode();
    var hadConstructor = false;
    classBody.body = [];
    this.expect(types$1.braceL);
    while (this.type !== types$1.braceR) {
      var element = this.parseClassElement(node.superClass !== null);
      if (element) {
        classBody.body.push(element);
        if (element.type === "MethodDefinition" && element.kind === "constructor") {
          if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
          hadConstructor = true;
        } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
          this.raiseRecoverable(element.key.start, ("Identifier '#" + (element.key.name) + "' has already been declared"));
        }
      }
    }
    this.strict = oldStrict;
    this.next();
    node.body = this.finishNode(classBody, "ClassBody");
    this.exitClassBody();
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
  };

  pp$b.parseClassElement = function (constructorAllowsSuper) {
    if (this.eat(types$1.semi)) { return null }

    var ecmaVersion = this.options.ecmaVersion;
    var node = this.startNode();
    var keyName = "";
    var isGenerator = false;
    var isAsync = false;
    var kind = "method";
    var isStatic = false;

    if (this.eatContextual("static")) {
      // Parse static init block
      if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
        this.parseClassStaticBlock(node);
        return node
      }
      if (this.isClassElementNameStart() || this.type === types$1.star) {
        isStatic = true;
      } else {
        keyName = "static";
      }
    }
    node.static = isStatic;
    if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
      if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
        isAsync = true;
      } else {
        keyName = "async";
      }
    }
    if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
      isGenerator = true;
    }
    if (!keyName && !isAsync && !isGenerator) {
      var lastValue = this.value;
      if (this.eatContextual("get") || this.eatContextual("set")) {
        if (this.isClassElementNameStart()) {
          kind = lastValue;
        } else {
          keyName = lastValue;
        }
      }
    }

    // Parse element name
    if (keyName) {
      // 'async', 'get', 'set', or 'static' were not a keyword contextually.
      // The last token is any of those. Make it the element name.
      node.computed = false;
      node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
      node.key.name = keyName;
      this.finishNode(node.key, "Identifier");
    } else {
      this.parseClassElementName(node);
    }

    // Parse element value
    if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
      var isConstructor = !node.static && checkKeyName(node, "constructor");
      var allowsDirectSuper = isConstructor && constructorAllowsSuper;
      // Couldn't move this check into the 'parseClassMethod' method for backward compatibility.
      if (isConstructor && kind !== "method") { this.raise(node.key.start, "Constructor can't have get/set modifier"); }
      node.kind = isConstructor ? "constructor" : kind;
      this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
    } else {
      this.parseClassField(node);
    }

    return node
  };

  pp$b.isClassElementNameStart = function () {
    return (
      this.type === types$1.name ||
      this.type === types$1.privateId ||
      this.type === types$1.num ||
      this.type === types$1.string ||
      this.type === types$1.bracketL ||
      this.type.keyword
    )
  };

  pp$b.parseClassElementName = function (element) {
    if (this.type === types$1.privateId) {
      if (this.value === "constructor") {
        this.raise(this.start, "Classes can't have an element named '#constructor'");
      }
      element.computed = false;
      element.key = this.parsePrivateIdent();
    } else {
      this.parsePropertyName(element);
    }
  };

  pp$b.parseClassMethod = function (method, isGenerator, isAsync, allowsDirectSuper) {
    // Check key and flags
    var key = method.key;
    if (method.kind === "constructor") {
      if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
      if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
    } else if (method.static && checkKeyName(method, "prototype")) {
      this.raise(key.start, "Classes may not have a static property named prototype");
    }

    // Parse value
    var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);

    // Check value
    if (method.kind === "get" && value.params.length !== 0) { this.raiseRecoverable(value.start, "getter should have no params"); }
    if (method.kind === "set" && value.params.length !== 1) { this.raiseRecoverable(value.start, "setter should have exactly one param"); }
    if (method.kind === "set" && value.params[0].type === "RestElement") { this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params"); }

    return this.finishNode(method, "MethodDefinition")
  };

  pp$b.parseClassField = function (field) {
    if (checkKeyName(field, "constructor")) {
      this.raise(field.key.start, "Classes can't have a field named 'constructor'");
    } else if (field.static && checkKeyName(field, "prototype")) {
      this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
    }

    if (this.eat(types$1.eq)) {
      // To raise SyntaxError if 'arguments' exists in the initializer.
      var scope = this.currentThisScope();
      var inClassFieldInit = scope.inClassFieldInit;
      scope.inClassFieldInit = true;
      field.value = this.parseMaybeAssign();
      scope.inClassFieldInit = inClassFieldInit;
    } else {
      field.value = null;
    }
    this.semicolon();

    return this.finishNode(field, "PropertyDefinition")
  };

  pp$b.parseClassStaticBlock = function (node) {
    node.body = [];

    var oldLabels = this.labels;
    this.labels = [];
    this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
    while (this.type !== types$1.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    this.next();
    this.exitScope();
    this.labels = oldLabels;

    return this.finishNode(node, "StaticBlock")
  };

  pp$b.parseClassId = function (node, isStatement) {
    if (this.type === types$1.name) {
      node.id = this.parseIdent();
      if (isStatement) { this.checkLValSimple(node.id, BIND_LEXICAL, false); }
    } else {
      if (isStatement === true) { this.unexpected(); }
      node.id = null;
    }
  };

  pp$b.parseClassSuper = function (node) {
    node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(false) : null;
  };

  pp$b.enterClassBody = function () {
    var element = { declared: Object.create(null), used: [] };
    this.privateNameStack.push(element);
    return element.declared
  };

  pp$b.exitClassBody = function () {
    var ref = this.privateNameStack.pop();
    var declared = ref.declared;
    var used = ref.used;
    var len = this.privateNameStack.length;
    var parent = len === 0 ? null : this.privateNameStack[len - 1];
    for (var i = 0; i < used.length; ++i) {
      var id = used[i];
      if (!hasOwn(declared, id.name)) {
        if (parent) {
          parent.used.push(id);
        } else {
          this.raiseRecoverable(id.start, ("Private field '#" + (id.name) + "' must be declared in an enclosing class"));
        }
      }
    }
  };

  function isPrivateNameConflicted(privateNameMap, element) {
    var name = element.key.name;
    var curr = privateNameMap[name];

    var next = "true";
    if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
      next = (element.static ? "s" : "i") + element.kind;
    }

    // `class { get #a(){}; static set #a(_){} }` is also conflict.
    if (
      curr === "iget" && next === "iset" ||
      curr === "iset" && next === "iget" ||
      curr === "sget" && next === "sset" ||
      curr === "sset" && next === "sget"
    ) {
      privateNameMap[name] = "true";
      return false
    } else if (!curr) {
      privateNameMap[name] = next;
      return false
    } else {
      return true
    }
  }

  function checkKeyName(node, name) {
    var computed = node.computed;
    var key = node.key;
    return !computed && (
      key.type === "Identifier" && key.name === name ||
      key.type === "Literal" && key.value === name
    )
  }

  // Parses module export declaration.

  pp$b.parseExport = function (node, exports) {
    this.next();
    // export * from '...'
    if (this.eat(types$1.star)) {
      if (this.options.ecmaVersion >= 11) {
        if (this.eatContextual("as")) {
          node.exported = this.parseModuleExportName();
          this.checkExport(exports, node.exported, this.lastTokStart);
        } else {
          node.exported = null;
        }
      }
      this.expectContextual("from");
      if (this.type !== types$1.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
      this.semicolon();
      return this.finishNode(node, "ExportAllDeclaration")
    }
    if (this.eat(types$1._default)) { // export default ...
      this.checkExport(exports, "default", this.lastTokStart);
      var isAsync;
      if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
        var fNode = this.startNode();
        this.next();
        if (isAsync) { this.next(); }
        node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
      } else if (this.type === types$1._class) {
        var cNode = this.startNode();
        node.declaration = this.parseClass(cNode, "nullableID");
      } else {
        node.declaration = this.parseMaybeAssign();
        this.semicolon();
      }
      return this.finishNode(node, "ExportDefaultDeclaration")
    }
    // export var|const|let|function|class ...
    if (this.shouldParseExportStatement()) {
      node.declaration = this.parseStatement(null);
      if (node.declaration.type === "VariableDeclaration") { this.checkVariableExport(exports, node.declaration.declarations); }
      else { this.checkExport(exports, node.declaration.id, node.declaration.id.start); }
      node.specifiers = [];
      node.source = null;
    } else { // export { x, y as z } [from '...']
      node.declaration = null;
      node.specifiers = this.parseExportSpecifiers(exports);
      if (this.eatContextual("from")) {
        if (this.type !== types$1.string) { this.unexpected(); }
        node.source = this.parseExprAtom();
      } else {
        for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
          // check for keywords used as local names
          var spec = list[i];

          this.checkUnreserved(spec.local);
          // check if export is defined
          this.checkLocalExport(spec.local);

          if (spec.local.type === "Literal") {
            this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
          }
        }

        node.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(node, "ExportNamedDeclaration")
  };

  pp$b.checkExport = function (exports, name, pos) {
    if (!exports) { return }
    if (typeof name !== "string") { name = name.type === "Identifier" ? name.name : name.value; }
    if (hasOwn(exports, name)) { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
    exports[name] = true;
  };

  pp$b.checkPatternExport = function (exports, pat) {
    var type = pat.type;
    if (type === "Identifier") { this.checkExport(exports, pat, pat.start); }
    else if (type === "ObjectPattern") {
      for (var i = 0, list = pat.properties; i < list.length; i += 1) {
        var prop = list[i];

        this.checkPatternExport(exports, prop);
      }
    }
    else if (type === "ArrayPattern") {
      for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
        var elt = list$1[i$1];

        if (elt) { this.checkPatternExport(exports, elt); }
      }
    }
    else if (type === "Property") { this.checkPatternExport(exports, pat.value); }
    else if (type === "AssignmentPattern") { this.checkPatternExport(exports, pat.left); }
    else if (type === "RestElement") { this.checkPatternExport(exports, pat.argument); }
    else if (type === "ParenthesizedExpression") { this.checkPatternExport(exports, pat.expression); }
  };

  pp$b.checkVariableExport = function (exports, decls) {
    if (!exports) { return }
    for (var i = 0, list = decls; i < list.length; i += 1) {
      var decl = list[i];

      this.checkPatternExport(exports, decl.id);
    }
  };

  pp$b.shouldParseExportStatement = function () {
    return this.type.keyword === "var" ||
      this.type.keyword === "const" ||
      this.type.keyword === "class" ||
      this.type.keyword === "function" ||
      this.isLet() ||
      this.isAsyncFunction()
  };

  // Parses a comma-separated list of module exports.

  pp$b.parseExportSpecifiers = function (exports) {
    var nodes = [], first = true;
    // export { x, y as z } [from '...']
    this.expect(types$1.braceL);
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) { break }
      } else { first = false; }

      var node = this.startNode();
      node.local = this.parseModuleExportName();
      node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
      this.checkExport(
        exports,
        node.exported,
        node.exported.start
      );
      nodes.push(this.finishNode(node, "ExportSpecifier"));
    }
    return nodes
  };

  // Parses import declaration.

  pp$b.parseImport = function (node) {
    this.next();
    // import '...'
    if (this.type === types$1.string) {
      node.specifiers = empty$1;
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
    }
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration")
  };

  // Parses a comma-separated list of module imports.

  pp$b.parseImportSpecifiers = function () {
    var nodes = [], first = true;
    if (this.type === types$1.name) {
      // import defaultObj, { x, y as z } from '...'
      var node = this.startNode();
      node.local = this.parseIdent();
      this.checkLValSimple(node.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
      if (!this.eat(types$1.comma)) { return nodes }
    }
    if (this.type === types$1.star) {
      var node$1 = this.startNode();
      this.next();
      this.expectContextual("as");
      node$1.local = this.parseIdent();
      this.checkLValSimple(node$1.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
      return nodes
    }
    this.expect(types$1.braceL);
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) { break }
      } else { first = false; }

      var node$2 = this.startNode();
      node$2.imported = this.parseModuleExportName();
      if (this.eatContextual("as")) {
        node$2.local = this.parseIdent();
      } else {
        this.checkUnreserved(node$2.imported);
        node$2.local = node$2.imported;
      }
      this.checkLValSimple(node$2.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node$2, "ImportSpecifier"));
    }
    return nodes
  };

  pp$b.parseModuleExportName = function () {
    if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
      var stringLiteral = this.parseLiteral(this.value);
      if (loneSurrogate.test(stringLiteral.value)) {
        this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
      }
      return stringLiteral
    }
    return this.parseIdent(true)
  };

  // Set `ExpressionStatement#directive` property for directive prologues.
  pp$b.adaptDirectivePrologue = function (statements) {
    for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
      statements[i].directive = statements[i].expression.raw.slice(1, -1);
    }
  };
  pp$b.isDirectiveCandidate = function (statement) {
    return (
      this.options.ecmaVersion >= 5 &&
      statement.type === "ExpressionStatement" &&
      statement.expression.type === "Literal" &&
      typeof statement.expression.value === "string" &&
      // Reject parenthesized strings.
      (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
    )
  };

  var pp$a = Parser.prototype;

  // Convert existing expression atom to assignable pattern
  // if possible.

  pp$a.toAssignable = function (node, isBinding, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 6 && node) {
      switch (node.type) {
        case "Identifier":
          if (this.inAsync && node.name === "await") { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
          break

        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "Dereference":
          break

        case "ObjectExpression":
          node.type = "ObjectPattern";
          if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
          for (var i = 0, list = node.properties; i < list.length; i += 1) {
            var prop = list[i];

            this.toAssignable(prop, isBinding);
            // Early error:
            //   AssignmentRestProperty[Yield, Await] :
            //     `...` DestructuringAssignmentTarget[Yield, Await]
            //
            //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
            if (
              prop.type === "RestElement" &&
              (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
            ) {
              this.raise(prop.argument.start, "Unexpected token");
            }
          }
          break

        case "Property":
          // AssignmentProperty has type === "Property"
          if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
          this.toAssignable(node.value, isBinding);
          break

        case "ArrayExpression":
          node.type = "ArrayPattern";
          if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
          this.toAssignableList(node.elements, isBinding);
          break

        case "SpreadElement":
          node.type = "RestElement";
          this.toAssignable(node.argument, isBinding);
          if (node.argument.type === "AssignmentPattern") { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
          break

        case "AssignmentExpression":
          if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
          node.type = "AssignmentPattern";
          delete node.operator;
          this.toAssignable(node.left, isBinding);
          break

        case "ParenthesizedExpression":
          this.toAssignable(node.expression, isBinding, refDestructuringErrors);
          break

        case "ChainExpression":
          this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
          break

        case "MemberExpression":
          if (!isBinding) { break }

        default:
          this.raise(node.start, "Assigning to rvalue");
      }
    } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
    return node
  };

  // Convert list of expression atoms to binding list.

  pp$a.toAssignableList = function (exprList, isBinding) {
    var end = exprList.length;
    for (var i = 0; i < end; i++) {
      var elt = exprList[i];
      if (elt) { this.toAssignable(elt, isBinding); }
    }
    if (end) {
      var last = exprList[end - 1];
      if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") { this.unexpected(last.argument.start); }
    }
    return exprList
  };

  // Parses spread element.

  pp$a.parseSpread = function (refDestructuringErrors) {
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    return this.finishNode(node, "SpreadElement")
  };

  pp$a.parseRestBinding = function () {
    var node = this.startNode();
    this.next();

    // RestElement inside of a function parameter must be an identifier
    if (this.options.ecmaVersion === 6 && this.type !== types$1.name) { this.unexpected(); }

    node.argument = this.parseBindingAtom();

    return this.finishNode(node, "RestElement")
  };

  // Parses lvalue (assignable) atom.

  pp$a.parseBindingAtom = function () {
    if (this.options.ecmaVersion >= 6) {
      switch (this.type) {
        case types$1.bracketL:
          var node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types$1.bracketR, true, true);
          return this.finishNode(node, "ArrayPattern")

        case types$1.braceL:
          return this.parseObj(true)
      }
    }
    return this.parseIdent()
  };

  pp$a.parseBindingList = function (close, allowEmpty, allowTrailingComma) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (first) { first = false; }
      else { this.expect(types$1.comma); }
      if (allowEmpty && this.type === types$1.comma) {
        elts.push(null);
      } else if (allowTrailingComma && this.afterTrailingComma(close)) {
        break
      } else if (this.type === types$1.ellipsis) {
        var rest = this.parseRestBinding();
        this.parseBindingListItem(rest);
        elts.push(rest);
        if (this.type === types$1.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
        this.expect(close);
        break
      } else {
        var elem = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(elem);
        elts.push(elem);
      }
    }
    return elts
  };

  pp$a.parseBindingListItem = function (param) {
    return param
  };

  // Parses assignment pattern around given atom if possible.

  pp$a.parseMaybeDefault = function (startPos, startLoc, left) {
    left = left || this.parseBindingAtom();
    if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) { return left }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern")
  };

  // The following three functions all verify that a node is an lvalue —
  // something that can be bound, or assigned to. In order to do so, they perform
  // a variety of checks:
  //
  // - Check that none of the bound/assigned-to identifiers are reserved words.
  // - Record name declarations for bindings in the appropriate scope.
  // - Check duplicate argument names, if checkClashes is set.
  //
  // If a complex binding pattern is encountered (e.g., object and array
  // destructuring), the entire pattern is recursively checked.
  //
  // There are three versions of checkLVal*() appropriate for different
  // circumstances:
  //
  // - checkLValSimple() shall be used if the syntactic construct supports
  //   nothing other than identifiers and member expressions. Parenthesized
  //   expressions are also correctly handled. This is generally appropriate for
  //   constructs for which the spec says
  //
  //   > It is a Syntax Error if AssignmentTargetType of [the production] is not
  //   > simple.
  //
  //   It is also appropriate for checking if an identifier is valid and not
  //   defined elsewhere, like import declarations or function/class identifiers.
  //
  //   Examples where this is used include:
  //     a += …;
  //     import a from '…';
  //   where a is the node to be checked.
  //
  // - checkLValPattern() shall be used if the syntactic construct supports
  //   anything checkLValSimple() supports, as well as object and array
  //   destructuring patterns. This is generally appropriate for constructs for
  //   which the spec says
  //
  //   > It is a Syntax Error if [the production] is neither an ObjectLiteral nor
  //   > an ArrayLiteral and AssignmentTargetType of [the production] is not
  //   > simple.
  //
  //   Examples where this is used include:
  //     (a = …);
  //     const a = …;
  //     try { … } catch (a) { … }
  //   where a is the node to be checked.
  //
  // - checkLValInnerPattern() shall be used if the syntactic construct supports
  //   anything checkLValPattern() supports, as well as default assignment
  //   patterns, rest elements, and other constructs that may appear within an
  //   object or array destructuring pattern.
  //
  //   As a special case, function parameters also use checkLValInnerPattern(),
  //   as they also support defaults and rest constructs.
  //
  // These functions deliberately support both assignment and binding constructs,
  // as the logic for both is exceedingly similar. If the node is the target of
  // an assignment, then bindingType should be set to BIND_NONE. Otherwise, it
  // should be set to the appropriate BIND_* constant, like BIND_VAR or
  // BIND_LEXICAL.
  //
  // If the function is called with a non-BIND_NONE bindingType, then
  // additionally a checkClashes object may be specified to allow checking for
  // duplicate argument names. checkClashes is ignored if the provided construct
  // is an assignment (i.e., bindingType is BIND_NONE).

  pp$a.checkLValSimple = function (expr, bindingType, checkClashes) {
    if (bindingType === void 0) bindingType = BIND_NONE;

    var isBind = bindingType !== BIND_NONE;

    switch (expr.type) {
      case "Dereference":
      case "Identifier":
        if (this.strict && this.reservedWordsStrictBind.test(expr.name)) { this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
        if (isBind) {
          if (bindingType === BIND_LEXICAL && expr.name === "let") { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
          if (checkClashes) {
            if (hasOwn(checkClashes, expr.name)) { this.raiseRecoverable(expr.start, "Argument name clash"); }
            checkClashes[expr.name] = true;
          }
          if (bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
        }
        break

      case "ChainExpression":
        this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
        break

      case "MemberExpression":
        if (isBind) { this.raiseRecoverable(expr.start, "Binding member expression"); }
        break

      case "ParenthesizedExpression":
        if (isBind) { this.raiseRecoverable(expr.start, "Binding parenthesized expression"); }
        return this.checkLValSimple(expr.expression, bindingType, checkClashes)

      default:
        this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
    }
  };

  pp$a.checkLValPattern = function (expr, bindingType, checkClashes) {
    if (bindingType === void 0) bindingType = BIND_NONE;

    switch (expr.type) {
      case "ObjectPattern":
        for (var i = 0, list = expr.properties; i < list.length; i += 1) {
          var prop = list[i];

          this.checkLValInnerPattern(prop, bindingType, checkClashes);
        }
        break

      case "ArrayPattern":
        for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
          var elem = list$1[i$1];

          if (elem) { this.checkLValInnerPattern(elem, bindingType, checkClashes); }
        }
        break

      default:
        this.checkLValSimple(expr, bindingType, checkClashes);
    }
  };

  pp$a.checkLValInnerPattern = function (expr, bindingType, checkClashes) {
    if (bindingType === void 0) bindingType = BIND_NONE;

    switch (expr.type) {
      case "Property":
        // AssignmentProperty has type === "Property"
        this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
        break

      case "AssignmentPattern":
        this.checkLValPattern(expr.left, bindingType, checkClashes);
        break

      case "RestElement":
        this.checkLValPattern(expr.argument, bindingType, checkClashes);
        break

      default:
        this.checkLValPattern(expr, bindingType, checkClashes);
    }
  };

  // The algorithm used to determine whether a regexp can appear at a

  var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
    this.generator = !!generator;
  };

  var types = {
    b_stat: new TokContext("{", false),
    b_expr: new TokContext("{", true),
    b_tmpl: new TokContext("${", false),
    p_stat: new TokContext("(", false),
    p_expr: new TokContext("(", true),
    q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
    f_stat: new TokContext("function", false),
    f_expr: new TokContext("function", true),
    f_expr_gen: new TokContext("function", true, false, null, true),
    f_gen: new TokContext("function", false, false, null, true)
  };

  var pp$9 = Parser.prototype;

  pp$9.initialContext = function () {
    return [types.b_stat]
  };

  pp$9.curContext = function () {
    return this.context[this.context.length - 1]
  };

  pp$9.braceIsBlock = function (prevType) {
    var parent = this.curContext();
    if (parent === types.f_expr || parent === types.f_stat) { return true }
    if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) { return !parent.isExpr }

    // The check for `tt.name && exprAllowed` detects whether we are
    // after a `yield` or `of` construct. See the `updateContext` for
    // `tt.name`.
    if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
    if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) { return true }
    if (prevType === types$1.braceL) { return parent === types.b_stat }
    if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) { return false }
    return !this.exprAllowed
  };

  pp$9.inGeneratorContext = function () {
    for (var i = this.context.length - 1; i >= 1; i--) {
      var context = this.context[i];
      if (context.token === "function") { return context.generator }
    }
    return false
  };

  pp$9.updateContext = function (prevType) {
    var update, type = this.type;
    if (this.type.keyword && prevType === types$1.dot) { this.exprAllowed = false; }
    else if (update = type.updateContext) { update.call(this, prevType); }
    else { this.exprAllowed = type.beforeExpr; }
  };

  // Used to handle egde cases when token context could not be inferred correctly during tokenization phase

  pp$9.overrideContext = function (tokenCtx) {
    if (this.curContext() !== tokenCtx) {
      this.context[this.context.length - 1] = tokenCtx;
    }
  };

  // Token-specific context update code

  types$1.parenR.updateContext = types$1.braceR.updateContext = function () {
    if (this.context.length === 1) {
      this.exprAllowed = true;
      return
    }
    var out = this.context.pop();
    if (out === types.b_stat && this.curContext().token === "function") {
      out = this.context.pop();
    }
    this.exprAllowed = !out.isExpr;
  };

  types$1.braceL.updateContext = function (prevType) {
    this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
    this.exprAllowed = true;
  };

  types$1.dollarBraceL.updateContext = function () {
    this.context.push(types.b_tmpl);
    this.exprAllowed = true;
  };

  types$1.parenL.updateContext = function (prevType) {
    var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
    this.context.push(statementParens ? types.p_stat : types.p_expr);
    this.exprAllowed = true;
  };

  types$1.incDec.updateContext = function () {
    // tokExprAllowed stays unchanged
  };

  types$1._function.updateContext = types$1._class.updateContext = function (prevType) {
    if (prevType.beforeExpr && prevType !== types$1._else &&
      !(prevType === types$1.semi && this.curContext() !== types.p_stat) &&
      !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
      !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) { this.context.push(types.f_expr); }
    else { this.context.push(types.f_stat); }
    this.exprAllowed = false;
  };

  types$1.backQuote.updateContext = function () {
    if (this.curContext() === types.q_tmpl) { this.context.pop(); }
    else { this.context.push(types.q_tmpl); }
    this.exprAllowed = false;
  };

  types$1.star.updateContext = function (prevType) {
    if (prevType === types$1._function) {
      var index = this.context.length - 1;
      if (this.context[index] === types.f_expr) { this.context[index] = types.f_expr_gen; }
      else { this.context[index] = types.f_gen; }
    }
    this.exprAllowed = true;
  };

  types$1.name.updateContext = function (prevType) {
    var allowed = false;
    if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
      if (this.value === "of" && !this.exprAllowed ||
        this.value === "yield" && this.inGeneratorContext()) { allowed = true; }
    }
    this.exprAllowed = allowed;
  };

  // A recursive descent parser operates by defining functions for all

  var pp$8 = Parser.prototype;

  // Check if property name clashes with already added.
  // Object/class getters and setters are not allowed to clash —
  // either with each other or with an init property — and in
  // strict mode, init properties are also not allowed to be repeated.

  pp$8.checkPropClash = function (prop, propHash, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") { return }
    if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) { return }
    var key = prop.key;
    var name;
    switch (key.type) {
      case "Identifier": name = key.name; break
      case "Literal": name = String(key.value); break
      default: return
    }
    var kind = prop.kind;
    if (this.options.ecmaVersion >= 6) {
      if (name === "__proto__" && kind === "init") {
        if (propHash.proto) {
          if (refDestructuringErrors) {
            if (refDestructuringErrors.doubleProto < 0) {
              refDestructuringErrors.doubleProto = key.start;
            }
          } else {
            this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
          }
        }
        propHash.proto = true;
      }
      return
    }
    name = "$" + name;
    var other = propHash[name];
    if (other) {
      var redefinition;
      if (kind === "init") {
        redefinition = this.strict && other.init || other.get || other.set;
      } else {
        redefinition = other.init || other[kind];
      }
      if (redefinition) { this.raiseRecoverable(key.start, "Redefinition of property"); }
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  };

  // ### Expression parsing

  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function(s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.

  // Parse a full expression. The optional arguments are used to
  // forbid the `in` operator (in for loops initalization expressions)
  // and provide reference for storing '=' operator inside shorthand
  // property assignment in contexts where both object expression
  // and object pattern might appear (so it's possible to raise
  // delayed syntax error at correct position).

  pp$8.parseExpression = function (forInit, refDestructuringErrors, noComma, noIn) {
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc;
    var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
    if (!noComma && this.type === types$1.comma) {
      var node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];
      while (this.eat(types$1.comma)) { node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors)); }
      return this.finishNode(node, "SequenceExpression")
    }
    return expr
  };

  // Parse an assignment expression. This includes applications of
  // operators like `+=`.

  pp$8.parseMaybeAssign = function (forInit, refDestructuringErrors, afterLeftParse) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) { return this.parseYield(forInit) }
      // The tokenizer will assume an expression is allowed after
      // `yield`, but this isn't that kind of yield
      else { this.exprAllowed = false; }
    }

    var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
    if (refDestructuringErrors) {
      oldParenAssign = refDestructuringErrors.parenthesizedAssign;
      oldTrailingComma = refDestructuringErrors.trailingComma;
      oldDoubleProto = refDestructuringErrors.doubleProto;
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
    } else {
      refDestructuringErrors = new DestructuringErrors;
      ownDestructuringErrors = true;
    }

    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc;
    if (this.type === types$1.parenL || this.type === types$1.name) {
      this.potentialArrowAt = this.start;
      this.potentialArrowInForAwait = forInit === "await";
    }
    var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
    if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
    if (this.type.isAssign) {
      var node = this.startNodeAt(startPos, startLoc);
      node.operator = this.value;
      if (this.type === types$1.eq) { left = this.toAssignable(left, false, refDestructuringErrors); }
      if (!ownDestructuringErrors) {
        refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
      }
      if (refDestructuringErrors.shorthandAssign >= left.start) { refDestructuringErrors.shorthandAssign = -1; } // reset because shorthand default was used correctly
      if (this.type === types$1.eq) { this.checkLValPattern(left); }
      else { this.checkLValSimple(left); }
      node.left = left;
      this.next();
      node.right = this.parseMaybeAssign(forInit);
      if (oldDoubleProto > -1) { refDestructuringErrors.doubleProto = oldDoubleProto; }
      return this.finishNode(node, "AssignmentExpression")
    } else {
      if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
    }
    if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
    if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
    return left
  };

  // Parse a ternary conditional (`?:`) operator.

  pp$8.parseMaybeConditional = function (forInit, refDestructuringErrors) {
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc;
    var expr = this.parseExprOps(forInit, refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    if (this.eat(types$1.question)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssign();
      this.expect(types$1.colon);
      node.alternate = this.parseMaybeAssign(forInit);
      return this.finishNode(node, "ConditionalExpression")
    }
    return expr
  };

  // Start the precedence parser.

  pp$8.parseExprOps = function (forInit, refDestructuringErrors) {
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc;
    var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit)
  };

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  pp$8.parseExprOp = function (left, leftStartPos, leftStartLoc, minPrec, forInit) {
    var prec = this.type.binop;
    if (prec != null && (!forInit || this.type !== types$1._in)) {
      if (prec > minPrec) {
        var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
        var coalesce = this.type === types$1.coalesce;
        if (coalesce) {
          // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
          // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
          prec = types$1.logicalAND.binop;
        }
        var op = this.value;
        var isIn = (this.type === types$1._in);
        this.next();
        if (isIn && this.type === types$1.colon) { // TODO: How to deal with [a in:b] in a better way for objj?
          this.inIsIdentifier = true;
          return left
        }
        var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc;
        var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
        var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
        if ((logical && this.type === types$1.coalesce) || (coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND))) {
          this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
        }
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit)
      }
    }
    return left
  };

  pp$8.buildBinary = function (startPos, startLoc, left, right, op, logical) {
    if (right.type === "PrivateIdentifier") { this.raise(right.start, "Private identifier can only be left side of binary expression"); }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.operator = op;
    node.right = right;
    return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
  };

  // Parse unary operators, both prefix and postfix.

  pp$8.parseMaybeUnary = function (refDestructuringErrors, sawUnary, incDec, forInit) {
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc, expr;
    if (this.isContextual("await") && this.canAwait) {
      expr = this.parseAwait(forInit);
      sawUnary = true;
    } else if (this.type.prefix) {
      var node = this.startNode(), update = this.type === types$1.incDec;
      node.operator = this.value;
      node.prefix = true;
      this.next();
      node.argument = this.parseMaybeUnary(null, true, update, forInit);
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (update) { this.checkLValSimple(node.argument); }
      else if (this.strict && node.operator === "delete" &&
        node.argument.type === "Identifier") { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
      else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) { this.raiseRecoverable(node.start, "Private fields can not be deleted"); }
      else { sawUnary = true; }
      expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    } else if (!sawUnary && this.type === types$1.privateId) {
      if (forInit || this.privateNameStack.length === 0) { this.unexpected(); }
      expr = this.parsePrivateIdent();
      // only could be private fields in 'in', such as #x in obj
      if (this.type !== types$1._in) { this.unexpected(); }
    } else {
      expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
      if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var node$1 = this.startNodeAt(startPos, startLoc);
        node$1.operator = this.value;
        node$1.prefix = false;
        node$1.argument = expr;
        this.checkLValSimple(expr);
        this.next();
        expr = this.finishNode(node$1, "UpdateExpression");
      }
    }

    if (!incDec && this.eat(types$1.starstar)) {
      if (sawUnary) { this.unexpected(this.lastTokStart); }
      else { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false) }
    } else {
      return expr
    }
  };

  function isPrivateFieldAccess(node) {
    return (
      node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" ||
      node.type === "ChainExpression" && isPrivateFieldAccess(node.expression)
    )
  }

  // Parse call, dot, and `[]`-subscript expressions.

  pp$8.parseExprSubscripts = function (refDestructuringErrors, forInit) {
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc;
    var expr = this.parseExprAtom(refDestructuringErrors, forInit);
    if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") { return expr }
    var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
    if (refDestructuringErrors && result.type === "MemberExpression") {
      if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
      if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
      if (refDestructuringErrors.trailingComma >= result.start) { refDestructuringErrors.trailingComma = -1; }
    }
    return result
  };

  pp$8.parseSubscripts = function (base, startPos, startLoc, noCalls, forInit) {
    var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
      this.potentialArrowAt === base.start;
    var optionalChained = false;

    while (true) {
      var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);

      if (element.optional) { optionalChained = true; }
      if (element === base || element.type === "ArrowFunctionExpression") {
        if (optionalChained) {
          var chainNode = this.startNodeAt(startPos, startLoc);
          chainNode.expression = element;
          element = this.finishNode(chainNode, "ChainExpression");
        }
        return element
      }

      base = element;
    }
  };

  pp$8.parseSubscript = function (base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
    var optionalSupported = this.options.ecmaVersion >= 11;
    var optional = optionalSupported && this.eat(types$1.questionDot);
    if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }
    var messageSendNode, canInsertSemi;
    if (this.options.objj) {
      messageSendNode = this.startNode();
      canInsertSemi = this.canInsertSemicolon();
    }
    var computed = this.eat(types$1.bracketL);
    if (computed || (optional && this.type !== types$1.parenL && this.type !== types$1.backQuote) || this.eat(types$1.dot)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      if (computed) {
        node.property = this.parseExpression();
        if (this.options.objj && this.type !== types$1.bracketR) {
          messageSendNode.object = node.property;
          messageSendNode.canInsertSemicolonBefore = canInsertSemi;
          this.nodeMessageSendObjectExpression = messageSendNode;
          return base
        }
        this.expect(types$1.bracketR);
      } else if (this.type === types$1.privateId && base.type !== "Super") {
        node.property = this.parsePrivateIdent();
      } else {
        node.property = this.parseIdent(this.options.allowReserved !== "never");
      }
      node.computed = !!computed;
      if (optionalSupported) {
        node.optional = optional;
      }
      base = this.finishNode(node, "MemberExpression");
    } else if (!noCalls && this.eat(types$1.parenL)) {
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        if (this.awaitIdentPos > 0) { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit)
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      if (optionalSupported) {
        node$1.optional = optional;
      }
      base = this.finishNode(node$1, "CallExpression");
    } else if (this.type === types$1.backQuote) {
      if (optional || optionalChained) {
        this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      }
      var node$2 = this.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this.parseTemplate({ isTagged: true });
      base = this.finishNode(node$2, "TaggedTemplateExpression");
    }
    return base
  };

  // Parse an atomic expression — either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.

  pp$8.parseExprAtom = function (refDestructuringErrors, forInit) {
    // If a division operator appears in an expression position, the
    // tokenizer got confused, and we force it to read a regexp instead.
    if (this.type === types$1.slash) { this.readRegexp(); }

    var node, canBeArrow = this.potentialArrowAt === this.start;
    switch (this.type) {
      case types$1._super:
        if (!this.allowSuper) { this.raise(this.start, "'super' keyword outside a method"); }
        node = this.startNode();
        this.next();
        if (this.type === types$1.parenL && !this.allowDirectSuper) { this.raise(node.start, "super() call outside constructor of a subclass"); }
        // The `super` keyword can appear at below:
        // SuperProperty:
        //     super [ Expression ]
        //     super . IdentifierName
        // SuperCall:
        //     super ( Arguments )
        // ObjJ message Send:
        //     [super aSelector]
        if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL && (!this.options.objj || this.type !== types$1.name)) { this.unexpected(); }
        return this.finishNode(node, "Super")

      case types$1._this:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression")

      case types$1.name: case objjTypes._id: case objjTypes._char: case objjTypes._long: case objjTypes._short: // If we have an Objective-J token at this point it should be an identifier. TODO: This is an ugly fix.
        var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc, containsEsc = this.containsEsc;
        var id = this.parseIdent(false);
        if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
          this.overrideContext(types.f_expr);
          return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit)
        }
        if (canBeArrow && !this.canInsertSemicolon()) {
          if (this.eat(types$1.arrow)) { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit) }
          if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc &&
            (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
            id = this.parseIdent(false);
            if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) { this.unexpected(); }
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit)
          }
        }
        return id

      case types$1.regexp:
        var value = this.value;
        node = this.parseLiteral(value.value);
        node.regex = { pattern: value.pattern, flags: value.flags };
        return node

      case types$1.num: case types$1.string:
        return this.parseLiteral(this.value)

      case types$1._null: case types$1._true: case types$1._false:
        node = this.startNode();
        node.value = this.type === types$1._null ? null : this.type === types$1._true;
        node.raw = this.type.keyword;
        this.next();
        return this.finishNode(node, "Literal")

      case types$1.parenL:
        var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
        if (refDestructuringErrors) {
          if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) { refDestructuringErrors.parenthesizedAssign = start; }
          if (refDestructuringErrors.parenthesizedBind < 0) { refDestructuringErrors.parenthesizedBind = start; }
        }
        return expr

      case types$1.bracketL:
        node = this.startNode();
        this.next();
        var firstExpr = null;
        if (this.type === types$1.ellipsis) {
          firstExpr = this.parseSpread(refDestructuringErrors);
          if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) { refDestructuringErrors.trailingComma = this.start; }
        } else if (this.type !== types$1.comma && this.type !== types$1.bracketR) {
          firstExpr = this.parseExpression(false, refDestructuringErrors, true, true);
          if (this.type !== types$1.comma && this.type !== types$1.bracketR) { return this.parseObjjMessageSendExpression(node, firstExpr) }
        }
        node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors, firstExpr);
        return this.finishNode(node, "ArrayExpression")

      case types$1.braceL:
        this.overrideContext(types.b_expr);
        return this.parseObj(false, refDestructuringErrors)

      case types$1._function:
        node = this.startNode();
        this.next();
        return this.parseFunction(node, 0)

      case types$1._class:
        return this.parseClass(this.startNode(), false)

      case types$1._new:
        return this.parseNew()

      case types$1.backQuote:
        return this.parseTemplate()

      case types$1._import:
        if (this.options.ecmaVersion >= 11) {
          return this.parseExprImport()
        } else {
          return this.unexpected()
        }

      case objjAtTypes._selector:
        node = this.startNode();
        this.next();
        this.expect(types$1.parenL, "Expected '(' after '@selector'");
        this.parseObjjSelector(node, types$1.parenR);
        this.expect(types$1.parenR, "Expected closing ')' after selector");
        return this.finishNode(node, "SelectorLiteralExpression")

      case objjAtTypes._ref:
        node = this.startNode();
        this.next();
        this.expect(types$1.parenL, "Expected '(' after '@ref'");
        node.element = this.parseIdent(node, types$1.parenR);
        this.expect(types$1.parenR, "Expected closing ')' after ref");
        return this.finishNode(node, "Reference")

      case objjAtTypes._deref:
        node = this.startNode();
        this.next();
        this.expect(types$1.parenL, "Expected '(' after '@deref'");
        node.expr = this.parseExpression(true, refDestructuringErrors, true, true);
        this.expect(types$1.parenR, "Expected closing ')' after deref");
        return this.finishNode(node, "Dereference")

      case objjAtTypes._dictionaryLiteral:
        node = this.startNode();
        this.next();

        var r = this.parseObjjDictionary();
        node.keys = r[0];
        node.values = r[1];
        return this.finishNode(node, "DictionaryLiteral")

      case objjAtTypes._arrayLiteral:
        node = this.startNode();
        firstExpr = null;

        this.next();
        this.expect(types$1.bracketL, "Expected '[' at beginning of array literal");

        if (this.type !== types$1.bracketR) { firstExpr = this.parseExpression(true, refDestructuringErrors, true, true); }

        node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors, firstExpr);
        return this.finishNode(node, "ArrayLiteral")

      case objjAtTypes._protocol:
        node = this.startNode();
        this.next();
        this.expect(types$1.parenL, "Expected '(' after '@protocol'");
        node.id = this.parseIdent(true);
        this.expect(types$1.parenR, "Expected closing ')' after protocol name");
        return this.finishNode(node, "ProtocolLiteralExpression")

      default:
        this.unexpected();
    }
  };

  pp$8.parseExprImport = function () {
    var node = this.startNode();

    // Consume `import` as an identifier for `import.meta`.
    // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
    var meta = this.parseIdent(true);

    switch (this.type) {
      case types$1.parenL:
        return this.parseDynamicImport(node)
      case types$1.dot:
        node.meta = meta;
        return this.parseImportMeta(node)
      default:
        this.unexpected();
    }
  };

  pp$8.parseDynamicImport = function (node) {
    this.next(); // skip `(`

    // Parse node.source.
    node.source = this.parseMaybeAssign();

    // Verify ending.
    if (!this.eat(types$1.parenR)) {
      var errorPos = this.start;
      if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
        this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
      } else {
        this.unexpected(errorPos);
      }
    }

    return this.finishNode(node, "ImportExpression")
  };

  pp$8.parseImportMeta = function (node) {
    this.next(); // skip `.`

    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);

    if (node.property.name !== "meta") { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
    if (containsEsc) { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
    if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

    return this.finishNode(node, "MetaProperty")
  };

  pp$8.parseLiteral = function (value) {
    var node = this.startNode();
    node.value = value;
    node.raw = this.tokInput.slice(this.start, this.end);
    if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1).replace(/_/g, ""); }
    this.next();
    return this.finishNode(node, "Literal")
  };

  pp$8.parseParenExpression = function () {
    this.expect(types$1.parenL);
    var val = this.parseExpression();
    this.expect(types$1.parenR);
    return val
  };

  pp$8.parseParenAndDistinguishExpression = function (canBeArrow, forInit) {
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();

      var innerStartPos = this.start + this.tokMacroOffset, innerStartLoc = this.startLoc;
      var exprList = [], first = true, lastIsComma = false;
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
      this.yieldPos = 0;
      this.awaitPos = 0;
      // Do not save awaitIdentPos to allow checking awaits nested in parameters
      while (this.type !== types$1.parenR) {
        first ? first = false : this.expect(types$1.comma);
        if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
          lastIsComma = true;
          break
        } else if (this.type === types$1.ellipsis) {
          spreadStart = this.start;
          exprList.push(this.parseParenItem(this.parseRestBinding()));
          if (this.type === types$1.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
          break
        } else {
          exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
        }
      }
      var innerEndPos = this.lastTokEnd + this.lastTokMacroOffset, innerEndLoc = this.lastTokEndLoc;
      this.expect(types$1.parenR);

      if (canBeArrow && !this.canInsertSemicolon() && this.eat(types$1.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        return this.parseParenArrowList(startPos, startLoc, exprList, forInit)
      }

      if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
      if (spreadStart) { this.unexpected(spreadStart); }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;

      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
    } else {
      val = this.parseParenExpression();
    }

    if (this.options.preserveParens) {
      var par = this.startNodeAt(startPos, startLoc);
      par.expression = val;
      return this.finishNode(par, "ParenthesizedExpression")
    } else {
      return val
    }
  };

  pp$8.parseParenItem = function (item) {
    return item
  };

  pp$8.parseParenArrowList = function (startPos, startLoc, exprList, forInit) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit)
  };

  // New's precedence is slightly tricky. It must allow its argument to
  // be a `[]` or dot subscript expression, but not a call — at least,
  // not without wrapping it in parentheses. Thus, it uses the noCalls
  // argument to parseSubscripts to prevent it from consuming the
  // argument list.

  var empty = [];

  pp$8.parseNew = function () {
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
    var node = this.startNode();
    var meta = this.parseIdent(true);
    if (this.options.ecmaVersion >= 6 && this.eat(types$1.dot)) {
      node.meta = meta;
      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);
      if (node.property.name !== "target") { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
      if (containsEsc) { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
      if (!this.allowNewDotTarget) { this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block"); }
      return this.finishNode(node, "MetaProperty")
    }
    var startPos = this.start + this.tokMacroOffset, startLoc = this.startLoc, isImport = this.type === types$1._import;
    node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true, false);
    if (isImport && node.callee.type === "ImportExpression") {
      this.raise(startPos, "Cannot use new with import()");
    }
    if (this.eat(types$1.parenL)) { node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false); }
    else { node.arguments = empty; }
    return this.finishNode(node, "NewExpression")
  };

  // Parse template expression.

  pp$8.parseTemplateElement = function (ref) {
    var isTagged = ref.isTagged;

    var elem = this.startNode();
    if (this.type === types$1.invalidTemplate) {
      if (!isTagged) {
        this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      }
      elem.value = {
        raw: this.value,
        cooked: null
      };
    } else {
      elem.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      };
    }
    this.next();
    elem.tail = this.type === types$1.backQuote;
    return this.finishNode(elem, "TemplateElement")
  };

  pp$8.parseTemplate = function (ref) {
    if (ref === void 0) ref = {};
    var isTagged = ref.isTagged; if (isTagged === void 0) isTagged = false;

    var node = this.startNode();
    this.next();
    node.expressions = [];
    var curElt = this.parseTemplateElement({ isTagged: isTagged });
    node.quasis = [curElt];
    while (!curElt.tail) {
      if (this.type === types$1.eof) { this.raise(this.pos, "Unterminated template literal"); }
      this.expect(types$1.dollarBraceL);
      node.expressions.push(this.parseExpression());
      this.expect(types$1.braceR);
      node.quasis.push(curElt = this.parseTemplateElement({ isTagged: isTagged }));
    }
    this.next();
    return this.finishNode(node, "TemplateLiteral")
  };

  pp$8.isAsyncProp = function (prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
      (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types$1.star)) &&
      !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  // Parse an object literal or binding pattern.

  pp$8.parseObj = function (isPattern, refDestructuringErrors) {
    var node = this.startNode(), first = true, propHash = {};
    node.properties = [];
    this.next();
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) { break }
      } else { first = false; }

      var prop = this.parseProperty(isPattern, refDestructuringErrors);
      if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
      node.properties.push(prop);
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
  };

  pp$8.parseProperty = function (isPattern, refDestructuringErrors) {
    var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
    if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
      if (isPattern) {
        prop.argument = this.parseIdent(false);
        if (this.type === types$1.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        return this.finishNode(prop, "RestElement")
      }
      // Parse argument.
      prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      // To disallow trailing comma via `this.toAssignable()`.
      if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
      // Finish
      return this.finishNode(prop, "SpreadElement")
    }
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refDestructuringErrors) {
        startPos = this.start + this.tokMacroOffset;
        startLoc = this.startLoc;
      }
      if (!isPattern) { isGenerator = this.eat(types$1.star); }
    }
    var containsEsc = this.containsEsc;
    this.parsePropertyName(prop);
    if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
      this.parsePropertyName(prop, refDestructuringErrors);
    } else {
      isAsync = false;
    }
    this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
    return this.finishNode(prop, "Property")
  };

  pp$8.parsePropertyValue = function (prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
    if ((isGenerator || isAsync) && this.type === types$1.colon) { this.unexpected(); }

    if (this.eat(types$1.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
      prop.kind = "init";
    } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
      if (isPattern) { this.unexpected(); }
      prop.kind = "init";
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
    } else if (!isPattern && !containsEsc &&
      this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
      (prop.key.name === "get" || prop.key.name === "set") &&
      (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
      if (isGenerator || isAsync) { this.unexpected(); }
      prop.kind = prop.key.name;
      this.parsePropertyName(prop);
      prop.value = this.parseMethod(false);
      var paramCount = prop.kind === "get" ? 0 : 1;
      if (prop.value.params.length !== paramCount) {
        var start = prop.value.start;
        if (prop.kind === "get") { this.raiseRecoverable(start, "getter should have no params"); }
        else { this.raiseRecoverable(start, "setter should have exactly one param"); }
      } else {
        if (prop.kind === "set" && prop.value.params[0].type === "RestElement") { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
      }
    } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
      if (isGenerator || isAsync) { this.unexpected(); }
      this.checkUnreserved(prop.key);
      if (prop.key.name === "await" && !this.awaitIdentPos) { this.awaitIdentPos = startPos; }
      prop.kind = "init";
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else if (this.type === types$1.eq && refDestructuringErrors) {
        if (refDestructuringErrors.shorthandAssign < 0) { refDestructuringErrors.shorthandAssign = this.start; }
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else {
        prop.value = this.copyNode(prop.key);
      }
      prop.shorthand = true;
    } else { this.unexpected(); }
  };

  pp$8.parsePropertyName = function (prop) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types$1.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types$1.bracketR);
        return prop.key
      } else {
        prop.computed = false;
      }
    }
    return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
  };

  // Initialize empty function node.

  pp$8.initFunction = function (node) {
    node.id = null;
    if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
    if (this.options.ecmaVersion >= 8) { node.async = false; }
  };

  // Parse object or class method.

  pp$8.parseMethod = function (isGenerator, isAsync, allowDirectSuper) {
    var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

    this.initFunction(node);
    if (this.options.ecmaVersion >= 6) { node.generator = isGenerator; }
    if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

    this.expect(types$1.parenL);
    node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
    this.parseFunctionBody(node, false, true, false);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "FunctionExpression")
  };

  // Parse arrow function expression with given parameters.

  pp$8.parseArrowExpression = function (node, params, isAsync, forInit) {
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

    this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
    this.initFunction(node);
    if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;

    node.params = this.toAssignableList(params, true);
    this.parseFunctionBody(node, true, false, forInit);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "ArrowFunctionExpression")
  };

  // Parse function body and check parameters.

  pp$8.parseFunctionBody = function (node, isArrowFunction, isMethod, forInit) {
    var isExpression = isArrowFunction && this.type !== types$1.braceL;
    var oldStrict = this.strict, useStrict = false;

    if (isExpression) {
      node.body = this.parseMaybeAssign(forInit);
      node.expression = true;
      this.checkParams(node, false);
    } else {
      var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.end);
        // If this is a strict mode function, verify that argument names
        // are not repeated, and it does not try to bind the words `eval`
        // or `arguments`.
        if (useStrict && nonSimple) { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
      }
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldLabels = this.labels;
      this.labels = [];
      if (useStrict) { this.strict = true; }

      // Add the params to varDeclaredNames to ensure that an error is thrown
      // if a let/const declaration in the function clashes with one of the params.
      this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
      // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
      if (this.strict && node.id) { this.checkLValSimple(node.id, BIND_OUTSIDE); }
      node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
      node.expression = false;
      this.adaptDirectivePrologue(node.body.body);
      this.labels = oldLabels;
    }
    this.exitScope();
  };

  pp$8.isSimpleParamList = function (params) {
    for (var i = 0, list = params; i < list.length; i += 1) {
      var param = list[i];

      if (param.type !== "Identifier") {
        return false
      }
    }
    return true
  };

  // Checks function params for various disallowed patterns such as using "eval"
  // or "arguments" and duplicate parameters.

  pp$8.checkParams = function (node, allowDuplicates) {
    var nameHash = Object.create(null);
    for (var i = 0, list = node.params; i < list.length; i += 1) {
      var param = list[i];

      this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
    }
  };

  // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).

  pp$8.parseExprList = function (close, allowTrailingComma, allowEmpty, refDestructuringErrors, firstExpr) {
    var elts = [], first = true;
    if (firstExpr && this.eat(close)) { return [firstExpr] }
    while (!this.eat(close)) {
      if (!first) {
        this.expect(types$1.comma);
        if (allowTrailingComma && this.afterTrailingComma(close)) { break }
      }
      var elt = (void 0);
      if (first && firstExpr) {
        elt = firstExpr;
      } else if (allowEmpty && this.type === types$1.comma) { elt = null; }
      else if (this.type === types$1.ellipsis) {
        elt = this.parseSpread(refDestructuringErrors);
        if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) { refDestructuringErrors.trailingComma = this.start; }
      } else {
        elt = this.parseMaybeAssign(false, refDestructuringErrors);
      }
      if (first) { first = false; }
      elts.push(elt);
    }
    return elts
  };

  pp$8.checkUnreserved = function (ref) {
    var start = ref.start;
    var end = ref.end;
    var name = ref.name;

    if (this.inGenerator && name === "yield") { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
    if (this.inAsync && name === "await") { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
    if (this.currentThisScope().inClassFieldInit && name === "arguments") { this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer"); }
    if (this.inClassStaticBlock && (name === "arguments" || name === "await")) { this.raise(start, ("Cannot use " + name + " in class static initialization block")); }
    if (this.keywords.test(name)) { this.raise(start, ("Unexpected keyword '" + name + "'")); }
    if (this.options.ecmaVersion < 6 &&
      this.input.slice(start, end).indexOf("\\") !== -1) { return }
    var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (re.test(name)) {
      if (!this.inAsync && name === "await") { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
      if (this.options.objj && name === "super") { return }
      this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
    }
  };

  // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.

  pp$8.parseIdent = function (liberal, isBinding) {
    var node = this.startNode();
    if (this.type === types$1.name) {
      node.name = this.value;
    } else if (this.type.keyword) {
      node.name = this.type.keyword;

      // To fix https://github.com/acornjs/acorn/issues/575
      // `class` and `function` keywords push new context into this.context.
      // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
      // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
      if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
        this.context.pop();
      }
    } else {
      this.unexpected();
    }
    this.next(!!liberal);
    this.finishNode(node, "Identifier");
    if (!liberal) {
      this.checkUnreserved(node);
      if (node.name === "await" && !this.awaitIdentPos) { this.awaitIdentPos = node.start; }
    }
    return node
  };

  pp$8.parsePrivateIdent = function () {
    var node = this.startNode();
    if (this.type === types$1.privateId) {
      node.name = this.value;
    } else {
      this.unexpected();
    }
    this.next();
    this.finishNode(node, "PrivateIdentifier");

    // For validating existence
    if (this.privateNameStack.length === 0) {
      this.raise(node.start, ("Private field '#" + (node.name) + "' must be declared in an enclosing class"));
    } else {
      this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
    }

    return node
  };

  // Parses yield expression inside generator.

  pp$8.parseYield = function (forInit) {
    if (!this.yieldPos) { this.yieldPos = this.start; }

    var node = this.startNode();
    this.next();
    if (this.type === types$1.semi || this.canInsertSemicolon() || (this.type !== types$1.star && !this.type.startsExpr)) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types$1.star);
      node.argument = this.parseMaybeAssign(forInit);
    }
    return this.finishNode(node, "YieldExpression")
  };

  pp$8.parseAwait = function (forInit) {
    if (!this.awaitPos) { this.awaitPos = this.start; }

    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeUnary(null, true, false, forInit);
    return this.finishNode(node, "AwaitExpression")
  };

  var pp$7 = Parser.prototype;

  // This function is used to raise exceptions on parse errors. It
  // takes an offset integer (into the current `input`) to indicate
  // the location of the error, attaches the position to the end
  // of the error message, and then raises a `SyntaxError` with that
  // message.

  pp$7.raise = function (pos, message) {
    var loc = getLineInfo(this.input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
    throw err
  };

  pp$7.raiseRecoverable = pp$7.raise;

  pp$7.curPosition = function () {
    if (this.options.locations) {
      var line = this.curLine;
      var column = this.pos - this.lineStart;
      if (this.preprocessStackLastItem) {
        var macro = this.preprocessStackLastItem.macro;
        var locationOffset = macro.locationOffset;
        if (locationOffset) {
          var macroCurrentLine = locationOffset.line;
          if (macroCurrentLine) { line += macroCurrentLine; }
          var macroCurrentLineStart = locationOffset.column;
          // Only add column offset if we are on the first line
          if (macroCurrentLineStart) {
            column += this.tokPosMacroOffset - (this.curLine === 1 ? macroCurrentLineStart : 0);
          }
        }
      }
      return new Position(line, column)
    }
  };

  var pp$6 = Parser.prototype;

  var Scope$1 = function Scope(flags) {
    this.flags = flags;
    // A list of var-declared names in the current lexical scope
    this.var = [];
    // A list of lexically-declared names in the current lexical scope
    this.lexical = [];
    // A list of lexically-declared FunctionDeclaration names in the current lexical scope
    this.functions = [];
    // A switch to disallow the identifier reference 'arguments'
    this.inClassFieldInit = false;
  };

  // The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

  pp$6.enterScope = function (flags) {
    this.scopeStack.push(new Scope$1(flags));
  };

  pp$6.exitScope = function () {
    this.scopeStack.pop();
  };

  // The spec says:
  // > At the top level of a function, or script, function declarations are
  // > treated like var declarations rather than like lexical declarations.
  pp$6.treatFunctionsAsVarInScope = function (scope) {
    return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
  };

  pp$6.declareName = function (name, bindingType, pos) {
    var redeclared = false;
    if (bindingType === BIND_LEXICAL) {
      var scope = this.currentScope();
      redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
      scope.lexical.push(name);
      if (this.inModule && (scope.flags & SCOPE_TOP)) { delete this.undefinedExports[name]; }
    } else if (bindingType === BIND_SIMPLE_CATCH) {
      var scope$1 = this.currentScope();
      scope$1.lexical.push(name);
    } else if (bindingType === BIND_FUNCTION) {
      var scope$2 = this.currentScope();
      if (this.treatFunctionsAsVar) { redeclared = scope$2.lexical.indexOf(name) > -1; }
      else { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
      scope$2.functions.push(name);
    } else {
      for (var i = this.scopeStack.length - 1; i >= 0; --i) {
        var scope$3 = this.scopeStack[i];
        if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
          !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
          redeclared = true;
          break
        }
        scope$3.var.push(name);
        if (this.inModule && (scope$3.flags & SCOPE_TOP)) { delete this.undefinedExports[name]; }
        if (scope$3.flags & SCOPE_VAR) { break }
      }
    }
    if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
  };

  pp$6.checkLocalExport = function (id) {
    // scope.functions must be empty as Module code is always strict.
    if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
      this.scopeStack[0].var.indexOf(id.name) === -1) {
      this.undefinedExports[id.name] = id;
    }
  };

  pp$6.currentScope = function () {
    return this.scopeStack[this.scopeStack.length - 1]
  };

  pp$6.currentVarScope = function () {
    for (var i = this.scopeStack.length - 1; ; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_VAR) { return scope }
    }
  };

  // Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
  pp$6.currentThisScope = function () {
    for (var i = this.scopeStack.length - 1; ; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
    }
  };

  // Useful for `super` in Objective-J method scopy.
  pp$6.currentObjJMethodScope = function () {
    for (var i = this.scopeStack.length - 1; ; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_OBJJ_METHOD || (scope.flags & SCOPE_TOP)) { return scope }
    }
  };

  var pp$5 = Parser.prototype;

  // import {getTokenFromCode} from "./tokenize.js"

  // ident is the identifier name for the macro
  // macro is the macro string
  // parameters is an array with the parameters for the macro
  // start is the offset to where the macro is defined
  // isArgument is true if the macro is a parameter
  // parameterScope is the parameter scope
  // varadicName is the name of the varadic parameter if it is a varadic macro
  // locationOffset is the current line that the macro starts at and the position on the line

  var PositionOffset = function PositionOffset(line, column, preprocessStackLastItem) {
    this.line = line - 1; // Line start on one so we have to convert it to an offset
    this.column = column;
    if (preprocessStackLastItem) {
      var macro = preprocessStackLastItem.macro;
      var locationOffset = macro.locationOffset;
      if (locationOffset) {
        var macroCurrentLine = locationOffset.line;
        if (macroCurrentLine) { this.line += macroCurrentLine; }
        var macroCurrentLineStart = locationOffset.column;
        if (macroCurrentLineStart) { this.column += macroCurrentLineStart; }
      }
    }
  };

  pp$5.preprocesSkipRestOfLine = function () {
    var ch = this.input.charCodeAt(this.pos);
    var last;
    // If the last none whitespace character is a '\' the line will continue on the the next line.
    // Here we break the way gcc works as it joins the lines first and then tokenize it. Because of
    // this we can't have a newline in the middle of a word.
    while (this.pos < this.input.length && ((ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) || last === 92)) { // White space and '\'
      if (ch !== 32 && ch !== 9 && ch !== 160 && (ch < 5760 || !nonASCIIwhitespace.test(String.fromCharCode(ch)))) { last = ch; }
      ch = this.input.charCodeAt(++this.pos);
    }
  };

  // preprocessToken is used to cancel preNotSkipping when calling from readToken_preprocess.
  // FIXME: Refactor to not use this parameter preprocessToken. It is kind of confusing and it should be possible to do in another way
  pp$5.preprocessReadToken = function (skipComments, preprocessToken, processMacros, onlyTransformMacroArguments) {
    this.skipSpace(true);
    this.preStart = this.pos;
    this.preInput = this.input;
    this.preParameterScope = this.preprocessParameterScope;
    if (this.pos >= this.input.length) { return this.preprocessFinishToken(types$1.eof) }
    var code = this.input.charCodeAt(this.pos);
    if (!preprocessToken && !this.preNotSkipping && code !== 35) { // '#'
      // If we are skipping take the whole line if the token does not start with '#' (preprocess tokens)
      this.preprocesSkipRestOfLine();
      this.preprocessFinishToken(preTypes._preprocessSkipLine, this.input.slice(this.preStart, this.pos));
      this.preprocessSkipSpace(true, true); // Don't skip comments and skip EOL
      return
    } else if (this.preprocessMacroParameterListMode && code !== 41 && code !== 44) { // ')', ','
      var parenLevel = 0;
      // If we are parsing a macro parameter list parentheses within each argument must balance
      while (this.pos < this.input.length && (parenLevel || (code !== 41 && code !== 44))) { // ')', ','
        if (code === 40) // '('
        { parenLevel++; }
        if (code === 41) // ')'
        { parenLevel--; }
        if (code === 34 || code === 39) { // '"' "'" We have a quote so go all the way to the end of the quote
          var quote = code;
          code = this.input.charCodeAt(++this.pos);
          while (this.pos < this.input.length && code !== quote) {
            if (code === 92) { // '\'
              code = this.input.charCodeAt(++this.pos);
              if (code !== quote) { continue }
            }
            code = this.input.charCodeAt(++this.pos);
          }
        }
        code = this.input.charCodeAt(++this.pos);
      }
      return this.preprocessFinishToken(types$1._preprocessParamItem, this.input.slice(this.preStart, this.pos))
    }
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || (code === 92 /* '\' */ && this.input.charCodeAt(this.pos + 1) === 117 /* 'u' */)) { return this.preprocessReadWord(processMacros) }
    if (this.getTokenFromCode(code, skipComments ? this.preprocessFinishTokenSkipComments : this.preprocessFinishToken, true) === false) { // Allow _eol token
      // If we are here, we either found a non-ASCII identifier
      // character, or something that's entirely disallowed.
      var ch = String.fromCharCode(code);
      if (ch === "\\" || nonASCIIidentifierStart.test(ch)) { return this.preprocessReadWord(processMacros) }
      this.raise(this.pos, "Unexpected character '" + ch + "'");
    }
  };

  pp$5.preprocessReadWord = function (processMacros, onlyTransformMacroArguments) {
    var word = this.readWord1();
    var type = types$1.name;
    var readMacroWordReturn;
    if (processMacros && this.options.preprocess) {
      readMacroWordReturn = this.readMacroWord(word, this.preprocessNext, onlyTransformMacroArguments);
      if (readMacroWordReturn === true) { return true }
    }

    if (!this.containsEsc && isKeywordPreprocessor.test(word)) { type = preKeywords[word]; }
    this.preprocessFinishToken(type, word, readMacroWordReturn, false, processMacros); // If readMacroWord returns anything except 'true' it is the real tokEndPos
  };

  // If the word is a macro return true as the token is already finished. If not just return 'undefined'.

  pp$5.readMacroWord = function (word, nextFinisher, onlyTransformArguments) {
    var macro,
      lastStackItem = this.preprocessStackLastItem,
      oldParameterScope = this.preprocessParameterScope;
    if (lastStackItem) {
      var scope = this.preTokParameterScope || this.preprocessStackLastItem;
      // If the current macro has parameters check if this word is one of them and should be translated
      if (scope.parameterDict && scope.macro.isParameterFunction().test(word)) {
        macro = scope.parameterDict[word];
        // If it is a variadic macro and we can't find anything in the variadic parameter just get next token
        if (!macro && scope.macro.variadicName === word) {
          // Don't do this if we are stringifying or concatenating as we then want an empty string
          if (this.preConcatenating) {
            this.finishToken(types$1.name, "");
            return true
          } else {
            this.skipSpace();
            nextFinisher.call(this, false, true, onlyTransformArguments, true); // Stealth and Preprocess macros.
          }
          return true
        }
        // Lets look ahead to find out if we find a '##' for token concatenate
        // We don't want to prescan spaces across macro boundary as the macro stack will fall apart
        // So we do a special prescan if we have to cross a boundary all in the name of speed
        if (this.preprocessPrescanFor(35, 35)) { // Prescan across boundary for '##' as we crossed a boundary
          onlyTransformArguments = 2;
        }
        this.preprocessParameterScope = macro && macro.parameterScope;
        onlyTransformArguments--;
      }
    }

    // Does the word match against any of the known macro names
    // Don't match if:
    //   1. We already has found a argument macro
    //   2. We are doing concatenating. Here it is only valid for the last token.
    if (!macro && (!onlyTransformArguments && !this.preprocessOnlyTransformArgumentsForLastToken || this.pos < this.input.length) && this.options.preprocessIsMacro(word)) {
      this.preprocessParameterScope = null;
      macro = this.options.preprocessGetMacro(word);
      if (macro) {
        // Check if this macro is already referenced by looking in the stack
        // Don't do it if the input in the stack is an argument. We want to simulate 'expand arguments first'
        if (!this.preprocessStackLastItem || !this.preprocessStackLastItem.macro.isArgument) {
          var i = this.preprocessStack.length,
            lastMacroItem;
          while (i > 0) {
            var item = this.preprocessStack[--i],
              macroItem = item.macro;
            if (macroItem.identifier === word && !(lastMacroItem && lastMacroItem.isArgument)) {
              macro = null;
            }
            lastMacroItem = macroItem;
          }
        }
      } else {
        macro = this.preprocessBuiltinMacro(word);
      }
    }
    if (macro) {
      var parameters;
      var hasParameters = macro.parameters;
      var nextIsParenL;
      if (hasParameters) {
        // Ok, we should have parameters for the macro. Lets look ahead to find out if we find a '('
        // First save current position and loc for tokEndPos
        var pos = this.pos;
        // let loc
        // if (this.options.locations) loc = new line_loc_t
        if (this.preprocessPrescanFor(40)) { // '('
          nextIsParenL = true;
        } else {
          // We didn't find a '(' so don't transform to the macro. Return the real tokEndPos so we get correct token end values.
          // preprocessOverrideTokEndLoc = loc
          return pos
        }
      }
      if (!hasParameters || nextIsParenL) {
        // Now we know that we have a matching macro. Get parameters if needed
        if (nextIsParenL) {
          var variadicName = macro.variadicName;
          var first = true;
          var noParams = 0;
          parameters = Object.create(null);
          this.skipSpace(true);
          // preprocessReadToken();
          // preprocessMacroParameterListMode = true;
          // preprocessExpect(_parenL);
          // lastTokPos = tokPos;
          if (this.input.charCodeAt(this.pos++) !== 40) { this.raise(this.pos - 1, "Expected '(' before macro prarameters"); }
          this.skipSpace(true, true, true);
          var code = this.input.charCodeAt(this.pos++);
          while (this.pos < this.input.length && code !== 41) {
            if (first) { first = false; }
            else
              if (code === 44) { // ','
                this.skipSpace(true, true, true);
                code = this.input.charCodeAt(this.pos++);
              } else { this.raise(this.pos - 1, "Expected ',' between macro parameters"); }
            var ident = hasParameters[noParams++];
            var variadicAndLastParameter = variadicName && hasParameters.length === noParams;
            var paramStart = this.pos - 1, parenLevel = 0;
            // Calculate current line and current line start.
            var positionOffset = this.options.locations && new PositionOffset(this.curLine, this.tokLineStart);
            // When parsing a macro parameter list parentheses within each argument must balance
            // If it is variadic and we are on the last paramter collect all the rest of the parameters
            // eslint-disable-next-line no-unmodified-loop-condition
            while (this.pos < this.input.length && (parenLevel || (code !== 41 && (code !== 44 || variadicAndLastParameter)))) { // ')', ','
              if (code === 40) // '('
              { parenLevel++; }
              if (code === 41) // ')'
              { parenLevel--; }
              if (code === 34 || code === 39) { // '"' "'" We have a quote so go all the way to the end of the quote
                var quote = code;
                code = this.input.charCodeAt(this.pos++);
                while (this.pos < this.input.length && code !== quote) {
                  if (code === 92) { // '\'
                    code = this.input.charCodeAt(this.pos++);
                    if (code !== quote) { continue }
                  }
                  code = this.input.charCodeAt(this.pos++);
                }
              }
              code = this.input.charCodeAt(this.pos++);
            }
            var val = this.input.slice(paramStart, this.pos - 1);
            var trimmedLeft = val.trimStart();
            var trimmedVal = trimmedLeft.trimEnd();
            var trimOffset = val.length - trimmedLeft.length;
            // var val = preTokType === _preprocessParamItem ? preTokVal : "";
            parameters[ident] = new Macro(ident, trimmedVal, null, paramStart + this.tokMacroOffset + trimOffset, true, this.preTokParameterScope || this.preprocessStackLastItem, false, positionOffset); // true = 'Is argument', false = 'Not varadic'
          }
          if (code !== 41) { this.raise(this.pos, "Expected ')' after macro prarameters"); }
          this.skipSpace(true, true); // Don't skip EOL and don't skip macro boundary
          // preprocessMacroParameterListMode = false;
          // preprocessExpect(_parenR);
        }
        // If the macro defines anything add it to the preprocess input stack
        return this.readTokenFromMacro(macro, this.tokPosMacroOffset, parameters, oldParameterScope, this.pos, nextFinisher, onlyTransformArguments)
      }
    }
  };

  // Here we pre scan for first and second character.
  // The first thing should be to skip spaces and comments
  // Return true if the first characters after spaces are first and second
  // This is very simular to the function onlySkipSpace. Maybe the same
  // function can be used with some refactoring?
  pp$5.preprocessPrescanFor = function (first, second) {
    var i = this.preprocessStack.length;

    var scanInput = this.input;
    var scanPos = this.pos;
    stackloop:
    while (scanInput != null) {
      charloop: for (; ;) {
        var ch = scanInput.charCodeAt(scanPos);
        if (ch === 32) { // ' '
          ++scanPos;
        } else if (ch === 13) {
          ++scanPos;
          var next = scanInput.charCodeAt(scanPos);
          if (next === 10) {
            ++scanPos;
          }
        } else if (ch === 10) {
          ++scanPos;
        } else if (ch === 9) {
          ++scanPos;
        } else if (ch === 47) { // '/'
          var next$1 = scanInput.charCodeAt(scanPos + 1);
          if (next$1 === 42) { // '*'
            var end = scanInput.indexOf("*/", scanPos += 2);
            if (end === -1) { this.raise(scanPos - 2, "Unterminated comment"); }
            scanPos = end + 2;
          } else if (next$1 === 47) { // '/'
            ch = scanInput.charCodeAt(scanPos += 2);
            while (scanPos < scanInput.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
              ++scanPos;
              ch = scanInput.charCodeAt(scanPos);
            }
          } else { break stackloop }
        } else if (ch === 160 || ch === 11 || ch === 12 || (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch)))) { // '\xa0', VT, FF, Unicode whitespaces
          ++scanPos;
        } else if (scanPos >= scanInput.length) {
          break charloop
        } else if (ch === 92) { // '\'
          // Check if we have an escaped newline. We are using a relaxed treatment of escaped newlines like gcc.
          // We allow spaces, horizontal and vertical tabs, and form feeds between the backslash and the subsequent newline
          var pos = scanPos + 1;
          ch = scanInput.charCodeAt(pos);
          while (pos < scanInput.length && (ch === 32 || ch === 9 || ch === 11 || ch === 12 || (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))))) // nonASCIIwhitespaceNoNewLine before
          { ch = scanInput.charCodeAt(++pos); }
          lineBreak.lastIndex = 0;
          var match = lineBreak.exec(scanInput.slice(pos, pos + 2));
          if (match && match.index === 0) {
            scanPos = pos + match[0].length;
          } else {
            break stackloop
          }
        } else {
          break stackloop
        }
      }
      var stackItem = this.preprocessStack[--i];
      if (stackItem == null) { return false } // End of all input. We will not find `first` and `second`.
      scanPos = stackItem.end;
      scanInput = stackItem.input;
    }
    return scanInput && scanInput.charCodeAt(scanPos) === first && (second == null || scanInput.charCodeAt(scanPos + 1) === second)
  };

  // Push macro to stack and start read from it.
  // Just read next token if the macro is empty
  pp$5.readTokenFromMacro = function (macro, macroOffset, parameters, parameterScope, end, nextFinisher, onlyTransformArguments) {
    var macroString = macro.macro;
    // If we are evaluation a macro expresion an empty macro definition means true or '1'
    if (!macroString && nextFinisher === this.preprocessNext) { macroString = "1"; }
    if (macroString) {
      this.pushMacroToStack(macro, macroString, macroOffset, parameters, parameterScope, end, onlyTransformArguments);
    } else if (this.preConcatenating) {
      // If we are concatenating or stringifying and the macro is empty just make an empty string.
      (nextFinisher === this.next ? this.finishToken : this.preprocessFinishToken).call(this, types$1.name, "");
      return true
    }
    // Now read the next token
    this.skipSpace();
    nextFinisher.call(this, false, true, onlyTransformArguments, true); // Stealth and Preprocess macros
    return true
  };

  pp$5.preprocessBuiltinMacro = function (macroIdentifier) {
    var builtinMacro = this.macrosBuiltinMacros[macroIdentifier];
    return builtinMacro ? builtinMacro(this) : null
  };

  pp$5.defineMacros = function (macroArray) {
    var parseMacroOptions = {
      preprocess: true,
      ecmaVersion: this.options.ecmaVersion,
      preprocessAddMacro: this.options.preprocessAddMacro,
      preprocessGetMacro: this.options.preprocessGetMacro,
      preprocessUndefineMacro: this.options.preprocessUndefineMacro,
      preprocessIsMacro: this.options.preprocessIsMacro
    };

    for (var i = 0, size = macroArray.length; i < size; i++) {
      var macroDefinition = macroArray[i].trim();
      var pos = macroDefinition.indexOf("=");
      if (pos === 0) { this.raise(0, "Invalid macro definition: '" + macroDefinition + "'"); }
      // If there is no macro body, define the name with the value 1
      var name = (void 0), body = (void 0);
      if (pos > 0) {
        name = macroDefinition.slice(0, pos);
        body = macroDefinition.slice(pos + 1);
      } else {
        name = macroDefinition;
      }
      if (Object.prototype.hasOwnProperty.call(this.macrosBuiltinMacros, name)) { this.raise(0, "'" + name + "' is a predefined macro name"); }

      var p = new Parser(parseMacroOptions, name + (body != null ? " " + body : ""));
      p.preprocessParseDefine();
    }
  };

  // Push macro to stack and reset tokPos etc.
  // macroString is the string from the macro. It is usually 'macro.macro' but the caller can modify it if needed
  // includeFile is true if the macro should be treated as a regular file. In other words don't stringify words after '#'
  pp$5.pushMacroToStack = function (macro, macroString, macroOffset, parameters, parameterScope, end, onlyTransformArguments, isIncludeFile) {
    this.preprocessStackLastItem = { macro: macro, macroOffset: macroOffset, parameterDict: parameters, /* start: macroStart, */ end: end, lastEnd: this.localLastEnd, tokStart: this.start, onlyTransformArgumentsForLastToken: this.preprocessOnlyTransformArgumentsForLastToken, currentLine: this.curLine, currentLineStart: this.lineStart, sourceFile: this.sourceFile };
    if (parameterScope) { this.preprocessStackLastItem.parameterScope = parameterScope; }
    if (isIncludeFile) { this.preprocessStackLastItem.isIncludeFile = isIncludeFile; }
    this.preprocessStackLastItem.input = this.input;
    this.preprocessStack.push(this.preprocessStackLastItem);
    this.preprocessOnlyTransformArgumentsForLastToken = onlyTransformArguments;
    this.input = macroString;
    this.tokPosMacroOffset = macro.start;
    this.pos = 0;
    this.curLine = 1;
    this.lineStart = 0;
    this.firstEnd = 0;
    this.localLastEnd = 0;
    if (macro.sourceFile) { this.sourceFile = macro.sourceFile; }
  };
  // FIXME: Find out if this is really used?
  pp$5.preprocessFinishTokenSkipComments = function (type, val) {
    this.preType = type;
    this.preVal = val;
    this.firstEnd = this.preEnd = this.pos;
    this.preprocessSkipSpace(true); // 'true' for don't skip comments
  };

  // Continue to the next token.

  pp$5.preprocessNext = function (ignoreEscapeSequenceInKeyword, stealth, onlyTransformArguments, processMacros) {
    if (!stealth) {
      this.preLastStart = this.preStart;
      this.preLastEnd = this.preEnd;
    }
    this.localLastEnd = this.firstEnd;
    return this.preprocessReadToken(false, false, processMacros, onlyTransformArguments)
  };

  // Skip whitespaces sometimes without line breaks
  // Returns true if it stops at a line break.

  pp$5.preprocessSkipSpace = function (dontSkipComments, skipEOL) {
    var ch = this.skipSpace(!skipEOL, false, dontSkipComments);
    // Can't see that this line break test is used anymore
    // lineBreak.lastIndex = 0;
    // var match = lineBreak.exec(input.slice(tokPos, tokPos + 2));
    // return (match && match.index === 0);
    return ch
  };

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  pp$5.preprocessEat = function (type, processMacros) {
    if (this.preType === type) {
      this.preprocessNext(false, false, false, processMacros);
      return true
    }
  };

  // Expect a token of a given type. If found, consume it, otherwise,
  // this.raise with errorMessage or an unexpected token error.

  pp$5.preprocessExpect = function (type, errorMessage, processMacros) {
    if (this.preType === type) { this.preprocessNext(false, false, undefined, null, processMacros); }
    else { this.raise(this.preStart, errorMessage || "Unexpected token"); }
  };

  function debug() {
    // debugger;
  }
  pp$5.preprocessGetIdent = function (processMacros) {
    var ident = this.preType === types$1.name ? this.preVal : ((!this.options.forbidReserved || this.preType.okAsIdent) && this.preType.keyword) || debug(); // this.raise(this.preStart, "Expected Macro identifier");
    this.exprAllowed = false;
    // tokRegexpAllowed = false;
    this.preprocessNext(false, false, false, processMacros);
    return ident
  };

  pp$5.preprocessFinishToken = function (type, val, overrideTokEnd, skipEOL, processMacros) {
    this.preType = type;
    this.preVal = val;
    this.preEnd = overrideTokEnd || this.pos;
    if (type !== types$1.eol) { this.firstEnd = this.preEnd; }
    // tokRegexpAllowed = type.beforeExpr;
    var ch = this.preprocessSkipSpace(false, skipEOL); // Skip comments
    if (ch === 35 && this.options.preprocess && !this.preprocessDontConcatenate && this.input.charCodeAt(this.pos + 1) === 35) { // '##'
      var val1 = val != null ? val : type.keyword || type.type;
      this.pos += 2;
      if (val1 != null) {
        // Save current line and current line start. This is needed when option.locations is true
        var positionOffset = this.options.locations && new PositionOffset(this.curLine, this.lineStart, this.preprocessStackLastItem);
        // Save positions on first token to get start and end correct on node if cancatenated token is invalid
        var saveTokInput = this.input, saveTokEnd = this.preEnd, saveTokStart = this.preStart, start = this.preStart + this.tokMacroOffset, variadicName = this.preprocessStackLastItem && this.preprocessStackLastItem.macro && this.preprocessStackLastItem.macro.variadicName;
        this.skipSpace();
        var isVariadic = null;
        if (variadicName && variadicName === this.input.slice(this.pos, this.pos + variadicName.length)) {
          isVariadic = true;
        }
        this.preConcatenating = true;
        this.preprocessReadToken(null, null, processMacros, 2); // 2 = Don't transform macros only arguments
        this.preConcatenating = false;
        var val2 = this.preVal != null ? this.preVal : this.preType.keyword || this.preType.type;
        if (val2 != null) {
          // Skip token if it is a ',' concatenated with an empty variadic parameter
          if (isVariadic && val1 === "," && val2 === "") { return this.preprocessReadToken() }
          var concat = "" + val1 + val2, val2TokStart = this.preStart + this.tokPosMacroOffset;
          // If the macro defines anything add it to the preprocess input stack
          var concatMacro = new Macro(null, concat, null, start, false, null, false, positionOffset);
          var r = this.readTokenFromMacro(concatMacro, this.tokPosMacroOffset, this.preprocessStackLastItem ? this.preprocessStackLastItem.parameterDict : null, null, this.pos, this.preprocessNext, null);
          // Consumed the whole macro in one bite? If not the tokenizer can't create a single token from the two concatenated tokens
          if (this.preprocessStackLastItem && this.preprocessStackLastItem.macro === concatMacro) {
            // FIXME: Should change this to 'preType' and friends
            this.preType = type;
            this.preStart = saveTokStart;
            this.preEnd = saveTokEnd;
            this.input = saveTokInput;
            this.tokPosMacroOffset = val2TokStart - val1.length; // reset the macro offset to the second token to get start and end correct on node
            if (!isVariadic) /* this.raise(tokStart, */ { console.warn("Warning: pasting formed '" + concat + "', an invalid preprocessing token"); }
          } else { return r }
        }
      }
    }
  };

  var pp$4 = Parser.prototype;

  pp$4.preprocessParseDefine = function () {
    this.preprocessIsParsingPreprocess = true;
    this.preprocessReadToken();

    var macroIdentifierEnd = this.preEnd;

    // We don't want to concatenate tokens when creating macros
    this.preprocessDontConcatenate = true;

    // Get position offset now as ´tokCurLine´ and ´tokLineStart´ points to next token.
    var positionOffset = this.options.locations && new PositionOffset(this.curLine, this.lineStart, this.preprocessStackLastItem);
    var macroIdentifier = this.preVal; // this.preprocessGetIdent();
    // '(' Must follow directly after identifier to be a valid macro with parameters
    var isNextCodeParenL = this.input.charCodeAt(macroIdentifierEnd) === 40; // '('
    this.preprocessExpect(types$1.name, "Preprocessor #define expects identifier");
    var parameters;
    var variadic;
    if (isNextCodeParenL) {
      this.preprocessExpect(types$1.parenL);
      parameters = [];
      variadic = false;
      var first = true;
      while (!this.preprocessEat(types$1.parenR)) {
        if (variadic) { this.raise(this.preStart, "Variadic parameter must be last"); }
        if (!first) { this.preprocessExpect(types$1.comma, "Expected ',' between macro parameters"); } else { first = false; }
        parameters.push(this.preprocessEat(types$1.ellipsis) ? variadic = "__VA_ARGS__" : this.preprocessGetIdent());
        if (this.preprocessEat(types$1.ellipsis)) { variadic = true; }
        // Get a new position offset as macro has parameters. This is needed if line has escaped (backslash) newline
        positionOffset = this.options.locations && new PositionOffset(this.curLine, this.lineStart, this.preprocessStackLastItem);
      }
    }

    var start = this.preStart;

    while (this.preType !== types$1.eol && this.preType !== types$1.eof) { this.preprocessReadToken(); }

    this.preprocessDontConcatenate = false;
    var macroString = this.preInput.slice(start, this.preStart);
    macroString = macroString.replace(/\\\n/g, " \n"); // TODO: This probably breaks the ability to have stuff after \ in multiline macros. Could probably write more advanced regexp to fix this.
    // If variadic get the last parameter for the variadic parameter name
    this.options.preprocessAddMacro(new Macro(macroIdentifier, macroString, parameters, start, false, null, variadic && parameters[parameters.length - 1], positionOffset));
    this.preprocessIsParsingPreprocess = false;
  };

  pp$4.preprocessSkipToElseOrEndif = function (skipElse) {
    var ifLevel = [];
    // eslint-disable-next-line no-unmodified-loop-condition
    while (ifLevel.length > 0 || (this.preType !== preTypes._preEndif && ((this.preType !== preTypes._preElse && this.preType !== preTypes._preElseIfTrue) || skipElse))) {
      switch (this.preType) {
        case preTypes._preIf:
        case preTypes._preIfdef:
        case preTypes._preIfndef:
          ifLevel.push(preTypes._preIf);
          break

        case preTypes._preElse:
          if (ifLevel[ifLevel.length - 1] !== preTypes._preIf) { this.raise(this.preStart, "#else after #else"); }
          else { ifLevel[ifLevel.length - 1] = preTypes._preElse; }
          break

        case preTypes._preElseIf:
          if (ifLevel[ifLevel.length - 1] !== preTypes._preIf) { this.raise(this.preStart, "#elif after #else"); }
          break

        case preTypes._preEndif:
          ifLevel.pop();
          break

        case types$1.eof:
          this.preNotSkipping = true;
          this.raise(this.preStart, "Missing #endif");
      }
      this.preprocessReadToken(true);
    }
    this.preNotSkipping = true;
    if (this.preType === preTypes._preEndif) { this.preIfLevel.pop(); }
  };

  // Parse an  expression — either a single token that is an
  // expression, an expression started by a keyword like `defined`,
  // or an expression wrapped in punctuation like `()`.
  // When `processMacros` is true any macros will we transformed to its definition

  pp$4.preprocessParseExpression = function (processMacros) {
    return this.preprocessParseExprOps(processMacros)
  };

  // Start the precedence parser.

  pp$4.preprocessParseExprOps = function (processMacros) {
    return this.preprocessParseExprOp(this.preprocessParseMaybeUnary(processMacros), -1, processMacros)
  };

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  pp$4.preprocessParseExprOp = function (left, minPrec, processMacros) {
    var prec = this.preType.binop;
    if (prec) {
      if (!this.preType.preprocess) { this.raise(this.preStart, "Unsupported macro operator"); }
      if (prec > minPrec) {
        var node = this.startNodeFrom(left);
        node.left = left;
        node.operator = this.preVal;
        this.preprocessNext(false, false, false, processMacros);
        node.right = this.preprocessParseExprOp(this.preprocessParseMaybeUnary(processMacros), prec, processMacros);
        node = this.preprocessFinishNode(node, /&&|\|\|/.test(node.operator) ? "LogicalExpression" : "BinaryExpression");
        return this.preprocessParseExprOp(node, minPrec, processMacros)
      }
    }
    return left
  };

  // Parse an unary expression if possible

  pp$4.preprocessParseMaybeUnary = function (processMacros) {
    if (this.preType.preprocess && this.preType.prefix) {
      var node = this.startNode();
      node.operator = this.preVal;
      node.prefix = true;
      this.preprocessNext(false, false, false, processMacros);
      node.argument = this.preprocessParseMaybeUnary(processMacros);
      return this.preprocessFinishNode(node, "UnaryExpression")
    }
    return this.preprocessParseExprAtom(processMacros)
  };

  // Parse an atomic macro expression — either a single token that is an
  // expression, an expression started by a keyword like `defined`,
  // or an expression wrapped in punctuation like `()`.

  pp$4.preprocessParseExprAtom = function (processMacros) {
    switch (this.preType) {
      case types$1.name:
        return this.preprocessParseIdent(processMacros)

      case types$1.num: case types$1.string:
        return this.preprocessParseStringNumLiteral(processMacros)

      case types$1.parenL:
        var tokStart1 = this.preStart;
        this.preprocessNext(false, false, false, processMacros);
        var val = this.preprocessParseExpression(processMacros);
        val.start = tokStart1;
        val.end = this.preEnd;
        this.preprocessExpect(types$1.parenR, "Expected closing ')' in macro expression", processMacros);
        return val

      case preTypes._preDefined:
        var node = this.startNode();
        this.preprocessNext(false, false, false, processMacros);
        node.object = this.preprocessParseDefinedExpression(processMacros);
        return this.preprocessFinishNode(node, "DefinedExpression")

      default:
        this.unexpected();
    }
  };

  pp$4.preprocessParseIdent = function (processMacros) {
    var node = this.startNode();
    node.name = this.preprocessGetIdent(processMacros);
    return this.preprocessFinishNode(node, "Identifier")
  };

  // Parse an 'Defined' macro expression — either a single token that is an
  // identifier, number, string or an expression wrapped in punctuation like `()`.

  pp$4.preprocessParseDefinedExpression = function (processMacros) {
    switch (this.preType) {
      case types$1.name:
        return this.preprocessParseIdent(processMacros)

      case types$1.num: case types$1.string:
        return this.preprocessParseStringNumLiteral(processMacros)

      case types$1.parenL:
        var tokStart1 = this.preStart;
        this.preprocessNext(false, false, false, processMacros);
        var val = this.preprocessParseDefinedExpression(processMacros);
        val.start = tokStart1;
        val.end = this.preEnd;
        this.preprocessExpect(types$1.parenR, "Expected closing ')' in macro expression", processMacros);
        return val

      default:
        this.unexpected();
    }
  };

  pp$4.preprocessParseStringNumLiteral = function (processMacros) {
    var node = this.startNode();
    node.value = this.preVal;
    node.raw = this.preInput.slice(this.preStart, this.preEnd);
    this.preprocessNext(false, false, false, processMacros);
    return this.preprocessFinishNode(node, "Literal")
  };

  pp$4.preprocessFinishNode = function (node, type) {
    node.type = type;
    node.end = this.preEnd;
    return node
  };

  pp$4.preprocessEvalExpression = function (expr) {
    // A recursive walk is one where your functions override the default
    // walkers. They can modify and replace the state parameter that's
    // threaded through the walk, and can opt how and whether to walk
    // their child nodes (by calling their third argument on these
    // nodes).
    function recursiveWalk(node, state, funcs) {
      var visitor = funcs;
      function c(node, st, override) {
        return visitor[override || node.type](node, st, c)
      }
      return c(node, state)
    }
    var self = this;
    return recursiveWalk(expr, {}, {
      LogicalExpression: function (node, st, c) {
        var left = node.left, right = node.right;
        switch (node.operator) {
          case "||":
            return c(left, st) || c(right, st)
          case "&&":
            return c(left, st) && c(right, st)
        }
      },
      BinaryExpression: function (node, st, c) {
        var left = node.left, right = node.right;
        switch (node.operator) {
          case "+":
            return c(left, st) + c(right, st)
          case "-":
            return c(left, st) - c(right, st)
          case "*":
            return c(left, st) * c(right, st)
          case "/":
            return c(left, st) / c(right, st)
          case "%":
            return c(left, st) % c(right, st)
          case "<":
            return c(left, st) < c(right, st)
          case ">":
            return c(left, st) > c(right, st)
          case "^":
            return c(left, st) ^ c(right, st)
          case "&":
            return c(left, st) & c(right, st)
          case "|":
            return c(left, st) | c(right, st)
          case "==":
            // eslint-disable-next-line eqeqeq
            return c(left, st) == c(right, st)
          case "===":
            return c(left, st) === c(right, st)
          case "!=":
            // eslint-disable-next-line eqeqeq
            return c(left, st) != c(right, st)
          case "!==":
            return c(left, st) !== c(right, st)
          case "<=":
            return c(left, st) <= c(right, st)
          case ">=":
            return c(left, st) >= c(right, st)
          case ">>":
            return c(left, st) >> c(right, st)
          case ">>>":
            return c(left, st) >>> c(right, st)
          case "<<":
            return c(left, st) << c(right, st)
        }
      },
      UnaryExpression: function (node, st, c) {
        var arg = node.argument;
        switch (node.operator) {
          case "-":
            return -c(arg, st)
          case "+":
            return +c(arg, st)
          case "!":
            return !c(arg, st)
          case "~":
            return ~c(arg, st)
        }
      },
      Literal: function (node, st, c) {
        return node.value
      },
      Identifier: function (node, st, c) {
        // If it is not macro expanded it should be counted as a zero
        return 0
      },
      DefinedExpression: function (node, st, c) {
        var objectNode = node.object;
        if (objectNode.type === "Identifier") {
          // If the macro has parameters it will not expand and we have to check here if it exists
          var name = objectNode.name,
            macro = self.options.preprocessGetMacro(name) || self.preprocessBuiltinMacro(name);
          return macro || 0
        } else {
          return c(objectNode, st)
        }
      }
    })
  };

  var pp$3 = Parser.prototype;

  pp$3.parseObjjImplementation = function (node) {
    this.next();
    node.classname = this.parseIdent(true);
    if (this.eat(types$1.colon)) { node.superclassname = this.parseIdent(true); }
    else if (this.eat(types$1.parenL)) {
      node.categoryname = this.parseIdent(true);
      this.expect(types$1.parenR, "Expected closing ')' after category name");
    }
    if (this.value === "<") {
      this.next();
      var protocols = [],
        first = true;
      node.protocols = protocols;
      while (this.value !== ">") {
        if (!first) { this.expect(types$1.comma, "Expected ',' between protocol names"); }
        else { first = false; }
        protocols.push(this.parseIdent(true));
      }
      this.next();
    }
    if (this.eat(types$1.braceL)) {
      node.ivardeclarations = [];
      for (; ;) {
        if (this.eat(types$1.braceR)) { break }
        this.parseObjjIvarDeclaration(node);
      }
      node.endOfIvars = this.start;
    }
    node.body = [];
    while (!this.eat(objjAtTypes._end)) {
      if (this.type === types$1.eof) { this.raise(this.pos, "Expected '@end' after '@implementation'"); }
      node.body.push(this.parseObjjClassElement());
    }
    return this.finishNode(node, "ClassDeclarationStatement")
  };

  pp$3.parseObjjInterface = function (node) {
    this.next();
    node.classname = this.parseIdent(true);
    if (this.eat(types$1.colon)) { node.superclassname = this.parseIdent(true); }
    else if (this.eat(types$1.parenL)) {
      node.categoryname = this.parseIdent(true);
      this.expect(types$1.parenR, "Expected closing ')' after category name");
    }
    if (this.value === "<") {
      this.next();
      var protocols = [],
        first = true;
      node.protocols = protocols;
      while (this.value !== ">") {
        if (!first) { this.expect(types$1.comma, "Expected ',' between protocol names"); }
        else { first = false; }
        protocols.push(this.parseIdent(true));
      }
      this.next();
    }
    if (this.eat(types$1.braceL)) {
      node.ivardeclarations = [];
      for (; ;) {
        if (this.eat(types$1.braceR)) { break }
        this.parseObjjIvarDeclaration(node);
      }
      node.endOfIvars = this.start;
    }
    node.body = [];
    while (!this.eat(objjAtTypes._end)) {
      if (this.type === types$1.eof) { this.raise(this.pos, "Expected '@end' after '@interface'"); }
      node.body.push(this.parseClassElement());
    }
    return this.finishNode(node, "InterfaceDeclarationStatement")
  };

  pp$3.parseObjjProtocol = function (node) {
    this.next();
    node.protocolname = this.parseIdent(true);
    if (this.value === "<") {
      this.next();
      var protocols = [],
        first = true;
      node.protocols = protocols;
      while (this.value !== ">") {
        if (!first) { this.expect(types$1.comma, "Expected ',' between protocol names"); }
        else { first = false; }
        protocols.push(this.parseIdent(true));
      }
      this.next();
    }
    while (!this.eat(objjAtTypes._end)) {
      if (this.type === types$1.eof) { this.raise(this.pos, "Expected '@end' after '@protocol'"); }
      if (this.eat(objjAtTypes._required)) { continue }
      if (this.eat(objjAtTypes._optional)) {
        while (!this.eat(objjAtTypes._required) && this.type !== objjAtTypes._end) {
          (node.optional || (node.optional = [])).push(this.parseObjjProtocolClassElement());
        }
      } else {
        (node.required || (node.required = [])).push(this.parseObjjProtocolClassElement());
      }
    }
    return this.finishNode(node, "ProtocolDeclarationStatement")
  };

  pp$3.parseObjjProtocolClassElement = function () {
    var element = this.startNode();
    this.parseObjjMethodDeclaration(element);

    this.semicolon();
    return this.finishNode(element, "MethodDeclarationStatement")
  };

  pp$3.parseObjjMethodDeclaration = function (node) {
    node.methodtype = this.value;
    this.expect(types$1.plusMin, "Method declaration must start with '+' or '-'");
    // If we find a '(' we have a return type to parse
    if (this.eat(types$1.parenL)) {
      var typeNode = this.startNode();
      if (this.options.ecmaVersion >= 8 && this.eatContextual("async")) {
        node.async = true;
      }
      if (this.eat(objjAtTypes._action) || this.eat(objjTypes._action)) {
        node.action = this.finishNode(typeNode, "ObjectiveJActionType");
        typeNode = this.startNode();
      }
      if (!this.eat(types$1.parenR)) {
        node.returntype = this.parseObjectiveJType(typeNode);
        this.expect(types$1.parenR, "Expected closing ')' after method return type");
      }
    }
    // Now we parse the selector
    var first = true,
      selectors = [],
      args = [];
    node.selectors = selectors;
    node.arguments = args;
    for (; ;) {
      if (this.type !== types$1.colon) {
        selectors.push(this.parseIdent(true));
        if (first && this.type !== types$1.colon) { break }
      } else { selectors.push(null); }
      this.expect(types$1.colon, "Expected ':' in selector");
      var argument = {};
      args.push(argument);
      if (this.eat(types$1.parenL)) {
        argument.type = this.parseObjectiveJType();
        this.expect(types$1.parenR, "Expected closing ')' after method argument type");
      }
      argument.identifier = this.parseIdent(false);
      if (this.type === types$1.braceL || this.type === types$1.semi) { break }
      if (this.eat(types$1.comma)) {
        this.expect(types$1.ellipsis, "Expected '...' after ',' in method declaration");
        node.parameters = true;
        break
      }
      first = false;
    }
  };

  pp$3.parseObjjImport = function (node) {
    this.next();
    if (this.type === types$1.string) { node.localfilepath = true; }
    else if (this.type === objjTypes._filename) { node.localfilepath = false; }
    else { this.unexpected(); }

    node.filename = this.parseObjjStringNumRegExpLiteral();
    return this.finishNode(node, "ImportStatement")
  };

  pp$3.parseObjjStringNumRegExpLiteral = function () {
    var node = this.startNode();
    node.value = this.value;
    node.raw = this.tokInput.slice(this.start, this.end);
    this.next();
    return this.finishNode(node, "Literal")
  };

  pp$3.parseObjjIvarDeclaration = function (node) {
    var outlet;
    if (this.eat(objjAtTypes._outlet)) { outlet = true; }
    var type = this.parseObjectiveJType();
    if (this.strict && this.reservedWordsStrictBind.test(type.name)) { this.raise(type.start, "Binding " + type.name + " in strict mode"); }
    for (; ;) {
      var decl = this.startNode();
      if (outlet) { decl.outlet = outlet; }
      decl.ivartype = type;
      decl.id = this.parseIdent();
      if (this.strict && this.reservedWordsStrictBind.test(decl.id.name)) { this.raise(decl.id.start, "Binding " + decl.id.name + " in strict mode"); }
      if (this.eat(objjAtTypes._accessors)) {
        decl.accessors = {};
        if (this.eat(types$1.parenL)) {
          if (!this.eat(types$1.parenR)) {
            for (; ;) {
              var config = this.parseIdent(true);
              switch (config.name) {
                case "property":
                case "getter":
                  this.expect(types$1.eq, "Expected '=' after 'getter' accessor attribute");
                  decl.accessors[config.name] = this.parseIdent(true);
                  break

                case "setter":
                  this.expect(types$1.eq, "Expected '=' after 'setter' accessor attribute");
                  var setter = this.parseIdent(true);
                  decl.accessors[config.name] = setter;
                  if (this.eat(types$1.colon)) { setter.end = this.start; }
                  setter.name += ":";
                  break

                case "readwrite":
                case "readonly":
                case "copy":
                  decl.accessors[config.name] = true;
                  break

                default:
                  this.raise(config.start, "Unknown accessors attribute '" + config.name + "'");
              }
              if (!this.eat(types$1.comma)) { break }
            }
            this.expect(types$1.parenR, "Expected closing ')' after accessor attributes");
          }
        }
      }
      this.finishNode(decl, "IvarDeclaration");
      node.ivardeclarations.push(decl);
      if (!this.eat(types$1.comma)) { break }
    }
    this.semicolon();
  };

  pp$3.parseObjjClassElement = function () {
    var element = this.startNode();
    if (this.value === "+" || this.value === "-") {
      this.parseObjjMethodDeclaration(element);
      this.eat(types$1.semi);
      element.startOfBody = this.lastTokEnd;
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldInFunc = this.objjInFunction, oldLabels = this.objjLabels, oldAsync = this.objjFunctionIsAsync;
      this.objjInFunction = true; this.objjLabels = [];
      this.objjFunctionIsAsync = !!element.async;
      this.enterScope(functionFlags(this.objjFunctionIsAsync, false) | SCOPE_SUPER | SCOPE_OBJJ_METHOD);
      element.body = this.parseBlock(true);
      this.exitScope();
      this.objjInFunction = oldInFunc; this.objjLabels = oldLabels; this.objjFunctionIsAsync = oldAsync;
      return this.finishNode(element, "MethodDeclarationStatement")
    } else { return this.parseStatement() }
  };

  // Parse the next token as an Objective-J typ.
  // It can start with 'async' for return types of a method
  // It can be 'id' followed by a optional protocol '<CPKeyValueBinding, ...>'
  // It can be 'void' or 'id'
  // It can be 'signed' or 'unsigned' followed by an optional 'char', 'byte', 'short', 'int' or 'long'
  // It can be 'char', 'byte', 'short', 'int' or 'long'
  // 'int' can be followed by an optinal 'long'. 'long' can be followed by an optional extra 'long'

  pp$3.parseObjectiveJType = function (startFrom) {
    var node = startFrom ? this.startNodeFrom(startFrom) : this.startNode(), allowProtocol = false;
    if (this.type === types$1.name) {
      // It should be a class name
      node.name = this.value;
      node.typeisclass = true;
      allowProtocol = true;
      this.next();
    } else {
      node.typeisclass = false;
      node.name = this.type.keyword;
      // Do nothing more if it is 'void'
      if (!this.eat(types$1._void)) {
        if (this.eat(objjTypes._id)) {
          allowProtocol = true;
        } else {
          // Now check if it is some basic type or an approved combination of basic types
          var nextKeyWord;
          if (this.eat(objjTypes._float) || this.eat(objjTypes._boolean) || this.eat(objjTypes._SEL) || this.eat(objjTypes._double)) {
            nextKeyWord = this.type.keyword;
          } else {
            if (this.eat(objjTypes._signed) || this.eat(objjTypes._unsigned)) { nextKeyWord = this.type.keyword || true; }
            if (this.eat(objjTypes._char) || this.eat(objjTypes._byte) || this.eat(objjTypes._short)) {
              if (nextKeyWord) { node.name += " " + nextKeyWord; }
              nextKeyWord = this.type.keyword || true;
            } else {
              if (this.eat(objjTypes._int)) {
                if (nextKeyWord) { node.name += " " + nextKeyWord; }
                nextKeyWord = this.type.keyword || true;
              }
              if (this.eat(objjTypes._long)) {
                if (nextKeyWord) { node.name += " " + nextKeyWord; }
                nextKeyWord = this.type.keyword || true;
                if (this.eat(objjTypes._long)) {
                  node.name += " " + nextKeyWord;
                }
              }
            }
            if (!nextKeyWord) {
              // It must be a class name if it was not a basic type. // FIXME: This is not true
              node.name = (!this.options.forbidReserved && this.type.label) || this.unexpected();
              node.typeisclass = true;
              allowProtocol = true;
              this.next();
            }
          }
        }
      }
    }
    if (allowProtocol) {
      // Is it 'id' or classname followed by a '<' then parse protocols.
      if (this.value === "<") {
        var first = true,
          protocols = [];
        node.protocols = protocols;
        do {
          this.next();
          if (first) { first = false; }
          else { this.eat(types$1.comma); }
          protocols.push(this.parseIdent(true));
        } while (this.value !== ">")
        this.next();
      }
    }
    return this.finishNode(node, "ObjectiveJType")
  };

  pp$3.parseObjjPreprocess = function (node) {
    this.next();
    return this.finishNode(node, "PreprocessStatement")
  };

  pp$3.parseObjjClass = function (node) {
    this.next();
    node.id = this.parseIdent(false);
    return this.finishNode(node, "ClassStatement")
  };

  pp$3.parseObjjGlobal = function (node) {
    this.next();
    node.id = this.parseIdent(false);
    return this.finishNode(node, "GlobalStatement")
  };

  pp$3.parseObjjTypedef = function (node) {
    this.next();
    node.typedefname = this.parseIdent(true);
    return this.finishNode(node, "TypeDefStatement")
  };

  // Parses a comma-separated list of <key>:<value> pairs and returns them as
  // [arrayOfKeyExpressions, arrayOfValueExpressions].
  pp$3.parseObjjDictionary = function () {
    this.expect(types$1.braceL, "Expected '{' before dictionary");

    var keys = [], values = [], first = true;
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma, "Expected ',' between expressions");
        if (/* this.options.allowTrailingCommas && */ this.eat(types$1.braceR)) { break }
      }

      keys.push(this.parseExpression(true, null, true, true));
      this.expect(types$1.colon, "Expected ':' between dictionary key and value");
      values.push(this.parseExpression(true, null, true, true));
      first = false;
    }
    return [keys, values]
  };

  pp$3.parseObjjSelector = function (node, close) {
    var first = true,
      selectors = [];
    for (; ;) {
      if (this.type !== types$1.colon) {
        selectors.push(this.parseIdent(true).name);
        if (first && this.type === close) { break }
      }
      this.expect(types$1.colon, "Expected ':' in selector");
      selectors.push(":");
      if (this.type === close) { break }
      first = false;
    }
    node.selector = selectors.join("");
  };

  pp$3.parseObjjMessageSendExpression = function (node, firstExpr) {
    this.parseObjjSelectorWithArguments(node, types$1.bracketR);
    if (firstExpr.type === "Super") { node.superObject = true; }
    else { node.object = firstExpr; }
    return this.finishNode(node, "MessageSendExpression")
  };

  pp$3.parseObjjSelectorWithArguments = function (node, close) {
    var first = true,
      selectors = [],
      args = [];
    node.selectors = selectors;
    node.arguments = args;
    for (; ;) {
      // Special case if 'in' is an identifier. TODO: Ugly fix.
      if (this.type !== types$1.colon || (this.inIsIdentifier && this.type === types$1.colon)) {
        if (this.inIsIdentifier) {
          var inNode = this.finishNode(this.startNode(), "Identifier");
          inNode.name = "in";
          selectors.push(inNode);
          this.inIsIdentifier = false;
        } else {
          selectors.push(this.parseIdent(true));
        }
        if (first && this.eat(close)) { break }
      } else {
        selectors.push(null);
      }
      this.expect(types$1.colon, "Expected ':' in selector");
      args.push(this.parseExpression(true, null, true, true));
      if (this.eat(close)) { break }
      if (this.type === types$1.comma) {
        node.parameters = [];
        while (this.eat(types$1.comma)) {
          node.parameters.push(this.parseExpression(true, null, true, true));
        }
        this.eat(close);
        break
      }
      first = false;
    }
  };

  var Node = function Node(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    if (parser.options.locations) { this.loc = new SourceLocation(parser, loc); }
    if (parser.options.directSourceFile) { this.sourceFile = parser.options.directSourceFile; }
    if (parser.options.ranges) { this.range = [pos, 0]; }
  };

  // Start an AST node, attaching a start offset.

  var pp$2 = Parser.prototype;

  pp$2.startNode = function () {
    return new Node(this, this.start + this.tokMacroOffset, this.startLoc)
  };

  pp$2.startNodeAt = function (pos, loc) {
    return new Node(this, pos, loc)
  };

  // Start a node whose start offset/comments information should be
  // based on the start of another node. For example, a binary
  // operator node is only started after its left-hand side has
  // already been parsed.

  pp$2.startNodeFrom = function (other) {
    var node = new Node(this);
    node.start = other.start;
    if (other.commentsBefore) {
      node.commentsBefore = other.commentsBefore;
      delete other.commentsBefore;
    }
    if (other.spacesBefore) {
      node.spacesBefore = other.spacesBefore;
      delete other.spacesBefore;
    }
    if (this.options.locations) {
      node.loc = new SourceLocation(this, node.start, node.end);
      node.loc.start = other.loc.start;
    }
    if (this.options.ranges) { node.range = [other.range[0], 0]; }

    return node
  };

  // Finish an AST node, adding `type` and `end` properties.

  function finishNodeAt(node, type, pos, loc) {
    node.type = type;
    node.end = pos;
    if (this.options.locations) { node.loc.end = loc; }
    if (this.options.ranges) { node.range[1] = pos; }
    return node
  }

  pp$2.finishNode = function (node, type) {
    return finishNodeAt.call(this, node, type, this.lastTokEnd + this.lastTokMacroOffset, this.lastTokEndLoc)
  };

  // Finish node at given position

  pp$2.finishNodeAt = function (node, type, pos, loc) {
    return finishNodeAt.call(this, node, type, pos, loc)
  };

  pp$2.copyNode = function (node) {
    var newNode = new Node(this, node.start, this.startLoc);
    for (var prop in node) { newNode[prop] = node[prop]; }
    return newNode
  };

  // This file contains Unicode properties extracted from the ECMAScript
  // specification. The lists are extracted like so:
  // $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

  // #table-binary-unicode-properties
  var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
  var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
  var ecma11BinaryProperties = ecma10BinaryProperties;
  var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
  var ecma13BinaryProperties = ecma12BinaryProperties;
  var unicodeBinaryProperties = {
    9: ecma9BinaryProperties,
    10: ecma10BinaryProperties,
    11: ecma11BinaryProperties,
    12: ecma12BinaryProperties,
    13: ecma13BinaryProperties
  };

  // #table-unicode-general-category-values
  var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

  // #table-unicode-script-values
  var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
  var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
  var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
  var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
  var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
  var unicodeScriptValues = {
    9: ecma9ScriptValues,
    10: ecma10ScriptValues,
    11: ecma11ScriptValues,
    12: ecma12ScriptValues,
    13: ecma13ScriptValues
  };

  var data = {};
  function buildUnicodeData(ecmaVersion) {
    var d = data[ecmaVersion] = {
      binary: wordsRegexp$1(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
      nonBinary: {
        General_Category: wordsRegexp$1(unicodeGeneralCategoryValues),
        Script: wordsRegexp$1(unicodeScriptValues[ecmaVersion])
      }
    };
    d.nonBinary.Script_Extensions = d.nonBinary.Script;

    d.nonBinary.gc = d.nonBinary.General_Category;
    d.nonBinary.sc = d.nonBinary.Script;
    d.nonBinary.scx = d.nonBinary.Script_Extensions;
  }

  for (var i = 0, list = [9, 10, 11, 12, 13]; i < list.length; i += 1) {
    var ecmaVersion = list[i];

    buildUnicodeData(ecmaVersion);
  }

  var pp$1 = Parser.prototype;

  var RegExpValidationState = function RegExpValidationState(parser) {
    this.parser = parser;
    this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "");
    this.unicodeProperties = data[parser.options.ecmaVersion >= 13 ? 13 : parser.options.ecmaVersion];
    this.source = "";
    this.flags = "";
    this.start = 0;
    this.switchU = false;
    this.switchN = false;
    this.pos = 0;
    this.lastIntValue = 0;
    this.lastStringValue = "";
    this.lastAssertionIsQuantifiable = false;
    this.numCapturingParens = 0;
    this.maxBackReference = 0;
    this.groupNames = [];
    this.backReferenceNames = [];
  };

  RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
    var unicode = flags.indexOf("u") !== -1;
    this.start = start | 0;
    this.source = pattern + "";
    this.flags = flags;
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  };

  RegExpValidationState.prototype.raise = function raise(message) {
    this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
  };

  // If u flag is given, this returns the code point at the index (it combines a surrogate pair).
  // Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
  RegExpValidationState.prototype.at = function at(i, forceU) {
    if (forceU === void 0) forceU = false;

    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return -1
    }
    var c = s.charCodeAt(i);
    if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
      return c
    }
    var next = s.charCodeAt(i + 1);
    return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
  };

  RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
    if (forceU === void 0) forceU = false;

    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return l
    }
    var c = s.charCodeAt(i), next;
    if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
      (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
      return i + 1
    }
    return i + 2
  };

  RegExpValidationState.prototype.current = function current(forceU) {
    if (forceU === void 0) forceU = false;

    return this.at(this.pos, forceU)
  };

  RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
    if (forceU === void 0) forceU = false;

    return this.at(this.nextIndex(this.pos, forceU), forceU)
  };

  RegExpValidationState.prototype.advance = function advance(forceU) {
    if (forceU === void 0) forceU = false;

    this.pos = this.nextIndex(this.pos, forceU);
  };

  RegExpValidationState.prototype.eat = function eat(ch, forceU) {
    if (forceU === void 0) forceU = false;

    if (this.current(forceU) === ch) {
      this.advance(forceU);
      return true
    }
    return false
  };

  /**
   * Validate the flags part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$1.validateRegExpFlags = function (state) {
    var validFlags = state.validFlags;
    var flags = state.flags;

    for (var i = 0; i < flags.length; i++) {
      var flag = flags.charAt(i);
      if (validFlags.indexOf(flag) === -1) {
        this.raise(state.start, "Invalid regular expression flag");
      }
      if (flags.indexOf(flag, i + 1) > -1) {
        this.raise(state.start, "Duplicate regular expression flag");
      }
    }
  };

  /**
   * Validate the pattern part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$1.validateRegExpPattern = function (state) {
    this.regexp_pattern(state);

    // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
    // parsing contains a |GroupName|, reparse with the goal symbol
    // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
    // exception if _P_ did not conform to the grammar, if any elements of _P_
    // were not matched by the parse, or if any Early Error conditions exist.
    if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
      state.switchN = true;
      this.regexp_pattern(state);
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
  pp$1.regexp_pattern = function (state) {
    state.pos = 0;
    state.lastIntValue = 0;
    state.lastStringValue = "";
    state.lastAssertionIsQuantifiable = false;
    state.numCapturingParens = 0;
    state.maxBackReference = 0;
    state.groupNames.length = 0;
    state.backReferenceNames.length = 0;

    this.regexp_disjunction(state);

    if (state.pos !== state.source.length) {
      // Make the same messages as V8.
      if (state.eat(0x29 /* ) */)) {
        state.raise("Unmatched ')'");
      }
      if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
        state.raise("Lone quantifier brackets");
      }
    }
    if (state.maxBackReference > state.numCapturingParens) {
      state.raise("Invalid escape");
    }
    for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
      var name = list[i];

      if (state.groupNames.indexOf(name) === -1) {
        state.raise("Invalid named capture referenced");
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
  pp$1.regexp_disjunction = function (state) {
    this.regexp_alternative(state);
    while (state.eat(0x7C /* | */)) {
      this.regexp_alternative(state);
    }

    // Make the same message as V8.
    if (this.regexp_eatQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    if (state.eat(0x7B /* { */)) {
      state.raise("Lone quantifier brackets");
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
  pp$1.regexp_alternative = function (state) {
    while (state.pos < state.source.length && this.regexp_eatTerm(state)) { }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
  pp$1.regexp_eatTerm = function (state) {
    if (this.regexp_eatAssertion(state)) {
      // Handle `QuantifiableAssertion Quantifier` alternative.
      // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
      // is a QuantifiableAssertion.
      if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
        // Make the same message as V8.
        if (state.switchU) {
          state.raise("Invalid quantifier");
        }
      }
      return true
    }

    if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
      this.regexp_eatQuantifier(state);
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
  pp$1.regexp_eatAssertion = function (state) {
    var start = state.pos;
    state.lastAssertionIsQuantifiable = false;

    // ^, $
    if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
      return true
    }

    // \b \B
    if (state.eat(0x5C /* \ */)) {
      if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
        return true
      }
      state.pos = start;
    }

    // Lookahead / Lookbehind
    if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
      var lookbehind = false;
      if (this.options.ecmaVersion >= 9) {
        lookbehind = state.eat(0x3C /* < */);
      }
      if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
        this.regexp_disjunction(state);
        if (!state.eat(0x29 /* ) */)) {
          state.raise("Unterminated group");
        }
        state.lastAssertionIsQuantifiable = !lookbehind;
        return true
      }
    }

    state.pos = start;
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
  pp$1.regexp_eatQuantifier = function (state, noError) {
    if (noError === void 0) noError = false;

    if (this.regexp_eatQuantifierPrefix(state, noError)) {
      state.eat(0x3F /* ? */);
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
  pp$1.regexp_eatQuantifierPrefix = function (state, noError) {
    return (
      state.eat(0x2A /* * */) ||
      state.eat(0x2B /* + */) ||
      state.eat(0x3F /* ? */) ||
      this.regexp_eatBracedQuantifier(state, noError)
    )
  };
  pp$1.regexp_eatBracedQuantifier = function (state, noError) {
    var start = state.pos;
    if (state.eat(0x7B /* { */)) {
      var min = 0, max = -1;
      if (this.regexp_eatDecimalDigits(state)) {
        min = state.lastIntValue;
        if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
          max = state.lastIntValue;
        }
        if (state.eat(0x7D /* } */)) {
          // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
          if (max !== -1 && max < min && !noError) {
            state.raise("numbers out of order in {} quantifier");
          }
          return true
        }
      }
      if (state.switchU && !noError) {
        state.raise("Incomplete quantifier");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
  pp$1.regexp_eatAtom = function (state) {
    return (
      this.regexp_eatPatternCharacters(state) ||
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state)
    )
  };
  pp$1.regexp_eatReverseSolidusAtomEscape = function (state) {
    var start = state.pos;
    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatAtomEscape(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatUncapturingGroup = function (state) {
    var start = state.pos;
    if (state.eat(0x28 /* ( */)) {
      if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
        this.regexp_disjunction(state);
        if (state.eat(0x29 /* ) */)) {
          return true
        }
        state.raise("Unterminated group");
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatCapturingGroup = function (state) {
    if (state.eat(0x28 /* ( */)) {
      if (this.options.ecmaVersion >= 9) {
        this.regexp_groupSpecifier(state);
      } else if (state.current() === 0x3F /* ? */) {
        state.raise("Invalid group");
      }
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        state.numCapturingParens += 1;
        return true
      }
      state.raise("Unterminated group");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
  pp$1.regexp_eatExtendedAtom = function (state) {
    return (
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state) ||
      this.regexp_eatInvalidBracedQuantifier(state) ||
      this.regexp_eatExtendedPatternCharacter(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
  pp$1.regexp_eatInvalidBracedQuantifier = function (state) {
    if (this.regexp_eatBracedQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
  pp$1.regexp_eatSyntaxCharacter = function (state) {
    var ch = state.current();
    if (isSyntaxCharacter(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }
    return false
  };
  function isSyntaxCharacter(ch) {
    return (
      ch === 0x24 /* $ */ ||
      ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
      ch === 0x2E /* . */ ||
      ch === 0x3F /* ? */ ||
      ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
      ch >= 0x7B /* { */ && ch <= 0x7D /* } */
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
  // But eat eager.
  pp$1.regexp_eatPatternCharacters = function (state) {
    var start = state.pos;
    var ch = 0;
    while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
      state.advance();
    }
    return state.pos !== start
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
  pp$1.regexp_eatExtendedPatternCharacter = function (state) {
    var ch = state.current();
    if (
      ch !== -1 &&
      ch !== 0x24 /* $ */ &&
      !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
      ch !== 0x2E /* . */ &&
      ch !== 0x3F /* ? */ &&
      ch !== 0x5B /* [ */ &&
      ch !== 0x5E /* ^ */ &&
      ch !== 0x7C /* | */
    ) {
      state.advance();
      return true
    }
    return false
  };

  // GroupSpecifier ::
  //   [empty]
  //   `?` GroupName
  pp$1.regexp_groupSpecifier = function (state) {
    if (state.eat(0x3F /* ? */)) {
      if (this.regexp_eatGroupName(state)) {
        if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
          state.raise("Duplicate capture group name");
        }
        state.groupNames.push(state.lastStringValue);
        return
      }
      state.raise("Invalid group");
    }
  };

  // GroupName ::
  //   `<` RegExpIdentifierName `>`
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$1.regexp_eatGroupName = function (state) {
    state.lastStringValue = "";
    if (state.eat(0x3C /* < */)) {
      if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
        return true
      }
      state.raise("Invalid capture group name");
    }
    return false
  };

  // RegExpIdentifierName ::
  //   RegExpIdentifierStart
  //   RegExpIdentifierName RegExpIdentifierPart
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$1.regexp_eatRegExpIdentifierName = function (state) {
    state.lastStringValue = "";
    if (this.regexp_eatRegExpIdentifierStart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(state)) {
        state.lastStringValue += codePointToString(state.lastIntValue);
      }
      return true
    }
    return false
  };

  // RegExpIdentifierStart ::
  //   UnicodeIDStart
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[+U]
  pp$1.regexp_eatRegExpIdentifierStart = function (state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierStart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierStart(ch) {
    return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
  }

  // RegExpIdentifierPart ::
  //   UnicodeIDContinue
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[+U]
  //   <ZWNJ>
  //   <ZWJ>
  pp$1.regexp_eatRegExpIdentifierPart = function (state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierPart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierPart(ch) {
    return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
  pp$1.regexp_eatAtomEscape = function (state) {
    if (
      this.regexp_eatBackReference(state) ||
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state) ||
      (state.switchN && this.regexp_eatKGroupName(state))
    ) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      if (state.current() === 0x63 /* c */) {
        state.raise("Invalid unicode escape");
      }
      state.raise("Invalid escape");
    }
    return false
  };
  pp$1.regexp_eatBackReference = function (state) {
    var start = state.pos;
    if (this.regexp_eatDecimalEscape(state)) {
      var n = state.lastIntValue;
      if (state.switchU) {
        // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
        if (n > state.maxBackReference) {
          state.maxBackReference = n;
        }
        return true
      }
      if (n <= state.numCapturingParens) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatKGroupName = function (state) {
    if (state.eat(0x6B /* k */)) {
      if (this.regexp_eatGroupName(state)) {
        state.backReferenceNames.push(state.lastStringValue);
        return true
      }
      state.raise("Invalid named reference");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
  pp$1.regexp_eatCharacterEscape = function (state) {
    return (
      this.regexp_eatControlEscape(state) ||
      this.regexp_eatCControlLetter(state) ||
      this.regexp_eatZero(state) ||
      this.regexp_eatHexEscapeSequence(state) ||
      this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
      (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
      this.regexp_eatIdentityEscape(state)
    )
  };
  pp$1.regexp_eatCControlLetter = function (state) {
    var start = state.pos;
    if (state.eat(0x63 /* c */)) {
      if (this.regexp_eatControlLetter(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$1.regexp_eatZero = function (state) {
    if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
      state.lastIntValue = 0;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
  pp$1.regexp_eatControlEscape = function (state) {
    var ch = state.current();
    if (ch === 0x74 /* t */) {
      state.lastIntValue = 0x09; /* \t */
      state.advance();
      return true
    }
    if (ch === 0x6E /* n */) {
      state.lastIntValue = 0x0A; /* \n */
      state.advance();
      return true
    }
    if (ch === 0x76 /* v */) {
      state.lastIntValue = 0x0B; /* \v */
      state.advance();
      return true
    }
    if (ch === 0x66 /* f */) {
      state.lastIntValue = 0x0C; /* \f */
      state.advance();
      return true
    }
    if (ch === 0x72 /* r */) {
      state.lastIntValue = 0x0D; /* \r */
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
  pp$1.regexp_eatControlLetter = function (state) {
    var ch = state.current();
    if (isControlLetter(ch)) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };
  function isControlLetter(ch) {
    return (
      (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
      (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
  pp$1.regexp_eatRegExpUnicodeEscapeSequence = function (state, forceU) {
    if (forceU === void 0) forceU = false;

    var start = state.pos;
    var switchU = forceU || state.switchU;

    if (state.eat(0x75 /* u */)) {
      if (this.regexp_eatFixedHexDigits(state, 4)) {
        var lead = state.lastIntValue;
        if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
          var leadSurrogateEnd = state.pos;
          if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
            var trail = state.lastIntValue;
            if (trail >= 0xDC00 && trail <= 0xDFFF) {
              state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
              return true
            }
          }
          state.pos = leadSurrogateEnd;
          state.lastIntValue = lead;
        }
        return true
      }
      if (
        switchU &&
        state.eat(0x7B /* { */) &&
        this.regexp_eatHexDigits(state) &&
        state.eat(0x7D /* } */) &&
        isValidUnicode(state.lastIntValue)
      ) {
        return true
      }
      if (switchU) {
        state.raise("Invalid unicode escape");
      }
      state.pos = start;
    }

    return false
  };
  function isValidUnicode(ch) {
    return ch >= 0 && ch <= 0x10FFFF
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
  pp$1.regexp_eatIdentityEscape = function (state) {
    if (state.switchU) {
      if (this.regexp_eatSyntaxCharacter(state)) {
        return true
      }
      if (state.eat(0x2F /* / */)) {
        state.lastIntValue = 0x2F; /* / */
        return true
      }
      return false
    }

    var ch = state.current();
    if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
  pp$1.regexp_eatDecimalEscape = function (state) {
    state.lastIntValue = 0;
    var ch = state.current();
    if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
      do {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
        state.advance();
      } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
  pp$1.regexp_eatCharacterClassEscape = function (state) {
    var ch = state.current();

    if (isCharacterClassEscape(ch)) {
      state.lastIntValue = -1;
      state.advance();
      return true
    }

    if (
      state.switchU &&
      this.options.ecmaVersion >= 9 &&
      (ch === 0x50 /* P */ || ch === 0x70 /* p */)
    ) {
      state.lastIntValue = -1;
      state.advance();
      if (
        state.eat(0x7B /* { */) &&
        this.regexp_eatUnicodePropertyValueExpression(state) &&
        state.eat(0x7D /* } */)
      ) {
        return true
      }
      state.raise("Invalid property name");
    }

    return false
  };
  function isCharacterClassEscape(ch) {
    return (
      ch === 0x64 /* d */ ||
      ch === 0x44 /* D */ ||
      ch === 0x73 /* s */ ||
      ch === 0x53 /* S */ ||
      ch === 0x77 /* w */ ||
      ch === 0x57 /* W */
    )
  }

  // UnicodePropertyValueExpression ::
  //   UnicodePropertyName `=` UnicodePropertyValue
  //   LoneUnicodePropertyNameOrValue
  pp$1.regexp_eatUnicodePropertyValueExpression = function (state) {
    var start = state.pos;

    // UnicodePropertyName `=` UnicodePropertyValue
    if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
      var name = state.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(state)) {
        var value = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
        return true
      }
    }
    state.pos = start;

    // LoneUnicodePropertyNameOrValue
    if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
      var nameOrValue = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
      return true
    }
    return false
  };
  pp$1.regexp_validateUnicodePropertyNameAndValue = function (state, name, value) {
    if (!hasOwn(state.unicodeProperties.nonBinary, name)) { state.raise("Invalid property name"); }
    if (!state.unicodeProperties.nonBinary[name].test(value)) { state.raise("Invalid property value"); }
  };
  pp$1.regexp_validateUnicodePropertyNameOrValue = function (state, nameOrValue) {
    if (!state.unicodeProperties.binary.test(nameOrValue)) { state.raise("Invalid property name"); }
  };

  // UnicodePropertyName ::
  //   UnicodePropertyNameCharacters
  pp$1.regexp_eatUnicodePropertyName = function (state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyNameCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyNameCharacter(ch) {
    return isControlLetter(ch) || ch === 0x5F /* _ */
  }

  // UnicodePropertyValue ::
  //   UnicodePropertyValueCharacters
  pp$1.regexp_eatUnicodePropertyValue = function (state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyValueCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyValueCharacter(ch) {
    return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
  }

  // LoneUnicodePropertyNameOrValue ::
  //   UnicodePropertyValueCharacters
  pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function (state) {
    return this.regexp_eatUnicodePropertyValue(state)
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
  pp$1.regexp_eatCharacterClass = function (state) {
    if (state.eat(0x5B /* [ */)) {
      state.eat(0x5E /* ^ */);
      this.regexp_classRanges(state);
      if (state.eat(0x5D /* ] */)) {
        return true
      }
      // Unreachable since it threw "unterminated regular expression" error before.
      state.raise("Unterminated character class");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
  pp$1.regexp_classRanges = function (state) {
    while (this.regexp_eatClassAtom(state)) {
      var left = state.lastIntValue;
      if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
        var right = state.lastIntValue;
        if (state.switchU && (left === -1 || right === -1)) {
          state.raise("Invalid character class");
        }
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
  pp$1.regexp_eatClassAtom = function (state) {
    var start = state.pos;

    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatClassEscape(state)) {
        return true
      }
      if (state.switchU) {
        // Make the same message as V8.
        var ch$1 = state.current();
        if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
          state.raise("Invalid class escape");
        }
        state.raise("Invalid escape");
      }
      state.pos = start;
    }

    var ch = state.current();
    if (ch !== 0x5D /* ] */) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
  pp$1.regexp_eatClassEscape = function (state) {
    var start = state.pos;

    if (state.eat(0x62 /* b */)) {
      state.lastIntValue = 0x08; /* <BS> */
      return true
    }

    if (state.switchU && state.eat(0x2D /* - */)) {
      state.lastIntValue = 0x2D; /* - */
      return true
    }

    if (!state.switchU && state.eat(0x63 /* c */)) {
      if (this.regexp_eatClassControlLetter(state)) {
        return true
      }
      state.pos = start;
    }

    return (
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
  pp$1.regexp_eatClassControlLetter = function (state) {
    var ch = state.current();
    if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$1.regexp_eatHexEscapeSequence = function (state) {
    var start = state.pos;
    if (state.eat(0x78 /* x */)) {
      if (this.regexp_eatFixedHexDigits(state, 2)) {
        return true
      }
      if (state.switchU) {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
  pp$1.regexp_eatDecimalDigits = function (state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isDecimalDigit(ch = state.current())) {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    }
    return state.pos !== start
  };
  function isDecimalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
  pp$1.regexp_eatHexDigits = function (state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isHexDigit(ch = state.current())) {
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return state.pos !== start
  };
  function isHexDigit(ch) {
    return (
      (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
      (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
      (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
    )
  }
  function hexToInt(ch) {
    if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
      return 10 + (ch - 0x41 /* A */)
    }
    if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
      return 10 + (ch - 0x61 /* a */)
    }
    return ch - 0x30 /* 0 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
  // Allows only 0-377(octal) i.e. 0-255(decimal).
  pp$1.regexp_eatLegacyOctalEscapeSequence = function (state) {
    if (this.regexp_eatOctalDigit(state)) {
      var n1 = state.lastIntValue;
      if (this.regexp_eatOctalDigit(state)) {
        var n2 = state.lastIntValue;
        if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
          state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
        } else {
          state.lastIntValue = n1 * 8 + n2;
        }
      } else {
        state.lastIntValue = n1;
      }
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
  pp$1.regexp_eatOctalDigit = function (state) {
    var ch = state.current();
    if (isOctalDigit(ch)) {
      state.lastIntValue = ch - 0x30; /* 0 */
      state.advance();
      return true
    }
    state.lastIntValue = 0;
    return false
  };
  function isOctalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
  // And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$1.regexp_eatFixedHexDigits = function (state, length) {
    var start = state.pos;
    state.lastIntValue = 0;
    for (var i = 0; i < length; ++i) {
      var ch = state.current();
      if (!isHexDigit(ch)) {
        state.pos = start;
        return false
      }
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return true
  };

  // Object type used to represent tokens. Note that normally, tokens
  // simply exist as properties on the parser object. This is only
  // used for the onToken callback and the external tokenizer.

  var Token = function Token(p) {
    this.type = p.type;
    this.value = p.value;
    this.start = p.start;
    this.end = p.end;
    if (p.tokMacroOffset) { this.tokMacroOffset = p.tokMacroOffset; }
    if (p.options.locations) { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
    if (p.options.ranges) { this.range = [p.start, p.end]; }
  };

  // ## Tokenizer

  var pp = Parser.prototype;

  // Move to the next token

  pp.next = function (ignoreEscapeSequenceInKeyword, stealth, onlyTransformArguments) {
    if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
    if (this.options.onToken) { this.options.onToken(new Token(this)); }

    if (!stealth) {
      this.lastTokEnd = this.end;
      this.lastTokStart = this.start;
      this.lastTokEndLoc = this.endLoc;
      this.lastTokStartLoc = this.startLoc;
      this.lastEndOfFile = this.firstEndOfFile;
      this.lastTokMacroOffset = this.tokMacroOffset;
    }
    this.firstEndOfFile = null;
    this.nodeMessageSendObjectExpression = null;
    this.nextToken(stealth, onlyTransformArguments);
  };

  pp.getToken = function () {
    this.next();
    return new Token(this)
  };

  // If we're in an ES6 environment, make parsers iterable
  if (typeof Symbol !== "undefined") {
    pp[Symbol.iterator] = function () {
      var this$1$1 = this;

      return {
        next: function () {
          var token = this$1$1.getToken();
          return {
            done: token.type === types$1.eof,
            value: token
          }
        }
      }
    };
  }

  // Toggle strict mode. Re-reads the next number or string to please
  // pedantic tests (`"use strict"; 010;` should fail).

  // Read a single token, updating the parser object's token-related
  // properties.

  pp.nextToken = function (stealth, onlyTransformMacroArguments) {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

    this.start = this.pos;
    this.tokInput = this.input;
    if (!stealth) {
      this.lastEndInput = this.tokInput;
      this.tokFirstStart = this.start;
    }

    this.localLastEnd = this.firstEnd;

    this.tokMacroOffset = this.tokPosMacroOffset;
    this.preTokParameterScope = this.preprocessParameterScope;

    if (this.options.locations) { this.startLoc = this.curPosition(); }
    if (this.pos >= this.input.length) { return this.finishToken(types$1.eof) }

    if (curContext.override) { return curContext.override(this) }
    else { this.readToken(this.fullCharCodeAtPos(), stealth, onlyTransformMacroArguments); }
  };

  pp.readToken = function (code, stealth, onlyTransformMacroArguments) {
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */) { return this.readWord(null, onlyTransformMacroArguments) }
    return this.getTokenFromCode(code)
  };

  pp.fullCharCodeAtPos = function () {
    var code = this.input.charCodeAt(this.pos);
    if (code <= 0xd7ff || code >= 0xdc00) { return code }
    var next = this.input.charCodeAt(this.pos + 1);
    return next <= 0xdbff || next >= 0xe000 ? code : (code << 10) + next - 0x35fdc00
  };

  pp.skipBlockComment = function () {
    var startLoc = this.options.onComment && this.curPosition();
    var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
    this.pos = end + 2;
    if (this.options.locations) {
      for (var nextBreak = (void 0), pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;) {
        ++this.curLine;
        pos = this.lineStart = nextBreak;
      }
    }
    if (this.options.onComment) {
      this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
        startLoc, this.curPosition());
    }
  };

  pp.skipLineComment = function (startSkip) {
    var start = this.pos;
    var startLoc = this.options.onComment && this.curPosition();
    var ch = this.input.charCodeAt(this.pos += startSkip);
    while (this.pos < this.input.length && !isNewLine(ch)) {
      ch = this.input.charCodeAt(++this.pos);
    }
    if (this.options.onComment) {
      this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
        startLoc, this.curPosition());
    }
  };

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  pp.skipSpace = function (dontSkipEOL, dontSkipMacroBoundary) {
    var ch;
    loop: while (true) {
      if (this.pos >= this.input.length) {
        if (this.options.preprocess) {
          if (dontSkipMacroBoundary) { return true }
          if (!this.preprocessStack.length) { break }
          // If this is the first end of file after the token save to position to allow a semicolon to be inserted
          // the end of file, if needed.
          if (this.firstEndOfFile == null) { this.firstEndOfFile = this.pos; }
          // If we are at the end of the input inside a macro continue at last position
          var lastItem = this.preprocessStack.pop();
          this.pos = lastItem.end;
          this.input = lastItem.input;
          this.curLine = lastItem.currentLine;
          this.lineStart = lastItem.currentLineStart;
          this.preprocessOnlyTransformArgumentsForLastToken = lastItem.onlyTransformArgumentsForLastToken;
          this.preprocessParameterScope = lastItem.parameterScope;
          this.tokPosMacroOffset = lastItem.macroOffset;
          this.sourceFile = lastItem.sourceFile;
          this.firstEnd = lastItem.lastEnd;

          // Set the last item
          var lastIndex = this.preprocessStack.length;
          this.preprocessStackLastItem = lastIndex ? this.preprocessStack[lastIndex - 1] : null;
          return this.skipSpace(dontSkipEOL)
        } else {
          break
        }
      }
      ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32: case 160: // ' '
          ++this.pos;
          break
        case 13:
          if (dontSkipEOL) { break loop }
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10: case 8232: case 8233:
          if (dontSkipEOL) { break loop }
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break
        case 47: // '/'
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42: // '*'
              this.skipBlockComment();
              break
            case 47:
              this.skipLineComment(2);
              break
            default:
              break loop
          }
          break
        case 92: // '\'
          if (!this.options.preprocess) { break loop }
          // Check if we have an escaped newline. We are using a relaxed treatment of escaped newlines like gcc.
          // We allow spaces, horizontal and vertical tabs, and form feeds between the backslash and the subsequent newline
          var pos = this.pos + 1;
          ch = this.input.charCodeAt(pos);
          while (pos < this.input.length && (ch === 32 || ch === 9 || ch === 11 || ch === 12 || (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))))) { ch = this.input.charCodeAt(++pos); }
          lineBreak.lastIndex = 0;
          var match = lineBreak.exec(this.input.slice(pos, pos + 2));
          if (match && match.index === 0) {
            this.pos = pos + match[0].length;
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
          } else {
            break loop
          }
          break
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop
          }
      }
    }
    return ch
  };

  // Called at the end of every token. Sets `end`, `val`, and
  // maintains `context` and `exprAllowed`, and skips the space after
  // the token, so that the next one's `start` will point at the
  // right position.

  pp.finishToken = function (type, val) {
    this.end = this.pos;
    if (this.options.locations) { this.endLoc = this.curPosition(); }
    var prevType = this.type;
    this.type = type;
    this.value = val;
    this.updateContext(prevType);

    if (this.options.preprocess && this.preprocessPrescanFor(35, 35)) { // '##'
      this.skipSpace();
      var val1 = val != null ? val : type.label || type.type;
      this.pos += 2;
      if (val1 != null) {
        // Save current line and current line start. This is needed when option.locations is true
        var positionOffset = this.options.locations && new PositionOffset(this.curLine, this.lineStart);
        // Save positions on first token to get start and end correct on node if cancatenated token is invalid
        var saveTokInput = this.tokInput, saveTokEnd = this.end, saveTokStart = this.start, start = this.start + this.tokMacroOffset, variadicName = this.preprocessStackLastItem && this.preprocessStackLastItem.macro && this.preprocessStackLastItem.macro.variadicName;
        this.skipSpace();
        var isVariadic;
        if (variadicName && variadicName === this.input.slice(this.pos, this.pos + variadicName.length)) { isVariadic = true; }
        this.preConcatenating = true;
        this.nextToken(false, 2); // Don't transform macros
        this.preConcatenating = false;
        var val2 = this.value != null ? this.value : this.type.keyword || this.type.label;
        if (val2 != null) {
          // Skip token if it is a ',' concatenated with an empty variadic parameter
          if (isVariadic && val1 === "," && val2 === "") { return this.nextToken() }
          var concat = "" + val1 + val2, val2TokStart = this.start + this.tokPosMacroOffset;
          this.skipSpace();
          // If the macro defines anything add it to the preprocess input stack
          var concatMacro = new Macro(null, concat, null, start, false, null, false, positionOffset);
          var r = this.readTokenFromMacro(concatMacro, this.tokPosMacroOffset, this.preprocessStackLastItem ? this.preprocessStackLastItem.parameterDict : null, null, this.pos, this.next, null);
          // Consumed the whole macro in one bite? If not the tokenizer can't create a single token from the two concatenated tokens
          if (this.preprocessStackLastItem && this.preprocessStackLastItem.macro === concatMacro && this.pos !== this.input.length) {
            this.type = type;
            this.start = saveTokStart;
            this.end = saveTokEnd;
            this.tokInput = saveTokInput;
            this.tokPosMacroOffset = val2TokStart - val1.length; // reset the macro offset to the second token to get start and end correct on node
            if (!isVariadic) /* raise(tokStart, */ { console.warn("Warning: pasting formed '" + concat + "', an invalid preprocessing token"); }
          } else { return r }
        }
      }
    }
  };

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //
  pp.readToken_dot = function (finisher) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next >= 48 && next <= 57) { return this.readNumber(true, pp.finishToken) }
    var next2 = this.input.charCodeAt(this.pos + 2);
    if ((this.options.ecmaVersion >= 6 || this.preprocessIsParsingPreprocess) && next === 46 && next2 === 46) { // 46 = dot '.'
      this.pos += 3;
      return finisher.call(this, types$1.ellipsis)
    } else {
      ++this.pos;
      return finisher.call(this, types$1.dot)
    }
  };

  pp.readToken_slash = function (finisher) { // '/'
    var next = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
    if (next === 61) { return this.finishOp(types$1.assign, 2, finisher) }
    return this.finishOp(types$1.slash, 1, finisher)
  };

  pp.readToken_mult_modulo_exp = function (code, finisher) { // '%*'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    var tokentype = code === 42 ? types$1.star : types$1.modulo;

    // exponentiation operator ** and **=
    if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
      ++size;
      tokentype = types$1.starstar;
      next = this.input.charCodeAt(this.pos + 2);
    }

    if (next === 61) { return this.finishOp(types$1.assign, size + 1, finisher) }
    return this.finishOp(tokentype, size, finisher)
  };

  pp.readToken_pipe_amp = function (code, finisher) { // '|&'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (this.options.ecmaVersion >= 12) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 === 61) { return this.finishOp(types$1.assign, 3, finisher) }
      }
      return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2, finisher)
    }
    if (next === 61) { return this.finishOp(types$1.assign, 2, finisher) }
    return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1, finisher)
  };

  pp.readToken_caret = function (finisher) { // '^'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types$1.assign, 2, finisher) }
    return this.finishOp(types$1.bitwiseXOR, 1, finisher)
  };

  pp.readToken_plus_min = function (code, finisher) { // '+-'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
        // A `-->` line comment
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken()
      }
      return this.finishOp(types$1.incDec, 2, finisher)
    }
    if (next === 61) { return this.finishOp(types$1.assign, 2, finisher) }
    return this.finishOp(types$1.plusMin, 1, finisher)
  };

  pp.readToken_lt_gt = function (code, finisher) { // '<>'
    if (code === 60 && (this.type === objjAtTypes._import || this.preType === preTypes._preInclude) && this.options.objj) { // '<'
      for (var start = this.pos + 1; ;) {
        var ch = this.input.charCodeAt(++this.pos);
        if (ch === 62) // '>'
        { return finisher.call(this, objjTypes._filename, this.input.slice(start, this.pos++)) }
        if (this.pos >= this.input.length || ch === 13 || ch === 10 || ch === 8232 || ch === 8233) { this.raise(this.start, "Unterminated import statement"); }
      }
    }
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types$1.assign, size + 1, finisher) }
      return this.finishOp(types$1.bitShift, size, finisher)
    }
    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken()
    }
    if (next === 61) { size = 2; }
    return this.finishOp(types$1.relational, size, finisher)
  };

  pp.readToken_eq_excl = function (code, finisher) { // '=!'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2, finisher) }
    if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
      this.pos += 2;
      return finisher.call(this, types$1.arrow)
    }
    return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1, finisher)
  };

  pp.readToken_question = function () { // '?'
    var ecmaVersion = this.options.ecmaVersion;
    if (ecmaVersion >= 11) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 46) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 < 48 || next2 > 57) { return this.finishOp(types$1.questionDot, 2) }
      }
      if (next === 63) {
        if (ecmaVersion >= 12) {
          var next2$1 = this.input.charCodeAt(this.pos + 2);
          if (next2$1 === 61) { return this.finishOp(types$1.assign, 3) }
        }
        return this.finishOp(types$1.coalesce, 2)
      }
    }
    return this.finishOp(types$1.question, 1)
  };

  pp.readToken_numberSign = function (finisher) { // '#'
    if (this.preprocessIsParsingPreprocess) {
      ++this.pos;
      return finisher.call(this, preTypes._preprocess)
    }

    // Check if it is the first token on the line
    lineBreak.lastIndex = 0;
    var match = lineBreak.exec(this.input.slice(this.localLastEnd, this.pos));
    if (this.lastEnd !== 0 && this.lastEnd !== this.pos && !match && ((this.preprocessStackLastItem && !this.preprocessStackLastItem.isIncludeFile) || this.pos !== 0)) {
      if (this.preprocessStackLastItem) {
        // Stringify next token
        return this.preprocessStringify()
      }
    }

    var ecmaVersion = this.options.ecmaVersion;
    var code = 35; // '#'
    var numberSignPos = this.pos++;
    var wordStart = this.pos;
    var wordStartCode = this.fullCharCodeAtPos();
    var errorPos = numberSignPos;
    var word = this.readWord1();
    preprocess: if (this.options.preprocess) {
      if (word.length === 0) {
        this.skipSpace();
        word = this.readWord1();
      }
      // Check if it is the first token on the line
      lineBreak.lastIndex = 0;
      var match$1 = lineBreak.exec(this.input.slice(this.localLastEnd, numberSignPos));
      if (this.lastTokEnd === 0 || this.lastTokEnd === numberSignPos || match$1 || (!(this.preprocessStackLastItem && !this.preprocessStackLastItem.isIncludeFile) && numberSignPos === 0)) {
        switch (word) {
          case "pragma":
            this.preStart = this.start;
            this.preprocesSkipRestOfLine();
            break

          case "define":
            this.preStart = this.start;
            if (this.preNotSkipping) {
              this.preprocessParseDefine();
            } else {
              return finisher.call(this, preTypes._preDefine)
            }
            break

          case "undef":
            this.preprocessReadToken();
            this.options.preprocessUndefineMacro(this.preprocessGetIdent());
            break

          case "if":
            this.preStart = this.start;
            if (this.preNotSkipping) {
              // We dont't allow regex when parsing preprocess expression
              // FIXME: Here we should probably use the context functionality.
              var saveTokRegexpAllowed = this.exprAllowed;
              this.exprAllowed = false;
              // this.tokRegexpAllowed = false;
              this.preIfLevel.push(preTypes._preIf);
              this.preprocessReadToken(false, false, true);
              var expr = this.preprocessParseExpression(true); // Process macros
              var test = this.preprocessEvalExpression(expr);
              if (!test) {
                this.preNotSkipping = false;
                this.preprocessSkipToElseOrEndif();
              }
              this.exprAllowed = saveTokRegexpAllowed;
            } else {
              return finisher.call(this, preTypes._preIf)
            }
            break

          case "ifdef":
            this.preStart = this.start;
            if (this.preNotSkipping) {
              this.preIfLevel.push(preTypes._preIf);
              this.preprocessReadToken();
              var identifer = this.preprocessGetIdent();
              var isMacro = this.options.preprocessIsMacro(identifer);

              if (!isMacro) {
                this.preNotSkipping = false;
                this.preprocessSkipToElseOrEndif();
              }
            } else {
              return finisher.call(this, preTypes._preIfdef)
            }
            break

          case "ifndef":
            this.preStart = this.start;
            if (this.preNotSkipping) {
              this.preIfLevel.push(preTypes._preIf);
              this.preprocessReadToken();
              var identifer$1 = this.preprocessGetIdent();
              var isMacro$1 = this.options.preprocessIsMacro(identifer$1);

              if (isMacro$1) {
                this.preNotSkipping = false;
                this.preprocessSkipToElseOrEndif();
              }
            } else {
              return finisher.call(this, preTypes._preIfdef)
            }
            break

          case "elif":
            this.preStart = this.start;
            if (this.preIfLevel.length) {
              if (this.preNotSkipping) {
                if (this.preIfLevel[this.preIfLevel.length - 1] === preTypes._preIf) {
                  this.preNotSkipping = false;
                  finisher.call(this, preTypes._preElseIf);
                  this.preprocessReadToken();
                  this.preprocessSkipToElseOrEndif(true); // no else
                } else { this.raise(this.preStart, "#elsif after #else"); }
              } else {
                // We dont't allow regex when parsing preprocess expression
                var saveTokRegexpAllowed$1 = this.exprAllowed;
                this.exprAllowed = false;
                this.preNotSkipping = true;
                this.preprocessReadToken(false, false, true);
                var expr$1 = this.preprocessParseExpression(true);
                this.preNotSkipping = false;
                this.tokRegexpAllowed = saveTokRegexpAllowed$1;
                var test$1 = this.preprocessEvalExpression(expr$1);
                return finisher.call(this, test$1 ? preTypes._preElseIfTrue : preTypes._preElseIfFalse)
              }
            } else { this.raise(this.preStart, "#elif without #if"); }
            break

          case "else":
            this.preStart = this.start;
            if (this.preIfLevel.length) {
              if (this.preNotSkipping) {
                if (this.preIfLevel[this.preIfLevel.length - 1] === preTypes._preIf) {
                  this.preIfLevel[this.preIfLevel.length - 1] = preTypes._preElse;
                  this.preNotSkipping = false;
                  finisher.call(this, preTypes._preElse);
                  this.preprocessReadToken();
                  this.preprocessSkipToElseOrEndif(true); // no else
                } else { this.raise(this.preStart, "#else after #else"); }
              } else {
                this.preIfLevel[this.preIfLevel.length - 1] = preTypes._preElse;
                return finisher.call(this, preTypes._preElse)
              }
            } else { this.raise(this.preStart, "#else without #if"); }
            break

          case "endif":
            this.preStart = this.start;
            if (this.preIfLevel.length) {
              if (this.preNotSkipping) {
                this.preIfLevel.pop();
                break
              }
            } else {
              this.raise(this.preStart, "#endif without #if");
            }
            return finisher.call(this, preTypes._preEndif)

          case "include":
            if (!this.preNotSkipping) {
              return finisher.call(this, preTypes._preInclude)
            }
            this.preprocessReadToken();
            var localfilepath;
            if (this.preType === types$1.string) { localfilepath = true; }
            else if (this.preType === preTypes._filename) { localfilepath = false; }
            else { this.raise(this.preStart, "Expected \"FILENAME\" or <FILENAME>: " + (this.preType.keyword || this.preType.type)); }

            var theFileName = this.preVal;
            var includeDict = this.options.preprocessGetIncludeFile(this.preVal, localfilepath) || this.raise(this.preStart, "'" + theFileName + "' file not found");
            var includeString = includeDict.include;
            var includeMacro = new Macro(null, includeString, null, 0, false, null, false, null, includeDict.sourceFile);
            this.preprocessFinishToken(preTypes._preprocess, null, null, true); // skipEOL
            this.pushMacroToStack(includeMacro, includeMacro.macro, this.tokPosMacroOffset, null, null, this.pos, null, true); // isIncludeFile
            this.skipSpace();
            this.nextToken(true);
            // this.readToken(null, null, true); // Stealth
            return

          case "error":
            var start = this.preStart;
            this.preprocessReadToken(false, false, true);
            this.raise(start, "Error: " + String(this.preprocessEvalExpression(this.preprocessParseExpression())));
            break

          case "warning":
            this.preprocessReadToken(false, false, true);
            console.warn("Warning: " + String(this.preprocessEvalExpression(this.preprocessParseExpression())));
            break

          default:
            break preprocess
        }
        this.preprocessFinishToken(this.preType, null, null, true);
        return this.next(false, true)
      } else if (isKeywordPreprocessor.test(word)) {
        this.raise(errorPos, "Preprocessor directives may only be used at the beginning of a line");
      }
    }
    if (ecmaVersion >= 13) {
      errorPos = wordStart;
      code = wordStartCode;
      // code = this.fullCharCodeAtPos()
      if (isIdentifierStart(wordStartCode, true) || wordStartCode === 92 /* '\' */) {
        return this.finishToken(types$1.privateId, word)
      }
    }
    this.raise(errorPos, "Unexpected character '" + codePointToString(code) + "'");
  };

  pp.readToken_at = function (code, finisher) { // '@'
    var next = this.input.charCodeAt(++this.pos);
    if (next === 34 || next === 39) { // Read string if "'" or '"'
      var tmp = this.readString(next, finisher);
      return tmp
    }
    if (next === 123) // Read dictionary literal if "{"
    { return finisher.call(this, objjAtTypes._dictionaryLiteral) }
    if (next === 91) // Read array literal if "["
    { return finisher.call(this, objjAtTypes._arrayLiteral) }

    var word = this.readWord1(),
      token = objjAtKeywords[word];
    if (!token) { this.raise(this.tokStart, "Unrecognized Objective-J keyword '@" + word + "'"); }
    return finisher.call(this, token)
  };

  pp.getTokenFromCode = function (code, finisher, allowEndOfLineToken) {
    if (finisher === void 0) finisher = this.finishToken;

    switch (code) {
      // The interpretation of a dot depends on whether it is followed
      // by a digit or another two dots.
      case 46: // '.'
        return this.readToken_dot(finisher)

      // Punctuation tokens.
      case 40: ++this.pos; return finisher.call(this, types$1.parenL)
      case 41: ++this.pos; return finisher.call(this, types$1.parenR)
      case 59: ++this.pos; return finisher.call(this, types$1.semi)
      case 44: ++this.pos; return finisher.call(this, types$1.comma)
      case 91: ++this.pos; return finisher.call(this, types$1.bracketL)
      case 93: ++this.pos; return finisher.call(this, types$1.bracketR)
      case 123: ++this.pos; return finisher.call(this, types$1.braceL)
      case 125: ++this.pos; return finisher.call(this, types$1.braceR)
      case 58: ++this.pos; return finisher.call(this, types$1.colon)

      case 96: // '`'
        if (this.options.ecmaVersion < 6) { break }
        ++this.pos;
        return finisher.call(this, types$1.backQuote)

      case 48: // '0'
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 120 || next === 88) { return this.readRadixNumber(16, finisher) } // '0x', '0X' - hex number
        if (this.options.ecmaVersion >= 6) {
          if (next === 111 || next === 79) { return this.readRadixNumber(8, finisher) } // '0o', '0O' - octal number
          if (next === 98 || next === 66) { return this.readRadixNumber(2, finisher) } // '0b', '0B' - binary number
        }

      // Anything else beginning with a digit is an integer, octal
      // number, or float.
      case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
        return this.readNumber(false, finisher)

      // Quotes produce strings.
      case 34: case 39: // '"', "'"
        return this.readString(code, finisher)

      // Operators are parsed inline in tiny state machines. '=' (61) is
      // often referred to. `finishOp` simply skips the amount of
      // characters it is given as second argument, and returns a token
      // of the type given by its first argument.
      case 47: // '/'
        return this.readToken_slash(finisher)

      case 37: case 42: // '%*'
        return this.readToken_mult_modulo_exp(code, finisher)

      case 124: case 38: // '|&'
        return this.readToken_pipe_amp(code, finisher)

      case 94: // '^'
        return this.readToken_caret(finisher)

      case 43: case 45: // '+-'
        return this.readToken_plus_min(code, finisher)

      case 60: case 62: // '<>'
        return this.readToken_lt_gt(code, finisher)

      case 61: case 33: // '=!'
        return this.readToken_eq_excl(code, finisher)

      case 63: // '?'
        return this.readToken_question()

      case 126: // '~'
        return this.finishOp(types$1.prefix, 1, finisher)

      case 35: // '#'
        return this.readToken_numberSign(finisher)

      case 92: // '\'
        if (this.options.preprocess) {
          return this.finishOp(preTypes._preBackslash, 1, finisher)
        }

      case 64: // '@'
        if (this.options.objj) { return this.readToken_at(code, finisher) }
        return false
    }
    if (allowEndOfLineToken) {
      if (code === 13 || code === 10 || code === 8232 || code === 8233) {
        var size = (code === 13 && this.input.charCodeAt(this.pos + 1) === 10) ? 2 : 1;
        if (this.options.locations) {
          this.lineStart = this.pos + size; ++this.curLine;
        }
        return this.finishOp(types$1.eol, size, finisher)
      }
    }
    this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
  };

  // Stringify next token and return with it as a literal string.

  pp.preprocessStringify = function () {
    var saveStackLength = this.preprocessStack.length, saveLastItem = this.preprocessStackLastItem;
    this.pos++; // Skip '#'
    this.preConcatenating = true; // To get empty sting if macro is empty
    this.next(false, false, 2); // Don't prescan arguments
    this.preConcatenating = false;
    var start = this.start + this.tokMacroOffset;
    var positionOffset = this.options.locations && new PositionOffset(this.curLine, this.lineStart);
    var string;
    if (this.type === types$1.string) {
      var quote = this.tokInput.slice(this.start, this.start + 1);
      var escapedQuote = quote === "\"" ? "\\\"" : "'";
      string = escapedQuote;
      string += preprocessStringifyEscape(this.value);
      string += escapedQuote;
    } else {
      string = this.value != null ? this.value : this.type.keyword || this.type.label;
    }
    while (this.preprocessStack.length > saveStackLength && saveLastItem === this.preprocessStack[saveStackLength - 1] && this.pos !== this.input.length) {
      this.preConcatenating = true; // To get empty sting if macro is empty
      this.next(false, false, 2); // Don't prescan arguments
      this.preConcatenating = false;
      // Add a space if there is one or more withespaces
      if (this.lastEnd !== this.start) { string += " "; }
      if (this.type === types$1.string) {
        var quote$1 = this.tokInput.slice(this.start, this.start + 1);
        var escapedQuote$1 = quote$1 === "\"" ? "\\\"" : "'";
        string += escapedQuote$1;
        string += preprocessStringifyEscape(this.value);
        string += escapedQuote$1;
      } else {
        string += this.value != null ? this.value : this.type.keyword || this.type.label;
      }
    }
    var stringifyMacro = new Macro(null, "\"" + string + "\"", null, start, false, null, false, positionOffset);
    return this.readTokenFromMacro(stringifyMacro, this.tokPosMacroOffset, null, null, this.pos, this.next)
  };

  // Escape characters in stringify string.

  function preprocessStringifyEscape(aString) {
    var escaped, pos, size, ch;
    for (escaped = "", pos = 0, size = aString.length, ch = aString.charCodeAt(pos); pos < size; ch = aString.charCodeAt(++pos)) {
      switch (ch) {
        case 34: escaped += "\\\\\\\""; break // "
        case 10: escaped += "\\\\n"; break // LF (\n)
        case 13: escaped += "\\\\r"; break // CR (\r)
        case 9: escaped += "\\\\t"; break // TAB (\t)
        case 8: escaped += "\\\\b"; break // BS (\b)
        case 11: escaped += "\\\\v"; break // VT (\v)
        case 0x00A0: escaped += "\\\\u00A0"; break // CR (\r)
        case 0x2028: escaped += "\\\\u2028"; break // LINE SEPARATOR
        case 0x2029: escaped += "\\\\u2029"; break // PARAGRAPH SEPARATOR
        case 92: escaped += "\\\\"; break // BACKSLASH
        default: escaped += aString.charAt(pos); break
      }
    }
    return escaped
  }

  pp.finishOp = function (type, size, finisher) {
    if (finisher === void 0) finisher = this.finishToken;

    var str = this.input.slice(this.pos, this.pos + size);
    this.pos += size;
    return finisher.call(this, type, str)
  };

  pp.readRegexp = function () {
    var escaped, inClass, start = this.pos;
    for (; ;) {
      if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
      var ch = this.input.charAt(this.pos);
      if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
      if (!escaped) {
        if (ch === "[") { inClass = true; }
        else if (ch === "]" && inClass) { inClass = false; }
        else if (ch === "/" && !inClass) { break }
        escaped = ch === "\\";
      } else { escaped = false; }
      ++this.pos;
    }
    var pattern = this.input.slice(start, this.pos);
    ++this.pos;
    var flagsStart = this.pos;
    var flags = this.readWord1();
    if (this.containsEsc) { this.unexpected(flagsStart); }

    // Validate pattern
    var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
    state.reset(start, pattern, flags);
    this.validateRegExpFlags(state);
    this.validateRegExpPattern(state);

    // Create Literal#value property value.
    var value = null;
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
      // ESTree requires null if it failed to instantiate RegExp object.
      // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
    }

    return this.finishToken(types$1.regexp, { pattern: pattern, flags: flags, value: value })
  };

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  pp.readInt = function (radix, len, maybeLegacyOctalNumericLiteral) {
    // `len` is used for character escape sequences. In that case, disallow separators.
    var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;

    // `maybeLegacyOctalNumericLiteral` is true if it doesn't have prefix (0x,0o,0b)
    // and isn't fraction part nor exponent part. In that case, if the first digit
    // is zero then disallow separators.
    var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;

    var start = this.pos, total = 0, lastCode = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
      var code = this.input.charCodeAt(this.pos), val = (void 0);

      if (allowSeparators && code === 95) {
        if (isLegacyOctalNumericLiteral) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"); }
        if (lastCode === 95) { this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"); }
        if (i === 0) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"); }
        lastCode = code;
        continue
      }

      if (code >= 97) { val = code - 97 + 10; } // a
      else if (code >= 65) { val = code - 65 + 10; } // A
      else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
      else { val = Infinity; }
      if (val >= radix) { break }
      lastCode = code;
      total = total * radix + val;
    }

    if (allowSeparators && lastCode === 95) { this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"); }
    if (this.pos === start || len != null && this.pos - start !== len) { return null }

    return total
  };

  function stringToNumber(str, isLegacyOctalNumericLiteral) {
    if (isLegacyOctalNumericLiteral) {
      return parseInt(str, 8)
    }

    // `parseFloat(value)` stops parsing at the first numeric separator then returns a wrong value.
    return parseFloat(str.replace(/_/g, ""))
  }

  function stringToBigInt(str) {
    if (typeof BigInt !== "function") {
      return null
    }

    // `BigInt(value)` throws syntax error if the string contains numeric separators.
    return BigInt(str.replace(/_/g, ""))
  }

  pp.readRadixNumber = function (radix, finisher) {
    var start = this.pos;
    this.pos += 2; // 0x
    var val = this.readInt(radix);
    if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
    if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
      val = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
    } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return finisher.call(this, types$1.num, val)
  };

  // Read an integer, octal integer, or floating-point number.

  pp.readNumber = function (startsWithDot, finisher) {
    var start = this.pos;
    if (!startsWithDot && this.readInt(10, undefined, true) === null) { this.raise(start, "Invalid number"); }
    var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (octal && this.strict) { this.raise(start, "Invalid number"); }
    var next = this.input.charCodeAt(this.pos);
    if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
      var val$1 = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
      if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
      return finisher.call(this, types$1.num, val$1)
    }
    if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
    if (next === 46 && !octal) { // '.'
      ++this.pos;
      this.readInt(10);
      next = this.input.charCodeAt(this.pos);
    }
    if ((next === 69 || next === 101) && !octal) { // 'eE'
      next = this.input.charCodeAt(++this.pos);
      if (next === 43 || next === 45) { ++this.pos; } // '+-'
      if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

    var val = stringToNumber(this.input.slice(start, this.pos), octal);
    return finisher.call(this, types$1.num, val)
  };

  // Read a string value, interpreting backslash-escapes.

  pp.readCodePoint = function () {
    var ch = this.input.charCodeAt(this.pos), code;

    if (ch === 123) { // '{'
      if (this.options.ecmaVersion < 6) { this.unexpected(); }
      var codePos = ++this.pos;
      code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
      ++this.pos;
      if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
    } else {
      code = this.readHexChar(4);
    }
    return code
  };

  pp.readString = function (quote, finisher) {
    var out = "", chunkStart = ++this.pos;
    for (; ;) {
      if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === quote) { break }
      if (ch === 92) { // '\'
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.pos;
      } else if (ch === 0x2028 || ch === 0x2029) {
        if (this.options.ecmaVersion < 10) { this.raise(this.start, "Unterminated string constant"); }
        ++this.pos;
        if (this.options.locations) {
          this.curLine++;
          this.lineStart = this.pos;
        }
      } else {
        if (isNewLine(ch)) { this.raise(this.start, "Unterminated string constant"); }
        ++this.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return finisher.call(this, types$1.string, out)
  };

  // Reads template string tokens.

  var INVALID_TEMPLATE_ESCAPE_ERROR = {};

  pp.tryReadTemplateToken = function () {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (err) {
      if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
        this.readInvalidTemplateToken();
      } else {
        throw err
      }
    }

    this.inTemplateElement = false;
  };

  pp.invalidStringToken = function (position, message) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
      throw INVALID_TEMPLATE_ESCAPE_ERROR
    } else {
      this.raise(position, message);
    }
  };

  pp.readTmplToken = function () {
    var out = "", chunkStart = this.pos;
    for (; ;) {
      if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
        if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
          if (ch === 36) {
            this.pos += 2;
            return this.finishToken(types$1.dollarBraceL)
          } else {
            ++this.pos;
            return this.finishToken(types$1.backQuote)
          }
        }
        out += this.input.slice(chunkStart, this.pos);
        return this.finishToken(types$1.template, out)
      }
      if (ch === 92) { // '\'
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(true);
        chunkStart = this.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.pos);
        ++this.pos;
        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
          case 10:
            out += "\n";
            break
          default:
            out += String.fromCharCode(ch);
            break
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        chunkStart = this.pos;
      } else {
        ++this.pos;
      }
    }
  };

  // Reads a template token to search for the end, without validating any escape sequences
  pp.readInvalidTemplateToken = function () {
    for (; this.pos < this.input.length; this.pos++) {
      switch (this.input[this.pos]) {
        case "\\":
          ++this.pos;
          break

        case "$":
          if (this.input[this.pos + 1] !== "{") {
            break
          }

        // falls through
        case "`":
          return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos))

        // no default
      }
    }
    this.raise(this.start, "Unterminated template");
  };

  // Used to read escaped characters

  pp.readEscapedChar = function (inTemplate) {
    var ch = this.input.charCodeAt(++this.pos);
    ++this.pos;
    switch (ch) {
      case 110: return "\n" // 'n' -> '\n'
      case 114: return "\r" // 'r' -> '\r'
      case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
      case 117: return codePointToString(this.readCodePoint()) // 'u'
      case 116: return "\t" // 't' -> '\t'
      case 98: return "\b" // 'b' -> '\b'
      case 118: return "\u000b" // 'v' -> '\u000b'
      case 102: return "\f" // 'f' -> '\f'
      case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
      case 10: // ' \n'
        if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
        return ""
      case 56:
      case 57:
        if (this.strict) {
          this.invalidStringToken(
            this.pos - 1,
            "Invalid escape sequence"
          );
        }
        if (inTemplate) {
          var codePos = this.pos - 1;

          this.invalidStringToken(
            codePos,
            "Invalid escape sequence in template string"
          );

          return null
        }
      default:
        if (ch >= 48 && ch <= 55) {
          var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
          var octal = parseInt(octalStr, 8);
          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }
          this.pos += octalStr.length - 1;
          ch = this.input.charCodeAt(this.pos);
          if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
            this.invalidStringToken(
              this.pos - 1 - octalStr.length,
              inTemplate
                ? "Octal literal in template string"
                : "Octal literal in strict mode"
            );
          }
          return String.fromCharCode(octal)
        }
        if (isNewLine(ch)) {
          // Unicode new line characters after \ get removed from output in both
          // template literals and strings
          return ""
        }
        return String.fromCharCode(ch)
    }
  };

  // Used to read character escape sequences ('\x', '\u', '\U').

  pp.readHexChar = function (len) {
    var codePos = this.pos;
    var n = this.readInt(16, len);
    if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
    return n
  };

  // Read an identifier, and return it as a string. Sets `this.containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Incrementally adds only escaped chars, adding other chunks as-is
  // as a micro-optimization.

  pp.readWord1 = function () {
    this.containsEsc = false;
    var word = "", first = true, chunkStart = this.pos;
    var astral = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();
      if (isIdentifierChar(ch, astral)) {
        this.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) { // "\"
        this.containsEsc = true;
        word += this.input.slice(chunkStart, this.pos);
        var escStart = this.pos;
        if (this.input.charCodeAt(++this.pos) !== 117) // "u"
        { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
        ++this.pos;
        var esc = this.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
        word += codePointToString(esc);
        chunkStart = this.pos;
      } else {
        break
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.pos)
  };

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  pp.readWord = function (preReadWord, onlyTransformMacroArguments) {
    var word = preReadWord || this.readWord1();
    var type = types$1.name;
    if (this.options.preprocess) {
      var readMacroWordReturn = this.readMacroWord(word, this.next, onlyTransformMacroArguments);
      if (readMacroWordReturn === true) { return true }
    }
    if (this.keywords.test(word)) {
      type = keywords[word];
    } else if (this.options.objj && Object.prototype.hasOwnProperty.call(objjKeywords, word)) {
      type = objjKeywords[word];
    }
    return this.finishToken(type, word)
  };

  // Acorn is a tiny, fast JavaScript parser written in JavaScript.

  var version = "8.8.0";

  Parser.acorn = {
    Parser: Parser,
    version: version,
    defaultOptions: defaultOptions$1,
    Position: Position,
    SourceLocation: SourceLocation,
    getLineInfo: getLineInfo,
    Node: Node,
    TokenType: TokenType,
    tokTypes: types$1,
    keywordTypes: keywords,
    TokContext: TokContext,
    tokContexts: types,
    isIdentifierChar: isIdentifierChar,
    isIdentifierStart: isIdentifierStart,
    Token: Token,
    isNewLine: isNewLine,
    lineBreak: lineBreak,
    lineBreakG: lineBreakG,
    nonASCIIwhitespace: nonASCIIwhitespace
  };

  // The main exported interface (under `self.acorn` when in the
  // browser) is a `parse` function that takes a code string and
  // returns an abstract syntax tree as specified by [Mozilla parser
  // API][api].
  //
  // [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

  function parse(input, options) {
    return Parser.parse(input, options)
  }

  class GlobalVariableMaybeWarning {
    constructor (/* String */ aMessage, /* SpiderMonkey AST node */ node, /* String */ code) {
      this.message = createMessage(aMessage, node, code);
      this.node = node;
    }

    checkIfWarning = function (/* Scope */ st) {
      const identifier = this.node.name;
      return !st.getLvar(identifier) && typeof global[identifier] === 'undefined' && (typeof window === 'undefined' || typeof window[identifier] === 'undefined') && !st.compiler.getClassDef(identifier)
    }

    isEqualTo = function (/* GlobalVariableMaybeWarning */ aWarning) {
      if (this.message.message !== aWarning.message.message) return false
      if (this.node.start !== aWarning.node.start) return false
      if (this.node.end !== aWarning.node.end) return false

      return true
    }
  }

  const warningUnusedButSetVariable = { name: 'unused-but-set-variable' };
  const warningShadowIvar = { name: 'shadow-ivar' };
  const warningCreateGlobalInsideFunctionOrMethod = { name: 'create-global-inside-function-or-method' };
  const warningUnknownClassOrGlobal = { name: 'unknown-class-or-global' };
  const warningUnknownIvarType = { name: 'unknown-ivar-type' };
  const AllWarnings = [warningUnusedButSetVariable, warningShadowIvar, warningCreateGlobalInsideFunctionOrMethod, warningUnknownClassOrGlobal, warningUnknownIvarType];

  function getLineOffsets (code, offset) {
    let lineEnd = offset;
    while (lineEnd < code.length) {
      if (isNewLine(code.charCodeAt(lineEnd))) {
        break
      }
      lineEnd++;
    }
    let lineStart = offset;
    while (lineStart > 0) {
      if (isNewLine(code.charCodeAt(lineStart))) {
        lineStart++;
        break
      }
      lineStart--;
    }
    return { lineStart, lineEnd }
  }

  function createMessage (/* String */ aMessage, /* SpiderMonkey AST node */ node, /* String */ code) {
    const message = {};
    const { lineStart, lineEnd } = getLineOffsets(code, node.start);
    const loc = getLineInfo(code, node.start);
    message.loc = loc;
    message.lineStart = lineStart;
    message.lineEnd = lineEnd;
    //message.line = line
    //message.column = column
    message.message = aMessage;
    // As a SyntaxError object can't change the property 'line' we also set the property 'messageOnLine'
    message.messageOnLine = loc.line;
    message.messageOnColumn = loc.column;
    message.messageForNode = node;
    message.messageType = 'WARNING';
    message.messageForLine = code.substring(message.lineStart, message.lineEnd);

    return message
  }

  class Scope {
    constructor (prev, base) {
      this.vars = Object.create(null);

      if (base) for (const key in base) this[key] = base[key];
      this.prev = prev;

      if (prev) {
        this.compiler = prev.compiler;
        this.nodeStack = prev.nodeStack.slice(0);
        this.nodePriorStack = prev.nodePriorStack.slice(0);
        this.nodeStackOverrideType = prev.nodeStackOverrideType.slice(0);
      } else {
        this.nodeStack = [];
        this.nodePriorStack = [];
        this.nodeStackOverrideType = [];
      }
    }

    toString () {
      return this.ivars ? 'ivars: ' + JSON.stringify(this.ivars) : '<No ivars>'
    }

    compiler () {
      return this.compiler
    }

    rootScope () {
      return this.prev ? this.prev.rootScope() : this
    }

    isRootScope () {
      return !this.prev
    }

    currentClassName () {
      return this.classDef ? this.classDef.name : this.prev ? this.prev.currentClassName() : null
    }

    currentProtocolName () {
      return this.protocolDef ? this.protocolDef.name : this.prev ? this.prev.currentProtocolName() : null
    }

    getIvarForCurrentClass (/* String */ ivarName) {
      if (this.ivars) {
        const ivar = this.ivars[ivarName];
        if (ivar) { return ivar }
      }

      const prev = this.prev;

      // Stop at the class declaration
      if (prev && !this.classDef) { return prev.getIvarForCurrentClass(ivarName) }

      return null
    }

    getLvarScope (/* String */ lvarName, /* BOOL */ stopAtMethod) {
      if (this.vars) {
        const lvar = this.vars[lvarName];
        if (lvar) { return this }
      }

      const prev = this.prev;

      // Stop at the method declaration
      if (prev && (!stopAtMethod || !this.methodType)) { return prev.getLvarScope(lvarName, stopAtMethod) }

      return this
    }

    getLvar (/* String */ lvarName, /* BOOL */ stopAtMethod) {
      if (this.vars) {
        const lvar = this.vars[lvarName];
        if (lvar) { return lvar }
      }

      const prev = this.prev;

      // Stop at the method declaration
      if (prev && (!stopAtMethod || !this.methodType)) { return prev.getLvar(lvarName, stopAtMethod) }

      return null
    }

    getVarScope () {
      const prev = this.prev;

      return prev ? prev.getVarScope() : this
    }

    currentMethodType () {
      return this.methodType ? this.methodType : this.prev ? this.prev.currentMethodType() : null
    }

    copyAddedSelfToIvarsToParent () {
      if (this.prev && this.addedSelfToIvars) {
        for (const key in this.addedSelfToIvars) {
          const addedSelfToIvar = this.addedSelfToIvars[key];
          const scopeAddedSelfToIvar = (this.prev.addedSelfToIvars || (this.prev.addedSelfToIvars = Object.create(null)))[key] || (this.prev.addedSelfToIvars[key] = []);

          scopeAddedSelfToIvar.push.apply(scopeAddedSelfToIvar, addedSelfToIvar); // Append at end in parent scope
        }
      }
    }

    addMaybeWarning (warning) {
      const rootScope = this.rootScope();
      let maybeWarnings = rootScope._maybeWarnings;

      if (!maybeWarnings) { rootScope._maybeWarnings = maybeWarnings = [warning]; } else {
        const lastWarning = maybeWarnings[maybeWarnings.length - 1];

        // MessageSendExpression (and maybe others) will walk some expressions multible times and
        // possible generate warnings multible times. Here we check if this warning is already added
        if (!lastWarning.isEqualTo(warning)) { maybeWarnings.push(warning); }
      }
    }

    variablesNotReadWarnings () {
      const compiler = this.compiler;

      // The warning option must be turned on. We can't be top scope. The scope must have some variables
      if (compiler.options.warnings.includes(warningUnusedButSetVariable) && this.prev && this.vars) {
        for (const key in this.vars) {
          const lvar = this.vars[key];

          if (!lvar.isRead && (lvar.type === 'var' || lvar.type === 'let' || lvar.type === 'const')) {
          // print("Variable '" + key + "' is never read: " + lvar.type + ", line: " + lvar.node.start);
            compiler.addWarning(createMessage("Variable '" + key + "' is never read", lvar.node, compiler.source));
          }
        }
      }
    }

    maybeWarnings () {
      return this.rootScope()._maybeWarnings
    }

    pushNode (node, overrideType) {
      // Here we push 3 things to a stack. The node, override type and an array that can keep track of prior nodes on this level.
      // The current node is also pushed to the last prior array.
      // Special case when node is the same as the parent node. This happends when using an override type when walking the AST
      // The same prior list is then used instead of a new empty one.
      const nodePriorStack = this.nodePriorStack;
      const length = nodePriorStack.length;
      const lastPriorList = length ? nodePriorStack[length - 1] : null;
      const lastNode = length ? this.nodeStack[length - 1] : null;
      // First add this node to parent list of nodes, if it has one
      if (lastPriorList) {
        if (lastNode !== node) {
          // If not the same node push the node
          lastPriorList.push(node);
        }
      }
      // Use the last prior list if it is the same node
      nodePriorStack.push(lastNode === node ? lastPriorList : []);
      this.nodeStack.push(node);
      this.nodeStackOverrideType.push(overrideType);
    }

    popNode () {
      this.nodeStackOverrideType.pop();
      this.nodePriorStack.pop();
      return this.nodeStack.pop()
    }

    currentNode () {
      const nodeStack = this.nodeStack;
      return nodeStack[nodeStack.length - 1]
    }

    currentOverrideType () {
      const nodeStackOverrideType = this.nodeStackOverrideType;
      return nodeStackOverrideType[nodeStackOverrideType.length - 1]
    }

    priorNode () {
      const nodePriorStack = this.nodePriorStack;
      const length = nodePriorStack.length;

      if (length > 1) {
        const parent = nodePriorStack[length - 2];
        const l = parent.length;
        return parent[l - 2] || null
      }
      return null
    }

    formatDescription (index, formatDescription, useOverrideForNode) {
      const nodeStack = this.nodeStack;
      const length = nodeStack.length;

      index = index || 0;
      if (index >= length) { return null }

      // Get the nodes backwards from the stack
      const i = length - index - 1;
      const currentNode = nodeStack[i];
      const currentFormatDescription = formatDescription || this.compiler.formatDescription;
      // Get the parent descriptions except if no formatDescription was provided, then it is the root description
      const parentFormatDescriptions = formatDescription ? formatDescription.parent : currentFormatDescription;

      let nextFormatDescription;
      if (parentFormatDescriptions) {
        const nodeType = useOverrideForNode === currentNode ? this.nodeStackOverrideType[i] : currentNode.type;
        // console.log("nodeType: " + nodeType + ", (useOverrideForNode === currentNode):" +  + !!(useOverrideForNode === currentNode));
        nextFormatDescription = parentFormatDescriptions[nodeType];
        if (useOverrideForNode === currentNode && !nextFormatDescription) {
          // console.log("Stop");
          return null
        }
      }

      // console.log("index: " + index + ", currentNode: " + JSON.stringify(currentNode) + ", currentFormatDescription: " + JSON.stringify(currentFormatDescription) + ", nextFormatDescription: " + JSON.stringify(nextFormatDescription));

      if (nextFormatDescription) {
        // Check for more 'parent' attributes or return nextFormatDescription
        return this.formatDescription(index + 1, nextFormatDescription)
      } else {
        // Check for a virtual node one step up in the stack
        nextFormatDescription = this.formatDescription(index + 1, formatDescription, currentNode);
        if (nextFormatDescription) { return nextFormatDescription } else {
          // Ok, we have found a format description (currentFormatDescription).
          // Lets check if we have any other descriptions dependent on the prior node.
          const priorFormatDescriptions = currentFormatDescription.prior;
          if (priorFormatDescriptions) {
            const priorNode = this.priorNode();
            const priorFormatDescription = priorFormatDescriptions[priorNode ? priorNode.type : 'None'];
            if (priorFormatDescription) { return priorFormatDescription }
          }
          return currentFormatDescription
        }
      }
    }
  }

  class BlockScope extends Scope {
    variablesNotReadWarnings () {
      Scope.prototype.variablesNotReadWarnings.call(this);

      const prev = this.prev;

      // Any possible hoisted variable in this scope has to be moved to the previous scope if it is not declared in the previsous scope
      // We can't be top scope. The scope must have some possible hoisted variables
      if (prev && this.possibleHoistedVariables) {
        for (const key in this.possibleHoistedVariables) {
          const possibleHoistedVariable = this.possibleHoistedVariables[key];

          if (possibleHoistedVariable) {
            const varInPrevScope = prev.vars && prev.vars[key];

            if (varInPrevScope != null) {
              const prevPossibleHoistedVariable = (prev.possibleHoistedVariables || (prev.possibleHoistedVariables = Object.create(null)))[key];

              if (prevPossibleHoistedVariable == null) {
                prev.possibleHoistedVariables[key] = possibleHoistedVariable;
              } else {
                throw new Error("Internal inconsistency, previous scope should not have this possible hoisted variable '" + key + "'")
              }
            }
          }
        }
      }
    }
  }

  class FunctionScope extends BlockScope {
    getVarScope () {
      return this
    }
  }

  class StringBuffer {
    constructor (useSourceNode, file, sourceContent) {
      if (useSourceNode) {
        this.rootNode = new sourceMap.SourceNode();
        this.concat = this.concatSourceNode;
        this.toString = this.toStringSourceNode;
        this.isEmpty = this.isEmptySourceNode;
        this.appendStringBuffer = this.appendStringBufferSourceNode;
        this.length = this.lengthSourceNode;
        this.removeAtIndex = this.removeAtIndexSourceNode;
        if (file) {
          const fileString = file.toString();
          const filename = fileString.substr(fileString.lastIndexOf('/') + 1);
          const sourceRoot = fileString.substr(0, fileString.lastIndexOf('/') + 1);

          this.filename = filename;

          if (sourceRoot.length > 0) { this.sourceRoot = sourceRoot; }
          if (sourceContent != null) { this.rootNode.setSourceContent(filename, sourceContent); }
        }

        if (sourceContent != null) { this.sourceContent = sourceContent; }
      } else {
        this.atoms = [];
        this.concat = this.concatString;
        this.toString = this.toStringString;
        this.isEmpty = this.isEmptyString;
        this.appendStringBuffer = this.appendStringBufferString;
        this.length = this.lengthString;
        this.removeAtIndex = this.removeAtIndexString;
      }
    }

    toStringString () {
      return this.atoms.join('')
    }

    toStringSourceNode () {
      return this.rootNode.toStringWithSourceMap({ file: this.filename + 's', sourceRoot: this.sourceRoot })
    }

    concatString (aString) {
      this.atoms.push(aString);
    }

    concatSourceNode (aString, node, originalName) {
      if (node) {
        // console.log("Snippet: " + aString + ", line: " + node.loc.start.line + ", column: " + node.loc.start.column + ", source: " + node.loc.source);
        this.rootNode.add(new sourceMap.SourceNode(node.loc.start.line, node.loc.start.column, node.loc.source, aString, originalName));
      } else { this.rootNode.add(aString); }
      if (!this.notEmpty) { this.notEmpty = true; }
    }

    // '\n' will indent. '\n\0' will not indent. '\n\1' will indent one more then the current indent level.
    // '\n\-1' will indent one less then the current indent level. Numbers from 0-9 can me used.
    concatFormat (aString) {
      if (!aString) return
      const lines = aString.split('\n');
      const size = lines.length;
      if (size > 1) {
        this.concat(lines[0]);
        for (let i = 1; i < size; i++) {
          let line = lines[i];
          this.concat('\n');
          if (line.slice(0, 1) === '\\') {
            let numberLength = 1;
            let indent = line.slice(1, 1 + numberLength);
            if (indent === '-') {
              numberLength = 2;
              indent = line.slice(1, 1 + numberLength);
            }
            const indentationNumber = parseInt(indent);
            if (indentationNumber) {
              this.concat(indentationNumber > 0 ? indentation + Array(indentationNumber * indentationSpaces + 1).join(indentType) : indentation.substring(indentationSize * -indentationNumber));
            }
            line = line.slice(1 + numberLength);
          } else if (line || i === size - 1) {
            // Ident if there is something between line breaks or the last linebreak
            this.concat(this.indentation);
          }
          if (line) this.concat(line);
        }
      } else { this.concat(aString); }
    }

    isEmptyString () {
      return this.atoms.length !== 0
    }

    isEmptySourceNode () {
      return this.notEmpty
    }

    appendStringBufferString (stringBuffer) {
      // We can't do 'this.atoms.push.apply(this.atoms, stringBuffer.atoms);' as JavaScriptCore (WebKit) has a limit on number of arguments at 65536.
      // Other browsers also have simular limits.
      const thisAtoms = this.atoms;
      const thisLength = thisAtoms.length;
      const stringBufferAtoms = stringBuffer.atoms;
      const stringBufferLength = stringBufferAtoms.length;

      thisAtoms.length = thisLength + stringBufferLength;

      for (let i = 0; i < stringBufferLength; i++) {
        thisAtoms[thisLength + i] = stringBufferAtoms[i];
      }
    }

    appendStringBufferSourceNode (stringBuffer) {
      this.rootNode.add(stringBuffer.rootNode);
    }

    lengthString () {
      return this.atoms.length
    }

    lengthSourceNode () {
      return this.rootNode.children.length
    }

    removeAtIndexString (index) {
      this.atoms[index] = '';
    }

    removeAtIndexSourceNode (index) {
      this.rootNode.children[index] = '';
    }
  }

  // A optional argument can be given to further configure
  // the compiler. These options are recognized:

  const defaultOptions = {

    // Acorn options. For more information check objj-acorn.
    // We have a function here to create a new object every time we copy
    // the default options.
    acornOptions: function () { return Object.create(null) },

    // Turn on `sourceMap` generate a source map for the compiler file.
    sourceMap: false,

    // Turn on `sourceMapIncludeSource` will include the source code in the source map.
    sourceMapIncludeSource: false,

    // The compiler can do different passes.
    // 1: Parse and walk AST tree to collect file dependencies.
    // 2: Parse and walk to generate code.
    // Pass one is only for the Objective-J load and runtime.
    pass: 2,

    // Pass in class definitions. New class definitions in source file will be added here when compiling.
    classDefs: function () { return Object.create(null) },

    // Pass in protocol definitions. New protocol definitions in source file will be added here when compiling.
    protocolDefs: function () { return Object.create(null) },

    // Pass in typeDef definitions. New typeDef definitions in source file will be added here when compiling.
    typeDefs: function () { return Object.create(null) },

    // Turn off `generate` to make the compile copy the code from the source file (and replace needed parts)
    // instead of generate it from the AST tree. The preprocessor does not work if this is turn off as it alters
    // the AST tree and not the original source. We should deprecate this in the future.
    generate: true,

    // Turn on `generateObjJ` to generate Objecitve-J code instead of Javascript code. This can be used to beautify
    // the code.
    generateObjJ: false,

    // How many spaces for indentation when generation code.
    indentationSpaces: 4,

    // The type of indentation. Default is space. Can be changed to tab or any other string.
    indentationType: ' ',

    // There is a bug in Safari 2.0 that can't handle a named function declaration. See http://kangax.github.io/nfe/#safari-bug
    // Turn on `transformNamedFunctionDeclarationToAssignment` to make the compiler transform these.
    // We support this here as the old Objective-J compiler (Not a real compiler, Preprocessor.js) transformed
    // named function declarations to assignments.
    // Example: 'function f(x) { return x }' transforms to: 'f = function(x) { return x }'
    transformNamedFunctionDeclarationToAssignment: false,

    // Turn off `includeMethodFunctionNames` to remove function names on methods.
    includeMethodFunctionNames: true,

    // Turn off `includeMethodArgumentTypeSignatures` to remove type information on method arguments.
    includeMethodArgumentTypeSignatures: true,

    // Turn off `includeIvarTypeSignatures` to remove type information on ivars.
    includeIvarTypeSignatures: true,

    // Turn off `inlineMsgSendFunctions` to use message send functions. Needed to use message send decorators.
    inlineMsgSendFunctions: true,

    // `warning` includes the warnings that are turned on. It is just used for some warnings.
    warnings: [warningUnusedButSetVariable, warningShadowIvar, warningCreateGlobalInsideFunctionOrMethod, warningUnknownClassOrGlobal, warningUnknownIvarType],

    // An array of macro objects and/or text definitions may be passed in.
    // Definitions may be in one of two forms:
    //    macro
    //    macro=body
    macros: null

  };

  // We copy the options to a new object as we don't want to mess up incoming options when we start compiling.
  function setupOptions(opts) {
    const options = Object.create(null);
    for (const opt in defaultOptions) {
      if (opts && Object.prototype.hasOwnProperty.call(opts, opt)) {
        const incomingOpt = opts[opt];
        options[opt] = typeof incomingOpt === 'function' ? incomingOpt() : incomingOpt;
      } else if (Object.prototype.hasOwnProperty.call(defaultOptions, opt)) {
        const defaultOpt = defaultOptions[opt];
        options[opt] = typeof defaultOpt === 'function' ? defaultOpt() : defaultOpt;
      }
    }
    return options
  }

  class TypeDef {
    constructor (name) {
      this.name = name;
    }
  }

  // methodDef = {"types": types, "name": selector}
  class MethodDef {
    constructor (name, types) {
      this.name = name;
      this.types = types;
    }
  }

  // Both the ClassDef and ProtocolDef conforms to a 'protocol' (That we can't declare in Javascript).
  // Both Objects have the attribute 'protocols': Array of ProtocolDef that they conform to
  // Both also have the functions: addInstanceMethod, addClassMethod, getInstanceMethod and getClassMethod
  // classDef = {"className": aClassName, "superClass": superClass , "ivars": myIvars, "instanceMethods": instanceMethodDefs, "classMethods": classMethodDefs, "protocols": myProtocols};

  class ClassDef {
    constructor (isImplementationDeclaration, name, superClass, ivars, instanceMethods, classMethods, protocols) {
      this.name = name;
      if (superClass) { this.superClass = superClass; }
      if (ivars) { this.ivars = ivars; }
      if (isImplementationDeclaration) {
        this.instanceMethods = instanceMethods || Object.create(null);
        this.classMethods = classMethods || Object.create(null);
      }
      if (protocols) { this.protocols = protocols; }
    }

    addInstanceMethod (methodDef) {
      this.instanceMethods[methodDef.name] = methodDef;
    }

    addClassMethod (methodDef) {
      this.classMethods[methodDef.name] = methodDef;
    }

    listOfNotImplementedMethodsForProtocols (protocolDefs) {
      let resultList = [];
      const instanceMethods = this.getInstanceMethods();
      const classMethods = this.getClassMethods();

      for (let i = 0, size = protocolDefs.length; i < size; i++) {
        const protocolDef = protocolDefs[i];
        const protocolInstanceMethods = protocolDef.requiredInstanceMethods;
        const protocolClassMethods = protocolDef.requiredClassMethods;
        const inheritFromProtocols = protocolDef.protocols;

        if (protocolInstanceMethods) {
          for (const methodName in protocolInstanceMethods) {
            const methodDef = protocolInstanceMethods[methodName];
            if (!instanceMethods[methodName]) resultList.push({ methodDef, protocolDef });
          }
        }

        if (protocolClassMethods) {
          for (const methodName in protocolClassMethods) {
            const methodDef = protocolClassMethods[methodName];
            if (!classMethods[methodName]) resultList.push({ methodDef, protocolDef });
          }
        }

        if (inheritFromProtocols) { resultList = resultList.concat(this.listOfNotImplementedMethodsForProtocols(inheritFromProtocols)); }
      }

      return resultList
    }

    getInstanceMethod (name) {
      const instanceMethods = this.instanceMethods;

      if (instanceMethods) {
        const method = instanceMethods[name];

        if (method) { return method }
      }

      const superClass = this.superClass;

      if (superClass) { return superClass.getInstanceMethod(name) }

      return null
    }

    getClassMethod (name) {
      const classMethods = this.classMethods;
      if (classMethods) {
        const method = classMethods[name];

        if (method) { return method }
      }

      const superClass = this.superClass;

      if (superClass) { return superClass.getClassMethod(name) }

      return null
    }

    // Return a new Array with all instance methods
    getInstanceMethods () {
      const instanceMethods = this.instanceMethods;
      if (instanceMethods) {
        const superClass = this.superClass;
        const returnObject = Object.create(null);
        if (superClass) {
          const superClassMethods = superClass.getInstanceMethods();
          for (const methodName in superClassMethods) { returnObject[methodName] = superClassMethods[methodName]; }
        }

        for (const methodName in instanceMethods) { returnObject[methodName] = instanceMethods[methodName]; }

        return returnObject
      }

      return []
    }

    // Return a new Array with all class methods
    getClassMethods () {
      const classMethods = this.classMethods;
      if (classMethods) {
        const superClass = this.superClass;
        const returnObject = Object.create(null);
        if (superClass) {
          const superClassMethods = superClass.getClassMethods();
          for (const methodName in superClassMethods) { returnObject[methodName] = superClassMethods[methodName]; }
        }

        for (const methodName in classMethods) { returnObject[methodName] = classMethods[methodName]; }

        return returnObject
      }

      return []
    }
  }

  // Both the ClassDef and ProtocolDef conforms to a 'protocol' (That we can't declare in Javascript).
  // Both Objects have the attribute 'protocols': Array of ProtocolDef that they conform to
  // Both also have the functions: addInstanceMethod, addClassMethod, getInstanceMethod and getClassMethod
  // protocolDef = {"name": aProtocolName, "protocols": inheritFromProtocols, "requiredInstanceMethods": requiredInstanceMethodDefs, "requiredClassMethods": requiredClassMethodDefs};

  class ProtocolDef {
    constructor (name, protocols, requiredInstanceMethodDefs, requiredClassMethodDefs) {
      this.name = name;
      this.protocols = protocols;
      if (requiredInstanceMethodDefs) { this.requiredInstanceMethods = requiredInstanceMethodDefs; }
      if (requiredClassMethodDefs) { this.requiredClassMethods = requiredClassMethodDefs; }
    }

    addInstanceMethod = function (methodDef) {
      (this.requiredInstanceMethods || (this.requiredInstanceMethods = Object.create(null)))[methodDef.name] = methodDef;
    }

    addClassMethod = function (methodDef) {
      (this.requiredClassMethods || (this.requiredClassMethods = Object.create(null)))[methodDef.name] = methodDef;
    }

    getInstanceMethod = function (name) {
      const instanceMethods = this.requiredInstanceMethods;

      if (instanceMethods) {
        const method = instanceMethods[name];

        if (method) { return method }
      }

      const protocols = this.protocols;

      for (let i = 0, size = protocols.length; i < size; i++) {
        const protocol = protocols[i];
        const method = protocol.getInstanceMethod(name);

        if (method) { return method }
      }

      return null
    }

    getClassMethod = function (name) {
      const classMethods = this.requiredClassMethods;

      if (classMethods) {
        const method = classMethods[name];

        if (method) { return method }
      }

      const protocols = this.protocols;

      for (let i = 0, size = protocols.length; i < size; i++) {
        const protocol = protocols[i];
        const method = protocol.getClassMethod(name);

        if (method) { return method }
      }

      return null
    }
  }

  function wordsRegexp (words) {
    return new RegExp('^(?:' + words.replace(/ /g, '|') + ')$')
  }

  function isIdempotentExpression(node) {
    switch (node.type) {
      case "Literal":
      case "Identifier":
        return true;

      case "ArrayExpression":
        for (let i = 0; i < node.elements.length; ++i) {
          if (!isIdempotentExpression(node.elements[i])) {
            return false;
          }
        }

        return true;

      case "DictionaryLiteral":
        for (let i = 0; i < node.keys.length; ++i) {
          if (!isIdempotentExpression(node.keys[i])) {
            return false;
          }
          if (!isIdempotentExpression(node.values[i])) {
            return false;
          }
        }

        return true;

      case "ObjectExpression":
        for (let i = 0; i < node.properties.length; ++i) {
          if (!isIdempotentExpression(node.properties[i].value)) {
            return false;
          }
        }

        return true;

      case "FunctionExpression":
        for (let i = 0; i < node.params.length; ++i) {
          if (!isIdempotentExpression(node.params[i])) {
            return false;
          }
        }

        return true;

      case "SequenceExpression":
        for (let i = 0; i < node.expressions.length; ++i) {
          if (!isIdempotentExpression(node.expressions[i])) {
            return false;
          }
        }

        return true;

      case "UnaryExpression":
        return isIdempotentExpression(node.argument);

      case "BinaryExpression":
        return (
          isIdempotentExpression(node.left) && isIdempotentExpression(node.right)
        );

      case "ConditionalExpression":
        return (
          isIdempotentExpression(node.test) &&
          isIdempotentExpression(node.consequent) &&
          isIdempotentExpression(node.alternate)
        );

      case "MemberExpression":
        return (
          isIdempotentExpression(node.object) &&
          (!node.computed || isIdempotentExpression(node.property))
        );

      case "Dereference":
        return isIdempotentExpression(node.expr);

      case "Reference":
        return isIdempotentExpression(node.element);

      default:
        return false;
    }
  }

  // We do not allow dereferencing of expressions with side effects because we might need to evaluate the expression twice in certain uses of deref, which is not obvious when you look at the deref operator in plain code.
  function checkCanDereference(st, node) {
    if (!isIdempotentExpression(node)) {
      throw st.compiler.error_message(
        "Dereference of expression with side effects",
        node
      );
    }
  }

  // Surround expression with parentheses
  function surroundExpression(c) {
    return function (node, st, override) {
      st.compiler.jsBuffer.concat("(");
      c(node, st, override);
      st.compiler.jsBuffer.concat(")");
    };
  }

  const operatorPrecedence = {
    // MemberExpression
    // These two are never used as they are a MemberExpression with the attribute 'computed' which tells what operator it uses.
    // ".": 0, "[]": 0,
    // NewExpression
    // This is never used.
    // "new": 1,
    // All these are UnaryExpression or UpdateExpression and never used.
    // "!": 2, "~": 2, "-": 2, "+": 2, "++": 2, "--": 2, "typeof": 2, "void": 2, "delete": 2,
    // BinaryExpression
    "*": 3,
    "/": 3,
    "%": 3,
    "+": 4,
    "-": 4,
    "<<": 5,
    ">>": 5,
    ">>>": 5,
    "<": 6,
    "<=": 6,
    ">": 6,
    ">=": 6,
    in: 6,
    instanceof: 6,
    "==": 7,
    "!=": 7,
    "===": 7,
    "!==": 7,
    "&": 8,
    "^": 9,
    "|": 10,
    // LogicalExpression
    "&&": 11,
    "||": 12,
    "??": 13,
    // ConditionalExpression
    // AssignmentExpression
  };

  const expressionTypePrecedence = {
    MemberExpression: 1,
    CallExpression: 1,
    NewExpression: 1,
    ChainExpression: 2,
    FunctionExpression: 3,
    ArrowFunctionExpression: 3,
    ImportExpression: 3,
    UnaryExpression: 4,
    UpdateExpression: 4,
    BinaryExpression: 5,
    LogicalExpression: 6,
    ConditionalExpression: 7,
    AssignmentExpression: 8,
  };

  function ignore(_node, _st, _c) {}

  const pass1 = walk__default["default"].make({
    ImportStatement: function (node, st, c) {
      node.filename.value;

      //st.compiler.dependencies.push({ url: urlString, isLocal: node.localfilepath })
      // st.compiler.dependencies.push(typeof FileDependency !== 'undefined' ? new FileDependency(typeof CFURL !== 'undefined' ? new CFURL(urlString) : urlString, node.localfilepath) : urlString);
    },
    TypeDefStatement: ignore,
    ClassStatement: ignore,
    ClassDeclarationStatement: ignore,
    MessageSendExpression: ignore,
    GlobalStatement: ignore,
    ProtocolDeclarationStatement: ignore,
    ArrayLiteral: ignore,
    Reference: ignore,
    DictionaryLiteral: ignore,
    Dereference: ignore,
    SelectorLiteralExpression: ignore,
  });

  // Returns true if subNode has higher precedence the the root node.
  // If the subNode is the right (as in left/right) subNode
  function nodePrecedence(node, subNode, right) {
    const nodeType = node.type;
    const nodePrecedence = expressionTypePrecedence[nodeType] || -1;
    const subNodePrecedence = expressionTypePrecedence[subNode.type] || -1;
    let nodeOperatorPrecedence;
    let subNodeOperatorPrecedence;
    return (
      nodePrecedence < subNodePrecedence ||
      (nodePrecedence === subNodePrecedence &&
        isLogicalBinary.test(nodeType) &&
        ((nodeOperatorPrecedence = operatorPrecedence[node.operator]) <
          (subNodeOperatorPrecedence = operatorPrecedence[subNode.operator]) ||
          (right && nodeOperatorPrecedence === subNodeOperatorPrecedence)))
    );
  }

  // Used for arrow functions. Checks if the parameter list needs parentheses.
  function mustHaveParentheses(paramList) {
    for (const param of paramList) {
      if (param.type !== "Identifier") {
        return true;
      }
    }
    return paramList.length > 1 || paramList.length === 0;
  }

  const reservedIdentifiers = wordsRegexp(
    "self _cmd __filename undefined localStorage arguments"
  );
  const wordPrefixOperators = wordsRegexp("delete in instanceof new typeof void");
  const isLogicalBinary = wordsRegexp("LogicalExpression BinaryExpression");

  const pass2 = walk__default["default"].make({
    Program: function (node, st, c) {
      for (let i = 0; i < node.body.length; ++i) {
        c(node.body[i], st, "Statement");
      }

      // Check maybe warnings
      const maybeWarnings = st.maybeWarnings();
      if (maybeWarnings) {
        for (let i = 0; i < maybeWarnings.length; i++) {
          const maybeWarning = maybeWarnings[i];
          if (maybeWarning.checkIfWarning(st)) {
            st.compiler.addWarning(maybeWarning.message);
          }
        }
      }
    },
    BlockStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      const isDecl = st.isDecl;
      if (isDecl != null) {
        delete st.isDecl;
      }

      const endOfScopeBody = st.endOfScopeBody;
      if (endOfScopeBody) {
        delete st.endOfScopeBody;
      }

      const skipIndentation = st.skipIndentation;
      if (skipIndentation) {
        delete st.skipIndentation;
      } else {
        buffer.concat(compiler.indentation.substring(compiler.indentationSize));
      }

      buffer.concat("{\n", node);
      const inner = endOfScopeBody ? st : new BlockScope(st);
      for (let i = 0; i < node.body.length; ++i) {
        if (node.body[i].type === "BlockStatement") {
          compiler.indentation += compiler.indentStep;
          c(node.body[i], inner, "Statement");
          compiler.indentation = compiler.indentation.substring(
            compiler.indentationSize
          );
        } else {
          c(node.body[i], inner, "Statement");
        }
      }
      !endOfScopeBody && inner.variablesNotReadWarnings();
      const maxReceiverLevel = st.maxReceiverLevel;
      if (endOfScopeBody && maxReceiverLevel) {
        buffer.concat(compiler.indentation);
        buffer.concat("var ");
        for (let i = 0; i < maxReceiverLevel; i++) {
          if (i) buffer.concat(", ");
          buffer.concat("___r");
          buffer.concat(i + 1 + "");
        }
        buffer.concat(";\n");
      }

      // Simulate a node for the last curly bracket
      // var endNode = node.loc && { loc: { start: { line : node.loc.end.line, column: node.loc.end.column}}, source: node.loc.source};
      buffer.concat(compiler.indentation.substring(compiler.indentationSize));
      buffer.concat("}", node);
      if (st.isDefaultExport) buffer.concat(";");
      if (!skipIndentation && isDecl !== false) {
        buffer.concat("\n");
      }
      st.indentBlockLevel--;
    },
    ExpressionStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      if (node.expression.type === "Reference")
        throw compiler.error_message(
          "Can't have reference of expression as a statement",
          node.expression
        );
      if (
        (node.expression.type === "AssignmentExpression" &&
          node.expression.left.type === "ObjectPattern") ||
        node.expression.type === "FunctionExpression" ||
        node.expression.type === "ObjectExpression" ||
        (node.expression.type === "BinaryExpression" &&
          node.expression.left.type === "FunctionExpression") ||
        (node.expression.type === "Literal" &&
          node.expression.value === "use strict" &&
          !node.directive)
      ) {
        surroundExpression(c)(node.expression, st, "Expression");
      } else {
        c(node.expression, st, "Expression");
      }
      buffer.concat(";\n", node);
    },
    IfStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      // Keep the 'else' and 'if' on the same line if it is an 'else if'
      if (!st.superNodeIsElse) {
        buffer.concat(st.compiler.indentation);
      } else {
        delete st.superNodeIsElse;
      }
      buffer.concat("if (", node);
      c(node.test, st, "Expression");
      // We don't want EmptyStatements to generate an extra parenthesis except when it is in a while, for, ...
      buffer.concat(")");
      if (node.consequent.type !== "EmptyStatement") buffer.concat("\n");
      st.compiler.indentation += st.compiler.indentStep;
      c(node.consequent, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
      const alternate = node.alternate;
      if (alternate) {
        const alternateNotIf = alternate.type !== "IfStatement";
        const emptyStatement = alternate.type === "EmptyStatement";
        buffer.concat(st.compiler.indentation);
        // We don't want EmptyStatements to generate an extra parenthesis except when it is in a while, for, ...
        buffer.concat(
          alternateNotIf ? (emptyStatement ? "else" : "else\n") : "else ",
          node
        );
        if (alternateNotIf) {
          st.compiler.indentation += st.compiler.indentStep;
        } else {
          st.superNodeIsElse = true;
        }

        c(alternate, st, "Statement");
        if (alternateNotIf)
          st.compiler.indentation = st.compiler.indentation.substring(
            st.compiler.indentationSize
          );
      }
    },
    LabeledStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      c(node.label, st, "VariablePattern");
      buffer.concat(": ", node);
      c(node.body, st, "Statement");
    },
    BreakStatement: function (node, st, c) {
      const compiler = st.compiler;
      const label = node.label;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      if (label) {
        buffer.concat("break ", node);
        c(label, st, "VariablePattern");
        buffer.concat(";\n");
      } else {
        buffer.concat("break;\n", node);
      }
    },
    ContinueStatement: function (node, st, c) {
      const compiler = st.compiler;
      const label = node.label;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      if (label) {
        buffer.concat("continue ", node);
        c(label, st, "VariablePattern");
        buffer.concat(";\n");
      } else {
        buffer.concat("continue;\n", node);
      }
    },
    WithStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("with(", node);
      c(node.object, st, "Expression");
      buffer.concat(")\n", node);
      st.compiler.indentation += st.compiler.indentStep;
      c(node.body, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
    },
    SwitchStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("switch(", node);
      c(node.discriminant, st, "Expression");
      buffer.concat(") {\n");
      st.compiler.indentation += st.compiler.indentStep;
      for (let i = 0; i < node.cases.length; ++i) {
        const cs = node.cases[i];
        if (cs.test) {
          buffer.concat(st.compiler.indentation);
          buffer.concat("case ");
          c(cs.test, st, "Expression");
          buffer.concat(":\n");
        } else {
          buffer.concat("default:\n");
        }
        st.compiler.indentation += st.compiler.indentStep;
        for (let j = 0; j < cs.consequent.length; ++j) {
          c(cs.consequent[j], st, "Statement");
        }
        st.compiler.indentation = st.compiler.indentation.substring(
          st.compiler.indentationSize
        );
      }
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
      buffer.concat(st.compiler.indentation);
      buffer.concat("}\n");
    },
    ReturnStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("return", node);
      if (node.argument) {
        buffer.concat(" ");
        c(node.argument, st, "Expression");
      }
      buffer.concat(";\n");
    },
    ThrowStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("throw", node);
      buffer.concat(" ");
      c(node.argument, st, "Expression");
      buffer.concat(";\n");
    },
    TryStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("try", node);
      buffer.concat(" ");
      st.compiler.indentation += st.compiler.indentStep;
      st.skipIndentation = true;
      c(node.block, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
      if (node.handler) {
        const handler = node.handler;
        const inner = new Scope(st);
        const param = handler.param;
        const name = param?.name;
        if (name) inner.vars[name] = { type: "catch clause", node: param };
        buffer.concat("\n");
        buffer.concat(st.compiler.indentation);
        buffer.concat("catch");
        if (param) {
          buffer.concat("(");
          c(param, st, "Pattern");
          buffer.concat(") ");
        }
        st.compiler.indentation += st.compiler.indentStep;
        inner.skipIndentation = true;
        inner.endOfScopeBody = true;
        c(handler.body, inner, "BlockStatement");
        inner.variablesNotReadWarnings();
        st.compiler.indentation = st.compiler.indentation.substring(
          st.compiler.indentationSize
        );
        inner.copyAddedSelfToIvarsToParent();
      }
      if (node.finalizer) {
        buffer.concat("\n");
        buffer.concat(st.compiler.indentation);
        buffer.concat("finally ");
        st.compiler.indentation += st.compiler.indentStep;
        st.skipIndentation = true;
        c(node.finalizer, st, "Statement");
        st.compiler.indentation = st.compiler.indentation.substring(
          st.compiler.indentationSize
        );
      }
      buffer.concat("\n");
    },
    WhileStatement: function (node, st, c) {
      const compiler = st.compiler;
      const body = node.body;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("while (", node);
      c(node.test, st, "Expression");
      // We don't want EmptyStatements to generate an extra parenthesis except when it is in a while, for, ...
      buffer.concat(")");
      if (node.body.type !== "EmptyStatement") buffer.concat("\n");
      st.compiler.indentation += st.compiler.indentStep;
      c(body, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
    },
    DoWhileStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("do\n", node);
      st.compiler.indentation += st.compiler.indentStep;
      c(node.body, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
      buffer.concat(st.compiler.indentation);
      buffer.concat("while (");
      c(node.test, st, "Expression");
      buffer.concat(");\n");
    },
    ForStatement: function (node, st, c) {
      const compiler = st.compiler;
      const body = node.body;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("for (", node);
      if (node.init) c(node.init, st, "ForInit");
      buffer.concat("; ");
      if (node.test) c(node.test, st, "Expression");
      buffer.concat("; ");
      if (node.update) c(node.update, st, "Expression");
      // We don't want EmptyStatements to generate an extra parenthesis except when it is in a while, for, ...
      buffer.concat(")");
      if (node.body.type !== "EmptyStatement") buffer.concat("\n");
      st.compiler.indentation += st.compiler.indentStep;
      c(body, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
    },
    ForInStatement: function (node, st, c) {
      const compiler = st.compiler;
      const body = node.body;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("for (", node);
      c(node.left, st, "ForInit");
      buffer.concat(" in ");
      c(node.right, st, "Expression");
      // We don't want EmptyStatements to generate an extra parenthesis except when it is in a while, for, ...
      buffer.concat(body.type === "EmptyStatement" ? ")\n" : ")\n");
      st.compiler.indentation += st.compiler.indentStep;
      c(body, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
    },
    ForOfStatement: function (node, st, c) {
      // TODO: Fix code duplication with 'for in'-
      const compiler = st.compiler;
      const body = node.body;
      const buffer = compiler.jsBuffer;
      buffer.concat("for", node);
      if (node.await) buffer.concat(" await ");
      buffer.concat("(");
      c(node.left, st, "ForInit");
      buffer.concat(" of ");
      c(node.right, st, "Expression");
      // We don't want EmptyStatements to generate an extra parenthesis except when it is in a while, for, ...
      buffer.concat(body.type === "EmptyStatement" ? ")\n" : ")\n");
      st.compiler.indentation += st.compiler.indentStep;
      c(body, st, "Statement");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
    },
    ForInit: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      if (node.type === "VariableDeclaration") {
        st.isFor = true;
        c(node, st);
        delete st.isFor;
      } else if (node.type === "BinaryExpression" && node.operator === "in") {
        buffer.concat("(");
        c(node, st, "Expression");
        buffer.concat(")");
      } else {
        c(node, st, "Expression");
      }
    },
    DebuggerStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("debugger;\n", node);
    },
    Function: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const inner = new FunctionScope(st);
      const decl = node.type === "FunctionDeclaration";
      const id = node.id;

      inner.isDecl = decl;
      for (let i = 0; i < node.params.length; ++i) {
        inner.vars[node.params[i].name] = {
          type: "argument",
          node: node.params[i],
        };
      }
      buffer.concat(st.compiler.indentation);
      if (id) {
        const name = id.name;
        (decl ? st : inner).vars[name] = {
          type: decl ? "function" : "function name",
          node: id,
        };
        if (
          !st.skipFunctionKeyword &&
          compiler.transformNamedFunctionDeclarationToAssignment
        ) {
          buffer.concat(name);
          buffer.concat(" = ");
        }
      }
      if (st.isDefaultExport && !decl) buffer.concat("(");
      const prefix = [];
      if (st.methodPrefix?.length) {
        prefix.push(...st.methodPrefix);
      }
      if (node.async) prefix.push("async");
      if (!st.skipFunctionKeyword) {
        prefix.push("function");
      }
      if (node.generator) prefix.push("*");
      buffer.concat(prefix.join(" "));
      if (
        (st.skipFunctionKeyword ||
          !compiler.transformNamedFunctionDeclarationToAssignment) &&
        id
      ) {
        buffer.concat(" ");
        if (st.isComputed) buffer.concat("[");
        c(id, st);
        if (st.isComputed) buffer.concat("]");
      }
      buffer.concat("(");
      for (let i = 0; i < node.params.length; ++i) {
        if (i) {
          buffer.concat(", ");
        }
        if (node.params[i].type === "RestElement") {
          c(node.params[i], st, "RestElement");
        } else {
          c(node.params[i], st, "Pattern");
        }
      }
      buffer.concat(")\n");
      st.compiler.indentation += st.compiler.indentStep;
      inner.endOfScopeBody = true;
      c(node.body, inner, "Statement");
      if (st.isDefaultExport && !decl) buffer.concat(")");
      inner.variablesNotReadWarnings();
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
      inner.copyAddedSelfToIvarsToParent();
    },
    ObjectPattern: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("{", node);
      let isFirst = true;
      for (const prop of node.properties) {
        if (!isFirst) {
          buffer.concat(", ");
        } else {
          isFirst = false;
        }
        if (prop.type === "Property") {
          if (prop.shorthand && prop.value.type === "AssignmentPattern") {
            c(prop.value, st);
          } else {
            if (prop.computed) buffer.concat("[");
            c(prop.key, st, "Pattern");
            if (prop.computed) buffer.concat("]");
            if (!prop.shorthand) {
              buffer.concat(": ");
              c(prop.value, st, "Pattern");
            }
          }
        } else {
          c(prop, st);
        }
      }
      buffer.concat("}");
    },
    RestElement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("...");
      c(node.argument, st, "Pattern");
    },
    RestPattern: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("...");
      c(node.argument, st, "Pattern");
    },
    EmptyStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(";\n");
    },
    VariableDeclaration: function (node, st, c) {
      const identifiersFromIdentifier = (id, currentResult) => {
        switch (id.type) {
          case "Identifier":
            currentResult.push(id);
            break;
          case "ObjectPattern":
            currentResult.concat(
              id.properties.reduce(
                (result, prop) =>
                  result.concat(
                    identifiersFromIdentifier(
                      prop.type === "RestElement" ? prop.argument : prop.value,
                      currentResult
                    )
                  ),
                []
              )
            );
            break;
          case "ArrayPattern":
            currentResult.concat(
              id.elements.reduce(
                (result, element) =>
                  element != null
                    ? result.concat(
                        identifiersFromIdentifier(element, currentResult)
                      )
                    : result,
                []
              )
            );
            break;
          case "AssignmentPattern":
            currentResult.concat(
              identifiersFromIdentifier(id.left, currentResult)
            );
            break;
        }
        return currentResult;
      };
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const isVar = node.kind === "var";
      const varScope = isVar ? st.getVarScope() : st;

      if (!st.isFor) buffer.concat(compiler.indentation);
      buffer.concat(node.kind + " ", node);
      let isFirst = true;
      for (const decl of node.declarations) {
        let identifiers = identifiersFromIdentifier(decl.id, []);

        if (identifiers)
          for (const identifierNode of identifiers) {
            const possibleHoistedVariable =
              isVar && varScope.possibleHoistedVariables?.[identifierNode.name];
            const variableDeclaration = {
              type: node.kind,
              node: identifierNode,
              isRead: possibleHoistedVariable
                ? possibleHoistedVariable.isRead
                : 0,
            };

            // Make sure we count the access for this varaible if it is hoisted.
            // Check if this variable has already been accessed above this declaration
            if (possibleHoistedVariable) {
              // 'variableDeclaration' is already marked as read. This was done by adding the already read amount above.

              // Substract the same amount from possible local variable higher up in the hierarchy that is shadowed by this declaration
              if (possibleHoistedVariable.variable) {
                possibleHoistedVariable.variable.isRead -=
                  possibleHoistedVariable.isRead;
              }
              // Remove it as we don't need to care about this variable anymore.
              varScope.possibleHoistedVariables[identifierNode.name] = null;
            }
            varScope.vars[identifierNode.name] = variableDeclaration;
          }

        if (!isFirst) {
          if (st.isFor) {
            buffer.concat(", ");
          } else {
            buffer.concat(",\n");
            buffer.concat(compiler.indentation);
            buffer.concat("    ");
          }
        }

        c(decl.id, st, "Pattern");
        if (decl.init) {
          buffer.concat(" = ");
          c(decl.init, st, "Expression");
        }
        // FIXME: Extract to function
        // Here we check back if a ivar with the same name exists and if we have prefixed 'self.' on previous uses.
        // If this is the case we have to remove the prefixes and issue a warning that the variable hides the ivar.
        if (st.addedSelfToIvars) {
          if (identifiers)
            for (const identifierNode of identifiers) {
              const addedSelfToIvar = st.addedSelfToIvars[identifierNode.name];
              if (addedSelfToIvar) {
                const size = addedSelfToIvar.length;
                for (let i = 0; i < size; i++) {
                  const dict = addedSelfToIvar[i];
                  buffer.removeAtIndex(dict.index);
                  if (compiler.options.warnings.includes(warningShadowIvar))
                    compiler.addWarning(
                      createMessage(
                        "Local declaration of '" +
                          identifierNode.name +
                          "' hides instance variable",
                        dict.node,
                        compiler.source
                      )
                    );
                }
                // Add a read mark to the local variable for each time it is used.
                const variableDeclaration = varScope.vars[identifierNode.name];
                variableDeclaration.isRead += size;
                // Remove the variable from list of instance variable uses.
                st.addedSelfToIvars[identifierNode.name] = [];
              }
            }
        }
        if (isFirst) isFirst = false;
      }
      if (!st.isFor) buffer.concat(";\n", node); // Don't add ';' if this is a for statement but do it if this is a statement
    },
    ThisExpression: function (node, st, c) {
      const compiler = st.compiler;

      compiler.jsBuffer.concat("this", node);
    },
    ArrayExpression: function (node, st, c) {
      const compiler = st.compiler;

      const buffer = compiler.jsBuffer;
      buffer.concat("[", node);

      for (let i = 0; i < node.elements.length; ++i) {
        const elt = node.elements[i];

        if (i !== 0) {
          buffer.concat(", ");
        }

        if (elt) c(elt, st, "Expression");
      }
      buffer.concat("]");
    },
    ObjectExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("{", node);
      let isFirst = true;
      for (const prop of node.properties) {
        if (!isFirst) {
          buffer.concat(", ");
        } else {
          isFirst = false;
        }
        c(prop, st);
      }
      buffer.concat("}");
    },
    Property: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      if (node.value?.type === "AssignmentPattern" && node.shorthand) {
        c(node.value, st, "AssignmentPattern");
      } else if (node.kind === "get" || node.kind === "set" || node.method) {
        buffer.concat((node.method ? "" : node.kind) + " ");
        node.value.id = node.key;
        st.isComputed = node.computed;
        st.skipFunctionKeyword = true;
        c(node.value, st, "Expression");
        delete st.skipFunctionKeyword;
        delete st.isComputed;
      } else {
        if (node.computed) buffer.concat("[");
        st.isPropertyKey = true;
        c(node.key, st, "Expression");
        delete st.isPropertyKey;
        if (node.computed) buffer.concat("]");
        if (!node.shorthand) {
          buffer.concat(": ");
        }
        if (!node.shorthand) c(node.value, st, "Expression");
      }
    },
    StaticBlock: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(st.compiler.indentation);
      buffer.concat("static");
      buffer.concat("{");
      for (let i = 0; i < node.body.length; ++i) {
        c(node.body[i], st, "Statement");
      }
      buffer.concat("}");
    },
    SpreadElement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("...");
      c(node.argument, st);
    },
    SequenceExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("(", node);
      for (let i = 0; i < node.expressions.length; ++i) {
        if (i !== 0) {
          buffer.concat(", ");
        }
        c(node.expressions[i], st, "Expression");
      }
      buffer.concat(")");
    },
    UnaryExpression: function (node, st, c) {
      const compiler = st.compiler;
      const argument = node.argument;
      const buffer = compiler.jsBuffer;
      if (node.prefix) {
        buffer.concat(node.operator, node);
        if (wordPrefixOperators.test(node.operator)) {
          buffer.concat(" ");
        }
        (nodePrecedence(node, argument) ? surroundExpression(c) : c)(
          argument,
          st,
          "Expression"
        );
      } else {
        (nodePrecedence(node, argument) ? surroundExpression(c) : c)(
          argument,
          st,
          "Expression"
        );
        buffer.concat(node.operator);
      }
    },
    UpdateExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      if (node.argument.type === "Dereference") {
        checkCanDereference(st, node.argument);

        // @deref(x)++ and ++@deref(x) require special handling.

        // Output the dereference function, "(...)(z)"
        buffer.concat((node.prefix ? "" : "(") + "(");

        // The thing being dereferenced.
        c(node.argument.expr, st, "Expression");
        buffer.concat(")(");

        c(node.argument, st, "Expression");
        buffer.concat(
          " " +
            node.operator.substring(0, 1) +
            " 1)" +
            (node.prefix ? "" : node.operator === "++" ? " - 1)" : " + 1)")
        );

        return;
      }

      if (node.prefix) {
        buffer.concat(node.operator, node);
        if (wordPrefixOperators.test(node.operator)) {
          buffer.concat(" ");
        }
        (nodePrecedence(node, node.argument) ? surroundExpression(c) : c)(
          node.argument,
          st,
          "Expression"
        );
      } else {
        (nodePrecedence(node, node.argument) ? surroundExpression(c) : c)(
          node.argument,
          st,
          "Expression"
        );
        buffer.concat(node.operator);
      }
    },
    BinaryExpression: function (node, st, c) {
      const compiler = st.compiler;
      if (
        node.operator === "**" ||
        node.left.type === "ArrowFunctionExpression"
      ) {
        surroundExpression(c)(node.left, st, "Expression");
      } else {
        (nodePrecedence(node, node.left) ? surroundExpression(c) : c)(
          node.left,
          st,
          "Expression"
        );
      }
      const buffer = compiler.jsBuffer;
      buffer.concat(" ");
      buffer.concat(node.operator, node);
      buffer.concat(" ");
      (nodePrecedence(node, node.right, true) ? surroundExpression(c) : c)(
        node.right,
        st,
        "Expression"
      );
    },
    LogicalExpression: function (node, st, c) {
      const compiler = st.compiler;
      if (node.operator === "??") {
        surroundExpression(c)(node.left, st, "Expression");
      } else {
        (nodePrecedence(node, node.left) ? surroundExpression(c) : c)(
          node.left,
          st,
          "Expression"
        );
      }
      const buffer = compiler.jsBuffer;
      buffer.concat(" ");
      buffer.concat(node.operator);
      buffer.concat(" ");
      if (node.operator === "??") {
        surroundExpression(c)(node.right, st, "Expression");
      } else {
        (nodePrecedence(node, node.right, true) ? surroundExpression(c) : c)(
          node.right,
          st,
          "Expression"
        );
      }
    },
    ParenthesizedExpression: function (node, st, c) {
      const buffer = st.compiler.jsBuffer;
      buffer.concat("(");
      c(node.expression, st, "Expression");
      buffer.concat(")");
    },
    AssignmentExpression: function (node, st, c) {
      const compiler = st.compiler;
      let saveAssignment = st.assignment;
      const buffer = compiler.jsBuffer;

      if (node.left.type === "Dereference") {
        checkCanDereference(st, node.left);

        // @deref(x) = z    -> x(z) etc

        // Output the dereference function, "(...)(z)"
        buffer.concat("(", node);
        // What's being dereferenced could itself be an expression, such as when dereferencing a deref.
        c(node.left.expr, st, "Expression");
        buffer.concat(")(");

        // Now "(x)(...)". We have to manually expand +=, -=, *= etc.
        if (node.operator !== "=") {
          // Output the whole .left, not just .left.expr.
          c(node.left, st, "Expression");
          buffer.concat(" " + node.operator.substring(0, 1) + " ");
        }

        c(node.right, st, "Expression");
        buffer.concat(")");

        return;
      }

      saveAssignment = st.assignment;
      const nodeLeft = node.left;

      st.assignment = true;
      if (nodeLeft.type === "Identifier" && nodeLeft.name === "self") {
        const lVar = st.getLvar("self", true);
        if (lVar) {
          const lvarScope = lVar.scope;
          if (lvarScope) {
            lvarScope.assignmentToSelf = true;
          }
        }
      }
      (nodePrecedence(node, nodeLeft) ? surroundExpression(c) : c)(
        nodeLeft,
        st,
        "Expression"
      );
      buffer.concat(" ");
      buffer.concat(node.operator);
      buffer.concat(" ");
      st.assignment = saveAssignment;
      (nodePrecedence(node, node.right, true) ? surroundExpression(c) : c)(
        node.right,
        st,
        "Expression"
      );
      const varScope = st.getVarScope();
      if (
        varScope.isRootScope() &&
        nodeLeft.type === "Identifier" &&
        !varScope.getLvar(nodeLeft.name)
      ) {
        varScope.vars[nodeLeft.name] = { type: "global", node: nodeLeft };
      }
    },
    AssignmentPattern: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      c(node.left, st, "Pattern");
      buffer.concat(" = ");
      c(node.right, st, "Expression");
    },
    ArrayPattern: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("[");
      let isFirst = true;
      for (const element of node.elements) {
        if (!isFirst || element == null) {
          buffer.concat(", ");
        } else {
          isFirst = false;
        }
        if (element != null) c(element, st, "Pattern");
      }
      buffer.concat("]");
    },
    VariablePattern: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat(node.name);
    },
    TemplateLiteral: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("`");
      let i;
      for (i = 0; i < node.expressions.length; i++) {
        buffer.concat(node.quasis[i].value.raw);
        buffer.concat("${");
        c(node.expressions[i], st);
        buffer.concat("}");
      }
      buffer.concat(node.quasis[i].value.raw);
      buffer.concat("`");
    },
    TaggedTemplateExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      if (node.tag.type === "ChainExpression") buffer.concat("(");
      c(node.tag, st, "Expression");
      if (node.tag.type === "ChainExpression") buffer.concat(")");
      c(node.quasi, st, "Expression");
    },
    ConditionalExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      (nodePrecedence(node, node.test) ? surroundExpression(c) : c)(
        node.test,
        st,
        "Expression"
      );
      buffer.concat(" ? ");
      c(node.consequent, st, "Expression");
      buffer.concat(" : ");
      c(node.alternate, st, "Expression");
    },
    NewExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const nodeArguments = node.arguments;
      buffer.concat("new ", node);
      (nodePrecedence(node, node.callee) ? surroundExpression(c) : c)(
        node.callee,
        st,
        "Expression"
      );
      buffer.concat("(");
      if (nodeArguments) {
        for (let i = 0, size = nodeArguments.length; i < size; ++i) {
          if (i) {
            buffer.concat(", ");
          }
          c(nodeArguments[i], st, "Expression");
        }
      }
      buffer.concat(")");
    },
    CallExpression: function (node, st, c) {
      const compiler = st.compiler;
      const nodeArguments = node.arguments;
      const callee = node.callee;
      const buffer = compiler.jsBuffer;

      // If call to function 'eval' we assume that 'self' can be altered and from this point
      // we check if 'self' is null before 'objj_msgSend' is called with 'self' as receiver.
      if (callee.type === "Identifier" && callee.name === "eval") {
        const selfLvar = st.getLvar("self", true);
        if (selfLvar) {
          const selfScope = selfLvar.scope;
          if (selfScope) {
            selfScope.assignmentToSelf = true;
          }
        }
      }
      (nodePrecedence(node, callee) ? surroundExpression(c) : c)(
        callee,
        st,
        "Expression"
      );
      if (node.optional) buffer.concat("?.");
      buffer.concat("(");
      if (nodeArguments) {
        for (let i = 0, size = nodeArguments.length; i < size; ++i) {
          if (i) {
            buffer.concat(", ");
          }
          c(nodeArguments[i], st, "Expression");
        }
      }
      buffer.concat(")");
    },
    MemberExpression: function (node, st, c) {
      const compiler = st.compiler;
      const computed = node.computed;
      (nodePrecedence(node, node.object) ? surroundExpression(c) : c)(
        node.object,
        st,
        "Expression"
      );
      let s = "";
      if (node.optional && node.computed) {
        s = "?.[";
      } else if (node.optional) {
        s = "?.";
      } else if (node.computed) {
        s = "[";
      } else {
        s = ".";
      }
      compiler.jsBuffer.concat(s);
      st.secondMemberExpression = !computed;
      // No parentheses when it is computed, '[' and ']' are the same thing.
      (!computed && nodePrecedence(node, node.property)
        ? surroundExpression(c)
        : c)(node.property, st, "Expression");
      st.secondMemberExpression = false;
      if (computed) {
        compiler.jsBuffer.concat("]");
      }
    },
    ChainExpression: function (node, st, c) {
      c(node.expression, st);
    },
    AwaitExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("await", node);
      if (node.argument) {
        buffer.concat(" ");
        buffer.concat("(");
        c(node.argument, st, "Expression");
        buffer.concat(")");
      }
    },
    ArrowFunctionExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const inner = new FunctionScope(st);
      inner.isDecl = false;
      for (let i = 0; i < node.params.length; ++i) {
        inner.vars[node.params[i].name] = {
          type: "argument",
          node: node.params[i],
        };
      }
      if (node.async) buffer.concat("async ");
      const needParentheses = mustHaveParentheses(node.params);
      if (needParentheses) buffer.concat("(");
      let isFirst = true;
      for (const param of node.params) {
        if (isFirst) {
          isFirst = false;
        } else {
          buffer.concat(", ");
        }
        c(param, st, "Pattern");
      }
      if (needParentheses) buffer.concat(")");
      buffer.concat(" => ");
      if (node.expression) {
        if (
          (node.body.type === "AssignmentExpression" &&
            node.body.left.type === "ObjectPattern") ||
          node.body.type === "FunctionExpression" ||
          node.body.type === "ObjectExpression"
        ) {
          surroundExpression(c)(node.body, inner, "Expression");
        } else {
          c(node.body, inner, "Expression");
        }
      } else {
        inner.skipIndentation = true;
        inner.endOfScopeBody = true;
        st.compiler.indentation += st.compiler.indentStep;
        c(node.body, inner, "BlockStatement");
        st.compiler.indentation = st.compiler.indentation.substring(
          st.compiler.indentationSize
        );
      }
      inner.variablesNotReadWarnings();
      inner.copyAddedSelfToIvarsToParent();
    },
    Identifier: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const identifier = node.name;

      if (st.isPropertyKey) {
        buffer.concat(identifier, node, identifier === "self" ? "self" : null);
        return;
      }

      let lvarScope = st.getLvarScope(identifier, true); // Only look inside method/function scope
      let lvar = lvarScope.vars?.[identifier];

      if (!st.secondMemberExpression && st.currentMethodType() === "-") {
        const ivar = compiler.getIvarForClass(identifier, st);
        if (ivar) {
          if (lvar) {
            if (compiler.options.warnings.includes(warningShadowIvar))
              compiler.addWarning(
                createMessage(
                  "Local declaration of '" +
                    identifier +
                    "' hides instance variable",
                  node,
                  compiler.source
                )
              );
          } else {
            // Save the index in where the "self." string is stored and the node.
            // These will be used if we find a variable declaration that is hoisting this identifier.
            (
              (st.addedSelfToIvars ||
                (st.addedSelfToIvars = Object.create(null)))[identifier] ||
              (st.addedSelfToIvars[identifier] = [])
            ).push({ node, index: buffer.length() });
            buffer.concat("self.", node);
          }
        } else if (!reservedIdentifiers.test(identifier)) {
          // Don't check for warnings if it is a reserved word like self, localStorage, _cmd, etc...
          let message;
          const classOrGlobal =
            typeof global[identifier] !== "undefined" ||
            (typeof window !== "undefined" &&
              typeof window[identifier] !== "undefined") ||
            compiler.getClassDef(identifier);
          const globalVar = st.getLvar(identifier);
          if (classOrGlobal && (!globalVar || globalVar.type !== "class")) ; else if (!globalVar) {
            if (
              st.assignment &&
              compiler.options.warnings.includes(
                warningCreateGlobalInsideFunctionOrMethod
              )
            ) {
              message = new GlobalVariableMaybeWarning(
                "Creating global variable inside function or method '" +
                  identifier +
                  "'",
                node,
                compiler.source
              );
              // Turn off these warnings for this identifier, we only want one.
              st.vars[identifier] = { type: "remove global warning", node };
            } else if (
              compiler.options.warnings.includes(warningUnknownClassOrGlobal)
            ) {
              message = new GlobalVariableMaybeWarning(
                "Using unknown class or uninitialized global variable '" +
                  identifier +
                  "'",
                node,
                compiler.source
              );
            }
          }
          if (message) {
            st.addMaybeWarning(message);
          }
        }
      }
      if (!(st.assignment && st.secondMemberExpression)) {
        if (lvar) {
          lvar.isRead++;
        } else {
          // If the var is not declared in current var scope (function scope) we need to save which var it is as it can be hoisted.
          // First check if the variable is declared higher up in the scope hierarchy
          lvarScope = lvarScope.getLvarScope(identifier);
          lvar = lvarScope.vars && lvarScope.vars[identifier];
          // We will mark it as read.
          if (lvar) {
            lvar.isRead++;
          }

          // The variable can be declared later on in this function / method scope.
          // It can also be declared later on in a higher scope.
          // We create a list of possible variables that will be used if it is declared.
          // We collect how many times the variable is read and a reference to a possible variable in a
          let possibleHoistedVariable = (lvarScope.possibleHoistedVariables ||
            (lvarScope.possibleHoistedVariables = Object.create(null)))[
            identifier
          ];

          if (possibleHoistedVariable == null) {
            possibleHoistedVariable = { isRead: 1 };
            lvarScope.possibleHoistedVariables[identifier] =
              possibleHoistedVariable;
          } else {
            possibleHoistedVariable.isRead++;
          }

          if (lvar) {
            // If the var and scope are already set it should not be different from what we found now.
            if (
              (possibleHoistedVariable.variable &&
                possibleHoistedVariable.variable !== lvar) ||
              (possibleHoistedVariable.varScope &&
                possibleHoistedVariable.varScope !== lvarScope)
            ) {
              throw new Error(
                "Internal inconsistency, var or scope is not the same"
              );
            }
            possibleHoistedVariable.variable = lvar;
            possibleHoistedVariable.varScope = lvarScope;
          }
        }
      }
      buffer.concat(identifier, node, identifier === "self" ? "self" : null);
    },
    YieldExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("yield", node);
      if (node.delegate) buffer.concat("*");
      if (node.argument) {
        buffer.concat(" ");
        c(node.argument, st, "Expression");
      }
    },
    // Use this when there should not be a look up to issue warnings or add 'self.' before ivars
    VariablePattern: function (node, st, c) {
      const compiler = st.compiler;
      compiler.jsBuffer.concat(node.name, node);
    },
    Literal: function (node, st, c) {
      const compiler = st.compiler;
      if (node.raw) {
        if (node.raw.charAt(0) === "@") {
          compiler.jsBuffer.concat(node.raw.substring(1), node);
        } else {
          compiler.jsBuffer.concat(node.raw, node);
        }
      } else {
        const value = node.value;
        const doubleQuote = value.indexOf('"') !== -1;
        compiler.jsBuffer.concat(doubleQuote ? "'" : '"', node);
        compiler.jsBuffer.concat(value);
        compiler.jsBuffer.concat(doubleQuote ? "'" : '"');
      }
    },
    ClassDeclaration: function (node, st, c) {
      const buffer = st.compiler.jsBuffer;
      if (node.type === "ClassExpression") buffer.concat("(");
      buffer.concat("class ");
      if (node.id) {
        st.vars[node.id.name] = { type: "JSClass", node: node };
        c(node.id, st);
      }
      if (node.superClass) {
        buffer.concat(" extends ");
        c(node.superClass, st);
      }
      st.compiler.indentation += st.compiler.indentStep;
      c(node.body, st, "ClassBody");
      st.compiler.indentation = st.compiler.indentation.substring(
        st.compiler.indentationSize
      );
      if (node.type === "ClassExpression") buffer.concat(")");
    },
    ClassExpression: function (node, st, c) {
      c(node, st, "ClassDeclaration");
    },
    ClassBody: function (node, st, c) {
      const compiler = st.compiler;
      compiler.jsBuffer.concat(" {\n");
      for (const element of node.body) {
        c(element, st);
        compiler.jsBuffer.concat("\n");
      }
      compiler.jsBuffer.concat("}\n");
    },
    PropertyDefinition: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat(st.compiler.indentation);
      if (node.static) buffer.concat("static ");
      if (node.computed) buffer.concat("[");
      c(node.key, st);
      if (node.computed) buffer.concat("]");
      if (node.value) {
        buffer.concat(" = ");
        c(node.value, st);
      }
      buffer.concat(";");
    },
    MethodDefinition: function (node, st, c) {
      const prefix = [];
      if (node.static) prefix.push("static");
      if (node.kind === "get") prefix.push("get");
      if (node.kind === "set") prefix.push("set");

      node.value.id = node.key;
      st.skipFunctionKeyword = true;
      st.methodPrefix = prefix;
      if (node.computed) st.isComputed = true;
      c(node.value, st);
      delete st.methodPrefix;
      st.isComputed = false;
      st.skipFunctionKeyword = false;
    },
    PrivateIdentifier: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("#");
      buffer.concat(node.name);
    },
    MetaProperty: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      // Very specific special cases. Apparently this will be used in future versions of ES.
      if (node.meta.name === "import") {
        buffer.concat("import.meta");
      } else {
        buffer.concat("new.target");
      }
    },
    Super: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("super");
    },
    ExportNamedDeclaration: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      // The different cases we can have when we encounter an 'ExportNamedDeclaration'
      // Case 1: declaration is non-null, specifiers are null, source is null. Example: export var foo = 1.
      // Case 2: declaration is null, specifiers are non-null, source is null
      // Case 3: declaration is null, specifiers are non-null, source is non-null

      buffer.concat("export ");
      if (node.declaration) {
        c(node.declaration, st);
      } else {
        buffer.concat("{");
        let isFirst = true;
        for (const specifier of node.specifiers) {
          if (!isFirst) {
            buffer.concat(", ");
          } else {
            isFirst = false;
          }
          c(specifier, st);
        }
        buffer.concat("}");
        if (node.source) {
          buffer.concat(" from ");
          c(node.source, st);
        }
      }
      buffer.concat("\n");
    },
    ExportSpecifier: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      c(node.local, st);
      if (node.local !== node.exported) {
        buffer.concat(" as ");
        c(node.exported, st);
      }
    },
    ExportDefaultDeclaration: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      st.isDefaultExport = true;
      buffer.concat("export default ");
      c(node.declaration, st);
      delete st.isDefaultExport;
    },
    ExportAllDeclaration: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      buffer.concat("export * ");
      if (node.exported) {
        buffer.concat("as ");
        c(node.exported, st);
      }
      if (node.source) {
        buffer.concat(" from ");
        c(node.source, st);
      }
      buffer.concat("\n");
    },
    ImportDeclaration: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("import ");
      let startedCurly = false;
      let isFirst = true;
      for (const specifier of node.specifiers) {
        if (!isFirst) buffer.concat(", ");
        else isFirst = false;
        switch (specifier.type) {
          case "ImportSpecifier":
            if (!startedCurly) buffer.concat("{");
            startedCurly = true;
            c(specifier.imported, st);
            if (specifier.local !== specifier.imported) {
              buffer.concat(" as ");
              c(specifier.local, st);
            }
            break;
          case "ImportDefaultSpecifier":
            c(specifier.local, st);
            break;
          case "ImportNamespaceSpecifier":
            buffer.concat("* as ");
            c(specifier.local, st);
            break;
        }
      }
      if (startedCurly) buffer.concat("}");
      if (node.specifiers.length > 0) buffer.concat(" from ");
      c(node.source, st);
      buffer.concat("\n");
    },
    ImportExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("import");
      buffer.concat("(");
      c(node.source, st);
      buffer.concat(")");
    },
    ArrayLiteral: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const elementLength = node.elements.length;
      const varScope = st.getVarScope();

      if (!varScope.receiverLevel) varScope.receiverLevel = 0;
      if (!elementLength) {
        if (compiler.options.inlineMsgSendFunctions) {
          buffer.concat("(___r", node);
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(
            ' = (CPArray.isa.method_msgSend["alloc"] || _objj_forward)(CPArray, "alloc"), ___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : (___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat('.isa.method_msgSend["init"] || _objj_forward)(___r');
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "init"))');
        } else {
          buffer.concat("(___r");
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(' = CPArray.isa.objj_msgSend0(CPArray, "alloc"), ___r');
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(".isa.objj_msgSend0(___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "init"))');
        }

        if (!(varScope.maxReceiverLevel >= varScope.receiverLevel)) {
          varScope.maxReceiverLevel = varScope.receiverLevel;
        }
      } else {
        if (compiler.options.inlineMsgSendFunctions) {
          buffer.concat("(___r", node);
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(
            ' = (CPArray.isa.method_msgSend["alloc"] || _objj_forward)(CPArray, "alloc"), ___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : (___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(
            '.isa.method_msgSend["initWithObjects:count:"] || _objj_forward)(___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "initWithObjects:count:", [');
        } else {
          buffer.concat("(___r", node);
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(' = CPArray.isa.objj_msgSend0(CPArray, "alloc"), ___r');
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(".isa.objj_msgSend2(___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "initWithObjects:count:", [');
        }

        if (!(varScope.maxReceiverLevel >= varScope.receiverLevel)) {
          varScope.maxReceiverLevel = varScope.receiverLevel;
        }
      }
      if (elementLength) {
        for (let i = 0; i < elementLength; i++) {
          const elt = node.elements[i];

          if (i) {
            buffer.concat(", ");
          }

          c(elt, st, "Expression");
        }
        buffer.concat("], " + elementLength + "))");
      }
      varScope.receiverLevel--;
    },
    DictionaryLiteral: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const keyLength = node.keys.length;
      const varScope = st.getVarScope();

      if (!varScope.receiverLevel) varScope.receiverLevel = 0;
      if (!keyLength) {
        if (compiler.options.inlineMsgSendFunctions) {
          buffer.concat("(___r", node);
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(
            ' = (CPDictionary.isa.method_msgSend["alloc"] || _objj_forward)(CPDictionary, "alloc"), ___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : (___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat('.isa.method_msgSend["init"] || _objj_forward)(___r');
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "init"))');
        } else {
          buffer.concat("(___r");
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(
            ' = CPDictionary.isa.objj_msgSend0(CPDictionary, "alloc"), ___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(".isa.objj_msgSend0(___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "init"))');
        }

        if (!(varScope.maxReceiverLevel >= varScope.receiverLevel)) {
          varScope.maxReceiverLevel = varScope.receiverLevel;
        }
      } else {
        if (compiler.options.inlineMsgSendFunctions) {
          buffer.concat("(___r", node);
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(
            ' = (CPDictionary.isa.method_msgSend["alloc"] || _objj_forward)(CPDictionary, "alloc"), ___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : (___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(
            '.isa.method_msgSend["initWithObjects:forKeys:"] || _objj_forward)(___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "initWithObjects:forKeys:", [');
        } else {
          buffer.concat("(___r", node);
          buffer.concat(++varScope.receiverLevel + "");
          buffer.concat(
            ' = CPDictionary.isa.objj_msgSend0(CPDictionary, "alloc"), ___r'
          );
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" == null ? ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(" : ___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(".isa.objj_msgSend2(___r");
          buffer.concat(varScope.receiverLevel + "");
          buffer.concat(', "initWithObjects:forKeys:", [');
        }

        if (!(varScope.maxReceiverLevel >= varScope.receiverLevel)) {
          varScope.maxReceiverLevel = varScope.receiverLevel;
        }

        for (let i = 0; i < keyLength; i++) {
          const value = node.values[i];

          if (i) buffer.concat(", ");
          c(value, st, "Expression");
        }

        buffer.concat("], [");

        for (let i = 0; i < keyLength; i++) {
          const key = node.keys[i];

          if (i) buffer.concat(", ");

          c(key, st, "Expression");
        }
        buffer.concat("]))");
      }
      varScope.receiverLevel--;
    },
    ClassDeclarationStatement: function (node, st, c) {
      const compiler = st.compiler;
      const saveJSBuffer = compiler.jsBuffer;
      const className = node.classname.name;
      let classDef = compiler.getClassDef(className);
      const classScope = new Scope(st);
      const isInterfaceDeclaration =
        node.type === "InterfaceDeclarationStatement";
      const protocols = node.protocols;
      const options = compiler.options;

      compiler.imBuffer = new StringBuffer(
        compiler.createSourceMap,
        compiler.URL,
        options.sourceMap && options.sourceMapIncludeSource
          ? compiler.source
          : null
      );
      compiler.cmBuffer = new StringBuffer(
        compiler.createSourceMap,
        compiler.URL
      );
      compiler.classBodyBuffer = new StringBuffer(
        compiler.createSourceMap,
        compiler.URL
      ); // TODO: Check if this is needed

      if (compiler.getTypeDef(className)) {
        throw compiler.error_message(
          className + " is already declared as a type",
          node.classname
        );
      }

      // First we declare the class
      if (node.superclassname) {
        // Must have methods dictionaries and ivars dictionary to be a real implementaion declaration.
        // Without it is a "@class" declaration (without both ivars dictionary and method dictionaries) or
        // "interface" declaration (without ivars dictionary)
        // TODO: Create a ClassDef object and add this logic to it

        // It has a real implementation declaration already
        if (classDef && classDef.ivars) {
          throw compiler.error_message(
            "Duplicate class " + className,
            node.classname
          );
        }

        // It has a interface declaration already
        if (
          isInterfaceDeclaration &&
          classDef &&
          classDef.instanceMethods &&
          classDef.classMethods
        ) {
          throw compiler.error_message(
            "Duplicate interface definition for class " + className,
            node.classname
          );
        }
        const superClassDef = compiler.getClassDef(node.superclassname.name);
        // if (!superClassDef) { // Don't throw error for this when generating Objective-J code
        //   let errorMessage = "Can't find superclass " + node.superclassname.name
        //   const stack = compiler.constructor.importStack
        //   if (stack) {
        //     for (let i = compiler.constructor.importStack.length; --i >= 0;) { errorMessage += '\n' + Array((stack.length - i) * 2 + 1).join(' ') + 'Imported by: ' + stack[i] }
        //   }
        //   throw compiler.error_message(errorMessage, node.superclassname)
        // }

        classDef = new ClassDef(
          !isInterfaceDeclaration,
          className,
          superClassDef,
          Object.create(null)
        );

        saveJSBuffer.concat(
          "\n{var the_class = objj_allocateClassPair(" +
            node.superclassname.name +
            ', "' +
            className +
            '"),\nmeta_class = the_class.isa;',
          node
        );
      } else if (node.categoryname) {
        classDef = compiler.getClassDef(className);
        //if (!classDef) { throw compiler.error_message('Class ' + className + ' not found ', node.classname) }

        saveJSBuffer.concat(
          '{\nvar the_class = objj_getClass("' + className + '")\n',
          node
        );
        saveJSBuffer.concat(
          'if(!the_class) throw new SyntaxError("*** Could not find definition for class \\"' +
            className +
            '\\"");\n'
        );
        saveJSBuffer.concat("var meta_class = the_class.isa;");
      } else {
        classDef = new ClassDef(
          !isInterfaceDeclaration,
          className,
          null,
          Object.create(null)
        );

        saveJSBuffer.concat(
          '{var the_class = objj_allocateClassPair(Nil, "' +
            className +
            '"),\nmeta_class = the_class.isa;',
          node
        );
      }

      if (protocols) {
        for (let i = 0, size = protocols.length; i < size; i++) {
          saveJSBuffer.concat(
            '\nvar aProtocol = objj_getProtocol("' + protocols[i].name + '");',
            protocols[i]
          );
          saveJSBuffer.concat(
            '\nif (!aProtocol) throw new SyntaxError("*** Could not find definition for protocol \\"' +
              protocols[i].name +
              '\\"");'
          );
          saveJSBuffer.concat("\nclass_addProtocol(the_class, aProtocol);");
        }
      }
      /*
              if (isInterfaceDeclaration)
                  classDef.interfaceDeclaration = true;
          */
      classScope.classDef = classDef;
      compiler.currentSuperClass =
        'objj_getClass("' + className + '").super_class';
      compiler.currentSuperMetaClass =
        'objj_getMetaClass("' + className + '").super_class';

      let firstIvarDeclaration = true;
      const ivars = classDef ? classDef.ivars : [];
      const classDefIvars = [];
      let hasAccessors = false;

      // Then we add all ivars
      if (node.ivardeclarations) {
        for (let i = 0; i < node.ivardeclarations.length; ++i) {
          const ivarDecl = node.ivardeclarations[i];
          const ivarType = ivarDecl.ivartype ? ivarDecl.ivartype.name : null;
          const ivarTypeIsClass = ivarDecl.ivartype
            ? ivarDecl.ivartype.typeisclass
            : false;
          const ivarIdentifier = ivarDecl.id;
          const ivarName = ivarIdentifier.name;
          const ivar = { type: ivarType, name: ivarName };
          const accessors = ivarDecl.accessors;

          const checkIfIvarIsAlreadyDeclaredAndInSuperClass = function (
            aClassDef,
            recursiveFunction
          ) {
            if (aClassDef.ivars[ivarName]) {
              throw compiler.error_message(
                "Instance variable '" +
                  ivarName +
                  "' is already declared for class " +
                  className +
                  (aClassDef.name !== className
                    ? " in superclass " + aClassDef.name
                    : ""),
                ivarDecl.id
              );
            }
            if (aClassDef.superClass) {
              recursiveFunction(aClassDef.superClass, recursiveFunction);
            }
          };

          // Check if ivar is already declared in this class or its super classes.
          checkIfIvarIsAlreadyDeclaredAndInSuperClass(
            classDef,
            checkIfIvarIsAlreadyDeclaredAndInSuperClass
          );

          const isTypeDefined =
            !ivarTypeIsClass ||
            typeof global[ivarType] !== "undefined" ||
            (typeof window !== "undefined" &&
              typeof window[ivarType] !== "undefined") ||
            compiler.getClassDef(ivarType) ||
            compiler.getTypeDef(ivarType) ||
            ivarType === classDef.name;

          if (
            !isTypeDefined &&
            compiler.options.warnings.includes(warningUnknownIvarType)
          ) {
            compiler.addWarning(
              createMessage(
                "Unknown type '" + ivarType + "' for ivar '" + ivarName + "'",
                ivarDecl.ivartype,
                compiler.source
              )
            );
          }

          if (firstIvarDeclaration) {
            firstIvarDeclaration = false;
            saveJSBuffer.concat("class_addIvars(the_class, [");
          } else {
            saveJSBuffer.concat(", ");
          }

          if (options.includeIvarTypeSignatures) {
            saveJSBuffer.concat(
              'new objj_ivar("' + ivarName + '", "' + ivarType + '")',
              node
            );
          } else {
            saveJSBuffer.concat('new objj_ivar("' + ivarName + '")', node);
          }

          if (ivarDecl.outlet) {
            ivar.outlet = true;
          }

          // Store the classDef ivars into array and add them later when accessors are created to prevent ivar duplicate error when generating accessors
          classDefIvars.push(ivar);

          if (!classScope.ivars) {
            classScope.ivars = Object.create(null);
          }
          classScope.ivars[ivarName] = {
            type: "ivar",
            name: ivarName,
            node: ivarIdentifier,
            ivar,
          };

          if (accessors) {
            // Declare the accessor methods in the class definition.
            // TODO: This next couple of lines for getting getterName and setterName are duplicated from below. Create functions for this.
            const property =
              (accessors.property && accessors.property.name) || ivarName;
            const getterName =
              (accessors.getter && accessors.getter.name) || property;

            classDef.addInstanceMethod(new MethodDef(getterName, [ivarType]));

            if (!accessors.readonly) {
              let setterName = accessors.setter ? accessors.setter.name : null;

              if (!setterName) {
                const start = property.charAt(0) === "_" ? 1 : 0;

                setterName =
                  (start ? "_" : "") +
                  "set" +
                  property.substr(start, 1).toUpperCase() +
                  property.substring(start + 1) +
                  ":";
              }
              classDef.addInstanceMethod(
                new MethodDef(setterName, ["void", ivarType])
              );
            }
            hasAccessors = true;
          }
        }
      }
      if (!firstIvarDeclaration) {
        saveJSBuffer.concat("]);");
      }

      // If we have accessors add get and set methods for them
      if (!isInterfaceDeclaration && hasAccessors) {
        // We pass false to the string buffer as we don't need source map when we create the Objective-J code for the accessors
        const getterSetterBuffer = new StringBuffer(false);

        // Add the class declaration to compile accessors correctly
        // Remove all protocols from class declaration
        getterSetterBuffer.concat(
          compiler.source
            .substring(node.start, node.endOfIvars)
            .replace(/<.*>/g, "")
        );
        getterSetterBuffer.concat("\n");

        for (let i = 0; i < node.ivardeclarations.length; ++i) {
          const ivarDecl = node.ivardeclarations[i];
          const ivarType = ivarDecl.ivartype ? ivarDecl.ivartype.name : null;
          const ivarName = ivarDecl.id.name;
          const accessors = ivarDecl.accessors;

          if (!accessors) {
            continue;
          }

          const property =
            (accessors.property && accessors.property.name) || ivarName;
          const getterName =
            (accessors.getter && accessors.getter.name) || property;
          const getterCode =
            "- (" +
            (ivarType || "id") +
            ")" +
            getterName +
            "\n{\n    return " +
            ivarName +
            ";\n}\n";

          getterSetterBuffer.concat(getterCode);

          if (accessors.readonly) {
            continue;
          }

          let setterName = accessors.setter ? accessors.setter.name : null;

          if (!setterName) {
            const start = property.charAt(0) === "_" ? 1 : 0;

            setterName =
              (start ? "_" : "") +
              "set" +
              property.substr(start, 1).toUpperCase() +
              property.substring(start + 1) +
              ":";
          }

          let setterCode =
            "- (void)" +
            setterName +
            "(" +
            (ivarType || "id") +
            ")newValue\n{\n    ";

          if (accessors.copy) {
            setterCode +=
              "if (" +
              ivarName +
              " !== newValue)\n        " +
              ivarName +
              " = [newValue copy];\n}\n";
          } else {
            setterCode += ivarName + " = newValue;\n}\n";
          }

          getterSetterBuffer.concat(setterCode);
        }

        getterSetterBuffer.concat("\n@end");

        // Remove all @accessors or we will get a recursive loop in infinity
        const b = getterSetterBuffer
          .toString()
          .replace(/@accessors(\(.*\))?/g, "");
        const compilerOptions = setupOptions(options);

        compilerOptions.sourceMapIncludeSource = true;
        const url = compiler.url;
        const filename =
          url && compiler.URL.substr(compiler.URL.lastIndexOf("/") + 1);
        const dotIndex = filename && filename.lastIndexOf(".");
        const filenameNoExt =
          filename &&
          filename.substr(0, dotIndex === -1 ? filename.length : dotIndex);
        const filenameExt =
          filename &&
          filename.substr(dotIndex === -1 ? filename.length : dotIndex);
        const categoryname = node.categoryname && node.categoryname.id;
        const imBuffer = exports.compileToIMBuffer(
          b,
          filenameNoExt +
            "_" +
            className +
            (categoryname ? "_" + categoryname : "") +
            "_Accessors" +
            (filenameExt || ""),
          compilerOptions
        );

        // Add the accessors methods first to instance method buffer.
        // This will allow manually added set and get methods to override the compiler generated
        const generatedCode = imBuffer.toString();

        if (compiler.createSourceMap) {
          compiler.imBuffer.concat(
            sourceMap.SourceNode.fromStringWithSourceMap(
              generatedCode.code,
              sourceMap.SourceMapConsumer(generatedCode.map.toString())
            )
          );
        } else {
          compiler.imBuffer.concat(generatedCode);
        }
      }

      // We will store the ivars into the classDef first after accessors are done so we don't get a duplicate ivars error when generating accessors
      for (let ivarSize = classDefIvars.length, i = 0; i < ivarSize; i++) {
        const ivar = classDefIvars[i];
        const ivarName = ivar.name;

        // Store the ivar into the classDef
        ivars[ivarName] = ivar;
      }

      // We will store the classDef first after accessors are done so we don't get a duplicate class error when generating accessors
      compiler.classDefs[className] = classDef;

      const bodies = node.body;
      const bodyLength = bodies.length;

      if (bodyLength > 0) {
        // And last add methods and other statements
        for (let i = 0; i < bodyLength; ++i) {
          const body = bodies[i];
          c(body, classScope, "Statement");
        }
      }

      // We must make a new class object for our class definition if it's not a category
      if (!isInterfaceDeclaration && !node.categoryname) {
        saveJSBuffer.concat("objj_registerClassPair(the_class);\n");
      }

      // Add instance methods
      if (compiler.imBuffer.isEmpty()) {
        saveJSBuffer.concat("class_addMethods(the_class, [");
        saveJSBuffer.appendStringBuffer(compiler.imBuffer);
        saveJSBuffer.concat("]);\n");
      }

      // Add class methods
      if (compiler.cmBuffer.isEmpty()) {
        saveJSBuffer.concat("class_addMethods(meta_class, [");
        saveJSBuffer.appendStringBuffer(compiler.cmBuffer);
        saveJSBuffer.concat("]);\n");
      }

      saveJSBuffer.concat("}\n");

      compiler.jsBuffer = saveJSBuffer;

      // Skip the "@end"

      // If the class conforms to protocols check that all required methods are implemented
      if (protocols) {
        // Lookup the protocolDefs for the protocols
        const protocolDefs = [];

        for (let i = 0, size = protocols.length; i < size; i++) {
          const protocol = protocols[i];
          const protocolDef = compiler.getProtocolDef(protocol.name);

          if (!protocolDef) {
            throw compiler.error_message(
              "Cannot find protocol declaration for '" + protocol.name + "'",
              protocol
            );
          }

          protocolDefs.push(protocolDef);
        }

        const unimplementedMethods =
          classDef.listOfNotImplementedMethodsForProtocols(protocolDefs);

        if (unimplementedMethods && unimplementedMethods.length > 0) {
          for (
            let j = 0, unimpSize = unimplementedMethods.length;
            j < unimpSize;
            j++
          ) {
            const unimplementedMethod = unimplementedMethods[j];
            const methodDef = unimplementedMethod.methodDef;
            const protocolDef = unimplementedMethod.protocolDef;

            compiler.addWarning(
              createMessage(
                "Method '" +
                  methodDef.name +
                  "' in protocol '" +
                  protocolDef.name +
                  "' is not implemented",
                node.classname,
                compiler.source
              )
            );
          }
        }
      }
    },
    ProtocolDeclarationStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const protocolName = node.protocolname.name;
      let protocolDef = compiler.getProtocolDef(protocolName);
      const protocols = node.protocols;
      const protocolScope = new Scope(st);
      const inheritFromProtocols = [];

      if (protocolDef) {
        throw compiler.error_message(
          "Duplicate protocol " + protocolName,
          node.protocolname
        );
      }

      compiler.imBuffer = new StringBuffer(
        compiler.createSourceMap,
        compiler.URL
      );
      compiler.cmBuffer = new StringBuffer(
        compiler.createSourceMap,
        compiler.URL
      );

      buffer.concat(
        '{var the_protocol = objj_allocateProtocol("' + protocolName + '");',
        node
      );

      if (protocols) {
        for (let i = 0, size = protocols.length; i < size; i++) {
          const protocol = protocols[i];
          const inheritFromProtocolName = protocol.name;
          const inheritProtocolDef = compiler.getProtocolDef(
            inheritFromProtocolName
          );

          if (!inheritProtocolDef) {
            throw compiler.error_message(
              "Can't find protocol " + inheritFromProtocolName,
              protocol
            );
          }

          buffer.concat(
            '\nvar aProtocol = objj_getProtocol("' +
              inheritFromProtocolName +
              '");',
            node
          );
          buffer.concat(
            '\nif (!aProtocol) throw new SyntaxError("*** Could not find definition for protocol \\"' +
              protocolName +
              '\\"");',
            node
          );
          buffer.concat("\nprotocol_addProtocol(the_protocol, aProtocol);", node);

          inheritFromProtocols.push(inheritProtocolDef);
        }
      }

      protocolDef = new ProtocolDef(protocolName, inheritFromProtocols);
      compiler.protocolDefs[protocolName] = protocolDef;
      protocolScope.protocolDef = protocolDef;

      const someRequired = node.required;

      if (someRequired) {
        const requiredLength = someRequired.length;

        if (requiredLength > 0) {
          // We only add the required methods
          for (let i = 0; i < requiredLength; ++i) {
            const required = someRequired[i];
            c(required, protocolScope, "Statement");
          }
        }
      }

      buffer.concat("\nobjj_registerProtocol(the_protocol);\n");

      // Add instance methods
      if (compiler.imBuffer.isEmpty()) {
        buffer.concat("protocol_addMethodDescriptions(the_protocol, [");
        buffer.appendStringBuffer(compiler.imBuffer);
        buffer.concat("], true, true);\n");
      }

      // Add class methods
      if (compiler.cmBuffer.isEmpty()) {
        buffer.concat("protocol_addMethodDescriptions(the_protocol, [");
        buffer.appendStringBuffer(compiler.cmBuffer);
        buffer.concat("], true, false);\n");
      }

      buffer.concat("}");

      compiler.jsBuffer = buffer;

      // Skip the "@end"
    },
    IvarDeclaration: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      if (node.outlet) {
        buffer.concat("@outlet ");
      }
      c(node.ivartype, st, "VariablePattern");
      buffer.concat(" ");
      c(node.id, st, "VariablePattern");
      if (node.accessors) {
        buffer.concat(" @accessors");
      }
    },
    MethodDeclarationStatement: function (node, st, c) {
      const compiler = st.compiler;
      const saveJSBuffer = compiler.jsBuffer;
      const methodScope = new FunctionScope(st);
      const isInstanceMethodType = node.methodtype === "-";
      const selectors = node.selectors;
      const nodeArguments = node.arguments;
      const returnType = node.returntype;
      const types = [returnType ? returnType.name : node.action ? "void" : "id"]; // Return type is 'id' as default except if it is an action declared method, then it's 'void'
      const returnTypeProtocols = returnType ? returnType.protocols : null;
      let selector = selectors[0].name; // There is always at least one selector

      if (returnTypeProtocols) {
        for (let i = 0, size = returnTypeProtocols.length; i < size; i++) {
          const returnTypeProtocol = returnTypeProtocols[i];
          if (!compiler.getProtocolDef(returnTypeProtocol.name)) {
            compiler.addWarning(
              createMessage(
                "Cannot find protocol declaration for '" +
                  returnTypeProtocol.name +
                  "'",
                returnTypeProtocol,
                compiler.source
              )
            );
          }
        }
      }

      // If we are generating objective-J code write everything directly to the regular buffer
      // Otherwise we have one for instance methods and one for class methods.
      compiler.jsBuffer = isInstanceMethodType
        ? compiler.imBuffer
        : compiler.cmBuffer;

      // Put together the selector. Maybe this should be done in the parser...
      // Or maybe we should do it here as when genereting Objective-J code it's kind of handy
      if (nodeArguments.length > 0) {
        for (let i = 0; i < nodeArguments.length; i++) {
          const argument = nodeArguments[i];
          const argumentType = argument.type;
          const argumentTypeName = argumentType ? argumentType.name : "id";
          const argumentProtocols = argumentType ? argumentType.protocols : null;

          types.push(argumentTypeName);

          if (i === 0) {
            selector += ":";
          } else {
            selector += (selectors[i] ? selectors[i].name : "") + ":";
          }

          if (argumentProtocols) {
            for (let j = 0; j < argumentProtocols.length; j++) {
              const argumentProtocol = argumentProtocols[j];
              if (!compiler.getProtocolDef(argumentProtocol.name)) {
                compiler.addWarning(
                  createMessage(
                    "Cannot find protocol declaration for '" +
                      argumentProtocol.name +
                      "'",
                    argumentProtocol,
                    compiler.source
                  )
                );
              }
            }
          }
        }
      }

      // Add comma separator if this is not first method in this buffer
      if (compiler.jsBuffer.isEmpty()) {
        compiler.jsBuffer.concat(", ");
      }

      compiler.jsBuffer.concat('new objj_method(sel_getUid("', node);
      compiler.jsBuffer.concat(selector);
      compiler.jsBuffer.concat('"), ');

      if (node.body) {
        if (node.async) {
          compiler.jsBuffer.concat("async ");
        }
        compiler.jsBuffer.concat("function");

        if (compiler.options.includeMethodFunctionNames) {
          compiler.jsBuffer.concat(
            " $" + st.currentClassName() + "__" + selector.replace(/:/g, "_")
          );
        }

        compiler.jsBuffer.concat("(self, _cmd");

        methodScope.methodType = node.methodtype;
        methodScope.vars.self = { type: "method base", scope: methodScope };
        methodScope.vars._cmd = { type: "method base", scope: methodScope };

        if (nodeArguments) {
          for (let i = 0; i < nodeArguments.length; i++) {
            const argument = nodeArguments[i];
            const argumentName = argument.identifier.name;

            compiler.jsBuffer.concat(", ");
            compiler.jsBuffer.concat(argumentName, argument.identifier);

            methodScope.vars[argumentName] = {
              type: "method argument",
              node: argument,
            };
          }
        }

        compiler.jsBuffer.concat(")\n");

        st.compiler.indentation += st.compiler.indentStep;
        methodScope.endOfScopeBody = true;

        c(node.body, methodScope, "Statement");

        methodScope.variablesNotReadWarnings();
        st.compiler.indentation = st.compiler.indentation.substring(
          st.compiler.indentationSize
        );

        compiler.jsBuffer.concat("\n");
      } else {
        // It is a interface or protocol declatartion and we don't have a method implementation
        compiler.jsBuffer.concat("Nil\n");
      }

      if (compiler.options.includeMethodArgumentTypeSignatures) {
        compiler.jsBuffer.concat("," + JSON.stringify(types));
      }
      compiler.jsBuffer.concat(")");
      compiler.jsBuffer = saveJSBuffer;

      // Add the method to the class or protocol definition
      let def = st.classDef;
      let alreadyDeclared;

      // But first, if it is a class definition check if it is declared in superclass or interface declaration
      if (def) {
        alreadyDeclared = isInstanceMethodType
          ? def.getInstanceMethod(selector)
          : def.getClassMethod(selector);
      } else {
        def = st.protocolDef;
      }

      // if (!def) {
      //   throw new Error(
      //     "InternalError: MethodDeclaration without ClassDeclaration or ProtocolDeclaration at line: " +
      //       getLineInfo(compiler.source, node.start).line
      //   );
      // }

      // Create warnings if types does not corresponds to method declaration in superclass or interface declarations
      // If we don't find the method in superclass or interface declarations above or if it is a protocol
      // declaration, try to find it in any of the conforming protocols
      if (def && !alreadyDeclared) {
        const protocols = def.protocols;

        if (protocols) {
          for (let i = 0; i < protocols.length; i++) {
            const protocol = protocols[i];
            alreadyDeclared = isInstanceMethodType
              ? protocol.getInstanceMethod(selector)
              : protocol.getClassMethod(selector);

            if (alreadyDeclared) {
              break;
            }
          }
        }
      }

      if (alreadyDeclared) {
        const declaredTypes = alreadyDeclared.types;

        if (declaredTypes) {
          const typeSize = declaredTypes.length;
          if (typeSize > 0) {
            // First type is return type
            const declaredReturnType = declaredTypes[0];

            // Create warning if return types is not the same. It is ok if superclass has 'id' and subclass has a class type
            if (
              declaredReturnType !== types[0] &&
              !(
                declaredReturnType === "id" &&
                returnType &&
                returnType.typeisclass
              )
            ) {
              compiler.addWarning(
                createMessage(
                  "Conflicting return type in implementation of '" +
                    selector +
                    "': '" +
                    declaredReturnType +
                    "' vs '" +
                    types[0] +
                    "'",
                  returnType || node.action || selectors[0],
                  compiler.source
                )
              );
            }

            // Check the parameter types. The size of the two type arrays should be the same as they have the same selector.
            for (let i = 1; i < typeSize; i++) {
              const parameterType = declaredTypes[i];

              if (
                parameterType !== types[i] &&
                !(parameterType === "id" && nodeArguments[i - 1].type.typeisclass)
              ) {
                compiler.addWarning(
                  createMessage(
                    "Conflicting parameter types in implementation of '" +
                      selector +
                      "': '" +
                      parameterType +
                      "' vs '" +
                      types[i] +
                      "'",
                    nodeArguments[i - 1].type || nodeArguments[i - 1].identifier,
                    compiler.source
                  )
                );
              }
            }
          }
        }
      }

      // Now we add it
      const methodDef = new MethodDef(selector, types);

      if (def) {
        if (isInstanceMethodType) {
          def.addInstanceMethod(methodDef);
        } else {
          def.addClassMethod(methodDef);
        }
      }
    },
    MessageSendExpression: function (node, st, c) {
      const compiler = st.compiler;
      const inlineMsgSend = compiler.options.inlineMsgSendFunctions;
      const buffer = compiler.jsBuffer;
      const nodeObject = node.object;
      const selectors = node.selectors;
      const nodeArguments = node.arguments;
      const argumentsLength = nodeArguments.length;
      const firstSelector = selectors[0];
      let selector = firstSelector ? firstSelector.name : ""; // There is always at least one selector
      const parameters = node.parameters;
      const options = compiler.options;
      const varScope = st.getVarScope();

      // Put together the selector. Maybe this should be done in the parser...
      for (let i = 0; i < argumentsLength; i++) {
        if (i !== 0) {
          const nextSelector = selectors[i];
          if (nextSelector) {
            selector += nextSelector.name;
          }
        }
        selector += ":";
      }
      let totalNoOfParameters;
      if (!inlineMsgSend) {
        // Find out the total number of arguments so we can choose appropriate msgSend function. Only needed if call the function and not inline it
        totalNoOfParameters = argumentsLength;

        if (parameters) {
          totalNoOfParameters += parameters.length;
        }
      }
      let receiverIsIdentifier;
      let receiverIsNotSelf;
      let selfLvar;
      if (node.superObject) {
        if (inlineMsgSend) {
          buffer.concat("(", node);
          buffer.concat(
            st.currentMethodType() === "+"
              ? compiler.currentSuperMetaClass
              : compiler.currentSuperClass
          );
          buffer.concat('.method_dtable["', node);
          buffer.concat(selector);
          buffer.concat('"] || _objj_forward)(self', node);
        } else {
          buffer.concat("objj_msgSendSuper", node);
          if (totalNoOfParameters < 4) {
            buffer.concat("" + totalNoOfParameters);
          }
          buffer.concat(
            "({ receiver:self, super_class:" +
              (st.currentMethodType() === "+"
                ? compiler.currentSuperMetaClass
                : compiler.currentSuperClass) +
              " }",
            node
          );
        }
      } else {
        // If the recevier is not an identifier or an ivar that should have 'self.' infront we need to assign it to a temporary variable
        // If it is 'self' we assume it will never be nil and remove that test
        receiverIsIdentifier =
          nodeObject.type === "Identifier" &&
          !(
            st.currentMethodType() === "-" &&
            compiler.getIvarForClass(nodeObject.name, st) &&
            !st.getLvar(nodeObject.name, true)
          );

        if (receiverIsIdentifier) {
          const name = nodeObject.name;
          selfLvar = st.getLvar(name);

          if (name === "self") {
            receiverIsNotSelf =
              !selfLvar || !selfLvar.scope || selfLvar.scope.assignmentToSelf;
          } else {
            receiverIsNotSelf = !!selfLvar || !compiler.getClassDef(name);
          }

          if (receiverIsNotSelf) {
            buffer.concat("(", node);
            c(nodeObject, st, "Expression");
            buffer.concat(" == null ? ", node);
            c(nodeObject, st, "Expression");
            buffer.concat(" : ", node);
          }
          if (inlineMsgSend) {
            buffer.concat("(", node);
          }
          c(nodeObject, st, "Expression");
        } else {
          receiverIsNotSelf = true;
          if (!varScope.receiverLevel) varScope.receiverLevel = 0;
          buffer.concat("((___r" + ++varScope.receiverLevel, node);
          buffer.concat(" = ", node);
          c(nodeObject, st, "Expression");
          buffer.concat(")", node);
          buffer.concat(", ___r" + varScope.receiverLevel, node);
          buffer.concat(" == null ? ", node);
          buffer.concat("___r" + varScope.receiverLevel, node);
          buffer.concat(" : ", node);
          if (inlineMsgSend) {
            buffer.concat("(", node);
          }
          buffer.concat("___r" + varScope.receiverLevel, node);
          if (!(varScope.maxReceiverLevel >= varScope.receiverLevel)) {
            varScope.maxReceiverLevel = varScope.receiverLevel;
          }
        }
        if (inlineMsgSend) {
          buffer.concat('.isa.method_msgSend["', node);
          buffer.concat(selector, node);
          buffer.concat('"] || _objj_forward)', node);
        } else {
          buffer.concat(".isa.objj_msgSend", node);
        }
      }

      let selectorJSPath;

      if (!node.superObject) {
        if (!inlineMsgSend) {
          if (totalNoOfParameters < 4) {
            buffer.concat("" + totalNoOfParameters, node);
          }
        }

        if (receiverIsIdentifier) {
          buffer.concat("(", node);
          c(nodeObject, st, "Expression");
        } else {
          buffer.concat("(___r" + varScope.receiverLevel, node);
        }

        // Only do this if source map is enabled and we have an identifier
        if (options.sourceMap && nodeObject.type === "Identifier") {
          // Get target expression for sourcemap to allow hovering selector to show method function. Create new buffer to write in.
          compiler.jsBuffer = new StringBuffer();
          c(nodeObject, st, "Expression");
          const aTarget = compiler.jsBuffer.toString();
          selectorJSPath = aTarget + '.isa.method_dtable["' + selector + '"]';
          // Restored buffer so everything will continue as usually.
          compiler.jsBuffer = buffer;
        }
      }

      buffer.concat(", ", node);
      if (selectorJSPath) {
        buffer.concat("(", node);
        for (let i = 0; i < selectors.length; i++) {
          const nextSelector = selectors[i];
          if (nextSelector) {
            buffer.concat(selectorJSPath, nextSelector);
            buffer.concat(", ", node);
          }
        }
      }
      buffer.concat('"', node);

      buffer.concat(selector, node); // FIXME: sel_getUid(selector + "") ? This FIXME is from the old preprocessor compiler
      buffer.concat(selectorJSPath ? '")' : '"', node);

      if (nodeArguments) {
        for (let i = 0; i < nodeArguments.length; i++) {
          const argument = nodeArguments[i];

          buffer.concat(", ", node);
          c(argument, st, "Expression");
        }
      }

      if (parameters) {
        for (let i = 0; i < parameters.length; ++i) {
          const parameter = parameters[i];

          buffer.concat(", ", node);
          c(parameter, st, "Expression");
        }
      }

      if (!node.superObject) {
        if (receiverIsNotSelf) {
          buffer.concat(")", node);
        }
        if (!receiverIsIdentifier) {
          varScope.receiverLevel--;
        }
      }

      buffer.concat(")", node);
    },
    SelectorLiteralExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat('sel_getUid("', node);
      buffer.concat(node.selector);
      buffer.concat('")');
    },
    ProtocolLiteralExpression: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat('objj_getProtocol("', node);
      c(node.id, st, "VariablePattern");
      buffer.concat('")');
    },
    Reference: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      buffer.concat("function(__input) { if (arguments.length) return ", node);
      c(node.element, st, "Expression");
      buffer.concat(" = __input; return ");
      c(node.element, st, "Expression");
      buffer.concat("; }");
    },
    Dereference: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;

      checkCanDereference(st, node.expr);

      // @deref(y) -> y()
      // @deref(@deref(y)) -> y()()
      c(node.expr, st, "Expression");
      buffer.concat("()");
    },
    ClassStatement: function (node, st, c) {
      const compiler = st.compiler;
      const className = node.id.name;

      if (compiler.getTypeDef(className)) {
        throw compiler.error_message(
          className + " is already declared as a type",
          node.id
        );
      }

      if (!compiler.getClassDef(className)) {
        compiler.classDefs[className] = new ClassDef(false, className);
      }
      st.vars[node.id.name] = { type: "class", node: node.id };
    },
    GlobalStatement: function (node, st, c) {
      st.rootScope().vars[node.id.name] = { type: "global", node: node.id };
    },
    PreprocessStatement: ignore,
    TypeDefStatement: function (node, st, c) {
      const compiler = st.compiler;
      const buffer = compiler.jsBuffer;
      const typeDefName = node.typedefname.name;
      let typeDef = compiler.getTypeDef(typeDefName);
      const typeDefScope = new Scope(st);

      if (typeDef) {
        throw compiler.error_message(
          "Duplicate type definition " + typeDefName,
          node.typedefname
        );
      }

      if (compiler.getClassDef(typeDefName)) {
        throw compiler.error_message(
          typeDefName + " is already declared as class",
          node.typedefname
        );
      }

      buffer.concat(
        '{var the_typedef = objj_allocateTypeDef("' + typeDefName + '");',
        node
      );

      typeDef = new TypeDef(typeDefName);
      compiler.typeDefs[typeDefName] = typeDef;
      typeDefScope.typeDef = typeDef;

      buffer.concat("\nobjj_registerTypeDef(the_typedef);\n");

      buffer.concat("}");

      // Skip to the end
    },
  });

  // ObjJAcornCompiler was written by Martin Carlberg and released under

  class ObjJAcornCompiler {
    constructor(/* String */ aString, /* CFURL */ aURL, options) {
      this.source = aString;
      this.URL = aURL && aURL.toString();
      options = setupOptions(options);
      this.options = options;
      this.pass = options.pass;
      this.classDefs = options.classDefs;
      this.protocolDefs = options.protocolDefs;
      this.typeDefs = options.typeDefs;
      this.generate = options.generate;
      this.createSourceMap = options.sourceMap;
      this.formatDescription = options.formatDescription;
      this.includeComments = options.includeComments;
      this.transformNamedFunctionDeclarationToAssignment = options.transformNamedFunctionDeclarationToAssignment;
      this.jsBuffer = new StringBuffer(this.createSourceMap, aURL, options.sourceMap && options.sourceMapIncludeSource ? this.source : null);
      this.imBuffer = null;
      this.cmBuffer = null;
      this.dependencies = [];
      this.warningsAndErrors = [];
      this.lastPos = 0;

      this.indentType = ' ';
      this.indentationSpaces = 4;
      this.indentationSize = this.indentationSpaces * this.indentType.length;
      this.indentStep = Array(this.indentationSpaces + 1).join(this.indentType);
      this.indentation = '';

      // this.formatDescription = {
      //    Identifier: {before:"<before>", after:"<after>", parent: {ReturnStatement: {after:"<AFTER>", before:"<BEFORE>"}, Statement: {after:"<After>", before:"<Before>"}}},
      //    BlockStatement: {before:" ", after:"", afterLeftBrace: "\n", beforeRightBrace: "/* Before Brace */"},
      //    Statement: {before:"", after:"/*Statement after*/;\n"}
      // };

      let acornOptions = options.acornOptions;

      if (acornOptions) {
        if (this.URL) { acornOptions.sourceFile = this.URL.substr(this.URL.lastIndexOf('/') + 1); }
        if (options.sourceMap && !acornOptions.locations) { acornOptions.locations = true; }
      } else {
        acornOptions = options.acornOptions = this.URL && { sourceFile: this.URL.substr(this.URL.lastIndexOf('/') + 1) };
        if (options.sourceMap) { acornOptions.locations = true; }
      }

      if (options.macros) {
        if (acornOptions.macros) { acornOptions.macros.concat(options.macros); } else { acornOptions.macros = options.macros; }
      }

      try {
        this.tokens = parse(aString, options.acornOptions);
        this.compile(this.tokens, new Scope(null, { compiler: this }), this.pass === 2 ? pass2 : pass1);
      } catch (e) {
        const { lineStart, lineEnd } = getLineOffsets(this.source, e.pos);
        e.messageForLine = aString.substring(lineStart, lineEnd);
        this.addWarning(e);
        return
      }

      this.setCompiledCode(this.jsBuffer);
    }

    setCompiledCode(stringBuffer) {
      if (this.createSourceMap) {
        const s = stringBuffer.toString();
        this.compiledCode = s.code;
        this.sourceMap = s.map;
      } else {
        this.compiledCode = stringBuffer.toString();
      }
    }

    compilePass2() {
      const options = this.options;

      exports.currentCompileFile = this.URL;
      this.pass = options.pass = 2;
      this.jsBuffer = new StringBuffer(this.createSourceMap, this.URL, options.sourceMap && options.sourceMapIncludeSource ? this.source : null);

      // To get the source mapping correct when the new Function construtor is used we add a
      // new line as first thing in the code.
      if (this.createSourceMap) { this.jsBuffer.concat('\n\n'); }

      this.warningsAndErrors = [];
      try {
        this.compile(this.tokens, new Scope(null, { compiler: this }), pass2);
      } catch (e) {
        this.addWarning(e);
        return null
      }

      this.setCompiledCode(this.jsBuffer);

      return this.compiledCode
    }

    /*!
          Add warning or error to the list
       */
    addWarning(/* Warning */ aWarning) {
      if (aWarning.path == null) { aWarning.path = this.URL; }

      this.warningsAndErrors.push(aWarning);
    }

    getIvarForClass(/* String */ ivarName, /* Scope */ scope) {
      const ivar = scope.getIvarForCurrentClass(ivarName);

      if (ivar) { return ivar }

      let c = this.getClassDef(scope.currentClassName());

      while (c) {
        const ivars = c.ivars;
        if (ivars) {
          const ivarDef = ivars[ivarName];
          if (ivarDef) { return ivarDef }
        }
        c = c.superClass;
      }
    }

    getClassDef(/* String */ aClassName) {
      if (!aClassName) return null

      let c = this.classDefs[aClassName];

      if (c) return c

      if (typeof objj_getClass === 'function') {
        const aClass = objj_getClass(aClassName);
        if (aClass) {
          const ivars = class_copyIvarList(aClass);
          const ivarSize = ivars.length;
          const myIvars = Object.create(null);
          const protocols = class_copyProtocolList(aClass);
          const protocolSize = protocols.length;
          const myProtocols = Object.create(null);
          const instanceMethodDefs = ObjJAcornCompiler.methodDefsFromMethodList(class_copyMethodList(aClass));
          const classMethodDefs = ObjJAcornCompiler.methodDefsFromMethodList(class_copyMethodList(aClass.isa));
          const superClass = class_getSuperclass(aClass);

          for (let i = 0; i < ivarSize; i++) {
            const ivar = ivars[i];

            myIvars[ivar.name] = { type: ivar.type, name: ivar.name };
          }

          for (let i = 0; i < protocolSize; i++) {
            const protocol = protocols[i];
            const protocolName = protocol_getName(protocol);
            const protocolDef = this.getProtocolDef(protocolName);

            myProtocols[protocolName] = protocolDef;
          }

          c = new ClassDef(true, aClassName, superClass ? this.getClassDef(superClass.name) : null, myIvars, instanceMethodDefs, classMethodDefs, myProtocols);
          this.classDefs[aClassName] = c;
          return c
        }
      }

      return null
    }

    getProtocolDef(/* String */ aProtocolName) {
      if (!aProtocolName) return null

      let p = this.protocolDefs[aProtocolName];

      if (p) return p

      if (typeof objj_getProtocol === 'function') {
        const aProtocol = objj_getProtocol(aProtocolName);
        if (aProtocol) {
          const protocolName = protocol_getName(aProtocol);
          const requiredInstanceMethods = protocol_copyMethodDescriptionList(aProtocol, true, true);
          const requiredInstanceMethodDefs = ObjJAcornCompiler.methodDefsFromMethodList(requiredInstanceMethods);
          const requiredClassMethods = protocol_copyMethodDescriptionList(aProtocol, true, false);
          const requiredClassMethodDefs = ObjJAcornCompiler.methodDefsFromMethodList(requiredClassMethods);
          const protocols = aProtocol.protocols;
          const inheritFromProtocols = [];

          if (protocols) {
            for (let i = 0, size = protocols.length; i < size; i++) { inheritFromProtocols.push(this.getProtocolDef(protocols[i].name)); }
          }

          p = new ProtocolDef(protocolName, inheritFromProtocols, requiredInstanceMethodDefs, requiredClassMethodDefs);

          this.protocolDefs[aProtocolName] = p;
          return p
        }
      }

      return null
      //  protocolDef = {"name": protocolName, "protocols": Object.create(null), "required": Object.create(null), "optional": Object.create(null)};
    }

    getTypeDef(/* String */ aTypeDefName) {
      if (!aTypeDefName) { return null }

      let t = this.typeDefs[aTypeDefName];

      if (t) { return t }

      if (typeof objj_getTypeDef === 'function') {
        const aTypeDef = objj_getTypeDef(aTypeDefName);
        if (aTypeDef) {
          const typeDefName = typeDef_getName(aTypeDef);
          t = new TypeDef(typeDefName);
          this.typeDefs[typeDefName] = t;
          return t
        }
      }

      return null
    }

    // FIXME: Does not work anymore
    executable() {
      if (!this._executable) { this._executable = new Executable(this.jsBuffer ? this.jsBuffer.toString() : null, this.dependencies, this.URL, null, this); }
      return this._executable
    }

    IMBuffer() {
      return this.imBuffer
    }

    code() {
      return this.compiledCode
    }

    ast() {
      return JSON.stringify(this.tokens, null, this.indentationSpaces)
    }

    map() {
      return JSON.stringify(this.sourceMap)
    }

    prettifyMessage(/* Message */ aMessage) {
      const line = aMessage.messageForLine;
      let message = '\n' + (line || '');

      // Handle if line does not end with a new line
      if (!message.endsWith('\n')) message += '\n';
      if (line) {
        // Add spaces all the way to the column with the error/warning and mark it with a '^'
        message += (new Array((aMessage.loc.column || 0) + 1)).join(' ');
        message += (new Array(Math.min(1, line.length || 1) + 1)).join('^') + '\n';
      }
      message += (aMessage.messageType || 'ERROR') + ' line ' + (aMessage.loc?.line || aMessage.line) + ' in ' + this.URL + (aMessage.loc ? ':' + aMessage.loc.line : "") + ': ' + aMessage.message;

      return message
    }

    error_message(errorMessage, node) {
      const loc = getLineInfo(this.source, node.start);
      const { lineStart, lineEnd } = getLineOffsets(this.source, node.start);
      const syntaxError = new SyntaxError(errorMessage);

      syntaxError.loc = loc;
      syntaxError.path = this.URL;
      syntaxError.messageForNode = node;
      syntaxError.messageType = 'ERROR';
      syntaxError.messageForLine = this.source.substring(lineStart, lineEnd);

      return syntaxError
    }

    pushImport(url) {
      if (!ObjJAcornCompiler.importStack) ObjJAcornCompiler.importStack = []; // This is used to keep track of imports. Each time the compiler imports a file the url is pushed here.

      ObjJAcornCompiler.importStack.push(url);
    }

    popImport() {
      ObjJAcornCompiler.importStack.pop();
    }

    compile(node, state, visitor) {
      function c(node, st, override) {
        if (typeof visitor[override || node.type] !== 'function') {
          console.log(node.type);
          console.log(override);
          console.log(Object.keys(visitor));
        }
        visitor[override || node.type](node, st, c);
      }
      c(node, state);
    }

    compileWithFormat(node, state, visitor) {
      let lastNode, lastComment;
      function c(node, st, override) {
        const compiler = st.compiler;
        const includeComments = compiler.includeComments;
        const localLastNode = lastNode;
        const sameNode = localLastNode === node;
        lastNode = node;
        if (includeComments && !sameNode && node.commentsBefore && node.commentsBefore !== lastComment) {
          for (let i = 0; i < node.commentsBefore.length; i++) { compiler.jsBuffer.concat(node.commentsBefore[i]); }
        }
        st.pushNode(node, override);
        const formatDescription = st.formatDescription();
        // console.log("formatDescription: " + JSON.stringify(formatDescription) + ", node.type: " + node.type + ", override: " + override);
        if (!sameNode && formatDescription && formatDescription.before) { compiler.jsBuffer.concatFormat(formatDescription.before); }
        visitor[override || node.type](node, st, c, formatDescription);
        if (!sameNode && formatDescription && formatDescription.after) { compiler.jsBuffer.concatFormat(formatDescription.after); }
        st.popNode();
        if (includeComments && !sameNode && node.commentsAfter) {
          for (let i = 0; i < node.commentsAfter.length; i++) { compiler.jsBuffer.concat(node.commentsAfter[i]); }
          lastComment = node.commentsAfter;
        } else {
          lastComment = null;
        }
      }
      c(node, state);
    }
  }

  ObjJAcornCompiler.methodDefsFromMethodList = function (/* Array */ methodList) {
    const methodSize = methodList.length;
    const myMethods = Object.create(null);

    for (let i = 0; i < methodSize; i++) {
      const method = methodList[i];
      const methodName = method_getName(method);

      myMethods[methodName] = new MethodDef(methodName, method.types);
    }

    return myMethods
  };

  // This might not be used
  function compileToExecutable (/* String */ aString, /* CFURL */ aURL, options) {
    exports.currentCompileFile = aURL;
    return new ObjJAcornCompiler(aString, aURL, options).executable()
  }

  function compileToIMBuffer (/* String */ aString, /* CFURL */ aURL, options) {
    return new ObjJAcornCompiler(aString, aURL, options).IMBuffer()
  }

  function compile (/* String */ aString, /* CFURL */ aURL, options) {
    return new ObjJAcornCompiler(aString, aURL, options)
  }

  function compileFileDependencies (/* String */ aString, /* CFURL */ aURL, options) {
    exports.currentCompileFile = aURL;
    (options || (options = {})).pass = 1;
    return new ObjJAcornCompiler(aString, aURL, options)
  }

  /*!
      This function is used to calculate the number of lines that is added when a 'new Function(...) call is used.
      This is used to make sure source maps are correct
      Currently Safari is adding one line and Chrome and Firefox is adding two lines.

      We calculate this by creating a function and counts the number of new lines at the top of the function
      The result is cached so we only need to make the calculation once.
   */
  function numberOfLinesAtTopOfFunction () {
    const f = new Function('x', 'return x;'); // eslint-disable-line
    const fString = f.toString();
    const index = fString.indexOf('return x;');
    const firstPart = fString.substring(0, index);
    const numberOfLines = (firstPart.match(/\n/g) || []).length;

    ObjJAcornCompiler.numberOfLinesAtTopOfFunction = function () {
      return numberOfLines
    };

    return numberOfLines
  }

  /*!
      Return a parsed option dictionary
   */
  function parseGccCompilerFlags (/* String */ compilerFlags) {
    const args = (compilerFlags || '').split(' ');
    const count = args.length;
    const objjcFlags = {};

    for (let index = 0; index < count; ++index) {
      const argument = args[index];

      if (argument.indexOf('-g') === 0) { objjcFlags.includeMethodFunctionNames = true; } else if (argument.indexOf('-O') === 0) {
        objjcFlags.compress = true; // This is not used in the compiler option dictionary but we add it here as it is also done if compiling from command line.
        // FIXME: currently we are sending in '-O2' when we want InlineMsgSend. Here we only check if it is '-O...'.
        // Maybe we should have some other option for this
        if (argument.length > 2) objjcFlags.inlineMsgSendFunctions = true;
      } else if (argument.indexOf('-T') === 0) {
        // else if (argument.indexOf("-G") === 0)
        // objjcFlags |= ObjJAcornCompiler.Flags.Generate;
        objjcFlags.includeIvarTypeSignatures = false;
        objjcFlags.includeMethodArgumentTypeSignatures = false;
      } else if (argument.indexOf('-S') === 0) {
        objjcFlags.sourceMap = true;
        objjcFlags.sourceMapIncludeSource = true;
      } else if (argument.indexOf('--include') === 0) {
        let includeUrl = args[++index];
        const firstChar = includeUrl && includeUrl.charCodeAt(0);

        // Poor mans unquote
        if (firstChar === 34 || firstChar === 39) { // '"', "'"
          includeUrl = includeUrl.substring(1, includeUrl.length - 1);
        }
        (objjcFlags.includeFiles || (objjcFlags.includeFiles = [])).push(includeUrl);
      } else if (argument.indexOf('--inline-msg-send') === 0) {
        // This option is if you only want to inline message send functions
        objjcFlags.inlineMsgSendFunctions = true;

      /*          else if (argument.indexOf("-I") === 0) {
                      var includeUrl = argument.substring(2),
                          firstChar = includeUrl && includeUrl.charCodeAt(0);

                      (objjcFlags.includeFiles || (objjcFlags.includeFiles = [])).push(includeUrl);
                  }
                  else if (argument.indexOf("'-I") === 0) {
                      var includeUrl = argument.substring(3, argument.length - 1),
                          firstChar = includeUrl && includeUrl.charCodeAt(0);

                      (objjcFlags.includeFiles || (objjcFlags.includeFiles = [])).push(includeUrl);
                  }
                  else if (argument.indexOf('"-I') === 0) {
                      var includeUrl = argument.substring(3, argument.length - 1),
                          firstChar = includeUrl && includeUrl.charCodeAt(0);

                      (objjcFlags.includeFiles || (objjcFlags.includeFiles = [])).push(includeUrl);
                  } */
      } else if (argument.indexOf('-D') === 0) {
        const macroDefinition = argument.substring(2);

        (objjcFlags.macros || (objjcFlags.macros = [])).push(macroDefinition);
      } else if (argument.indexOf('-W') === 0) {
        // TODO: Check if the warning name is a valid one. Now we just grab what is written and set/remove it.
        const isNo = argument.indexOf('no-', 2) === 2;
        const warningName = argument.substring(isNo ? 5 : 2);
        const indexOfWarning = (objjcFlags.warnings || (objjcFlags.warnings = defaultOptions.warnings.slice())).findIndex(function (element) { return element.name === warningName });

        if (isNo) {
          if (indexOfWarning !== -1) {
            // remove if it exists
            objjcFlags.warnings.splice(indexOfWarning, 1);
          }
        } else {
          if (indexOfWarning === -1) {
            // Add if it does not exists
            const theWarning = AllWarnings.find(function (element) { return element.name === warningName });
            if (theWarning) objjcFlags.warnings.push(theWarning);
          }
        }
      }
    }

    return objjcFlags
  }

  exports.compile = compile;
  exports.compileFileDependencies = compileFileDependencies;
  exports.compileToExecutable = compileToExecutable;
  exports.compileToIMBuffer = compileToIMBuffer;
  exports.numberOfLinesAtTopOfFunction = numberOfLinesAtTopOfFunction;
  exports.parseGccCompilerFlags = parseGccCompilerFlags;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=objj-transpiler.cjs.map

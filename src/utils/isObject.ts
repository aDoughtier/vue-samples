const typeString = Object.prototype.toString
export const isArray = (obj: any): obj is any[] => typeString.call(obj) === '[object Array]'
export const isObject = (obj: any) => typeString.call(obj) === '[object Object]'
export const isString = (obj: any) => typeString.call(obj) == '[object String]'
export const isNumber = (obj: any) => typeString.call(obj) == '[object Number]'
export const isFile = (obj: any) => typeString.call(obj) == '[object File]'
export const isBlob = (obj: any) => typeString.call(obj) == '[object Blob]'
export const isRegExp = (obj: any) => typeString.call(obj) == '[object RegExp]'
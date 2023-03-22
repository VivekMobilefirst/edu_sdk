/**
 * 返回错误提示信息
 * @param error
 * @returns
 */
export declare const getEduErrorMessage: (error: Error) => string | null;
/**
 * 如果Error中包含有服务端错误码，则返回服务端错误码
 * @param error
 * @returns
 */
export declare const getErrorServCode: (error: Error) => any;

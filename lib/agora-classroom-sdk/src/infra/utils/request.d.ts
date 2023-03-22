export interface Response<T = unknown> {
    code: string;
    msg: string;
    data: T;
}
export declare const request: import("axios").AxiosInstance;

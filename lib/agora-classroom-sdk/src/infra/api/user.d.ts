import { Response } from '@/infra/utils/request';
interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}
interface GetUserInfoResponse {
    companyId: string;
    companyName: string;
    userId: string;
    language: string;
}
interface GetAuthorizedURLRequest {
    redirectUrl: string;
    toRegion?: string;
}
export declare class UserApi {
    static shared: UserApi;
    static get access_token(): any;
    static get refresh_token(): any;
    get domain(): string;
    static saveAccessToken(value: string): void;
    static saveRefreshToken(value: string): void;
    getAuthorizedURL(params: GetAuthorizedURLRequest): Promise<string>;
    redirectLogin(): Promise<void>;
    logout(): Promise<void>;
    getUserInfo(): Promise<GetUserInfoResponse>;
    refreshToken(): Promise<Response<RefreshTokenResponse>>;
}
export {};

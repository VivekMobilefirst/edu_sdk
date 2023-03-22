import { EduRegion } from 'agora-edu-core';
export declare class HomeApi {
    static shared: HomeApi;
    domain: string;
    builderDomain: string;
    loginV3(userUuid: string, roomUuid: string, role: number): Promise<{
        appId: string;
        roomUuid: string;
        userUuid: string;
        role: number;
        token: string;
    }>;
    login(userUuid: string, roomUuid: string, role: number): Promise<{
        appId: string;
        roomUuid: string;
        userUuid: string;
        role: number;
        token: string;
    }>;
    getRecordations(roomUuid: string): Promise<any>;
    getBuilderResource(companyId: string, projectId: string): Promise<any>;
    setDomainRegion(region: EduRegion): void;
    setBuilderDomainRegion(region: EduRegion): void;
}

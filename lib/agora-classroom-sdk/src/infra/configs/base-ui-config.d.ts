import { FcrEngagement, FcrExtension, FcrFooter, FcrHeader, FcrStage, FcrUIConfig } from '@/infra/types/config';
declare class FcrUIConfigImpl implements FcrUIConfig {
    get version(): string;
    get name(): string;
    get header(): FcrHeader;
    get stage(): FcrStage;
    get engagement(): FcrEngagement;
    get footer(): FcrFooter;
    get extension(): FcrExtension;
}
export declare const room1V1Class: FcrUIConfigImpl;
export declare const roomMidClass: FcrUIConfigImpl;
export declare const roomBigClass: FcrUIConfigImpl;
export {};

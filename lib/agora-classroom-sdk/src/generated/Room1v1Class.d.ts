import { FcrEngagement, FcrExtension, FcrFooter, FcrHeader, FcrStage, FcrUIConfig } from '@/infra/types/config';
export declare class FcrUIConfigImpl implements FcrUIConfig {
    get version(): string;
    get name(): string;
    get extension(): FcrExtension;
    get engagement(): FcrEngagement;
    get stage(): FcrStage;
    get header(): FcrHeader;
    get footer(): FcrFooter;
}

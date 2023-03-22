import { AgoraWidgetController } from 'agora-edu-core';
import { CabinetItem } from '../stores/common/type';
import { FcrBoardH5WindowConfig, FcrBoardMaterialWindowConfig, FcrBoardMediaWindowConfig, StreamMediaPlayerOpenParams, WebviewOpenParams } from './type';
export declare class Extension {
    private logger;
    private _controller?;
    private _registeredCabinetItems;
    get cabinetItems(): CabinetItem[];
    install(controller: AgoraWidgetController): void;
    uninstall(): void;
    private _handleRegisterCabinetTool;
    private _handleUnregisterCabinetTool;
    openWebview(params: WebviewOpenParams): void;
    openMediaStreamPlayer(params: StreamMediaPlayerOpenParams): void;
    openMaterialResourceWindow(resource: FcrBoardMaterialWindowConfig): void;
    openMediaResourceWindow(resource: FcrBoardMediaWindowConfig): void;
    openH5ResourceWindow(resource: FcrBoardH5WindowConfig): void;
    private _broadcastMessage;
}

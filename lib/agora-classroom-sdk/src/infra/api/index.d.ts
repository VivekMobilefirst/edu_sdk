import { CloudDriveResource, EduRoomTypeEnum } from 'agora-edu-core';
import { FcrTheme } from '~ui-kit';
import { FcrUIConfig } from '../types/config';
import './polyfills';
import { AgoraWidgetBase, BoardWindowAnimationOptions, ConfigParams, LaunchOption, LaunchWindowOption } from './type';
export * from './type';
export declare class AgoraEduSDK {
    private static _config;
    private static _widgets;
    private static _coursewareList;
    private static _boardWindowAnimationOptions;
    private static _language;
    private static _appId;
    private static _uiConfig;
    private static _theme;
    private static _shareUrl;
    private static region;
    private static _convertRegion;
    private static _convertMediaOptions;
    static setParameters(params: string): void;
    static getLoadedScenes(): {
        name: string;
        roomType: EduRoomTypeEnum;
    }[];
    static config(config: ConfigParams): void;
    static get widgets(): Record<string, typeof AgoraWidgetBase>;
    static get courseWareList(): CloudDriveResource[];
    static get boardWindowAnimationOptions(): BoardWindowAnimationOptions;
    static get language(): string;
    static get uiConfig(): FcrUIConfig;
    static get theme(): FcrTheme;
    static get shareUrl(): string;
    private static _validateOptions;
    private static _getWidgetName;
    static launch(dom: HTMLElement, option: LaunchOption): void;
    /**
     * 运行窗口UI
     * @param dom
     * @param option
     * @returns
     */
    static launchWindow(dom: HTMLElement, option: LaunchWindowOption): () => void;
    private static _selectUITheme;
    private static _setRecordReady;
}

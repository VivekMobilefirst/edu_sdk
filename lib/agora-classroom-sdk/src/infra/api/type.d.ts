import { AgoraEduClassroomEvent, EduRoleTypeEnum, EduRoomServiceTypeEnum, EduRoomSubtypeEnum, EduRoomTypeEnum, EduRtcConfig, Platform } from 'agora-edu-core';
import { EduVideoEncoderConfiguration, MediaOptions } from 'agora-rte-sdk';
import { CloudDriveResourceConvertProgress } from '../stores/common/cloud-drive/type';
import { AgoraWidgetBase } from '../stores/common/widget/widget-base';
import { FcrMultiThemeMode } from '../types/config';
export declare type AgoraRegion = Uppercase<AgoraRegionString>;
export declare const regionMap: {
    readonly AP: "sg";
    readonly CN: "cn-hz";
    readonly EU: "gb-lon";
    readonly NA: "us-sv";
};
export declare type AgoraRegionString = 'cn' | 'ap' | 'na' | 'eu';
export declare type ListenerCallback = (evt: AgoraEduClassroomEvent, ...args: any[]) => void;
export declare enum WindowID {
    Main = "main",
    RemoteControlBar = "remote-control-bar"
}
export declare type LanguageEnum = 'en' | 'zh';
export declare type TranslateEnum = '' | 'auto' | 'zh-CHS' | 'en' | 'ja' | 'ko' | 'fr' | 'es' | 'pt' | 'it' | 'ru' | 'vi' | 'de' | 'ar';
export declare type ConfigParams = {
    appId: string;
    region?: string;
};
export declare type LaunchMediaOptions = MediaOptions & {
    lowStreamCameraEncoderConfiguration?: EduVideoEncoderConfiguration;
};
export declare type ConvertMediaOptionsConfig = EduRtcConfig & {
    defaultLowStreamCameraEncoderConfigurations?: EduVideoEncoderConfiguration;
};
/**
 * LaunchOption 接口
 */
export declare type LaunchOption = {
    userUuid: string;
    userName: string;
    roomUuid: string;
    roleType: EduRoleTypeEnum;
    roomType: EduRoomTypeEnum;
    roomSubtype?: EduRoomSubtypeEnum;
    roomServiceType?: EduRoomServiceTypeEnum;
    roomName: string;
    listener: ListenerCallback;
    pretest: boolean;
    rtmToken: string;
    language: LanguageEnum;
    startTime?: number;
    duration: number;
    courseWareList: CourseWareList;
    recordUrl?: string;
    widgets?: {
        [key: string]: typeof AgoraWidgetBase;
    };
    userFlexProperties?: {
        [key: string]: any;
    };
    mediaOptions?: LaunchMediaOptions;
    latencyLevel?: 1 | 2;
    platform?: Platform;
    recordOptions?: BoardWindowAnimationOptions;
    recordRetryTimeout?: number;
    uiMode?: FcrMultiThemeMode;
    shareUrl?: string;
};
/**
 *  运行窗口选项
 */
export declare type LaunchWindowOption = {
    windowID: WindowID;
    language: LanguageEnum;
    args: any;
    roomType: EduRoomTypeEnum;
    uiMode: FcrMultiThemeMode;
};
export { AgoraWidgetBase } from '../stores/common/widget/widget-base';
export type { AgoraMultiInstanceWidget, AgoraTrackSyncedWidget, AgoraWidgetLifecycle, AgoraWidgetRenderable, } from '../stores/common/widget/widget-base';
export { AgoraWidgetTrackMode } from '../stores/common/widget/type';
export { AgoraExtensionRoomEvent, AgoraExtensionWidgetEvent } from '../protocol/events';
export declare type CourseWareItem = {
    resourceName: string;
    resourceUuid: string;
    ext: string;
    url?: string;
    size: number;
    updateTime: number;
    taskUuid?: string;
    taskProgress?: CloudDriveResourceConvertProgress;
    conversion?: {
        outputFormat: string;
        preview: boolean;
        scale: number;
        type: 'dynamic' | 'static';
        canvasVersion: boolean;
    };
    initOpen?: boolean;
};
export declare type CourseWareList = CourseWareItem[];
export declare type BoardWindowAnimationOptions = {
    minFPS?: number;
    maxFPS?: number;
    resolution?: number;
    autoResolution?: boolean;
    autoFPS?: boolean;
};

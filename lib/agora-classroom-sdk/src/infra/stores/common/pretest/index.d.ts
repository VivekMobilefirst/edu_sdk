import { AgoraRteMediaSourceState } from 'agora-rte-sdk';
import { EduUIStoreBase } from '../base';
import { CameraPlaceholderType } from '../type';
import { BeautyType } from 'agora-edu-core';
export declare type PretestToast = {
    id: string;
    type: 'video' | 'audio_recording' | 'audio_playback' | 'error';
    info: string;
};
declare type AddToastArgs = Omit<PretestToast, 'id'>;
export declare class PretestUIStore extends EduUIStoreBase {
    private readonly _disposers;
    onInstall(): void;
    /**
     * 交互事件通知
     * @param type
     */
    private _handleInteractionEvents;
    private _timer;
    /**
     * Toast 消息列表
     */
    toastQueue: PretestToast[];
    /**
     * 美颜类型
     */
    activeBeautyType: BeautyType;
    /**
     * 是否正在测试扬声器
     */
    playbackTesting: boolean;
    /**
     * 视频消息 Toast 列表
     * @returns
     */
    get videoToastQueue(): PretestToast[];
    /**
     * 扬声器消息 Toast 列表
     * @returns
     */
    get audioPlaybackToastQueue(): PretestToast[];
    /**
     * 麦克风消息 Toast 列表
     * @returns
     */
    get audioRecordingToastQueue(): PretestToast[];
    /**
     * 错误消息 Toast 列表
     * @returns
     */
    get errorToastQueue(): PretestToast[];
    /**
     * 摄像头设备列表
     * @returns
     */
    get cameraDevicesList(): {
        label: string;
        value: string;
    }[];
    /**
     * 麦克风设备列表
     * @returns
     */
    get recordingDevicesList(): {
        label: string;
        value: string;
    }[];
    /**
     * 扬声器设备列表
     * @returns
     */
    get playbackDevicesList(): {
        label: string;
        value: string;
    }[];
    /**
     * 当前摄像头设备ID
     * @returns
     */
    get currentCameraDeviceId(): string;
    /**
     * 当前麦克风设备ID
     * @returns
     */
    get currentRecordingDeviceId(): string;
    /**
     * 当前扬声器设备ID
     * @returns
     */
    get currentPlaybackDeviceId(): string;
    /**
     * 麦克风音量
     * @returns 音量 0 ~ 1
     */
    get localVolume(): number;
    /**
     * 扬声器测试音量
     * @returns 音量 0 ~ 1
     */
    get localPlaybackTestVolume(): number;
    /**
     * 本地摄像头设备状态
     * @returns
     */
    get localCameraTrackState(): AgoraRteMediaSourceState;
    /**
     * 本地麦克风设备状态
     * @returns
     */
    get localMicTrackState(): AgoraRteMediaSourceState;
    /**
     * 本地摄像头是否开启
     * @returns
     */
    get localCameraOff(): boolean;
    /**
     * 本地麦克风设备是否开启
     * @returns
     */
    get localMicOff(): boolean;
    /**
     * 本地音频设备状态显示的 Icon 类型
     * microphone-off 麦克风开启
     * microphone-on  麦克风关闭
     * @returns Icon 类型
     */
    get localMicIconType(): "microphone-off" | "microphone-on";
    /**
     * 本地视频状态显示的占位符类型
     * @returns
     */
    get localCameraPlaceholder(): CameraPlaceholderType;
    /**
     * @ignore
     */
    get disable(): boolean;
    /**
     * 是否开启镜像
     * @returns
     */
    get isMirror(): boolean;
    /**
     * 是否开启美颜
     * @returns
     */
    get isBeauty(): boolean;
    /**
     * 美白参数 (0 ~ 100)
     * @returns
     */
    get whiteningValue(): number;
    /**
     * 红润参数 (0 ~ 100)
     * @returns
     */
    get ruddyValue(): number;
    /**
     * 磨皮参数 (0 ~ 100)
     * @returns
     */
    get buffingValue(): number;
    /**
     * 美颜调整参数类型
     * @returns
     */
    get activeBeautyValue(): number;
    /**
     * 美颜类型 Icon
     */
    activeBeautyTypeIcon: (item: any) => {
        icon: any;
        color: string;
    };
    /**
     * 显示 Toast 信息
     * @param toast
     */
    addToast(toast: AddToastArgs): void;
    /**
     * 移除 Toast 信息
     * @param id
     * @returns
     */
    removeToast(id: string): string;
    /**
     * 设置镜像开启或关闭
     * @param v 开启或关闭
     */
    setMirror(v: boolean): void;
    /**
     * 设置美颜开启或关闭
     * @param v
     */
    setBeauty(v: boolean): void;
    /**
     * 开始扬声器测试
     * @param url
     */
    startPlaybackDeviceTest(url: string): void;
    /**
     * 停止扬声器测试
     */
    stopPlaybackDeviceTest(): void;
    /**
     * 开始麦克风测试
     */
    startRecordingDeviceTest(): void;
    /**
     * 停止麦克风测试
     */
    stopRecordingDeviceTest(): void;
    /**
     * 打开本地摄像头
     * @param value 开启或关闭
     */
    enableLocalVideo(value: boolean): void;
    /**
     * 打开本地麦克风
     * @param value 开启或关闭
     */
    enableLocalAudio(value: boolean): void;
    /**
     * 设置当前使用摄像头设备
     * @param id
     */
    setCameraDevice(id: string): void;
    /**
     * 设置当前使用麦克风设备
     * @param id
     */
    setRecordingDevice(id: string): void;
    /**
     * 设置美颜类型
     * @param value
     */
    setActiveBeautyType(value: BeautyType): void;
    /**
     * 设置美颜参数
     * @param value (0 ~ 100)
     */
    setActiveBeautyValue(value: number): void;
    /**
     * 设置当前使用扬声器设备
     * @param id
     */
    setPlaybackDevice(id: string): void;
    /**
     * 渲染本地视频
     * @param dom
     * @param mirror
     */
    setupLocalVideo(dom: HTMLElement, mirror: boolean): void;
    onDestroy(): void;
}
export {};

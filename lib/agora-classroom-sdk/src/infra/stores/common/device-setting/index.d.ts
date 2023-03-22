import { AgoraRteMediaSourceState } from 'agora-rte-sdk';
import { EduUIStoreBase } from '../base';
import { CameraPlaceholderType } from '../type';
import { ClassroomState } from 'agora-edu-core';
export declare type SettingToast = {
    id: string;
    type: 'video' | 'audio_recording' | 'audio_playback' | 'error';
    info: string;
};
declare type AddToastArgs = Omit<SettingToast, 'id'>;
export declare class DeviceSettingUIStore extends EduUIStoreBase {
    private _disposers;
    onInstall(): void;
    /**
     * Toast 消息列表
     */
    toastQueue: SettingToast[];
    /**
     * 过滤类型为 error 的 toast 消息列表
     * @returns 过滤后的 Toast 消息列表
     */
    get errorToastQueue(): SettingToast[];
    /**
     * 获取视频设备信息
     **/
    /** @en
     * get camera accessors
     */
    get cameraAccessors(): {
        classroomState: ClassroomState;
        cameraDeviceId: string | undefined;
        localCameraStreamUuid: string | undefined;
    };
    /**
     * 音频设备信息
     **/
    /** @en
     * mic Accessors
     */
    get micAccessors(): {
        classroomState: ClassroomState;
        recordingDeviceId: string | undefined;
        localMicStreamUuid: string | undefined;
    };
    /**
     * 摄像头设备信息
     * @returns 设备列表
     */
    get cameraDevicesList(): {
        label: string;
        value: string;
    }[];
    /**
     * 麦克风设备信息
     * @returns 设备列表
     */
    get recordingDevicesList(): {
        label: string;
        value: string;
    }[];
    /**
     *
     * 扬声器设备
     * @returns 设备列表
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
     * 是否可设置隐藏/显示讲台区域
     */
    get deviceStage(): boolean | undefined;
    /**
     * 讲台状态
     */
    get stageVisible(): any;
    /**
     * 本地视频状态显示的占位符类型
     * @returns
     */
    get localCameraPlaceholder(): CameraPlaceholderType;
    /**
     * 是否开启镜像
     * @returns
     */
    get isMirror(): boolean;
    /**
     * 显示一个 Toast 提示
     * @param toast
     */
    addToast(toast: AddToastArgs): void;
    /**
     * 隐藏一个 Toast 提示
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
     * 设置当前使用扬声器设备
     * @param id
     */
    setPlaybackDevice(id: string): void;
    toggleCamera(): void;
    /**
     * 设置讲台开关
     * 停止轮询 业务逻辑
     * @param stage
     */
    setStageVisible(stage: boolean): void;
    private _enableLocalVideo;
    private _enableLocalAudio;
    onDestroy(): void;
}
export {};

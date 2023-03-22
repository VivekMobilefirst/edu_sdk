import { AgoraRteMediaSourceState, AGRenderMode } from 'agora-rte-sdk';
import { IReactionDisposer, Lambda } from 'mobx';
import { EduUIStoreBase } from '../base';
import { CameraPlaceholderType } from '../type';
import { EduStreamUI, StreamBounds } from './struct';
import { EduStreamTool } from './tool';
import { EduStream } from 'agora-edu-core';
export declare enum StreamIconColor {
    active = "#357bf6",
    deactive = "#bdbdca",
    activeWarn = "#f04c36"
}
export declare class StreamUIStore extends EduUIStoreBase {
    protected _disposers: (IReactionDisposer | Lambda)[];
    /**
     * 视频窗位置信息
     */
    /** @en
     * video stream bounds
     */
    streamsBounds: Map<string, StreamBounds>;
    /**
     * 视频窗口ID列表
     */
    /** @en
     * video stream ID list
     */
    streamWindowUserUuids: string[];
    onInstall(): void;
    private _setRenderAt;
    private _handleStreamWindowListChange;
    /**
     * 奖励信息
     */
    awardAnims: {
        id: string;
        userUuid: string;
    }[];
    /**
     * 分离窗口视频流
     * @returns
     */
    get allUIStreams(): Map<string, EduStreamUI>;
    /**
     * 老师流信息列表
     * @returns
     */
    get teacherStreams(): Set<EduStreamUI>;
    /**
     * 助教流信息列表
     * @returns
     */
    get assistantStreams(): Set<EduStreamUI>;
    /**
     * 学生流信息列表
     * @returns
     */
    get studentStreams(): Set<EduStreamUI>;
    /**
     * 老师流信息（教室内只有一个老师时使用，如果有一个以上老师请使用 teacherStreams）
     * @returns
     */
    get teacherCameraStream(): EduStreamUI | undefined;
    /**
     * 学生流信息（教室内只有一个学生时使用，如果有一个以上老师请使用 studentStreams）
     * @returns
     */
    get studentCameraStream(): EduStreamUI | undefined;
    get screenShareStream(): EduStream | undefined;
    /**
     * 老师屏幕共享流信息
     * @returns
     */
    get teacherScreenShareStream(): EduStreamUI | undefined;
    /**
     * 获取远端流音量
     * @returns
     */
    remoteStreamVolume: (stream: EduStreamUI) => number;
    /**
     * 本地音量
     * @returns
     */
    get localVolume(): number;
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
     * 本地屏幕共享状态
     * @returns
     */
    get localScreenShareOff(): boolean;
    /**
     * 本地摄像头设备是否关闭
     * @returns
     */
    get localCameraOff(): boolean;
    /**
     * 本地麦克风设备是否关闭
     * @returns
     */
    get localMicOff(): boolean;
    /**
     * 镜像是否开启
     * @returns
     */
    get isMirror(): boolean;
    /**
     * 白板授权用户列表
     * @returns
     */
    get whiteboardGrantUsers(): Set<string>;
    /**
     * 视频窗口显示的挂件信息
     * reward: 奖励信息
     * grant: 授权状态
     * @returns
     */
    get layerItems(): string[];
    /**
     * 远端流是否正在举手
     * @returns
     */
    isWaveArm: (stream: EduStreamUI) => boolean;
    /**
     * 远端流奖励信息
     * @returns
     */
    awards: (stream: EduStreamUI) => number;
    /**
     * 远端流奖励动画列表
     * @returns
     */
    streamAwardAnims: (stream: EduStreamUI) => {
        id: string;
        userUuid: string;
    }[];
    /**
     * 本地视频窗摄像头
     * @returns
     */
    localCameraTool: () => EduStreamTool;
    /**
     * 本地视频窗麦克风
     * @returns
     */
    localMicTool: () => EduStreamTool;
    /**
     * 本地视频窗上下台
     * @returns
     */
    localPodiumTool: () => EduStreamTool;
    /**
     * 远端视频窗摄像头
     * @returns
     */
    remoteCameraTool: (stream: EduStreamUI) => EduStreamTool;
    /**
     * 远端视频窗麦克风
     * @returns
     */
    remoteMicTool: (stream: EduStreamUI) => EduStreamTool;
    /**
     * 远端视频窗上下台
     * @returns
     */
    remotePodiumTool: (stream: EduStreamUI) => EduStreamTool;
    /**
     * 远端视频窗白板授权
     * @returns
     */
    remoteWhiteboardTool: (stream: EduStreamUI) => EduStreamTool;
    /**
     * 远端视频窗奖励
     * @returns
     */
    remoteRewardTool: (stream: EduStreamUI) => EduStreamTool;
    /**
     * 本地视频窗工具列表
     * @returns
     */
    get localStreamTools(): EduStreamTool[];
    /**
     * 远端视频窗工具列表
     * @returns
     */
    remoteStreamTools: (stream: EduStreamUI) => EduStreamTool[];
    /**
     * 本地音频图标
     * @returns
     */
    get localMicIconType(): "microphone-off" | "microphone-on";
    /**
     * 本地视频占位符
     * @returns
     */
    cameraPlaceholder: (stream: EduStreamUI) => CameraPlaceholderType;
    /**
     * 视频窗工具栏定位
     * @returns
     */
    get toolbarPlacement(): 'left' | 'bottom';
    /**
     * 视频窗工具栏定位
     * @returns
     */
    get toolbarOffset(): number[];
    /**
     * 大窗视频窗工具栏定位
     * @returns
     */
    get fullScreenToolbarPlacement(): 'left' | 'bottom';
    /**
     * 大窗视频窗工具栏定位
     * @returns
     */
    get fullScreenToolbarOffset(): number[];
    /**
     * 移除奖励动画
     * @param id
     */
    removeAward(id: string): void;
    /**
     * 切换本地摄像头设备开关状态
     */
    toggleLocalVideo(): void;
    /**
     * 切换本地麦克风设备开关状态
     */
    toggleLocalAudio(): void;
    /**
     * 渲染本地 Stream 视频到 DOM
     * @param stream
     * @param dom
     * @param mirror
     * @returns
     */
    setupLocalVideo(dom: HTMLElement, mirror?: boolean): void;
    /**
     * 渲染远端 Stream 视频到 DOM
     * @param stream
     * @param dom
     * @param mirror
     * @param renderMode
     * @returns
     */
    setupRemoteVideo(stream: EduStream, dom: HTMLElement, mirror: boolean, renderMode?: AGRenderMode): void;
    /**
     * 渲染本地屏幕共享到 DOM
     * @param dom
     */
    setupLocalScreenShare(dom: HTMLElement): void;
    /**
     * 停止屏幕视频采集
     * @returns
     */
    stopScreenShareCapture(): void;
    setStreamBoundsByStreamUuid(streamUuid: string, bounds: StreamBounds): void;
    removeStreamBoundsByStreamUuid(streamUuid: string): void;
    onDestroy(): void;
}

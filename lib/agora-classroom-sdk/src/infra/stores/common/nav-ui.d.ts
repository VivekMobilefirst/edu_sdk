import { ClassState, RecordMode, RecordStatus } from 'agora-edu-core';
import { AGNetworkQuality } from 'agora-rte-sdk';
import { SvgIconEnum } from '~ui-kit';
import { EduUIStoreBase } from './base';
export interface EduNavAction<P = undefined> {
    id: 'Record' | 'AskForHelp' | 'Settings' | 'Exit' | 'Camera' | 'Mic' | 'Share';
    title: string;
    iconType: SvgIconEnum;
    iconColor?: string;
    onClick?: () => void;
    payload?: P;
}
export interface EduNavRecordActionPayload {
    text: string;
    recordStatus: RecordStatus;
}
export declare enum TimeFormatType {
    Timeboard = 0,
    Message = 1
}
export declare class NavigationBarUIStore extends EduUIStoreBase {
    private _disposers;
    onInstall(): void;
    teacherStreamWindow: boolean;
    shareVisible: boolean;
    /**
     * 准备好挂载到 DOM
     * @returns
     */
    get readyToMount(): boolean;
    get recordStatus(): RecordStatus;
    get isRecording(): boolean;
    get isRecordStarting(): boolean;
    get isRecordStoped(): boolean;
    /**
     * 本地摄像头设备是否关闭
     * @returns
     */
    get localCameraOff(): boolean;
    /**
     * 本地麦克风设备是否关闭
     */
    get localMicOff(): boolean;
    /**
     * 当前 camera 的状态根据讲台的隐藏展示 + camera 的状态来更新状态
     * stage --> 讲台
     * camera --> camera 状态
     *
     * stage === true 那么控制摄像头开关
     * stage === flase 控制老师窗口的展示和关闭
     */
    get localNavCameraOff(): boolean;
    /**
     * 顶部导航栏按钮列表
     * @returns
     */
    get actions(): EduNavAction<EduNavRecordActionPayload | undefined>[];
    get teacherInCurrentRoom(): boolean | "" | undefined;
    /**
     * 老师所在房间
     */
    get teacherGroupUuid(): string | false | undefined;
    /**
     * 教室时间信息
     * @returns
     */
    get classroomSchedule(): import("agora-edu-core/lib/stores/domain/common/room/type").ClassroomSchedule;
    /**
     * 教室状态
     * @returns
     */
    get classState(): ClassState | undefined;
    /**
     * 服务器时间
     * @returns
     */
    get calibratedTime(): number;
    /**
     * 教室持续时间
     * @returns
     */
    get classTimeDuration(): number;
    /**
     * 教室状态文字
     * @returns
     */
    get classStatusText(): string;
    /**
     * 教室状态文字颜色
     * @returns
     */
    get classStatusTextColor(): "#F04C36" | "#677386" | undefined;
    /**
     * 是否为开始上课
     * @returns
     */
    get isBeforeClass(): boolean;
    /**
     * 网络质量状态
     * @returns
     */
    get networkQualityClass(): string;
    /**
     * 网络质量状态图标
     * @returns
     */
    get networkQualityIcon(): {
        icon: SvgIconEnum;
        color: string;
    };
    /**
     * 网络质量状态
     * @returns
     */
    get networkQualityLabel(): string;
    /**
     * CPU 用量
     * @returns
     */
    get cpuValue(): number;
    /**
     * CPU 负载百分比
     * @returns
     */
    get cpuLabel(): string;
    /**
     * 丢包率
     * @returns
     */
    get packetLoss(): string;
    /**
     * 网络质量状态
     * @returns
     */
    get networkQuality(): AGNetworkQuality;
    /**
     * 网络延时
     * @returns
     */
    get delay(): string;
    /**
     * 导航栏标题
     * @returns
     */
    get navigationTitle(): string;
    /**
     * 当前屏幕分享人名称
     */
    get currScreenShareTitle(): string | undefined;
    /**
     * 所在房间名称
     */
    get currentSubRoomName(): string | null | undefined;
    get recordArgs(): {
        webRecordConfig: {
            rootUrl: string;
            videoBitrate: number;
        };
        mode: RecordMode;
        retryTimeout: number;
    };
    /**
     * 倒计时格式化
     * @param time
     * @param mode
     * @returns
     */
    formatCountDown(time: number, mode: TimeFormatType): string;
    closeShare(): void;
    /**
     * 开始上课
     */
    startClass(): Promise<void>;
    /**
     * 切换本地摄像头设备开关状态
     */
    private _toggleLocalVideo;
    /**
     * 切换本地麦克风设备开关状态
     */
    private _toggleLocalAudio;
    /**
     * 打开关闭老师的 streamWindow
     */
    _toggleStreamWindow(): void;
    /**
     * stage === true 那么控制摄像头开关
     * stage === flase 控制老师窗口的展示和关闭
     */
    private _toggleNavCamera;
    private _handleStreamWindowChange;
    private _leaveSubRoom;
    onDestroy(): void;
}

import { EduRoleTypeEnum } from 'agora-edu-core';
/**
 * 视频流占位符类型
 */
export declare enum CameraPlaceholderType {
    /**
     * 摄像头打开
     */
    none = "none",
    /**
     * 设备正在打开
     */
    loading = "loading",
    /**
     * 摄像头关闭
     */
    muted = "muted",
    /**
     * 摄像头损坏
     */
    broken = "broken",
    /**
     * 摄像头禁用
     */
    disabled = "disabled",
    /**
     * 老师不在教室
     */
    notpresent = "notpresent",
    /**
     * 老师摄像头占位符（大小窗场景）
     */
    nosetup = "nosetup"
}
export declare enum DeviceStateChangedReason {
    cameraFailed = "pretest.device_not_working",
    micFailed = "pretest.device_not_working",
    newDeviceDetected = "new_device_detected",
    cameraUnplugged = "pretest.camera_move_out",
    micUnplugged = "pretest.mic_move_out",
    playbackUnplugged = "pretest.playback_move_out"
}
export interface WidgetTrackStruct {
    state: number;
    position: {
        xaxis: number;
        yaxis: number;
    };
    size: {
        width: number;
        height: number;
    };
    extra: {
        contain: boolean;
        zIndex: number;
        userUuid: string;
        [key: string]: any;
    };
}
export declare enum RemoteControlBarUIParams {
    width = 262,
    height = 92
}
export declare enum OnPodiumStateEnum {
    /**
     * 正在台上
     */
    onPodiuming = 1,
    /**
     * 正在挥手
     */
    waveArming = 2,
    /**
     * 正在被邀请
     */
    inviteding = 3,
    /**
     * 空闲中
     */
    idleing = 4
}
/**
 * 筛选用户类型 0:全部 1:禁言
 */
export declare enum FetchUserType {
    /**
     * 筛选全部的用户
     */
    all = "0",
    /**
     * 筛选禁言的用户
     */
    mute = "1"
}
/**
 * 分页查询用户参数
 */
export interface FetchUserParam {
    /**
     * 下一页的ID
     */
    nextId: string | number | null | undefined;
    /**
     * 一页查询多少条
     */
    count: number;
    /**
     * 筛选类型 0:全部 1:禁言
     */
    type: FetchUserType;
    /**
     * 查询角色
     */
    role: EduRoleTypeEnum;
    /**
     * 查询的用户名称，模糊查询
     */
    userName?: string;
}
export declare enum OrientationEnum {
    portrait = "portrait",
    landscape = "landscape"
}
export declare type ConfirmDialogAction = 'ok' | 'cancel';
export declare enum ScreenShareRoleType {
    Teacher = "teacher",
    Student = "student"
}
export declare enum ToolbarItemCategory {
    PenPicker = 0,
    ColorPicker = 1,
    Cabinet = 2,
    Eraser = 3,
    Slice = 4,
    Roster = 5,
    Text = 6,
    Clicker = 7,
    Selector = 8,
    CloudStorage = 9,
    Save = 10,
    Hand = 11
}
export declare enum CabinetItemEnum {
    ScreenShare = "screenShare",
    BreakoutRoom = "breakoutRoom",
    Laser = "laser",
    Whiteboard = "whiteboard"
}
export interface CabinetItem {
    id: string;
    name: string;
    iconType?: string;
}
export declare class ToolbarItem {
    static fromData(data: {
        value: string;
        label: string;
        icon: string;
        category: ToolbarItemCategory;
        className?: string;
    }): ToolbarItem;
    value: string;
    label: string;
    icon: string;
    category: ToolbarItemCategory;
    className?: string;
    constructor(icon: string, value: string, label: string, category: ToolbarItemCategory, className?: string);
}

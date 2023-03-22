import { WindowID } from '@/infra/api';
import { AGError, Injectable } from 'agora-rte-sdk';
import { ConfirmDialogAction, OrientationEnum } from './type';
export declare enum DialogCategory {
    CloudDriver = 0,
    Roster = 1,
    LectureRoster = 2,
    KickOut = 3,
    ErrorGeneric = 4,
    Confirm = 5,
    DeviceSetting = 6,
    ScreenPicker = 7,
    BreakoutRoom = 8,
    Quit = 9,
    ScreenShare = 10,
    RemoteControlConfirm = 11,
    StreamView = 12,
    InvitePodium = 13,
    InviteConfirm = 14
}
export interface ToastType {
    id: string;
    desc: string;
    type?: ToastTypeEnum;
}
export declare type ToastTypeEnum = 'success' | 'error' | 'warning';
export interface DialogType {
    id: string;
    category: DialogCategory;
    props?: unknown;
}
export declare class EduShareUIStore {
    protected logger: Injectable.Logger;
    readonly classroomViewportClassName = "classroom-viewport";
    readonly classroomViewportTransitionDuration = 300;
    readonly navHeight = 27;
    private _viewportAspectRatio;
    private _classroomMinimumSize;
    private _containerNode;
    private _matchMedia;
    private _resizeEventListenerAdded;
    /**
     * 教室UI布局完毕
     */
    layoutReady: boolean;
    /**
     * 模态框列表
     */
    dialogQueue: DialogType[];
    /**
     * Toast 列表
     */
    toastQueue: ToastType[];
    /**
     * 视口尺寸信息
     */
    classroomViewportSize: {
        width: number;
        height: number;
        h5Width?: number;
        h5Height?: number;
    };
    orientation: OrientationEnum;
    /**
     * 显示一条 Toast 信息
     * @param desc
     * @param type
     * @returns
     */
    addToast(desc: string, type?: ToastTypeEnum): string;
    /**
     * 移除 Toast 信息
     * @param id
     * @returns
     */
    removeToast(id: string): string;
    /**
     * 显示错误提示模态框
     * @param error
     * @param opts
     */
    addGenericErrorDialog(error: AGError, opts?: {
        onOK?: () => void;
        okBtnText?: string;
    }): void;
    /**
     * 显示确认模态框
     * @param title
     * @param content
     * @param onOK
     * @param actions
     * @param onCancel
     */
    addConfirmDialog(title: string, content: string, { onOK, actions, onCancel, btnText, timeout, }?: {
        onOK?: () => void;
        actions?: ConfirmDialogAction[];
        onCancel?: () => void;
        btnText?: Record<ConfirmDialogAction, string>;
        timeout?: number;
    }): string;
    /**
     * 显示模态框
     * @param category
     * @param props
     * @returns
     */
    addDialog(category: DialogCategory, props?: any): any;
    /**
     * 移除模态框
     * @param id
     */
    removeDialog(id: string): void;
    /** Actions */
    /**
     * 更新教室视口尺寸信息
     */
    updateClassroomViewportSize(): void;
    handleOrientationchange(): void;
    /**
     设置 Resize 事件处理器
     */
    addWindowResizeEventListener(): void;
    /**
     * 移除 Resize 事件处理器
     */
    removeWindowResizeEventListener(): void;
    addOrientationchange(): void;
    removeOrientationchange(): void;
    showWindow(windowID: WindowID): void;
    hideWindow(windowID: WindowID): void;
    openWindow(windowID: WindowID, payload: {
        args?: Record<string, string | number | boolean>;
        options?: Record<string, string | number | boolean>;
    }): void;
    moveWindowToTargetScreen(windowID: WindowID, screenId: string, options: Record<string, string | number | boolean>): void;
    closeWindow(windowID: WindowID): void;
    addViewportResizeObserver(callback: () => void): ResizeObserver;
    setLayoutReady(ready: boolean): void;
}

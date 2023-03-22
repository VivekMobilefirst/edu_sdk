import { EduUIStoreBase } from './base';
import { ClassState } from 'agora-edu-core';
import { Duration } from 'dayjs/plugin/duration';
export declare class NotificationUIStore extends EduUIStoreBase {
    private _notificationTask?;
    private _prevClassState;
    private _disposers;
    /** Observables */
    /** Methods */
    private _filterUsers;
    private _handleError;
    onInstall(): void;
    private _handleClassroomEvent;
    onDestroy(): void;
    /**
     * add class state notification
     * @param state
     * @param minutes
     */
    protected addClassStateNotification(state: ClassState, minutes: number): void;
    /** Actions */
    /**
     * check classroom notification
     */
    protected checkClassroomNotification(): void;
    private _checkMinutesThrough;
    /** Computed */
    /**
     * 根据课堂状态获取时长，
     * 未开始：距开始时间
     * 进行中：距离结束时间
     * 课程结束：距离教室关闭时间
     * @returns
     */
    get classDuration(): number;
    /**
     * 距离教室关闭的时间
     * @returns
     */
    get durationToRoomClose(): Duration;
    /**
     * 距离课程结束的时间
     * @returns
     */
    get durationToClassEnd(): Duration;
    /** others */
    /** 错误提示信息
     * get state error reason
     * @param reason
     * @returns
     */
    private _getStateErrorReason;
}

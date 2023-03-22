import { IReactionDisposer } from 'mobx';
import { EduUIStoreBase } from '../base';
import { DeviceState, Operation, Profile } from './type';
import { BoardGrantState } from '~ui-kit';
import { EduStreamUI } from '../stream/struct';
export declare class RosterUIStore extends EduUIStoreBase {
    /**
     * width: 花名册窗口宽度
     */
    get uiOverrides(): {
        width: number;
    };
    protected _disposers: IReactionDisposer[];
    onInstall(): void;
    /** Observables */
    /**
     * 检索字符串
     */
    searchKeyword: string;
    /**
     * 轮播参数
     */
    carousel: {
        isOpenCarousel: boolean;
        mode: string;
        randomValue: string;
        times: string;
    };
    /** Methods */
    /**
     * 开始轮播
     * @param start
     */
    private startCarousel;
    /**
     * 轮播参数事件
     * @param propKey
     * @returns
     */
    private updatePartial;
    /**
     * 获取主流
     * @param userUuid
     * @returns
     */
    protected getMainStream(userUuid: string): import("agora-edu-core").EduStream | null | undefined;
    /**
     * 是否不可点击操作
     * @param deviceState
     * @returns
     */
    protected shouldBlockMediaAction(deviceState: DeviceState): boolean;
    /**
     * 更新轮播参数
     * @param carousel
     */
    /** Actions */
    updateCarousel(carousel: RosterUIStore['carousel']): void;
    /**
     * 设置检索字符串
     * @param keyword
     */
    setKeyword(keyword: string): void;
    /**
     * 花名册功能按钮点击
     * @param operation
     * @param profile
     */
    clickRowAction: (operation: Operation, profile: Profile) => void;
    clickPodium: (profile: Profile) => void;
    clickGrantBoard: (profile: Profile) => void;
    clickCamera: (profile: Profile) => void;
    clickMicrophone: (profile: Profile) => void;
    clickStar: (profile: Profile) => void;
    clickKick: (profile: Profile) => void;
    chickStudentView: (profile: Profile) => void;
    /**
     * 获取指定学生 stream
     * @param uid
     * @returns
     */
    getStudentStream: (uid: string) => EduStreamUI;
    /**
     * 关闭视频监听
     */
    closeStudentView(): void;
    /**
     * 开启扩展屏状态，并且发布需要订阅的学生流信息
     * @param state
     * @param data
     */
    subcribeUsers(state: 1 | 0, data?: {
        publishUserUuids?: string[] | undefined;
        unpublishUserUuids?: string[];
    }): Promise<void>;
    /** Computed */
    /**
     * 老师名称
     * @returns
     */
    get teacherName(): string;
    /**
     * 学生列表
     * @returns
     */
    get userList(): {
        uid: string;
        name: string;
        isOnPodium: boolean;
        boardGrantState: BoardGrantState;
        isChatMuted: boolean;
        cameraState: DeviceState;
        microphoneState: DeviceState;
        stars: number;
        operations: Partial<Record<Operation, {
            interactable: boolean;
        }>>;
    }[];
    /**
     * 花名册功能列表
     * @returns
     */
    get rosterFunctions(): ("search" | "stars" | "kick" | "podium" | "grant-board" | "supervise-student" | "carousel")[];
    /**
     * 轮播组件属性
     * @returns
     */
    get carouselProps(): {
        onTimesChange: (val: string, eventType?: "blur" | "change" | undefined) => void;
        onModeChange: (val: string, eventType?: "blur" | "change" | undefined) => void;
        onRandomValueChange: (val: string, eventType?: "blur" | "change" | undefined) => void;
        onOpenCarousel: (val: boolean, eventType?: "blur" | "change" | undefined) => void;
        isOpenCarousel: boolean;
        mode: string;
        randomValue: string;
        times: string;
    };
    get groupStarted(): boolean;
    get stageVisible(): any;
    /** Getters */
    /**
     * 是否有踢人权限
     * @returns
     */
    get canKickOut(): boolean;
    /**
     * 是否有白板授权权限
     * @returns
     */
    get canGrantWhiteboardPermissions(): boolean;
    /**
     * 是否可以操作上下台
     * @returns
     */
    get canOperatePodium(): boolean;
    /**
     * 是否可以禁言IM
     * @returns
     */
    get canMuteChat(): boolean;
    /**
     * 是否可以开启和关闭学生音视频
     * @returns
     */
    get canOperateMedia(): boolean;
    /**
     * 是否可以操作轮播
     * @returns
     */
    get canOperateCarousel(): boolean;
    /**
     * 是否可以检索
     * @returns
     */
    get canSearchInRoster(): boolean;
    /**
     * 是否可以发奖励
     * @returns
     */
    get canSendRewards(): boolean;
    get canSubscribeUser(): boolean;
    get canSuperviseStudent(): boolean;
    onDestroy(): void;
}

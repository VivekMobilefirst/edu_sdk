import { EduRoleTypeEnum } from 'agora-edu-core';
import { EduUIStoreBase } from '../base';
import { FetchUserParam, FetchUserType, OnPodiumStateEnum } from '../type';
export declare type UserWaveArmInfo = {
    userUuid: string;
    userName: string;
    onPodium: boolean;
};
export declare type UserHandUpInfo = {
    name: string;
    uid: string;
    role: EduRoleTypeEnum;
    onPodiumState: OnPodiumStateEnum;
};
export declare class HandUpUIStore extends EduUIStoreBase {
    onInstall(): void;
    private _curInvitedInfo;
    private _refuseInvitedTs;
    /**
     * 当前是否为职教
     */
    get isVocational(): boolean;
    /**
     * 当前是否为混合模式
     */
    get isMixCDNRTC(): boolean;
    /**
     * 持续挥手时间
     */
    get waveArmDurationTime(): 5 | 3;
    /**
     * 查询下一页的参数
     */
    get fetchUserListParams(): {
        nextId: string | number | undefined;
        count: number;
        type: FetchUserType;
    };
    /**
     * 查询下一页的ID
     */
    private _nextPageId;
    /**
     * 分页查询到的用户列表
     */
    private _userList;
    get userList(): UserHandUpInfo[];
    /**
     * 是否达到最大邀请人数
     */
    get inviteListMaxLimit(): boolean;
    /**
     * 是否达到最大上台人数
     */
    get acceptedListMaxLimit(): boolean;
    /**
     * 是否被邀请上台
     * @returns
     */
    get beingInvited(): boolean;
    /**
     * 挥手用户列表
     * @returns
     */
    get userWaveArmList(): UserWaveArmInfo[];
    /**
     * 是否有用户在挥手
     * @returns
     */
    get hasWaveArmUser(): boolean;
    /**
     * 挥手用户数
     * @returns
     */
    get waveArmCount(): number;
    /**
     * 老师的唯一标识
     * @returns
     */
    get teacherUuid(): string;
    /**
     * 学生上台(接受学生举手)
     * @param userUuid
     */
    onPodium(userUuid: string): void;
    /**
     * 邀请学生上台
     * @param userUuid
     */
    invite(userUuid: string, duration: number, payload?: any): void;
    /**
     * 学生同意上台
     * @param userUuid
     */
    confirmInvited(): void;
    /**
     * 学生拒绝上台邀请
     * @param userUuid
     */
    refuseInvited(): void;
    /**
     * 学生下台
     * @param userUuid
     */
    offPodium(userUuid: string): void;
    /**
     * 老师拒绝学生上台
     * @param userUuid
     */
    rejectHandUp(userUuid: string): void;
    /**
     * 学生取消举手
     */
    cancelHandUp(): Promise<void>;
    /**
     * 学生挥手
     *
     * @param teacherUuid
     * @param duration 挥手的时间，单位：秒，-1 为持续举手
     */
    waveArm(teacherUuid: string, duration: number, payload?: any): void;
    /**
     * 获取下一页的用户列表
     */
    fetchUsersList(override?: Partial<FetchUserParam>, reset?: boolean): void;
    /**
     * 重置学生列表及查询条件
     */
    resetStudentList(): void;
    invitePodium(user: UserHandUpInfo): void;
    onDestroy(): void;
}

import { GroupDetail, GroupState } from 'agora-edu-core';
import { EduUIStoreBase } from './base';
export declare enum GroupMethod {
    AUTO = 0,
    MANUAL = 1
}
export declare class GroupUIStore extends EduUIStoreBase {
    private _disposers;
    private _groupSeq;
    joiningSubRoom: boolean;
    isCopyContent: boolean;
    localGroups: Map<string, GroupDetail>;
    private _groupNum;
    private _dialogsMap;
    MAX_USER_COUNT: number;
    /**
     * 分组列表
     */
    get groups(): {
        id: string;
        text: string;
        children: {
            id: string;
            text: string;
        }[];
    }[];
    get groupDetails(): Map<string, GroupDetail>;
    /**
     * 获取学生所在组ID
     * @param userUuid
     */
    getUserGroupUuid(userUuid: string): string | undefined;
    /**
     * 获取学生信息
     * @param userUuid
     */
    getGroupUserByUuid(userUuid: string): import("agora-edu-core").GroupUser | undefined;
    /**
     * 学生列表
     */
    get students(): {
        userUuid: string;
        userName: string;
        groupUuid: string | undefined;
    }[];
    /**
     *
     */
    get notGroupedCount(): number;
    get numberToBeAssigned(): number;
    get userData(): {
        users: Map<string, import("agora-edu-core").EduUserStruct>;
        teacherList: Map<string, import("agora-edu-core").EduUserStruct>;
        studentList: Map<string, import("agora-edu-core").EduUserStruct>;
        assistantList: Map<string, import("agora-edu-core").EduUserStruct>;
        rewards: Map<string, number>;
        localUser?: import("agora-edu-core").EduUserStruct | undefined;
        localUserProperties?: Map<string, any> | undefined;
    };
    /**
     * 当前是否开放分组
     */
    get groupState(): GroupState;
    /**
     * 当前房间
     */
    get currentSubRoom(): string | undefined;
    /**
     * 设置分组用户列表
     * @param groupUuid
     * @param users
     */
    setGroupUsers(groupUuid: string, users: string[]): void;
    /**
     * 重命名组
     * @param from 原名字
     * @param to 新名字
     */
    renameGroupName(groupUuid: string, groupName: string): void;
    /**
     * 新增组
     */
    addGroup(): void;
    /**
     * 删除组
     * @param groupUuid 组id
     */
    removeGroup(groupUuid: string): void;
    /**
     * 移动用户
     * @param fromGroupUuid
     * @param toGroupUuid
     * @param user
     */
    moveUserToGroup(fromGroupUuid: string, toGroupUuid: string, userUuid: string): void;
    toastFullOfStudents: () => void;
    /**
     * 用户组互换
     * @param userUuid1
     * @param userUuid2
     */
    interchangeGroup(userUuid1: string, userUuid2: string): void;
    startGroup(): Promise<void>;
    /**
     * 结束分组
     */
    stopGroup(cb: () => void): Promise<void>;
    /**
     * 创建分组
     * @param type
     * @param group
     */
    createGroups(type: GroupMethod, count: number): void;
    private _isGroupExisted;
    getGroupUserCount(groupUuid: string): number | undefined;
    /**
     * 加入子房间
     * @param groupUuid
     */
    joinSubRoom(groupUuid: string): void;
    broadcastMessage(message: string): Promise<void>;
    private _generateGroupName;
    private setConnectionState;
    private _waitUntilLeft;
    private _waitUntilConnected;
    private _waitUntilJoined;
    private _grantWhiteboard;
    private _joinSubRoom;
    private _copyRoomContent;
    private _leaveSubRoom;
    private _changeSubRoom;
    /**
     * 设置是否要复制内容到讨论组
     * @param v 开启或关闭
     */
    setCopyContent(v: boolean): void;
    onInstall(): void;
    private _handleClassroomEvent;
    onDestroy(): void;
}

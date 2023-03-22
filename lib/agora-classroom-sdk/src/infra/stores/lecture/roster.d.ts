import { FetchUserParam, FetchUserType, EduRoleTypeEnum } from 'agora-edu-core';
import { RosterUIStore } from '../common/roster';
import { DeviceState, Profile } from '../common/roster/type';
import { BoardGrantState } from '~ui-kit';
export declare class LectureRosterUIStore extends RosterUIStore {
    get uiOverrides(): {
        width: number;
    };
    /**
     * 查询下一页的参数
     */
    get fetchUsersListParams(): {
        nextId: string | number | undefined;
        count: number;
        type: FetchUserType;
        role: EduRoleTypeEnum;
    };
    /**
     * 查询下一页的ID
     */
    private _usersNextPageId;
    /**
     * 分页查询到的用户列表
     */
    private _usersList;
    /**
     * 获取下一页的用户列表
     */
    fetchNextUsersList(override?: Partial<FetchUserParam>, reset?: boolean): void;
    /**
     * 重置用户列表及查询条件
     */
    resetUsersList(): void;
    clickKick: (profile: Profile) => void;
    /**
     * 用户列表
     */
    get userList(): {
        uid: never;
        name: never;
        isOnPodium: boolean;
        boardGrantState: BoardGrantState;
        isChatMuted: boolean;
        cameraState: DeviceState;
        microphoneState: DeviceState;
        stars: number;
        operations: Partial<Record<import("../common/roster/type").Operation, {
            interactable: boolean;
        }>>;
    }[];
    /**
     * 是否还有更多用户等待查询
     */
    get hasMoreUsers(): boolean;
    get rosterFunctions(): ("search" | "stars" | "kick" | "podium" | "grant-board" | "supervise-student" | "carousel")[];
    onInstall(): void;
}

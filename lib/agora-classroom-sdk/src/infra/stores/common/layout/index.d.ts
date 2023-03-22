import { EduUIStoreBase } from '../base';
export declare class LayoutUIStore extends EduUIStoreBase {
    awardAnims: {
        id: string;
    }[];
    get isInSubRoom(): boolean;
    get loadingText(): string;
    /**
     * 所在房间名称
     */
    get currentSubRoomName(): string | null | undefined;
    onInstall(): void;
    private _handleClassroomEvents;
    removeAward(id: string): void;
    /**
     * 教室加载状态
     */
    get loading(): boolean;
    onDestroy(): void;
}

import { BoardUIStore } from '../common/board-ui';
export declare class LectureBoardUIStore extends BoardUIStore {
    protected get uiOverrides(): {
        heightRatio: number;
    };
    onInstall(): void;
}

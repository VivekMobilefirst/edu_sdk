import { BoardUIStore } from '../common/board-ui';
export declare class InteractiveBoardUIStore extends BoardUIStore {
    protected get uiOverrides(): {
        heightRatio: number;
    };
}

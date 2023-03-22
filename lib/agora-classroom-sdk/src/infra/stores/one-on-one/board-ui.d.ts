import { BoardUIStore } from '../common/board-ui';
export declare class OneToOneBoardUIStore extends BoardUIStore {
    protected get uiOverrides(): {
        heightRatio: number;
    };
}

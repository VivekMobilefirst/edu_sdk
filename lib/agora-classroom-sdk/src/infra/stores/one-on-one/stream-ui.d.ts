import { StreamUIStore } from '../common/stream';
export declare class OneToOneStreamUIStore extends StreamUIStore {
    private _teacherWidthRatio;
    get toolbarPlacement(): 'bottom' | 'left';
    get toolbarOffset(): number[];
    get fullScreenToolbarOffset(): number[];
    get videoStreamSize(): {
        width: number;
        height: number;
    };
    onInstall(): void;
}

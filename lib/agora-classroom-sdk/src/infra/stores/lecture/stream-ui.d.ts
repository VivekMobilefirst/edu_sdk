import { StreamUIStore } from '../common/stream';
import { EduStreamUI } from '../common/stream/struct';
import { EduStreamTool } from '../common/stream/tool';
export declare class LectureRoomStreamUIStore extends StreamUIStore {
    private _teacherWidthRatio;
    private _carouselShowCount;
    private _gapInPx;
    carouselPosition: number;
    carouselNext(): void;
    carouselPrev(): void;
    get localStreamTools(): EduStreamTool[];
    get carouselStreams(): EduStreamUI[];
    remoteStreamTools: (stream: EduStreamUI) => EduStreamTool[];
    get teacherVideoStreamSize(): {
        width: number;
        height: number;
    };
    get studentVideoStreamSize(): {
        width: number;
        height: number;
    };
    get gap(): number;
    get scrollable(): boolean;
    get layerItems(): string[];
    get toolbarPlacement(): 'bottom' | 'left';
    get toolbarOffset(): number[];
    get fullScreenToolbarOffset(): number[];
    onInstall(): void;
}

import { SvgIconEnum } from '~ui-kit';
import { StreamUIStore } from '../common/stream';
export declare class LectureH5RoomStreamUIStore extends StreamUIStore {
    private _teacherWidthRatio;
    private _gapInPx;
    onInstall(): void;
    streamZoomStatus: string;
    carouselPosition: number;
    carouselNext(): void;
    carouselPrev(): void;
    handleZoomStatus(): void;
    get carouselShowCount(): 4 | 3;
    get teacherVideoStreamSize(): {
        width: number;
        height: number;
    };
    get studentVideoStreamSize(): {
        width: number;
        height: number;
    };
    get studentVideoStreamContainerHeight(): number | "unset";
    get containerH5Extend(): "" | "flex-1";
    get carouselStreams(): import("../common/stream/struct").EduStreamUI[];
    get iconZoomType(): SvgIconEnum.ZOOM_IN | SvgIconEnum.ZOOM_OUT;
    get streamLayoutContainerCls(): "" | "fullsize-video-container";
    get streamLayoutContainerDimensions(): {
        width: number | undefined;
        height: number | undefined;
    } | {
        width?: undefined;
        height?: undefined;
    };
    get containerH5VisibleCls(): "" | "hidden";
    get iconZoomVisibleCls(): "" | "hidden";
    get gap(): number;
    get scrollable(): boolean;
}

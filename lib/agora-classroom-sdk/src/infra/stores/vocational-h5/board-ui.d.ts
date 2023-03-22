import { SvgIconEnum } from '~ui-kit';
import { BoardUIStore } from '../common/board-ui';
export declare class EduVocationalH5BoardUIStor extends BoardUIStore {
    protected get uiOverrides(): {
        heightRatio: number;
    };
    onInstall(): void;
    borderZoomStatus: string;
    get iconBorderZoomType(): SvgIconEnum.ZOOM_IN | SvgIconEnum.ZOOM_OUT;
    get iconZoomVisibleCls(): "" | "hidden";
    get containerH5VisibleCls(): "" | "hidden";
    get whiteboardContainerCls(): "" | "flex-1";
    get boardContainerWidth(): string;
    get boardContainerHeight(): string;
    handleBoradZoomStatus(): void;
}

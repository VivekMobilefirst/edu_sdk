import { LayoutUIStore } from '../common/layout';
export declare class LectureH5LayoutUIStore extends LayoutUIStore {
    get flexOrientationCls(): "row" | "col-reverse";
    get chatWidgetH5Cls(): "flex-1" | "aisde-fixed";
    get h5ContainerCls(): "" | "justify-center items-center";
    get h5LayoutUIDimensions(): {
        height?: undefined;
        width?: undefined;
    } | {
        height: number | undefined;
        width: number | undefined;
    };
}

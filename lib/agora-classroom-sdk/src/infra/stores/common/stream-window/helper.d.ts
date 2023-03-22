import { WidgetTrackStruct } from '../type';
import { StreamWindow, StreamWindowBounds } from './type';
export declare function isNum(num: unknown): boolean;
/**
 * 计算 8 宫格布局
 * 当数量小于等于 3 的时候一行展示
 *
 *	 ┌───────┐
 *	 │   1   │
 *	 └───────┘
 *
 *	 ┌───────┬───────┐
 *	 │   1   │   2   │
 *	 └───────┴───────┘
 *
 *	 ┌───────┬───────┬───────┐
 *	 │   1   │   2   │   3   │
 *	 └───────┴───────┴───────┘
 *
 *
 *	 当数量大于3的时候
 *
 *	 ┌───────┬───────┐
 *	 │   3   │   4   │
 *	 ├───────┼───────┤
 *	 │   1   │   2   │
 *	 └───────┴───────┘
 *
 *	┌───────────┬───────────┐
 *	│     4     │     5     │
 *	├───────┬───┴───┬───────┤
 *	│   1   │   2   │   3   │
 *	└───────┴───────┴───────┘
 *
 *	┌───────┬───────┬───────┐
 *	│   4   │   5   │   6   │
 *	├───────┼───────┼───────┤
 *	│   1   │   2   │   3   │
 *	└───────┴───────┴───────┘
 *
 *	┌───────────┬─────────┬─────────┐
 *	│     5     │    6    │    7    │
 *	├───────┬───┴───┬─────┴─┬───────┤
 *	│   1   │   2   │   3   │   4   │
 *	└───────┴───────┴───────┴───────┘
 *
 *	┌───────┬───────┬───────┬───────┐
 *	│   5   │   6   │   7   │   8   │
 *	├───────┼───────┼───────┼───────┤
 *	│   1   │   2   │   3   │   4   │
 *	└───────┴───────┴───────┴───────┘
 *
 * @param length
 * @param width
 * @param height
 * @returns
 */
export declare const calculateSize: (length: number, width: number, height: number) => StreamWindowBounds[][];
/**
 * 计算 9 宫格布局
 * 计算规则为 1^2  2^2 3^2
 */
export declare const calculateSizeSquare: (length: number, width: number, height: number) => StreamWindowBounds[][];
/**
 * 需要把 x, y 为可移动距离的比例
 * 最大有效移动范围（Maximum Effective Distance, MED）：在不超出教室布局的前提下，分别能够在 X 轴、Y 轴方向移动的最大距离
 * 移动偏移量：
 * @param rect
 */
export declare const convertToWidgetTrackPos: (rect: StreamWindow, bigRect: {
    width: number;
    height: number;
}) => {
    position: {
        xaxis: number;
        yaxis: number;
    };
    size: {
        width: number;
        height: number;
    };
    extra: {
        contain: boolean;
        zIndex: number;
    };
};
/**
 * 把 widget 坐标转换为目前的用的坐标
 * @param rect
 * @param bigRect
 */
export declare const convertToRelativePos: (rect: WidgetTrackStruct, streamWindowRect: {
    width: number;
    height: number;
}) => {
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
    contain: boolean;
};

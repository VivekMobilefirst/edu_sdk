/**
 * streamWindow widget
 */
export declare class StreamWindowWidget {
    width: number;
    height: number;
    x: number;
    y: number;
    /**
     * view 层级关系
     */
    zIndex: number;
    /**
     * 是否填充到多视频区域
     */
    contain: boolean;
    userUuid: string;
    constructor({ width, height, x, y, zIndex, contain, userUuid, }: {
        width?: number;
        height?: number;
        x?: number;
        y?: number;
        zIndex?: number;
        contain?: boolean;
        userUuid?: string;
    });
    get information(): {
        width?: number;
        height?: number;
        x?: number;
        y?: number;
        zIndex?: number;
        contain?: boolean;
        userUuid?: string;
    };
    set information({ width, height, x, y, zIndex, contain, userUuid, }: {
        width?: number;
        height?: number;
        x?: number;
        y?: number;
        zIndex?: number;
        contain?: boolean;
        userUuid?: string;
    });
}
/**
 * 从服务端来的 widget 数据
 */
export declare class WidgetInfo {
    state: 1 | 0;
    ownerUserUuid: string;
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
        userUuid: string;
    };
    constructor({ position, size, extra, ownerUserUuid, state, }: {
        ownerUserUuid: string;
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
            userUuid: string;
        };
        state: 1 | 0;
    });
    get information(): {
        state: 0 | 1;
        ownerUserUuid: string;
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
            userUuid: string;
        };
    };
}

export declare enum BoardConnectionState {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnecting = 4
}
export declare enum BoardMountState {
    NotMounted = 0,
    Mounted = 1
}
/** Board types */
export declare enum FcrBoardTool {
    Selector = 1,
    LaserPointer = 2,
    Eraser = 3,
    Clicker = 4,
    Hand = 5,
    Text = 6
}
export declare enum FcrBoardShape {
    Curve = 1,
    Straight = 2,
    Arrow = 3,
    Rectangle = 4,
    Triangle = 5,
    Rhombus = 6,
    Pentagram = 7,
    Ellipse = 8
}
export declare type WebviewOpenParams = {
    resourceUuid: string;
    url: string;
    title: string;
};
export declare type StreamMediaPlayerOpenParams = {
    resourceUuid: string;
    url: string;
    title: string;
};
export declare type Color = {
    r: number;
    g: number;
    b: number;
    a?: number;
};
export declare type FcrBoardMaterialWindowConfig<T = unknown> = {
    resourceUuid: string;
    resourceUrl: string;
    title: string;
    pageList: T[];
    taskUuid: string;
    resourceHasAnimation: boolean;
};
export declare type FcrBoardMediaWindowConfig = {
    resourceUuid: string;
    resourceUrl: string;
    title: string;
    mimeType: string;
};
export declare type FcrBoardH5WindowConfig = {
    resourceUuid: string;
    resourceUrl: string;
    title: string;
};

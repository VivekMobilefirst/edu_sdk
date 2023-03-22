import { AgoraWidgetTrack, Dimensions, Point, Track, TrackOptions } from 'agora-edu-core';
import { AgoraWidgetBase } from './widget-base';
export declare class AgoraWidgetTrackController {
    private _options;
    private _widget;
    private _controller;
    private _ctx;
    private _track;
    private _zIndex;
    private _resizeObserver?;
    constructor(belongToWidget: AgoraWidgetBase, trackProps: AgoraWidgetTrack, _options?: {
        posOnly?: boolean;
    });
    get track(): Track;
    get zIndex(): number;
    get posOnly(): boolean | undefined;
    private _initializeTrack;
    /**
     * Update the local track and apply to remote
     * @param end indicate the change should apply to remote
     * @param pos the position of the track
     * @param dimensions the dimensions of the track
     * @param options
     */
    updateRemoteTrack(end: boolean, pos: Point, dimensions?: Dimensions, options?: TrackOptions): Promise<void>;
    /**
     * Update the local track when remote track changed
     * @param trackProps change received from remote
     */
    updateLocalTrack(trackProps: AgoraWidgetTrack): void;
    /**
     * Update zIndex to remote
     * @param zIndex
     */
    updateRemoteZIndex(zIndex: number): Promise<void>;
    /**
     * Update zIndex to local
     * @param zIndex
     */
    updateLocalZIndex(zIndex: number): Promise<void>;
    private _handleViewportResize;
    private _calculateContext;
    /**
     * 获取可移动范围参数
     * @param boundaryName
     * @returns
     */
    private _getBounds;
    destory(): void;
}

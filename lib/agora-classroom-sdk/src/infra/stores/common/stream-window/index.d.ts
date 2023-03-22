import { EduStream } from 'agora-edu-core';
import { IReactionDisposer, Lambda } from 'mobx';
import { DraggableData } from 'react-draggable';
import { EduUIStoreBase } from '../base';
import { StreamBounds } from '../stream/struct';
import { StreamWindowWidget } from './struct';
import { StreamWindow } from './type';
export declare class StreamWindowUIStore extends EduUIStoreBase {
    private _dataStore;
    protected _disposers: (IReactionDisposer | Lambda)[];
    private _snapshotPostion;
    private _streamWindowFirstOffset;
    private _streamWindowUpdatedFromRoom;
    private _lowUuids;
    private _highUuids;
    private _streamWindowContainerBounds;
    get minRect(): {
        calculateCount: number;
        minWidth: number;
        minHeight: number;
    };
    get streamDragable(): boolean;
    get needDragable(): boolean;
    /**
     *
     */
    get streamWindowMap(): Map<string, StreamWindowWidget>;
    /**
     *
     */
    get transitionStreams(): Map<string, boolean>;
    /**
     *
     */
    get tempStreamWindowPosMap(): Map<string, StreamWindowWidget>;
    /**
     * 正在拖拉的 streamUuid
     */
    get draggingStreamUuid(): string;
    /**
     * 讲台状态
     */
    get stageVisible(): any;
    /**
     * 老师流信息
     * @returns
     */
    private get _teacherStream();
    /**
     * 学生流信息列表
     * @returns
     */
    private get _studentStreams();
    /**
     * big streamwindows 大窗口
     */
    get streamWindowUserUuids(): string[];
    get streamWindowStreamUuids(): string[];
    get streamWindowRealBoundsMap(): Map<string, StreamWindow>;
    /**
     *  用于 UI 展示
     */
    get streamWindows(): [string, StreamWindow][];
    /**
     * 是否有全屏展示的 streamWindow
     */
    get containedStreamWindow(): StreamWindowWidget | undefined;
    /**
     * 覆盖组件透明度（底部工具栏，侧边工具栏，举手按钮，聊天按钮）
     */
    get containedStreamWindowCoverOpacity(): 1 | 0.9;
    /**
     * 全屏展示的 streamWindow 数量
     */
    get containedStreamWindowSize(): number;
    /**
     * 返回没有在指定区域展示的 streams
     */
    get streamsShouldOffPodium(): EduStream[];
    /**
     * 小流ID
     */
    get lowStreamUuids(): Set<string>;
    /**
     * 拖拉权限控制
     */
    streamWindowLocked: (stream: EduStream) => boolean;
    /**
     * 是否存在 streamwindow widget
     * true 代表大窗里有 stream
     * false 代表大窗里没有 stream
     */
    visibleStream: (streamUuid: string) => boolean;
    /**
     * 设置大窗显示区域
     * @param bounds
     */
    setMiddleContainerBounds(bounds: StreamBounds): void;
    /**
     * for drag
     * @param param0
     */
    setStreamDragInformation: ({ stream, active, pos, }: {
        stream: EduStream;
        active: boolean;
        pos: [number, number];
    }) => void;
    /**
     * 是否在多视频的容器内
     * @param x
     * @param y
     * @returns
     */
    private _isMatchWindowContainer;
    private _createStreamWindowByUuid;
    private _addStreamWindowByUuid;
    private _removeStreamWindowByUuid;
    private _initStreamWindowSize;
    /**
     * 从小视频向拉创建 stream window
     * @param streamUuid
     */
    private _createStreamWindow;
    /**
     *
     * @param streamUuid
     * @param pos
     */
    private _updateStreamWindow;
    private _setValidStreamWindowOffset;
    /**
     * 值都是具体的数值
     * @param streamUuid
     * @param param1
     */
    private _setStreamWindowMap;
    private _handleTempStreamWindowMap;
    _setStreamWindowUpdate(status: boolean): void;
    /**
     * 双击视频窗口逻辑处理
     * @param stream
     * @returns
     */
    handleDBClickStreamWindow(stream: EduStream): void;
    /**
     * 双击全屏的时候
     * 1. 讲台展示直接删除 streamwindow widget，
     * 2. 讲台隐藏的时候需要查看之前窗口的位置，
     *  2.1 如果有位置那么返回之前的位置
     *  2.2 如果么位置那么创建一个位置不要重叠
     * @param stream
     * @returns
     */
    handleStreamWindowContain(stream: EduStream): void;
    /**
     * 设置重新计算后的 widget rect
     * 需要要没有全屏的 widget 删除
     */
    private _handleCalculateContains;
    /**
     * 单击处理 zIndex 问题
     * @param streamUuid
     */
    handleStreamWindowSingalClick: (stream: EduStream) => void;
    /**
     * https://github.com/facebook/react/issues/3185
     * @param streamUuid
     * @returns
     */
    handleStreamWindowClick: (stream: EduStream) => () => void;
    private _calculateSize;
    /**
     * 获取全屏的视频
     */
    private _getStreamWindowContain;
    setTransitionStreams(streamUuid: string): void;
    removeTransitionStreams(streamUuid: string): void;
    /**
     * 只处理学生流
     */
    private _handleOnOrOffPodium;
    private _handleClassroomUIEvents;
    private _handleOffAllStreamWindow;
    private _handleToggleTeacherStreamWindow;
    /**
     * 发送数据到远端，teacher only
     */
    sendWigetDataToServer(streamUuid?: string): void;
    /**
     * 删除 widget streamwindow
     * @param widgetUuid
     */
    private _deleteStreamWindowWidegtToServer;
    /**
     * for stream window drag
     * @param e
     * @param data
     * @param streamUuid
     * @param offsetX
     * @returns
     */
    handleDrag(e: any, data: DraggableData, streamUuid: string, offsetX: number): void;
    /**
     * 区域内更新 streamsWindowMap 信息
     * @param streamUuid
     * @param streamWindowInfo
     */
    handleStreamWindowInfo(stream: EduStream, streamWindowInfo: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        zIndex?: number;
        contain?: boolean;
    }, sendToServer?: boolean): void;
    private _handldeStreamWindowCollisionDetection;
    /**
     * 转换为 widget 坐标
     * @returns
     */
    private _encodeWidgetRect;
    private _createNewTempStreamWindow;
    private _getTempStreamWindowPosCache;
    /**
     * 把不在指定区域的学生 streams 下台
     */
    private _handleOffPodium;
    private _handleToggleWhiteboard;
    private _setRemoteStreamType;
    removeStreamWindowByUuid: (streamUuid: string) => void;
    handleWidgetInformationFromServer(widgets: any): void;
    updateDraggingStreamUuid(streamUuid: string): void;
    resetDraggingStreamUuid(): void;
    /**
     * 转换 widget 坐标方式
     * @param widgetProps
     * @returns
     */
    private _decodeWidgetRect;
    private _setEventHandler;
    onInstall(): void;
    onDestroy(): void;
}

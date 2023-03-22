import { AGEventEmitter } from 'agora-rte-sdk';
export declare const AgoraEduClassRoomUIType = "classroom-ui-events";
export declare enum AgoraEduClassroomUIEvent {
    offStreamWindow = "off-stream-window",
    streamWindowsChange = "stream-window-change",
    toggleTeacherStreamWindow = "toggle-teacher-stream-window",
    hiddenStage = "hidden-stage",
    toggleWhiteboard = "toggle-whiteboard",
    dragFileOverBoard = "drag-file-over-board",
    dropFileOnBoard = "drop-file-on-board"
}
declare type EventCallback = (type: AgoraEduClassroomUIEvent, ...args: any[]) => void;
export declare class EduEventUICenter extends AGEventEmitter {
    static shared: EduEventUICenter;
    private _callbacks;
    constructor();
    emitClassroomUIEvents(type: AgoraEduClassroomUIEvent, ...args: any[]): void;
    onClassroomUIEvents(cb: EventCallback): void;
    offClassroomUIEvents(cb: EventCallback): void;
    cleanup(): void;
}
export {};

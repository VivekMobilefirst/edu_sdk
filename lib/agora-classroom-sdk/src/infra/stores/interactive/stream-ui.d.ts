import { StreamUIStore } from '../common/stream';
import { EduStreamUI } from '../common/stream/struct';
import { EduStreamTool } from '../common/stream/tool';
export declare class InteractiveRoomStreamUIStore extends StreamUIStore {
    private _carouselShowCount;
    private _gapInPx;
    carouselPosition: number;
    get videoStreamSize(): {
        width: number;
        height: number;
    };
    get carouselStreams(): EduStreamUI[];
    get teacherCameraStream(): EduStreamUI | undefined;
    get assistantCameraStream(): EduStreamUI | undefined;
    /**
     * 所有人离开组件区域
     */
    localOffAllStreamWindow: () => EduStreamTool;
    get localStreamTools(): EduStreamTool[];
    /**
     * 讲台区域开关
     */
    get stageVisible(): any;
    remoteStreamTools: (stream: EduStreamUI) => EduStreamTool[];
    get gap(): number;
    get carouselStudentShowCount(): number;
    carouselNext(): void;
    carouselPrev(): void;
    get scrollable(): boolean;
    private _streamWindowUserUuids;
    private _handleClassroomUIEvents;
    get toolbarOffset(): number[];
    get fullScreenToolbarOffset(): number[];
    onInstall(): void;
    onDestroy(): void;
}

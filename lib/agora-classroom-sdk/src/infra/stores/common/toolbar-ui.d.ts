import { EduUIStoreBase } from './base';
import { EduStreamUI } from './stream/struct';
import { CabinetItem, ToolbarItem } from './type';
export declare class ToolbarUIStore extends EduUIStoreBase {
    readonly defaultColors: string[];
    readonly defaultPens: string[];
    readonly paletteMap: Record<string, string>;
    readonly module: string;
    readonly allowedCabinetItems: string[];
    private _disposers;
    onInstall(): void;
    activeMap: Record<string, boolean>;
    private _activeCabinetItems;
    /**
     * 当前激活的工具
     * @returns
     */
    get activeTool(): "text" | "circle" | "triangle" | "square" | "line" | "arrow" | "pentagram" | "rhombus" | "pen" | "eraser" | "clicker" | "selection" | "hand" | undefined;
    /**
     * 当前激活的画笔类工具
     * @returns
     */
    get selectedPenTool(): "text" | "circle" | "triangle" | "square" | "line" | "arrow" | "pentagram" | "rhombus" | "pen" | "eraser" | "clicker" | "selection" | "hand" | undefined;
    /**
     * 画笔工具是否激活
     * @returns
     */
    get isPenToolActive(): boolean | undefined;
    /**
     * 选中的画笔颜色
     * @returns
     */
    get currentColor(): string;
    /**
     * 选中的画笔粗细
     * @returns
     */
    get strokeWidth(): number;
    /**
     * 是否正在进行屏幕共享
     * @returns
     */
    get isScreenSharing(): boolean;
    /**
     * 是否打开白板
     * @returns
     */
    get isWhiteboardOpening(): boolean;
    handleBoradCleaner(id: string): void;
    /**
     * 老师流信息列表
     * @returns
     */
    get teacherStreams(): Set<EduStreamUI>;
    /**
     * 老师流信息（教室内只有一个老师时使用，如果有一个以上老师请使用 teacherStreams）
     * @returns
     */
    get teacherCameraStream(): EduStreamUI | undefined;
    startLocalScreenShare(): void;
    selectScreenShareDevice(): Promise<void>;
    /**
     * 打开内建工具
     * @param id
     */
    openBuiltinCabinet(id: string): Promise<void>;
    handleSliceItem(id: string): void;
    /**
     * 选中工具
     * @param tool
     * @returns
     */
    setTool(tool: string): void;
    private _openCloudDrive;
    private _openRoster;
    private _saveBoardSnapshot;
    private _setToolActive;
    private _setToolInactive;
    readonly penTools: string[];
    /**
     * 设置画笔粗细
     * @param value
     * @returns
     */
    changeStroke(value: number): void;
    /**
     * 设置画笔颜色，支持 RGB 色值
     * @param value
     * @returns
     */
    changeHexColor(value: string): void;
    /**
     * 当前激活的工具
     * @returns
     */
    get activeCabinetItems(): Set<string>;
    /**
     * 工具箱列表
     * @returns
     */
    get cabinetItems(): CabinetItem[];
    /**
     * 白板清除选项列表
     * @returns
     */
    get boardCleanerItems(): CabinetItem[];
    /**
     * 工具栏工具列表
     * @returns
     */
    get tools(): ToolbarItem[];
    /**
     * 截图选项列表
     * @returns
     */
    get sliceItems(): CabinetItem[];
    /**
     * 老师工具栏工具列表
     * @returns
     */
    get teacherTools(): ToolbarItem[];
    /**
     * 学生工具栏工具列表
     * @returns
     */
    get studentTools(): ToolbarItem[];
    /**
     * 转 Edu 工具 对象
     * @param tool
     * @returns
     */
    private _convertUITools2EduTools;
    /**
     * 转 UI 工具对象
     * @param tool
     * @returns
     */
    private _convertEduTools2UITools;
    /**
     * 把截图贴到白板中
     * @param dataURL
     */
    private _pastToBoard;
    onDestroy(): void;
}

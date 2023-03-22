import { ToolbarUIStore } from '../common/toolbar-ui';
import { ToolbarItem } from '../common/type';
export declare class VocationalToolbarUIStore extends ToolbarUIStore {
    readonly allowedCabinetItems: string[];
    /**
     * 老师工具栏工具列表
     * @returns
     */
    get teacherTools(): ToolbarItem[];
}

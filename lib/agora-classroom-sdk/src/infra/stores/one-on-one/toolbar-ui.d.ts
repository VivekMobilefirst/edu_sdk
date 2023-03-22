import { ToolbarUIStore } from '../common/toolbar-ui';
import { ToolbarItem } from '../common/type';
export declare class OneToOneToolbarUIStore extends ToolbarUIStore {
    readonly allowedCabinetItems: string[];
    get teacherTools(): ToolbarItem[];
    get studentTools(): ToolbarItem[];
}

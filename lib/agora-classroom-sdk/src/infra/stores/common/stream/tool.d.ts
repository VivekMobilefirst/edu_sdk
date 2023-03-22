import { IconWithState } from '~ui-kit/components/util/type';
/**
 * 视频窗工具类型
 */
export declare enum EduStreamToolCategory {
    camera = 0,
    microphone = 1,
    whiteboard = 2,
    podium = 3,
    podium_all = 4,
    star = 5,
    stream_window_off = 6
}
/**
 * 视频窗工具对象
 */
export declare class EduStreamTool {
    iconType: IconWithState;
    hoverIconType?: IconWithState;
    interactable: boolean;
    toolTip: string;
    category: EduStreamToolCategory;
    onClick?: () => void;
    constructor(category: EduStreamToolCategory, iconType: IconWithState, toolTip: string, options?: {
        interactable?: boolean;
        onClick?: () => void;
        hoverIconType?: IconWithState;
    });
}

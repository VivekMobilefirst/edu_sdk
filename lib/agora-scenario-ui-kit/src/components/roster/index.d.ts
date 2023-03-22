/// <reference types="react" />
import { SvgIconEnum } from '../svg-img';
import './index.css';
export { Roster } from './roster';
export { RosterTable, InfiniteScrollRosterTable } from './table';
export declare type Operation = 'podium' | 'grant-board' | 'camera' | 'microphone' | 'kick' | 'chat' | 'star' | 'supervise-student';
export declare type Operations = Partial<Record<Operation, {
    interactable: boolean;
}>>;
export declare type SupportedFunction = 'carousel' | 'search' | 'kick' | 'grant-board' | 'podium' | 'stars' | 'supervise-student';
export declare type ColumnKey = 'name' | 'isOnPodium' | 'isBoardGranted' | 'isChatMuted' | 'cameraState' | 'microphoneState' | 'stars' | 'kick' | 'superviseStudent';
export declare type Column = {
    key: ColumnKey;
    order: number;
    name: string;
    render: (profile: Profile, hovered: boolean) => JSX.Element;
    operation?: Operation;
    width?: number | string;
};
export declare enum DeviceState {
    enabled = 0,
    disabled = 1,
    unavailable = 2,
    unauthorized = 3
}
export declare const cameraIconType: {
    0: {
        icon: SvgIconEnum;
        color: string;
    };
    1: {
        icon: SvgIconEnum;
        color: string;
    };
    2: {
        icon: SvgIconEnum;
        color: string;
    };
    3: {
        icon: SvgIconEnum;
        color: string;
    };
};
export declare const microphoneIconType: {
    0: {
        icon: SvgIconEnum;
        color: string;
    };
    1: {
        icon: SvgIconEnum;
        color: string;
    };
    2: {
        icon: SvgIconEnum;
        color: string;
    };
    3: {
        icon: SvgIconEnum;
        color: string;
    };
};
export declare enum BoardGrantState {
    Disabled = "board-grant-disabled",
    Granted = "board-granted",
    NotGranted = "board-not-granted"
}
export declare const BoardGrantIconType: {
    "board-grant-disabled": {
        icon: SvgIconEnum;
        color: string;
    };
    "board-granted": {
        icon: SvgIconEnum;
        color: string;
    };
    "board-not-granted": {
        icon: SvgIconEnum;
        color: string;
    };
};
export declare type Profile = {
    uid: string | number;
    name: string;
    isOnPodium: boolean;
    boardGrantState: BoardGrantState;
    isChatMuted: boolean;
    cameraState: DeviceState;
    microphoneState: DeviceState;
    stars: number;
    operations: Operations;
};
export declare type CarouselProps = {
    times: string;
    isOpenCarousel: boolean;
    mode: string;
    randomValue: string;
    onTimesChange: (times: string, eventType: 'change' | 'blur') => void;
    onOpenCarousel: (isOpen: boolean) => void;
    onModeChange: (mode: string) => void;
    onRandomValueChange: (randomValue: string) => void;
};
export declare type RosterProps = {
    /**
     * 组件宽度
     */
    width?: number;
    /**
     * 房主姓名
     */
    hostname: string;
    /**
     * 轮播相关配置项
     */
    carouselProps: CarouselProps;
    /**
     * 可选功能
     */
    functions?: Array<SupportedFunction>;
    /**
     * 点击右上角关闭按钮
     */
    onClose: () => void;
    /**
     * 搜索关键字
     */
    keyword: string;
    /**
     * 关键字搜索变化
     */
    onKeywordChange: (evt: any) => void;
    /**
     * 标题
     */
    title?: string;
    /**
     * 拖动区域所在范围dom的class
     */
    bounds?: string;
    children?: React.ReactNode;
};

import { FC } from 'react';
export declare const PanelStateContext: import("react").Context<{
    visiblePanelId: number | string;
    onTrigger: (panelId: number | string) => void;
    getNextPanelId: () => number | string;
    closeAll: () => void;
}>;
export declare const usePanelState: () => {
    visiblePanelId: string | number;
    onTrigger: (panelId: number | string) => void;
    getNextPanelId: () => number;
    closeAll: () => void;
};
declare type PanelProps = {
    trigger: React.ReactElement;
    className?: string;
    onOpen?: () => void;
    onClose?: () => void;
    panelId?: string;
    children?: React.ReactNode;
};
export declare const Panel: FC<PanelProps>;
export {};

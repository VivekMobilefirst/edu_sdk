import { FC } from 'react';
import './widget-modal.css';
declare type WidgetModalProps = {
    title: string;
    closable: boolean;
    minHeight?: number;
    minWidth?: number;
    onCancel: () => void;
    onResize?: ({ width, height }: {
        width: number;
        height: number;
    }, initial: boolean) => void;
    header?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    showFullscreen?: boolean;
    showRefresh?: boolean;
    onFullScreen?: () => void;
    onReload?: () => void;
};
export declare const WidgetModal: FC<WidgetModalProps>;
export {};

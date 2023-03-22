import { FC } from 'react';
import './index.css';
interface ConfirmDialogH5Props {
    title?: React.ReactNode;
    context?: React.ReactNode;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    onOk: () => void;
    onCancel: () => void;
}
export declare const ConfirmDialogH5: FC<ConfirmDialogH5Props>;
export {};

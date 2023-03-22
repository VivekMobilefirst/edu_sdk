/// <reference types="react" />
import { ConfirmDialogAction } from '@/infra/stores/common/type';
import { BaseDialogProps } from '.';
export declare const Confirm: React.FC<BaseDialogProps & {
    title: string;
    content: string;
    opts?: {
        actions?: ConfirmDialogAction[];
        btnText?: Record<ConfirmDialogAction, string>;
        onOk?: () => void;
        onCancel?: () => void;
    };
}>;

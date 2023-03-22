import React, { FC } from 'react';
declare type ConfirmDialogProps = {
    children: React.ReactNode;
    onOk: () => void | Promise<void>;
    onCancel: () => void | Promise<void>;
    onOkText?: string;
    onCancelText?: string;
};
export declare const ConfirmDialog: FC<ConfirmDialogProps>;
export {};

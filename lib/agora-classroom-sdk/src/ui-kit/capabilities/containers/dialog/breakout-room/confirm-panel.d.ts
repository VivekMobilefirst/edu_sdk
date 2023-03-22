import React, { FC } from 'react';
declare type ConfirmPanelProps = {
    title: string;
    onOk: () => void | Promise<void>;
    onCancel: () => void | Promise<void>;
    panelId?: string;
    children?: React.ReactNode;
};
export declare const ConfirmPanel: FC<ConfirmPanelProps>;
export {};

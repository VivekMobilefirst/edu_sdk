import { FC } from 'react';
import { BaseDialogProps } from '.';
export declare const GenericErrorDialog: FC<BaseDialogProps & {
    onOK: () => void;
    okBtnText: string;
    title: string;
    content: string;
    error: Error;
}>;

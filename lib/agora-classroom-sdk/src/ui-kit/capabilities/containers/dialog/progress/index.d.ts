import React from 'react';
import { ProgressProps } from '~ui-kit/components/progress';
import './style.css';
declare type ProgressListItem = Pick<ProgressProps, 'width' | 'progress'> & {
    key: string;
    auto?: boolean;
};
declare const DialogProgressApi: {
    show: (dialog: ProgressListItem) => void;
    destroy: (key: React.Key) => void;
};
export default DialogProgressApi;

import React from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export declare type ProgressType = 'download';
export interface ProgressProps extends BaseProps {
    progress: number;
    width: number;
    type: ProgressType;
}
export declare const Progress: React.FC<ProgressProps>;

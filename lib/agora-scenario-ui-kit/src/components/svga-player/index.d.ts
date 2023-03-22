import React from 'react';
import { BaseProps } from '../util/type';
export type { SvgaTypes } from './svga-types';
export interface SvgaPlayerProps extends BaseProps {
    width?: number;
    height?: number;
    url: string;
    onFinish?: () => void;
    loops?: boolean;
}
export declare const SvgaPlayer: React.FC<SvgaPlayerProps>;

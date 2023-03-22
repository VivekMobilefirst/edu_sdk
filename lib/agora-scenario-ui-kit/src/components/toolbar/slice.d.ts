import React, { FC } from 'react';
import { ToolItem } from './tool';
export interface SliceItem {
    id: string;
    icon: React.ReactElement;
    name: string;
    disabled?: boolean;
}
export interface SliceProps extends ToolItem {
    slicersList: SliceItem[];
    onClick?: (value: string) => void;
    hover?: boolean;
}
export declare const Slice: FC<SliceProps>;

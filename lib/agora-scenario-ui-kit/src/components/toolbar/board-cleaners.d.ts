import React, { FC } from 'react';
import { ToolItem } from './tool';
export interface CleanerItem {
    id: string;
    icon: React.ReactElement;
    name: string;
    disabled?: boolean;
}
export interface BoardCleanersProps extends ToolItem {
    cleanersList: CleanerItem[];
    onClick?: (value: string) => void;
    activeItem?: string;
    hover?: boolean;
}
export declare const BoardCleaners: FC<BoardCleanersProps>;

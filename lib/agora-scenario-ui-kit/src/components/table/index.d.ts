import React from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export interface TableBaseProps extends BaseProps {
    className?: string;
    children?: any;
    align?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
    onClick?: (evt: any) => Promise<void> | void;
    hoverClass?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onScroll?: React.UIEventHandler<HTMLDivElement>;
}
export interface TableProps extends TableBaseProps {
}
export declare const Table: React.FC<TableProps>;
export interface ColProps extends TableBaseProps {
    width?: 9 | 20;
}
export declare const Col: React.FC<ColProps>;
export interface RowProps extends TableBaseProps {
    border?: 1;
    height?: 10;
    gap?: 10;
}
export declare const Row: React.FC<RowProps>;
export interface ItemFontColorProps extends BaseProps {
    children: any;
    color?: string;
    width?: number;
    title?: string;
}
export declare const Inline: React.FC<ItemFontColorProps>;
export interface RowProps extends TableBaseProps {
}
export declare const TableHeader: React.FC<RowProps>;

import React, { FC, EventHandler } from 'react';
import { BaseProps } from '../../components/util/type';
import './index.css';
export interface CardProps extends BaseProps {
    width?: number;
    height?: number;
    borderRadius?: number | string;
    children?: React.ReactNode;
    onMouseDown?: EventHandler<any>;
    onMouseUp?: EventHandler<any>;
    onMouseLeave?: EventHandler<any>;
    onScroll?: EventHandler<any>;
}
export declare const Card: FC<CardProps>;

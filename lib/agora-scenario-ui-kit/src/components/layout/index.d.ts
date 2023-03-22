import React, { FC } from 'react';
import { BaseProps } from '../util/type';
import './index.css';
export interface LayoutProps extends BaseProps {
    direction?: 'row' | 'col' | 'col-reverse';
    children?: React.ReactNode;
}
export declare const Layout: FC<LayoutProps>;
export declare const Header: FC<BaseProps>;
export declare const Aside: FC<BaseProps>;
export declare const Content: FC<BaseProps>;

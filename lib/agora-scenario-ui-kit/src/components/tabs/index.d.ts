import React, { FC } from 'react';
import './index.css';
import { TabsProps as RcTabsProps } from 'rc-tabs';
export declare type TabsType = 'line' | 'card' | 'editable-card';
export type { TabPaneProps } from 'rc-tabs';
export { TabPane } from 'rc-tabs';
export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
    type?: TabsType;
    centered?: boolean;
    onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
}
export declare const Tabs: FC<TabsProps>;

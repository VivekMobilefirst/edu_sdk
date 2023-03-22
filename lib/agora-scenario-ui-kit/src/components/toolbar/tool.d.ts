import React, { FC, ReactEventHandler } from 'react';
import { BaseProps } from '../util/type';
import { SvgIconEnum } from '../svg-img/type';
export interface ToolItem extends BaseProps {
    value: string;
    label: any;
    icon: SvgIconEnum;
    isActive?: boolean;
    hover?: boolean;
    component?: React.FC<{
        isActive: boolean;
        onClick: ReactEventHandler<any>;
        hover?: boolean;
    }>;
}
export interface ToolProps extends ToolItem {
    onClick?: (value: string) => void;
}
export declare const Tool: FC<ToolProps>;

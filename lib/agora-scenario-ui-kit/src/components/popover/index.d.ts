import React from 'react';
import { AbstractTooltipProps } from '../tooltip';
import { RenderFunction } from '../util/getRenderPropValue';
import './index.css';
export interface PopoverProps extends AbstractTooltipProps {
    title?: React.ReactNode | RenderFunction;
    content?: React.ReactNode | RenderFunction;
}
export declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<unknown>>;

import React from 'react';
import { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import { AdjustOverflow, PlacementsConfig } from './placements';
import { placements as Placements } from 'rc-tooltip/lib/placements';
import './index.css';
export type { AdjustOverflow, PlacementsConfig };
export declare type TooltipPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export interface AbstractTooltipProps extends Partial<Omit<RcTooltipProps, 'children'>> {
    style?: React.CSSProperties;
    className?: string;
    color?: string;
    placement?: TooltipPlacement;
    builtinPlacements?: typeof Placements;
    openClassName?: string;
    arrowPointAtCenter?: boolean;
    autoAdjustOverflow?: boolean | AdjustOverflow;
    getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    children?: React.ReactNode;
}
export declare type RenderFunction = () => React.ReactNode;
export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
    title?: React.ReactNode | RenderFunction;
    overlay: React.ReactNode | RenderFunction;
}
export interface TooltipPropsWithTitle extends AbstractTooltipProps {
    title: React.ReactNode | RenderFunction;
    overlay?: React.ReactNode | RenderFunction;
}
export declare type TooltipProps = TooltipPropsWithTitle | TooltipPropsWithOverlay;
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<unknown>>;

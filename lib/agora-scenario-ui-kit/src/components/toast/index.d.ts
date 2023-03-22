import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export declare type ToastCategory = 'success' | 'error' | 'warning';
export interface ToastProps extends BaseProps {
    type?: 'success' | 'error' | 'warning';
    text?: string;
    duration?: number;
    closeToast?: CallableFunction;
    canStop?: boolean;
}
declare type ToastType = FC<ToastProps> & {
    show: (params: ToastProps) => void;
};
export declare const Toast: ToastType;
export {};

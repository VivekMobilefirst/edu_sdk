import { CSSProperties } from 'react';
import { SvgIconEnum } from '../svg-img';
export interface BaseProps {
    style?: CSSProperties;
    className?: string;
    id?: string;
}
export declare const tuple: <T extends string[]>(...args: T) => T;
export declare type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;
export declare type IconWithState = {
    icon: SvgIconEnum;
    color?: string;
};

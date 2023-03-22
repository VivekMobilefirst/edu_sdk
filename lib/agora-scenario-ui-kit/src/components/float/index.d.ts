import { FC } from 'react';
import { BaseProps } from '~components/util/type';
export interface FloatProps extends BaseProps {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    direction?: 'row' | 'col';
    align?: 'start' | 'end';
    justify?: 'start' | 'end';
    gap: number;
}
export declare const Float: FC<FloatProps>;

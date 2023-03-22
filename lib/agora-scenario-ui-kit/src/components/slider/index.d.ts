import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import 'rc-slider/assets/index.css';
import './index.css';
declare type tooltipPositionProps = 'top' | 'bottom' | '';
export interface SliderProps extends BaseProps {
    defaultValue?: number;
    value?: number;
    disabled?: boolean;
    max?: number;
    min?: number;
    step?: number;
    tooltipPosition?: tooltipPositionProps;
    onChange?: (value: number) => void;
}
export declare const Slider: FC<SliderProps>;
export {};

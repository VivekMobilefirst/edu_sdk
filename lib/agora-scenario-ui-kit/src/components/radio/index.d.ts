import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
declare type RadioElement = {
    label: string;
    value: any;
    onChange?: () => void;
    name?: string;
    checked?: boolean;
};
declare type RadioProps = RadioElement & BaseProps;
declare type RadioGroupProps = {
    gap?: number;
    direction?: 'horizontal' | 'vertical';
    name: string;
    radios: RadioElement[];
    value?: any;
    onChange?: (val: any) => void;
};
export declare const Radio: FC<RadioProps>;
export declare const RadioGroup: FC<RadioGroupProps>;
export {};

import { FC, SyntheticEvent } from 'react';
import { BaseProps } from '../util/type';
import './index.css';
declare type CheckboxProps = BaseProps & {
    text?: string;
    value?: any;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
    gap?: number;
};
export declare const CheckBox: FC<CheckboxProps>;
export {};

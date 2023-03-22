import React, { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export interface InputProps extends BaseProps {
    type?: string;
    placeholder?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    disabled?: boolean;
    value?: any;
    inputPrefixWidth?: number;
    rule?: RegExp;
    errorMsg?: string;
    errorMsgPositionLeft?: number;
    min?: number;
    max?: number;
    width?: number;
    maxLength?: string | number;
    maxNumber?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
export declare const Input: FC<InputProps>;
export interface SearchProps extends InputProps {
    onSearch: (value: string) => void | Promise<void>;
    suffix?: any;
    prefix?: any;
}
export declare const Search: FC<SearchProps>;

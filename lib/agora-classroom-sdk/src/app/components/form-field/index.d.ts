import { FC } from "react";
import './style.css';
export declare type CommonProps = {
    placeholder?: string;
    value: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onKeyDown?: () => void;
    onKeyUp?: () => void;
    options?: {
        text: string;
        value: string;
    }[];
    readOnly?: boolean;
    error?: string;
};
export declare type FieldProps = {
    label: string;
    type: 'text' | 'select';
    width?: number;
} & CommonProps;
export declare const Field: FC<FieldProps>;
export declare const TextInput: FC<CommonProps>;

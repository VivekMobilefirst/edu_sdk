import React, { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export declare type SelectOption = {
    label: string;
    value: any;
};
export interface SelectProps extends BaseProps {
    defaultValue?: any;
    value?: any;
    placeholder?: string;
    options: SelectOption[];
    isSearchable?: boolean;
    defaultMenuIsOpen?: boolean;
    isMenuTextCenter?: boolean;
    prefix?: React.ReactNode;
    maxMenuHeight?: number;
    onChange?: (value: any) => unknown;
    size?: 'sm';
    direction?: 'up' | 'down';
    onOpen?: () => void;
    onClose?: () => void;
}
export declare const Select: FC<SelectProps>;

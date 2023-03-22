import { EventHandler, FC, SyntheticEvent } from 'react';
import { BaseProps } from '../util/type';
import './index.css';
declare type ButtonType = 'primary' | 'secondary' | 'ghost' | 'danger';
export interface ButtonProps extends BaseProps {
    type?: ButtonType;
    size?: 'xs' | 'sm' | 'lg';
    disabled?: boolean;
    action?: string;
    animate?: boolean;
    onClick?: EventHandler<SyntheticEvent<HTMLButtonElement>>;
    onMouseOver?: EventHandler<SyntheticEvent<HTMLButtonElement>>;
    onMouseLeave?: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}
export declare const Button: FC<ButtonProps>;
export {};

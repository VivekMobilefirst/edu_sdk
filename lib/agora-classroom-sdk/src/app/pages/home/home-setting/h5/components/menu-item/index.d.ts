import { FC } from 'react';
import './index.css';
export interface MenuItemProps {
    text: string;
    onClick: () => void;
    rightContent?: React.ReactNode;
}
export declare const ArrowRightIcon: () => JSX.Element;
export declare const CheckIcon: FC<{
    checked: boolean;
}>;
export declare const MenuItem: FC<MenuItemProps>;

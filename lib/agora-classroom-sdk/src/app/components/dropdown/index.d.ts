import { FC } from "react";
import './style.css';
declare type DropdownProps = {
    options: {
        text: string;
        value: string;
    }[];
    value: string;
    onChange: (value: string) => void;
    width?: number;
};
export declare const Dropdown: FC<DropdownProps>;
export {};

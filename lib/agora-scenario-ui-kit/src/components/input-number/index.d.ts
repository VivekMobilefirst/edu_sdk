import { FC } from 'react';
import './index.css';
declare type InputNumberProps = {
    min: number;
    max: number;
    value?: number;
    onChange: (value: number) => void;
};
export declare const InputNumber: FC<InputNumberProps>;
export {};

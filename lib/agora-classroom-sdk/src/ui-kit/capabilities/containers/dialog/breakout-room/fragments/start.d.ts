import { FC } from 'react';
import './index.css';
declare type Props = {
    onCancel: () => void;
    onNext: (params: {
        groupNum: number;
    }) => void;
};
export declare const Start: FC<Props>;
export {};

import { FC, ReactNode } from 'react';
import { BaseProps } from '../util/type';
import './index.css';
export interface AffixProps extends BaseProps {
    top?: number | string;
    left?: number | string;
    content?: ReactNode;
    collapse?: boolean;
    onCollapse?: () => void;
}
export declare const Affix: FC<AffixProps>;

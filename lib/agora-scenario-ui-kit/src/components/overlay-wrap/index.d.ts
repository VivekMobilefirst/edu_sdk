import { FC } from 'react';
import { BaseProps } from '~components/util/type';
import './index.css';
interface OverlayWrapProps extends BaseProps {
    opened: boolean;
    centered?: boolean;
    onExited?: (() => void) | undefined;
}
export declare const OverlayWrap: FC<OverlayWrapProps>;
export {};

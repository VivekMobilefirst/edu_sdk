import { FC, MouseEvent } from 'react';
import { BaseProps } from '../util/type';
import { PathOptions } from './svg-dict';
import { SvgIconEnum } from './type';
import './index.css';
export declare type SvgImgProps = BaseProps & {
    type: SvgIconEnum;
    colors?: Partial<PathOptions>;
    size?: number;
    onClick?: (e: MouseEvent) => void;
    onMouseDown?: (e: MouseEvent) => void;
    onMouseUp?: (e: MouseEvent) => void;
};
export declare const SvgImg: FC<SvgImgProps>;
export declare type SvgIconProps = BaseProps & {
    type: SvgIconEnum;
    colors?: Partial<PathOptions>;
    hoverType: SvgIconEnum;
    hoverColors?: Partial<PathOptions>;
    size?: number;
    onClick?: any;
    canHover?: boolean;
};
export declare const SvgIcon: FC<SvgIconProps>;
export { SvgIconEnum } from './type';

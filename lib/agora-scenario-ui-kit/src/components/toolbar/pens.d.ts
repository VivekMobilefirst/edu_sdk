import { FC } from 'react';
import { ToolItem } from './tool';
export interface PensProps extends ToolItem {
    pens?: string[];
    activePen?: string;
    onClick?: (value: string) => void;
    isActive?: boolean;
    colors?: string[];
    activeColor?: string;
    colorSliderMin?: number;
    colorSliderMax?: number;
    colorSliderDefault?: number;
    strokeWidthValue?: number;
    colorSliderStep?: number;
    paletteMap?: Record<string, string>;
    onColorClick?: (value: string) => void;
    onSliderChange?: (value: any) => void;
}
export declare const Pens: FC<PensProps>;

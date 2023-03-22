import { FC } from 'react';
export interface ToolCabinetProps {
    label: string;
    visible: boolean;
    onVisibilityChange: (visible: boolean) => void;
}
export declare const ToolCabinet: FC<ToolCabinetProps>;

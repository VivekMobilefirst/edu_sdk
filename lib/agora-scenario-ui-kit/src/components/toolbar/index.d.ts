import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export { Pens } from './pens';
export { ToolCabinet } from './tool-cabinet';
export { BoardCleaners } from './board-cleaners';
export { Slice } from './slice';
export { Tool } from './tool';
export type { ToolProps } from './tool';
export interface ToolbarProps extends BaseProps {
    defaultOpened?: boolean;
    onOpenedChange?: (opened: boolean) => void;
}
export declare const Toolbar: FC<ToolbarProps>;

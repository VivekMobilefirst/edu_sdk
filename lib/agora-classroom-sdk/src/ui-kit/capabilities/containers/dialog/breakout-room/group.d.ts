import { FC } from 'react';
import { TreeModel } from '~ui-kit';
declare type GroupPanelProps = {
    groups: {
        text: string;
        id: string;
    }[];
    panelId?: string;
    onOpen?: () => void;
    onClose?: (users: string[]) => void;
    onChange?: (users: string[]) => void;
    canExpand?: boolean;
    onNodeClick?: (node: TreeModel, level: number) => void;
    children?: React.ReactNode;
};
export declare const GroupPanel: FC<GroupPanelProps>;
export {};

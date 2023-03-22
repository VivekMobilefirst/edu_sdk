import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './style.css';
export declare type TreeModel = {
    id: string;
    text: string;
    children?: TreeModel[];
};
declare type MultiRootTreeProps = {
    data: TreeModel[];
    renderNode?: (node: TreeModel, level: number) => JSX.Element | undefined;
    gap?: number;
    disableExpansion?: boolean;
    childClassName?: string;
    showArrowAlways?: boolean;
} & BaseProps;
declare type TreeProps = {
    level: number;
    data: TreeModel;
    gap?: number;
    renderNode?: (node: TreeModel, level: number) => JSX.Element | undefined;
    disableExpansion?: boolean;
    childClassName?: string;
    showArrowAlways?: boolean;
};
export declare const MultiRootTree: FC<MultiRootTreeProps>;
export declare const Tree: FC<TreeProps>;
declare type TreeNodeProps = {
    content: React.ReactNode;
    className?: string;
    tail?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const TreeNode: FC<TreeNodeProps>;
export {};

import React from 'react';
import { Column, Profile } from '~components/roster';
import { Operation, SupportedFunction } from '~ui-kit';
declare type RosterTableProps = {
    list: Profile[];
    functions?: Array<SupportedFunction>;
    onActionClick?: (operation: Operation, profile: Profile) => void;
};
declare type InfiniteScrollRosterTableProps = {
    hasMore: boolean;
    onFetch: () => void;
} & RosterTableProps;
export declare const InteractiveCol: ({ col, index: idx, data, onClick, }: {
    col: Column;
    index: number;
    data: Profile;
    onClick: (operation: Operation, profile: Profile) => void;
}) => JSX.Element;
export declare const RosterTable: React.FC<RosterTableProps>;
export declare const InfiniteScrollRosterTable: React.FC<InfiniteScrollRosterTableProps>;
export {};

import React, { FC } from 'react';
declare type UserPanelProps = {
    groupUuid?: string;
    users: {
        userUuid: string;
        userName: string;
        groupUuid: string | undefined;
    }[];
    limitCount: number;
    onOpen?: () => void;
    onClose?: (users: string[]) => void;
    onChange?: (users: string[]) => void;
    onError?: (message: string) => void;
    panelId?: string;
    children?: React.ReactNode;
};
export declare const UserPanel: FC<UserPanelProps>;
export {};

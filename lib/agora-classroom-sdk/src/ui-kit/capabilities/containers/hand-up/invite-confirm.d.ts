import React from 'react';
import { EduShareUIStore } from '@/infra/stores/common/share-ui';
import { HandUpUIStore } from '@/infra/stores/common/hand-up';
import './invite-confirm.css';
interface InviteConfirmContainerProps {
    id: string;
    onOk: () => void;
    onClose: () => void;
    onCancel: () => void;
}
export declare const useInvitedModal: (beingInvited: boolean, handUpUIStore: HandUpUIStore, shareUIStore: EduShareUIStore) => void;
export declare const InviteConfirmContainer: React.FC<InviteConfirmContainerProps>;
export {};

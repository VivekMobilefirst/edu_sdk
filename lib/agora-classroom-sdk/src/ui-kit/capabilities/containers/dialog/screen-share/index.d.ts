import { ScreenShareRoleType } from '@/infra/stores/common/type';
import './index.css';
export declare const ScreenShareDialog: ({ id, onOK, onCancel, }: {
    id: string;
    onOK: (roleType: ScreenShareRoleType) => void;
    onCancel?: (() => void) | undefined;
}) => JSX.Element;

import { FC } from 'react';
import { BaseProps } from '../../../components/util/type';
import './index.css';
export interface ChatMinProps extends BaseProps {
    unreadCount?: number;
    onClick?: () => void | Promise<void>;
}
export declare const ChatMin: FC<ChatMinProps>;

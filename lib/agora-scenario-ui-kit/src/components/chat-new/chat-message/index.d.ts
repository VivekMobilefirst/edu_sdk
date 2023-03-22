import { CSSProperties, FC } from 'react';
import { Message } from '../interface';
import './index.css';
export interface ChatMessageProps extends Message {
    isOwn: boolean;
    style?: CSSProperties;
}
export declare const ChatMessage: FC<ChatMessageProps>;

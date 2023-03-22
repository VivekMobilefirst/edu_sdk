import { FC } from 'react';
import { ChatEvent, Conversation } from '../interface';
import './index.css';
export interface ChatListProps {
    conversations: Conversation[];
    onPullRefresh?: (evt: ChatEvent) => void;
    onClickConversation?: (conversation: Conversation) => void;
    unreadConversationCountFn: any;
}
export declare const ChatList: FC<ChatListProps>;

import { FC } from 'react';
import { AffixProps } from '../affix';
import './index.css';
import { ChatEvent, ChatListType, Conversation, Message, IChatConfigUI } from './interface';
export interface ChatProps extends AffixProps {
    /**
     * 消息列表
     */
    messages?: Message[];
    /**
     * 对话列表
     */
    conversations?: Conversation[];
    /**
     * 是否对学生禁言
     */
    canChatting?: boolean;
    /**
     * 是否主持人
     */
    isHost?: boolean;
    /**
     * 当前用户 uid
     */
    uid: string | number;
    /**
     * 输入框内容的值
     */
    chatText?: string;
    showCloseIcon?: boolean;
    unreadCount?: number;
    /**
     * 若提供这个属性，则不显示对话列表，提问页直接使用提供的这个对话
     */
    singleConversation?: Conversation;
    /**
     * 刷新聊天消息列表
     */
    onPullRefresh: (evt: ChatEvent) => Promise<void> | void;
    /**
     *  禁言状态改变的回调
     */
    onCanChattingChange: (canChatting: boolean) => void;
    /**
     * 输入框发生变化的回调
     */
    onText: (evt: ChatEvent, content: string) => void;
    /**
     * 点击发送按钮的回调
     */
    onSend: (evt: ChatEvent) => void | Promise<void>;
    /**
     * 点击最小化的聊天图标
     */
    onClickMiniChat?: () => void | Promise<void>;
    /**
     * 未读房间消息
     */
    unReadMessageCount?: number;
    /**
     *
     */
    unreadConversationCountFn: any;
    /**
     * 切换tab
     */
    onChangeActiveTab?: (activeTab: ChatListType, activeConversation?: Conversation) => void | Promise<void>;
    configUI?: IChatConfigUI;
}
export declare const SimpleChatNew: FC<ChatProps>;
export declare const ChatNew: FC<ChatProps>;

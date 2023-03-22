import { FC } from 'react';
import { BaseProps } from '../../util/type';
import { Message } from '../interface';
export interface MessageListProps extends BaseProps {
    /**
     * 消息列表
     */
    messages?: Message[];
    /**
     * 禁止输入框
     */
    disableChat: boolean;
    /**
     * 刷新聊天消息列表
     */
    onPullFresh: () => Promise<void> | void;
    /**
     * 点击发送按钮的回调
     */
    onSend: (text: string) => void | Promise<void>;
    /**
     * 是否显示输入框
     */
    showInputBox?: boolean;
}
export declare const MessageList: FC<MessageListProps>;

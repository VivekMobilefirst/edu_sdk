export interface Message {
    id: string;
    uid: string | number;
    userName: string;
    role: string;
    timestamp: number;
    content: string;
    isOwn: boolean;
    unread: boolean;
    isBroadcast: boolean;
}
export interface Conversation {
    userName: string;
    userUuid: string;
    unreadMessageCount: number;
    messages: Message[];
    timestamp: number;
    unread: boolean;
}
export declare type ChatListType = 'room' | 'conversation' | 'conversation-list';
export declare type ChatEvent = {
    type: ChatListType;
    conversation?: Conversation;
    text?: string;
};
export interface IChatConfigUI {
    visibleQuestion?: false;
    showInputBox?: boolean;
}

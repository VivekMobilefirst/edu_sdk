import { WindowID } from '../api';
import type { IpcRendererEvent } from 'electron';
import { ChannelType } from './ipc-channels';
declare type ChannelMessage = {
    type: string;
    payload?: unknown;
};
declare type ChannelMessageCallback = (event: IpcRendererEvent, message: ChannelMessage, ...args: any) => void;
declare type ChannelMessageListenerOptions = {
    once?: boolean;
};
export declare const withTimeout: <T>(p: Promise<T>, timeout?: number) => Promise<T>;
/**
 * 打开窗口
 * @param channel
 * @param args
 * @returns
 */
export declare const sendToMainProcess: (channel: ChannelType, ...args: unknown[]) => Promise<unknown>;
/**
 * 发送消息到指定窗口
 * @param windowID
 * @param args
 * @returns
 */
export declare const sendToRendererProcess: (windowID: WindowID, channel: ChannelType, message: ChannelMessage) => Promise<unknown>;
/**
 * 监听主进程消息
 * @param channel
 * @param callback
 * @param options
 * @returns
 */
export declare const listenChannelMessage: (channel: ChannelType, callback: ChannelMessageCallback, options?: ChannelMessageListenerOptions | undefined) => () => void;
export {};

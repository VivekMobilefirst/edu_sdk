import React, { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export interface ModalProps extends BaseProps {
    /** 标题 */
    title?: string | React.ReactNode;
    /** 遮罩效果 */
    showMask?: boolean;
    /** 是否显示右上角的关闭按钮 */
    closable?: boolean;
    /** 底部内容 */
    footer?: React.ReactNode[];
    style?: any;
    /** 点击确定回调 */
    onOk?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>;
    /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>;
    component?: React.ReactNode;
    /**
     * 是否有蒙层
     */
    hasMask?: boolean;
    maskClosable?: boolean;
    contentClassName?: string;
    modalType?: 'normal' | 'back' | 'minimize';
    children?: React.ReactNode;
    btnId?: string;
    topLevel?: boolean;
    animate?: boolean;
}
declare type ModalType = FC<ModalProps>;
export declare const Modal: ModalType;
export {};

import { Injectable } from 'agora-rte-sdk';
import { EduClassroomStore } from 'agora-edu-core';
import { EduShareUIStore } from './share-ui';
import { Board } from '@/infra/protocol/board';
import { Extension } from '@/infra/protocol';
export declare abstract class EduUIStoreBase {
    private static _boardApi;
    private static _extensionApi;
    protected logger: Injectable.Logger;
    /**
     * 参数覆盖
     */
    protected get uiOverrides(): {};
    /**
     * 当前 EduClassroomStore 实例
     */
    readonly classroomStore: EduClassroomStore;
    /**
     * EduShareUIStore 实例
     */
    readonly shareUIStore: EduShareUIStore;
    /**
     * 构造函数
     * @param store
     * @param shareUIStore
     */
    constructor(store: EduClassroomStore, shareUIStore: EduShareUIStore);
    /**
     * 初始化
     */
    abstract onInstall(): void;
    /**
     * 销毁
     */
    abstract onDestroy(): void;
    /**
     * 白板API服务
     */
    get boardApi(): Board;
    /**
     * 扩展API
     */
    get extensionApi(): Extension;
}

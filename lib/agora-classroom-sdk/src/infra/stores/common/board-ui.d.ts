/// <reference types="react" />
import { IReactionDisposer, Lambda } from 'mobx';
import { EduUIStoreBase } from './base';
export declare class BoardUIStore extends EduUIStoreBase {
    protected _disposers: (IReactionDisposer | Lambda)[];
    protected get uiOverrides(): {
        heightRatio: number;
    };
    /**
     * 白板容器高度
     * @returns
     */
    get boardAreaHeight(): number;
    isCopying: boolean;
    get isTeacherOrAssistant(): boolean;
    get grantedUsers(): Set<string>;
    get isGrantedBoard(): boolean;
    get undoSteps(): number;
    get redoSteps(): number;
    get currentSceneIndex(): number;
    get scenesCount(): number;
    get mounted(): boolean;
    onInstall(): void;
    private _handleUIEvents;
    addMainViewScene(): void;
    toPreMainViewScene(): void;
    toNextMainViewScene(): void;
    setDelay(delay: number): void;
    /**
     * for teacher and assistent only
     *
     * @param event
     */
    handleDragOver(event: React.DragEvent<HTMLDivElement>): void;
    /**
     * for teacher and assistent only
     * @param event
     */
    hanldeDrop(event: React.DragEvent<HTMLDivElement>): Promise<void>;
    onDestroy(): void;
}

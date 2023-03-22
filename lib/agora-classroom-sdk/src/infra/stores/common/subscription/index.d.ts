import { AgoraRteScene } from 'agora-rte-sdk';
import { SceneSubscription } from './room';
import { EduUIStoreBase } from '../base';
export declare class SubscriptionUIStore extends EduUIStoreBase {
    private _disposers;
    private static _sceneSubscriptions;
    setActive(sceneId: string): void;
    setCDNMode(cdnMode: boolean): void;
    createSceneSubscription(scene: AgoraRteScene): SceneSubscription | undefined;
    onInstall(): void;
    onDestroy(): void;
}

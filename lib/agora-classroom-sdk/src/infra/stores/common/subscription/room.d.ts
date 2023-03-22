import { AgoraMediaControl, AgoraRteScene, AgoraStream, Injectable } from 'agora-rte-sdk';
import { AGRtcChannel } from 'agora-rte-sdk/lib/core/rtc/channel';
export declare abstract class SceneSubscription {
    protected _scene: AgoraRteScene;
    protected logger: Injectable.Logger;
    protected _active: boolean;
    protected _isCdnMode: boolean;
    protected _rtcChannel: AGRtcChannel;
    protected _mediaControl: AgoraMediaControl;
    get active(): boolean;
    get isCDNMode(): boolean;
    constructor(_scene: AgoraRteScene);
    abstract handleLocalStreamAdded(streams: AgoraStream[]): void;
    abstract handleLocalStreamUpdated(streams: AgoraStream[]): void;
    abstract handleLocalStreamRemoved(streams: AgoraStream[]): void;
    abstract handleRemoteStreamAdded(streams: AgoraStream[]): void;
    abstract handleRemoteStreamUpdated(streams: AgoraStream[]): void;
    abstract handleRemoteStreamRemoved(streams: AgoraStream[]): void;
    private _handleUserRemoved;
    setActive(active: boolean): void;
    setCDNMode(cdnMode: boolean): void;
}
export declare class MainRoomSubscription extends SceneSubscription {
    handleLocalStreamAdded(streams: AgoraStream[]): void;
    handleLocalStreamUpdated(streams: AgoraStream[]): void;
    handleLocalStreamRemoved(streams: AgoraStream[]): void;
    handleRemoteStreamAdded(streams: AgoraStream[]): void;
    handleRemoteStreamUpdated(streams: AgoraStream[]): void;
    handleRemoteStreamRemoved(streams: AgoraStream[]): void;
    get active(): boolean;
    setActive(active: boolean): void;
    unsubscribeAll(): void;
    subscribe(): void;
}
export declare class SubscriptionFactory {
    static createSubscription(scene: AgoraRteScene): MainRoomSubscription;
}

import { AGScreenShareDevice } from 'agora-rte-sdk';
import { EduUIStoreBase } from '../base';
export declare class RemoteControlUIStore extends EduUIStoreBase {
    private _disposers;
    get remoteControlToolBarActive(): boolean;
    sendStudentListToRemoteControlBar(): void;
    openRemoteControlToolbar(): void;
    moveWindowToTargetScreen(shareDevice: AGScreenShareDevice | undefined): void;
    sendControlRequst(studentUuid: string): void;
    closeRemoteControlToolbar(): void;
    onDestroy(): void;
    onInstall(): void;
}

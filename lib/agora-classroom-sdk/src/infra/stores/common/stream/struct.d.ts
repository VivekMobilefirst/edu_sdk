import { EduRoleTypeEnum, EduStream } from 'agora-edu-core';
import { AgoraFromUser } from 'agora-rte-sdk';
/**
 * 业务流 UI 对象
 */
export declare class EduStreamUI {
    private _renderAt;
    readonly stream: EduStream;
    constructor(stream: EduStream);
    get micIconType(): "microphone-off" | "microphone-on" | "microphone-disabled";
    get isCameraMuted(): boolean;
    get isMicMuted(): boolean;
    get fromUser(): AgoraFromUser;
    get isMirrorMode(): boolean;
    get role(): EduRoleTypeEnum;
    get renderAt(): "Window" | "Bar";
    setRenderAt(at: 'Bar' | 'Window'): void;
}
export interface StreamBounds {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
    [key: string]: number;
}

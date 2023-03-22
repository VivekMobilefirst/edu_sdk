import { EduStreamUI } from "@/infra/stores/common/stream/struct";
import { CSSProperties, FC } from "react";
import { EduStream } from "agora-edu-core";
export declare const TrackPlayer: FC<{
    stream: EduStreamUI;
    className?: string;
    style?: CSSProperties;
}>;
declare type RemoteTrackPlayerProps = {
    stream: EduStream;
    style?: CSSProperties;
    className?: string;
    mirrorMode?: boolean;
};
declare type LocalTrackPlayerProps = Omit<RemoteTrackPlayerProps, 'stream'>;
export declare const LocalTrackPlayer: FC<LocalTrackPlayerProps>;
export declare const RemoteTrackPlayer: FC<RemoteTrackPlayerProps>;
export {};

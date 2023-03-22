import { AgoraRteMediaSourceState } from 'agora-rte-sdk';
import { CSSProperties } from 'react';
declare type CDNPlayerStream = {
    rtmp: string;
    flv: string;
    hls: string;
    videoSourceState: AgoraRteMediaSourceState;
    audioSourceState: AgoraRteMediaSourceState;
};
declare enum RecordStatus {
    starting = -1,
    started = 1,
    stopped = 0
}
declare type CDNPlayerProps = {
    stream: CDNPlayerStream;
    style?: CSSProperties;
    className?: string;
    state: RecordStatus;
    placeholderIcon?: React.ReactElement;
    placeholderText?: string;
};
export declare const CDNPlayer: React.FC<CDNPlayerProps>;
export {};

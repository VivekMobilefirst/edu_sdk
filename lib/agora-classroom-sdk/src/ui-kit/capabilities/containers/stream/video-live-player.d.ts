import { CSSProperties } from 'react';
declare type VideoLivePlayerProps = {
    url: string;
    style?: CSSProperties;
    className?: string;
    ended?: () => void;
    placeholderIcon?: React.ReactElement;
    placeholderText?: string;
    getLiveTime: () => number;
};
export declare type VideoLivePlayerRef = {
    play: (currentTime: number) => void;
    pause: (currentTime: number) => void;
};
export declare const VideoLivePlayer: import("react").ForwardRefExoticComponent<VideoLivePlayerProps & import("react").RefAttributes<VideoLivePlayerRef>>;
export {};

import './index.css';
import React from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
declare global {
    interface Window {
        process: {
            resourcesPath: string;
        };
    }
}
export declare const PretestVideoPlayerLocalCameraPlaceholder: () => JSX.Element;
export declare const MicrophoneSelect: () => JSX.Element;
export declare const CameraSelect: () => JSX.Element;
export declare const PlaybackSelect: () => JSX.Element;
export declare const TrackPlayer: () => JSX.Element;
export declare const CameraPreviewPlayer: () => JSX.Element;
export declare const CameraMirrorCheckBox: () => JSX.Element;
export interface PretestProps extends BaseProps {
    className?: string;
    onOK?: () => void;
}
export declare const RoomPretest: React.FC<PretestProps>;
export declare type RoomPretestContainerProps = {
    onOK?: () => void;
};
export declare const RoomPretestContainer: React.FC<RoomPretestContainerProps>;

import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export interface VolumeProps extends BaseProps {
    backgroundColor?: string;
    activeColor?: string;
    width?: number;
    height?: number;
    currentVolume?: number;
    maxLength: number;
}
export declare const Volume: FC<VolumeProps>;
export interface AudioVolumeProps extends BaseProps {
    isMicMuted?: boolean;
    currentVolume?: number;
}
export declare const AudioVolume: FC<AudioVolumeProps>;

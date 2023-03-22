import React, { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
declare type PlaceholderType = 'emptyHistory' | 'cameraBroken' | 'cameraClose' | 'noBody' | 'noFile' | 'cameraDisabled' | 'noQuestion';
export interface PlaceholderProps extends BaseProps {
    placeholderDesc?: string;
    placeholderType?: PlaceholderType;
    backgroundColor?: string;
}
export declare const Placeholder: FC<PlaceholderProps>;
export interface CameraPlaceHolderProps extends BaseProps {
    state?: 'loading' | 'broken' | 'muted' | 'disabled' | 'none' | 'notpresent' | 'nosetup';
    text?: string;
    placeholderSize?: number;
    children?: React.ReactNode;
}
export declare const CameraPlaceHolder: React.FC<CameraPlaceHolderProps>;
export {};

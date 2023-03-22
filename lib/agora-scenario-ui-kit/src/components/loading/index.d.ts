import React, { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
export declare enum UploadItemStatus {
    Pending = "pending",
    Success = "success",
    Failed = "failed",
    Canceled = "canceled"
}
export interface UploadItem {
    resourceUuid: string;
    iconType?: string;
    fileName?: string;
    fileSize?: string;
    currentProgress?: number;
    status: UploadItemStatus;
}
export interface LoadingProps extends BaseProps {
    hasLoadingGif?: boolean;
    loadingText?: string;
    hasProgress?: boolean;
    currentProgress?: number;
    footer?: React.ReactNode[];
    uploadItemList?: UploadItem[];
    onClick?: (id: string, type: 'delete' | 'click') => void;
    noCloseBtn?: boolean;
    showUploadOpeBtn?: boolean;
    onRetry?: (resourceUuid: string) => void;
    onCancel?: (resourceUuid: string) => void;
}
export interface CircleLoadingProps extends BaseProps {
    width?: string;
    height?: string;
}
export declare const Loading: FC<LoadingProps>;
export declare const CircleLoading: FC<CircleLoadingProps>;

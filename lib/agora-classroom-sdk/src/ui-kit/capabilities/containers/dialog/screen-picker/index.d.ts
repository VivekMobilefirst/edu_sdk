import { FC } from 'react';
import { BaseProps } from '~ui-kit/components/util/type';
import './index.css';
import { AGScreenShareDevice } from 'agora-rte-sdk';
export declare const ScreenPickerDialog: ({ id, onOK, onCancel, windowList, desktopList, }: {
    id: string;
    onOK?: ((id: string) => void) | undefined;
    onCancel?: (() => void) | undefined;
    windowList: (AGScreenShareDevice & {
        imagebase64: string;
    })[];
    desktopList: (AGScreenShareDevice & {
        imagebase64: string;
    })[];
}) => JSX.Element;
export interface ScreenPickerProps extends BaseProps {
    screenShareTitle?: string;
    scrollHeight?: number;
    desktopList: (AGScreenShareDevice & {
        imagebase64: string;
    })[];
    windowList: (AGScreenShareDevice & {
        imagebase64: string;
    })[];
    onActiveItem: (id: string) => void;
    currentActiveId?: string;
    onOK?: () => void;
    onCancel?: () => void;
}
export declare const ScreenPicker: FC<ScreenPickerProps>;

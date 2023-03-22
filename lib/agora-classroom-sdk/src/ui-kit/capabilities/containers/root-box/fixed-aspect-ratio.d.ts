import { FC } from 'react';
declare type FixedAspectRatioProps = {
    minimumWidth?: number;
    minimumHeight?: number;
    trackMargin?: Partial<{
        top: number;
    }>;
    trackResize?: Partial<{
        minHeight: number;
        minWidth: number;
        maxHeight: number;
        maxWidth: number;
    }>;
    children?: React.ReactNode;
};
export declare const TrackArea: ({ top, boundaryName }: {
    top?: number | undefined;
    boundaryName: string;
}) => JSX.Element;
export declare const FixedAspectRatioRootBox: FC<FixedAspectRatioProps>;
export declare const ClassroomTrackBounds: ({ trackMargin }: {
    trackMargin: FixedAspectRatioProps['trackMargin'];
}) => JSX.Element | null;
export {};

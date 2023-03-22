import { EduStreamUI } from '@/infra/stores/common/stream/struct';
import { EduRoleTypeEnum } from 'agora-edu-core';
import React, { CSSProperties, FC } from 'react';
import './index.css';
export declare const AwardAnimations: ({ stream }: {
    stream: EduStreamUI;
}) => JSX.Element;
export declare const StreamPlaceholder: ({ className, style }: {
    role: EduRoleTypeEnum;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
}) => JSX.Element;
export declare const StreamPlayerOverlay: ({ stream }: {
    stream: EduStreamUI;
}) => JSX.Element;
export declare const StreamPlayer: FC<{
    stream: EduStreamUI;
    renderAt: 'Window' | 'Bar';
    style?: CSSProperties;
    toolbarDisabled?: boolean;
}>;
declare type StreamPlayerH5Props = {
    stream: EduStreamUI;
    toolbarDisabled?: boolean;
    className?: string;
    style?: CSSProperties;
};
export declare const StreamPlayerH5: React.FC<StreamPlayerH5Props>;
export declare const CarouselGroup: ({ videoWidth, videoHeight, gap, carouselStreams, }: {
    videoWidth: number;
    videoHeight: number;
    carouselStreams: EduStreamUI[];
    gap: number;
}) => JSX.Element;
export declare const NavGroup: FC<{
    onNext: () => void;
    onPrev: () => void;
    visible: boolean;
}>;
export declare const MeasuerContainer: FC<{
    streamUuid: string;
    style?: CSSProperties;
}>;
export {};

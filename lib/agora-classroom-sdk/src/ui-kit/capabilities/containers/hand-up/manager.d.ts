import { FC } from 'react';
import { BaseWaveArmProps, UserWaveArmInfo } from './types';
export interface WaveArmManagerProps extends BaseWaveArmProps {
    hasWaveArmUser: boolean;
    waveArmCount: number;
}
export declare const WaveArmManager: FC<WaveArmManagerProps>;
export interface StudentsWaveArmListProps extends BaseWaveArmProps {
    userWaveArmList: UserWaveArmInfo[];
    onClick: (userUuid: string) => Promise<void> | void;
}
export declare const StudentsWaveArmList: FC<StudentsWaveArmListProps>;

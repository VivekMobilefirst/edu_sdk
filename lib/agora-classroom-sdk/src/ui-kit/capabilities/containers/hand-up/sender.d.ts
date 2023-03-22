import { FC } from 'react';
import { BaseWaveArmProps } from './types';
export declare enum WaveArmStateEnum {
    waveArmBefore = "wave-arm-before",
    waveArming = "wave-arm-ing",
    waveArmAfter = "wave-arm-after"
}
export interface HandlerCondition {
    oldState: WaveArmStateEnum;
    newState: WaveArmStateEnum;
    callbackFn: () => void;
}
export declare const WaveArmSender: FC<BaseWaveArmProps>;

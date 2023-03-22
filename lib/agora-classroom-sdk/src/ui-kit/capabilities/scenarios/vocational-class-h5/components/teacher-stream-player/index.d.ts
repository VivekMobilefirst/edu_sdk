import React, { FC } from 'react';
import './index.css';
export interface MobileStreamPlayerProps {
    onClick?: React.EventHandler<React.MouseEvent>;
    minimized?: boolean;
}
export declare const MobileTeacherStreamPlayer: FC<MobileStreamPlayerProps>;

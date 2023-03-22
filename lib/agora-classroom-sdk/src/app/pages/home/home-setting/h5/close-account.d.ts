import { FC } from 'react';
import { SettingsMenuEnum } from '.';
interface CloseAccountProps {
    removeMenuPopup: (menu: SettingsMenuEnum) => void;
}
export declare const CloseAccount: FC<CloseAccountProps>;
export {};

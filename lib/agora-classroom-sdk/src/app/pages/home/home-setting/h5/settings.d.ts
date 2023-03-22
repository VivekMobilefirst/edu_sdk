import { FC } from 'react';
import { SettingsMenuEnum } from '.';
interface SettingsMenuProps {
    addMenuPopup: (menu: SettingsMenuEnum) => void;
    removeMenuPopup: (menu: SettingsMenuEnum) => void;
}
export declare const SettingsMenu: FC<SettingsMenuProps>;
export {};

import { FC } from 'react';
import { SettingsMenuEnum } from '.';
interface AboutMenuProps {
    addMenuPopup: (menu: SettingsMenuEnum) => void;
    removeMenuPopup: (menu: SettingsMenuEnum) => void;
}
export declare const AboutMenu: FC<AboutMenuProps>;
export {};

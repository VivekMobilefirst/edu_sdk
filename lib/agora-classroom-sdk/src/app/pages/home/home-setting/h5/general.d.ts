import { FC } from 'react';
import { SettingsMenuEnum } from '.';
interface GeneralMenuProps {
    addMenuPopup: (menu: SettingsMenuEnum) => void;
    removeMenuPopup: (menu: SettingsMenuEnum) => void;
}
export declare const GeneralMenu: FC<GeneralMenuProps>;
export {};

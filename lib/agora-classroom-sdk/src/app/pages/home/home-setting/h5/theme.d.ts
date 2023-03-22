import { FC } from 'react';
import { SettingsMenuEnum } from '.';
interface ThemeMenuProps {
    removeMenuPopup: (menu: SettingsMenuEnum) => void;
}
export declare const ThemeMenu: FC<ThemeMenuProps>;
export {};

import { FC } from 'react';
import { SettingsMenuEnum } from '.';
interface LanguageMenuProps {
    removeMenuPopup: (menu: SettingsMenuEnum) => void;
}
export declare const LanguageMenu: FC<LanguageMenuProps>;
export {};

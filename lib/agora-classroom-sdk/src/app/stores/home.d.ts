import { LanguageEnum, LaunchOption } from '@/infra/api';
import { ToastType } from '@/infra/stores/common/share-ui';
import { FcrMultiThemeMode } from '@/infra/types/config';
import { EduRegion } from 'agora-edu-core';
export declare type HomeLaunchOption = Omit<LaunchOption, 'listener'> & {
    appId: string;
    sdkDomain: string;
    region: EduRegion;
    curService?: string;
    scenes?: any;
    themes?: any;
};
export declare const getRegion: () => EduRegion;
export declare const getLanguage: () => LanguageEnum;
export declare const getTheme: () => FcrMultiThemeMode;
export declare const clearHomeOption: () => void;
export declare class HomeStore {
    launchOption: HomeLaunchOption;
    region: EduRegion;
    language: LanguageEnum;
    theme: FcrMultiThemeMode;
    toastList: ToastType[];
    constructor();
    addToast(toast: ToastType): void;
    removeToast(id: string): void;
    setRegion: (region: EduRegion) => void;
    setTheme: (theme: FcrMultiThemeMode) => void;
    setLanguage: (language: LanguageEnum) => void;
    setLaunchConfig(payload: HomeLaunchOption): void;
    get launchConfig(): any;
    clear(): void;
}

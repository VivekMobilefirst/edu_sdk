import { FcrMultiThemes } from '@/infra/types/config';
declare class FcrMultiThemesImpl implements FcrMultiThemes {
    get light(): {
        /**
         * 背景色
         */
        readonly background: string;
        /**
         * 前景色
         */
        readonly foreground: string;
        /**
         * 组件背景色
         */
        readonly brand: string;
        /**
         * 分割线颜色
         */
        readonly divider: string;
        /**
         * 错误提示颜色
         */
        readonly error: string;
        /**
         * 警告提示色
         */
        readonly warning: string;
        /**
         * 一般提示色
         */
        readonly safe: string;
        /**
         * Icon 主色
         */
        readonly iconPrimary: string;
        /**
         * Icon 副色
         */
        readonly iconSecondary: string;
        /**
         * 图标被选背景色
         */
        readonly iconSelected: string;
        /**
         * 组件背景色
         */
        readonly component: string;
        readonly toastNormal: string;
        readonly textPrimaryButton: string;
        readonly textLevel1: string;
        readonly textLevel2: string;
        readonly textLevel3: string;
        readonly textDisable: string;
        readonly textLink: string;
    };
    get dark(): {
        /**
         * 背景色
         */
        readonly background: string;
        /**
         * 前景色
         */
        readonly foreground: string;
        /**
         * 组件背景色
         */
        readonly brand: string;
        /**
         * 分割线颜色
         */
        readonly divider: string;
        /**
         * 错误提示颜色
         */
        readonly error: string;
        /**
         * 警告提示色
         */
        readonly warning: string;
        /**
         * 一般提示色
         */
        readonly safe: string;
        /**
         * Icon 主色
         */
        readonly iconPrimary: string;
        /**
         * Icon 副色
         */
        readonly iconSecondary: string;
        /**
         * 图标被选背景色
         */
        readonly iconSelected: string;
        /**
         * 组件背景色
         */
        readonly component: string;
        readonly toastNormal: string;
        readonly textPrimaryButton: string;
        readonly textLevel1: string;
        readonly textLevel2: string;
        readonly textLevel3: string;
        readonly textDisable: string;
        readonly textLink: string;
    };
}
export declare const baseTheme: FcrMultiThemesImpl;
export {};

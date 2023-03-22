/// <reference types="react" />
export declare type I18nLanguage = 'zh' | 'en';
export declare const makeContainer: (name: string) => {
    Context: import("react").Context<any>;
    Provider: <T>({ children, value }: {
        children: React.ReactNode;
        value: T;
    }) => import("react").FunctionComponentElement<import("react").ProviderProps<any>>;
    useContext: <T_1>() => T_1;
};
export declare const getOS: () => {
    isTablet: boolean;
    isPhone: boolean;
    isPc: boolean;
};
export declare const Z_INDEX_CONST: {
    zIndexBadge: "auto";
    zIndexTableFixed: number;
    zIndexAffix: number;
    zIndexBackTop: number;
    zIndexPickerPanel: number;
    zIndexPopupClose: number;
    zIndexModal: number;
    zIndexModalMask: number;
    zIndexMessage: number;
    zIndexNotification: number;
    zIndexPopover: number;
    zIndexDropdown: number;
    zIndexPicker: number;
    zIndexPopoconfirm: number;
    zIndexTooltip: number;
    zIndexImage: number;
    zIndexExtApp: number;
    zIndexRtcVideo: number;
    zIndexCameraPlaceholderLoading: number;
    zIndexCameraPlaceholderBroken: number;
    zIndexCameraPlaceholderMuted: number;
    zIndexCameraPlaceholderDisabled: number;
    zIndexCameraPlaceholderNone: number;
};

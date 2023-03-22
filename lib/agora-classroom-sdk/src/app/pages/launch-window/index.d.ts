declare global {
    interface Window {
        __launchWindowID: string;
        __launchLanguage: string;
        __launchArgs: any;
        __launchRoomType: string;
        __launchUIMode: string;
    }
}
export declare const LaunchWindow: () => JSX.Element;

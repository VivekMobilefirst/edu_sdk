import './style.css';
declare global {
    interface Window {
        __launchRegion: string;
        __launchLanguage: string;
        __launchRoomName: string;
        __launchUserName: string;
        __launchRoleType: string;
        __launchRoomType: string;
        __launchCompanyId: string;
        __launchProjectId: string;
    }
}
export declare const HomePage: () => JSX.Element;

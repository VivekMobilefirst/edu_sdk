/**
 * IPC消息通道
 */
export declare enum ChannelType {
    OpenBrowserWindow = "open-browser-window",
    CloseBrowserWindow = "close-browser-window",
    ShowBrowserWindow = "show-browser-window",
    HideBrowserWindow = "hide-browser-window",
    Message = "browser-window-message",
    UpdateBrowserWindow = "update-browser-window",
    MoveWindowToTargetScreen = "move-window-to-target-screen",
    ShortCutCapture = "short-cut-capture"
}
/**
 * IPC消息类型
 */
export declare enum IPCMessageType {
    ControlStateChanged = "ControlStateChanged",
    HideControlBar = "HideControlBar",
    CloseControlBar = "CloseControlBar",
    StudentListUpdated = "StudentListUpdated",
    FetchStudentList = "FetchStudentList",
    StopScreenShareAndRemoteControl = "StopScreenShareAndRemoteControl",
    SwitchScreenShareDevice = "SwitchScreenShareDevice",
    ShortCutCaptureDone = "ShortCutCaptureDone",
    ShortCutCaptureDenied = "ShortCutCaptureDenied"
}

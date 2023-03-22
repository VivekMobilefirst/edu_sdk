/**
 * 教室事件
 * 此类事件从教室发出，在Widget中监听
 */
export declare enum AgoraExtensionRoomEvent {
    /** 白板 */
    BoardSelectTool = "board-select-tool",
    BoardAddPage = "board-add-page",
    BoardRemovePage = "board-remove-page",
    BoardGotoPage = "board-goto-page",
    BoardUndo = "board-undo",
    BoardRedo = "board-redo",
    BoardClean = "board-clean",
    BoardPutImageResource = "board-put-image-resource",
    BoardPutImageResourceIntoWindow = "board-put-image-resource-into-window",
    BoardOpenMaterialResourceWindow = "board-open-material-resource-window",
    BoardOpenMediaResourceWindow = "board-open-media-resource-window",
    BoardOpenH5ResourceWindow = "board-open-h5-resource-window",
    BoardDrawShape = "board-draw-shape",
    BoardGrantPrivilege = "board-grant-privilege",
    BoardChangeStrokeWidth = "board-change-stroke-width",
    BoardChangeStrokeColor = "board-change-stroke-color",
    BoardSaveAttributes = "board-save-attributes",
    BoardLoadAttributes = "board-load-attributes",
    BoardGetSnapshotImageList = "board-get-snapshot-image-list",
    BoardSetDelay = "board-set-delay",
    ToggleBoard = "toggle-board",
    OpenWebview = "open-webview",
    OpenStreamMediaPlayer = "open-stream-media-player",
    ResponseGrantedList = "response-granted-list"
}
/**
 * Widget事件
 * 此事件从Widget发出，在教室内监听
 */
export declare enum AgoraExtensionWidgetEvent {
    /** 白板 */
    BoardConnStateChanged = "board-connection-state-changed",
    BoardMountStateChanged = "board-mount-state-changed",
    BoardMemberStateChanged = "board-member-state-changed",
    BoardPageInfoChanged = "board-page-info-changed",
    BoardRedoStepsChanged = "board-redo-steps-changed",
    BoardUndoStepsChanged = "board-undo-steps-changed",
    BoardGrantedUsersUpdated = "board-granted-users-updated",
    BoardSnapshotImageReceived = "board-snapshot-image-received",
    BoardDragOver = "board-drag-over",
    BoardDrop = "board-drop",
    WidgetBecomeActive = "widget-become-active",
    WidgetBecomeInactive = "widget-become-inactive",
    RegisterCabinetTool = "register-cabinet-tool",
    UnregisterCabinetTool = "unregister-cabinet-tool",
    RequestGrantedList = "request-granted-list"
}

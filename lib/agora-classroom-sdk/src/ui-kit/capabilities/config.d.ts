/**
 * 教学区组件层级规则控制
 * -------- 顶层 ---------
 *        教师工具
 *  视频容器（摄像头/屏幕共享）
 * 在线课件(webview/youtube)
 *          白板
 * -------- 底层 ---------
 */
export declare enum ComponentLevelRules {
    WhiteBoard = 0,
    OnlineCourseware = 1,
    StreamWindow = 2,
    TeachTools = 3
}

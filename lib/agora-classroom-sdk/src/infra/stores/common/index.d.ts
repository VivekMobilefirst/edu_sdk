import { BoardUIStore } from './board-ui';
import { CloudUIStore } from './cloud-drive';
import { DeviceSettingUIStore } from './device-setting/index';
import { HandUpUIStore } from './hand-up';
import { NavigationBarUIStore } from './nav-ui';
import { RosterUIStore } from './roster';
import { EduShareUIStore } from './share-ui';
import { StreamUIStore } from './stream';
import { ToolbarUIStore } from './toolbar-ui';
import { LayoutUIStore } from './layout';
import { NotificationUIStore } from './notification-ui';
import { StreamWindowUIStore } from './stream-window';
import { PretestUIStore } from './pretest';
import { EduClassroomStore } from 'agora-edu-core';
import { WidgetUIStore } from './widget';
import { GroupUIStore } from './group-ui';
import { RemoteControlUIStore } from './remote-control';
import { SubscriptionUIStore } from './subscription';
export declare class EduClassroomUIStore {
    protected _classroomStore: EduClassroomStore;
    protected _boardUIStore: BoardUIStore;
    protected _shareUIStore: EduShareUIStore;
    protected _cloudUIStore: CloudUIStore;
    protected _streamUIStore: StreamUIStore;
    protected _rosterUIStore: RosterUIStore;
    protected _handUpUIStore: HandUpUIStore;
    protected _deviceSettingUIStore: DeviceSettingUIStore;
    protected _navigationBarUIStore: NavigationBarUIStore;
    protected _toolbarUIStore: ToolbarUIStore;
    protected _layoutUIStore: LayoutUIStore;
    protected _notificationUIStore: NotificationUIStore;
    protected _pretestUIStore: PretestUIStore;
    protected _widgetUIStore: WidgetUIStore;
    protected _groupUIStore: GroupUIStore;
    protected _remoteControlUIStore: RemoteControlUIStore;
    protected _streamWindowUIStore: StreamWindowUIStore;
    protected _subscriptionUIStore: SubscriptionUIStore;
    private _installed;
    constructor(store: EduClassroomStore);
    /**
     * getters
     */
    get classroomStore(): EduClassroomStore;
    get shareUIStore(): EduShareUIStore;
    get boardUIStore(): BoardUIStore;
    get cloudUIStore(): CloudUIStore;
    get streamUIStore(): StreamUIStore;
    get rosterUIStore(): RosterUIStore;
    get handUpUIStore(): HandUpUIStore;
    get deviceSettingUIStore(): DeviceSettingUIStore;
    get navigationBarUIStore(): NavigationBarUIStore;
    get toolbarUIStore(): ToolbarUIStore;
    get layoutUIStore(): LayoutUIStore;
    get notificationUIStore(): NotificationUIStore;
    get pretestUIStore(): PretestUIStore;
    get widgetUIStore(): WidgetUIStore;
    get groupUIStore(): GroupUIStore;
    get remoteControlUIStore(): RemoteControlUIStore;
    get streamWindowUIStore(): StreamWindowUIStore;
    /**
     * 初始化所有 UIStore
     * @returns
     */
    initialize(): void;
    /**
     * 加入教室，之后加入 RTC 频道
     */
    join(): Promise<void>;
    /**
     * 销毁所有 UIStore
     */
    destroy(): void;
}

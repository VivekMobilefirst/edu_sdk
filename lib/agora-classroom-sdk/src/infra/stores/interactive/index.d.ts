import { EduClassroomStore } from 'agora-edu-core';
import { EduClassroomUIStore } from '../common';
import { InteractiveRoomStreamUIStore } from './stream-ui';
export declare class EduInteractiveUIClassStore extends EduClassroomUIStore {
    constructor(store: EduClassroomStore);
    get streamUIStore(): InteractiveRoomStreamUIStore;
}

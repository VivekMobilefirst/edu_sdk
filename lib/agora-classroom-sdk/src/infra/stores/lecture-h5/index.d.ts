import { EduClassroomStore } from 'agora-edu-core';
import { LectureH5BoardUIStore } from './board-ui';
import { LectureH5RoomStreamUIStore } from './stream-ui';
import { LectureH5LayoutUIStore } from './layout-ui';
import { EduClassroomUIStore } from '../common';
export declare class EduLectureH5UIStore extends EduClassroomUIStore {
    constructor(store: EduClassroomStore);
    get streamUIStore(): LectureH5RoomStreamUIStore;
    get boardUIStore(): LectureH5BoardUIStore;
    get layoutUIStore(): LectureH5LayoutUIStore;
}

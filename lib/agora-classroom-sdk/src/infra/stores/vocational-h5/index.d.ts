import { EduClassroomStore } from 'agora-edu-core';
import { EduClassroomUIStore } from '../common';
import { LectureH5BoardUIStore } from '../lecture-h5/board-ui';
import { LectureH5LayoutUIStore } from '../lecture-h5/layout-ui';
import { LectureH5RoomStreamUIStore } from '../lecture-h5/stream-ui';
export declare class EduVocationalH5UIStore extends EduClassroomUIStore {
    constructor(store: EduClassroomStore);
    get streamUIStore(): LectureH5RoomStreamUIStore;
    get boardUIStore(): LectureH5BoardUIStore;
    get layoutUIStore(): LectureH5LayoutUIStore;
}

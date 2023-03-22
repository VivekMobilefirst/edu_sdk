import { EduClassroomStore } from 'agora-edu-core';
import { EduClassroomUIStore } from '../common';
import { LectureRosterUIStore } from './roster';
import { LectureRoomStreamUIStore } from './stream-ui';
export declare class EduLectureUIStore extends EduClassroomUIStore {
    constructor(store: EduClassroomStore);
    get streamUIStore(): LectureRoomStreamUIStore;
    get rosterUIStore(): LectureRosterUIStore;
}

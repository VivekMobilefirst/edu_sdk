import { EduClassroomStore } from 'agora-edu-core';
import { EduClassroomUIStore } from '../common';
import { LectureRosterUIStore } from '../lecture/roster';
import { LectureRoomStreamUIStore } from '../lecture/stream-ui';
export declare class EduVocationalUIStore extends EduClassroomUIStore {
    constructor(store: EduClassroomStore);
    get streamUIStore(): LectureRoomStreamUIStore;
    get rosterUIStore(): LectureRosterUIStore;
}

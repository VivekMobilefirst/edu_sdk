import { EduClassroomStore, EduRoomTypeEnum, EduRoomSubtypeEnum } from 'agora-edu-core';
import { EduClassroomUIStore } from '../stores/common';
export declare class EduUIStoreFactory {
    static createWithType(type: EduRoomTypeEnum, store: EduClassroomStore, subType?: EduRoomSubtypeEnum): EduClassroomUIStore;
    static createWithTypeH5(type: EduRoomTypeEnum, store: EduClassroomStore, subType?: EduRoomSubtypeEnum): EduClassroomUIStore;
}

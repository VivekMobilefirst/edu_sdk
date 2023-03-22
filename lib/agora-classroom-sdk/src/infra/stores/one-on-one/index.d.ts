import { EduClassroomStore } from 'agora-edu-core';
import { EduClassroomUIStore } from '../common';
import { OneToOneStreamUIStore } from './stream-ui';
export declare class Edu1v1ClassUIStore extends EduClassroomUIStore {
    constructor(store: EduClassroomStore);
    get streamUIStore(): OneToOneStreamUIStore;
}

import React from 'react';
export declare class EduContext {
    private static _shareContext?;
    static get shared(): React.Context<any>;
    static reset(): void;
    static create(): React.Context<{
        oneToOne: import("agora-edu-core").EduClassroomStore;
        interactive: import("agora-edu-core").EduClassroomStore;
        lecture: import("agora-edu-core").EduClassroomStore;
        oneToOneUI: import("../stores/common").EduClassroomUIStore;
        interactiveUI: import("../stores/common").EduClassroomUIStore;
        lectureUI: import("../stores/common").EduClassroomUIStore;
        lectureH5UI: import("../stores/common").EduClassroomUIStore;
        vocationalUI: import("../stores/common").EduClassroomUIStore;
        vocationalH5UI: import("../stores/common").EduClassroomUIStore;
    }>;
}

/// <reference types="react" />
import { EduRoomSubtypeEnum, EduRoomTypeEnum } from 'agora-edu-core';
export declare type ScenariosProps = {
    pretest: boolean;
    roomType: EduRoomTypeEnum;
    roomSubtype: EduRoomSubtypeEnum;
};
export declare const renderRoomSceneWith: (roomType: EduRoomTypeEnum, roomSubtype: EduRoomSubtypeEnum) => JSX.Element | null;
export declare const Scenarios: React.FC<ScenariosProps>;

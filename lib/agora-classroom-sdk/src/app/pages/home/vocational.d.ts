import { EduRoleTypeEnum, EduRoomServiceTypeEnum, EduRoomSubtypeEnum } from 'agora-edu-core';
export declare const webRTCCodecH264: EduRoomServiceTypeEnum[];
export declare const vocationalNeedPreset: (roleType: EduRoleTypeEnum, roomServiceType: EduRoomServiceTypeEnum, roomSubtype: EduRoomSubtypeEnum) => boolean;
export declare const useTheme: () => void;
export declare const VocationalHomePage: () => JSX.Element | null;

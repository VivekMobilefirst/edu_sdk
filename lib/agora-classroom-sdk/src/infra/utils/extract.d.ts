import { EduStream, EduUserStruct } from 'agora-edu-core';
import { AgoraRteVideoSourceType } from 'agora-rte-sdk';
import { EduStreamUI } from '../stores/common/stream/struct';
export declare const extractUserStreams: (users: Map<string, EduUserStruct>, streamByUserUuid: Map<string, Set<string>>, streamByStreamUuid: Map<string, EduStream>) => Set<EduStream>;
export declare const extractStreamBySourceType: (streams: Set<EduStreamUI>, sourceType: AgoraRteVideoSourceType) => EduStreamUI | undefined;

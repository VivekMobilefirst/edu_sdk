import { EduClassroomUIStore } from '../stores/common';
import { EduInteractiveUIClassStore } from '../stores/interactive';
import { EduLectureUIStore } from '../stores/lecture';
import { EduLectureH5UIStore } from '../stores/lecture-h5';
import { Edu1v1ClassUIStore } from '../stores/one-on-one';
import { EduVocationalUIStore } from '../stores/vocational';
import { EduVocationalH5UIStore } from '../stores/vocational-h5';
export declare const use1v1UIStores: () => Edu1v1ClassUIStore;
export declare const useInteractiveUIStores: () => EduInteractiveUIClassStore;
export declare const useLectureUIStores: () => EduLectureUIStore;
export declare const useLectureH5UIStores: () => EduLectureH5UIStore;
export declare const useVocationalUIStores: () => EduVocationalUIStore;
export declare const useVocationalH5UIStores: () => EduVocationalH5UIStore;
export declare function useStore(): EduClassroomUIStore;

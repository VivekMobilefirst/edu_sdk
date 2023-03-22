import { EduStreamUI } from '@/infra/stores/common/stream/struct';
import { FC } from 'react';
import './index.css';
interface PodiumListProps {
    streams?: EduStreamUI[];
}
export declare const PodiumList: FC<PodiumListProps>;
interface PodiumStreamProps {
    stream: EduStreamUI;
}
export declare const PodiumStream: FC<PodiumStreamProps>;
export {};

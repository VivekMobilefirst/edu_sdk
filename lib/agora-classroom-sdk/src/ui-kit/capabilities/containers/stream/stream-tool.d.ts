import { EduStreamUI } from "@/infra/stores/common/stream/struct";
import { FC } from "react";
export declare const StreamPlayerToolbar: FC<{
    visible: boolean;
    stream: EduStreamUI;
    offset?: number[];
    placement?: 'left' | 'bottom';
}>;
export declare const LocalStreamPlayerTools: () => JSX.Element;
export declare const RemoteStreamPlayerTools: ({ stream }: {
    stream: EduStreamUI;
}) => JSX.Element;

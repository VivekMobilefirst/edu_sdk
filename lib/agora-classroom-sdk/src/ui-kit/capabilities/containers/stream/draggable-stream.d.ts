import { EduStreamUI } from "@/infra/stores/common/stream/struct";
import { CSSProperties, FC } from "react";
export declare const DragableContainer: FC<{
    stream: EduStreamUI;
}>;
export declare const DragableStream: ({ stream, style, playerStyle }: {
    stream?: EduStreamUI | undefined;
    style?: CSSProperties | undefined;
    playerStyle?: CSSProperties | undefined;
}) => JSX.Element | null;

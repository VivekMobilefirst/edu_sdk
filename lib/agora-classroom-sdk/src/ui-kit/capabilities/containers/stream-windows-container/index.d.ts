import { StreamBounds } from '@/infra/stores/common/stream/struct';
import './index.css';
import { StreamWindow } from '@/infra/stores/common/stream-window/type';
export declare const StreamWindowsContainer: () => JSX.Element;
export declare const TransitionStreamWindow: ({ streamWindows, streamsBounds, }: {
    streamWindows: [string, StreamWindow][];
    streamsBounds: Map<string, StreamBounds>;
}) => JSX.Element;

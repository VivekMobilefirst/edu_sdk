declare type UseWatchCallback<T> = (prev: T | undefined) => void;
declare type UseWatchConfig = {
    immediate: boolean;
};
export declare const useWatch: <T>(dep: T, callback: UseWatchCallback<T>, config?: UseWatchConfig) => () => void;
export declare const useUnMount: (cb: CallableFunction) => void;
export declare const useMounted: () => boolean;
export declare const useTimeout: (fn: CallableFunction, delay: number) => void;
export declare const usePrevious: <Type>(value: Type) => Type;
export declare const useDebounce: <T>(value: T, delay?: number | undefined) => T;
export declare const useDraggableDefaultCenterPosition: ({ draggableHeight, draggableWidth, }: {
    draggableWidth: number;
    draggableHeight: number;
}, innerSize?: {
    innerHeight: number;
    innerWidth: number;
} | undefined) => Record<"x" | "y" | "width" | "height", number>;
export {};

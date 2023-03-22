import { MouseEventHandler } from 'react';
declare type EmptyCallback = () => void;
export declare type CallbackFunction<Target = Element> = MouseEventHandler<Target> | EmptyCallback;
export declare type DoubleTapCallback<Target = Element> = CallbackFunction<Target> | null;
export interface DoubleTapOptions<Target = Element> {
    onSingleTap?: CallbackFunction<Target>;
}
export declare type DoubleTapResult<Target, Callback> = Callback extends CallbackFunction<Target> ? {
    onClick: CallbackFunction<Target>;
} : Callback extends null ? Record<string, unknown> : never;
export declare function useDoubleTap<Target = Element, Callback extends DoubleTapCallback<Target> = DoubleTapCallback<Target>>(callback: Callback, threshold?: number, options?: DoubleTapOptions<Target>): DoubleTapResult<Target, Callback>;
export {};

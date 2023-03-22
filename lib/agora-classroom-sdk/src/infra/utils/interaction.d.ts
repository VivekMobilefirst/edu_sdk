declare type Delegate = (message: string) => void;
export declare const interactionThrottleHandler: <T>(func: T, limitFunc: Delegate, options?: {
    limitMs?: number | undefined;
    message?: string | undefined;
} | undefined) => T;
export {};

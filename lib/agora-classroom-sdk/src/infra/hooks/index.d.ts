import { HomeStore } from '@/app/stores/home';
import React from 'react';
export declare type HomeContext = Record<string, HomeStore>;
export declare const useHomeStore: () => HomeStore;
export declare const useInteractionThrottleHandler: <T>(func: T, options: {
    limitMs?: number;
    limitFunc?: () => void;
}, deps: React.DependencyList) => T;

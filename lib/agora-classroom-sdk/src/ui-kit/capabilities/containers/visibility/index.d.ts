import { FcrUIConfig } from "@/infra/types/config";
import { FC } from "react";
declare type ConditionCheck = (uiConfig: FcrUIConfig) => boolean;
declare type ListItemConditionCheck<E> = (uiConfig: FcrUIConfig, props: E) => boolean;
export declare const PreventRender: FC<{
    com: FC<any>;
}>;
export declare const visibilityControl: <T extends unknown>(Com: FC<T>, check: ConditionCheck) => FC<T>;
export declare const visibilityListItemControl: <T extends unknown>(Com: FC<T>, check: ListItemConditionCheck<T>) => FC<T>;
export {};

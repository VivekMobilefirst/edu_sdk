import { FC } from 'react';
import { FcrTheme } from '~ui-kit';
import { FcrUIConfig } from '../types/config';
export declare const uiConfigContext: import("react").Context<FcrUIConfig>;
export declare const Providers: FC<{
    language: string;
    uiConfig: FcrUIConfig;
    theme: FcrTheme;
}>;
export declare const UIConfigConsumer: import("react").Consumer<FcrUIConfig>;

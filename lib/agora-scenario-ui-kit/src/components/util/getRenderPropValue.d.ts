import { ReactNode } from 'react';
export declare type RenderFunction = () => ReactNode;
export declare const getRenderPropValue: (propValue?: ReactNode | RenderFunction) => ReactNode;

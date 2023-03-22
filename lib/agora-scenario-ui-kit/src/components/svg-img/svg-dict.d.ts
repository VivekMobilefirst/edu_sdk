import React from "react";
export declare type PathOptions = {
    iconPrimary: string;
    iconSecondary: string;
    [key: string]: string;
};
export declare type SvgPath = {
    path: (options: PathOptions) => React.ReactNode;
    viewBox?: string;
};
export declare const getPath: (name: string, props: PathOptions) => React.ReactNode;
export declare const getViewBox: (name: string) => string | undefined;

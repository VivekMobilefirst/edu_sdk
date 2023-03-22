import React from 'react';
export declare type AppRouteComponent = {
    path: string;
    component: React.FC;
};
export declare const routesMap: Record<string, AppRouteComponent>;

import React from 'react';
export declare const useDrag: () => {
    x: number;
    y: number;
    isDragged: boolean;
    onTouchStart: React.TouchEventHandler<HTMLDivElement>;
    onTouchEnd: React.TouchEventHandler<HTMLDivElement>;
    onTouchMove: React.TouchEventHandler<HTMLDivElement>;
};

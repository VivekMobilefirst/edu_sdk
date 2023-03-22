/**
 * 云盘资源对象。支持两种类型；
 * - `'dynamic'`: 动态资源
 * - `'static'`: 静态资源
 */
import { CloudDriveResource } from 'agora-edu-core';
import { CloudDriveResourceConvertProgress } from './type';
/** @en
 * The cloud drive resource object. Supports two types of resources:
 * - `'dynamic'`: Dynamic resources.
 * - `'static'`: Static resources.
 */
export declare class CloudDriveCourseResource extends CloudDriveResource {
    taskProgress: CloudDriveResourceConvertProgress;
    taskUuid: string;
    conversion: {
        outputFormat: string;
        preview: boolean;
        scale: number;
        type: 'dynamic' | 'static';
        canvasVersion?: boolean;
    };
    scenes: {
        ppt: {
            previewURL: string;
        };
    }[];
    constructor(data: {
        ext: string;
        resourceName: string;
        resourceUuid: string;
        size: number;
        updateTime: number;
        taskProgress: CloudDriveResourceConvertProgress;
        taskUuid: string;
        conversion: {
            outputFormat: string;
            preview: boolean;
            scale: number;
            type: 'dynamic' | 'static';
            canvasVersion: boolean;
        };
        initOpen?: boolean;
    });
}
/**
 * 多媒体资源文件对象。支持以下类型：
 * - `'video'`: 视频文件
 * - `'audio'`: 音频文件
 */
/** @en
 * The multi-media resource object. Supports types of multi-media resources:
 * - `'video'`
 * - `'audio'`
 */
export declare class CloudDriveMediaResource extends CloudDriveResource {
    url: string;
    type: 'video' | 'audio';
    constructor(data: {
        ext: string;
        resourceName: string;
        resourceUuid: string;
        size: number;
        updateTime: number;
        url: string;
        type: 'video' | 'audio';
        initOpen?: boolean;
    });
}
/**
 * 图片资源文件对象
 */
/** @en
 * Cloud Drive Image Resource
 */
export declare class CloudDriveImageResource extends CloudDriveResource {
    url: string;
    constructor(data: {
        ext: string;
        resourceName: string;
        resourceUuid: string;
        size: number;
        updateTime: number;
        url: string;
        initOpen?: boolean;
    });
}
export declare class CloudDriveH5Resource extends CloudDriveResource {
    url: string;
    type: string;
    constructor(data: {
        ext: string;
        resourceName: string;
        resourceUuid: string;
        size: number;
        updateTime: number;
        url: string;
        type: string;
        initOpen?: boolean;
    });
}
export declare class CloudDriveLinkResource extends CloudDriveResource {
    url: string;
    type: string;
    constructor(data: {
        ext: string;
        resourceName: string;
        resourceUuid: string;
        size: number;
        updateTime: number;
        url: string;
        type: string;
        initOpen?: boolean;
    });
}

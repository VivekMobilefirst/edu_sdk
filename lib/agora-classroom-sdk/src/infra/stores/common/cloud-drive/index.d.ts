import { IUploadOnlineCoursewareData } from '@/ui-kit/capabilities/containers/cloud-driver/person-resource';
import { CloudDrivePagingOption, CloudDriveResource, CloudDriveResourceUploadStatus } from 'agora-edu-core';
import { SvgIconEnum } from '~ui-kit';
import { EduUIStoreBase } from '../base';
import { CloudDriveCourseResource } from './struct';
export declare enum FileTypeSvgColor {
    ppt = "#F6B081",
    word = "#96CBE1",
    excel = "#A6DDBF",
    pdf = "#A3C3DE",
    video = "#A8ABE9",
    audio = "#6C82D1",
    txt = "#8597FF",
    image = "#95E2E7"
}
export interface UploadItem {
    resourceUuid: string;
    iconType?: string;
    fileName?: string;
    fileSize?: string;
    currentProgress?: number;
    status: CloudDriveResourceUploadStatus;
}
export declare class CloudUIStore extends EduUIStoreBase {
    readonly pageSize: number;
    personalResourceUuidByPage: Map<number, string[]>;
    personalResourcesTotalNum: number;
    private _disposers;
    onInstall(): void;
    /**
     * 根据类型返回扩展名
     * @param name
     * @returns
     */
    fileNameToType(name: string): SvgIconEnum.ALF | SvgIconEnum.AUDIO | SvgIconEnum.EXCEL | SvgIconEnum.H5 | SvgIconEnum.IMAGE | SvgIconEnum.PDF | SvgIconEnum.PPT | SvgIconEnum.UNKNOWN | SvgIconEnum.VIDEO | SvgIconEnum.WORD;
    /**
     * 文件大小信息格式化
     * @param fileByteSize
     * @param decimalPoint
     * @returns
     */
    formatFileSize(fileByteSize: number, decimalPoint?: number): string;
    /**
     * 查询个人资源列表
     * @param options
     * @returns
     */
    fetchPersonalResources(options: CloudDrivePagingOption): Promise<{
        list: never[];
        total: number;
    } | undefined>;
    /**
     * 上传文件至个人资源
     * @param file
     * @returns
     */
    uploadPersonalResource(file: File): Promise<void | {
        ext: string;
        resourceName: string;
        resourceUuid: string;
        url: string;
    } | {
        ext?: undefined;
        resourceName?: undefined;
        resourceUuid?: undefined;
        url?: undefined;
    }>;
    addOnlineCourseware({ resourceName, url }: IUploadOnlineCoursewareData): Promise<void>;
    /**
     * 打开课件
     */
    _tryOpenCourseware(resource: CloudDriveCourseResource): Promise<void>;
    /**
     * 打开课件
     * @param resource
     */
    openResource(resource: CloudDriveResource): Promise<void>;
    /**
     * 公共资源
     * @returns
     */
    get publicResources(): Map<string, CloudDriveResource>;
    showUploadModal: boolean;
    showUploadToast: boolean;
    /**
     * 上传状态
     */
    uploadState: 'uploading' | 'success' | 'error' | 'idle';
    /**
     * 云盘上传modal最小化显示
     */
    showUploadMinimize: boolean;
    /**
     * 检索公共资源课件字符串
     */
    searchPublicResourcesKeyword: string;
    /**
     * 检索个人资源课件字符串
     */
    searchPersonalResourcesKeyword: string;
    /**
     * 个人资源左侧选项框状态
     */
    personalResourcesCheckSet: Set<string>;
    /**
     * 个人资源页码
     */
    currentPersonalResPage: number;
    /**
     * 个人资源全选
     */
    isPersonalResSelectedAll: boolean;
    /**
     * 云盘资源列表
     */
    get personalResources(): Map<string, CloudDriveResource>;
    /**
     * 云盘资源列表（左侧选择框使用）
     * @returns
     */
    get personalResourcesList(): {
        resource: CloudDriveResource;
        checked: boolean;
    }[];
    /**
     * 是否有选中资源文件
     * @returns
     */
    get hasSelectedPersonalRes(): boolean;
    /**
     * 资源上传进度
     * @returns
     */
    get uploadingProgresses(): UploadItem[];
    /**
     * 勾选资源文件
     * @param resourceUuid
     * @param val
     */
    setPersonalResourceSelected: (resourceUuid: string, val: boolean) => void;
    /**
     * 资源列表全选
     * @param val
     */
    setAllPersonalResourceSelected: (val: boolean) => void;
    /**
     * 设置资源列表页码
     * @param num
     */
    setPersonalResCurrentPage: (num: number) => void;
    /**
     * 设置上传状态
     * @param uploadState
     */
    setUploadState: (uploadState: 'uploading' | 'success' | 'error') => void;
    setShowUploadModal: (v: boolean) => void;
    setShowUploadToast: (v: boolean) => void;
    /**
     * 设置云盘上传modal最小化
     * @param v
     */
    setShowUploadMinimize: (v: boolean) => void;
    /**
     * 删除个人资源
     * @returns
     */
    removePersonalResources: (singleFileUuid?: string | undefined) => Promise<void>;
    /**
     * 设置检索公共资源字符串
     * @param keyword
     */
    setSearchPublicResourcesKeyword(keyword: string): void;
    /**
     * 设置检索个人资源字符串
     * @param keyword
     */
    setSearchPersonalResourcesKeyword(keyword: string): void;
    onDestroy(): void;
}

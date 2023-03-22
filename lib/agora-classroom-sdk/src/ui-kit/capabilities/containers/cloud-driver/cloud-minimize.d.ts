import { UploadItem } from '~ui-kit';
export declare type CloudMinimizeProps = {
    state?: 'uploading' | 'success' | 'error' | 'idle';
    uploadingProgresses: UploadItem[];
};
export default function CloudMinimize({ state, uploadingProgresses, }: CloudMinimizeProps): JSX.Element;

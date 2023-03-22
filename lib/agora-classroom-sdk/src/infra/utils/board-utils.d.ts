export declare type FetchImageResult = {
    width: number;
    height: number;
    file: File;
    uuid: string;
    url: string;
};
export declare type BaseImageSize = {
    width: number;
    height: number;
};
export declare const getImageSize: (imageInnerSize: BaseImageSize) => BaseImageSize;
export declare const fetchNetlessImageByUrl: (url: string) => Promise<FetchImageResult>;
export declare const rgbToHexColor: (r: number, g: number, b: number) => string;
/**
 * Mimetypes
 *
 * @see http://hul.harvard.edu/ois/////systems/wax/wax-public-help/mimetypes.htm
 * @typedef Mimetypes~Kind
 * @enum
 */
export declare const MimeTypesKind: Record<string, string>;

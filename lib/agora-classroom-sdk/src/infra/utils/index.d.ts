import { LanguageEnum } from '../api';
export declare const getBrowserLanguage: () => LanguageEnum;
export declare type AppStorage = Storage | MemoryStorage;
export declare class MemoryStorage {
    private readonly _storage;
    constructor(_storage?: Map<string, string>);
    getItem(name: string): string | undefined;
    setItem(name: string, value: string): void;
    removeItem(name: string): void;
}
export declare class CustomStorage {
    private storage;
    languageKey: string;
    constructor();
    useSessionStorage(): void;
    useLocalStorage(): void;
    read(key: string): any;
    save(key: string, val: unknown): void;
    clear(key: string): void;
    setLanguage(lang: string): void;
    getLanguage(): any;
    getRtmMessage(): {
        count: number;
        messages: any[];
    };
}
export declare class PersistLocalStorage {
    private storage;
    languageKey: string;
    constructor();
    saveCourseWareList(jsonStringify: string): void;
    getCourseWareSaveList(): never[];
}
export declare const GlobalStorage: CustomStorage;
export declare const storage: PersistLocalStorage;
export declare const number2Percent: (v: number, fixed?: number) => string;
export declare function audioBufferToWav(buffer: any, opt?: any): ArrayBuffer;
export declare const appendBuffer: (buffer1: Float32Array, buffer2: Float32Array) => Float32Array;
export declare const mapToObject: (map: Map<any, any>) => {};
export declare function isSupportedImageType(file: File): boolean;
export declare const dataURIToFile: (dataURI: string, filename: string) => File;
export declare const humpToLine: (str: string) => string;

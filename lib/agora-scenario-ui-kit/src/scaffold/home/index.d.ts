import React from 'react';
import { HomeModule } from '~utilities/types';
import './index.css';
export interface HomeAttributes {
    roomId: string;
    userId: string;
    userName: string;
    roomName: string;
    role: string;
    scenario: string;
    service?: string;
    duration: number;
    language: string;
    region: string;
    encryptionMode: string;
    encryptionKey: string;
    showServiceOptions: boolean;
}
export interface HomeProps extends Omit<HomeModule<HomeAttributes>, 'onChangeShowServiceOptions'> {
    onClick: () => void | Promise<void>;
    isVocational?: boolean;
    version: string;
    SDKVersion: string;
    buildTime: string;
    commitID: string;
    loading: boolean;
    headerRight?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Home: React.FC<HomeProps>;

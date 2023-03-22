import { FC, PropsWithChildren } from 'react';
import './index.css';
export interface PageLayoutProps {
    title: string;
    onBack?: () => void;
}
export declare const PageLayout: FC<PropsWithChildren<PageLayoutProps>>;

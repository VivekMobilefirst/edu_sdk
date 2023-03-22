import './index.css';
import { CloudDriverContainerProps } from '.';
export declare enum ActiveKeyEnum {
    public = "1",
    person = "2",
    download = "3"
}
export declare type CloudDriverProps = {
    activeKey: ActiveKeyEnum;
    handleChange: (key: string) => void;
} & CloudDriverContainerProps;
export declare const CloudDriver: ({ onClose, activeKey, handleChange }: CloudDriverProps) => JSX.Element;

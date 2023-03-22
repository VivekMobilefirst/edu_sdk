import { FC } from 'react';
import './index.css';
declare type UserStruct = {
    userUuid: string;
    userName: string;
    userRole: number;
    userProperties: any;
};
interface IPropsTypes {
    value: string;
    studentList: UserStruct[];
    onChange: (studentUuid: string) => void;
    onClose: () => void;
}
export declare const RemoteControlActionBar: FC<IPropsTypes>;
export {};

export declare enum DeviceState {
    enabled = 0,
    disabled = 1,
    unavailable = 2,
    unauthorized = 3
}
export declare type Operation = 'podium' | 'grant-board' | 'camera' | 'microphone' | 'kick' | 'chat' | 'star' | 'supervise-student';
export declare type Operations = Partial<Record<Operation, {
    interactable: boolean;
}>>;
export declare type Profile = {
    uid: string | number;
    isOnPodium: boolean;
    cameraState: DeviceState;
    microphoneState: DeviceState;
};

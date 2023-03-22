export declare type OnChangeEvents<Type> = {
    [Property in keyof Type as `onChange${Capitalize<string & Property>}`]: (newValue: Type[Property]) => void;
};
export declare type HomeModule<CustomizeVanillaType> = OnChangeEvents<CustomizeVanillaType> & CustomizeVanillaType;
export declare type IncludeUIKitSetter<Type> = {
    [Property in keyof Type as `set${Capitalize<string & Property>}`]: (newValue: Type[Property]) => void;
};
export declare type UIKitModule<EntityType> = IncludeUIKitSetter<EntityType> & EntityType;

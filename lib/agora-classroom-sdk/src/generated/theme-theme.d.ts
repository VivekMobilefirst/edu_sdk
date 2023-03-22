import { FcrMultiThemes } from '@/infra/types/config';
import { FcrTheme } from "~components";
export declare class FcrMultiThemesImpl implements FcrMultiThemes {
    get light(): FcrTheme;
    get dark(): FcrTheme;
}

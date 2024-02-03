import { InjectionToken } from "@angular/core";

export interface AppConfig
{
    /**
     * A string of Numbers
     */
    password: string;
}

export const CONFIG =
        new InjectionToken<AppConfig>("CONFIG");

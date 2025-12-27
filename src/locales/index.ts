import type { en } from "./en";

export type Locale = "ko" | "en";
export const SUPPORTED_LOCALES: Locale[] = ["ko", "en"];

export function isLocale(v: string): v is Locale {
    return SUPPORTED_LOCALES.includes(v as Locale);
}

type Widen<T> =
    T extends string ? string :
        T extends number ? number :
            T extends boolean ? boolean :
                T extends readonly (infer U)[] ? readonly Widen<U>[] :
                    T extends object ? { [K in keyof T]: Widen<T[K]> } :
                        T;

export type Messages = Widen<typeof en>;

export { en } from "./en";
export { ko } from "./ko";
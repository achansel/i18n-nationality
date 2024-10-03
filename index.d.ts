export type LocalizedNationalityNames = {
  [alpha2Key: string]: string
};

export type LocaleData = {
  locale: string,
  nationalities: LocalizedNationalityNames
};

export function registerLocale(localeData: LocaleData): void;
export function alpha2ToAlpha3(alpha2: string): string | undefined;
export function alpha2ToNumeric(alpha2: string): number | undefined;
export function alpha3ToAlpha2(alpha3: string): string | undefined;
export function alpha3ToNumeric(alpha3: string): number | undefined;
export function numericToAlpha2(numeric: number | string): string | undefined;
export function numericToAlpha3(numeric: number | string): string | undefined;
/**
 * Returns object map where key is alpha 2 code and value is alpha 3 code
 */
export function getAlpha2Codes(): { [alpha2Key: string]: string };
/**
 * Returns object map where key is alpha 3 code and value is alpha 2 code
 */
export function getAlpha3Codes(): { [alpha3Key: string]: string };
/**
 * Returns object map where key is numeric code and value is alpha 2 code
 */
export function getNumericCodes(): { [numericKey: number]: string };
export function getName(alpha2orAlpha3orNumeric: string | number, lang: string): string | undefined;
export function getNames(lang: string): LocalizedNationalityNames;
export function toAlpha3(alpha2orNumeric: number | string): string | undefined;
export function toAlpha2(alpha3orNumeric: number | string): string | undefined;
export function getAlpha2Code(name: string, lang: string): string | undefined;
export function getSimpleAlpha2Code(name: string, lang: string): string | undefined;
export function getAlpha3Code(name: string, lang: string): string | undefined;
export function getSimpleAlpha3Code(name: string, lang: string): string | undefined;
export function langs(): string[];
export function isValid(alpha2orAlpha3orNumeric: string | number): boolean;
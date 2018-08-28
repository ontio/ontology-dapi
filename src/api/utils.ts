export interface UtilsApi {
  strToHex(str: string): string;

  hexToStr(hex: string): string;

  addressToHex(str: string): string;

  hexToAddress(str: string): string;

  isAddress(str: string): boolean;
}

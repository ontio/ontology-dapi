export function strToHex(str: string) {
  throw new Error('Unsupported');
  // return utils.str2hexstr(str);
}

export function hexToStr(hex: string) {
  throw new Error('Unsupported');
  // return utils.hexstr2str(hex);
}

export function addressToHex(str: string) {
  throw new Error('Unsupported');
  // return new Address(str).toHexString();
}

export function hexToAddress(str: string) {
  throw new Error('Unsupported');
  // return new Address(str).toBase58();
}

export function isAddress(str: string) {
  throw new Error('Unsupported');
  // try {
  //   const address = new Address(str);
  //   const encoded = address.toBase58();
  //   return str === encoded;
  // } catch (e) {
  //   return false;
  // }
}

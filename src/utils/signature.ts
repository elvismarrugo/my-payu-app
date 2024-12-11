import { MD5 } from "crypto-js";

export function calculateMD5(apikey: string,merchantId: string,
  reference: string, price: string, currency: string): string {
  const concatenatedArray = `${apikey}~${merchantId}~${reference}~${price}~${currency}`;
  return MD5(concatenatedArray).toString();
}
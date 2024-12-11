import { FormData } from "app/interface/form_data";
import { AUTH } from "./auth";

export const InitialFormData: FormData = {
  merchantId: AUTH.merchantId,
  accountId: AUTH.accountId,
  description: "Test PAYU",
  referenceCode: "testprice",
  amount: "",
  tax: "3193",
  taxReturnBase: "16806",
  currency: "COP",
  signature: "",
  test: "0",
  buyerEmail: "test@test.com",
  buyerFullName: "John Doe",
  telephone: "1234567890",
  responseUrl: "http://www.test.com/response",
  confirmationUrl: "http://www.test.com/confirmation"
};
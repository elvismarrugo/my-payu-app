"use client";

import { useState, useEffect } from "react";
import { FormData } from "app/interface/form_data";
import { products } from "app/data/product";
import { InitialFormData } from "app/data/form_data";
import { calculateMD5 } from "app/utils/signature";
import { AUTH } from "app/data/auth";
import ProductSelector from "./product_selector";
import BuyerInfoForm from "./buyer_info_form";
import PayUButton from "./PayUButton";

const PayUConfig = () => {
  const [formData, setFormData] = useState<FormData>(InitialFormData);

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = products[parseInt(e.target.value, 10)];
    setFormData({
      ...formData,
      description: selectedProduct.description,
      amount: selectedProduct.amount,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.amount && formData.currency) {
      const signature = calculateMD5(
        AUTH.apiKey,
        AUTH.merchantId,
        formData.referenceCode,
        formData.amount,
        formData.currency
      );
      setFormData((prevData) => ({
        ...prevData,
        signature: signature,
      }));
      console.log(signature);
    }
  }, [formData.amount, formData.currency, formData.referenceCode]);

  const handleSubmit = () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = formData[key as keyof FormData];
        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="text-purple-500 grid gap-y-2 max-w-sm justify-center">
      <ProductSelector products={products} onChange={handleProductChange} />
      <BuyerInfoForm formData={formData} onChange={handleInputChange} />
      <PayUButton onClick={handleSubmit} />
    </div>
  );
};

export default PayUConfig;

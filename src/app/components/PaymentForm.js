import { useState } from "react";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    amount: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const transaction = {
        order: {
          accountId: "512321",
          referenceCode: `PAYU_${Date.now()}`,
          description: formData.description,
          language: "es",
          notifyUrl: "http://www.payu.com/notify",
          additionalValues: {
            TX_VALUE: {
              value: formData.amount,
              currency: "COP",
            },
          },
          buyer: {
            fullName: formData.fullName,
            emailAddress: formData.emailAddress,
          },
        },
        type: "AUTHORIZATION_AND_CAPTURE",
        paymentMethod: "VISA", // Puedes ajustar según el método
        paymentCountry: "CO",
        deviceSessionId: "vghs6tvkcle931686k1900o6e1",
        ipAddress: "127.0.0.1",
      };

      const res = await fetch("/api/payu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transaction }),
      });

      const data = await res.json();
      console.log("Transaction response:", data);
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Nombre Completo"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="emailAddress"
        placeholder="Correo Electrónico"
        value={formData.emailAddress}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Monto (COP)"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Pagar</button>
    </form>
  );
}

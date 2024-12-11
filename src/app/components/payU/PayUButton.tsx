import React from "react";

interface PayUButtonProps {
  onClick: () => void;
}

const PayUButton: React.FC<PayUButtonProps> = ({ onClick }) => (
  <button className="bg-purple-200 rounded-lg" onClick={onClick}>
    Send to PayU
  </button>
);

export default PayUButton;

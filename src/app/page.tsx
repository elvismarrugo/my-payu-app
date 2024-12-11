// import Head from 'next/head';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Formulario de Pago</title>
//       </Head>
//       <div>
//         <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
//           <input name="merchantId" type="hidden" value="508029" />
//           <input name="accountId" type="hidden" value="512321" />
//           <input name="description" type="hidden" value="Test PAYU" />
//           <input name="referenceCode" type="hidden" value="productone" />
//           <input name="amount" type="hidden" value="100000" />
//           <input name="tax" type="hidden" value="3193" />
//           <input name="taxReturnBase" type="hidden" value="16806" />
//           <input name="currency" type="hidden" value="COP" />
//           <input name="signature" type="hidden" value="06fdc0222e9461fc40b1dc0718281ea4" />
//           <input name="test" type="hidden" value="0" />
//           <input name="buyerEmail" type="hidden" value="test@test.com" />
//           <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
//           <input name="confirmationUrl" type="hidden" value="http://www.test.com/confirmation" />
//           <input name="Submit" type="submit" value="Enviar" />
//         </form>
//       </div>
//     </>
//   );
// }


import PayUConfig from "../app/components/payU/payU_config";

const ProductsPage: React.FC = () => {
  return <PayUConfig />;
};

export default ProductsPage;
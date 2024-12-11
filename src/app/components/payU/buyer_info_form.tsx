import { FormData } from 'app/interface/form_data';

interface BuyerInfoFormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BuyerInfoForm: React.FC<BuyerInfoFormProps> = ({formData,
onChange}) => (
  <div className='grid grid-cols-1 gap-y-2'>
    <input
      type="email"
      name="buyerEmail"
      placeholder="Ingrese su email"
      value={formData.buyerEmail}
      onChange={onChange}
    />
    <input
      type="text"
      name="buyerFullName"
      placeholder="Ingrese su nombre completo"
      value={formData.buyerFullName}
      onChange={onChange}
      />
    <input
      type="phone"
      name="telephone"
      placeholder="Ingrese su celular"
      value={formData.telephone}
      onChange={onChange}
      />
  </div>  
)

export default BuyerInfoForm;

 
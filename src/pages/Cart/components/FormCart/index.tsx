 import { FormDataCity, FormDataDistrict, FormDataDistrictCityUF, FormDataNumberAndComplement, FormDataUf, FormData } from "./styles";
import { useFormContext } from 'react-hook-form';

export function FormCart(){

  const {register} = useFormContext()
  
return(
  <FormData>
    <form>
      <input 
        type="number"
        placeholder="CEP"
        {...register('cep', {valueAsNumber: false})}/>

      <input 
        type="text" 
        placeholder="Rua" 
        {...register('street')}/>

      <FormDataNumberAndComplement>
        <input
          type="number" 
          placeholder="Número"
          {...register('number', {valueAsNumber: true})}/>

        <input
         type="text"
          placeholder="Complemento"
          {...register('complement')}/>
      </FormDataNumberAndComplement>

      <FormDataDistrictCityUF>

        <FormDataDistrict>
          <input
           type="text"
            placeholder="Bairro"
            {...register('district')}/>
        </FormDataDistrict>

        <FormDataCity>
          <input 
          type="text"
          placeholder="Cidade"
          {...register('city')}/>
        </FormDataCity>

        <FormDataUf>
          <input
           type="text"
            placeholder="UF"
            {...register('uf')}/>
        </FormDataUf>

      </FormDataDistrictCityUF>
  </form>
  </FormData>
)
}
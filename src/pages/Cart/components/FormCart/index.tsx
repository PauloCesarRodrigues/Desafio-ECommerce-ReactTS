import { FormDataCity, FormDataDistrict, FormDataDistrictCityUF, FormDataNumberAndComplement, FormDataUf, FormData } from "./styles";

export function FormCart(){

return(
  <FormData>
    <form>
      <input type="number" min={0} max={99999999} placeholder="CEP"/>
      <input type="text" placeholder="Rua"/>

      <FormDataNumberAndComplement>
        <input type="number" placeholder="Número"/>
        <input type="text" placeholder="Complemento" />
      </FormDataNumberAndComplement>

      <FormDataDistrictCityUF>

        <FormDataDistrict>
          <input type="text" placeholder="Bairro"/>
        </FormDataDistrict>

        <FormDataCity>
          <input type="text" placeholder="Cidade"/>
        </FormDataCity>

        <FormDataUf>
          <input type="text" placeholder="UF"/>
        </FormDataUf>

      </FormDataDistrictCityUF>
      
  </form>
  </FormData>
)
}
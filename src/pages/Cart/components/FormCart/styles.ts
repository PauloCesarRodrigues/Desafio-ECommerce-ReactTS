import styled from "styled-components";

export const FormData = styled.div`
  form{
    display: flex;
    flex-direction: column;

    margin-right: 3.25rem;
    margin-left:  3.85rem;
    gap: 0.5rem;
  }

input{
  background-color: ${props => props.theme["white-700"]};
  border: 1.5px solid ${props => props.theme["white-900"]};
  border-radius: 4px;

  height: 3.4rem;

  margin-bottom:1.25rem;

  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 1rem;
  color: ${props => props.theme["brown-300"]};
  font-weight: normal;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"]{
  width: 16.5rem
}

input:focus{
  border: 1.5px solid ${props => props.theme["orange-800"]};
  outline: none;
}

input::placeholder{
  font-size: 1rem;
  color: ${props => props.theme["brown-300"]};
  font-weight: normal;
}
`

export const FormDataNumberAndComplement = styled.div`
  display: flex;
  gap: 1rem;  

  input[type="text"]{
  flex-grow: 1;
}

input[type="text"]::before{
  content: 'Opcional'
  
}

`

export const FormDataDistrictCityUF = styled.div`
  display: flex;
  gap: 1rem; 
  box-sizing: border-box;
  width: 100%;
`;

export const FormDataDistrict = styled.div`
input{
  width: 16.5rem;
}
`

export const FormDataCity = styled.div`
 input{
  width: 23.1rem;
 }
`

export const FormDataUf = styled.div`
 input{
  width: 4.5rem;
}
`

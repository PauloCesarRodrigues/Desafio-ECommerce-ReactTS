import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13.4rem;
  margin-bottom: 5rem;
  gap: 1.5rem;

  font-family: ${props => props.theme["title-font"]};
  font-size: 0.6rem;
  line-height: 1.3;

  h1{
    -webkit-text-stroke: 0.5px ${props => props.theme["brown-500"]};
  } 
`

export const CartForm = styled.div`
  width: 53.2rem;
  height: 32rem;
  background-color: ${props => props.theme["white-500"]};
  border-radius: 6px;
`

export const CartFormHeader = styled.header`

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 0.2rem;

  margin: 3.75rem 0 3.125rem 3.5rem;

  color: ${props => props.theme["orange-800"]}; 
`

export const CartFormHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2{
    font-size: 1.3rem;
    font-weight: normal;
    font-family: ${props => props.theme["default-font"]};
    color: ${props => props.theme["brown-700"]};

    margin-bottom:  0.5rem;
  }

  p{
    font-size: 1rem;
    font-family: ${props => props.theme["default-font"]};
    color: ${props => props.theme["brown-500"]};
    font-weight: normal;
  }
`


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


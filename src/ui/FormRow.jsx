import styled from "styled-components";



const StyleFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;


const Image = styled.label`
    font-size: 1.4rem;
    width: 21.5rem;
    display: inline-block;
    margin-top: 2rem;
    border-radius: var(--border-radius-sm);
    background-color: blue;
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: var(--color-brand-700);
    }  
`
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
const Img = styled.img`
  width: 2rem;
  border-radius: 100%;
  `
const StyleImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `


export default function FormRow({ label, error, children,imageName=null,setImageName }) {
  
  if (imageName) {
    return (<>
      <Image onChange={() => {
        setImageName("انتخاب شد")
      }} htmlFor="image">
       {children}
        <StyleImage>{imageName} {imageName === "انتخاب شد" && <Img src="../../../public/images.jpeg" alt="success" />}</StyleImage>
      </Image>
      {error && <Error>{error}</Error>}</>)
  }

  return (
    <StyleFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyleFormRow>

  )
}

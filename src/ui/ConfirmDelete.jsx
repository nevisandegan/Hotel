import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled,onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">حذف {resourceName}</Heading>
      <p>
        آیا مطمئنید که می خواهید  {resourceName} را برای همیشه حذف کنید؟ این
        عمل قابل برگشت نیست
      </p>

      <div>
        <Button  onClick={onCloseModal} variation="secondary" disabled={disabled}>
          لغو
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          حذف
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;

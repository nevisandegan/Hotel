import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeletecabin.js";

import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2"
import { useCreateCabin } from "./useCreateCabin";
import { convertEnNumberToPersian } from "../../utils/helpers";
import Modal from '../../ui/Modal'
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns:1fr 1fr 1fr 1fr 1fr 0.6fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Price = styled.div`
  font-weight: 600;
`;

const Discount = styled.div`
  font-weight: 500;
  color: var(--color-green-700);
`;



export default function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { id: cabinId, name, maxCapacity, regularPrice, discount, image } = cabin
  const { isCreating, createCabins } = useCreateCabin()

  function handleDuplicate() {
    createCabins({
      name: ` کپی از ${name}`,
      maxCapacity, regularPrice, discount, image
    })
  }

  return (<>
    <Table.Row >
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>حداکثر {convertEnNumberToPersian(maxCapacity)} مهمان</div>
      <Price>{convertEnNumberToPersian(regularPrice)} هزار تومان</Price>
      {discount ? <Discount>{convertEnNumberToPersian(discount)} هزار تومان</Discount> : <span>&mdash;</span>}
      <div>
        <button disabled={isCreating} onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button><HiPencil /></button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
          <Modal.Open opens="delete">
            <button><HiTrash /></button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete onConfirm={() => deleteCabin(cabinId)} disabled={isDeleting} resourceName="کابین" />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  </>)
}

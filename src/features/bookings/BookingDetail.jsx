import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty"

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  `;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate()
  const { checkout, isCheckOut } = useCheckout()

  const moveBack = useMoveBack();
  const { deleteBooking, isDeleting } = useDeleteBooking();


  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };


  if (isLoading) { return <Spinner /> }
  if(!booking) return <Empty resourceName='رزرو'/>
  const { status, id: bookingId } = booking;








  return (
    <>
      <Row type="hotizantal">
        <HeadingGroup>
          <Heading as="h1">{`رزرو ${" "}${bookingId}`}</Heading>
          <Tag type={statusToTagName[status]}> {status === "unconfirmed" && 'تایید نشده'}
            {status === "checked-in" && 'پذیرش '}
            {status === "checked-out" && 'خروج '}</Tag>
        </HeadingGroup>

      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && <Button onClick={() => navigate(`/checkin/${bookingId}`)}  >پذیرش </Button>
        }
        {status === 'checked-in' && <Button disable={isCheckOut} onClick={() => checkout(bookingId)}>  خروج</Button>
        }
        <Modal>
          <Modal.Open opens="delete">
            <Button variation='danger'>حذف رزرو</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              disable={isDeleting}
              onConfirm={() => deleteBooking(bookingId, {
                onSettled: () => navigate(-1)
              })} disabled={isDeleting} />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;

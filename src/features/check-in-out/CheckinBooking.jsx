import { useEffect, useState } from "react";
import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Checkbox from "../../ui/Checkbox";


import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useCheckin } from "./useCheckin";
import { useSetting } from "../settings/useSetting";
import { convertEnNumberToPersian } from "../../utils/helpers";



const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false)
  const [addBreakfast, setAddBreakfast] = useState(false)

  const { booking, isLoading } = useBooking();
  const { setting, isLoading: isLoadingSetting } = useSetting()


  useEffect(function () {
    setConfirmPaid(booking?.isPaid ?? false)
  }, [booking])

  const moveBack = useMoveBack();
  const { checkin, isCheckIn } = useCheckin();


  if (isLoading || isLoadingSetting) return <Spinner />

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice = setting.breakfastPrice * numNights * numGuests
  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId, breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice
        }
      })
    }
    else {
      checkin({ bookingId, breakfast: {} })
    }

  }

  return (
    <>
      <Row type="hotizantal">
        <Heading as="h1">پذیرش رزرو {bookingId}</Heading>

      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && <Box>
        <Checkbox checked={addBreakfast} onChange={() => {
          setAddBreakfast(add => !add)
          setConfirmPaid(false)
        }} id="breakfast">
          میخواهید صبحانه اضافه کنید ؟ ({convertEnNumberToPersian(optionalBreakfastPrice)}هزار تومان)
        </Checkbox>
      </Box>}
      <Box>
        <Checkbox disabled={confirmPaid || isCheckIn} checked={confirmPaid} onChange={() => setConfirmPaid(s => !s)} id='confirm'>
          تایید میکنم {guests.fullName} کل مبلغ {convertEnNumberToPersian(
            !addBreakfast ? totalPrice : totalPrice + optionalBreakfastPrice
          )} هزار تومان را پرداخت کرده است
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button disabled={!confirmPaid} onClick={handleCheckin}>پذیرش رزرو {bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          بازگشت
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;

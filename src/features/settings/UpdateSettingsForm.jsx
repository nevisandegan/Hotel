
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner'


import { useSetting } from './useSetting';
import { useEditSetting } from './useEdtiSetting';

function UpdateSettingsForm() {

  const { isloading, setting: {
    minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice
  } = {} } = useSetting()

  const { isSetting, updateSetting } = useEditSetting();


  if (isloading) return <Spinner />


  function handleUpdate(e, field, preValue) {
    const { value } = e.target
    if (preValue === +value) return
    if (!value) return

    updateSetting({
      [field]: value
    })

  }



  return (
    <Form>
      <FormRow label='حداقل شب/رزرو'>
        <Input disabled={isSetting} type='number' id='min-nights' defaultValue={minBookingLength} onBlur={e => handleUpdate(e, 'minBookingLength', minBookingLength)} />
      </FormRow>

      <FormRow label='حداکثر شب/رزرو'>
        <Input disabled={isSetting} type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={e => handleUpdate(e, 'maxBookingLength', maxBookingLength)} />
      </FormRow>

      <FormRow label='حداکثر مهمان/رزرو'>
        <Input disabled={isSetting} type='number' id='max-guests' defaultValue={maxGuestsPerBooking} onBlur={e => handleUpdate(e, 'maxGuestsPerBooking', maxGuestsPerBooking)} />
      </FormRow>

      <FormRow label='قیمت صبحانه'>
        <Input disabled={isSetting} type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={e => handleUpdate(e, 'breakfastPrice', breakfastPrice)} />
      </FormRow>

    </Form>
  );
}

export default UpdateSettingsForm;

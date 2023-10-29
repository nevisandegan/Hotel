
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";


import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import { useState } from "react";




function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {

  const { id: editId, ...editValue } = cabinToEdit;
  const isEditSession = Boolean(editId)

  const [imageName, setImageName] = useState("عکس مورد نظر را انتخاب کنید ...")

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValue : {}
  })
  const { errors } = formState;


  const { isCreating, createCabins } = useCreateCabin()
  const { isEditing, editCabin } = useEditCabin();



  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0]
    if (isEditSession) editCabin({
      newCabinData: {
        ...data
      }, id: editId
    }, {
      onSuccess: () => {
        reset()
        onCloseModal?.()
      }
    })
    else createCabins({ ...data, image }, {
      onSuccess: () => {
        setImageName("عکس مورد نظر را انتخاب کنید ...")
        reset()
        onCloseModal?.()
      }
    })
  }

  function onError(err) {
    console.log(err);
  }


  const isWorking = isCreating || isEditing

  return (

    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow label='نام کابین' error={errors?.name?.message} >
        <Input disabled={isWorking} type="text" id="name" {...register("name",
          {
            required: "نام کابین را وارد کنید"
          })} />
      </FormRow>
      <FormRow label='حداکثر ظرفیت' error={errors?.maxCapacity?.message} >
        <Input disabled={isWorking} type="number" id="maxCapacity"  {...register("maxCapacity",
          {
            required: "حداکثر ظرفیت را وارد کنید",
            min: {
              value: 1,
              message: "حداقل باید یک نفر ثبت شود"
            }
          })} />
      </FormRow>

      <FormRow label=' قیمت اصلی' error={errors?.regularPrice?.message} >
        <Input disabled={isWorking} type="number" id="regularPrice"  {...register("regularPrice",
          {
            required: "قیمت اصلی را  وارد کنید",

          })} />
      </FormRow>

      <FormRow label='تخفیف' error={errors?.discount?.message} >
        <Input disabled={isWorking} type="number" id="discount" defaultValue={0}  {...register("discount",
          {
            required: "تخفیف را وارد کنید",
            validate: (value) => +value < +(getValues().regularPrice) || "تخفیف باید کمتر از قیمت اصلی باشد"
          })} />
      </FormRow>

      <FormRow label='نظرات برای وب سایت' error={errors?.description?.message} >
        <Textarea type="number" id="description" defaultValue=""  {...register("description",
          {
            required: "نظرات خود را وارد کنید"
          })} />
      </FormRow>

      <FormRow imageName={imageName} setImageName={setImageName} error={errors?.image?.message}>
        <input style={{ display: "none" }} type="file" id="image" accept="image/*" {...register("image",
          {
            required: isEditSession ? false : " عکس را وارد کنید"
          })} />
      </FormRow>
      <FormRow>
        <Button disabled={isWorking} variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          لغو
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "ویرایش" : "اضافه کردن کابین"}</Button>
      </FormRow>
    </Form>

  );
}

export default CreateCabinForm;






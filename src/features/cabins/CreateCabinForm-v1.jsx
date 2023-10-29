import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";


import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createCabin } from "../../services/apiCabins";
import { useState } from "react";


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



function CreateCabinForm() {
  const [imageName, setImageName] = useState("عکس مورد نظر را انتخاب کنید ...")



  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState;
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: createCabin
    , onSuccess: () => {
      toast.success('با موفقیت کابین جدید ایجاد شد')
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
      reset();
    },
    onError: (err) => toast.error("اضافه کردن کابین با مشکل مواجه شد")
  })

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] })
  }

  function onError(err) {
    console.log(err);
  }


  const Img = styled.img`
  width: 2rem;
  border-radius: 100%;
  `

  const StyleImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `

  return (

    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='نام کابین' error={errors?.name?.message} >
        <Input type="text" id="name" {...register("name",
          {
            required: "نام کابین را وارد کنید"
          })} />
      </FormRow>
      <FormRow label='حداکثر ظرفیت' error={errors?.maxCapacity?.message} >
        <Input type="number" id="maxCapacity"  {...register("maxCapacity",
          {
            required: "حداکثر ظرفیت را وارد کنید",
            min: {
              value: 1,
              message: "حداقل باید یک نفر ثبت شود"
            }
          })} />
      </FormRow>

      <FormRow label=' قیمت اصلی' error={errors?.regularPrice?.message} >
        <Input type="number" id="regularPrice"  {...register("regularPrice",
          {
            required: "قیمت اصلی را  وارد کنید",

          })} />
      </FormRow>

      <FormRow label='تخفیف' error={errors?.discount?.message} >
        <Input type="number" id="discount" defaultValue={0}  {...register("discount",
          {
            required: "تخفیف را وارد کنید",
            validate: (value) => value < getValues().regularPrice || "تخفیف باید کمتر از قیمت اصلی باشد"
          })} />
      </FormRow>

      <FormRow label='نظرات برای وب سایت' error={errors?.description?.message} >
        <Textarea type="number" id="description" defaultValue=""  {...register("description",
          {
            required: "نظرات خود را وارد کنید"
          })} />
      </FormRow>
      <div>
        <Image onChange={() => {
          setImageName("انتخاب شد")
        }} htmlFor="image">
          <input style={{ display: "none" }} type="file" id="image" accept="image/*" {...register("image",
            {
              required: " عکس را وارد کنید"
            })} />
          <StyleImage>{imageName} {imageName === "انتخاب شد" && <Img src="../../../public/images.jpeg" alt="success" />}</StyleImage>
        </Image>
        {errors?.image?.message && <Error>{errors.image.message}</Error>}

      </div>

      <FormRow>
        <Button disabled={isLoading} variation="secondary" type="reset">
          لغو
        </Button>
        <Button disabled={isLoading}>اضافه کردن کابین</Button>
      </FormRow>
    </Form>

  );
}

export default CreateCabinForm;






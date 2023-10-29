import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="رمزعبور جدید"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "پر کردن این قسمت ضروری است",
            minLength: {
              value: 8,
              message: "رمز وارد شده باید بیشتر از هشت کاراکترباشد",
            },
          })}
        />
      </FormRow>

      <FormRow
        label=" تایید رمز عبور  "
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "پر کردن این قسمت ضروری است",
            validate: (value) =>
              getValues().password === value || "رمزعبور یکسان نیست",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          لغو
        </Button>
        <Button disabled={isUpdating}>به روزرسانی رمز عبور</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;

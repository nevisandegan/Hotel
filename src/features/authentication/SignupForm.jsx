import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {

  const { register, formState, getValues, handleSubmit, reset } = useForm()
  const { errors } = formState
  const { signup, isSignup } = useSignup()




  function onSubmit({ fullname, email, password }) {
    signup({ fullname, email, password },
      {
        onSettled: () => reset
      })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="نام و نام خانوادگی" error={errors?.fullname?.message}>
        <Input disabled={isSignup} type="text" id="fullName"  {...register('fullname', {
          required: "لطفا این قسمت را پر کنید"
        })} />
      </FormRow>

      <FormRow label="آدرس ایمیل" error={errors?.email?.message}>
        <Input disabled={isSignup} type="email" id="email"  {...register('email', {
          required: "لطفا این قسمت را پر کنید",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "لطفا ایمیل معتبر وارد کنید"
          }
        })} />
      </FormRow>

      <FormRow label="رمزعبور (بیشتر از هشت کاراکتر)" error={errors?.password?.message}>
        <Input disabled={isSignup} type="password" id="password"  {...register('password', {
          required: "لطفا این قسمت را پر کنید",
          minLength: {
            value: 8,
            message: "رمز عبور باید بیشتر از هشت کاراکتر باشد"
          }
        })} />
      </FormRow>

      <FormRow label="تکرار رمز عبور" error={errors?.passwordConfirm?.message}>
        <Input disabled={isSignup} type="password" id="passwordConfirm"  {...register('passwordConfirm', {
          required: "لطفا این قسمت را پر کنید",
          validate: (value) => value === getValues().password || 'رمز عبور یکسان نیست'
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={reset} disabled={isSignup} variation="secondary" type="reset">
          لغو
        </Button>
        <Button disabled={isSignup}>ساخت کارمند جدید</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;

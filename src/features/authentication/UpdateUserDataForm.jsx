import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullname: currentFullName },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser()
  const [fullname, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    if (!fullname) return;
    updateUser({ fullname, avatar }, {
      onSuccess: () => {
        setAvatar(null);
        e.target.reset();
      }
    })
  }

  function handleCancle() {
    setFullName(currentFullName)
    setAvatar(null)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="آدرس ایمیل">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="نام و نام خانوادگی">
        <Input
          disabled={isUpdating}
          type="text"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="تصویر">
        <FileInput
          disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button onClick={handleCancle} disabled={isUpdating} type="reset" variation="secondary">
          لغو
        </Button>
        <Button disabled={isUpdating}>به روزرسانی حساب کاربری</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;

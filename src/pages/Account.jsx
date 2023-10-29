import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">به روزرسانی حساب کاربری</Heading>

      <Row>
        <Heading as="h3">ویرایش  اطلاعات کاربر</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">ویرایش رمز عبور</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;

import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from '../../ui/SpinnerMini'

function LoginForm() {
  const [email, setEmail] = useState("hossein@gmail.com");
  const [password, setPassword] = useState("1234");

  const { login, isLoading } = useLogin()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) return;
    login({ email, password }, {
      onSettled: () => {
        setEmail("")
        setPassword("")
      }
    })

  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="آدرس ایمیل">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="رمزعبور">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>{!isLoading ? 'ورود' : <SpinnerMini />}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;

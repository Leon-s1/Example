import { Link } from ""
import React from "react"
import { useForm } from "react-hook-form"
import Input from "../components/input"

type Login = {
  email: string
  password: string
}

type Props = {
  setSelected: (value: string) => void
}

const Login: React.FC<Props> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Login>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })
  return (
    <form className="flex flex-col gap-4">
      <Input
        control={control}
        name="email"
        label="Email"
        type="email"
        required="Обязательное поле"
      />
      <Input
        control={control}
        name="password"
        label="Пароль"
        type="password"
        required="Обязательное поле"
      />
      <p className="text-center text-small">
        Нет аккаунта{""}
        <Link size>Зарегистрируйтес</Link>
      </p>
    </form>
  )
}

export default Login

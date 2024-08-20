import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
} from "@nextui-org/react"
import React, { useContext, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { MdOutlineEmail } from "react-icons/md"
import { useParams } from "react-router-dom"
import { useUpdateUserMutation } from "../../app/services/userApi"
import { User } from "../../app/types"
// import { Button } from "../button"
import { ErrorMessage } from "../error-message"
import { Input } from "../input"
import { ThemeContext } from "../theme-provider"

type Props = {
  isOpen: boolean
  onClose: () => void
  user?: User
}

export const EditProfile: React.FC<Props> = ({ isOpen, onClose, user }) => {
  const { theme } = useContext(ThemeContext)
  const [updateUser, { isLoading }] = useUpdateUserMutation()
  const [error, setError] = useState("")
  const [selectedFile, setSelected] = useState<File | null>(null)
  const { id } = useParams<{ id: string }>()

  const { handleSubmit, control } = useForm<User>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: user?.email,
      name: user?.name,
      dateOfBirth: user?.dateOfBirth,
      bio: user?.bio,
      location: user?.location,
    },
  })
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={`${theme} text-foreground`}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Изменение профиля
            </ModalHeader>
            <ModalBody>
              <form className="flex flex-col gap-4">
                <Input
                  control={control}
                  name="email"
                  label="Email"
                  type="email"
                  endContent={<MdOutlineEmail />}
                />
                <Input control={control} name="name" label="Имя" type="text" />
                <Input
                  type="file"
                  name="avatarUrl"
                  placeholder="Выберите файл"
                />
                <Input
                  control={control}
                  name="dateOfBirth"
                  label="Дата рождения"
                  type="date"
                  placeholder="Дата рождения"
                />
                <Controller
                  control={control}
                  name="bio"
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      rows={4}
                      placeholder="Ваша биография"
                    />
                  )}
                />
                <Input
                  control={control}
                  name="location"
                  label="Местоположение"
                  type="text"
                />
                <ErrorMessage error={error} />
                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    isLoading={isLoading}
                  >
                    Обновите профиль
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

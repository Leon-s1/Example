import {Modal, ModalContent, ModalHeader} from "@nextui-org/react"
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useUpdateUserMutation } from "../../app/services/userApi"
import { User } from "../../app/types"
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
		    {
			    (onClose) => (
						<ModalHeader className='flex flex-col gap-1'>
							Изменение профиля
						</ModalHeader>
				   
			    <ModalBody>
			    
			    )
		    }
	    </ModalContent>
    </Modal>
  )
}

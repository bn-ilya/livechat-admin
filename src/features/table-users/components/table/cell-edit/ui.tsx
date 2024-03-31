import { Button, useDisclosure } from "@nextui-org/react"
import { EditIcon } from "../../../EditIcon"
import { ICellEditProps } from "./ui.props"
import { FC } from "react"
import { EditUserModal } from "../../../../edit-user-modal"

export const CellEdit: FC<ICellEditProps> = ({user}) => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  const handleEditUser = () => {
    onClose();
  }

  const handleClick = () => {
    onOpen();
  }

  return (
    <>
      <Button onClick={handleClick} variant='faded' isIconOnly ><EditIcon /></Button>

      <EditUserModal handleEditUser={handleEditUser} user={user} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
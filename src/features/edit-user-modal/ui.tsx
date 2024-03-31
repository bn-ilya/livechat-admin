import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react"
import { Form } from "./form/ui"
import { IEditUserModalProps } from "./ui.props"
import { FC } from "react"

export const EditUserModal: FC<IEditUserModalProps> = ({isOpen, handleEditUser, onOpenChange, user}) => {
  return (
    <>
      <Modal placement="center"  isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Изменить</ModalHeader>
              <ModalBody>
                <Form handleEditUser={handleEditUser} user={user}/>
                <Button fullWidth color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
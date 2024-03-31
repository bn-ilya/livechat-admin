import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react"
import { Form } from "./form/ui"
import { ICreateUserModalProps } from "./ui.props"
import { FC } from "react"

export const CreateUserModal: FC<ICreateUserModalProps> = ({isOpen, handleCreateUser, onOpenChange}) => {
  return (
    <>
      <Modal placement="center"  isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Зарегистрировать</ModalHeader>
              <ModalBody>
                <Form handleCreateUser={handleCreateUser}/>
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
import { ModalProps } from "@nextui-org/react";

export interface ICreateUserModalProps extends Omit<ModalProps, 'children'> {
  handleCreateUser: () => void
}
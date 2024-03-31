import { ModalProps } from "@nextui-org/react";

export interface IModalProps extends Omit<ModalProps, 'children'> {
  turnout: number,
  handleSave: (value: number) => void
}
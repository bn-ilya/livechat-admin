import { ModalProps } from "@nextui-org/react";

export interface IModalImagesProps extends Omit<ModalProps, 'children'> {
  imageUrls: string[];
}
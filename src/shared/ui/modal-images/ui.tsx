import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { FC } from "react";
import { IModalImagesProps } from "./ui.props";

export const ModalImages: FC<IModalImagesProps> = ({isOpen, onOpenChange, imageUrls}) => {

  return (
    <>
      <Modal scrollBehavior={"outside"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {imageUrls.map((url, index) => {
                  return <img key={index} src={url}/>
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

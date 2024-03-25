import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { FC } from "react";
import { IModalImagesProps } from "./ui.props";
import { PDFReader } from 'reactjs-pdf-reader';

export const ModalImages: FC<IModalImagesProps> = ({isOpen, onOpenChange, imageUrls}) => {

  return (
    <>
      <Modal scrollBehavior={"outside"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Чеки</ModalHeader>
              <ModalBody>
                {
                imageUrls.map((url, index) => {
                  if (url.includes(".pdf")) {
                    console.log(url)
                    return <div key={index} className="[&>div]:w-full [&>div]:overflow-hidden"><PDFReader url={url} width="400" height="375"/></div>
                  } else {
                    return <img key={index} src={url}/>
                  }
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

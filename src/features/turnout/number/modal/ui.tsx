import {Modal as ModalNextUi, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input} from "@nextui-org/react";
import { ChangeEvent, FC, useState } from "react";
import { IModalProps } from "./ui.props";

export const Modal: FC<IModalProps> = ({isOpen, onOpenChange, handleSave, turnout}) => {

  const [newTurnout, setNewTurnout] = useState(turnout);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTurnout(+e.currentTarget.value);
  }

  const handleClick = () => {
    handleSave(newTurnout)
  }

  return (
    <>
      <ModalNextUi isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Указать явки</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <span className="text-center">Количество явок</span>
                  <Input onChange={handleInput} defaultValue={String(newTurnout)} />
                  <Button color="primary" onClick={handleClick} fullWidth>Сохранить</Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button fullWidth color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </ModalNextUi>
    </>
  );
}

import { FC, useState } from "react"
import { ITurnoutNumberProps } from "./ui.props"
import { Button, useDisclosure } from "@nextui-org/react";
import { ErrorModal } from "../../../shared/ui/error-modal";
import { usePutLiveChatClientsByIdMutation } from "../../../shared/api";
import { useErrorReq } from "../../../shared/model";
import { Modal } from "./modal/ui";

export const TurnoutNumber: FC<ITurnoutNumberProps> = ({turnout: turnoutInitial, id, count}) => {
  const [turnout, setTurnout] = useState(turnoutInitial);
  const [putUser, {error}] = usePutLiveChatClientsByIdMutation();
  const {errorMsg} = useErrorReq(error);
  const {onOpen, onClose, isOpen, onOpenChange} = useDisclosure();

  const handleSave = (value: number) => {
    const currentTurnout = value;
    setTurnout(currentTurnout);

    const request = {
      id,
      liveChatClientRequest: {
        data: {turnout: currentTurnout}
      }
    }

    putUser(request);

    onClose()
  }

  const handleClick = () => {
    onOpen()
  }
  
  return (
    <>
      {turnout === count ? (<Button value={0} onClick={handleClick} color="success" variant="faded">Явка</Button>) : (<Button onClick={handleClick} value={1} color="danger" variant="faded">Явка</Button>)}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} turnout={turnout} handleSave={handleSave} />
      <ErrorModal error={errorMsg} textBtn="Понятно" />
    </>
  )
}
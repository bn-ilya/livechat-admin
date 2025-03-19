import { Button } from "@nextui-org/react";
import { FC, MouseEvent, useState } from "react";
import { usePutLiveChatClientChildrensByIdMutation } from "../../../shared/api";
import { useErrorReq } from "../../../shared/model";
import { ErrorModal } from "../../../shared/ui/error-modal";
import { ITurnoutToggleProps } from "./ui.props";

export const TurnoutToggle: FC<ITurnoutToggleProps> = ({turnout: turnoutInitial, id}) => {
  const [turnout, setTurnout] = useState(turnoutInitial);
  const [putUser, {error}] = usePutLiveChatClientChildrensByIdMutation();
  const {errorMsg} = useErrorReq(error);
  
  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    const currentTurnout = +e.currentTarget.value;
    setTurnout(currentTurnout);

    const request = {
      id,
      liveChatClientChildrensRequest: {
        data: {turnout: currentTurnout}
      }
    }

    putUser(request);
  }
  
  return (
    <>
      {turnout === 1 ? (<Button value={0} onClick={handleButton} color="success" variant="faded">Явка</Button>) : (<Button onClick={handleButton} value={1} color="danger" variant="faded">Явка</Button>)}

      <ErrorModal error={errorMsg} textBtn="Понятно" />
    </>
  )
  
}
import { FC } from "react";
import { ITurnoutProps } from "./ui.props";
import { TurnoutToggle } from "./toggle/ui";
import { TurnoutNumber } from "./number/ui";

export const Turnout: FC<ITurnoutProps> = ({count, turnout, id}) => {
  if (count === 1) {
    return <TurnoutToggle turnout={turnout} id={id}/>
  } else {
    return <TurnoutNumber turnout={turnout} count={count} id={id}/>
  }
}
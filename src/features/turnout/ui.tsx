import { FC } from "react";
import { TurnoutToggle } from "./toggle/ui";
import { ITurnoutProps } from "./ui.props";

export const Turnout: FC<ITurnoutProps> = ({turnout, id}) => {
return <TurnoutToggle turnout={turnout} id={id}/>
}
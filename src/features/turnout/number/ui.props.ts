import { LiveChatClient } from "../../../shared/api";

export interface ITurnoutNumberProps {
  count: Required<LiveChatClient>["count"];
  turnout: number;
  id: number
}
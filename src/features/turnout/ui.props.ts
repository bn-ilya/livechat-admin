import { LiveChatClient } from "../../shared/api";

export interface ITurnoutProps {
  count: Required<LiveChatClient>["count"];
  turnout: number;
  id: number
}
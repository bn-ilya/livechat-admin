import { LiveChatClient } from "../../../../../shared/api";

export interface ICellChequesProps {
  cheques: Required<LiveChatClient>["cheques"];
} 
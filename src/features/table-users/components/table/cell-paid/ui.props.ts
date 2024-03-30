import { LiveChatClient, UsersPermissionsUser } from "../../../../../shared/api";

export interface ICellPaidProps {
  paid: LiveChatClient["paid"];
  debt: LiveChatClient["debt"];
  id: Required<UsersPermissionsUser>["lc_form_id"];
} 
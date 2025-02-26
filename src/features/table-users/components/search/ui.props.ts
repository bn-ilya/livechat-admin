import { Dispatch, SetStateAction } from "react";
import {
  ILiveChatClientChildrenUi,
  UsersPermissionsUser,
} from "../../../../shared/api";

export interface ISearchProps {
  setFilteredItems: Dispatch<
    SetStateAction<
      (UsersPermissionsUser | ILiveChatClientChildrenUi)[] | undefined
    >
  >;
}

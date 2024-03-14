import { Dispatch, SetStateAction } from "react";
import { UsersPermissionsUser } from "../../../../shared/api";

export interface ISearchProps {
  setFilteredItems: Dispatch<SetStateAction<UsersPermissionsUser[] | undefined>>
}
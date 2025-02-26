import { useState } from "react";
import {
  ILiveChatClientChildrenUi,
  UsersPermissionsUser,
} from "../../shared/api";
import { ListUsers } from "../list-users/ui";
import { Search } from "./components/search/ui";

export const TableUsers = () => {
  const [filteredItems, setFilteredItems] =
    useState<(UsersPermissionsUser | ILiveChatClientChildrenUi)[]>();

  return (
    <div className="container mx-auto px-4 flex flex-col gap-4">
      <div className="flex gap-3 w-full justify-between">
        <div className="flex-1">
          <Search setFilteredItems={setFilteredItems} />
        </div>
      </div>
      {filteredItems && <ListUsers items={filteredItems} />}
    </div>
  );
};

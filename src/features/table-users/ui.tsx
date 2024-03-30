import { UsersPermissionsUser } from "../../shared/api";
import { useState } from "react";
import { Search } from "./components/search/ui";
import { Table } from "./components/table/ui";

export const TableUsers = () => {
  const [filteredItems, setFilteredItems] = useState<UsersPermissionsUser[]>();

  return (
    <div className="container mx-auto px-4 flex flex-col gap-4">
      <div className="flex gap-3 w-full justify-between">
        <div className="flex-1">
          <Search setFilteredItems={setFilteredItems} />
        </div>
        <div className="flex gap-2 items-center flex-shrink-1 text-zinc-500 text-sm">
          <div>Кол-во:</div>
          <div>{filteredItems?.length}</div>
        </div>
      </div>
      {filteredItems && <Table items={filteredItems} />}
    </div>
  );
}

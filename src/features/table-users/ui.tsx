import { UsersPermissionsUser } from "../../shared/api";
import { useState } from "react";
import { Search } from "./components/search/ui";
import { Table } from "./components/table/ui";

export const TableUsers = () => {
  const [filteredItems, setFilteredItems] = useState<UsersPermissionsUser[]>();

  return (
    <div className="container mx-auto px-4 flex flex-col gap-4">
      <Search setFilteredItems={setFilteredItems} />
      {filteredItems && <Table items={filteredItems} />}
    </div>
  );
}

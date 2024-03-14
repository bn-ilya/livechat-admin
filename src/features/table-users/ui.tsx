import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

import {columns} from "./data";
import { UsersPermissionsUser } from "../../shared/api";
import { useState } from "react";
import { Search } from "./components/search/ui";

export const TableUsers = () => {
  const [filteredItems, setFilteredItems] = useState<UsersPermissionsUser[]>();

  return (
    <>
      <Search setFilteredItems={setFilteredItems} />
      {filteredItems && <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
        </TableHeader>
        <TableBody items={filteredItems}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.lc_form?.city}</TableCell>
              <TableCell>{item?.phone}</TableCell>
              <TableCell>{item?.lc_form?.count}</TableCell>
              <TableCell>{item?.lc_form?.comment}</TableCell>
              <TableCell>{item?.lc_form?.cheques?.data?.map(cheque => cheque.attributes?.url)}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      }
    </>
  );
}

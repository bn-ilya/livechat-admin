import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { FC, useCallback, useEffect, useState } from "react";
import {
  ILiveChatClientChildrenUi,
  UsersPermissionsUser,
  useGetUsersQuery,
} from "../../../../shared/api";
import { ISearchProps } from "./ui.props";

const filteredFunctions = {
  paid: (user: UsersPermissionsUser) => {
    return !!user.lc_form.cheques?.length || !!user.lc_form.senderName;
  },
  notpaid: (user: UsersPermissionsUser) => {
    return !user.lc_form.cheques?.length && !user.lc_form.senderName;
  },
};

const statusesSelect = [
  { key: "all", value: "Все" },
  { key: "paid", value: "Оплачены" },
  { key: "notpaid", value: "Не оплачены" },
];

export const Search: FC<ISearchProps> = ({ setFilteredItems }) => {
  const [filterValue, setFilterValue] = useState("");
  const { data } = useGetUsersQuery();
  const [allowFilter, setAllowFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setAllowFilter(true);
    }, 1500);

    return () => clearInterval(id);
  }, [filterValue, data, statusFilter]);

  useEffect(() => {
    if (!data) return;
    let filteredUsers = [...data];
    if (allowFilter) {
      if (statusFilter !== "all") {
        filteredUsers = filteredUsers.filter((user) => {
          return filteredFunctions[statusFilter](user);
        });
        console.log("filter", filteredUsers);
      }

      setAllowFilter(false);
      let usersAndChilds = filteredUsers
        .map((item) => {
          if (!item?.lc_form?.live_chat_client_childrens) return item;
          const childrensUi: ILiveChatClientChildrenUi[] =
            item.lc_form.live_chat_client_childrens.map((child) => ({
              ...child,
              parent: item.name,
            }));
          return [item, ...childrensUi];
        })
        .flat(1);

      if (filterValue) {
        usersAndChilds = usersAndChilds.filter((user) => {
          return user?.name?.toLowerCase().includes(filterValue.toLowerCase());
        });
      }

      setFilteredItems(usersAndChilds);
    }
  }, [data, filterValue, allowFilter, statusFilter]);

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-3 items-end w-full">
          <Input
            isClearable
            className="w-full"
            placeholder="Поиск..."
            startContent={<MagnifyingGlassIcon width={25} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
            fullWidth
          />
        </div>
        <Select
          defaultSelectedKeys={["all"]}
          onChange={(e) => {
            console.log(e);
            setStatusFilter(e.target.value);
          }}
          className="w-full"
          label="Фильтр оплаты"
        >
          {statusesSelect.map((status) => (
            <SelectItem key={status.key} value={status.key}>
              {status.value}
            </SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
};

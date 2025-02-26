import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input } from "@nextui-org/react";
import { FC, useCallback, useEffect, useState } from "react";
import {
  ILiveChatClientChildrenUi,
  UsersPermissionsUser,
  useGetUsersQuery,
} from "../../../../shared/api";
import { ISearchProps } from "./ui.props";

const filteredFunctions = {
  paid: (user: UsersPermissionsUser) => {
    return (user?.lc_form?.paid || 0) > 0;
  },
  notpaid: (user: UsersPermissionsUser) => {
    return (
      +(user?.lc_form?.paid || 0) <= 0 ||
      +(user?.lc_form?.debt || 0) > +(user?.lc_form?.paid || 0)
    );
  },
};

export const Search: FC<ISearchProps> = ({ setFilteredItems }) => {
  const [filterValue, setFilterValue] = useState("");
  const { data } = useGetUsersQuery();
  const [allowFilter, setAllowFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<
    Iterable<"paid" | "notpaid">
  >(new Set(["paid", "notpaid"]));

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
      if (statusFilter) {
        const arrStatusFilter = Array.from(statusFilter);
        if (
          !(
            arrStatusFilter.includes("paid") &&
            arrStatusFilter.includes("notpaid")
          )
        ) {
          filteredUsers = filteredUsers.filter((user) => {
            return filteredFunctions[arrStatusFilter[0]](user);
          });
        }
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
      </div>
    </>
  );
};

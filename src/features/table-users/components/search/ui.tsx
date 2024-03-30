import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
import { UsersPermissionsUser, useGetUsersQuery } from "../../../../shared/api";
import { ChevronDownIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import { ISearchProps } from "./ui.props";
import { FC, useCallback, useEffect, useState } from "react";

const statusOptions = [
  {name: "Оплачено", uid: "paid"},
  {name: "Не оплачено", uid: "notpaid"}
]

const filteredFunctions = {
  "paid": (user: UsersPermissionsUser) => {
    return (user?.lc_form?.paid || 0) > 0; 
  },
  "notpaid": (user: UsersPermissionsUser) => {
    return (+(user?.lc_form?.paid || 0) <= 0) || (+(user?.lc_form?.debt || 0) > +(user?.lc_form?.paid || 0)); 
  },
}

export const Search: FC<ISearchProps> = ({setFilteredItems}) => {
  const [filterValue, setFilterValue] = useState("");
  const {data} = useGetUsersQuery();
  const [allowFilter, setAllowFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState<Iterable<"paid" | "notpaid">>(new Set(["paid", "notpaid"]));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectStatus = (keys: any) => {
    setAllowFilter(true);
    setStatusFilter(new Set([...keys]));
  }

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(()=>{
    setFilterValue("")
  },[])

  useEffect(()=>{
    const id = setTimeout(()=>{
      setAllowFilter(true);
    }, 1500)

    return () => clearInterval(id);
  }, [filterValue])

  useEffect(()=>{
    if (!data) return;
    let filteredUsers = [...data];
    
    if (allowFilter) {
      
      if(filterValue) {
        filteredUsers = filteredUsers.filter((user) => {
            return user?.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
            user?.lc_form?.city.toLowerCase().includes(filterValue.toLowerCase()) ||
            user?.phone?.toLowerCase().includes(filterValue.toLowerCase()) ||
            user?.lc_form?.comment?.toLowerCase().includes(filterValue.toLowerCase())
          }
        );
      }

      if (filterValue === '') filteredUsers = data;

      if (statusFilter) {
        const arrStatusFilter = Array.from(statusFilter);
        if (!(arrStatusFilter.includes("paid") && arrStatusFilter.includes("notpaid"))) {
            filteredUsers = filteredUsers.filter((user) => {
              return filteredFunctions[arrStatusFilter[0]](user);
            }
          );
        }
      }

      setAllowFilter(false)
      setFilteredItems(filteredUsers);
    }

  }, [data, filterValue, allowFilter, statusFilter])

  useEffect(() => {
    if (!data) return; 
    setFilteredItems(data);
  }, [data])

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-end w-full">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Поиск..."
            startContent={<MagnifyingGlassIcon width={25} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
            fullWidth
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon width={16} className="text-small" />} variant="flat">
                  Статус оплаты
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={handleSelectStatus}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
                </Dropdown> */}
            <Button color="primary" endContent={<PlusIcon width={16} />}>
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
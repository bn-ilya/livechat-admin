import { Input } from "@nextui-org/react";
import { useGetUsersQuery } from "../../../../shared/api";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ISearchProps } from "./ui.props";
import { FC, useCallback, useEffect, useState } from "react";

export const Search: FC<ISearchProps> = ({setFilteredItems}) => {
  const [filterValue, setFilterValue] = useState("");
  const {data} = useGetUsersQuery();
  const [allowFilter, setAllowFilter] = useState(false);

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
      
      filteredUsers = filteredUsers.filter((user) => {
          return user?.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
          user?.lc_form?.city.toLowerCase().includes(filterValue.toLowerCase()) ||
          user?.phone?.toLowerCase().includes(filterValue.toLowerCase()) ||
          user?.lc_form?.comment?.toLowerCase().includes(filterValue.toLowerCase())
        }
      );

      if (filterValue === '') filteredUsers = data;

      setAllowFilter(false)
      setFilteredItems(filteredUsers);
    }

  }, [data, filterValue, allowFilter])

  useEffect(() => {
    if (!data) return; 
    setFilteredItems(data);
  }, [data])

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<MagnifyingGlassIcon width={25} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
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
            </Dropdown>
            <Button color="primary" endContent={<PlusIcon />}>
              Add New
            </Button> */}
          </div>
        </div>
      </div>
    </>
  )
}
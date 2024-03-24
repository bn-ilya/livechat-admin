
import { TableBody, TableCell, TableColumn, TableHeader, Table as TableNext, TableRow } from '@nextui-org/react';
import { ITableProps } from './ui.props';
import { FC } from 'react';

const columns = [
  {name: "Имя", uid: "name"},
  {name: "Город", uid: "city"},
  {name: "Телефон", uid: "phone"},
  {name: "Количество", uid: "count"},
  {name: "Комментарий", uid: "comment"},
  {name: "Чеки", uid: "cheques"},
];

export const Table: FC<ITableProps> = ({items}) => {
  return (
    <TableNext aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.lc_form?.city}</TableCell>
            <TableCell>{item?.phone}</TableCell>
            <TableCell>{item?.lc_form?.count}</TableCell>
            <TableCell>{item?.lc_form?.comment}</TableCell>
            <TableCell>{item?.lc_form?.cheques?.map(cheque => <a href={'https://church-krop.ru:1336' + cheque?.url}>{cheque?.url}</a>)}</TableCell>
          </TableRow>
        )}
      </TableBody>
  </TableNext>
  )
}
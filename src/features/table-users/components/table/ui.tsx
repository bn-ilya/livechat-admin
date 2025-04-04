import { TableBody, TableCell, TableColumn, TableHeader, Table as TableNext, TableRow} from '@nextui-org/react';
import { ITableProps } from './ui.props';
import { FC, useEffect, useState } from 'react';
import { CellCheques } from './cell-cheques/ui';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { CellPaid } from './cell-paid/ui';
import { Turnout } from '../../../turnout/ui';
import { CellEdit } from './cell-edit/ui';
import { TurnoutChildren } from '../../../turnout-children/ui';

const columns = [
  {name: "Имя", uid: "name"},
  {name: "Город", uid: "city"},
  {name: "Телефон", uid: "phone"},
  {name: "Количество", uid: "count"},
  {name: "Оплата", uid: "paid"},
  {name: "Комментарий", uid: "comment"},
  {name: "Инф. Оплаты", uid: "cheques"},
  {name: "Явка", uid: "turnout"},
  {name: "Edit", uid: "edit"},
];

const visabilityCountItems = 50;

export const Table: FC<ITableProps> = ({items}) => {
  const [visabilityCount, setVisabilityCount] = useState(visabilityCountItems);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "200px",
  });

  useEffect(()=>{
    if (entry?.isIntersecting) {
      setVisabilityCount((prev) => prev + visabilityCountItems);
    }
  }, [entry?.isIntersecting])

  useEffect(()=>{
    setVisabilityCount(visabilityCountItems)
  }, [items])

  const itemsFromRender = items.slice(0, visabilityCount);
  return (
    <>
      <TableNext aria-label="Live-chat users table">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
        </TableHeader>
        <TableBody items={itemsFromRender}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.lc_form?.city}</TableCell>
              <TableCell>{item?.phone}</TableCell>
              <TableCell>{item?.lc_form?.count}</TableCell>
              <TableCell>
                {(item.lc_form && item.lc_form_id) && (
                  <CellPaid debt={item.lc_form?.debt} paid={item?.lc_form?.paid} id={item.lc_form_id}/>
                )}
              </TableCell>
              <TableCell>{item?.lc_form?.comment}</TableCell>
              <TableCell>
                {item?.lc_form?.cheques && <CellCheques cheques={item?.lc_form?.cheques} /> || item?.lc_form?.senderName }
              </TableCell>
              <TableCell>{(item.isChildren) ? <TurnoutChildren id={item.id} turnout={item?.lc_form?.turnout ? Number(item?.lc_form?.turnout) : 0} /> : (item?.lc_form && item.lc_form_id) && (<Turnout id={item.lc_form_id} turnout={item?.lc_form?.turnout ? Number(item?.lc_form?.turnout) : 0} />)}</TableCell>
              <TableCell>{!item.isChildren && <CellEdit user={item}/>}</TableCell>

            </TableRow>
          )}
        </TableBody>
      </TableNext>
      <div ref={ref}></div>
  </>
  )
}
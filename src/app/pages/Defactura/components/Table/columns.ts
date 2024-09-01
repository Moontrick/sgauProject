
import { ColumnStyle, TableColumn } from "../../../../../components/Table/types";
import { formatDateToDayMonthYear } from "../../../../../utils/date";
import { DefacturaDataType } from "../../../../types/Defactura/DefacturaTypes";

export const colums: TableColumn<DefacturaDataType>[]=[
    {
    name: 'notkaz',
    title: 'Номер дефектуры',
    width: '100',
  },
    {
    name: 'dateotkaz',
    title: 'Дата дефектуры',
    width: '100',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'datezak',
    title: 'Дата заказа, на который сформирована дефектура.',
    width: '100',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'kodtov',
    title: 'Код товара в системе поставщика',
    width: '100'
  },
    {
    name: 'nametov',
    title: 'Наименование товара в системе поставщика',
    width: '100'
  },
    {
    name: 'proizv',
    title: 'Производитель товара в системе поставщика',
    width: '100'
  },
    {
    name: 'qnt',
    title: 'Кол-во отказанного товара.',
    width: '100'
  },
    {
    name: 'clientid',
    title: 'Код контрагента в системе поставщика',
    width: '100'
  },
    {
    name: 'filialid',
    title: 'Код точки доставки клиента в системе поставщика',
    width: '100'
  },
    {
    name: 'filialadr',
    title: 'Фактический адрес получателя (точки доставки)',
    width: '100',
  },
]










	
	
	

    	

        	
        	
        
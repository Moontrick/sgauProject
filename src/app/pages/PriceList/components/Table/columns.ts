import { GridColDef } from "@mui/x-data-grid";
import { ColumnStyle, TableColumn } from "../../../../../components/Table/types";
import { InvoceTableType } from "../../../../types/InvoceList/invoceListTypes";
import { formatDateToDayMonthYear } from "../../../../../utils/date";
import { PriceListTableType } from "../../../../types/PriceList/types";

const certificateExistStyle: ColumnStyle<InvoceTableType> = {
    cell: {
      style: (item: any) =>{ 
        return (
        {     
        backgroundColor: item === 5 ? 'red' : 'green',
      })},
    },
  };
  

export const colums: TableColumn<PriceListTableType>[]=[
    {
    name: 'tovcod',
    title: 'Код товара в системе поставщика',
    width: '100',
  },
    {
    name: 'tovname',
    title: 'Наименование товара в системе поставщика',
    width: '100'
  },
    {
    name: 'fabrname',
    title: 'Название производителя в системе поставщика',
    width: '100'
  },
    {
    name: 'strana',
    title: 'Страна производителя',
    width: '100'
  },
    {
    name: 'pricefabr',
    title: 'Цена производителя без НДС',
    width: '100'
  },
    {
    name: 'reestr',
    title: 'Цена реестра ЖНВЛП',
    width: '100'
  },
    {
    name: 'nds',
    title: 'Ставка НДС',
    width: '100'
  },
    {
    name: 'price',
    title: 'Цена отгрузки оптовому покупателю',
    width: '100'
  },
    {
    name: 'quantity',
    title: 'Остаток на складе, доступный к заказу',
    width: '100'
  },
    {
    name: 'srokg',
    title: 'Срок годности товара',
    width: '100',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'minzakaz',
    title: 'Ограничение по минимальному заказу',
    width: '100'
  },
    {
    name: 'kratn',
    title: 'Кратность заказа по позиции ',
    width: '100'
  },
    {
    name: 'ean13',
    title: 'Штрих-код товара',
    width: '100'
  },
    {
    name: 'akciya',
    title: 'Признак акции',
    width: '100'
  },
    {
    name: 'mark',
    title: 'Признак маркированного товара',
    width: '100'
  },
]
	
	
	
	

    	

        	
        	
        
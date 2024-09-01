
import { TableColumn } from "../../../../../components/Table/types";
import { formatDateToDayMonthYear } from "../../../../../utils/date";
import { OrderListType } from "../../../../types/OrderList/OrderList";

export const colums: TableColumn<OrderListType>[]=[
    {
    name: 'numz',
    title: 'Номер заказа',
    width: '100',
  },
    {
    name: 'datez',
    title: 'Дата заказа',
    width: '200'
  },
    {
    name: 'timez',
    title: 'Время заказа',
    width: '100'
  },
    {
    name: 'codepst',
    title: 'Код товара в системе поставщика',
    width: '100'
  },
    {
    name: 'tovname',
    title: 'Наименование товара в системе поставщика',
    width: '100'
  },
    {
    name: 'fabrname',
    title: 'Производитель товара',
    width: '100'
  },
    {
    name: 'qnt',
    title: 'Количество товара',
    width: '100'
  },
    {
    name: 'price',
    title: 'Цена',
    width: '100'
  },
    {
    name: 'strsum',
    title: 'Сумма по строке',
    width: '100',
  },
    {
    name: 'idapt',
    title: 'Код контрагента в системе поставщика',
    width: '100'
  },
    {
    name: 'idfilial',
    title: 'Код точки доставки, аптеки - грузополучателя',
    width: '100'
  },
    {
    name: 'apteka',
    title: 'Наименование контрагента',
    width: '100'
  },
    {
    name: 'aptadr',
    title: 'Адрес точки доставки',
    width: '100'
  },
    {
    name: 'message',
    title: 'Комментарий к заказу',
    width: '100'
  },
]
	
	
	
	

    	

        	
        	
        
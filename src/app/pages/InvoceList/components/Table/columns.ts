import { GridColDef } from "@mui/x-data-grid";
import { ColumnStyle, TableColumn } from "../../../../../components/Table/types";
import { InvoceTableType } from "../../../../types/InvoceList/invoceListTypes";
import { formatDateToDayMonthYear } from "../../../../../utils/date";

const certificateExistStyle: ColumnStyle<InvoceTableType> = {
    cell: {
      style: (item: any) =>{ 
        return (
        {     
        backgroundColor: item === 5 ? 'red' : 'green',
      })},
    },
  };
  

export const colums: TableColumn<InvoceTableType>[]=[
    {
    name: 'docdate',
    title: 'Дата накладной',
    width: '100',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
    // style: certificateExistStyle, 
  },
    {
    name: 'docnumber',
    title: 'Номер накладной',
    width: '100'
  },
    {
    name: 'billdate',
    title: 'Дата выписки счет-фактуры',
    width: '100',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'billnumber',
    title: 'Номер счет- фактуры',
    width: '500'
  },
    {
    name: 'tovname',
    title: 'Наименование товара',
    width: '300'
  },
    {
    name: 'tovcod',
    title: 'Код товара',
    width: '300'
  },
    {
    name: 'fabrname',
    title: 'Наименование производителя ',
    width: '300'
  },
    {
    name: 'country',
    title: 'Страна производителя',
    width: '300'
  },
    {
    name: 'quantity',
    title: 'Количество товара',
    width: '500'
  },
    {
    name: 'seria',
    title: 'Серия товара',
    width: '500'
  },
    {
    name: 'srokg',
    title: 'Срок годности товара',
    width: '500',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'numbergtd',
    title: 'Номер грузовой таможенной декларации для импортного товара.',
    width: '500'
  },
    {
    name: 'sert',
    title: 'Сертификат выданный на данный товар.',
    width: '500'
  },
    {
    name: 'sertstart',
    title: 'Дата начала действия (регистрации) сертификата',
    width: '500',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'sertend',
    title: 'Дата окончания действия сертификата',
    width: '500',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'sertlab',
    title: 'Лаборатория, выдавшая сертификат.',
    width: '500'
  },
    {
    name: 'regnumber',
    title: 'Регистрационный номер присвоенный партии лек.средства в региональном центре контроля качества ЛС. ',
    width: '500'
  },
    {
    name: 'nds',
    title: 'Ставка НДС',
    width: '500'
  },
    {
    name: 'pfabrnonds',
    title: 'Цена производителя без НДС',
    width: '500'
  },
    {
    name: 'pfabrwnds',
    title: 'Цена производителя с НДС',
    width: '500'
  },
    {
    name: 'pfoptnonds',
    title: 'Цена отпускная оптовой организации БЕЗ НДС (по которой аптека покупает). ',
    width: '500'
  },
    {
    name: 'pfoptwnds',
    title: 'Цена отпускная оптовой организации С НДС (по которой аптека покупает).',
    width: '500'
  },
    {
    name: 'poptnac',
    title: 'Процент оптовой наценки',
    width: '500'
  },
    {
    name: 'soptnonds',
    title: 'Сумма без НДС за товар по строке. Нужна чтобы сумма электронной накладной сходилась до копейки с бумажной.',
    width: '500'
  },
    {
    name: 'soptwnds',
    title: 'Сумма с НДС за товар по строке. Нужно чтобы сумма электронной накладной сходилась до копейки с бумажной.',
    width: '500'
  },
    {
    name: 'soitogwnds',
    title: 'Сумма с НДС за товар по всему документу.',
    width: '500'
  },
    {
    name: 'sumnds',
    title: 'Сумма НДС по строке в накладной. Нужно чтобы сумма электронной накладной сходилась до копейки с бумажной.',
    width: '500'
  },
    {
    name: 'rprice',
    title: 'Цена реестра ЖНВЛП',
    width: '500'
  },
    {
    name: 'sumitognds',
    title: 'Сумма НДС по всему документу',
    width: '500'
  },
    {
    name: 'barcode1',
    title: 'Штрихкод товара (12-13 символов) в текстовом формате.',
    width: '500'
  },
    {
    name: 'kodclient',
    title: 'Код подразделения организации покупателя куда доставляется товар. Организация как правило одна, подразделений куда доставляется товар (апт.пунктов, филиалов) может быть несколько с разными кодами.',
    width: '500'
  },
    {
    name: 'nameclient',
    title: 'Наименование контрагента в системе поставщика',
    width: '500'
  },
    {
    name: 'adrclient',
    title: 'Адрес фактического грузополучателя (точки доставки) клиента',
    width: '500'
  },
    {
    name: 'pricerozn',
    title: 'Цена розничная для продажи в аптеке, устанавливаемая поставщиком (интернет-заказы (Аптека.ру, Здравсити и пр.), акции).',
    width: '500'
  },
    {
    name: 'intzak',
    title: 'Признак интернет - заказа',
    width: '500'
  },
    {
    name: 'marktag',
    title: 'Признак маркировки',
    width: '500'
  },
    {
    name: 'gtin',
    title: 'Код GTIN наименований',
    width: '500'
  },
    {
    name: 'placeid',
    title: 'Код места деятельности поставщика',
    width: '500'
  },
    {
    name: 'accept',
    title: 'Тип акцепта',
    width: '500'
  },
    {
    name: 'datesale',
    title: 'Для ЖНВЛП, дата реализации лекарственного препарата производителем ',
    width: '500',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'datemade',
    title: 'Дата производства препарата',
    width: '500',
    format: (row) => (formatDateToDayMonthYear(new Date(row))),
  },
    {
    name: 'sscc',
    title: 'Код транспортной упаковки',
    width: '500'
  },
]
	
	
	
	

    	

        	
        	
        
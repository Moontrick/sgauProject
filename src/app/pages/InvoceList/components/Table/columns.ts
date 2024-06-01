import { GridColDef } from "@mui/x-data-grid";
import { ColumnStyle, TableColumn } from "../../../../../components/Table/types";
import { InvoceTableType } from "../../../../types/InvoceList/invoceListTypes";

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
    name: 'numberOfParty',
    title: '№ п/п',
    width: '100',
    style: certificateExistStyle, 
  },
    {
    name: 'countOfPriceTag',
    title: 'Кол-во ценников',
    width: '100'
  },
    {
    name: 'countOfLabels',
    title: 'Кол-во этикеток',
    width: '100'
  },
    {
    name: 'nameOfItem',
    title: 'Наименование',
    width: '500'
  },
    {
    name: 'arivalName',
    title: 'Производитель',
    width: '300'
  },
    {
    name: 'markingStatus',
    title: 'Состояние маркировки',
    width: '300'
  },
    {
    name: 'TSOGroup',
    title: 'Группа ЦО',
    width: '300'
  },
    {
    name: 'markingCategory',
    title: 'Категория маркировки',
    width: '300'
  },
    {
    name: 'VATRate',
    title: 'Ставка НДС',
    width: '500'
  },
    {
    name: 'quantityPack',
    title: 'Кол-во упак.',
    width: '500'
  },
    {
    name: 'numberParts',
    title: 'Кол-во в частях',
    width: '500'
  },
    {
    name: 'priceWithoutVAT',
    title: 'Цена произ. без НДС',
    width: '500'
  },
    {
    name: 'priceWithVAT',
    title: 'Цена произ. c НДС',
    width: '500'
  },
    {
    name: 'wholesalePriceWithoutVAT',
    title: 'Цена оптовая без НДС',
    width: '500'
  },
    {
    name: 'wholesalePriceWithVAT',
    title: 'Цена оптовая с НДС',
    width: '500'
  },
    {
    name: 'amountWholesaleWithoutVAT',
    title: 'Сумма оптовая без НДС',
    width: '500'
  },
    {
    name: 'amountVATWholesale',
    title: 'Сумма НДС опт.',
    width: '500'
  },
    {
    name: 'wholesaleAmountWithVATRetail',
    title: 'Сумма оптовая с НДС% розн. нац. от цены опт. с НДС',
    width: '500'
  },
    {
    name: 'marginRublesPriceWithoutVAT',
    title: 'Наценка в руб.% розн. нац. от цены произв. без НДС',
    width: '500'
  },
    {
    name: 'maxWholesalePriceRetailWithVAT',
    title: 'Макс. опт. цена	Цена розничная с НДС',
    width: '500'
  },
    {
    name: 'maxRetailPrice',
    title: 'Макс. розн. цена',
    width: '500'
  },
    {
    name: 'retailAmountWithVAT',
    title: 'Сумма розничная с НДС',
    width: '500'
  },
    {
    name: 'priceRegistryInvoice',
    title: 'Цена реестра в накладной',
    width: '500'
  },
    {
    name: 'expirationDate',
    title: 'Срок годности',
    width: '500'
  },
    {
    name: 'series',
    title: 'Серия',
    width: '500'
  },
    {
    name: 'manufacturerBarcode',
    title: 'Штрихкод производителя',
    width: '500'
  },
    {
    name: 'currentBalance',
    title: 'Текущий остаток',
    width: '500'
  },
    {
    name: 'lastRetailPriceWithVAT',
    title: 'Последняя розничная цена с НДС',
    width: '500'
  },
    {
    name: 'GTDnumber',
    title: 'Номер ГТД',
    width: '500'
  },
    {
    name: 'certificate',
    title: 'Сертификат',
    width: '500'
  },
    {
    name: 'dateCertificate',
    title: 'Дата сертификата',
    width: '500'
  },
    {
    name: 'laboratoryNumber',
    title: 'Лаборатория	Рег. номер',
    width: '500'
  },
    {
    name: 'priceRegistryReference',
    title: 'Цена реестра справочно',
    width: '500'
  },
    {
    name: 'ZHNVLS',
    title: 'ЖНВЛС',
    width: '500'
  },
    {
    name: 'batchNumber',
    title: '№ Партии',
    width: '500'
  },
    {
    name: 'internalBarcode',
    title: 'Внутренний штрихкод',
    width: '500'
  },
    {
    name: 'pharmaceuticalGroup',
    title: 'Фармацевтическая группа',
    width: '500'
  },
    {
    name: 'storageLocation',
    title: 'Место хранения',
    width: '500'
  },
    {
    name: 'percentageWholesaleMargin',
    title: 'Процент оптовой наценки',
    width: '500'
  },
    {
    name: 'priceRetailWithoutVAT',
    title: 'Цена розн. без НДС	% розн. нац. от цены опт. без НДС',
    width: '500'
  },
    {
    name: 'maxNational',
    title: 'Макс. % нац.',
    width: '500'
  },
    {
    name: 'excise',
    title: 'Акциз',
    width: '500'
  },
    {
    name: 'dutyMargin',
    title: 'Маржа',
    width: '500'
  },
    {
    name: 'lot',
    title: 'Лот',
    width: '500'
  },
    {
    name: 'productCode',
    title: 'Код товара',
    width: '500'
  },
    {
    name: 'priceRetailWithDiscount',
    title: 'Цена розн. со скидкой',
    width: '500'
  },
    {
    name: 'reasonClaim',
    title: 'Причина претензии',
    width: '500'
  },
    {
    name: 'markingFeature',
    title: 'Признак маркировки',
    width: '500'
  },
    {
    name: 'dateSaleManufacturer',
    title: 'Дата реализации производителя',
    width: '500'
  },
    {
    name: 'comment',
    title: 'Комментарий',
    width: '500'
  },
    {
    name: 'dataRosnPriceWithVAT',
    title: 'Данные по конечному получателю | Розн.цена с НДС',
    width: '500'
  },
    {
    name: 'dataRosnPriceWithoutVAT',
    title: 'Данные по конечному получателю | Розн.цена без НДС	',
    width: '500'
  },
    {
    name: 'dataMaxRetailPrice',
    title: 'Данные по конечному получателю | Макс. розн. цена',
    width: '500'
  },
    {
    name: 'dataMarginWholesalePriceWithVAT',
    title: 'Данные по конечному получателю |% наценки от цены опт. с НДС',
    width: '500'
  },
    {
    name: 'dataMarginManufacturerPriceWithoutVAT',
    title: 'Данные по конечному получателю | % наценки от цены производителя без НДС',
    width: '500'
  },
    {
    name: 'dataCOCGroupWarehouseMargin',
    title: 'Данные по конечному получателю | Группа ЦО	Наценка склада',
    width: '500'
  },
    {
    name: 'originalPriceWithVAT',
    title: 'Изначальная розн. цена с НДС',
    width: '500'
  },
    {
    name: 'INN',
    title: 'ИНН',
    width: '500'
  },
    {
    name: 'factoryPackaging',
    title: 'Заводская фасовка',
    width: '500'
  },
    {
    name: 'productGroupCode',
    title: 'код товарной группы',
    width: '500'
  },
    {
    name: 'nameProductGroup',
    title: 'Наименование товарной группы',
    width: '500'
  },
    {
    name: 'numberUnitChanges',
    title: 'Кол-во|Ед.изм.',
    width: '500'
  },
    {
    name: 'numberShelvingCards',
    title: 'Кол-во стеллажных карточек',
    width: '500'
  },
    {
    name: 'nameSupplierProduct',
    title: 'Наименование товара поставщика',
    width: '500'
  },
    {
    name: 'nameManufactureSupplier',
    title: 'Наименование производителя поставщика',
    width: '500'
  },
]
	
	
	
	

    	

        	
        	
        
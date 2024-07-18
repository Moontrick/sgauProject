import { baseService } from "../../../api";
import { CONFIG } from "../../../api/config";
import { TableState } from "../../../components/Table/typings";
import { TestType, InvoceTableType } from "../../types/InvoceList/invoceListTypes";
import { PagedResponse } from "../../types/shared/shared";



const MAIN_URL = CONFIG.MAIN_API
const TEST_URL = CONFIG.TEST_API

const getTable = async () => {
  const data = {
    numberOfParty: 4,
        countOfPriceTag: '2123',
        countOfLabels: 'rewrw',
        nameOfItem: '12321',
        arivalName: 'gdfgsd',
        markingStatus: 'gfdgfds',
        TSOGroup: 'hgfhgsf',
        markingCategory: 'fewerew',
        VATRate: 'fdsge',
        quantityPack: 'gfdhghs',
        numberParts: '',
        priceWithoutVAT: '',
        priceWithVAT: '',
        wholesalePriceWithoutVAT: '',
        wholesalePriceWithVAT: '',
        amountWholesaleWithoutVAT: '',
        amountVATWholesale: '',
        wholesaleAmountWithVATRetail: '',
        marginRublesPriceWithoutVAT: '',
        maxWholesalePriceRetailWithVAT: '',
        maxRetailPrice: '',
        retailAmountWithVAT: '',
        priceRegistryInvoice: '',
        expirationDate: '',
        series: '',
        manufacturerBarcode: '',
        currentBalance: '',
        lastRetailPriceWithVAT: '',
        GTDnumber: '',
        certificate: '',
        dateCertificate: '',
        laboratoryNumber: '',
        priceRegistryReference: '',
        ZHNVLS: '',
        batchNumber: '',
        internalBarcode: '',
        pharmaceuticalGroup: '',
        storageLocation: '',
        percentageWholesaleMargin: '',
        priceRetailWithoutVAT: '',
        maxNational: '',
        excise: '',
        dutyMargin: '',
        lot: '',
        productCode: '',
        priceRetailWithDiscount: '',
        reasonClaim: '',
        markingFeature: '',
        dateSaleManufacturer: '',
        comment: '',
        dataRosnPriceWithVAT: '',
        dataRosnPriceWithoutVAT: '',
        dataMaxRetailPrice: '',
        dataMarginWholesalePriceWithVAT: '',
        dataMarginManufacturerPriceWithoutVAT: '',
        dataCOCGroupWarehouseMargin: '',
        originalPriceWithVAT: '',
        INN: '',
        factoryPackaging: '',
        productGroupCode: '',
        nameProductGroup: '',
        numberUnitChanges: '',
        numberShelvingCards: '',
        nameSupplierProduct: '',
        nameManufactureSupplier: ''
    
  }
  const res = await baseService.post(`${TEST_URL}/api/invoce`,data);
  // const params = {
  //   json: '%7B"key":"value"%7D'
  // }
  //   const res = await baseService.get<PagedResponse<any>>(`${MAIN_URL}/`, {params});
  //   return res.data;
  };
const getTest= async () => {
    const res = await baseService.get<PagedResponse<TestType[]>>(`${TEST_URL}/api/test`);
    return res.data;
  };
const getInvoceData= async (oldParams: TableState['params']) => {
const params: Record<string, unknown> = {
'numberOfParty.contains' : oldParams.query
}
  const res = await baseService.get<InvoceTableType[]>(`${TEST_URL}/api/invoce`, {params});
    return res.data;
  };


  export const invoceListService = {
    getTable,
    getTest,
    getInvoceData,
  };
  
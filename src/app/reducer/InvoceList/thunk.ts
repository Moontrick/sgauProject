import { setTableData } from '.';
import { TableState } from '../../../components/Table/typings';
import { invoceListService } from '../../service/invoceList/invoceList';
import {AppThunkResult} from '../../store/index';
import { InvoceTableType } from '../../types/InvoceList/invoceListTypes';
import { hideLoading, showErrorModal, showLoading } from '../SettingStore';

export function getTableData(params: TableState['params']): AppThunkResult {
return async (dispatch) => {
    try {
        console.log(params)
    // const data = await userService.findByText(text);
    const data: InvoceTableType[] = [
        {
        numberOfParty: 1,
        countOfPriceTag: '2123',
        countOfLabels: '',
        nameOfItem: '',
        arivalName: '',
        markingStatus: '',
        TSOGroup: '',
        markingCategory: '',
        VATRate: '',
        quantityPack: '',
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
      },
        {
        numberOfParty: 5,
        countOfPriceTag: 'fds',
        countOfLabels: 'fds',
        nameOfItem: '',
        arivalName: '',
        markingStatus: '',
        TSOGroup: '',
        markingCategory: '',
        VATRate: '',
        quantityPack: '',
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
    ]
      dispatch(setTableData(data))
    } catch (error) {
    console.log(error)
    }
};
}
export function getZapr(): AppThunkResult {
return async (dispatch) => {
    try {
      dispatch(showLoading())
      const data = await invoceListService.getTable()
      console.log(data)
    } catch (error) {
      let erMessage = 'Ошибка';
      if (error instanceof Error) {
        erMessage = error.message
      }
      dispatch(showErrorModal({isOpen: true, errorMessage: {errorMessage: erMessage, code: 123}}))
    }finally {
      dispatch(hideLoading());
    }
};
}

export function getTestUrl(): AppThunkResult {
  return async (dispatch) => {
      try {
        dispatch(showLoading())
        const data = await invoceListService.getTest()
        console.log(data)
      } catch (error) {
        let erMessage = 'Ошибка';
        if (error instanceof Error) {
          erMessage = error.message + error.name + error?.stack + error?.cause

        }
        dispatch(showErrorModal({isOpen: true, errorMessage: {errorMessage: erMessage, code: 0}}))
      }finally {
        dispatch(hideLoading());
      }
  };
}
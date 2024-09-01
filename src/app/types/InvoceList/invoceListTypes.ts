export type InvoceTableType = {
    // id?: number;
    // numberOfParty: number;
    // countOfPriceTag: string;
    // countOfLabels: string;
    // nameOfItem: string;
    // arivalName: string;	
    // markingStatus: string;
    // TSOGroup: string;
    // markingCategory: string;
    // VATRate: string;
    // quantityPack: string;
    // numberParts: string;
    // priceWithoutVAT: string;
    // priceWithVAT: string;
    // wholesalePriceWithoutVAT: string;
    // wholesalePriceWithVAT: string;
    // amountWholesaleWithoutVAT: string;
    // amountVATWholesale: string;
    // wholesaleAmountWithVATRetail: string;
    // marginRublesPriceWithoutVAT: string;
    // maxWholesalePriceRetailWithVAT: string;
    // maxRetailPrice: string;
    // retailAmountWithVAT: string;
    // priceRegistryInvoice: string;
    // expirationDate: string;
    // series: string;
    // manufacturerBarcode: string;
    // currentBalance: string;
    // lastRetailPriceWithVAT: string;
    // GTDnumber: string;
    // certificate: string;
    // : string;Certificate: string;
    // laboratoryNumber: string;
    // priceRegistryReference: string;
    // ZHNVLS: string;
    // batchNumber: string;
    // internalBarcode: string;
    // pharmaceuticalGroup: string;
    // storageLocation: string;
    // percentageWholesaleMargin: string;
    // priceRetailWithoutVAT:string;
    // maxNational: string;
    // excise: string;
    // dutyMargin: string;
    // lot: string;
    // productCode: string;
    // priceRetailWithDiscount: string;
    // reasonClaim: string;
    // markingFeature: string;
    // : string;SaleManufacturer: string;
    // comment: string;
    // dataRosnPriceWithVAT: string;
    // dataRosnPriceWithoutVAT: string;
    // dataMaxRetailPrice: string;
    // dataMarginWholesalePriceWithVAT: string;
    // dataMarginManufacturerPriceWithoutVAT: string;
    // dataCOCGroupWarehouseMargin: string;
    // originalPriceWithVAT: string;
    // INN: string;
    // factoryPackaging: string;
    // productGroupCode: string;
    // nameProductGroup: string;
    // numberUnitChanges: string;
    // numberShelvingCards: string;
    // nameSupplierProduct : string;
    // nameManufactureSupplier: string;
    id: number;
    docdate: string;
    docnumber : string;
    billdate: string;
    billnumber : string;
    tovname : string;
    tovcod : string;
    fabrname : string;
    country : string;
    quantity: number;
    seria : string;
    srokg : string;
    numbergtd : string;
    sert : string;
    sertstart : string;
    sertend : string;
    sertlab : string;
    regnumber : string;
    nds :number;
    pfabrnonds :number;
    pfabrwnds :number;
    pfoptnonds :number;
    pfoptwnds :number;
    poptnac:number;
    soptnonds :number;
    soptwnds :number;
    soitogwnds:number;
    sumnds:number;
    rprice :number;
    sumitognds:number;
    barcode1 : string;
    kodclient : string;
    nameclient : string;
    adrclient : string;
    pricerozn :number;
    intzak :number;
    marktag :number;
    gtin : string;
    placeid : string;
    accept :number;
    datesale : string;
    datemade : string;
    sscc : string;
}




export type UnderTest = {
    name: string;
    date: Date;
    numberOfArrival: number;
}
export type TestType = {
    pole1: string; //строка '1234'
    pole2: string[]; //список строк ['123', '456']
    pole3: number; // 123421 Int
    pole4: Date; // dd.mm.yy
    pole5: UnderTest;
}
export const InitStateTestType: TestType = {
    pole1: "",
    pole2: [],
    pole3: 0,
    pole4: new Date(),
    pole5: {
        name: "",
        date: new Date(),
        numberOfArrival: 0
    }
}
// [
    // {
    //     pole1: '132',
    //     pole2: ['1234', '4567'],
    //     pole3: 123,
    //     pole4: '10.12.2024',
    //     pole5: {
    //         name: 'name',
    //         : string;: '12.12.2023',
    //         numberOfArrival: 45353,
    //     }
    // }
//]

// .../invoce

// GET { //params, PUT
//     'nameManufactureSupplier.in' // содержит список на вход массив
//     'nameManufactureSupplier.contains' //  содержит поле
//     'nameManufactureSupplier.equals' // полносвязанное сравнение 1 === 1 а в UTF8 !== а в 1251 поле
//     'nameManufactureSupplier.notEquals'// не равно поле
//     'nameManufactureSupplier.before' // начало преиода Date поле
//     'nameManufactureSupplier.after' // конец приода Date поле
// }
//.../invoce?nameManufactureSupplier.in=123&factoryPackaging.equals=321

//GET, DELETE имеет params
//POST, PUT, PATCH

//GET .../invoce/`${id}`

//POST, PUT создание
//POST json{ 201 202 203 204 200
//    'nameManufactureSupplier': 3123
//}
//PUT измение
//PUT json{ 201 204 200
//    'nameManufactureSupplier': 3123
//}
//list[]


// .../invoce => list[]
// .../invoce/table => {
//     content: [], //строки таблицы
//     totalCount: number, //количество сраниц
//     page: number //текущая страница
//     size: number // кол-во элементов на странице
// }


// GET .../invoce/table? =>{
//     page: number, // текущая страница 
//     size: number, //количество элементов которые должны вернуться в content
//     sort: string, // DESC -> ASC     DESC->number.DESC => content 1 элемент являтся в базе последним ASC наоборт 1 элемент 1 элемент в базе
//     params: [
//       
//     ]
// }
//
// 400 500 => []
// Promise - обещание state => payload, rejected =>  finaly


// GET => body = Params => Header = Barier access_token => пользователь строго на стороне бэка, name, email, stuff, etc...


// CORS -> localhost


// Date => UTC  UCT 
// UTC Z
// UCT dd.mm.yy
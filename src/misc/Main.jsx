import React from 'react';
// import TestComponent from '../components/Test'
import Dashboard from '../components/Dashboard';

class Main extends React.Component {
    render() {
        return(
            <Dashboard />
        )
    };
}

export default Main;









// import React from "react";
// import '../../index.css';
// import CartonInformationPanel from '../../components/CartonInformationPanel';
// import InternationalPanel from '../../components/InternationalPanel';
// import PickTicketPanel from '../../components/PickTicketPanel';
// import DeliverToPanel from '../../components/DeliverToPanel';
// import DetailsPanel from '../../components/DetailsPanel';
// import HeightModal from '../../components/HeightModal';
// import DuplicateCasePackModal from '../../components/DuplicateCasePackModal';
// import MikeModal from '../../components/MikeModal';
// import ConfirmShipmentModal from '../../components/ConfirmShipmentModal';
// import LabelModal from '../../components/LabelModal';
// import Grid from '@material-ui/core/Grid';
// import API from "../../utils/API";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import ModeDropdown from '../../components/ModeDropdown';
// import { createBrowserHistory } from 'history';


// const browserHistory = createBrowserHistory();

// var dates = {
//     convert: function (d) {
//         return (
//             d.constructor === Date ? d :
//                 d.constructor === Array ? new Date(d[0], d[1], d[2]) :
//                     d.constructor === Number ? new Date(d) :
//                         d.constructor === String ? new Date(d) :
//                             typeof d === "object" ? new Date(d.year, d.month, d.date) :
//                                 NaN
//         );
//     },
//     compare: function (a, b) {
//         // Compare two dates (could be of any type supported by the convert
//         // function above) and returns:
//         //  -1 : if a < b
//         //   0 : if a = b
//         //   1 : if a > b
//         // NaN : if a or b is an illegal date
//         // NOTE: The code inside isFinite does an assignment (=).
//         return (
//             isFinite(a = this.convert(a).valueOf()) &&
//                 isFinite(b = this.convert(b).valueOf()) ?
//                 (a > b) - (a < b) :
//                 NaN
//         );
//     },
//     inRange: function (d, start, end) {
//         // Checks if date in d is between dates in start and end.
//         // Returns a boolean or NaN:
//         //    true  : if d is between start and end (inclusive)
//         //    false : if d is before start or after end
//         //    NaN   : if one or more of the dates is illegal.
//         // NOTE: The code inside isFinite does an assignment (=).
//         return (
//             isFinite(d = this.convert(d).valueOf()) &&
//                 isFinite(start = this.convert(start).valueOf()) &&
//                 isFinite(end = this.convert(end).valueOf()) ?
//                 start <= d && d <= end :
//                 NaN
//         );
//     }
// }

// class Induction extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             open: true,
//             deliverToAddressId: '',
//             storeNumber: '',
//             companyName: '',
//             individualName: '',
//             // firstName: '',
//             // lastName: '',
//             streetAddress: '',
//             address1: '',
//             // address1: '',
//             phoneNumber: '',
//             city: '',
//             state: '',
//             country: 'USA',
//             zipCode: '',
//             emailAddress: '',
//             faxNumber: '',
//             lookup1: {},
//             validateAddress: {},

//             //CartonInformation
//             countries: [{
//                 label: 'USA', value: 'USA', selected: true,
//             },
//             {
//                 label: 'Mexico', value: 'Mexico', selected: false,
//             },
//             {
//                 label: 'Canada', value: 'Canada', selected: false,
//             },],
//             distributionCenterList: [
//                 {
//                     label: 'DALLAS', value: 'DALLAS', selected: true,
//                 },
//                 {
//                     label: 'CHICAGO', value: 'CHICAGO', selected: false,
//                 },
//                 {
//                     label: 'LOS ANGELES', value: 'LOS ANGELES', selected: false,
//                 },
//             ],
//             shipViaList: [
//                 {
//                     label: 'GROUND', value: 'GROUND', selected: true,
//                 },
//                 {
//                     label: 'TWO DAY', value: 'TWO DAY', selected: true,
//                 },
//                 {
//                     label: 'HOME DELIVERY', value: 'HOME DELIVERY', selected: true,
//                 },
//                 {
//                     label: 'PRIORITY OVERNIGHT', value: 'PRIORITY OVERNIGHT', selected: true,
//                 },
//                 {
//                     label: 'STANDARD OVERNIGHT', value: 'STANDARD OVERNIGHT', selected: false,
//                 },
//                 {
//                     label: 'EXPRESS SAVER', value: 'EXPRESS SAVER', selected: false,
//                 },
//             ],
//             billingAccounts: [],
//             distributionCenter: '6003',
//             billingAccount: 'DEMO',
//             shipUnitId: '',
//             cartonNumber: '',
//             referenceNumber: '',
//             orderNumber: '',
//             shipDate: new Date(),
//             dateExpectedDelivery: null,
//             dateScanned: '',

//             //Details
//             boxSize: '',
//             weight: '',
//             length: '',
//             width: '',
//             height: '',
//             heightUnit: "IN",
//             weightUnit: 'LBS',
//             currencyUnit: 'USD',

//             //Services
//             shippingOptions: [],
//             ShipOptionXML: '',
//             services: [],
//             carrierId: 'FEDEX',
//             shipMethodId: 'GROUND',
//             multi: null,
//             selectedShipVia: '20',
//             rateShopResult: [],
//             LabelURL: '',
//             labelBufURL: '',
//             previousLabelBufURL: '',
//             TotalCharge: '',
//             labelErrorNumber: '',
//             labelErrorMessage: '',
//             counter: 0,
//             shippingOptionFinalList: ["<SATURDAY_DELIVERY/>", "<SIGNATURE_CONFIRMATION/>", "<ADULT_SIGNATURE_CONFIRMATION/>", "<HOLD_AT_LOCATION/>"],
//             carrierIds: 'UPS, FEDEX, USPS',
//             carrierList: [
//                 {
//                     value: 'UPS',
//                     logo: './UPSLogo.jpg',
//                     list: [],
//                 },
//                 {
//                     value: 'FEDEX',
//                     logo: './FedExLogo.png',
//                     list: [],
//                 },
//                 {
//                     value: 'USPS',
//                     logo: './USPSLogo.png',
//                     list: [],
//                 },
//             ],

//             //Miscellaneous 
//             userGuideHTML: null,
//             contactDisabled: false,
//             duplicateCasePackModal: false,
//             casePackDisabled: false,
//             addressRow: [],
//             showSwitchModes: 'none',
//             declaredValue: '',
//             internationalITNNumber: '',
//             internationalPackageCount: '',
//             internationalPackageWeight: '',
//             internationalTotalCustomValue: '',
//             mikeModal: false,
//             panelDisplay: 'none',
//             packUserId: '',
//             packWorkstation: '',
//             addressValidation: false,
//             classes: this.classes,
//             confirmShipmentModal: false,
//             heightModal: false,
//             labelModal: false,
//             addressValidationModal: false,
//             address1Modal: false,
//             invalidAddressModal: false,
//             exceptionHandleModal: false,
//             addressValidationBuildingType: '',
//             inputDisabled: false,
//             internationalShipButtonDisabled: true,
//             shipButtonDisabled: true,
//             shipButtonClass: 'ScanDataButtonDisabled',
//             anchorEl: null,
//             trackingNumber: '',
//             packageNotFound: false,
//             pickTicket: '',
//             previousPickTicket: '',
//             selectedPickTicket: '',
//             pickTicketList: [],
//             internationalPickTicket: '',
//             ADUserName: document.cookie,
//             trackingInfo: ''
//         };

//         if (this.props.mode === 'manual') {
//             this.state.storeNumberFocus = true;
//             this.state.pickTicketFocus = false;
//             this.state.internationalPickTicketFocus = false;

//         }
//         else if (this.props.mode === 'auto') {
//             this.state.storeNumberFocus = false;
//             this.state.internationalPickTicketFocus = false;
//             this.state.pickTicketFocus = true;
//         }
//         else if (this.props.mode === 'international') {
//             this.state.storeNumberFocus = false;
//             this.state.internationalPickTicketFocus = true;
//             this.state.pickTicketFocus = false;
//         }


//         this.handleGetAllShipMethod();
//     }

//     handleGetTracking = (trackingNumber) => {
//         // API.getTracking(trackingNumber)
//         //     .then(res => {
//         //         this.setState({ trackingInfo: res.data });
//         //     });
//     };

//     handleGetAllShipMethod = () => {
//         // console.log(this.state);
//         API.getAllShipMethods()
//             .then(result => {
//                 if (result.status !== 200) {
//                     console.log("An error occurred: ", result.status);
//                     return;
//                 }
//                 for (const data of result.data) {
//                     data.disabledShipMethod = false;
//                 }

//                 let ShipMethodList = result.data;
//                 let tempList = [
//                     {
//                         value: 'UPS',
//                         logo: './UPSLogo.jpg',
//                         list: [],
//                     },
//                     {
//                         value: 'FEDEX',
//                         logo: './FedExLogo.png',
//                         list: [],
//                     },
//                     {
//                         value: 'USPS',
//                         logo: './USPSLogo.png',
//                         list: [],
//                     },
//                 ];

//                 for (const ShipMethod of ShipMethodList) {
//                     if (ShipMethod["carrierId"] === "UPS") {
//                         tempList[0].list.push(ShipMethod);
//                     }
//                     if (ShipMethod["carrierId"] === "FEDEX") {
//                         tempList[1].list.push(ShipMethod);
//                     }
//                     if (ShipMethod["carrierId"] === "USPS") {
//                         tempList[2].list.push(ShipMethod);
//                     }
//                 }

//                 this.setState({
//                     carrierList: tempList,
//                     storeNumberFocus: false,
//                     pickTicketFocus: false,
//                     internationalPickTicketFocus: false,
//                 }, () => {
//                     // console.log(this.state.storeNumberFocus);
//                 }); //Shermdog was here, Mike sits there 

//                 if (this.props.location.state.address != null) {
//                     // if (this.props.location.state.address[0] != null) {
//                     // console.log(this.props.location.state.address);
//                     this.setState({
//                         storeNumber: this.props.location.state.address[0] || '',
//                         companyName: this.props.location.state.address[2] || '',
//                         selectedShipVia: this.props.location.state.address[1] || '',
//                         // firstName: this.props.location.state.address[6] || '',
//                         // lastName: this.props.location.state.address[7] || '',
//                         // streetAddress: this.props.location.state.address[9] || '',
//                         individualName: this.props.location.state.address[3] || '',
//                         streetAddress: this.props.location.state.address[4] || '',
//                         address1: this.props.location.state.address[5] || '',
//                         city: this.props.location.state.address[6] || '',
//                         state: this.props.location.state.address[7] || '',
//                         zipCode: this.props.location.state.address[8] || '',
//                         country: this.props.location.state.address[9] || '',
//                         phoneNumber: this.props.location.state.address[10] || '',
//                         emailAddress: this.props.location.state.address[11] || '',
//                         casePackDisabled: true,
//                     }, () => {
//                         this.handleShipButtonActivation();
//                     });
//                 }
//             })
//             .catch(err => {
//                 console.log("An error occurred: ", err.message);
//             });
//     };

//     getCityStateByZip = (event) => {
//         event.preventDefault();

//         API.getCityStateByZip({ zipcode: event.target.value })
//             .then(res => {
//                 this.setState(
//                     {
//                         city: res.data.city,
//                         state: res.data.state
//                     }
//                 );
//             })
//             .catch(err => console.log(err));
//     };

//     handleShipDateChange = date => {
//         this.setState({ shipDate: date }
//             //     , () => {
//             //     this.handleRateShop();
//             // }
//         );
//     };

//     handleDeliveredByDateChange = date => {
//         this.setState({ dateExpectedDelivery: date }
//             //     , () => {
//             //     this.handleRateShop();
//             // }
//         );
//     };

//     updateDeliverByDate = (inp) => {
//         this.setState({
//             dateExpectedDelivery: inp
//         });
//     };

//     formatDate(date) {
//         let d = new Date(date),
//             month = '' + (d.getMonth() + 1),
//             day = '' + d.getDate(),
//             year = d.getFullYear();

//         if (month.length < 2) month = '0' + month;
//         if (day.length < 2) day = '0' + day;

//         return [year, month, day].join('-');
//     };

    
//     handleInputChange = (event) => {
//         // console.log(this.state.storeNumberFocus);
//         event.preventDefault();
//         if (event.target.name === 'internationalTotalCustomValue' || event.target.name === 'declaredValue') {
//             let temp = '';
//             // if (event.target.value.length > 1) {
//             //     temp = event.target.value.slice(1, event.target.value.length);
//             // }
//             this.setState({ [event.target.name]: event.target.value }, () => {
//                 let signatureConfirm = false;
//                 let int = parseInt(this.state.declaredValue);
//                 if (int >= 500) {

//                     let multiTemp = this.state.multi;
//                     if (multiTemp !== null) {
//                         for (const shipOption of this.state.multi) {
//                             if (shipOption.value === '<SIGNATURE_CONFIRMATION/>') {
//                                 signatureConfirm = true;
//                             }
//                         }
//                         if (signatureConfirm === false) {
//                             multiTemp.push({ value: '<SIGNATURE_CONFIRMATION/>', label: '<SIGNATURE_CONFIRMATION/>' });
//                             this.handleFilterShipMethod(multiTemp);
//                             this.props.handleMessages(`Due to Declared Value >= $500, Signature Confirmation (DSR) is Required. DSR will be automatically applied to this shipment.`);
//                         }
//                     }
//                     else if (multiTemp === null) {
//                         this.handleFilterShipMethod([{ value: '<SIGNATURE_CONFIRMATION/>', label: '<SIGNATURE_CONFIRMATION/>' }]);
//                         this.props.handleMessages(`Due to Declared Value >= $500, Signature Confirmation (DSR) is Required. DSR will be automatically applied to this shipment.`);
//                     }

//                 }
//                 else if (int < 500) {

//                     this.handleRemoveSignatureConfirm();
//                 }
//                 this.handleInternationalShipButtonActivation();
//             });
//         }
//         else {
//             this.setState({
//                 [event.target.name]: event.target.value,
//                 casePackDisabled: true,
//             }, () => {
//                 // if (this.state.individualName !== "" && this.state.streetAddress !== "" && this.state.zipCode !== ""
//                 //     && this.state.orderNumber !== "" && this.state.shipDate !== "" && this.state.weight !== ""
//                 //     && this.state.length !== "" && this.state.width !== "" && this.state.height !== "") {
//                 //     // this.handleRateShop();
//                 // }
//                 if (this.state.storeNumber === "" && this.state.companyName === "" && this.state.individualName === ""
//                     && this.state.streetAddress === "" && this.state.address1 === "" && this.state.phoneNumber === ""
//                     && this.state.zipCode === "" && this.state.state === "" && this.state.city === "") {
//                     this.setState({ casePackDisabled: false });
//                 }
//                 this.handleShipButtonActivation();
//                 this.handleInternationalShipButtonActivation();
//             });
//         }
//         // console.log(this.state);

//     };

//     handleClearForms = (event) => {
//         if (this.props.location.state != null) {
//             this.props.location.state = null;

//             browserHistory.replace({
//                 pathname: '/',
//                 state: {}
//             });
//         }


//         if (this.props.mode === 'manual') {
//             this.setState({
//                 storeNumberFocus: true,
//                 pickTicketFocus: false,
//                 internationalPickTicketFocus: false,
//             }, () => {
//                 console.log(this.props.mode, this.state.storeNumberFocus);
//             });
//         }
//         else if (this.props.mode === 'auto') {
//             this.setState({
//                 storeNumberFocus: false,
//                 internationalPickTicketFocus: false,
//                 pickTicketFocus: true,
//             }, () => {
//                 console.log(this.props.mode, this.state.pickTicketFocus);
//             });
//         }
//         else if (this.props.mode === 'international') {
//             this.setState({
//                 storeNumberFocus: false,
//                 internationalPickTicketFocus: true,
//                 pickTicketFocus: false,
//             }, () => {
//                 console.log(this.props.mode, this.state.internationalPickTicketFocus);
//             });
//         }
//         if (this.props.overrideMode === false) {
//             this.setState({
//                 shipMethodId: 'GROUND',
//             });
//         }
//         this.setState({
//             declaredValue: '',
//             casePackDisabled: false,
//             contactDisabled: false,
//             internationalITNNumber: '',
//             internationalPackageCount: '',
//             internationalPackageWeight: '',
//             internationalTotalCustomValue: '',
//             confirmShipmentModal: false,
//             addressRow: [],
//             storeNumber: '',
//             streetAddress: '',
//             address1: '',
//             city: '',
//             companyName: '',
//             country: 'USA',
//             deliverToAddressId: '',
//             emailAddress: '',
//             faxNumber: '',
//             individualName: '',
//             // firstName: '',
//             // lastName: '',
//             phoneNumber: '',
//             state: '',
//             zipCode: '',
//             dateExpectedDelivery: null,
//             dateScanned: '',
//             packUserId: '',
//             packWorkstation: '',
//             shipDate: new Date(),
//             shippingOptions: [],
//             ShipOptionXML: '',
//             multi: null,
//             referenceNumber: '',
//             pickTicket: '',
//             pickTicketList: [],
//             selectedPickTicket: '',
//             shipUnitId: '',
//             selectedShipVia: '20',
//             length: '',
//             width: '',
//             height: '',
//             weight: '',
//             carrierId: '',
//             shipVia: '',
//             cartonNumber: '',
//             orderNumber: '',
//             trackingNumber: '',
//             status: '',
//             inputDisabled: false,
//             shipButtonDisabled: true,
//             LabelURL: '',
//             labelBufURL: '',
//             labelErrorNumber: '',
//             labelErrorMessage: '',
//             // carrierList: [],
//         }, () => {
//             // console.log(this.props);
//             this.handleGetAllShipMethod();
//         });
//     }

//     handleDuplicateCasePackModalClose = (event) => {
//         this.setState({ duplicateCasePackModal: false });
//     };

//     handleHeightModalClose = (event) => {
//         this.setState({ heightModal: false });
//     };

//     handleHeightModalOpen = (event) => {
//         event.preventDefault();
//         this.setState({ heightModal: !this.state.heightModal });
//     };

//     handleLabelModalClose = (event) => {
//         this.setState({ labelModal: false });
//     };

//     handleLabelModalOpen = () => {
//         this.setState({ labelModal: !this.state.labelModal });
//     };

//     // handleAddressValidationModalOpen = (event) => {
//     //     this.setState({ addressValidationModal: !this.state.addressValidationModal });
//     // };

//     handleSetShipVia = (event) => {
//         for (const carrier of this.state.carrierList) {
//             if (carrier.value === 'FEDEX') {
//                 console.log(carrier.list);
//                 for (const shipMethodList of carrier.list) {
//                     if (event.target.value === shipMethodList.shipMethodId) {
//                         this.setState({
//                             shipMethodId: event.target.value,
//                             selectedShipVia: shipMethodList.shipVia,
//                         }, () => {

//                         });
//                     }
//                 }
//             }
//         }
//     };

//     handleShipButtonActivation = () => {
//         if (this.state.storeNumber !== ""
//             && this.state.streetAddress !== ""
//             && this.state.zipCode !== ""
//             // && this.state.orderNumber !== ""
//             && this.state.shipDate !== ""
//             // && this.state.weight !== ""
//             // && this.state.length !== ""
//             // && this.state.width !== ""
//             // && this.state.height !== ""
//             // && this.state.country !== ""
//             && this.state.selectedShipVia !== null) {
//             this.setState({ shipButtonDisabled: false, shipButtonClass: 'ScanDataButton' });
//         }
//         else {
//             // console.log(this.state);
//             this.setState({
//                 shipButtonDisabled: true, shipButtonClass: 'ScanDataButtonDisabled',
//                 // storeNumberFocus: false 
//             });
//         }
//     };

//     handleInternationalShipButtonActivation = () => {
//         if (this.state.internationalITNNumber !== ""
//             && this.state.internationalPackageCount !== ""
//             && this.state.internationalPackageWeight !== ""
//             && this.state.internationalTotalCustomValue !== ""
//             // && this.state.country !== ""
//             && this.state.selectedShipVia !== null) {
//             this.setState({ internationalShipButtonDisabled: false });
//         }
//         else {
//             this.setState({
//                 internationalShipButtonDisabled: true,
//                 // storeNumberFocus: false 
//             });
//         }
//     };

//     //PREVIEW OFF
//     handleOnClick = (e, ordernumber) => {
//         let { length, width, height, weight } = this.state;
//         let ShipDate = this.formatDate(this.state.shipDate);
//         // let DateExpectedDelivery = this.formatDate(this.state.dateExpectedDelivery);
//         let ShipOptionXML = (this.state.ShipOptionXML).replace(', ', '');
//         let OrderNumber = this.state.orderNumber;
//         let CartonNumber = this.state.pickTicket;
//         let DistributionCenter = this.state.distributionCenter;
//         let Weight = 20;
//         if (weight !== '') {
//             Weight = weight;
//         }
//         // let Weight = this.state.weight;
//         // if (Weight === '') {
//         //     Weight = '5';
//         // }
//         let Length = 14;
//         if (length !== '') {
//             Length = length;
//         }
//         let Width = 14;
//         if (width !== '') {
//             Width = width;
//         }
//         let Height = 14;
//         if (height !== '') {
//             Height = height;
//         }
//         // console.log(ShipOptionXML);
//         let CompanyName = this.state.companyName;
//         let IndividualName = this.state.individualName;
//         let DeclaredValue = this.state.declaredValue;
//         if (parseInt(DeclaredValue) > 500) {
//             ShipOptionXML = ShipOptionXML.replace('<SIGNATURE_CONFIRMATION/>', '');
//         }
//         let ShipVia = this.state.selectedShipVia;
//         let ReferenceNumber = this.state.referenceNumber;
//         let Division = '';
//         if (this.state.pickTicket !== '') {
//             Division = this.state.pickTicket.substring(4, 6);
//         }
//         // let LabelType = 'PDF';
//         let StoreNumber = this.state.storeNumber;
//         let createShipUnitJSON =
//         {
//             "CartonNumber": CartonNumber,
//             "ShipDate": ShipDate,
//             "ShipOptionXML": ShipOptionXML,
//             "OrderNumber": OrderNumber,
//             "DistributionCenter": DistributionCenter,
//             "Weight": Weight,
//             "Length": Length,
//             "Width": Width,
//             "Height": Height,
//             "Division": Division,
//             "ShipVia": ShipVia,
//             "DeclaredValue": DeclaredValue,
//             "AddressCode": StoreNumber,
//             "ReferenceNoteType": "REFERENCE",
//             "ReferenceNote": ReferenceNumber,
//             "LabelType": "Buffer"
//         }
//         API.createShipUnit(createShipUnitJSON)
//             .then(result => {
//                 console.log(result);
//                 let LabelURL = '';
//                 let TotalCharge = '';
//                 let LabelErrorNumber = '';
//                 let LabelErrorMessage = '';
//                 let SUCCESS = result.data.result;
//                 let ERROR = result.data;
//                 if (SUCCESS !== undefined) {
//                     // LabelURL = SUCCESS.LABEL.LabelURL || '';
//                     TotalCharge = SUCCESS.TotalCharge || '';
//                     this.setState({
//                         labelBufURL: SUCCESS.value,
//                         previousLabelBufURL: SUCCESS.value,
//                     }, () => {
//                         // this.handleLabelModalOpen();
//                         let labelData = this.state.labelBufURL;
//                         // this.setState({ labelData: this.props.LabelURL });
//                         // console.log(labelData);
//                         let that = this;
//                         const ws = new WebSocket("ws://localhost:8088/LighthousePrinterComm");

//                         ws.binaryType = "arraybuffer";

//                         ws.onopen = function () {
//                             console.log("Connection Opened!!!");

//                             try {
//                                 ws.send(JSON.stringify(labelData));
//                             } catch {
//                                 console.log("An error occurred.");
//                             }
//                         };

//                         ws.onmessage = function (evt) {
//                             console.log("Label Printed: ", evt.returnValue);

//                             if (evt.returnValue === true && ws.readyState === 1) {
//                                 ws.close();
//                             }
//                         };

//                         ws.onclose = function () {
//                             that.props.handleMessages(`${CartonNumber} label data successfully sent to printer`);
//                             console.log("Connection is Closed...");
//                         };
//                         this.handleClearForms();
//                     });
//                 }
//                 else if (ERROR !== undefined) {
//                     if (ERROR.includes("Cannot insert duplicate key row in object 'dbo.SHIP_UNITS") === true) {
//                         if (this.props.mode === 'manual') {
//                             this.setState({
//                                 duplicateCasePackModal: true,
//                             });
//                         }
//                         else if (this.props.mode === 'auto') {
//                             let labelData = '';
//                             let requestBufferJSON =
//                             {
//                                 "CartonNumber": this.state.cartonNumber,
//                                 "DistriButionCenter": this.state.distributionCenter,
//                                 "LabelOutputFileType": 'Buffer',
//                             }
//                             API.getShipUnitLabel(requestBufferJSON)
//                                 .then(result => {
//                                     labelData = result.data.value;
//                                     console.log(labelData);
//                                     let that = this;
//                                     const ws = new WebSocket("ws://localhost:8088/LighthousePrinterComm");

//                                     ws.binaryType = "arraybuffer";

//                                     ws.onopen = function () {
//                                         console.log("Connection Opened!!!");

//                                         try {
//                                             ws.send(JSON.stringify(labelData));
//                                         } catch {
//                                             console.log("An error occurred.");
//                                         }
//                                     };

//                                     ws.onmessage = function (evt) {
//                                         console.log("Label Printed: ", evt.returnValue);

//                                         if (evt.returnValue === true && ws.readyState === 1) {
//                                             ws.close();
//                                         }
//                                     };

//                                     ws.onclose = function () {
//                                         console.log("Connection is Closed...");
//                                         that.handleClearForms();
//                                     };
//                                 })
//                         }
//                     }
//                     else {
//                         LabelErrorNumber = ERROR.match(/<Number>(.*?)</)[1] || '';
//                         // console.log(LabelErrorNumber);
//                         LabelErrorMessage = ERROR.match(/<Description>(.*?)</)[1] || '';
//                         this.setState(
//                             {
//                                 labelErrorNumber: LabelErrorNumber,
//                                 labelErrorMessage: LabelErrorMessage
//                             }, () => {
//                                 this.handleLabelModalOpen();
//                             });
//                     }
//                 }
//             })
//             .catch(err => console.log("Error Occurred: ", err));
//     };
//     //WORK IN PROGRESS
//     handleShipShipment = () => {
//         let ShipDate = this.formatDate(this.state.shipDate);
//         let ShipOptionXML = (this.state.ShipOptionXML).replace(', ', '');
//         let PickTicketList = '';
//         for (const pickTicket of this.state.pickTicketList) {
//             if (PickTicketList === '') {
//                 PickTicketList = `${pickTicket}`;
//             }
//             else {
//                 PickTicketList = `${PickTicketList}, ${pickTicket}`;
//             }
//         }
//         let today = new Date();
//         let timeStamp = ('0' + (today.getHours())).slice(-2) + ('0' + today.getMinutes()).slice(-2);
//         let ShipmentID = `${this.state.pickTicketList[0]}${timeStamp}`;
//         let OrderNumber = this.state.pickTicketList[0].substring(10, 16);
//         let DistributionCenter = this.state.distributionCenter;
//         let Length = 5;
//         let Width = 5;
//         let Height = 5;
//         let InternationalTotalCustomValue = this.state.internationalTotalCustomValue;
//         let InternationalPackageCount = this.state.internationalPackageCount;
//         let UnitPrice = InternationalTotalCustomValue / InternationalPackageCount;
//         let InternationalITNNumber = this.state.internationalITNNumber;
//         let InternationalPackageWeight = this.state.internationalPackageWeight;
//         if (parseInt(InternationalTotalCustomValue) > 500) {
//             ShipOptionXML = ShipOptionXML.replace('<SIGNATURE_CONFIRMATION/>', '');
//         }
//         let ShipVia = this.state.selectedShipVia;
//         let ReferenceNumber = this.state.referenceNumber;
//         let StoreNumber = this.state.storeNumber;
//         let ShipUnits = [];
//         // x20190501191002
//         //Use regex here to check the first 4 digits for year, the next 2 for month, and the next 2 for day, last 6 are randoms.
//         let tempYear = InternationalITNNumber.substring(1, 5);
//         let tempMonth = InternationalITNNumber.substring(5, 7);
//         let tempDay = InternationalITNNumber.substring(7, 9);
//         // console.log(new Date(`${tempYear}-${tempMonth}-${tempDay}`));
//         let tempITNDate = new Date(`${tempYear}-${tempMonth}-${tempDay}`);
//         let end = new Date();
//         let start = new Date();
//         start = start.setDate(start.getDate() - 60);
//         if (InternationalITNNumber.length !== 15
//             || !(/[a-zA-Z]/.test(InternationalITNNumber.substring(0, 1)))
//             || tempITNDate === 'Invalid Date' || !(dates.inRange(tempITNDate, start, end))) {
//             this.props.handleErrorMessages('Invalid ITN number');
//         }
//         else if (!(/^\d+$/.test(InternationalPackageCount))) {
//             this.props.handleErrorMessages('Invalid number of labels required');
//         }
//         else if (!(/^\d+$/.test(InternationalPackageWeight))) {
//             this.props.handleErrorMessages('Invalid package weight');
//         }
//         else if (!(/^\d+$/.test(InternationalTotalCustomValue))) {
//             this.props.handleErrorMessages('Invalid total custom value');
//         }
//         else {
//             for (let i = 0; i < parseInt(InternationalPackageCount); i++) {
//                 ShipUnits.push({
//                     "OrderNumber": OrderNumber,
//                     "Weight": InternationalPackageWeight,
//                     "Length": Length,
//                     "Width": Width,
//                     "Height": Height,
//                     "SED_FTRExemptionNumber": `AES ${InternationalITNNumber}`,
//                     "ItemDescription": "Electronic",
//                     "CI_UnitPrice": UnitPrice,
//                     "ReferenceNote": ReferenceNumber
//                 });
//             }
//             let createShipmentJSON =
//             {
//                 "DistributionCenter": DistributionCenter,
//                 "ShipVia": "FI102",
//                 "ShipOptionXML": ShipOptionXML,
//                 "ShipmentID": ShipmentID,
//                 "AddressCode": StoreNumber,
//                 "LabelOutputFileType": "Buffer",
//                 "CartonNumberList": PickTicketList,
//                 "ShipUnits": ShipUnits,
//             }
//             console.log(createShipmentJSON);
//             // console.log(typeof (InternationalITNNumber), typeof (InternationalPackageWeight), typeof (InternationalPackageCount), typeof (InternationalTotalCustomValue));
//             API.createPrintShipment(createShipmentJSON)
//                 .then(result => {
//                     console.log(result.data);
//                     if (Array.isArray(result.data)) {
//                         let labelData = '';
//                         for (const data of result.data) {
//                             labelData = `${labelData}${data}`;
//                         }
//                         let that = this;
//                         const ws = new WebSocket("ws://localhost:8088/LighthousePrinterComm");

//                         ws.binaryType = "arraybuffer";

//                         ws.onopen = function () {
//                             console.log("Connection Opened!!!");

//                             try {
//                                 ws.send(JSON.stringify(labelData));
//                             } catch {
//                                 console.log("An error occurred.");
//                             }
//                         };

//                         ws.onmessage = function (evt) {
//                             console.log("Label Printed: ", evt.returnValue);

//                             if (evt.returnValue === true && ws.readyState === 1) {
//                                 ws.close();
//                             }
//                         };

//                         ws.onclose = function () {
//                             that.props.handleMessages(`${InternationalPackageCount} Labels for MPS #${that.state.pickTicketList[0]} successfully sent to your printer`);
//                             console.log("Connection is Closed...");
//                             that.handleClearForms();
//                         };
//                     }
//                     else if (result.data.search('<ERROR>') !== -1) {
//                         return alert("here");
//                     }

//                 })
//                 .catch(err => console.log("Error Occurred: ", err));
//         }
//     }

//     handleAddressSearch = (suggestion) => {
//         let storeFound = false;
//         this.setState({ storeNumber: suggestion }, () => {
//             let addressID = this.state.storeNumber;
//             if (addressID.length === 4) {
//                 for (const row of this.props.rows) {
//                     if (addressID === row[1] && row[8] !== 'PR') {
//                         if (this.props.overrideMode === false) {
//                             this.setState({ selectedShipVia: row[2] || '', }, () => {
//                                 for (const carrier of this.state.carrierList) {
//                                     if (carrier.value === 'FEDEX') {
//                                         for (const shipMethodList of carrier.list) {
//                                             if (this.state.selectedShipVia === shipMethodList.shipVia) {
//                                                 this.setState({
//                                                     shipMethodId: shipMethodList.shipMethodId,
//                                                 }, () => {

//                                                 });
//                                             }
//                                         }
//                                     }
//                                 }
//                             });
//                         }
//                         this.setState({
//                             addressRow: row,
//                             storeNumber: addressID,
//                             companyName: row[3] || 'Walmart',
//                             individualName: row[4] || 'Walmart',
//                             streetAddress: row[5] || '',
//                             address1: row[6] || '',
//                             city: row[7] || '',
//                             state: row[8] || '',
//                             zipCode: row[9] || '',
//                             country: row[10] || '',
//                             phoneNumber: row[11] || '9999999999',
//                             storeNumberFocus: false,
//                             casePackDisabled: true,
//                             inputDisabled: true,
//                         }, () => {
//                             this.handleShipButtonActivation();
//                         });
//                         storeFound = true;
//                         break;
//                     }
//                     else if (addressID === row[1] && row[8] === 'PR') {
//                         this.props.handleErrorMessages(`${addressID} is a Pueto Rico store, please use international mode`);
//                         storeFound = true;
//                         this.handleClearForms();
//                         break;
//                     }
//                 }
//                 if (storeFound === false) {
//                     this.props.handleErrorMessages(`Store #${addressID} does not exist in the address book`);
//                 }
//             }
//             else {
//                 this.setState({
//                     storeNumber: '',
//                     companyName: '',
//                     individualName: '',
//                     streetAddress: '',
//                     address1: '',
//                     city: '',
//                     state: '',
//                     zipCode: '',
//                     country: '',
//                     phoneNumber: '',
//                     casePackDisabled: false,
//                 });
//             }
//         });

//     };

//     handleAutoWeight = (tempWeight) => {
//         this.setState({
//             weight: tempWeight,
//         })
//     };

//     handleShipmentAutoWeight = () => {
//         console.log("Connected...");
//         const ws = new WebSocket("ws://localhost:8088/LighthousePrinterComm");
//         const that = this;
//         let tempWeight = 0;
//         ws.binaryType = "arraybuffer";

//         ws.onopen = function () {
//             console.log("Connection is Opened...");
//             let result = ws.send("");
//             console.log('Result: ', result);
//         };

//         ws.onmessage = function (evt) {
//             tempWeight = parseFloat(arrayBufferToString(evt.data)).toFixed(2);

//             console.log("Got Weight: ", arrayBufferToString(evt.data));

//             if (evt.returnValue === true && ws.readyState === 1) {
//                 that.setState({
//                     internationalPackageWeight: tempWeight
//                 });
//                 ws.close();
//             }
//         };

//         ws.onclose = function () {
//             console.log("Connection is Closed...");
//         };

//         function arrayBufferToString(buffer) {
//             var arr = new Uint8Array(buffer);
//             var str = String.fromCharCode.apply(String, arr);

//             return decodeURIComponent(escape(str));
//         }
//     };

//     handleHideSwitchModes = () => {
//         // console.log("handleHideSwitchMode");
//         this.setState({ showSwitchModes: 'none' });
//     };

//     handleShowSwitchModes = () => {
//         // console.log("handleShowSwitchModes");
//         this.setState({ showSwitchModes: 'block' });
//         document.addEventListener('click', this.handleHideSwitchModes);
//         // document.addEventListener('onMouseOut', this.handleHideSwitchModes);
//     };

//     handleSwitchMode = (event, mode) => {
//         // console.log(event, mode);
//         this.setState({ showSwitchModes: 'none', previousLabelBufURL: '' }, () => {
//             // console.log(this.state.internationalPickTicketFocus, this.state.pickTicketFocus, this.state.storeNumberFocus);
//         });

//         let { pickTicketList } = this.state;

//         if (pickTicketList.length === 0) {
//             this.props.handleSwitchMode(mode);
//         }
//         else if (pickTicketList.length !== 0) {
//             this.setState({ mikeModal: true });
//         }
//     };

//     componentDidMount = () => {
//         let fileName = 'TooManyCooks(short)-Wikipedia.html';
//         fetch('F:/Downloads' + fileName).then(
//             response => {
//                 this.setState({
//                     userGuideHTML: response
//                 });
//             }, err => {
//                 //handle your error here
//             }
//         );

//         // this.setState({
//         //     storeNumberFocus: false,
//         //     pickTicketFocus: false,
//         //     internationalPickTicketFocus: false,
//         // });
//     }

//     componentDidUpdate = (prevProps, prevState) => {
//         if (prevState !== this.state) {
//             // this.setState({
//             //     storeNumberFocus: false,
//             //     pickTicketFocus: false,
//             //     internationalPickTicketFocus: false,
//             // });
//         }

//         if (prevProps.mode !== this.props.mode) {
//             this.handleClearForms();
//         }
//     };

//     handleInitiateShipment = () => {
//         this.setState({ internationalPickTicketFocus: true });
//     }

//     handlePickTicketKeyPress = () => {
//         if (this.state.pickTicket.length !== 16) {
//             this.props.handleErrorMessages(`This is not a valid barcode, please scan a barcode with 16 digits`);
//             return;
//         }
//         else {
//             this.props.handleMessages(`Label printing!!!`);
//             this.handleOnClick();
//         }
//     };

//     getShipUnitInfoByPickTicket = (pickTicket) => {
//         let { pickTicketList } = this.state;
//         this.setState({
//             pickTicket: pickTicket,
//             previousPickTicket: pickTicket,
//         });
//         if (pickTicket.length !== 16) {
//             this.setState({
//                 shipButtonDisabled: true, shipButtonClass: 'ScanDataButtonDisabled',
//                 // storeNumberFocus: false 
//             });
//         }
//         if (pickTicket.length === 16) {
//             var isnum = /^\d+$/.test(pickTicket);
//             if (isnum === false) {
//                 this.props.handleErrorMessages(`${pickTicket} is not a valid barcode`);
//                 return;
//             }

//             if (pickTicket.substring(6, 10) !== '6003') {
//                 this.props.handleErrorMessages(`This is not a valid barcode [DC set to ${pickTicket.substring(6, 10)}]`);
//                 return;
//             }

//             let storeFound = false;
//             // console.log(this.props.rows);
//             for (const row of this.props.rows) {
//                 // console.log(pickTicket.substring(0, 4));
//                 if (pickTicket.substring(0, 4) === row[1]) {
//                     // console.log(pickTicket.substring(0, 4));
//                     // console.log(row[1]);
//                     if (this.props.overrideMode === false) {
//                         this.setState({ selectedShipVia: row[2] }, () => {
//                             for (const carrier of this.state.carrierList) {
//                                 if (carrier.value === 'FEDEX') {
//                                     // console.log(carrier.list);
//                                     for (const shipMethodList of carrier.list) {
//                                         // console.log(shipMethodList.shipVia);
//                                         // console.log(this.state.selectedShipVia);
//                                         if (this.state.selectedShipVia === shipMethodList.shipVia) {
//                                             this.setState({
//                                                 shipMethodId: shipMethodList.shipMethodId,
//                                             }, () => {

//                                             });
//                                         }
//                                     }
//                                 }
//                             }
//                         });
//                     }

//                     this.setState({
//                         addressRow: row,
//                         companyName: row[3] || 'Walmart',
//                         individualName: row[4] || 'Walmart',
//                         streetAddress: row[5] || '',
//                         address1: row[6] || '',
//                         city: row[7] || '',
//                         state: row[8] || '',
//                         zipCode: row[9] || '',
//                         country: row[10] || '',
//                         phoneNumber: row[11] || '9999999999',
//                         inputDisabled: true,
//                         contactDisabled: true,
//                     }, () => {
//                         // console.log(this.state);
//                         this.handleShipButtonActivation();
//                     });

//                     storeFound = true;
//                     break;
//                 }
//             }

//             if (storeFound === false) {
//                 this.props.handleErrorMessages(`Store #${pickTicket.substring(0, 4)} does not exist in the address book`);
//             }
//             if (storeFound === true) {
//                 this.setState({
//                     storeNumber: pickTicket.substring(0, 4),
//                     distributionCenter: pickTicket.substring(6, 10),
//                     orderNumber: pickTicket.substring(10, 16),
//                     cartonNumber: pickTicket,
//                     referenceNumber: pickTicketList[0] || pickTicket,
//                 });
//             }
//         }
//         else {
//             this.setState({
//                 shipButtonDisabled: true, shipButtonClass: 'ScanDataButtonDisabled',
//                 // storeNumberFocus: false 
//             });
//         }
//     }

//     arrayRemove(arr, value) {
//         return arr.filter(function (ele) {
//             return ele !== value;
//         });

//     }

//     handleAddPickTicket = () => {
//         this.setState({ internationalPickTicketFocus: true });
//         // console.log(pickTicket);
//         // this.setState({ pickTicket: pickTicket });
//         let { pickTicket, pickTicketList } = this.state;
//         let { handleErrorMessages, handleMessages } = this.props;
//         let temp = pickTicketList;
//         if (pickTicket.length !== 16) {
//             handleErrorMessages(`Invalid pack label, please scan a valid one to proceed!`);
//             return;
//         }
//         else if (pickTicket.length === 16) {
//             if (pickTicket.substring(6, 10) !== '6003') {
//                 handleErrorMessages(`This is not a valid barcode [DC set to ${pickTicket.substring(6, 10)}]`);
//                 return;
//             }

//             if (temp.length > 0 && pickTicket.substring(0, 4) !== temp[0].substring(0, 4)) {
//                 handleErrorMessages(`Scanned store ID does not match store ID set for shipment`);
//                 return;
//             }
//             for (const pickTicketCompare of temp) {
//                 if (pickTicketCompare === pickTicket) {
//                     handleErrorMessages(`This pack label is already scanned, please scan another one.`);
//                     return;
//                 }
//             }
//             if (temp.length === 0) {
//                 handleMessages(`Store set to ${pickTicket.substring(0, 4)}`);
//                 let storeFound = false;

//                 for (const row of this.props.rows) {
//                     if (pickTicket.substring(0, 4) === row[1]) {
//                         // console.log(pickTicket.substring(0, 4));
//                         if (this.props.overrideMode === false) {
//                             this.setState({ selectedShipVia: row[2] });
//                         }
//                         if (row[8] === 'PR') {
//                             this.setState({
//                                 companyName: row[3] || 'Walmart',
//                                 individualName: row[4] || 'Walmart',
//                                 streetAddress: row[5] || '',
//                                 address1: row[6] || '',
//                                 city: row[7] || '',
//                                 state: row[8] || '',
//                                 zipCode: row[9] || '',
//                                 country: row[10] || '',
//                                 phoneNumber: row[11] || '9999999999',
//                                 panelDisplay: 'block',
//                                 storeNumber: pickTicket.substring(0, 4),
//                                 distributionCenter: pickTicket.substring(6, 10),
//                                 orderNumber: pickTicket.substring(10, 16),
//                                 cartonNumber: pickTicket,
//                                 referenceNumber: pickTicketList[0] || pickTicket,
//                             });
//                             storeFound = true;
//                             break;
//                         }
//                         else if (row[8] !== 'PR') {
//                             handleErrorMessages(`Scanned barcode is for a domestic store and cannot be processed within INT mode`);
//                             return;
//                         }
//                     }
//                 }

//                 if (storeFound === false) {
//                     handleErrorMessages(`Store #${pickTicket.substring(0, 4)} does not exist in the address book`);
//                     return;
//                 }
//             }

//             temp.push(pickTicket);
//             this.setState({
//                 pickTicketList: temp,
//                 selectedPickTicket: pickTicket,
//                 pickTicket: '',
//             });
//             // console.log(temp);
//         }
//     }

//     handleRemovePickTicket = value => () => {
//         let temp = this.state.pickTicketList;
//         if (temp.length !== 0) {
//             temp.splice(temp.indexOf(value), 1);
//             this.setState({
//                 pickTicketList: temp,
//                 selectedPickTicket: temp[temp.length - 1],
//                 pickTicket: (temp[temp.length - 1] || ''),
//             }, () => {
//                 if (this.state.pickTicketList.length !== 0) {
//                     this.setState({
//                         orderNumber: this.state.selectedPickTicket.substring(10, 16),
//                         referenceNumber: this.state.pickTicketList[0],
//                     });
//                 }
//                 else if (this.state.pickTicketList.length === 0) {
//                     this.handleClearForms();
//                 }
//             });
//         }
//         else if (this.state.pickTicketList.length === 0) {
//             this.setState({
//                 panelDisplay: 'none',
//             })
//         }
//     }

//     handleSelectPickTicket = (value) => {
//         this.setState({
//             selectedPickTicket: value,
//             // orderNumber: value.substring(10, 16),
//             // pickTicket: value,
//         }, () => {
//             // this.getShipUnitInfoByPickTicket(value);
//         });
//     };

//     handleCloseShipment = () => {
//         let { pickTicketList } = this.state;
//         if (pickTicketList.length === 0) {
//             this.props.handleErrorMessages('There are no packages in this shipment, please scan pack labels!');
//         }
//         else {
//             //Prompt confirm modal
//             this.setState({ confirmShipmentModal: true });
//         }
//     };

//     handleCloseConfirmShipmentModal = () => {
//         this.setState({ confirmShipmentModal: false });
//     }


//     handleRemoveSignatureConfirm = () => {
//         if (parseInt(this.state.declaredValue) < 500 && this.state.multi !== null) {
//             let multiTemp = this.state.multi;
//             // console.log(this.state.multi);
//             for (var i = 0; i < multiTemp.length; i++) {
//                 if (multiTemp[i].value === '<SIGNATURE_CONFIRMATION/>') {
//                     // console.log(multiTemp[i]);
//                     multiTemp.splice(i, 1);
//                     this.props.handleMessages(`Due to Declared Value < $500, Signature Confirmation (DSR) has been removed.`);
//                 }
//             }
//             this.handleFilterShipMethod(this.state.multi);
//         }
//     }

//     handleFilterShipMethod = (ShippingOptionList) => {
//         // console.log(ShippingOptionList);
//         let signatureConfirm = false;
//         this.setState({ multi: ShippingOptionList }, () => {
//             if (parseInt(this.state.declaredValue) >= 500) {
//                 console.log("here");
//                 for (const shipOption of this.state.multi) {
//                     if (shipOption.value === '<SIGNATURE_CONFIRMATION/>') {
//                         signatureConfirm = true;
//                     }
//                 }
//                 if (signatureConfirm === false) {
//                     // console.log("false");
//                     this.props.handleErrorMessages('Due to Declared Value >= $500, Signature Confirmation (DSR) is Required.');
//                     let multiTemp = this.state.multi;
//                     if (multiTemp !== null) {
//                         multiTemp.push({ value: '<SIGNATURE_CONFIRMATION/>', label: '<SIGNATURE_CONFIRMATION/>' });
//                         this.handleFilterShipMethod(multiTemp);
//                     }
//                     else if (multiTemp === null) {
//                         this.handleFilterShipMethod([{ value: '<SIGNATURE_CONFIRMATION/>', label: '<SIGNATURE_CONFIRMATION/>' }]);
//                     }
//                 }
//                 // else {
//                 //     console.log("true");
//                 // }
//             }


//             //update ShipOptionXML here
//             let temp = '';
//             // if (ShippingOptionList.length === 0
//             //     && this.state.firstName !== ""
//             //     && this.state.streetAddress !== ""
//             //     && this.state.zipCode !== ""
//             //     && this.state.orderNumber !== ""
//             //     && this.state.shipDate !== ""
//             //     && this.state.weight !== ""
//             //     && this.state.length !== ""
//             //     && this.state.width !== ""
//             //     && this.state.height !== "") {
//             //     this.handleRateShop();
//             // }
//             // else if (ShippingOptionList.length !== 0) {
//             if (ShippingOptionList.length !== 0) {
//                 for (const shipOption of ShippingOptionList) {
//                     // console.log(shipOption);
//                     if (temp !== '') {
//                         temp = temp + ', ' + shipOption.value;

//                         this.setState({ ShipOptionXML: temp }, () => {
//                             // API.getShipMethodsByOptions(this.state.ShipOptionXML)
//                             //     .then(result => {
//                             //         let shipOptionCompare = result.data;
//                             //         let shipViaCompared = this.state.carrierList;

//                             //         for (const carrier of shipViaCompared) {
//                             //             for (const shipVia of carrier) {
//                             //                 shipVia["disabledShipMethod"] = true;
//                             //             }
//                             //         }
//                             //         this.filterShipMethod(shipViaCompared, shipOptionCompare);
//                             //     })
//                             //     .catch(err => console.log("Error Occurred: ", err));
//                         });
//                     }
//                     else {
//                         temp = shipOption.value;

//                         this.setState({ ShipOptionXML: temp }, () => {
//                             // API.getShipMethodsByOptions(this.state.ShipOptionXML)
//                             //     .then(result => {
//                             //         let shipOptionCompare = result.data;
//                             //         let shipViaCompared = this.state.carrierList;

//                             //         for (var i = 0; i < shipViaCompared.length; i++) {
//                             //             for (var j = 0; j < shipViaCompared[i]["list"].length; j++) {
//                             //                 shipViaCompared[i]["list"][j]["disabledShipMethod"] = true;
//                             //             }
//                             //         }
//                             //         this.filterShipMethod(shipViaCompared, shipOptionCompare);
//                             //     })
//                             //     .catch(err => console.log("Error Occurred: ", err));
//                         });
//                     }
//                 }
//             }
//             else {
//                 this.setState({ ShipOptionXML: '' });
//             }

//         });


//         // }
//         // else {
//         //     this.handleGetAllShipMethod();
//         // }
//     };


//     handleCloseMikeModal = () => {
//         this.setState({ mikeModal: false });
//     }

//     handlePrintDuplicateLabel = () => {
//         let labelData = this.state.previousLabelBufURL;
//         let that = this;
//         // this.handleLabelModalOpen();
//         const ws = new WebSocket("ws://localhost:8088/LighthousePrinterComm");

//         ws.binaryType = "arraybuffer";

//         ws.onopen = function () {
//             console.log("Connection Opened!!!");

//             try {
//                 ws.send(JSON.stringify(labelData));
//             } catch {
//                 console.log("An error occurred.");
//             }
//         };

//         ws.onmessage = function (evt) {
//             console.log("Label Printed: ", evt.returnValue);

//             if (evt.returnValue === true && ws.readyState === 1) {
//                 ws.close();
//             }
//         };

//         ws.onclose = function () {
//             let { previousPickTicket } = that.state;
//             if (previousPickTicket === '') {
//                 that.props.handleMessages('Reprint of last shipping label successful');
//             }
//             else if (previousPickTicket !== '') {
//                 that.props.handleMessages(`Reprint of case pack label ${previousPickTicket} successful`);
//             }
//             console.log("Connection is Closed...");
//         };
//     }

//     handlePrintPreviousLabel = () => {
//         let labelData = this.state.previousLabelBufURL;
//         // console.log(labelData);
//         let that = this;
//         // this.handleLabelModalOpen();
//         const ws = new WebSocket("ws://localhost:8088/LighthousePrinterComm");

//         ws.binaryType = "arraybuffer";

//         ws.onopen = function () {
//             console.log("Connection Opened!!!");

//             try {
//                 ws.send(JSON.stringify(labelData));
//             } catch {
//                 console.log("An error occurred.");
//             }
//         };

//         ws.onmessage = function (evt) {
//             console.log("Label Printed: ", evt.returnValue);

//             if (evt.returnValue === true && ws.readyState === 1) {
//                 ws.close();
//             }
//         };

//         ws.onclose = function () {
//             let { previousPickTicket } = that.state;
//             if (previousPickTicket === '') {
//                 that.props.handleMessages('Reprint of last shipping label successful');
//             }
//             else if (previousPickTicket !== '') {
//                 that.props.handleMessages(`Reprint of case pack label ${previousPickTicket} successful`);
//             }
//             console.log("Connection is Closed...");
//         };
//     }

//     handleOnBlur = (highlightedIndex) => {
//         // console.log("handleOnBlur");
//         // console.log(highlightedIndex);
//         // if (this.state.storeNumber.length === 4) {
//         // console.log(this.state.storeNumber);
//         if (this.state.storeNumber.length === 4) {
//             // this.props.handleAddressSearch();
//         }
//     }

//     handleAddressSearchInputChange = (event) => {
//         // console.log("handleInputChange");
//         // if (event.target.value.length === 4) {
//         // console.log(event.target.value, event.key);
//         this.setState({ storeNumber: event.target.value }, () => {
//             // console.log(this.state.storeNumber);
//         });
//         // if (this.state.storeNumber.length === 4) {
//         //     this.handleAddressSearch();
//         // }
//     };

//     handleInput = item => {
//         // console.log("handleInput");
//         this.setState({
//             storeNumber: item,
//         }, () => {
//             if (this.state.storeNumber.length === 4) {
//                 // this.handleAddressSearch();
//             }
//         });

//     };

//     handleKeyDown = (event) => {
//         if (event.key === 'Tab') {
//             this.setState({ storeNumber: event.target.value });
//         }
//     }

//     handleOverrideMode = () => {
//         console.log(this.props.overrideMode);
//         if (this.props.overrideMode === true) {
//             console.log(this.state.addressRow);
//             if (this.state.addressRow.length !== 0) {
//                 this.setState({ selectedShipVia: this.state.addressRow[2] || '', }, () => {
//                     for (const carrier of this.state.carrierList) {
//                         if (carrier.value === 'FEDEX') {
//                             // console.log(carrier.list);
//                             for (const shipMethodList of carrier.list) {
//                                 // console.log(shipMethodList.shipVia);
//                                 // console.log(this.state.selectedShipVia);
//                                 if (this.state.selectedShipVia === shipMethodList.shipVia) {
//                                     this.setState({
//                                         shipMethodId: shipMethodList.shipMethodId,
//                                     }, () => {

//                                     });
//                                 }
//                             }
//                         }
//                     }
//                 });
//             }
//             else {
//                 this.setState({ selectedShipVia: 20, shipMethodId: 'GROUND' });
//             }
//         }
//         this.props.handleOverrideMode();
//     };

//     render() {
       
//         let shipButtonClass = 'ScanDataButtonDisabled';

//         if (this.state.shipButtonDisabled === false) {
//             shipButtonClass = 'ScanDataButton';
//         }
//         else {
//             shipButtonClass = 'ScanDataButtonDisabled';
//         }

//         return (
//             <div>
//                 <Grid>
//                     <ModeDropdown 
//                         handleHideSwitchModes={this.handleHideSwitchModes.bind(this)} 
//                         handleShowSwitchModes={this.handleShowSwitchModes.bind(this)} 
//                         handleSwitchMode={this.handleSwitchMode.bind(this)}
//                         mode={this.props.mode}
//                     />
//                     <Grid style={{ marginLeft: 30, marginRight: 30 }}>
//                         <Grid container spacing={24}>
//                             <Grid item md={3} sm={false} xs={false} style={{ display: this.props.internationalMode }}></Grid>
//                             <Grid item md={6} sm={12} xs={12} style={{ display: this.props.internationalMode, textAlign: 'center' }}>
//                                 <InternationalPanel
//                                     handleInitiateShipment={this.handleInitiateShipment}
//                                     internationalPickTicketFocus={this.state.internationalPickTicketFocus}
//                                     internationalPickTicket={this.state.internationalPickTicket}
//                                     pickTicket={this.state.pickTicket}
//                                     selectedPickTicket={this.state.selectedPickTicket}
//                                     pickTicketList={this.state.pickTicketList}
//                                     handleCloseShipment={this.handleCloseShipment}
//                                     handleInputChange={this.handleInputChange}
//                                     handleSelectPickTicket={this.handleSelectPickTicket}
//                                     handleAddPickTicket={this.handleAddPickTicket}
//                                     handleRemovePickTicket={this.handleRemovePickTicket}
//                                     handleClearForms={this.handleClearForms}
//                                     handleShipmentModalClose={this.handleShipmentModalClose}
//                                     confirmShipmentModal={this.state.confirmShipmentModal}
//                                 />
//                             </Grid>
//                             <Grid item md={3} sm={false} xs={false} style={{ display: this.props.internationalMode }}></Grid>
//                             <Grid item md={6} style={{ display: this.props.internationalMode, opacity: .8 }}>
//                                 <DeliverToPanel
//                                     panelDisplay={this.state.panelDisplay}
//                                     selectedPickTicket={this.state.selectedPickTicket}
//                                     suggestions={this.props.suggestions}
//                                     handleLockValues={this.props.handleLockValues}
//                                     handleAddressValidation={this.handleAddressValidation}
//                                     lockDeliverTo={this.props.lockDeliverTo}
//                                     contactDisabled={true}
//                                     inputDisabled={true}
//                                     storeNumber={this.state.storeNumber}
//                                     // storeNumberFocus={this.state.storeNumberFocus}
//                                     countries={this.state.countries}
//                                     companyName={this.state.companyName}
//                                     // firstName={this.state.firstName}
//                                     // lastName={this.state.lastName}
//                                     individualName={this.state.individualName}
//                                     streetAddress={this.state.streetAddress}
//                                     address1={this.state.address1}
//                                     zipCode={this.state.zipCode}
//                                     state={this.state.state}
//                                     city={this.state.city}
//                                     country={this.state.country}
//                                     phoneNumber={this.state.phoneNumber}
//                                     handleInputChange={this.handleInputChange}
//                                     getCityStateByZip={this.getCityStateByZip}
//                                     handleShipButtonActivation={this.handleShipButtonActivation}
//                                     handleAddressSearch={this.handleAddressSearch}
//                                     mode={this.props.mode}
//                                 />
//                             </Grid>
//                             <Grid item md={6} style={{ display: this.props.internationalMode, opacity: .8 }}>
//                                 <CartonInformationPanel
//                                     inputDisabled={true}
//                                     multi={this.state.multi}
//                                     panelDisplay={this.state.panelDisplay}
//                                     selectedPickTicket={this.state.selectedPickTicket}
//                                     shipViaList={this.state.shipViaList}
//                                     shipMethodId={this.state.shipMethodId}
//                                     distributionCenterList={this.state.distributionCenterList}
//                                     casePackDisabled={this.state.casePackDisabled}
//                                     cartonNumber={this.state.cartonNumber}
//                                     referenceNumber={this.state.referenceNumber}
//                                     orderNumber={this.state.orderNumber}
//                                     distributionCenter={this.state.distributionCenter}
//                                     billingAccount={this.state.billingAccount}
//                                     shipDate={this.state.shipDate}
//                                     dateExpectedDelivery={this.state.dateExpectedDelivery}
//                                     handleInputChange={this.handleInputChange}
//                                     // getShipUnitInfo={this.getShipUnitInfo}
//                                     handleShipDateChange={this.handleShipDateChange}
//                                     handleDeliveredByDateChange={this.handleDeliveredByDateChange}
//                                     handleShipButtonActivation={this.handleShipButtonActivation}
//                                     handleLockValues={this.props.handleLockValues}
//                                     lockCartonInformation={this.props.lockCartonInformation}
//                                     mode={this.props.mode}
//                                     overrideMode={this.props.overrideMode}
//                                     handleOverrideMode={this.handleOverrideMode}
//                                     // orderNumberFocus={this.state.orderNumberFocus}
//                                     handleSetShipVia={this.handleSetShipVia}
//                                     shippingOptionFinalList={this.state.shippingOptionFinalList}
//                                 />
//                             </Grid>
//                             <Grid item md={4} sm={false} xs={false} style={{ display: this.props.autoMode }}></Grid>
//                             <Grid item md={4} sm={12} xs={12} style={{ display: this.props.autoMode }}>
//                                 <PickTicketPanel
//                                     handlePickTicketKeyPress={this.handlePickTicketKeyPress}
//                                     getShipUnitInfoByPickTicket={this.getShipUnitInfoByPickTicket}
//                                     storeNumber={this.state.storeNumber}
//                                     handleLockValues={this.props.handleLockValues}
//                                     inputDisabled={this.state.inputDisabled}
//                                     handleInputChange={this.handleInputChange}
//                                     getCityStateByZip={this.getCityStateByZip}
//                                     handleShipButtonActivation={this.handleShipButtonActivation}
//                                     pickTicket={this.state.pickTicket}
//                                     pickTicketFocus={this.state.pickTicketFocus}
//                                     overrideMode={this.props.overrideMode}
//                                     handleOverrideMode={this.handleOverrideMode}
//                                     shipViaList={this.state.shipViaList}
//                                     shipMethodId={this.state.shipMethodId}
//                                     handleSetShipVia={this.handleSetShipVia}
//                                     mode={this.props.mode}
//                                 />
//                             </Grid>
//                             <Grid item md={4} sm={false} xs={false} style={{ display: this.props.autoMode }}></Grid>
//                             <Grid item lg={4} md={4} sm={false} xs={false} style={{ display: this.props.autoMode }}></Grid>
//                             <Grid item lg={4} md={4} sm={12} xs={12} align="center" style={{ display: this.props.autoMode }}>
//                                 <Button
//                                     className={shipButtonClass}
//                                     // className="ScanDataButton"
//                                     aria-label="Add"
//                                     variant="contained"
//                                     onClick={this.handleOnClick}
//                                     // onClick={this.validateAddress}
//                                     disabled={this.state.shipButtonDisabled}
//                                 >
//                                     <Typography style={{ fontSize: 16, color: 'white' }} >Ship</Typography>
//                                 </Button>
//                                 <Button
//                                     className="ScanDataButton"
//                                     aria-label="Add"
//                                     variant="contained"
//                                     onClick={this.handleClearForms}
//                                     style={{ backgroundColor: '#5E5E5E' }}
//                                 >
//                                     <Typography style={{ fontSize: 16, color: 'white' }} >Cancel</Typography>
//                                 </Button>
//                                 <Button
//                                     className={this.state.previousLabelBufURL !== "" ? "ScanDataButton" : "ScanDataButtonDisabled"}
//                                     aria-label="Add"
//                                     variant="contained"
//                                     onClick={this.handlePrintPreviousLabel}
//                                     style={{ backgroundColor: '#5E5E5E' }}
//                                     disabled={this.state.previousLabelBufURL !== "" ? null : true}
//                                 >
//                                     <Typography style={{ fontSize: 16, color: 'white' }} >RePrint Last</Typography>
//                                 </Button>
//                             </Grid>
//                             <Grid item lg={4} md={4} sm={false} xs={false} style={{ display: this.props.autoMode }}></Grid>
//                             <Grid item md={4} style={{ display: this.props.manualMode }}>
//                                 <DeliverToPanel
//                                     handleOnBlur={this.handleOnBlur}
//                                     handleAddressSearchInputChange={this.handleAddressSearchInputChange}
//                                     handleInput={this.handleInput}
//                                     handleKeyDown={this.handleKeyDown}
//                                     suggestions={this.props.suggestions}
//                                     handleLockValues={this.props.handleLockValues}
//                                     handleAddressValidation={this.handleAddressValidation}
//                                     lockDeliverTo={this.props.lockDeliverTo}
//                                     contactDisabled={this.state.contactDisabled}
//                                     inputDisabled={this.state.inputDisabled}
//                                     storeNumber={this.state.storeNumber}
//                                     storeNumberFocus={this.state.storeNumberFocus}
//                                     countries={this.state.countries}
//                                     companyName={this.state.companyName}
//                                     // firstName={this.state.firstName}
//                                     // lastName={this.state.lastName}
//                                     individualName={this.state.individualName}
//                                     streetAddress={this.state.streetAddress}
//                                     address1={this.state.address1}
//                                     zipCode={this.state.zipCode}
//                                     state={this.state.state}
//                                     city={this.state.city}
//                                     country={this.state.country}
//                                     phoneNumber={this.state.phoneNumber}
//                                     handleInputChange={this.handleInputChange}
//                                     getCityStateByZip={this.getCityStateByZip}
//                                     handleShipButtonActivation={this.handleShipButtonActivation}
//                                     handleAddressSearch={this.handleAddressSearch}
//                                     mode={this.props.mode}
//                                 />
//                             </Grid>
//                             <Grid item md={4} style={{ display: this.props.manualMode }}>
//                                 <CartonInformationPanel
//                                     declaredValue={this.state.declaredValue}
//                                     multi={this.state.multi}
//                                     handlePickTicketKeyPress={this.handlePickTicketKeyPress}
//                                     getShipUnitInfoByPickTicket={this.getShipUnitInfoByPickTicket}
//                                     pickTicket={this.state.pickTicket}
//                                     shipViaList={this.state.shipViaList}
//                                     shipMethodId={this.state.shipMethodId}
//                                     distributionCenterList={this.state.distributionCenterList}
//                                     inputDisabled={this.state.inputDisabled}
//                                     casePackDisabled={this.state.casePackDisabled}
//                                     cartonNumber={this.state.cartonNumber}
//                                     referenceNumber={this.state.referenceNumber}
//                                     orderNumber={this.state.orderNumber}
//                                     distributionCenter={this.state.distributionCenter}
//                                     billingAccount={this.state.billingAccount}
//                                     shipDate={this.state.shipDate}
//                                     dateExpectedDelivery={this.state.dateExpectedDelivery}
//                                     handleInputChange={this.handleInputChange}
//                                     // getShipUnitInfo={this.getShipUnitInfo}
//                                     handleShipDateChange={this.handleShipDateChange}
//                                     handleDeliveredByDateChange={this.handleDeliveredByDateChange}
//                                     handleShipButtonActivation={this.handleShipButtonActivation}
//                                     handleLockValues={this.props.handleLockValues}
//                                     lockCartonInformation={this.props.lockCartonInformation}
//                                     mode={this.props.mode}
//                                     overrideMode={this.props.overrideMode}
//                                     handleOverrideMode={this.handleOverrideMode}
//                                     // orderNumberFocus={this.state.orderNumberFocus}
//                                     handleSetShipVia={this.handleSetShipVia}
//                                     shippingOptionFinalList={this.state.shippingOptionFinalList}
//                                     updateDeliverByDate={this.updateDeliverByDate}
//                                     handleFilterShipMethod={this.handleFilterShipMethod}
//                                 />
//                             </Grid>
//                             <Grid item md={4} style={{ display: this.props.manualMode }}>
//                                 <DetailsPanel
//                                     inputDisabled={this.state.inputDisabled}
//                                     weightUnit={this.state.weightUnit}
//                                     heightUnit={this.state.heightUnit}
//                                     currencyUnit={this.state.currencyUnit}
//                                     weight={this.state.weight}
//                                     length={this.state.length}
//                                     height={this.state.height}
//                                     width={this.state.width}
//                                     handleInputChange={this.handleInputChange}
//                                     handleHeightModalOpen={this.handleHeightModalOpen}
//                                     handleShipButtonActivation={this.handleShipButtonActivation}
//                                     handleLockValues={this.props.handleLockValues}
//                                     lockDetails={this.props.lockDetails}
//                                     handleAutoWeight={this.handleAutoWeight}
//                                     declaredValue={this.state.declaredValue}
//                                 />
//                             </Grid>
   
//                             <Grid item lg={4} md={4} sm={false} xs={false} style={{ display: this.props.manualMode }}></Grid>
//                             <Grid item lg={4} md={4} sm={12} xs={12} align="center" style={{ display: this.props.manualMode }}>
//                                 <Button
//                                     className={shipButtonClass}
//                                     // className="ScanDataButton"
//                                     aria-label="Add"
//                                     variant="contained"
//                                     onClick={this.handleOnClick}
//                                     disabled={this.state.shipButtonDisabled}
//                                 >
//                                     <Typography style={{ fontSize: 16, color: 'white' }} >Ship</Typography>
//                                 </Button>
//                                 <Button
//                                     className="ScanDataButton"
//                                     aria-label="Add"
//                                     variant="contained"
//                                     onClick={this.handleClearForms}
//                                     style={{ backgroundColor: '#5E5E5E' }}
//                                 >
//                                     <Typography style={{ fontSize: 16, color: 'white' }} >Cancel</Typography>
//                                 </Button>

//                                 <Button
//                                     // className="ScanDataButtonDisabled"
//                                     className={this.state.previousLabelBufURL !== "" ? "ScanDataButton" : "ScanDataButtonDisabled"}
//                                     aria-label="Add"
//                                     variant="contained"
//                                     onClick={this.handlePrintPreviousLabel}
//                                     style={{ backgroundColor: '#5E5E5E' }}
//                                     disabled={this.state.previousLabelBufURL !== "" ? null : true}
//                                 >
//                                     <Typography style={{ fontSize: 16, color: 'white' }} >Reprint Last</Typography>
//                                 </Button>
//                             </Grid>
//                             <Grid item lg={4} md={4} sm={false} xs={false} style={{ display: this.props.manualMode }}></Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid >
//                 <HeightModal
//                     heightModal={this.state.heightModal}
//                     handleModalClose={this.handleHeightModalClose}
//                     handleSetDimension={this.handleSetDimension} />
//                 <LabelModal
//                     labelBufURL={this.state.labelBufURL}
//                     TotalCharge={this.state.TotalCharge}
//                     handleClearForms={this.handleClearForms}
//                     labelModal={this.state.labelModal}
//                     LabelURL={this.state.LabelURL}
//                     labelErrorNumber={this.state.labelErrorNumber}
//                     labelErrorMessage={this.state.labelErrorMessage}
//                     handleLabelModalClose={this.handleLabelModalClose}
//                     selectedShipVia={this.state.selectedShipVia}
//                     carrierId={this.state.carrierId}
//                     trackingNumber={this.state.trackingNumber}
//                     phoneNumber={this.state.phoneNumber}
//                     firstName={this.state.firstName} />
//                 <ConfirmShipmentModal
//                     handleShipmentAutoWeight={this.handleShipmentAutoWeight}
//                     handleInputChange={this.handleInputChange}
//                     internationalITNNumber={this.state.internationalITNNumber}
//                     internationalPackageCount={this.state.internationalPackageCount}
//                     internationalPackageWeight={this.state.internationalPackageWeight}
//                     internationalTotalCustomValue={this.state.internationalTotalCustomValue}
//                     internationalShipButtonDisabled={this.state.internationalShipButtonDisabled}
//                     handleCloseConfirmShipmentModal={this.handleCloseConfirmShipmentModal}
//                     handleShipShipment={this.handleShipShipment}
//                     confirmShipmentModal={this.state.confirmShipmentModal}
//                     pickTicketList={this.state.pickTicketList}
//                 />
//                 <MikeModal
//                     handleCloseMikeModal={this.handleCloseMikeModal}
//                     mikeModal={this.state.mikeModal}
//                 />
//                 <DuplicateCasePackModal
//                     distributionCenter={this.state.distributionCenter}
//                     cartonNumber={this.state.cartonNumber}
//                     handleClearForms={this.handleClearForms}
//                     duplicateCasePackModal={this.state.duplicateCasePackModal}
//                     handleDuplicateCasePackModalClose={this.handleDuplicateCasePackModalClose}
//                     handlePrintDuplicateLabel={this.handlePrintDuplicateLabel}
//                 />
//                 {/* <ExceptionModal packageNotFound={this.state.packageNotFound} handleExceptionCases={this.handleExceptionCases} handleExceptionHandleModalClose={this.handleExceptionHandleModalClose} exceptionHandleModal={this.state.exceptionHandleModal} /> */}
//                 {/* <InvalidAddressModal invalidAddressModal={this.state.invalidAddressModal} handleModalClose={this.handleInvalidAddressModalClose} />
//                 <Address1Modal addressValidationBuildingType={this.state.addressValidationBuildingType} address1Modal={this.state.address1Modal} handleModalClose={this.handleAddress1ModalClose} />
//                 <AddressValidationModal addressValidationModal={this.state.addressValidationModal} handleModalClose={this.handleAddressValidationModalClose}
//                     validateAddress={this.state.validateAddress}
//                     lookup1={this.state.lookup1}
//                 /> */}
//                 {/*{this.state.ADUserName}*/}

//             </div >
//         );
//     }
// }

// // export default withStyles(styles, { withTheme: true })(Induction);
// export default Induction;
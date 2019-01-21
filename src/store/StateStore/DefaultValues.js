/**
 * Created by jiloysss on 11/13/18.
 */
export const sales = {
  discountSelection: false,
  selectedCategoryIndex: -2,
  salesListStatus: false,
  searchStatus: false,
  categoryValue: "No Category",
  categoryFilter: true,
  selectedDiscount: "",
  selectedDiscountIndex: 0,
  deleteDialogVisible: false,
  quantityModalVisible: false,
  priceModalVisible: false,
  barcodeStatus: "idle",
  barcodeScannerInput: "",
  cash: 0.0,
  change: 0.0,
  discountSelectionStatus: true,
  fetching: false,
  addReceiptLineStatus: false,
};
export const listing = {
  itemStatus: "idle",
  categoryStatus: "idle",
  discountStatus: "idle",
  tabStatus: 0,
  itemMaintenanceStatus: false,
  taxObjects: JSON.stringify([]),
  printerStatus: "Offline",
};
export const login = {
  loginStatus: "idle",
  verificationVisible: false,
  pin: "",
  confirmPin: "",
  securityPinStatus: true,
  securityConfirmPinStatus: true,
  userName: "",
};
export const payment = {
  selected: "Cash",
  value: "0",
  amountDue: "0.00",
  amountChange: "0.00",
  itemSelected: "key0",
  connection: false,
  connectionStatus: "Offline",
  modalVisible: false,
  customerName: "",
  customerEmail: "",
  customerPhoneNumber: "",
  customerNotes: "",
  arrayObjects: JSON.stringify([]),
};
export const settings = {
  availableDevices: false,
  connected: "",
  connectionStatus: "Not Connected",
  currentAddress: "",
  companyName: "",
  companyHeader: "",
  companyFooter: "",
  companyCountry: "PHP",
  checkBoxBluetoothValue: false,
  checkBoxValue: "",
  attendants: JSON.stringify([]),
  // attendantsInfo: {},
  url: "",
  user_name: "",
  password: "",
  syncEditStatus: false,
};

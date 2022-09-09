import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
// plugin
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
// /* screen */
import Signin from './screen/Signin';
import Signup from './screen/Signup';
import ForgotPwd from './screen/ForgotPwd';
import ForgotCaptcha from './screen/ForgotCaptcha';
import ForgotVerifyPwd from './screen/ForgotVerifyPwd';
import ForgotOtp from './screen/ForgotOtp';
// user module import 
import Usercreate from './pages/user/users/Create';
import Useredit from './pages/user/users/Edit';
import Userslist from './pages/user/users/List';
import Rolecreate from './pages/user/roles/Create';
import Roleedit from './pages/user/roles/Edit';
import Roleslist from './pages/user/roles/List';
import Salescreate from './pages/user/salesagent/Create';
import Salesedit from './pages/user/salesagent/Edit';
import Saleslist from './pages/user/salesagent/List';
// contacts module import 
import Customerlist from './pages/contacts/customer/List';
import CoustomerGroupsList from './pages/contacts/customergroup/List';
import Supplierlist from './pages/contacts/suppliers/List';
import ImportContact from './pages/contacts/ImportContacts';
// /* product module import */
import Productlist from './pages/products/product/List';
import Productcreate from './pages/products/product/Create';
import Productedit from './pages/products/product/Edit';
import Productview from './pages/products/product/View';
import Brandlist from './pages/products/brand/List';
import Categorieslist from './pages/products/category/List';
import Unitslist from './pages/products/units/List';
import Variationslist from './pages/products/variations/List';
import Warrantieslist from './pages/products/warrenties/List';
import ImportProducts from './pages/products/ImportProducts';
import ImportOpeningStock from './pages/products/ImportOpeningStock';
import PrintLabel from './pages/products/PrintLable';
import Sellingrouplist from './pages/products/Sellingprice/List';
// purchase module
import Purchaselists from './pages/purchase/purchase/List';
import Purchasecreate from './pages/purchase/purchase/Create';
import Purchaseedit from './pages/purchase/purchase/Edit';
import Purchasereturnlist from './pages/purchase/purchasesreturn/List';
import Purchasereturncreate from './pages/purchase/purchasesreturn/Create';
import Purchasereturnedit from './pages/purchase/purchasesreturn/Edit';
// sell module
import Salecreate from './pages/sell/sales/Create';
import Salelist from './pages/sell/sales/List';
import Saleedit from'./pages/sell/sales/Edit';
import Poslist from './pages/sell/pos/List';
import Poscreate from './pages/sell/pos/Create';
import Posedit from './pages/sell/pos/Edit';
import Draftlist from './pages/sell/draft/List';
import Draftcreate from './pages/sell/draft/Create';
import Draftedit from './pages/sell/draft/Edit';
import Quotationlist from './pages/sell/quation/List';
import Quotationcreate from './pages/sell/quation/Create';
import Quotationedit from './pages/sell/quation/Edit';
import Sellreturn from './pages/sell/Sellreturn';
import Shipmentslist from './pages/sell/shipments/List';
import Discoutlist from './pages/sell/discount/List';
import Discountcreate from './pages/sell/discount/Create';
import Discoutedit from './pages/sell/discount/Edit';
import Subscriptionlist from './pages/sell/subscription/List';
import ImportSell from './pages/sell/ImportSale';
// import Stock
import StockTransferList from './pages/stock/transfer/List';
import StockTransferCreate from './pages/stock/transfer/Create';
import StockTransferEdit from './pages/stock/transfer/Edit';
import StockAdjustList from './pages/stock/adjustment/List';
import StockAdjustCreate from './pages/stock/adjustment/Create';
import StockAdjustEdit from './pages/stock/adjustment/Edit';
// Expenses
import Expenselist from './pages/expenses/expense/List';
import Expensecreate from './pages/expenses/expense/Create';
import Expenseedit from './pages/expenses/expense/Edit';
import Expensecategorylist from './pages/expenses/expensecategory/List';
// Report
import Profitlosslist from './pages/report/profitloss/List';
import ProductSelllist from './pages/report/productsell/List';
import ServiceStafflist from './pages/report/servicestaff/List';
import SalesRepresentativeList from './pages/report/salesRepresentative/List';
import Expenselisttable from './pages/report/expense/List';
import Selllist from './pages/report/sellpayment/List';
import Purchasepaymentlist from './pages/report/purchasepayment/List';
import Productpurchaselist from './pages/report/productpurchase/List';
import Itemslist from './pages/report/items/List'; 
import Trendingproductslist from './pages/report/trendingproducts/List';
import Stockadjustlist from './pages/report/stockadjust/List';
import Stocklist from './pages/report/stock/List';
import Cusgrouplist from './pages/report/customergroup/List';
import Suppcustomerlist from './pages/report/suppliercustomer/List';
import Taxlist from './pages/report/tax/List';
// Settings
import Businesssettings from './pages/settings/business/List';
import Locationlist from './pages/settings/location/List';
import Barcodelist from './pages/settings/barcode/List';
import Barcodecreate from './pages/settings/barcode/Create';
import Barcodeedit from './pages/settings/barcode/Edit';
import Taxratelist from './pages/settings/taxrate/List';
import Invoicelist from './pages/settings/invoice/List';
import Layoutcreate from './pages/settings/invoice/layouts/Create';
import Layoutedit from './pages/settings/invoice/layouts/Edit';
// import { AppContext } from './context/AppContext';

 function App() {
  
  // const [open, setOpen] = useState(true);

  // // Making memoized value to prevent unwanted renders
  // const appContext = useMemo(()=> {
  //   return {open,setOpen};
  // },[open])

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgetpwd" element={<ForgotPwd />} />
            <Route path="forgetCaptcha" element={<ForgotCaptcha />} />
            <Route path="forgetVerifyPwd" element={<ForgotVerifyPwd />} />
            <Route path="forgetOtp" element={<ForgotOtp />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* user module */}
            <Route path="user/user/create" element={<Usercreate />} />
            <Route path="user/user/edit" element={<Useredit />} />
            <Route path="user/user/list" element={<Userslist />} />
            <Route path="user/role/create" element={<Rolecreate />} />
            <Route path="user/role/edit" element={<Roleedit />} />
            <Route path="user/role/list" element={<Roleslist />} />
            <Route path="user/sales/create" element={<Salescreate />} />
            <Route path="user/sales/edit" element={<Salesedit />} />
            <Route path="user/sales/list" element={<Saleslist />} />

            {/* contacts module */}
            <Route path="contact/customer/list" element={<Customerlist />} />
            <Route path="contact/customergroup/list" element={<CoustomerGroupsList />} />
            <Route path="contact/supplier/list" element={<Supplierlist />} />
            <Route path="contact/customer/import" element={<ImportContact />} />
        
            {/* products module */}
            <Route path="product/product/list" element={<Productlist />} />
            <Route path="product/product/create" element={<Productcreate />} />
            <Route path="product/product/edit" element={<Productedit />} />
            <Route path="product/product/view" element={<Productview />} />
            <Route path="product/importopeningstock" element={<ImportOpeningStock />} />
            <Route path="product/importproducts" element={<ImportProducts />} />
            <Route path="product/printlabel" element={<PrintLabel />} />
            <Route path="product/sellinggroup/list" element={<Sellingrouplist />} />
            <Route path="product/brand/list" element={<Brandlist />} />
            <Route path="product/category/list" element={<Categorieslist />} />
            <Route path="product/variations/list" element={<Variationslist />} />
            <Route path="product/units/list" element={<Unitslist />} />
            <Route path="product/warrenties/list" element={<Warrantieslist />} />

            { /* purchase module */ }
            <Route path="purchase/purchase/list" element={<Purchaselists />} />
            <Route path="purchase/purchase/create" element={<Purchasecreate />} />
            <Route path="purchase/purchase/edit" element={<Purchaseedit />} />
            <Route path="purchase/purchasereturn/list" element={<Purchasereturnlist />} />
            <Route path="purchase/purchasereturn/create" element={<Purchasereturncreate />} />
            <Route path="purchase/purchasereturn/edit" element={<Purchasereturnedit />} />

            { /* sell module */ }
            <Route path="sell/sales/list" element={<Salelist />} />
            <Route path="sell/sales/create" element={<Salecreate />} />
            <Route path="sell/sales/edit" element={<Saleedit />} />
            <Route path="sell/pos/list" element={<Poslist />} />
            <Route path="sell/pos/create" element={<Poscreate />} />
            <Route path="sell/pos/edit" element={<Posedit />} />
            <Route path="sell/draft/list" element={<Draftlist />} />
            <Route path="sell/draft/create" element={<Draftcreate />} />
            <Route path="sell/draft/edit" element={<Draftedit />} />
            <Route path="sell/quotation/list" element={<Quotationlist />} />
            <Route path="sell/quotation/create" element={<Quotationcreate />} />
            <Route path="sell/quotation/edit" element={<Quotationedit />} />
            <Route path="sell/sellreturn/list" element={<Sellreturn />} />
            <Route path="sell/shipments/list" element={<Shipmentslist />} />
            <Route path="sell/subscriptions" element={<Subscriptionlist />} />
            <Route path="sell/discount/list" element={<Discoutlist />} />
            <Route path="sell/discount/create" element={<Discountcreate />} />
            <Route path="sell/discount/edit" element={<Discoutedit />} />
            <Route path="sell/subscription/list" element={<Subscriptionlist />} />
            <Route path="sell/impotsell" element={<ImportSell />} />

            { /* stock module */ }
            <Route path="stock/transfer/list" element={<StockTransferList />} />
            <Route path="stock/transfer/create" element={<StockTransferCreate />} />
            <Route path="stock/transfer/edit" element={<StockTransferEdit />} />
            <Route path="stock/adjust/list" element={<StockAdjustList />} />
            <Route path="stock/adjust/create" element={<StockAdjustCreate />} />
            <Route path="stock/adjust/edit" element={<StockAdjustEdit />} />
          
          { /* Expenses module */ }
          <Route path="expense/expense/list" element={<Expenselist/>} />
          <Route path="expense/expense/create" element={<Expensecreate />} />
          <Route path="expense/espense/edit" element={<Expenseedit />} />
          <Route path="expense/expensecategory/list" element={<Expensecategorylist/>} />

          { /* Report module */}
          <Route path="report/profitlose/list" element={<Profitlosslist />} />
          <Route path="report/productsell/list" element={<ProductSelllist />} />
          <Route path="report/servicestaff/list" element={<ServiceStafflist />} />
          <Route path="report/salesRepresentative/list" element={<SalesRepresentativeList />} />
          <Route path="report/expense/list" element={<Expenselisttable />} />
          <Route path="report/sell/list" element={<Selllist />} />
          <Route path="report/purchasepayment/list" element={<Purchasepaymentlist />} />
          <Route path="report/productpurchase/list" element={<Productpurchaselist />} />
          <Route path="report/items/list" element={<Itemslist />} />
          <Route path="report/trendingproduct/list" element={<Trendingproductslist />} />
          <Route path="report/stockadjust/list" element={<Stockadjustlist />} />
          <Route path="report/stock/list" element={<Stocklist />} />
          <Route path="report/customergroup/list" element={<Cusgrouplist />} />
          <Route path="report/suppliercustomer/list" element={<Suppcustomerlist />} />
          <Route path="report/tax/list" element={<Taxlist />} />


          { /* Settings module */}
          <Route path="settings/business/list" element={<Businesssettings />} />
          <Route path="settings/location/list" element={<Locationlist />} />
          <Route path="settings/barcode/list" element={<Barcodelist />} />
          <Route path="settings/barcode/create" element={<Barcodecreate />} />
          <Route path="settings/barcode/edit" element={<Barcodeedit />} />
          <Route path="settings/taxrate/list" element={<Taxratelist />} />
          <Route path="settings/invoice/list" element={<Invoicelist />} />
          <Route path="settings/layout/create" element={<Layoutcreate />} />
          <Route path="settings/invoice/edit" element={<Layoutedit />} />
          </Routes>
        </BrowserRouter> 
    </>
  );
}
export default App;

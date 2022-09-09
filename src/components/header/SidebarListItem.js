import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined';
import GroupOutlined from '@mui/icons-material/GroupOutlined';
import ContactsOutlined from '@mui/icons-material/ContactsOutlined';
import CategoryOutlined from '@mui/icons-material/CategoryOutlined';
import CloudUploadOutlined from '@mui/icons-material/CloudUploadOutlined';
import CloudDownloadOutlined from '@mui/icons-material/CloudDownloadOutlined';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlined from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import DoDisturbOnOutlined from '@mui/icons-material/DoDisturbOnOutlined';
import HorizontalSplitOutlined from '@mui/icons-material/HorizontalSplitOutlined'; 
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';

export const SidebarItems = [
    {
        id: 1,
        icon: <FenceOutlinedIcon />,
        label: 'Home',
        route: '/dashboard',
    },
    {
        id: 2,
        icon: <GroupOutlined />,
        label: 'User Management',
        arrow: <KeyboardArrowDownOutlined />,
        name : 'user',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'User',
                route: '/user/user/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Role',
                route: '/user/role/list',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'Sales Commission Agents',
                route: '/user/sales/list',
            }
        ]
    },
    {
        id: 3,
        icon: <ContactsOutlined />,
        label: 'Contacts',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'contact',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'Suppliers',
                route: '/contact/supplier/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Customers',
                route: '/contact/customer/list',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'Customer Groups',
                route: '/contact/customergroup/list',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'Import Contact',
                route: '/contact/customer/import',
            }
        ]
    },
    {
        id:4,
        icon: <CategoryOutlined/>,
        label: 'Products',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'product',
        children:[
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'List Produts',
                route: '/product/product/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Add Products',
                route: '/product/product/create',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'Print Labels',
                route: '/product/printlabel',
            },
            {
                id: 4,
                icon: <FiberManualRecord />,
                label: 'Variation',
                route: '/product/variations/list',
            },
            {
                id: 5,
                icon: <FiberManualRecord />,
                label: 'Import Products',
                route: '/product/importproducts',
            },
            {
                id: 6,
                icon: <FiberManualRecord />,
                label: 'Import Opening Stock',
                route: '/product/importopeningstock',
            },
            {
                id: 7,
                icon: <FiberManualRecord />,
                label: 'Selling Price Group',
                route: '/product/sellinggroup/list',
            },
            {
                id: 8,
                icon: <FiberManualRecord />,
                label: 'Units',
                route: '/product/units/list',
            },
            {
                id: 9,
                icon: <FiberManualRecord />,
                label: 'categories',
                route: '/product/category/list',
            },
            {
                id: 10,
                icon: <FiberManualRecord />,
                label: 'Brand',
                route: '/product/brand/list',
            },
            {
                id: 11,
                icon: <FiberManualRecord />,
                label: 'Warrenties',
                route: '/product/warrenties/list',
            }
        ]
    },
    {
        id: 5,
        icon: <CloudUploadOutlined />,
        label: 'Purchases',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'purchase',
        children:[
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'List Purchase',
                route: '/purchase/purchase/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Add Purchase',
                route: '/purchase/purchase/create',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'List Purchase Return',
                route: '/purchase/purchasereturn/list',
            }
        ]
    },
    {
        id: 6,
        icon: <CloudDownloadOutlined/>,
        label: 'Sell',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'sell',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'All Sales',
                route: '/sell/sales/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Add Sales',
                route: '/sell/sales/create',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'List POS',
                route: '/sell/pos/list',
            },
            {
                id: 4,
                icon: <FiberManualRecord />,
                label: 'POS',
                route: '/sell/pos/create',
            },
            {
                id: 5,
                icon: <FiberManualRecord />,
                label: 'Add Draft',
                route: '/sell/draft/create',
            },
            {
                id: 6,
                icon: <FiberManualRecord />,
                label: 'List Drafts',
                route: '/sell/draft/list',
            },
            {
                id: 7,
                icon: <FiberManualRecord />,
                label: 'Add Quatation',
                route: '/sell/quotation/create',
            },
            {
                id: 8,
                icon: <FiberManualRecord />,
                label: 'List Quatations',
                route: '/sell/quotation/list',
            },
            {
                id: 9,
                icon: <FiberManualRecord />,
                label: 'List Sell Returns',
                route: '/sell/sellreturn/list',
            },
            {
                id: 10,
                icon: <FiberManualRecord />,
                label: 'Shipments',
                route: '/sell/shipments/list',
            },
            {
                id: 11,
                icon: <FiberManualRecord />,
                label: 'Discounts',
                route: '/sell/discount/list',
            },
            {
                id: 12,
                icon: <FiberManualRecord />,
                label: 'Subscriptions',
                route: '/sell/subscription/list',
            },
            {
                id: 13,
                icon: <FiberManualRecord />,
                label: 'Import Sales',
                route: '/sell/impotsell',
            }
        ]
    },
    {
        id: 7,
        icon: <LocalShippingOutlined />,
        label: 'Stock Transfer',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'stockTransfer',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'List Stock Transfer',
                route: '/stock/transfer/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Add Stock Transfer',
                route: '/stock/transfer/create',
            }
        ]
    },
    {
        id: 8,
        icon: <HorizontalSplitOutlined/>,
        label: 'Stock Adjustment',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'stockAdjustment',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'List Stock Adjustment',
                route: '/stock/adjust/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Add Stock Adjustment',
                route: '/stock/adjust/create',
            }
        ]
    },
    {
        id: 9,
        icon: <DoDisturbOnOutlined/>,
        label: 'Expenses',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'expenses',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'List Expenses',
                route: '/expense/expense/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Add Expenses',
                route: '/expense/expense/create',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'Expenses Categories',
                route: '/expense/expensecategory/list',
            }
        ]
    },
    {
        id: 10,
        icon: <AssessmentOutlined />,
        label: 'Reports',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'report',
        children:[
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'Profit/Loss report',
                route: '/report/profitlose/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Product Sell Report',
                route: '/report/productsell/list',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'Service Staff Report',
                route: '/report/servicestaff/list',
            },
            {
                id: 4,
                icon: <FiberManualRecord />,
                label: 'Sales Representative Report',
                route: '/report/salesRepresentative/list',
            },
            {
                id: 5,
                icon: <FiberManualRecord />,
                label: 'Expenses Report',
                route: '/report/expense/list',
            },
            {
                id: 6,
                icon: <FiberManualRecord />,
                label: 'sell Payment Report',
                route: '/report/sell/list',
            },
            {
                id: 7,
                icon: <FiberManualRecord />,
                label: 'purchases Payment Report',
                route: '/report/purchasepayment/list',
            },
            {
                id: 8,
                icon: <FiberManualRecord />,
                label: 'product Purchase Report',
                route: '/report/productpurchase/list',
            },
            {
                id: 9,
                icon: <FiberManualRecord />,
                label: 'item report',
                route: '/report/items/list',
            },
            {
                id: 10,
                icon: <FiberManualRecord />,
                label: 'Trending Products',
                route: '/report/trendingproduct/list',
            },
            {
                id: 11,
                icon: <FiberManualRecord />,
                label: 'Stock Adjustment Report',
                route: '/report/stockadjust/list',
            },
            {
                id: 12,
                icon: <FiberManualRecord />,
                label: 'Stock Report',
                route: '/report/stock/list',
            },
            {
                id: 13,
                icon: <FiberManualRecord />,
                label: 'Customer Group Report',
                route: '/report/customergroup/list',
            },
            {
                id: 14,
                icon: <FiberManualRecord />,
                label: 'Supplier and Customer Report',
                route: '/report/suppliercustomer/list',
            },
            {
                id: 15,
                icon: <FiberManualRecord />,
                label: 'Tax Report',
                route: '/report/tax/list',
            }
        ]
    },
    {
        id: 11,
        icon: <SettingsOutlined />,
        label: 'Settings',
        arrow: <KeyboardArrowDownOutlined />,
        name: 'setting',
        children: [
            {
                id: 1,
                icon: <FiberManualRecord />,
                label: 'Business Settings',
                route: '/settings/business/list',
            },
            {
                id: 2,
                icon: <FiberManualRecord />,
                label: 'Business Location',
                route: '/settings/location/list',
            },
            {
                id: 3,
                icon: <FiberManualRecord />,
                label: 'invoice Setting',
                route: '/settings/invoice/list',
            },
            {
                id: 4,
                icon: <FiberManualRecord />,
                label: 'Barcode Setting',
                route: '/settings/barcode/list',
            },
            {
                id: 5,
                icon: <FiberManualRecord />,
                label: 'Tax Rates',
                route: '/settings/taxrate/list',
            },
            {
                id: 6,
                icon: <FiberManualRecord />,
                label: 'Payment Integration',
                route: 'route',
            }
        ]
    },
]


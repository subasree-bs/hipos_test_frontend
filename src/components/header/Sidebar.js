import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import Sidebarlist from './SidebarList';
import { navbarStyle } from './Style';
import Logo  from '../../assets/images/mainlogo.png';

const drawerWidth = 290;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  border: 'none',
    '& .MuiDrawer-paper':{
      border: 'none',
    },
    '& .MuiListItemText-root':{
      color: '#726d6d',
      fontWeight: 500,
      fontSize: '19px',
    },
    '& .MuiSvgIcon-root':{
      color: '#726d6d',
      fontWeight: 500,
      fontSize: '19px',
    },
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    border: 'none',
    boxShadow: 'none',
    '& .MuiDrawer-paper':{
      border: 'none',
      boxShadow: 'none',
    },
    '& .MuiListItemText-root':{
      color: '#726d6d',
      fontWeight: 500,
      fontSize: '19px',
    },
    '& .MuiSvgIcon-root':{
      color: '#726d6d',
      fontWeight: 500,
      fontSize: '19px',
    },
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    // flexShrink: 0,
    // whiteSpace: 'nowrap',
    // boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () => {

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  // const {open,setOpen} = useContext(AppContext);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
     <CssBaseline />
       {/* Topbar start */}
      <AppBar position="fixed" open={open} sx={navbarStyle.topbar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginLeft: '30px',marginRight: 5,...(open && { display: 'none' }),}} >
            {/* <img src={ Logo } alt="hilifeLogo" /> */}
            <MenuIcon  sx={{ padding: '6px',width: '37px',height: '40px',fontSize: '25px',borderRadius: '20px',backgroundColor: 'rgb(245 243 246)', color: 'rgb(94, 53, 177)',marginLeft: '15px',...(open && { display: 'none' }),'&:hover':{backgroundColor: '#673AB7',color: 'white', }}}/>
          </IconButton>
          <Navbar />
        </Toolbar>
      </AppBar>
      {/* Topbar end */}
      {/* Sidebar drawer start */}
      <Drawer variant="permanent" open={open} sx={navbarStyle.drawer}>
        <DrawerHeader sx={{ justifyContent: 'space-between' }}>
          <img src={ Logo } alt="HilifeLogo" />
          <IconButton onClick={handleDrawerClose} sx={{ backgroundColor: 'rgb(245 243 246)', color: 'rgb(94, 53, 177)','&:hover':{backgroundColor: '#673AB7',color: 'white',}}}>
            {<MenuIcon /> }
          </IconButton>
        </DrawerHeader>
        <Sidebarlist open={open} />
      </Drawer>
      {/* Sidebar drawer end */}
    </>
  );
}

export default Sidebar;
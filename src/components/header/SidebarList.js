import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarItems } from './SidebarListItem';
import { useNavigate } from "react-router-dom";

const Sidebarlist = ({open}) => {
  const navigate = useNavigate();
  // const [sidebarList, setSidebarList] = useState({user:"",contact:"",product:"",
  // purchase:"",sell:"",stockTransfer:"",stockAdjustment:"",expenses:"",report:"",setting:""});
  const [selectedList, setSelectedList] = useState("");
  const [closeList,setCloseList] = useState(false);
  return (
    <>
     <List >
          {SidebarItems.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block', position: 'relative' }} 
            onClick={ () =>  navigate(item.route)}
            >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={(e) =>{ 
                    setSelectedList(item.label)
                    setCloseList(!closeList)
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ marginLeft: '-10px',color: '#726d6d !important',fontSize: '19px !important',fontWeight: 500, opacity: open ? 1 : 0 }} ><b>{item.label}</b></ListItemText>
                  <ListItemIcon sx={{marginLeft: '10px',}}>{item.arrow}</ListItemIcon>
                </ListItemButton>
              { item.children && item.label == selectedList   ?  (
                 <>
                  <List sx={{ 
                    marginLeft: '30px',
                    borderLeft: '1px solid #bef2ee',
                    color: 'rgb(97,97,97)',
                    paddingTop: 0, 
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    marginRight:0,
                    '& .MuiSvgIcon-root':{
                      color:'rgb(97,97,97) ',
                      fontSize: '9px !important',
                      '&:hover':{
                        color:'rgb(97,97,97) !important',
                      }
                    },
                    '& .MuiListItemText-root':{
                      fontSize: '16px',
                      color: 'rgb(97,97,97)',
                      '&:hover':{
                        color: 'rgb(94, 53, 177)',
                        fontSize: '18px !important',
                      }
                    }
                    }}>
                    {item.children.map((child, index) => (
                      <ListItem key={child.id} disablePadding sx={{}}
                      onClick={() => navigate(child.route)}
                      >
                        <ListItemButton 
                        sx={{

                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                        >
                          <ListItemIcon >{child.icon}</ListItemIcon>
                          <ListItemText primary={child.label} sx={{ marginLeft: '-30px',opacity: open ? 1 : 0 }}/>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                 </>

                ) : null}
            </ListItem>
          ))}
        </List> 
    </>
  )
}

export default Sidebarlist;
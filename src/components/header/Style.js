export const drawerHead = {
    drawer:{
        border: 'none !mportant',
        '& ..MuiDrawer-root':{
            border: 'none !mportant',
        },
  
 }
}

export const navbarStyle = {

    topbar:{
        backgroundColor: 'white',
         color: 'black', 
         border: 'none', 
         boxShadow: 'none'
    },

    navbarrightbtn:{
       position: 'relative',
       display: 'flex',
       marginRight: '3px',
       alignItems: 'center',
       justifyContent: 'center',
       flexShrink: 0,
       fontFamily: 'Roboto, sans-serif',
       lineHeight: 1,
       overflow: 'hidden',
       userSelect: 'none',
       cursor: 'pointer',
       borderRadius: '8px',
       minWidth: '40px',
       height: '30px',
       fontSize: '20px',
       transition: 'all 0.2s ease-in-out 0s',
       background: 'rgb(245 243 246)',
       color: 'rgb(94, 53, 177)',
       '&:hover':{
           background: 'rgb(94, 53, 177)',
          color: 'white',
        }
    },
    '& .MuiButtonBase-root-MuiListItemButton-root':{
        '&:hover':{
            background: 'rgb(237, 231, 246)',
           color: 'rgb(94, 53, 177)',
         }
    }

}

export const sidebarstyle ={
    sidebarlist:{
        '& .MuiTypography-root':{
            marginLeft: '20px',
            color: 'rgb(97, 97, 97)'
        }, 
        '& .MuiSvgIcon-root':{ 
            color: 'rgb(97, 97, 97)',
            fontWeight: 100,
        }, 
    },
    '& .MuiButtonBase-root-MuiListItemButton-root':{
        '&:hover':{
            background: 'rgb(237, 231, 246)',
           color: 'rgb(94, 53, 177)',
         }
    },
    sidebarinnerlist:{
        padding: 0,
        marginLeft: '20px',
        color: 'rgb(124 121 121)',
        '& .MuiButtonBase-root-MuiListItemButton-root':{
          '&:hover':{
            backgroundcolor: 'rgb(245 243 246) !important',
            color: 'rgb(94, 53, 177) !important',
          }
        },
        '& .MuiListItem-root':{ 
            height: '35px',
            '& .Mui-selected':{
                color: 'rgb(94, 53, 177)',
                backgroundcolor: 'rgb(237, 231, 246)',
            },
            '&:hover':{
                backgroundcolor: 'rgb(245 243 246) !important',
                color: 'rgb(94, 53, 177) !important',
              },
        }, 
        '& .MuiList-root':{
            margingleft:'15px',
            marginRight:'15px',
        },
        '& .MuiTypography-root':{
            marginLeft: '20px',
            color: 'rgb(97, 97, 97)'
        }, 
        '& .MuiSvgIcon-root':{ 
            color: 'rgb(207 201 201)',
            fontSize: '11px',
        }, 
    },
}


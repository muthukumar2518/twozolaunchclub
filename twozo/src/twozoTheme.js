import {createTheme} from "@mui/material";
import lexend from './assets/Fonts/lexend_latin_ext.woff2'
import { checkboxClasses } from "@mui/material";

 const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderRadius: 0,
          },
        }
      }, 
      MuiToolbar:{
        styleOverrides:{
          root:{
            height:'64px'
          }
        } 
      },
      MuiOutlinedInput:{
       styleOverrides:{
        root:{
          backgroundColor:'#ECEEEE',
          borderRadius:'6px',
          height:'42px',
          width:'500px' 
        }
       }
      },
      MuiButton:{
        styleOverrides:{
          root:{
            boxShadow:'none',
            fontSize:'13px',
            textTransform:'none',
            fontWeight:600,
            height:'36px',
            borderRadius:'8px',
            color:'#fff',
            
          },
          
        }
      },
      MuiTableCell:{
       styleOverrides:{
        paddingCheckbox:{
          width:'24px',
          padding:'0px 12px 0px 16px'
        },
        root:{
          padding:'6px 16px'
        }
       }
      },
      MuiCheckbox:{
        styleOverrides:{
          root:{
            color:'#33BC7E',
            padding:0,
            [`&.${checkboxClasses.checked}`]: {
              color: '#33BC7E',
          },
          }
        }
      },
      MuiTableRow:{
         styleOverrides:{
          root:{
            height:'42px',
            '&:hover':{
              backgroundColor:'rgba(0,0,0,.02)'
            }
          }
         }
      },
      MuiTypography:{
        styleOverrides:{
          root:{
            fontSize:'14px'
          }
        }
      },
      MuiCssBaseline:{
        styleOverrides: `
         @font-face {
          font-family: 'lexend';
          font-style: normal;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${lexend}) format('woff2');
         }`,
      } 
    },  
  palette:{
    primary:{
      main:'rgb(236, 238, 238)',
    },
    secondary:{
      main:"#33BC7E",
      dark:'#272937'
    }
  },
  
  typography:{
    fontFamily:'lexend'
  } 
  });

export default theme  
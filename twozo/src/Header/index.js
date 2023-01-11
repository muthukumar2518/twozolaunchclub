import { Paper, Box,TextField, InputAdornment} from "@mui/material";
import React from "react";
import SearchIcon from "../assets/icons/searchIcon";
import NotificationIcon from "../assets/icons/notificationIcon";

export const Header = () => {

  return (
    <Paper
      sx={{
        display: "flex",
        height: '42px',
        backgroundColor: "#F4F5F5",
        p: 1,
        alignItems: "center",
        justifyContent:'space-between'
      }}
    >
        <Box>
          <TextField 
            focused
            placeholder="Search"
            sx={{input:{ '&::placeholder':{color:'#000'}}}}
            InputProps={{
              startAdornment:(
                <InputAdornment position="start" sx={{p:'0px 8px'}}>
                  {SearchIcon('18', '18', '#000000de')}
                </InputAdornment>
              ),
              sx:{
                fontSize:'14px',
                }
            }} 
          />
        </Box>
        <Box sx={{px:2}}>
         {NotificationIcon('20px', '20px', '#000000de')}
        </Box>
    </Paper>
  );
};

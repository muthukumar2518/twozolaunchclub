import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import owner from "../assets/images/owner.png";
import { DropdownIcon } from "../assets/icons/dropdownIcon";
import { SettingsIcon } from "../assets/icons/settingsIcon";
import { CheckBoxOutline } from "../assets/icons/checkBoxOutline";
import { CheckIcon } from "../assets/icons/checkIcon";
import theme from "../twozoTheme";
import { Stack } from "@mui/system";

export const Main = () => {

  const contactHeading = [
    "Contact Name",
    "company Name",
    "Email",
    "Phone No",
    "Contact Onwer",
  ];

  const [fieldsData,setFieldsData] = useState([]);
  const [contactDetails,setContactDetails] = useState([])
 

  function handleField(){
     let field = ["firstName","lastName","email","mobile","source","stage","company","id"]
     return field
  }

  function fieldApi(config){
    let request = {
      provider:config.provider,
      orgId:160,
      userId:51,
      select:config.fields,
      sort:[],
      config:[{
        isEnable:true,
        fields:config.fields[0],
      }],
      limit:{
        start:1,
        count:10
      },
      criteria:[],
      fetchHits:true,
      fetchStruct:true,
     }
   return request
  }

  useEffect(() => {
      const requestOptions = {
          method: 'POST',
          headers: { "Access-Control-Allow-Origin": "*",
                     "Content-Type": "application/json", },
          body: JSON.stringify({type:'list',data: {source: "Contact"} })
      };
      fetch("https://api.thelaunchclub.in/fields", requestOptions)
          .then(response => response.json())
          .then(data =>  setFieldsData([data]));
       
  }, []);

  useEffect(() => {
  const config = {
    url:"https://api.thelaunchclub.in/contact/list",
    provider:"CONTACT_LIST",
    fields:handleField(fieldsData)
  }
    const requestOptions = {
        method: 'POST',
        headers: { "Access-Control-Allow-Origin": "*",
                   "Content-Type": "application/json", },
        body: JSON.stringify(fieldApi(config))
    };
    fetch("https://api.thelaunchclub.in/contact/list", requestOptions)
        .then(response => response.json())
        .then(data => setContactDetails(data.data.table.rows));
},[fieldsData]);

  return (
      <TableContainer>
        <Stack
          sx={{
            position: "absolute",
            right: 0,
            width: "45px",
            justifyContent: "center",
            alignItems: "center",
            p: 1.2,
            zIndex: 1,
            backgroundColor: "white",
          }}
        >
          {SettingsIcon("20", "20")}
        </Stack>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "42px" }}>
              <TableCell padding="checkbox">
                <Checkbox
                  size="small"
                  icon={CheckBoxOutline("22", "22")}
                  indeterminateIcon={CheckIcon("22", "22")}
                />
              </TableCell>
              {contactHeading.map((headings, index) => (
                <TableCell key={index}>
                  <Stack
                    direction="row"
                    alignItems='center'
                    spacing={0.5}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {headings}
                    </Typography>
                    <Box>
                      {DropdownIcon("12", "12", "rgba(0, 0, 0, 0.6)")}
                    </Box>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {contactDetails.map((data) => (
              <TableRow key={data.id} >
                <TableCell padding="checkbox">
                  <Checkbox
                    size="small"
                    icon={CheckBoxOutline("22", "22")}
                    indeterminateIcon={CheckIcon("22", "22")}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                   <Typography> {data.firstName} </Typography>
                   <Typography> {data.lastName} </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography>
                    {data.company}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{color: theme.palette.secondary.main}}>
                    {data.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {data.mobile}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <img src={owner} alt={owner} width='26px' height='26px' />
                    <Typography>
                      Dinesh Kumar
                    </Typography> 
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

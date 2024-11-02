import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Logo from "../assets/images/Logo-1.png"
const Footer = () => {
  return (
    <Box mt={"60px"} bgcolor={"#FFF3F4"}>
        <Stack gap={"10px"} alignItems="center" px={"40px"} pt={"20px"}>
          <img src={Logo} alt="logo" width={"200px"} height={"40px"} />
          <Typography variant='h5' pb={"10px"} mt={"10px"}>
            Made with ❤️ by Bharat
          </Typography>
        </Stack>
    </Box>
  )
}

export default Footer
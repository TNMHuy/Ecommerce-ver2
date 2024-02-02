import { Box } from '@mui/material'
import React from 'react'

const Description = () => {
  return (
    <Box>
        <Box sx={{fontSize:'24px',fontWeight:'600', mb:'20px'}}>Specification:</Box>
        <Box>
            <Box>Brand: Beats</Box>
            <Box>Model: s450</Box>
            <Box>Wireless Bluetooth Headset</Box>
            <Box>FM Frequency Response: 87.5 - 108 Mhz</Box>
            <Box>Feature: FM Radio, Card Supported(Micro SD / TF)</Box>
            <Box>Made in China</Box>
        </Box>
    </Box>
  )
}

export default Description
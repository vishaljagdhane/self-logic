import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
export default function SquareLoadingComponent() {
  return (
    <div>
      <h1>I am loader</h1>
      <Stack spacing={2} direction="row" alignItems="center">
      {/* <CircularProgress size="30px" /> */}
      <CircularProgress size={40} />
      {/* <CircularProgress size="3rem" /> */}
    </Stack>
    </div>
  )
}

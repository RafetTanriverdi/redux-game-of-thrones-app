import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuotes } from '../redux/quotesSlice'
import { Backdrop, CircularProgress, Stack, Alert } from '@mui/material'


function Quotes() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.quotes.isLoading);
  const error = useSelector(state => state.quotes.error);
  const data = useSelector(state => state.quotes.items);
  
  useEffect(() => {
    dispatch(getQuotes())
  }, [dispatch])
  const Loading = (
    <Backdrop
      sx={{ color: '#eee', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
  if (isLoading) {
    return Loading
  }
  if (error) {
    return <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack sx={{ width: '80%', }} spacing={2}>
        <Alert severity="error">Error: {error}</Alert>
      </Stack>
    </div>
  }


  console.log(data);
  return (
    <>

      <div>Quotes</div>
    </>
  )
}

export default Quotes
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuotes } from '../redux/quotesSlice'
import { Backdrop, CircularProgress, Stack, Alert } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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



  return (
    <Container maxWidth="lg">
      <div>
        {
          data.map((character, index) => (
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography>{character.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {character.quotes.map((quote) => (
                    <ul>
                      <li>

                        <ArrowForwardIosIcon style={{fontSize:"14px" , color:"blue",fontWeight:"bold"}}/>{quote}
                      </li>
                    </ul>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>

          )
          )
        }
      </div>
    </Container>
  )
}

export default Quotes
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../redux/charactersSlice';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Backdrop, CircularProgress, Alert, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Home() {
  const characters = useSelector(state => state.characters.items);
  const isLoading = useSelector(state => state.characters.isLoading);
  const error = useSelector(state => state.characters.error);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters());
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
    <div >
      <h2>Characters</h2>
      <div style={{ display: "flex", justifyContent: "center", '@media (maxWidth: 600px)': { with: "100%" } }} >
        <Box sx={{ width: 1150, minHeight: 829, }} className="card" >
          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3} >
            {characters.map((item) => (
              <NavLink key={item.id} to={`/Detail/${item.id}`} style={{ textDecoration: "none", color: "inherit" }} >
                <div style={{ background: "#eee", boxShadow: "-3px 6px 13px -5px rgba(0,0,0,0.79)" }} >
                  <img
                    src={item.imageUrl}
                    srcSet={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: 'block',
                      width: '100%',
                    }}
                  />
                  <div className='card-footer' style={{ padding: "10px 10px" }}>
                    <h3 style={{ marginBottom: "5px" }}>{item.fullName} </h3>
                 
                  </div>
                </div>
               
              </NavLink>
            ))}
          </Masonry>
        </Box>
      </div>
    </div>
  )
}

export default Home
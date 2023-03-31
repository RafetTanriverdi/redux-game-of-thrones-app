import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';



function CharacterDetail() {
  const { id } = useParams();
  const [character, setcharacter] = useState({});

  useEffect(() => {
    axios(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then(res => setcharacter(res.data))
  }, [id])
console.log(character);
  return (
    <div style={{height:"100vh" ,display:"flex",justifyContent:"center",alignItems:"center"}} >
      <Card variant="outlined" sx={{ width: 450 }}>
        <Typography level="h2" fontSize="xxl" fontWeight="400" sx={{ mb: 0.5 }}>
      {character.fullName}
        </Typography>
        <Typography level="body3" fontSize="xl"> Talent: <span style={{fontWeight:"600"}}>{character.title}</span> </Typography>


        <AspectRatio minHeight="450px"  maxHeight="550px" sx={{ my: 2 }}>
          <img
            src={`${character.imageUrl}`}
            srcSet={`${character.imageUrl}`}

          />
        </AspectRatio>
        <Box sx={{ display: 'flex' }}>
          <div>
          <Typography level="body3" fontSize="md"> Family ~ {character.family} </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', fontWeight: 600 }}
          >
            Explore
          </Button>
        </Box>
      </Card>
    </div>
  )
}

export default CharacterDetail
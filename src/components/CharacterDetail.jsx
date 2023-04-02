import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Header from './Header';



function CharacterDetail() {
  const { id } = useParams();
  const [character, setcharacter] = useState({});

  useEffect(() => {
    axios(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then(res => setcharacter(res.data))
  }, [id])
  console.log(character);
  return (<>
    <div style={{ height:`85vh`, display: "flex", justifyContent: "center", alignItems: "center", margin:"0 10px"}} >
      <Card variant="outlined" sx={{ width: 450 }}>
        <Typography level="h2" fontSize="xxl" fontWeight="400" sx={{ mb: 0.5 }}>
          {character.fullName}
        </Typography>
        <Typography level="body3" fontSize="xl"> Talent: <span style={{ fontWeight: "600" }}>{character.title}</span> </Typography>


        <AspectRatio minHeight="350px" maxHeight="450px"  sx={{ my: 2 }}>
          <img
            src={`${character.imageUrl}`}
            srcSet={`${character.imageUrl}`}

          />
        </AspectRatio>
        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
          <div>
            <Typography level="body3" fontSize="md"> Family ~ {character.family} </Typography>
          </div>

          <div>
            <Typography level="body3" fontSize="md"> Id: {character.id} </Typography>
          </div>

        </Box>
      </Card>
    </div>
  </>
  )
}

export default CharacterDetail
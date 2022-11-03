
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import background from './background.jpg';
import Container from '@mui/material/Container';
import TaxCard from './TaxCard';
import BookkeepingCard from './BookkeepingCard';
import ConsultingCard from './ConsultingCard';





export default function Home () {
    return(
      <>
          <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize:'cover',
          height: '15rem'
        }}>
          <h1>Tax time</h1>
          </div>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
          <div style={{backgroundColor: '#E9F7F9', opacity: '90%'}}>
        <Box>
        <Grid container spacing={2}>
        <Grid item xs={4}>
          <TaxCard/>
        </Grid>
        <Grid item xs={4}>
          <ConsultingCard/>
        </Grid>
        <Grid item xs={8}>
          <BookkeepingCard/>
        </Grid>
      </Grid>
            
            
        </Box>
        </div>
        </>
    );
}
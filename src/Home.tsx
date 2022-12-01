
import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';
import TaxCard from './TaxCard';
import BookkeepingCard from './BookkeepingCard';
import ConsultingCard from './ConsultingCard';
import Jumbotron from './Jumbotron';
import ReviewCard from './ReviewCard';
import Paper from '@mui/material/Paper';



export default function Home () {
    return(
      <>
      
        <Jumbotron/>
      
      <Paper>
        <Grid container  rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} >
          <TaxCard/>
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
          <ConsultingCard/>
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
          <BookkeepingCard/>
        </Grid>
      </Grid>
      </Paper>
      <Grid item xs={12} sm={6} md={4}>
        <ReviewCard/>
      </Grid>
        
        </>
    );
}

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TaxCard from './TaxCard';
import BookkeepingCard from './BookkeepingCard';
import ConsultingCard from './ConsultingCard';
import Jumbotron from './Jumbotron';
import ReviewCard from './ReviewCard';




export default function Home () {
    return(
      <>
      <Grid container xs={12}>
        <Jumbotron/>
      </Grid>
      <Box>
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TaxCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ConsultingCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BookkeepingCard/>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ReviewCard/>
      </Grid>
            
            
        </Box>
        </>
    );
}
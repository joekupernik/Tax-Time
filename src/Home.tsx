
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
      <Box>
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <TaxCard/>
        </Grid>
        <Grid item xs={4}>
          <ConsultingCard/>
        </Grid>
        <Grid item xs={4}>
          <BookkeepingCard/>
        </Grid>
      </Grid>
            
            
        </Box>
        </>
    );
}
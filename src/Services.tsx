
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TaxCard from './TaxCard';
import BookkeepingCard from './BookkeepingCard';
import ConsultingCard from './ConsultingCard';
import Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ReviewCard from './ReviewCard';






export default function Services () {
    return(
      <>
      <Grid container xs={12}>
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        align="center"
        color="text.primary"
      >
        Services
      </Typography>
      </Container>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
        <Card>
     <CardMedia
     component="img"
     height="300"
     image="\Static\background.jpg"
     alt="green iguana"
     >
    
     </CardMedia>
     <CardContent>
      <Typography>
        Why Choose Us?
      </Typography>
      <Typography>
        We do the best job in the world. becccccccccccccccccccccccccccccbjdashduihsdhasdhhaudhausdjashduiasgduhasuidauisdui
      </Typography>
     </CardContent>
     <CardContent>
        <ReviewCard/>
     </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Box>
        </Grid>
      </Grid>
        </>
    );
}

import Grid from '@mui/material/Grid';
import ServiceCards from './ServiceCards';
import Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import ReviewCard from './ReviewCard';
import ReviewCarousel from './ReviewCarousel';






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
      <Grid container sx={{ p: 2}}>
        <Grid item xs={12} sm={6}>
        <Card sx={{ p: 2}}>
     <CardMedia
     component="img"
     height="500"
     image="\Static\background.jpg"
     alt="green iguana"
     >
    
     </CardMedia>
     <CardContent>
      <Typography sx={{ p: 2, align: 'center'}}>
        Why Choose Us?
      </Typography>
      <Typography sx={{ p: 2}}>
        We do the best job in the world. 
        With over 4 years of experiance we have
        the best most profesional people in the world.
        But don't take our word for it.  
      </Typography>
     </CardContent>
     <CardContent>
        <ReviewCarousel/>
     </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ p: 2}}>
        <ServiceCards/>
        </Grid>
      </Grid>
        </>
    );
}
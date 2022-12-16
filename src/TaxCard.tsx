
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea  from '@mui/material/CardActionArea';

export default function TaxCard() {
  return (
    <Card sx={{ maxWidth: '100%', height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./taxes.jpg"
          alt="taxes"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Stop stressing about your taxes
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Worried about your taxes?  Looking for a tax prepairer you can trust?  Well look no further Carly has the experiance and knowledge plus the follow through to make your tax season a breeze.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

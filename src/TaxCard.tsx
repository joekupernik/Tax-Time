
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TaxCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="\Static\taxes.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stop stressing about your taxes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Worried about your taxes?  Looking for a tax prepairer you can trust?  Well look no further Carly has the experiance and knowledge plus the follow through to make your tax season a breeze.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

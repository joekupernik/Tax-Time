
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ConsultingCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Turn your ideas into realities
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Give your dreams the nutrients they need to blosom. Buisness can take many forms, find out which on best suits your needs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

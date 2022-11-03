
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function BookkeppingCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="BookKeepingImg"
          alt="bookeeping"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Focus on your buisness not your bookeeping.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Owning a buisness is hard work.  Elevated Finicals makes your life eaiser by streamlining your finiancial recording and allowing you to focus on the most important parts of your buisness.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

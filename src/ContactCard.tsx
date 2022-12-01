
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import CardMedia from '@mui/material/CardMedia';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function ContactForm() {
  return (
   
    <Card>
     <CardMedia
     component="img"
     height="500"
     image="\Static\background.jpg"
     alt="green iguana"
     >
    
     </CardMedia>
     <CardContent >
      <Typography>
        <PhoneIcon fontSize="large" /> (303)-987-9878
      </Typography>
      <Typography>
        <EmailIcon fontSize="large" /> do something cool@gmail.com
      </Typography>
      <Typography>
        <LocationOnIcon fontSize="large"  /> Bayfield Colorado
      </Typography>
     </CardContent>
    </Card>
    
  );
}
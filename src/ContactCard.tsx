
import Box from "@mui/material/Box";
//import Container from "@mui/system/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
//import Icon from '@mui/material/Icon';
import CardMedia from '@mui/material/CardMedia';


export default function ContactForm() {
  return (
    <Box
    sx={{
      pt: 8,
      pb: 6,
    }}
  >
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
        "Phone Number Icon": (303)-987-9878
      </Typography>
      <Typography>
        "Email icon": do something cool@gmail.com
      </Typography>
      <Typography>
        "icon": Bayfield Colorado
      </Typography>
     </CardContent>
    </Card>
      </Box>
  );
}
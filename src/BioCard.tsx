
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Bio() {
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
     height="450"
     image="\Static\homeimg.png"
     alt="Carly"
     >
    
     </CardMedia>
    </Card>
      </Box>
  );
}
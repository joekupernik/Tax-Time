
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';



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
     image="./homeimg.png"
     alt="Carly"
     >
    
     </CardMedia>
     <CardContent>
         
         <Typography variant="h6"><WorkHistoryIcon/>Working as a proffesional in finance scince 2019</Typography>
         <Typography variant="h6"><VerifiedIcon/> In Buisness Scince 2020</Typography>
         <Typography variant="h6"> <SchoolIcon/> Colorado Mountain College:   Bachlors Degree: Buisness Managment</Typography>
     </CardContent>
    </Card>
      </Box>
  );
}
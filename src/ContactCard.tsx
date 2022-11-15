
import Box from "@mui/material/Box";
//import Container from "@mui/system/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
//import Icon from '@mui/material/Icon';


export default function ContactForm() {
  return (
    <Box
    sx={{
      pt: 8,
      pb: 6,
    }}
  >
    <Card>
     <CardContent>
      <Typography>
        Phone Number: (303)-987-9878
      </Typography>
      <Typography>
        Email: do something cool@gmail.com
      </Typography>
      <Typography>
        Location: Bayfield Colorado
      </Typography>
     </CardContent>
    </Card>
      </Box>
  );
}
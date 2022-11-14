
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card  from "@mui/material/Card";
import  Rating  from "@mui/material/Rating";
import Avatar  from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";


export default function ReviewCard() {
  return (
    <Box
    sx={{
      bgcolor: 'secondary',
      pt: 8,
      pb: 6,
    }}>
        <Card variant="outlined" sx={{margin: 2, padding: .2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
        <Rating defaultValue={5} readOnly />
      </CardContent>
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        >
       Carly did a great job of taking care of my unique tax senario. 
       She is very communicative, and helpful.
      </Typography>
      
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       >
        - Joe 
      </Typography>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
      <Avatar alt="Joe" src="\Static\email signiture.png"
      sx={{ width: 56, height: 56}} />
      </CardContent>
      </Card>
      <Card variant="outlined">
        <Rating defaultValue={5} readOnly />
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        
        >
       Carly did a great job of taking care of my unique tax senario. 
       She is very communicative, and helpful.
      </Typography>
      <Typography 
       component="body"
       align="center"
       color="text.primary">
        - Joe 
      </Typography>
      <Avatar alt="Joe" src="\Static\email signiture.png" 
      sx={{ width: 56, height: 56 }} />
      </Card>
      <Card variant="outlined">
        <Rating defaultValue={5} readOnly />
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        
        >
       Carly did a great job of taking care of my unique tax senario. 
       She is very communicative, and helpful.
      </Typography>
      <Typography 
       component="body"
       align="center"
       color="text.primary">
        - Joe 
      </Typography>
      <Avatar alt="Joe" src="\Static\email signiture.png" 
      sx={{ width: 56, height: 56 }} />
      </Card>
      </Box>
  );
}
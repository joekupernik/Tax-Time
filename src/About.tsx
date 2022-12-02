import Grid from "@mui/material/Grid";
import Bio from "./BioCard";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent  from "@mui/material/CardContent";
import  Paper  from "@mui/material/Paper";
import Jumbotron from "./Jumbotron";



export default function About () {
    return(
      <>
      <Jumbotron/>
      <Paper elevation={5}>
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} >
          <Bio/>
        </Grid>
        <Grid item xs={12} sm={6} >
        
          <Card>
     <CardContent>
      <Typography variant="h5" sx={{p: 2}}>
      I have a Bachelor of Science in Business Administration and have acquired a professional certification from Intuit in bookkeeping. Over the last 3-4 years I have used this degree and this certification to develop skills in the financial industry. These skills include understanding income tax and payroll tax law, applying bookkeeping principles, accurately entering and analyzing data, using excellent customer service to assist clients, and developing competency with a wide range of software including Excel and Quickbooks.I have a Bachelor of Science in Business Administration and have acquired a professional certification from Intuit in bookkeeping. Over the last 3-4 years I have used this degree and this certification to develop skills in the financial industry. These skills include understanding income tax and payroll tax law, applying bookkeeping principles, accurately entering and analyzing data, using excellent customer service to assist clients, and developing competency with a wide range of software including Excel and Quickbooks.
      </Typography>
     </CardContent>
    </Card>
    
        </Grid>
        </Grid>
        </Paper>
        </>
    );
}
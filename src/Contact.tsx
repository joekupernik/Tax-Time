import Jumbotron from "./Jumbotron";
import ContactForm from "./ContactForm";
import Grid from "@mui/material/Grid";
import ContactCard from "./ContactCard";

export default function Contact() {
    return(
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
           <Jumbotron/>
        </Grid>
        <Grid item xs={12} sm={6} >
          <ContactForm/>
        </Grid>
        <Grid item xs={12} sm={6} >
            <ContactCard/>
        </Grid>
        </Grid>
    );
}
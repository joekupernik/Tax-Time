
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
//import Card from "@mui/material/Card";
//import CardContent from '@mui/material/CardContent';
import Button  from "@mui/material/Button";
import TextField  from "@mui/material/TextField";

export default function ContactForm() {
  return (
    <Box
    component="form"
    sx={{ display: 'flex', flexWrap: 'wrap', m: 2, justifyContent: 'center' }}
    noValidate
    autoComplete="off"
  >
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="First Name"
        sx={{
           m: 1
        }}
        fullWidth
        helperText="First Name"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        sx={{
          m: 1
       }}
       fullWidth
       helperText="Last Name"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Email"
        type="email"
        sx={{
          m: 1
       }}
       fullWidth
       helperText="Email"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Phone Number"
        sx={{
          m: 1
       }}
       fullWidth
       helperText="Phone Number"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Message"
        multiline
        rows={8}
        fullWidth
        sx={{
          m: 1  
       }}
       helperText="Tell us what you need!"
      />
      <Button variant="outlined"  type="submit">Submit</Button>
      </Box>
  );
}
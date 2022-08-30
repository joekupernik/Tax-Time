
//import Grid from '@mui/material/Grid';
import background from './background.jpg';



export default function Home () {
    return(
      <>
          <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize:'cover',
          height: '15rem'
        }}>
          <h1>Tax time</h1>
          </div>
          <hr
            style={{
              color: "black",
              height: 3
            }}
          />
        </>
    );
}
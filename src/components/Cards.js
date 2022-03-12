import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
export default function Cards() {
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Book a Slot!
      </Typography>
      <Grid
        conatiner
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop="30px"
      >
        <Grid item xs={3} md={4} marginLeft="40px" marginRight="20px">
          <Card>
            <CardContent><Typography fontSize="29px" textAlign="center"><span style={{color:"#35386C"}}>Seminar</span></Typography></CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={4} marginLeft="20px" marginRight="20px">
          <Card>
            <CardContent><Typography fontSize="29px" textAlign="center"><span style={{color:"#35386C"}}>Workshops</span></Typography></CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={4} marginLeft="20px" marginRight="40px">
          <Card>
            <CardContent><Typography fontSize="29px" textAlign="center"><span style={{color:"#35386C"}}>Awareness Drives</span></Typography></CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

import { Grid, Button, Typography } from "@mui/material";
import "./Homepage.css";

export default function Home() {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item sm={6} md={3} className="left-box">
          <div className="text">
            <Grid item sm={6} md={3}>
              <Typography
                style={{
                  fontSize: "5rem",
                  letterSpacing: 1,
                  fontFamily: "Roboto"
                }}
              >
                WishFund
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={12}>
              <Typography style={{ fontFamily: "Roboto", fontSize: "1.5rem", paddingBottom:"20px" }}>
                Help Others Be Happy :)
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={3}>
              <Button
                style={{ borderRadius: "31px", backgroundColor: "#49AB94", fontSize:"1.2rem", height:"4rem" }}
                variant="contained"
              >
                Explore
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="right-box"></Grid>
      </Grid>
    </>
  );
}
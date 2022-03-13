import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import { URL } from "../../utils/api";

export default function Volunteer() {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    (async () => {
      let posts;
      try {
        let response = await fetch(URL + "volunteer/listvolunteer/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + token,
          },
        });
        posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log("Error" + error);
        posts = [];
      }

      setCard(posts);
    })();
  }, [token]);

  return (
    <>
      <Grid
        container
        className="display"
        // alignItems="center"
        // justifyContent="center"
      >
        <Box ml={5} mr={5} mt={3} pt={3} mb={1} pb={1}>
          <Grid
            container
            spacing={3}
            alignContent="flex-start"
            justify="center"
            // display="flex"
            // flexDirection="column"
          >
            {card.map((post, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    style={{
                      width: "50vh",
                      backgroundColor: "#49ab9480",
                      marginLeft: "170px",
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <CardContent>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >Description :{" "}
                        {post.description}
                      </Typography>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >Reason : {" "}
                        {post.reason} hr
                        <br />
                      </Typography>
                      <Typography>Amount:</Typography>
                      <Typography style={{ color: "red" }}>
                        {post.total_amount_needed}
                      </Typography>
                      <a
                        href="https://rzp.io/l/1GpMHVP"
                        target="_/blank"
                        style={{ textDecoration: "none", fontSize:"2rem" }}
                      >
                        <Button size="small" color="primary">
                          Donate    
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

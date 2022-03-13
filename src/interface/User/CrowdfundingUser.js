import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button, CardMedia } from "@mui/material";
import { URL } from "../../utils/api";
import img from  '../../assets/crowdfunding.svg';

export default function CrowdfundingUser() {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("token");
  //console.log(token);
  useEffect(() => {
    (async () => {
      let posts;
      try {
        let response = await fetch(URL + "crowdfundingapp/crowdfunding/", {
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
                  <Card sx={{ display: "flex", width: "40vw" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 40 }}
                      image="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
                      alt="black"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "40vw",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography>{post.description}</Typography>
                        <Typography>{post.reason}</Typography>
                        <Typography>{post.amt}</Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                          marginRight:"80px"
                        }}
                      >
                        <a
                          href="https://rzp.io/l/1GpMHVP"
                          target="_/blank"
                          style={{ textDecoration: "none", fontSize: "2rem" }}
                        >
                          <Button size="large" color="primary">
                            Donate
                          </Button>
                        </a>
                      </Box>
                    </Box>
                    <img src={img} alt="hello" width="140px" height="140px" marginRight="40px"/>
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
{
  /* <a
href="https://rzp.io/l/1GpMHVP"
target="_/blank"
style={{ textDecoration: "none", fontSize:"2rem" }}
>
<Button size="small" color="primary">
  Donate    
</Button>
</a> 
desc
reason
amt
*/
}

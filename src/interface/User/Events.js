import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import { URL } from "../../utils/api";
import { BiTimeFive } from "react-icons/bi";
import { GiDuration } from "react-icons/gi";
import { MdDateRange, MdPlace } from "react-icons/md";
import { CardMedia } from "@mui/material";
import events from '../../assets/events.svg';

export default function Events() {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    (async () => {
      let posts;
      try {
        let response = await fetch(URL + "eventapp/event/", {
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
                    <CardContent>
                      <Typography variant="h5"><b>Event Name: {post.event_name}</b></Typography>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        fontSize="20px"
                        component="div"
                      >
                        <MdDateRange /> {post.event_date}
                      </Typography>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        fontSize="20px"
                        component="div"
                      >
                        <GiDuration /> {post.event_duration}
                        <Typography fontSize="19px">
                          <BiTimeFive /> 
                          {post.event_time}
                        </Typography>
                        <Typography fontSize="19px">
                          <MdPlace /> {post.event_venue}
                        </Typography>
                      </Typography>
                      <Typography fontSize="17px">
                        About: {post.event_description}
                      </Typography>
                    </CardContent>
                    </Box>
                    <img src={events} alt="hello" width="200px" height="200px" marginRight="40px"/>
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

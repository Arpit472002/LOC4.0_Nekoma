import { useState, useEffect } from "react";
import { URL } from "../../utils/api";
import { Grid, Box, Typography } from "@mui/material";

export default function UserBlog() {
  const [card, setCard] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      let user;
      try {
        let response = await fetch(URL + "blogapp/blog/", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        user = await response.json();
        console.log(user);
      } catch (error) {
        console.log("Error" + error);
        user = [token];
      }

      setCard(user);
    })();
  }, []);

  return (
    <>
      {card.map((user, index) => {
        return (
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            key={index}
            marginLeft="50px"
          >
            <Typography variant="h4">Title: {user.title}</Typography><br/>
            <Typography variant="h5">Description: {user.description}</Typography><br/>
            <Typography variant="h6">Posted By: {user.postedby}</Typography>
          </Grid>
        );
      })}
    </>
  );
}

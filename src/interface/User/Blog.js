import { useState, useEffect } from "react";
import { URL } from "../../utils/api";
import { Grid, Box, Typography } from "@mui/material";

export default function Blog() {
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
            Authorization: "Token " + token,
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
  }, [token]);

  return (
    <>
      {card.map((user, index) => {
        return (
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={index}
          >
            <Box
              component="div"
              sx={{
                borderRadius: "8px",
                border: "1px solid #35386C",
                width: 291,
                height: 206,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <Typography>{user.title}</Typography>
              <Typography>{user.description}</Typography>
              <Typography>{user.postedby}</Typography>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

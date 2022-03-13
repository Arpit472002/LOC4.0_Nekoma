import {
  Grid,
  Typography,
  Box,
  FilledInput,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { URL } from "../../utils/api";
export default function Blog() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  console.log(token, name);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [postedby, setPostedby] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog();
  };

  async function createBlog() {
    try {
      let result = await fetch(URL + "blogapp/blog/", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          postedby: name,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          
        },
      });
      result = await result.json();
      console.log(result);
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return (
    <>
      <Typography variant="h4" textAlign="center">
        Make A Blog For Any Event!
      </Typography>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <div>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            style={{ gap: 15, paddingLeft:"400px" }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "150px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Enter Title</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="title"
                    label="Title"
                    type="text"
                    name="title"
                    variant="outlined"
                    color="success"
                    autoComplete="title"
                    value={title}
                    fullWidth
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "150px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Enter Blog Body</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <TextField
                    id="blog"
                    label="Blog"
                    type="text"
                    name="blog"
                    variant="outlined"
                    color="primary"
                    value={description}
                    fullWidth
                    multiline
                    rows={8}
                    column={10}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                sx={{ ml: 40, mt: 2, mb: 1 }}
                style={{
                  backgroundColor: "#ff6f00",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginLeft:"155px"
                
                }}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

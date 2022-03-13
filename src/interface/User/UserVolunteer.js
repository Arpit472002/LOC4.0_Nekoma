import { Grid, Button, Typography, Box, FilledInput } from "@mui/material";
import { useState } from "react";
import { URL } from "../../utils/api";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

export default function CrowdfundingOrganiser() {
  const token = localStorage.getItem("token");
  console.log(token);
  const addIcon = {
    width: "100px",
    height: "100px",
    display: "block",
  };

  const [phone_number, setPhone_number] = useState("");
  const [available_at, setAvailable_at] = useState("");
  const [is_selected, setIs_selected] = useState(true);
  const [aadhar_image, setAadhar_image] = useState(null);
  const [event_name, setEvent_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent();
  };

  const handleRadio = (event) => {
    setIs_selected(event.target.value);
  };

  async function createEvent() {
    try {
      let result = await axios.post(URL + "volunteer/listvolunteer/", {
        method: "POST",
        body: JSON.stringify({
          phone_number: phone_number,
          available_at: available_at,
          is_selected: is_selected,
          aadhar_image: aadhar_image,
          event_name: event_name,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
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
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            style={{ gap: 15 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{ marginTop: "20px", marginLeft: "36px" }}
            >
              <Typography style={{ fontSize: "30px", marginTop: "30px" }}>
                Volunteer Information
              </Typography>
            </Grid>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Phone Number</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_name"
                    label="Event Name"
                    type="text"
                    name="event_name"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_name"
                    value={phone_number}
                    fullWidth
                    onChange={(e) => setPhone_number(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Available At</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_description"
                    label="Event Description"
                    required
                    type="text"
                    name="event_description"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_description"
                    value={available_at}
                    fullWidth
                    onChange={(e) => setAvailable_at(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Event Name</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_venue"
                    label="Event Venue"
                    required
                    type="text"
                    name="event_venue"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_venue"
                    value={event_name}
                    fullWidth
                    onChange={(e) => setEvent_name(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Upload your Aadhar</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_name"
                    label="Event Name"
                    type="file"
                    name="event_name"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_name"
                    value={aadhar_image}
                    fullWidth
                    onChange={(e) => setAadhar_image((e.target.value))}

                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" marginBottom={5}>
                
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                // sx={{ ml: 14, mt: 2, mb: 1 }}
                fullWidth
                style={{
                  backgroundColor: "#ff6f00",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
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

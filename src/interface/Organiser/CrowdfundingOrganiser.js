import { Grid, Button, Typography, Box, FilledInput } from "@mui/material";
import { useState } from "react";
import { URL } from "../../utils/api";

export default function CrowdfundingOrganiser() {

  const token = localStorage.getItem("token");
  console.log(token);
  const addIcon = {
    width: "100px",
    height: "100px",
    display: "block",
  };

  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [total_amount_needed, setTotal_amount_needed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent();
  };

  async function createEvent() {
    try {
      let result = await fetch(URL + "crowdfundingapp/crowdfunding/", {
        method: "POST",
        body: JSON.stringify({
            reason: reason,
            description: description,
            total_amount_needed: total_amount_needed,
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
                Crowdfunding
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
                  <Typography>Event Organised For</Typography>
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
                    value={reason}
                    fullWidth
                    onChange={(e) => setReason(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Event Description</Typography>
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
                    value={description}
                    fullWidth
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Amount Need</Typography>
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
                    value={total_amount_needed}
                    fullWidth
                    onChange={(e) => setTotal_amount_needed(e.target.value)}
                    style={{ width: "250px" }}
                  />
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

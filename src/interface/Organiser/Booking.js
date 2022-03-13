import Cards from "../../components/Cards";
import { Grid, Button, Typography, Box, FilledInput } from "@mui/material";
import "./Booking.css";
import { useState } from "react";
import { URL } from "../../utils/api";

export default function Booking() {

  const token = localStorage.getItem("token");
  console.log(token);
  const addIcon = {
    width: "100px",
    height: "100px",
    display: "block",
  };

  const [event_name, setEvent_name] = useState("");
  const [event_description, setEvent_description] = useState("");
  const [event_venue, setEvent_venue] = useState("");
  const [event_date, setEvent_date] = useState("");
  const [event_time, setEvent_time] = useState("");
  const [event_duration, setEvent_duration] = useState("");
  const [no_of_volunteers, setNo_of_volunteers] = useState("");

  // const handleSubmit = async () =>{
  //   let formField = new FormData()
  //   formField.append('event_name', event_name);
  //   formField.append('event_description', event_description);
  //   if(event_image !== null){
  //   formField.append('event_image', event_image);}
  //   formField.append('event_venue', event_venue);

  //   formField.append('event_date', event_date);
  //   formField.append('event_time', event_time);
  //   formField.append('event_duration', event_duration);
  //   formField.append('no_of_volunteers', no_of_volunteers);

  //   await axios.post({
  //     // method: 'post',
  //     url: URL + 'eventapp/event/',
  //     data: formField
  //   },
  //   {
  //     headers: {
  //       'Authorization': `Basic ${token}`
  //     }
  //   }).then((response) => {
  //     console.log(response.data)
  //     navigate('/blog');
  //   })
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent();
  };

  async function createEvent() {
    try {
      let result = await fetch(URL + "eventapp/event/", {
        method: "POST",
        body: JSON.stringify({
          event_name: event_name,
          event_description: event_description,
          event_date: event_date,
          event_time: event_time,
          event_venue: event_venue,
          event_duration: event_duration,
          no_of_volunteers: no_of_volunteers,
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
      <Cards />

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
              <Typography style={{ fontSize: "30px", marginTop: "30px",color:"#002d12", fontSize:"1.8rem"}}>
                Create An Event
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
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Event Name</Typography>
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
                    value={event_name}
                    fullWidth
                    onChange={(e) => setEvent_name(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              {/* <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Upload Image</Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  <Box
                    component="div"
                    sx={{
                      borderRadius: "8px",
                      border: "1px solid #58971C",
                      width: 150,
                      height: 100,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "15px",
                    }}
                  >
                    <label htmlFor="event_image">
                      <BiImageAdd style={addIcon} />
                    </label>
                    <input
                      type="file"
                      name="event_image"
                      onChange={(e) => setEvent_image(e.target.files[0])}
                      id="event_image"
                    />
                  </Box>
                </Grid>
              </Grid> */}

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Event Description</Typography>
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
                    value={event_description}
                    fullWidth
                    onChange={(e) => setEvent_description(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Event Venue</Typography>
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
                    value={event_venue}
                    fullWidth
                    onChange={(e) => setEvent_venue(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Date</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_date"
                    label="event_date"
                    required
                    type="text"
                    placeholder="yyyy-mmm-dd"
                    name="event_date"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_date"
                    value={event_date}
                    fullWidth
                    onChange={(e) => setEvent_date(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Time</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_time"
                    label="event_time"
                    required
                    type="time"
                    name="event_time"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_time"
                    value={event_time}
                    fullWidth
                    onChange={(e) => setEvent_time(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Duration (in hrs)</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="event_duration"
                    label="event_duration"
                    required
                    type="number"
                    name="event_duration"
                    variant="outlined"
                    color="primary"
                    autoComplete="event_duration"
                    value={event_duration}
                    fullWidth
                    multiline
                    onChange={(e) => setEvent_duration(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography style={{color:"#002d12", fontSize:"1.8rem"}}>Number of Volunteers Required</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="no_of_volunteers"
                    label="no_of_volunteers"
                    required
                    type="number"
                    name="no_of_volunteers"
                    variant="outlined"
                    color="primary"
                    autoComplete="no_of_volunteers"
                    value={no_of_volunteers}
                    fullWidth
                    onChange={(e) => setNo_of_volunteers(e.target.value)}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ ml: 28, mt: 1, mb: 1 }}
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

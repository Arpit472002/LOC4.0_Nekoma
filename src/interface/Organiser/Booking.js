import Cards from "../../components/Cards";
import { Grid, Button, Typography, Box, FilledInput } from "@mui/material";
import {BiImageAdd} from 'react-icons/bi';
import './Booking.css'

export default function Booking() {

    const addIcon = {
        width: '100px',
        height: '100px',
        display: 'block',
    };
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
              <Typography style={{ fontSize: "30px", marginTop: "30px" }}>
                Create An Event
              </Typography>
            </Grid>
            <Box
              component="form"
              //onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Event Name</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="eventName"
                    label="Event Name"
                    type="text"
                    name="eventName"
                    variant="outlined"
                    color="primary"
                    autoComplete="eventName"
                    //value={values.age}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
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
                    <label htmlFor="input-img">
                      <BiImageAdd style={addIcon} />
                    </label>
                    <input
                      type="file"
                      name="image"
                      //onChange={(e)=>setImage(e.target.files[0])}
                      id="input-img"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Event Description</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="eventDescription"
                    label="Event Description"
                    required
                    type="text"
                    name="eventDescription"
                    variant="outlined"
                    color="primary"
                    autoComplete="eventDescription"
                    //value={values.gender}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Event Venue</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="eventVenue"
                    label="Event Venue"
                    required
                    type="text"
                    name="eventVenue"
                    variant="outlined"
                    color="primary"
                    autoComplete="eventVenue"
                    //value={values.github_link}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Date</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="date"
                    label="date"
                    required
                    type="text"
                    placeholder="yyyy-mmm-dd"
                    name="date"
                    variant="outlined"
                    color="primary"
                    autoComplete="date"
                    //value={values.stack}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Time</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="time"
                    label="time"
                    required
                    type="time"
                    name="experience"
                    variant="outlined"
                    color="primary"
                    autoComplete="time"
                    //value={values.time}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Duration (in hrs)</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="duration"
                    label="duration"
                    required
                    type="number"
                    name="duration"
                    variant="outlined"
                    color="primary"
                    autoComplete="duration"
                    //value={values.description}
                    fullWidth
                    multiline
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                  <Typography>Volunteers Required</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="volunteers"
                    label="volunteers"
                    required
                    type="text"
                    name="volunteers"
                    variant="outlined"
                    color="primary"
                    autoComplete="volunteers"
                    //value={values.projects}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ ml: 14, mt: 2, mb: 1 }}
                style={{
                  backgroundColor: "#F36F8F",
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

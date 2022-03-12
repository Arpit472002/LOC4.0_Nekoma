import { Grid, Typography, Box, FilledInput, TextField } from "@mui/material";
export default function Blog() {
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Make A Blog For Any Event!
      </Typography>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
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
            {/* <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{ marginTop: "20px", marginLeft: "36px" }}
            >
              <Typography style={{ fontSize: "30px", marginTop: "30px" }}>
              Make A Blog For Any Event!
              </Typography>
            </Grid> */}
            <Box
              component="form"
              //onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "150px" }}>
                  <Typography>Enter Title</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <FilledInput
                    id="title"
                    label="Title"
                    type="text"
                    name="title"
                    variant="outlined"
                    color="primary"
                    autoComplete="title"
                    //value={values.age}
                    fullWidth
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>

              <Grid container direction="row" marginBottom={5}>
                <Grid item sm={6} md={3} style={{ marginLeft: "150px" }}>
                  <Typography>Enter Blog Body</Typography>
                </Grid>
                <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                  <TextField
                    id="blog"
                    label="Blog"
                    type="text"
                    name="blog"
                    variant="outlined"
                    color="primary"
                    //value={values.age}
                    fullWidth
                    multiline
                    rows={8}
                    column={10}
                    //onChange={handleChanges}
                    style={{ width: "250px" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

import { Grid, Button, Typography, Box, FilledInput } from "@mui/material";
import { useState } from "react";
import { URL } from "../utils/api";

export default function Supplier() {
  const [supplier_name, setSupplier_name] = useState("");
  const [supplier_location, setSupplier_location] = useState("");
  const [amount_left_to_be_paid, setAmount_left_to_be_paid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createSupplier();
  };
  const token = localStorage.getItem("token");  
  async function createSupplier() {
    try {
      let result = await fetch(URL + "scmapp/supplier/", {
        method: "POST",
        body: JSON.stringify({
          supplier_name: supplier_name,
          supplier_location: supplier_location,
          amount_left_to_be_paid: amount_left_to_be_paid,
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
      <Typography variant="h5" textAlign="center">
        Suppliers for the NGO
      </Typography>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          style={{ gap: 15 }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container direction="row" marginBottom={5}>
              <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                <Typography style={{ color: "#002d12", fontSize: "1.8rem" }}>
                  Supplier Name
                </Typography>
              </Grid>
              <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                <FilledInput
                  id="supplier_name"
                  label="Supplier Name"
                  type="text"
                  name="supplier_name"
                  variant="outlined"
                  color="primary"
                  autoComplete="supplier_name"
                  value={supplier_name}
                  fullWidth
                  onChange={(e) => setSupplier_name(e.target.value)}
                  style={{ width: "250px" }}
                />
              </Grid>
            </Grid>

            <Grid container direction="row" marginBottom={5}>
              <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                <Typography style={{ color: "#002d12", fontSize: "1.8rem" }}>
                  Supplier Location
                </Typography>
              </Grid>
              <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                <FilledInput
                  id="supplier_location"
                  label="Supplier Location"
                  type="text"
                  name="supplier_location"
                  variant="outlined"
                  color="primary"
                  autoComplete="supplier_location"
                  value={supplier_location}
                  fullWidth
                  onChange={(e) => setSupplier_location(e.target.value)}
                  style={{ width: "250px" }}
                />
              </Grid>
            </Grid>

            <Grid container direction="row" marginBottom={5}>
              <Grid item sm={6} md={3} style={{ marginLeft: "46px" }}>
                <Typography style={{ color: "#002d12", fontSize: "1.8rem" }}>
                  Amount Left to be Paid
                </Typography>
              </Grid>
              <Grid item sm={6} md={3} style={{ marginLeft: "15px" }}>
                <FilledInput
                  id="amount_left_to_be_paid"
                  label="amount_left_to_be_paid"
                  type="text"
                  name="amount_left_to_be_paid"
                  variant="outlined"
                  color="primary"
                  autoComplete="amount_left_to_be_paid"
                  value={amount_left_to_be_paid}
                  fullWidth
                  onChange={(e) => setAmount_left_to_be_paid(e.target.value)}
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
      </Grid>
    </>
  );
}

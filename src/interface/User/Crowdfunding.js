import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"rgb(243,111,143,0.29)"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://rzp.io/l/1GpMHVP" target="_/blank" style={{textDecoration:"none"}}>
          <Button size="small" color="primary">
            Share
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

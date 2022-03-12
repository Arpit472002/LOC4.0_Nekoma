import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { BiDonateHeart } from 'react-icons/bi'
import "./Header.css";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ height: "100%"}}
    >
      <List>
        <Link className="mobileDrawer" to={`/`} style={{textDecoration:"none"}}>
          <ListItem button key="home">
            <ListItemIcon>
              <HiOutlineArrowNarrowRight className="mobileDrawer" />
            </ListItemIcon>
            <ListItemText>
              <span className="mobileDrawer" style={{fontSize:"25px"}}>Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        {["CrowdfundingUser", "Volunteer", "Maps"].map((text, index) => (
          <Link className="mobileDrawer" to={`/${text.toLowerCase()}`} style={{textDecoration:"none"}}>
            <ListItem button key={text} >
              <ListItemIcon>
                <HiOutlineArrowNarrowRight className="mobileDrawer" />
              </ListItemIcon>
              <ListItemText>
                <span className="mobileDrawer" style={{fontSize:"25px"}}>{text}</span>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      style={{ background: "transparent", boxShadow: "none",paddingBottom:"30px" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <BiDonateHeart style={{ fontSize: "5rem", color: "black" }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <React.Fragment key={anchor}>
              <Button
                style={{ fontSize: "2rem" }}
                size="large"
                color="inherit"
                onClick={toggleDrawer(anchor, true)}
              >
                <GiHamburgerMenu style={{color:"green"}}/>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div style={{ margin: "auto" }}>
              <Link to="/crowdfundinguser">
                <button className="btn">Crowdfunding</button>
              </Link>
              <Link to="/volunteer">
                <button className="btn">Volunteer</button>
              </Link>
              <Link to="/maps">
                <button className="btn" >Maps</button>
              </Link>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const activeStyle = { color: "orange" };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{ display: "block" }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={NavLink}
        to="/"
        activeStyle={activeStyle}
        exact
        style={{ marginLeft: "-20px" }}
      />
      <BottomNavigationAction
        label="About"
        icon={<InfoIcon />}
        component={NavLink}
        to="/about"
        activeStyle={activeStyle}
        style={{ marginLeft: "-20px" }}
      />
      <BottomNavigationAction
        label="Courses"
        icon={<SchoolIcon />}
        component={NavLink}
        to="/courses"
        activeStyle={activeStyle}
        style={{ marginLeft: "-20px" }}
      />
    </BottomNavigation>
  );
}

import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/joy/Badge";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Logo from "../Icons/Navbar_Logo.png";

export const Header = () => {
  return (
    <div id="header-container">
      <div id="left-content">
        <div style={{ width: "30px", height: "30px" }}>
          <img src={Logo} alt="logo" style={{ width: "100%" }} />
        </div>
        <div>
          <MenuIcon style={{ fill: "#ffff" }} />
        </div>
        <div>
          <h3 id="header-text">Dreams Technologies</h3>
        </div>
      </div>
      <div id="right-content">
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <Badge badgeContent={1} variant="solid">
            <Typography fontSize="xl">💌</Typography>
          </Badge>
        </div>
        <div>
          <Badge badgeContent={1} variant="solid">
            <Typography fontSize="xl">💌</Typography>
          </Badge>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

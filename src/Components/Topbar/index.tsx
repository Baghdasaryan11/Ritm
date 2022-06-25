import classes from "./Topbar.module.scss";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Menu from "../Menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import { Container } from "@mui/material";
import SignIn from "../../Ui/Dialogs/SignIn";

const Topbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [emoji, setEmoji] = useState(false);

  useEffect(() => {
    localStorage.getItem("ritm_token");
    if (localStorage.getItem("ritm_token")) {
      setEmoji(true);
    } else {
      setEmoji(false);
    }
  }, [openDialog]);

  const navigate = useNavigate();
  return (
    <Container maxWidth='xl'>
      <SignIn isOpen={openDialog} setIsOpen={() => setOpenDialog(false)} />
      <div className={classes.Topbar}>
        <Menu isOpen={openDrawer} setIsOpen={() => setOpenDrawer(false)} />
        <h1 onClick={() => navigate("/")}>Ritm</h1>
        <WidgetsIcon
          onClick={() => setOpenDrawer(true)}
          sx={{
            position: "absolute",
            left: "0",
            margin: "10px",
            color: "whitesmoke",
            cursor: "pointer",
          }}
          fontSize={"large"}
        />

        {!emoji ? (
          <p onClick={() => setOpenDialog(true)}>
            Subscribe
            <SentimentSatisfiedOutlinedIcon
              // fontSize='large'
              sx={{
                position: "relative",
                right: "0",
                fontSize: "50px",
                // margin: "10px",
                color: "rgb(235, 192, 50)",
                cursor: "pointer",
              }}
            />
          </p>
        ) : (
          <p onClick={() => setOpenDialog(true)}>
            {localStorage.getItem("ritm_token")}
            <SentimentVerySatisfiedOutlinedIcon
              sx={{
                position: "relative",
                right: "0",
                fontSize: "50px",
                color: "rgb(235, 192, 50)",
                cursor: "pointer",
              }}
            />
          </p>
        )}
      </div>
    </Container>
  );
};

export default Topbar;

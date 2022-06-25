import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

export const isSubscribe = !localStorage.getItem("ritm_token") ? (
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
) : (
  <SentimentVerySatisfiedOutlinedIcon
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
);

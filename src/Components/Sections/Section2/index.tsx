import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import classes from "./UpcomingEvents.module.scss";

const UpcomingEvents = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div
      className={classes.UpcomingEvents}
      style={{ fontFamily: "Montserrat" }}
    >
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: "rgba(14, 11, 15, 0.842)",
            // border: "1px solid whitesmoke",
            margin: "3px 0",
            borderRadius: "10px !important",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke" }} />}
            // aria-controls='panel1bh-content'
            id='panel1bh-header'
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              fontFamily: "Montserrat",
              borderRadius: "10px !important",
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontFamily: "Montserrat",
                color: "whitesmoke",
              }}
              color='whitesmoke'
            >
              General settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              borderRadius: "10px !important",
            }}
          >
            <Typography sx={{ fontFamily: "Montserrat", color: "whitesmoke" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor: "rgba(14, 11, 15, 0.842)",
            // border: "1px solid whitesmoke",
            margin: "3px 0",
            borderRadius: "10px !important",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke" }} />}
            // aria-controls='panel2bh-content'
            id='panel2bh-header'
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              fontFamily: "Montserrat",
              borderRadius: "10px !important",
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontFamily: "Montserrat",
                color: "whitesmoke",
              }}
            >
              Users
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              borderRadius: "10px !important",
            }}
          >
            <Typography sx={{ fontFamily: "Montserrat", color: "whitesmoke" }}>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            backgroundColor: "rgba(14, 11, 15, 0.842)",
            borderRadius: "10px !important",
            // border: "1px solid whitesmoke",
            margin: "3px 0",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke" }} />}
            // aria-controls='panel4bh-content'
            id='panel4bh-header'
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              borderRadius: "10px !important",
              fontFamily: "Montserrat",
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontFamily: "Montserrat",
                color: "whitesmoke",
              }}
            >
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              borderRadius: "10px !important",
            }}
          >
            <Typography sx={{ fontFamily: "Montserrat", color: "whitesmoke" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{
            backgroundColor: "rgba(14, 11, 15, 0.842)",
            // border: "1px solid whitesmoke",
            margin: "3px 0",
            borderRadius: "10px !important",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "whitesmoke" }} />}
            // aria-controls='panel4bh-content'
            id='panel4bh-header'
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              fontFamily: "Montserrat",
              borderRadius: "10px !important",
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontFamily: "Montserrat",
                color: "whitesmoke",
              }}
            >
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "rgba(14, 11, 15, 0.842)",
              borderRadius: "10px !important",
            }}
          >
            <Typography sx={{ fontFamily: "Montserrat", color: "whitesmoke" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={classes.PlaceDetails}>
        <p>
          * Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aperiam modi quas dicta molestiae minus neque
        </p>
        <p>
          * Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aperiam modi quas dicta molestiae minus neque
        </p>
        <p>
          * Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aperiam modi quas dicta molestiae minus neque
        </p>
      </div>
    </div>
  );
};

export default UpcomingEvents;

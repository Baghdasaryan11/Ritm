import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Kong from "../../assets/PartnerCompanies/Kong.jpg";
import Mamba from "../../assets/PartnerCompanies/Mamba.jpg";
import Mamoor from "../../assets/PartnerCompanies/Mamoor.jpg";
import Phoenix from "../../assets/PartnerCompanies/Phoenix.png";
import Pahest33 from "../../assets/PartnerCompanies/Pahest33.jpg";
import Beer_Academy from "../../assets/PartnerCompanies/Beer_Academy.jpg";
import Dargett_Brewpub from "../../assets/PartnerCompanies/Dargett_Brewpub.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "whitesmoke",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
}));

const Partners = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 9, md: 12 }}
      >
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Kong} alt='Kong' width='100%' />
            <h3>Kong</h3>
          </Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Mamba} alt='Mamba' width='100%' />
            <h3>Mamba</h3>
          </Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Mamoor} alt='Mamoor' width='100%' />
            <h3>Mamoor</h3>
          </Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Phoenix} alt='Phoenix' width='100%' />
            <h3>Phoenix</h3>
          </Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Pahest33} alt='Pahest33' width='100%' />
            <h3>Pahest33</h3>
          </Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Beer_Academy} alt='Beer_Academy' width='100%' />
            <h3>Beer Academy</h3>
          </Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item data-aos='flip-left' data-aos-duration='1000'>
            <img src={Dargett_Brewpub} alt='Dargett_Brewpub' width='100%' />
            <h3>Dargett Brewpub</h3>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Partners;

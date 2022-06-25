import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { CategoriesData } from "../../assets/Content/Categories";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
}));

const Category = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data } = CategoriesData.filter(
    (item) => item.path === params.type
  )[0];

  return (
    <Container maxWidth='lg'>
      <h1>Category</h1>
      {
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 9, md: 12 }}
        >
          {data.map((item) => {
            return (
              <Grid item xs={3} sm={3} md={3} key={item.id}>
                <Item onClick={() => navigate(String(item.id))}>
                  <img src={item.img[0]} alt={item.name} width='100%' />
                  <h3>{item.name}</h3>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      }
    </Container>
  );
};

export default Category;

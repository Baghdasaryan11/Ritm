import "./Categories.scss";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { CategoriesData } from "../../assets/Content/Categories";
import { useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "whitesmoke",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// const categories: string[] = [
//   "Bar",
//   "Club",
//   "Pub",
//   "Game Zone",
//   "Billiard",
//   "Beer House",
//   "Resturants",
//   "Loft",
// ];

const Categories = () => {
  const navigate = useNavigate();
  const onItemClickHandler = (path: string) => {
    navigate(path);
  };
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 9, md: 12 }}
      >
        {CategoriesData.map((item) => {
          return (
            <Grid item xs={3} sm={3} md={3} key={item.id}>
              <Item onClick={() => onItemClickHandler(item.path)}>
                <h3>{item.type}</h3>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Categories;

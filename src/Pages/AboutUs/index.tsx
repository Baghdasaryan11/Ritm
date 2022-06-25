import { Container } from "@mui/system";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        border: "1px solid red ",
        height: "100%",
      }}
    >
      <h1>AboutUs</h1>

      <p className='AboutUs'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam
        voluptate voluptates ratione? Deserunt quasi in ipsum porro esse quos
        deleniti repellendus officia! Cumque iste nemo ipsum distinctio est,
        fugiat animi quia adipisci quasi? Pariatur, a itaque rerum tempora dicta
        minima beatae in vero ullam, perspiciatis delectus culpa voluptates,
        minus distinctio cupiditate. Officia sequi nemo beatae quibusdam dolor,
        laudantium modi nam ea adipisci illo ex incidunt eveniet deleniti
        consequuntur, ullam distinctio veritatis vitae eius hic excepturi?
        Facere neque nam cumque impedit a cum laudantium tempore, odit, minima
        molestias enim quis aut veniam perferendis dignissimos animi amet
        obcaecati, unde sed. Accusantium, magnam sequi? Cupiditate deleniti
        voluptas animi veniam dicta, non enim exercitationem.
      </p>

      <h2 className='Relax'>RELAX</h2>
    </Container>
  );
};
export default AboutUs;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

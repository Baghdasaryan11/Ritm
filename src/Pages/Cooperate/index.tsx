import { Container } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "./Cooperate.scss";

const Cooperate = () => {
  return (
    <Container maxWidth='lg' sx={{ border: "1px solid red" }}>
      <h1>Cooperate Page</h1>

      <section className='Cooperate_description'>
        <h2>Description</h2>
        <div>
          <p>
            <CircleIcon fontSize='small' sx={{ marginRight: "5px" }} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            eligendi obcaecati nemo, sunt mollitia, modi rerum necessitatibus
            quasi dolores fugit id sint voluptas sed cumque et consequuntur
            similique, accusantium explicabo.
          </p>
        </div>
        <div>
          <p>
            <CircleIcon fontSize='small' sx={{ marginRight: "5px" }} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            eligendi obcaecati nemo, sunt mollitia, modi rerum necessitatibus
            quasi dolores fugit id sint voluptas sed cumque et consequuntur
            similique, accusantium explicabo.
          </p>
        </div>
        <div>
          <p>
            <CircleIcon fontSize='small' sx={{ marginRight: "5px" }} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            eligendi obcaecati nemo, sunt mollitia, modi rerum necessitatibus
            quasi dolores fugit id sint voluptas sed cumque et consequuntur
            similique, accusantium explicabo.
          </p>
        </div>
        <div>
          <p>
            <CircleIcon fontSize='small' sx={{ marginRight: "5px" }} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            eligendi obcaecati nemo, sunt mollitia, modi rerum necessitatibus
            quasi dolores fugit id sint voluptas sed cumque et consequuntur
            similique, accusantium explicabo.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Cooperate;

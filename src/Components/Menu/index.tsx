import { Box, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import "./Menu.scss";

interface IMenuProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

// const MenuItems: {[key: string]: string} = {
//   "About us"
// }

const Menu = ({ isOpen, setIsOpen }: IMenuProps) => {
  return (
    <Drawer open={isOpen} onClose={setIsOpen}>
      <Box
        height='100vh'
        width={150}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        sx={{
          background: "rgba(14, 11, 15, 0.842)",
          // position: "relative",
        }}
      >
        <CloseIcon
          onClick={setIsOpen}
          fontSize='large'
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: 10,
            right: 10,
          }}
        />
        <Link onClick={setIsOpen} className='Link' to='/about-us'>
          About Us
        </Link>
        <Link onClick={setIsOpen} className='Link' to='/cooperate'>
          Cooperate
        </Link>
        <Link onClick={setIsOpen} className='Link' to='/faq'>
          F.A.Q
        </Link>
        <Link onClick={setIsOpen} className='Link' to='/partners'>
          Partners
        </Link>
        <Link onClick={setIsOpen} className='Link' to='/categories'>
          Catefories
        </Link>
      </Box>
    </Drawer>
  );
};

export default Menu;

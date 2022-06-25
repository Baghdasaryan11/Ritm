import { Container } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import { useParams } from "react-router-dom";
import "./CategoryItem.scss";

import { CategoriesData } from "../../assets/Content/Categories";

const CategoryItem = () => {
  const { id, type } = useParams<string>();

  const data = CategoriesData.filter((item) => item.path === type)[0].data;

  const item = data.filter((item) => item.id === Number(id))[0];
  const wt = item.workTime;

  return (
    <Container maxWidth='lg'>
      <h1 className='CategoryItem_title'>{item.name}</h1>
      <div className='CategoryItem'>
        <img src={item.img} alt={item.name} />
        <div>
          <a
            href={`http://maps.google.com/?q=1200 ${item.address}`}
            rel='noreferrer'
            target='blank'
          >
            <LocationOnIcon />
            {item.address}
          </a>
          <p>{item.desc}</p>
          <a href={`mailto:${item.email}`} rel='noreferrer'>
            {item.email && <MailOutlineTwoToneIcon />}
            {item.email}
          </a>
          <a href={`tel:${item.phone}`} rel='noreferrer'>
            <PhoneIphoneIcon />
            {item.phone}
          </a>
          <span>
            <a
              href={item.socialLinks?.facebook}
              rel='noreferrer'
              target='blank'
            >
              {item.socialLinks?.facebook && <FacebookIcon fontSize='large' />}
            </a>
            <a
              href={item.socialLinks?.instagram}
              rel='noreferrer'
              target='blank'
            >
              {item.socialLinks?.instagram && (
                <InstagramIcon fontSize='large' />
              )}
            </a>
          </span>

          {wt &&
            Object.keys(wt).map((item: string) => {
              return (
                <div className='WorkTimes' key={item}>
                  <p>{item}</p>&nbsp; - &nbsp;<span>{wt[item]}</span>
                </div>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default CategoryItem;

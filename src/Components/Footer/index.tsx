import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2 className={classes.FooterTitle}>Let the Party begin</h2>
        <p>Your opinion is very important to us to improve our product.</p>
      </div>

      <div className={classes.Message}>
        <textarea name='' id='' cols={30} rows={5}></textarea>
        <button>Send</button>
      </div>
    </footer>
  );
};

export default Footer;

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

interface ISignInProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const SignIn = ({ isOpen, setIsOpen }: ISignInProps) => {
  const [value, setValue] = useState<string>("");
  const [hasError, setHasError] = useState(false);

  const fakeSubscribe = () => {
    if (value.trim() === "") {
      setHasError(true);
      return;
    }
    localStorage.setItem("ritm_token", value);
    setIsOpen();
    setValue("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length > 0) {
      setHasError(false);
    }
    setValue(e.target.value);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>It's very easy.</DialogTitle>
        <DialogContent sx={{ minWidth: "300px" }}>
          <TextField
            autoFocus
            error={hasError}
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='standard'
            color='secondary'
            helperText={hasError && "This field can't be empty"}
            required
            value={value}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={setIsOpen} variant='text' color='error'>
            Cancel
          </Button>
          <Button onClick={fakeSubscribe} variant='contained' color='secondary'>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignIn;

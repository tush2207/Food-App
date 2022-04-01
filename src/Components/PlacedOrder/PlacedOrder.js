import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import "./PlacedOrder.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PlacedOrder = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      country: "",
      state: "",
      city: "",
      postal: "",
      address: "",
      Mobileno: "",
      cardno: "",
      cvv: "",
      expiry: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("Required"),
      lname: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      country: Yup.string().required("Enter Country"),
      state: Yup.string().required("Enter State"),
      city: Yup.string().required("Enter City"),
      postal: Yup.string().required("Enter Postal Code").min(6, "Too short"),
      Mobileno: Yup.string()
        .required("Required")
        .max(10, "Must be 10 digits")
        .min(10, "Must be 10 digits"),
      cardno: Yup.string()
        .required("Required")
        .max(12, "Must be 12 digits")
        .min(12, "Must be 12 digits"),
      expiry: Yup.string().required("Required"),
      cvv: Yup.string()
        .required("Required")
        .max(3, "Must be 3 characters")
        .min(3, "Must be 3 characters"),
    }),
  });
  return (
    <div className="form">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h4">Personal Information</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextField
            variant="outlined"
            label="First Name"
            name="fname"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fname}
            className="textfield"
            autoComplete="off"
          />
          {formik.touched.fname && formik.errors.fname ? (
            <div className="error">{formik.errors.fname}</div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextField
            variant="outlined"
            label="Last Name"
            name="lname"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lname}
            className="textfield"
            autoComplete="off"
          />
          {formik.touched.lname && formik.errors.lname ? (
            <div className="error">{formik.errors.lname}</div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="textfield"
            autoComplete="off"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            label="Contact no."
            name="Mobileno"
            type="number"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Mobileno}
            className="textfield"
            autoComplete="off"
          />
          {formik.touched.Mobileno && formik.errors.Mobileno ? (
            <div className="error">{formik.errors.Mobileno}</div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            label="Adderss"
            fullWidth
            className="textfield"
            autoComplete="off"
          />
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">city</InputLabel>

            <Select id="demo-simple-select" label="City">
              <MenuItem value={10}>Mumbai</MenuItem>
              <MenuItem value={20}>Pune</MenuItem>
              <MenuItem value={30}>Nashik</MenuItem>
              <MenuItem value={30}>Nagpur</MenuItem>
              <MenuItem value={30}>Solapur</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>

            <Select id="demo-simple-select" label="State">
              <MenuItem value={10}>Maharashtra</MenuItem>
              <MenuItem value={20}>Karnataka</MenuItem>
              <MenuItem value={30}>Delhi</MenuItem>
              <MenuItem value={30}>MP</MenuItem>
              <MenuItem value={30}>UP</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>

            <Select id="demo-simple-select" label="State">
              <MenuItem value={10}>India</MenuItem>
              <MenuItem value={20}>Brazil</MenuItem>
              <MenuItem value={30}>China</MenuItem>
              <MenuItem value={30}> United State</MenuItem>
              <MenuItem value={30}>Pakistan</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <TextField
            variant="outlined"
            label="Postal Code"
            name="postal"
            type="number"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.postal}
            className="textfield"
          />
          {formik.touched.postal && formik.errors.postal ? (
            <div className="error">{formik.errors.postal}</div>
          ) : null}
        </Grid>

        <hr />

        <br/>

        {/* <div > */}
        <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Payment Details</Typography>



          <FormControl>
            {/* <FormLabel className="Pay" id="demo-radio-buttons-group-label">
              Payment Mode
            </FormLabel> */}
            <RadioGroup className="Pay"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="COD"
              />
              <FormControlLabel
                value="male"

                control={<Radio />}
                label="Online"
              />
            </RadioGroup>
          </FormControl>
        {/* </div> */}
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            label="Card No."
            name="cardno"
            type="number"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardno}
            className="textfield"
            autoComplete="off"
          />
          {formik.touched.cardno && formik.errors.cardno ? (
            <div className="error">{formik.errors.cardno}</div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextField
            variant="outlined"
            label="CVV"
            name="cvv"
            type="password"
            placeholder="XXX"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvv}
            className="textfield"
            autoComplete="off"
          ></TextField>
          {formik.touched.cvv && formik.errors.cvv ? (
            <div className="error">{formik.errors.cvv}</div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextField
            type="number"
            variant="outlined"
            label="Expiry"
            name="expiry"
            placeholder="03/26"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.expiry}
            className="textfield"
            autoComplete="off"
          ></TextField>
          {formik.touched.expiry && formik.errors.expiry ? (
            <div className="error">{formik.errors.expiry}</div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          {/* <Link to="/success"></Link> */}
          <Button
            type="submit"
            variant="contained"
            onClick={handleClickOpen}
            fullWidth
          >
            SUBMIT
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want to place the order?"}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>

              <Link to="/Thankyou">
                <Button>CONFIRM</Button>
              </Link>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlacedOrder;

import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
import {
  addWhatsapp,
  deleteWhatsapp,
  getWhatsapp,
} from "../../../config/services";
import { LoadingButton } from "@mui/lab";

export default function WhatsApp() {
  const [values, setValues] = React.useState({
    number: 0,
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const subscribe = () =>
      getWhatsapp().subscribe((data) => {
        console.log(data);
        if (data != undefined) {
          setValues(data);
        }
      });
    subscribe();
    const unsubscribe = subscribe().unsubscribe();
    return unsubscribe;
  }, [setLoading]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const addNumber = () => {
    setLoading(true);
    addWhatsapp({ number: values.number })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const deletenumber = () => {
    setLoading(true);
    deleteWhatsapp()
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
        setValues({number: 0})
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="number"
            variant="outlined"
            required
            fullWidth
            label="Whatsapp number"
            value={values.number}
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadingButton
            fullWidth
            loading={loading}
            variant="contained"
            color="primary"
            disableElevation
            onClick={addNumber}
          >
            {"Add Number"}
          </LoadingButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadingButton
            fullWidth
            loading={loading}
            variant="contained"
            color="error"
            disableElevation
            onClick={deletenumber}
          >
            {"Delete Number"}
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
}

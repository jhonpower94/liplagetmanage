import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { Grid, TextField } from "@mui/material";
import { collectionData, docData } from "rxfire/firestore";
import { tap } from "rxjs";
import CustomizedSnackbars from "../../alert";

export default function SetwalletAddresses() {
  return (
    <Grid container spacing={2}>
      {["BNB", "BTC", "ETH", "TRX", "USDT(ERC20)", "USDT(TRC20)"].map(
        (wallet, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <WalletInput title={wallet} />
          </Grid>
        )
      )}
    </Grid>
  );
}

export function WalletInput({ title }) {
  const [wallet, setWallet] = React.useState({
    address: "fdfdsfds",
    title: title,
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  React.useEffect(() => {
    const subscribe = () => {
      const querydoc = doc(db, `walletaddresses/${title}`);
      return docData(querydoc).subscribe((data) => {
        console.log(data);
        setWallet({ ...wallet, address: data.address });
      });
    };

    subscribe();
    return subscribe().unsubscribe();
  }, [setWallet]);

  const handleChange = (event) => {
    setWallet({ ...wallet, address: event.target.value });
    //console.log(event.target.value);
    const querydoc = doc(db, `walletaddresses/${title}`);
    setDoc(querydoc, { address: event.target.value }, { merge: true }).then(
      () => {
        setOpenSnackbar(true);
      }
    );
  };

  return (
    <>
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        severity="success"
        message={`${title} address uploaded successfully`}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="outlined-controlled"
        label={title}
        value={wallet.address}
        onChange={handleChange}
        name={title}
      />
    </>
  );
}

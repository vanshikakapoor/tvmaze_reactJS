import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchNetworks = createAsyncThunk("networks/fetch" , async() => {
    const response = await axios.get('http://localhost:3005/networks');
    return response;
});

export {fetchNetworks};
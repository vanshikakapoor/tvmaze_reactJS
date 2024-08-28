import { configureStore } from "@reduxjs/toolkit";
import { NetworkRecuder } from "./NetworkSlice";

const store = configureStore({
    reducer: {
        networks: NetworkRecuder
    }
});

export {store};
export * from '../Thunks/FetchNetworks';

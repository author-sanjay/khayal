import { HomeOutlined } from "@material-ui/icons";
import { width } from "@mui/system";
import React from "react";
import Homeleft from "./Homeleft";
import Homemiddel from "./Homemiddel";
import Homeright from "./Homeright";

const Home = () => {
  return (
    <div className="flex flex-col bg-hotorange" style={{width:"100%"}}>
      <div className="flex  justify-between">
        <Homeleft />

        <Homemiddel />

        <Homeright />
      </div>
      
    </div>
  );
};

export default Home;

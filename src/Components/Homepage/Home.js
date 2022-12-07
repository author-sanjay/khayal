import { HomeOutlined } from "@material-ui/icons";
import { width } from "@mui/system";
import React from "react";
import Homeleft from "./Homeleft";
import Homemiddel from "./Homemiddel";
import Homeright from "./Homeright";

const Home = () => {
  return (
    <div className="flex w-full flex-col bg-hotorange">
      <div className="flex xl:mx-40 justify-between">
        <Homeleft />

        <Homemiddel />

        <Homeright />
      </div>
    </div>
  );
};

export default Home;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import { Tab, Tabs } from "@mui/material";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { Home } from "../../home/home";
import { Login } from "../../login/login";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("home");

  function navigateTo(page: any) {
    setCurrentPage(page);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "white" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src={logo} alt="" />
          </div>

          <Tabs>
            <Tab onClick={() => navigateTo("home")} label="Home" />
            <Tab label="Sobre" />
            <Tab label="Serviços" />
            <Tab label="Comprar" />
            <Tab label="Contato" />
          </Tabs>

          <div>
            <Button onClick={() => navigateTo("login")} color="primary">
              Login
            </Button>
            <Button color="secondary">Registre-se</Button>
          </div>

        </Toolbar>
      </AppBar>
        {currentPage === "login" && <Home />}
        {currentPage === "login" && <Login />}
    </Box>
  );
}
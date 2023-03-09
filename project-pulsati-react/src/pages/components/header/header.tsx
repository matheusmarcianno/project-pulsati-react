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


interface HeaderProps {
  setCurrentPage: (currentPage: string) => void; 
}

export function Header(props: HeaderProps) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{  display: "flex", flexDirection:'row', alignItems: 'center', height: '10vh', background: "white" }} position="static">
        <Toolbar sx={{ display: "flex", flexDirection:"row", width:'100vw', justifyContent: "space-between" }}>
          <div>
            <img src={logo} alt="" />
          </div>

          <Tabs>
            <Tab onClick={() => props.setCurrentPage("home")} label="Home" />
            <Tab label="Sobre" />
            <Tab label="Serviços" />
            <Tab label="Comprar" />
            <Tab label="Contato" />
          </Tabs>

          <div>
            <Button onClick={() => props.setCurrentPage("login")} color="primary">
              Entrar
            </Button>
            <Button color="secondary">Registre-se</Button>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
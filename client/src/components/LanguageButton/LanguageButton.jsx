import React, { useState } from "react";
import i18next from "i18next";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@material-ui/icons/Language";
import "flag-icons";
import {Languages} from 'lucide-react'

export default function BasicMenu() {
  const languages = [
    {
      code: "fr",
      name: "Français",
      country_code: "fr",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "tr",
      name: "Türkçe",
      country_code: "tr",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentLanguageCode = Cookies.get("i18next") || "en";

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Languages className="hover:text-red-400 transition"/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages.map(({ code, name, country_code }) => {
          return (
            <MenuItem
              disabled={code === currentLanguageCode}
              onClick={() => {
                i18next.changeLanguage(code).then(handleClose());
              }}
            >
              <span
                style={{ marginRight: "2px", marginLeft: "2px" }}
                className={`fi fi-${country_code}`}
              ></span>
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

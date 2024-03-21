import { useState } from "react";
import {
  Drawer as MUIDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "./Topbar";
import { useRouter } from "next/navigation";

const Drawer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
        disableRipple
      >
        <MenuIcon
          sx={{
            color: "common.black",
          }}
        />
      </IconButton>

      <MUIDrawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {pages.map((page, index) => (
              <ListItem
                key={index}
                onClick={() => router.push(page.url)}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MUIDrawer>
    </>
  );
};

export default Drawer;

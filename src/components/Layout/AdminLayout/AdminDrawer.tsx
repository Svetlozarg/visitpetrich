"use client";
import { useState } from "react";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  AppBar,
  IconButton,
  Typography,
  Drawer,
  useTheme,
  Stack,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuIcon from "@mui/icons-material/Menu";
import LuggageIcon from "@mui/icons-material/Luggage";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "@/services/Auth/auth";

const ADMIN_PAGES = [
  {
    title: "Начало",
    path: "/admin/dashboard",
    icon: <HomeIcon />,
  },
  {
    title: "Събития",
    path: "/admin/dashboard/events",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Настаняване",
    path: "/admin/dashboard/accommodation",
    icon: <LuggageIcon />,
  },
];
const DRAWER_WIDTH = 240;

interface AdminDrawerProps {
  children: React.ReactNode;
}

const AdminDrawer: React.FC<AdminDrawerProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Link href="/">
          <Stack direction="row" justifyContent="center" alignItems="center">
            <ArrowLeftIcon />
            <Typography variant="h5">Назад към сайта</Typography>
          </Stack>
        </Link>
      </Toolbar>

      <Divider />
      <List>
        {ADMIN_PAGES.map((page) => (
          <ListItem
            key={page.title}
            sx={{
              bgcolor: pathname === page.path ? theme.palette.grey[400] : "",
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => router.push(`${page.path}`, { scroll: true })}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component="h6" variant="h4" noWrap>
              {pathname === "/admin/dashboard"
                ? "Начало"
                : pathname === "/admin/dashboard/events"
                ? "Събития"
                : "Настаняване"}
            </Typography>

            <IconButton color="inherit" onClick={signOut}>
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AdminDrawer;

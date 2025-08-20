// // src/components/Home.js
// import { useEffect, useState } from "react";
// import { Outlet, useNavigate, Link } from "react-router-dom";
// import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CircularProgress from '@mui/material/CircularProgress';
// import "./home.css";

// // Custom theme with brand colors
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#ff0000', // Red
//         },
//         secondary: {
//             main: '#f5f5f5', // Light Gray
//         },
//         text: {
//             primary: '#000000', // Black
//             secondary: '#666666', // Gray
//         },
//         background: {
//             default: '#ffffff', // White
//             paper: '#f5f5f5', // Light Gray
//         },
//     },
//     typography: {
//         fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
//         button: {
//             textTransform: 'none', // Keep button text as is
//             fontWeight: 500,
//         },
//     },
// });

// export const Home = () => {
//     const navigate = useNavigate();
//     const [activeTab, setActiveTab] = useState(-1);
//     const [loading, setLoading] = useState(true);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//     const userName = sessionStorage.getItem("userName") || "Guest";

//     useEffect(() => {
//         // Simulate loading data
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, []);

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleLogout = () => {
//         // Clear session storage
//         sessionStorage.clear();
//         // Navigate to login page
//         navigate("/login");
//     };

//     const navigateTo = (path, tabIndex) => {
//         setActiveTab(tabIndex);
//         navigate(path);
//     };

//     if (loading) {
//         return (
//             <ThemeProvider theme={theme}>
//                 <Box className="loading-container">
//                     <CircularProgress color="primary" />
//                     <Typography variant="h6" sx={{ mt: 2 }}>
//                         Loading your real estate dashboard...
//                     </Typography>
//                 </Box>
//             </ThemeProvider>
//         );
//     }

//     return (
//         <ThemeProvider theme={theme}>
//             <Box className="home-container">
//                 <AppBar position="static" color="secondary" elevation={1}>
//                     <Container maxWidth="xl">
//                         <Toolbar disableGutters>
//                             <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//                                 <img src="/logo.png" alt="Real Estate Logo" className="header-logo" />
//                                 <Typography
//                                     variant="h6"
//                                     component="div"
//                                     sx={{ ml: 2, color: 'text.primary', display: { xs: 'none', md: 'flex' } }}
//                                 >
//                                     Premium Real Estate
//                                 </Typography>
//                             </Box>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <Typography variant="body1" sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}>
//                                     Welcome, {userName}
//                                 </Typography>
//                                 <IconButton
//                                     size="large"
//                                     onClick={handleMenu}
//                                     color="inherit"
//                                     aria-label="account"
//                                     aria-controls="menu-appbar"
//                                     aria-haspopup="true"
//                                 >
//                                     <AccountCircleIcon />
//                                 </IconButton>
//                                 <Menu
//                                     id="menu-appbar"
//                                     anchorEl={anchorEl}
//                                     anchorOrigin={{
//                                         vertical: 'bottom',
//                                         horizontal: 'right',
//                                     }}
//                                     keepMounted
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     open={open}
//                                     onClose={handleClose}
//                                 >
//                                     <MenuItem component={Link} to="/" onClick={handleClose}>
//                                         <HomeIcon fontSize="small" sx={{ mr: 1 }} />
//                                         Home
//                                     </MenuItem>
//                                     <MenuItem component={Link} to="/about" onClick={handleClose}>
//                                         <InfoIcon fontSize="small" sx={{ mr: 1 }} />
//                                         About
//                                     </MenuItem>
//                                     <MenuItem onClick={() => { handleClose(); handleLogout(); }}>
//                                         <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
//                                         Logout
//                                     </MenuItem>
//                                 </Menu>
//                             </Box>
//                         </Toolbar>
//                     </Container>
//                 </AppBar>

//                 <Box className="nav-tabs">
//                     <Button
//                         className={activeTab === 0 ? "tab-selected" : "tab-button"}
//                         onClick={() => navigateTo("propertiesForSale", 0)}
//                     >
//                         Properties For Sale
//                     </Button>
//                     <Button
//                         className={activeTab === 1 ? "tab-selected" : "tab-button"}
//                         onClick={() => navigateTo("requiredProperties", 1)}
//                     >
//                         Properties For Purchase
//                     </Button>
//                     <Button
//                         className={activeTab === 2 ? "tab-selected" : "tab-button"}
//                         onClick={() => navigateTo("favoriteProperties", 2)}
//                     >
//                         Favorite Properties
//                     </Button>
//                 </Box>

//                 <Container className="main-content">
//                     {activeTab === -1 ? (
//                         <WelcomeDashboard />
//                     ) : (
//                         <Outlet />
//                     )}
//                 </Container>
//             </Box>
//         </ThemeProvider>
//     );
// };

// // Welcome Dashboard Component
// const WelcomeDashboard = () => {
//     return (
//         <Box className="welcome-dashboard">
//             <Typography variant="h4" component="h1" gutterBottom>
//                 Welcome to Premium Real Estate
//             </Typography>
//             <Typography variant="body1" paragraph>
//                 Your trusted partner in finding the perfect property. Browse your listings, search for new properties,
//                 or check your favorites - all in one place.
//             </Typography>
//             <Box className="dashboard-stats">
//                 <Box className="stat-card">
//                     <Typography variant="h3">24</Typography>
//                     <Typography variant="body2">Active Listings</Typography>
//                 </Box>
//                 <Box className="stat-card">
//                     <Typography variant="h3">12</Typography>
//                     <Typography variant="body2">New Properties</Typography>
//                 </Box>
//                 <Box className="stat-card">
//                     <Typography variant="h3">8</Typography>
//                     <Typography variant="body2">Saved Favorites</Typography>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import "./home.css";

// Custom theme with brand colors
const theme = createTheme({
    palette: {
        primary: {
            main: '#212121', // Black
        },
        secondary: {
            main: '#f5f5f5', // Light Gray
        },
        text: {
            primary: '#000000', // Black
            secondary: '#666666', // Gray
        },
        background: {
            default: '#ffffff', // White
            paper: '#f5f5f5', // Light Gray
        },
        error: {
            main: '#e53935', // Red accent
        }
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
        button: {
            textTransform: 'none', // Keep button text as is
            fontWeight: 500,
        },
    },
});

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#000000', // Changed to black
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const Logo = styled('img')({
    height: '40px',
    marginRight: '12px',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
});

const NavButton = styled(Button)(({ theme, selected }) => ({
    borderRadius: '8px',
    padding: '10px 16px',
    margin: '0 8px',
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    backgroundColor: selected ? '#e53935' : 'transparent',
    color: selected ? '#ffffff' : '#212121',
    '&:hover': {
        backgroundColor: selected ? '#d32f2f' : 'rgba(229, 57, 53, 0.08)',
        transform: 'translateY(-3px)',
        boxShadow: selected ? '0 6px 12px rgba(229, 57, 53, 0.2)' : 'none',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
        transform: 'translateX(-100%)',
    },
    '&:hover::before': {
        transform: 'translateX(100%)',
        transition: 'all 0.7s ease',
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: '#ffffff',
    height: '100%',
    '&:hover': {
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
        transform: 'translateY(-5px)',
    },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: '#212121',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: '0',
        width: '40%',
        height: '3px',
        backgroundColor: '#e53935',
        borderRadius: '2px',
    },
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)',
}));

export const Home = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(-1);
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const userName = sessionStorage.getItem("userName") || "Guest";
    const [fadeIn, setFadeIn] = useState(false);
    
    useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
            setLoading(false);
            // Trigger fade-in animation after loading
            setTimeout(() => setFadeIn(true), 100);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleLogout = () => {
        // Clear session storage
        sessionStorage.clear();
        // Navigate to login page
        navigate("/login");
    };
    
    const navigateTo = (path, tabIndex) => {
        setActiveTab(tabIndex);
        navigate(path);
    };
    
    if (loading) {
        return (
            <ThemeProvider theme={theme}>
                <LoadingContainer>
                    <CircularProgress
                        color="error"
                        size={60}
                        thickness={4}
                        sx={{
                            boxShadow: '0 0 20px rgba(229, 57, 53, 0.2)',
                            borderRadius: '50%',
                            p: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)'
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 3,
                            fontWeight: 500,
                            color: '#212121',
                            animation: 'pulse 1.5s infinite ease-in-out',
                            '@keyframes pulse': {
                                '0%, 100%': { opacity: 0.7 },
                                '50%': { opacity: 1 }
                            }
                        }}
                    >
                        Loading your real estate dashboard...
                    </Typography>
                </LoadingContainer>
            </ThemeProvider>
        );
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Fade in={fadeIn} timeout={800}>
                <Box className="home-container" sx={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background decorative elements */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '10%',
                            right: '5%',
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(229,57,53,0.03) 0%, rgba(229,57,53,0) 70%)',
                            animation: 'float 15s infinite ease-in-out',
                            '@keyframes float': {
                                '0%, 100%': { transform: 'translate(0, 0)' },
                                '50%': { transform: 'translate(30px, -30px)' },
                            },
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '5%',
                            width: '250px',
                            height: '250px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(158,158,158,0.05) 0%, rgba(158,158,158,0) 70%)',
                            animation: 'float 12s infinite ease-in-out reverse',
                        }}
                    />
                    
                    <StyledAppBar position="sticky" elevation={0}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters sx={{ py: 1 }}>
                                <LogoContainer sx={{ flexGrow: 1 }}>
                                    <HomeWorkIcon
                                        sx={{
                                            fontSize: 36,
                                            color: '#ffffff', // Changed to white
                                            mr: 1,
                                            filter: 'drop-shadow(0 2px 4px rgba(229, 57, 53, 0.3))',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.1) rotate(5deg)',
                                            },
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#ffffff', // Changed to white
                                            display: { xs: 'none', md: 'flex' }
                                        }}
                                    >
                                        Premium Real Estate
                                    </Typography>
                                </LogoContainer>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', sm: 'block' },
                                            fontWeight: 500,
                                            color: '#ffffff' // Changed to white
                                        }}
                                    >
                                        Welcome, {userName}
                                    </Typography>
                                    <IconButton
                                        size="large"
                                        onClick={handleMenu}
                                        color="inherit"
                                        aria-label="account"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Changed to semi-transparent white
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Changed hover color
                                                transform: 'scale(1.05)',
                                            }
                                        }}
                                    >
                                        <AccountCircleIcon sx={{ color: '#ffffff' }} /> {/* Changed to white */}
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            elevation: 3,
                                            sx: {
                                                borderRadius: '12px',
                                                mt: 1.5,
                                                minWidth: 180,
                                                overflow: 'visible',
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                    >
                                        {/* <MenuItem
                                            component={Link}
                                            to="/home"
                                            onClick={handleClose}
                                            sx={{
                                                py: 1.5,
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(229, 57, 53, 0.08)',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <HomeIcon fontSize="small" sx={{ mr: 1.5, color: '#212121' }} />
                                            Home
                                        </MenuItem> */}
                                        <MenuItem
                                            component={Link}
                                            to="/about"
                                            onClick={handleClose}
                                            sx={{
                                                py: 1.5,
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(229, 57, 53, 0.08)',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <InfoIcon fontSize="small" sx={{ mr: 1.5, color: '#212121' }} />
                                            About
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => { handleClose(); handleLogout(); }}
                                            sx={{
                                                py: 1.5,
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(229, 57, 53, 0.08)',
                                                    transform: 'translateX(5px)',
                                                }
                                            }}
                                        >
                                            <LogoutIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </StyledAppBar>
                    
                    <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
                        <Box
                            className="nav-tabs"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                mb: 4,
                                p: 1,
                                borderRadius: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            <Grow in={true} timeout={800}>
                                <Box>
                                    <NavButton
                                        selected={activeTab === 0}
                                        onClick={() => navigateTo("propertiesForSale", 0)}
                                        startIcon={<HomeIcon />}
                                    >
                                        Properties For Sale
                                    </NavButton>
                                </Box>
                            </Grow>
                            
                            <Grow in={true} timeout={1000}>
                                <Box>
                                    <NavButton
                                        selected={activeTab === 1}
                                        onClick={() => navigateTo("requiredProperties", 1)}
                                        startIcon={<SearchIcon />}
                                    >
                                        Properties For Purchase
                                    </NavButton>
                                </Box>
                            </Grow>
                            
                            <Grow in={true} timeout={1200}>
                                <Box>
                                    <NavButton
                                        selected={activeTab === 2}
                                        onClick={() => navigateTo("favoriteProperties", 2)}
                                        startIcon={<FavoriteIcon />}
                                    >
                                        Favorite Properties
                                    </NavButton>
                                </Box>
                            </Grow>
                        </Box>
                        
                        <Box
                            className="main-content"
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                p: { xs: 2, md: 4 },
                                minHeight: '60vh',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
                                }
                            }}
                        >
                            {activeTab === -1 ? (
                                <WelcomeDashboard />
                            ) : (
                                <Outlet />
                            )}
                        </Box>
                    </Container>
                    
                    {/* Footer */}
                    <Box
                        component="footer"
                        sx={{
                            py: 3,
                            px: 2,
                            mt: 'auto',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)',
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Container maxWidth="xl">
                            <Typography
                                variant="body2"
                                align="center"
                                sx={{
                                    color: '#757575',
                                    fontWeight: 500,
                                }}
                            >
                                © {new Date().getFullYear()} Premium Real Estate | All Rights Reserved
                            </Typography>
                        </Container>
                    </Box>
                </Box>
            </Fade>
        </ThemeProvider>
    );
};

// Welcome Dashboard Component
const WelcomeDashboard = () => {
    return (
        <Fade in={true} timeout={800}>
            <Box className="welcome-dashboard">
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-8px',
                            left: 0,
                            width: '60px',
                            height: '4px',
                            backgroundColor: '#e53935',
                            borderRadius: '2px',
                        }
                    }}
                >
                    Welcome to Premium Real Estate
                </Typography>
                
                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        fontSize: '1.1rem',
                        maxWidth: '800px',
                        lineHeight: 1.6,
                        color: '#424242',
                        mb: 5
                    }}
                >
                    Your trusted partner in finding the perfect property. Browse your listings, search for new properties,
                    or check your favorites - all in one place.
                </Typography>
                
                <Grid container spacing={3} className="dashboard-stats">
                    <Grid item xs={12} sm={4}>
                        <Grow in={true} timeout={800}>
                            <StyledCard>
                                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            mb: 2,
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(229, 57, 53, 0.1)',
                                            margin: '0 auto 16px',
                                        }}
                                    >
                                        <HomeIcon sx={{ fontSize: 30, color: '#e53935' }} />
                                    </Box>
                                    <StatNumber variant="h3">24,376</StatNumber>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#757575',
                                            fontWeight: 500,
                                            mt: 1,
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        Active Listings
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grow>
                    </Grid>
                    
                    <Grid item xs={12} sm={4}>
                        <Grow in={true} timeout={1000}>
                            <StyledCard>
                                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            mb: 2,
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(229, 57, 53, 0.1)',
                                            margin: '0 auto 16px',
                                        }}
                                    >
                                        <SearchIcon sx={{ fontSize: 30, color: '#e53935' }} />
                                    </Box>
                                    <StatNumber variant="h3">259</StatNumber>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#757575',
                                            fontWeight: 500,
                                            mt: 1,
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        New Properties
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grow>
                    </Grid>
                    
                    <Grid item xs={12} sm={4}>
                        <Grow in={true} timeout={1200}>
                            <StyledCard>
                                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            mb: 2,
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(229, 57, 53, 0.1)',
                                            margin: '0 auto 16px',
                                        }}
                                    >
                                        <FavoriteIcon sx={{ fontSize: 30, color: '#e53935' }} />
                                    </Box>
                                    <StatNumber variant="h3">16,328</StatNumber>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#757575',
                                            fontWeight: 500,
                                            mt: 1,
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        Saved Favorites
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grow>
                    </Grid>
                </Grid>
                
                {/* Featured Properties Section */}
                <Box sx={{ mt: 6 }}>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: 600,
                            mb: 3,
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-6px',
                                left: 0,
                                width: '40px',
                                height: '3px',
                                backgroundColor: '#e53935',
                                borderRadius: '2px',
                            }
                        }}
                    >
                        Featured Properties
                    </Typography>
                    
                    <Box
                        sx={{
                            p: 3,
                            borderRadius: '12px',
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            textAlign: 'center',
                            border: '1px dashed rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <Typography variant="body1" color="text.secondary">
                            Select a category from the navigation tabs above to view properties
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
};

export default Home;
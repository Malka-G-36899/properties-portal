
//the origional
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Divider,
  Fade,
  Zoom,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  AppBar,
  Toolbar,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useScrollTrigger
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SearchIcon from '@mui/icons-material/Search';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "85vh",
  display: "flex",
  alignItems: "center",
  backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%), url('/images/hands.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#ffffff",
  overflow: "hidden",
  backgroundColor: '#000000', // Changed from gradient to black
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
    zIndex: 1,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "70vh",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
    "& .feature-icon": {
      transform: "scale(1.1) rotate(5deg)",
      color: "#e53935",
    },
    "& .feature-media": {
      transform: "scale(1.05)",
    }
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  backgroundColor: "rgba(229, 57, 53, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: 40,
    color: "#e53935",
    transition: "all 0.3s ease",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(1.5, 4),
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "0 6px 20px rgba(229, 57, 53, 0.2)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#e53935",
  color: "#ffffff",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
    transform: "translateX(-100%)",
  },
  "&:hover": {
    backgroundColor: "#d32f2f",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(229, 57, 53, 0.3)",
    "&::before": {
      transform: "translateX(100%)",
      transition: "all 0.7s ease",
    },
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(1.5, 4),
  textTransform: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#212121",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#ffffff",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
}));

const PropertyTypeCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  height: "100%",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    "& .property-type-media": {
      transform: "scale(1.05)",
    },
    "& .property-type-icon": {
      // backgroundColor: "#e53935",
      color: "#ffffff",
    }
  },
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
    "& .stats-number": {
      color: "#e53935",
    },
  },
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.12)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    background: "red",
  },
}));

const Logo = styled(HomeWorkIcon)(({ theme }) => ({
  fontSize: 40,
  color: "#ffffff",
  marginRight: theme.spacing(1.5),
  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "16px",
  padding: theme.spacing(1, 2),
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)",
  },
}));

const AuthButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(1, 3),
  textTransform: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
  marginLeft: theme.spacing(1),
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const Welcome = () => {
  const [loaded, setLoaded] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [testimonialVisible, setTestimonialVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false); // New state for FAQ visibility
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Animation controls
  const featuresControls = useAnimation();
  const statsControls = useAnimation();
  const testimonialControls = useAnimation();
  const faqControls = useAnimation();
  const propertyTypeControls = useAnimation();
  const navigate=useNavigate(); 

  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [testimonialRef, testimonialInView] = useInView({ threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ threshold: 0.2 });
  const [propertyTypeRef, propertyTypeInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!featuresInView) {
      featuresControls.start({ opacity: 0, y: 20 });
    }
  }, [featuresControls, featuresInView]);

  useEffect(() => {
    if (statsInView) {
      statsControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!statsInView) {
      statsControls.start({ opacity: 0, y: 20 });
    }
  }, [statsControls, statsInView]);

  useEffect(() => {
    if (testimonialInView) {
      testimonialControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!testimonialInView) {
      testimonialControls.start({ opacity: 0, y: 20 });
    }
  }, [testimonialControls, testimonialInView]);

  useEffect(() => {
    if (faqInView) {
      faqControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!faqInView) {
      faqControls.start({ opacity: 0, y: 20 });
    }
  }, [faqControls, faqInView]);

  useEffect(() => {
    if (propertyTypeInView) {
      propertyTypeControls.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } });
    }
    if (!propertyTypeInView) {
      propertyTypeControls.start({ opacity: 0, y: 20 });
    }
  }, [propertyTypeControls, propertyTypeInView]);

  // Animation sequence
  useEffect(() => {
    setLoaded(true);
    const timer1 = setTimeout(() => setFeaturesVisible(true), 500);
    const timer2 = setTimeout(() => setStatsVisible(true), 800);
    const timer3 = setTimeout(() => setTestimonialVisible(true), 1100);
    const timer4 = setTimeout(() => setFaqVisible(true), 1400); // Set FAQ visibility

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4); // Clear the FAQ timeout
    };
  }, []);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
<Toolbar sx={{ py: 1 }}>
  <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
    <Logo />
    <Typography
      variant={isMobile ? "h6" : "h5"}
      component="h1"
      fontWeight="bold"
      sx={{
        color: "#ffffff",
        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
      }}
    >
  Premium Real Estate
    </Typography>
  </Box>

  {!isMobile && (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <NavButton component="a" href="#features">
        Features
      </NavButton>
      <NavButton component="a" href="#property-types">
        Property Types
      </NavButton>
      <NavButton component="a" href="#testimonials">
        Testimonials
      </NavButton>
      <NavButton component="a" href="#faq"> {/* Added link to FAQ */}
        FAQ
      </NavButton>
      <NavButton component="a" href="#contact">
        Contact
      </NavButton>

      <AuthButton
        variant="outlined"
        startIcon={<LoginIcon />}
        component={RouterLink}
        to="/login"
        sx={{
          color: "#ffffff",
          borderColor: "rgba(255,255,255,0.5)",
          "&:hover": {
            borderColor: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        Login
      </AuthButton>

      <AuthButton
        variant="contained"
        startIcon={<PersonAddIcon />}
        component={RouterLink}
        to="/logon"
        sx={{
          backgroundColor: "#e53935",
          "&:hover": {
            backgroundColor: "#d32f2f",
          },
        }}
      >
        Sign Up
      </AuthButton>
    </Box>
  )}

  {isMobile && (
    <IconButton
      color="inherit"
      sx={{ ml: 1 }}
    >
      <MenuIcon />
    </IconButton>
  )}
</Toolbar>
</AppBar>

{/* Hero Section */}
<HeroSection>
<Container maxWidth="lg">
  <ContentWrapper>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={7}>
        <Fade in={loaded} timeout={800}>
          <Box>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                lineHeight: 1.2,
              }}
            >
              Find Your Perfect Property Match
            </Typography>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              sx={{
                mb: 4,
                fontWeight: 400,
                opacity: 0.9,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "600px",
              }}
            >
              Your one-stop platform for buying, selling, and discovering real estate opportunities.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
              <ActionButton
                size="large"
                startIcon={<SearchIcon />}
                component={RouterLink}
                to="/search"
              >
                Find Properties
              </ActionButton>

              <SecondaryButton
                size="large"
                startIcon={<PublishIcon />}
                component={RouterLink}
                to="/publish"
              >
                List Your Property
              </SecondaryButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
                <Typography variant="body1" fontWeight={500}>
                  Verified Listings
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
                <Typography variant="body1" fontWeight={500}>
                  Serious Buyers
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ mr: 1, color: "#e53935" }} />
                <Typography variant="body1" fontWeight={500}>
                  Smart Matching
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Grid>

     
    </Grid>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 6, md: 10 },
      }}
    >
      <IconButton
        component="a"
        href="#features"
        sx={{
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          color: "#ffffff",
          p: 1.5,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
            transform: "translateY(5px)",
          },
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateY(0)",
            },
            "40%": {
              transform: "translateY(-10px)",
            },
            "60%": {
              transform: "translateY(-5px)",
            },
          },
        }}
      >
        <ExpandMoreIcon fontSize="large" />
      </IconButton>
    </Box>
  </ContentWrapper>
</Container>
</HeroSection>

{/* Features Section */}
<Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      Our Services
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Discover how our platform can help you find, sell, or manage your real estate journey
    </Typography>
  </Box>

  <motion.div
    ref={featuresRef}
    initial={{ opacity: 0, y: 20 }}
    animate={featuresControls}
  >
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <FeatureCard>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <FeatureIcon className="feature-icon">
              <PublishIcon />
            </FeatureIcon>

            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              List Your Property
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Easily publish your property listings with detailed descriptions, high-quality photos, and all relevant information to attract serious buyers.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Reach thousands of potential buyers
              </Typography>

              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Professional listing presentation
              </Typography>

              <Typography variant="body2" fontWeight="medium">
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Easy management dashboard
              </Typography>
            </Box>

            <Button onClick={()=>navigate("/about")}
              variant="outlined"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#e53935",
                color: "#e53935",
                "&:hover": {
                  backgroundColor: "rgba(229, 57, 53, 0.05)",
                  borderColor: "#d32f2f",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </CardContent>
        </FeatureCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <FeatureCard>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <FeatureIcon className="feature-icon">
              <BarChartIcon />
            </FeatureIcon>

            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              Track Serious Interest
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Monitor the number of serious inquiries about your property. Our platform filters casual browsers from genuinely interested potential buyers.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Real-time interest analytics
              </Typography>

              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Qualified buyer filtering
              </Typography>

              <Typography variant="body2" fontWeight="medium">
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Detailed visitor insights
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#e53935",
                color: "#e53935",
                "&:hover": {
                  backgroundColor: "rgba(229, 57, 53, 0.05)",
                  borderColor: "#d32f2f",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </CardContent>
        </FeatureCard>
      </Grid>

      <Grid item xs={12} md={4}>
        <FeatureCard>
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <FeatureIcon className="feature-icon">
              <SearchIcon />
            </FeatureIcon>

            <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
              Smart Property Matching
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Save your property requirements and get automatically matched with listings that meet your criteria. Never miss your dream property again.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Personalized property alerts
              </Typography>

              <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Advanced search filters
              </Typography>

              <Typography variant="body2" fontWeight="medium">
                <CheckCircleOutlineIcon sx={{ fontSize: 18, mr: 1, color: "#e53935", verticalAlign: "middle" }} />
                Save favorite properties
              </Typography>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: "30px",
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#e53935",
                color: "#e53935",
                "&:hover": {
                  backgroundColor: "rgba(229, 57, 53, 0.05)",
                  borderColor: "#d32f2f",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </CardContent>
        </FeatureCard>
      </Grid>
    </Grid>


</motion.div>
</Container>
</Box>

{/* Property Types Section */}
<Box id="property-types" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      Explore Property Types
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Browse through various property categories to find exactly what you're looking for
    </Typography>
  </Box>

  <motion.div
    ref={propertyTypeRef}
    initial={{ opacity: 0, y: 20 }}
    animate={propertyTypeControls}
  >
    <Grid container spacing={3}>
      {[
        {
          title: "Apartments",
          icon: <ApartmentIcon />,
          image: "images/kitchen.jpg",
        },
        {
          title: "Houses",
          icon: <HouseIcon />,
          image: "images/house.jpg",
        },
        {
          title: "Villas",
          icon: <VillaIcon />,
          image: "images/villa2.jpg",
        },
        {
          title: "Commercial",
          icon: <BusinessIcon />,
          image: "images/office.jpg",
        }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Zoom in={loaded} timeout={800 + (index * 200)}>
            <PropertyTypeCard>
              <Box sx={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  className="property-type-media"
                  sx={{
                    height: "100%",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "20px",
                    py: 0.5,
                    px: 1.5,
                    fontWeight: "medium",
                    fontSize: "0.875rem",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                </Box>
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Box
                  className="property-type-icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "-30px auto 16px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    "& svg": {
                      fontSize: 30,
                      color: "#212121",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {item.title}
                </Typography>
                <Button
                  sx={{
                    mt: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    color: "#e53935",
                    "&:hover": {
                      backgroundColor: "rgba(229, 57, 53, 0.05)",
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                </Button>
              </CardContent>
            </PropertyTypeCard>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Container>
</Box>

{/* Stats Section */}
<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
<Container maxWidth="lg">
  <motion.div
    ref={statsRef}
    initial={{ opacity: 0, y: 20 }}
    animate={statsControls}
  >
    <Grid container spacing={4}>
      {[
        { number: "10,000+", label: "Active Listings", icon: <HomeWorkIcon /> },
        { number: "15,000+", label: "Happy Clients", icon: <FavoriteIcon /> },
        { number: "95%", label: "Success Rate", icon: <CheckCircleOutlineIcon /> },
        { number: "24/6", label: "Customer Support", icon: <SearchIcon /> }
      ].map((stat, index) => (
        <Grid item xs={6} md={3} key={index}>
          <StatsCard>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                backgroundColor: "rgba(229, 57, 53, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                "& svg": {
                  fontSize: 36,
                  color: "#e53935",
                },
              }}
            >
              {stat.icon}
            </Box>
            <Typography
              variant="h4"
              component="p"
              fontWeight="bold"
              className="stats-number"
              sx={{ transition: "color 0.3s ease" }}
            >
              {stat.number}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {stat.label}
            </Typography>
          </StatsCard>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Container>
</Box>

{/* How It Works Section */}
<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      How It Works
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Our streamlined process makes finding or selling properties easier than ever
    </Typography>
  </Box>

  <Grid container spacing={5} alignItems="center">
    <Grid item xs={12} md={6}>
      <Zoom in={loaded} timeout={1000}>
        <Box
          component="img"
          src="images/laptop.jpg"
          alt="Real Estate Platform"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        />
      </Zoom>
    </Grid>

    <Grid item xs={12} md={6}>
      <Box>
        {[
          {
            step: "01",
            title: "Create Your Account",
            description: "Sign up for free and set up your profile with your preferences and requirements."
          },
          {
            step: "02",
            title: "Browse or List Properties",
            description: "Search for properties that match your criteria or list your own property for sale."
          },
          {
            step: "03",
            title: "Connect with Buyers or Sellers",
            description: "Communicate directly with interested parties through our secure messaging system."
          },
          {
            step: "04",
            title: "Close the Deal",
            description: "Finalize your transaction with confidence, supported by our platform's tools and resources."
          }
        ].map((item, index) => (
          <Fade in={loaded} timeout={1000 + (index * 200)} key={index}>
            <Box
              sx={{
                display: "flex",
                mb: 4,
                "&:last-child": {
                  mb: 0,
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: index === 0 ? "#e53935" : "rgba(0, 0, 0, 0.05)",
                  color: index === 0 ? "#ffffff" : "#212121",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                  mr: 3,
                  boxShadow: index === 0 ? "0 8px 16px rgba(229, 57, 53, 0.3)" : "none",
                }}
              >
                {item.step}
              </Box>

              <Box>
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Fade>
        ))}

        <Box sx={{ mt: 4 }}>
          <ActionButton
            size="large"
            component={RouterLink}
            to="/logon"
          >
            Get Started Now
          </ActionButton>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Container>
</Box>

{/* Testimonials Section */}
<Box id="testimonials" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
<Container maxWidth="lg">
  <Box sx={{ textAlign: "center", mb: 8 }}>
    <Typography
      variant="h3"
      component="h2"
      fontWeight="bold"
      gutterBottom
      sx={{
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          backgroundColor: "#e53935",
          borderRadius: "4px",
        },
      }}
    >
      What Our Clients Say
    </Typography>

    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
    >
      Hear from our satisfied users who have found success with our platform
    </Typography>
  </Box>

  <motion.div
    ref={testimonialRef}
    initial={{ opacity: 0, y: 20 }}
    animate={testimonialControls}
  >
    <Grid container spacing={4}>
      {[
        {
          name: "Sarah Johnson",
          role: "Property Seller",
          // avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          testimonial: "I was able to sell my apartment within just 3 weeks of listing it on this platform. The analytics showing serious buyer interest helped me focus on the right prospects."
        },
        {
          name: "Michael Chen",
          role: "Home Buyer",
          // avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          testimonial: "The property matching feature saved me so much time. I set my preferences and was notified immediately when my dream house was listed. Couldn't be happier with my purchase!"
        },
        {
          name: "Emma Rodriguez",
          role: "Real Estate Agent",
          // avatar: "https://randomuser.me/api/portraits/women/68.jpg",
          testimonial: "As an agent, this platform has revolutionized how I connect clients with properties. The detailed analytics and serious buyer filtering have increased my closing rate by 40%."
        }
      ].map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <TestimonialCard>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                src={item.avatar}
                alt={item.name}
                sx={{ width: 64, height: 64, mr: 2, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
              />
              <Box>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.role}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
              "{item.testimonial}"
            </Typography>

            <Box sx={{ display: "flex", color: "black" }}>
              {[...Array(5)].map((_, i) => (
                <Box key={i} sx={{ mr: 0.5 }}>★</Box>
              ))}
            </Box>
          </TestimonialCard>
        </Grid>
      ))}
    </Grid>
  </motion.div>
</Container>
</Box>

      {/* FAQ Section */}
      <Box id="faq" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f0f0f0" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  backgroundColor: "#e53935",
                  borderRadius: "4px",
                },
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", mt: 3 }}
            >
              Find answers to common questions about our platform.
            </Typography>
          </Box>
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqControls}
          >
            <Box>
              <Accordion
                defaultExpanded
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    How does the property matching work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    Our AI-powered matching system analyzes your preferences, budget,
                    and other criteria to suggest properties that best fit your needs.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    How do I list my property?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    Create an account, provide detailed information about your
                    property, upload high-quality photos, and set your price. Our
                    platform guides you through each step.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Are the listings verified?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    Yes, we verify all listings to ensure accuracy and prevent fraud.
                    Our team reviews each listing before it goes live.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  mb: 1,
                  "&:before": {
                    display: "none", // Remove the default MUI border
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: (theme) => theme.spacing(2),
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    How can I contact support?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: (theme) => theme.spacing(2) }}>
                  <Typography variant="body1" color="text.secondary">
                    You can reach our support team via email at
                    info@PremiumRealEstate.com or by phone at +1 (555) 123-4567.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </motion.div>
        </Container>
      </Box>


{/* CTA Section */}
<Box
sx={{
py: { xs: 8, md: 12 },
background: "rgba(0, 0, 0, 0.05)",
color: "#e53935",
position: "relative",
overflow: "hidden",
}}
>
<Box
sx={{
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
opacity: 0.1,
}}
/>

<Container maxWidth="lg">
<Grid container spacing={4} alignItems="center">
<Grid item xs={12} md={7}>
<Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
  Ready to Find Your Perfect Property?
</Typography>

<Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
  Join thousands of satisfied users who have successfully bought, sold, or found their ideal properties through our platform.
</Typography>

<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
  <Button
    variant="contained"
    size="large"
    component={RouterLink}
    to="/logon"
    sx={{
      backgroundColor: "#ffffff",
      color: "#e53935",
      fontWeight: "bold",
      borderRadius: "30px",
      padding: "12px 32px",
      textTransform: "none",
      fontSize: "1rem",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        transform: "translateY(-3px)",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
      },
    }}
  >
    Create Free Account
  </Button>

  <Button
    variant="outlined"
    size="large"
    component={RouterLink}
    to="/search"
    sx={{
      color: "#ffffff",
      borderColor: "#ffffff",
      borderRadius: "30px",
      padding: "12px 32px",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        borderColor: "#ffffff",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "translateY(-3px)",
      },
    }}
  >
    Browse Properties
  </Button>
</Box>
</Grid>

<Grid item xs={12} md={5}>
<Box
  sx={{
    position: "relative",
    height: { xs: "300px", md: "400px" },
    width: "100%",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    transform: "perspective(1000px) rotateY(5deg)",
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "perspective(1000px) rotateY(0deg)",
    },
  }}
>
  <Box
    component="img"
    src="images/p1.jpg"
    alt="Property Keys"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  />
</Box>
</Grid>
</Grid>
</Container>
</Box>

{/* Footer */}
<Box id="contact" sx={{ py: 6, backgroundColor: "black", color: "#ffffff" }}>
<Container maxWidth="lg">
<Grid container spacing={4}>
<Grid item xs={12} md={4}>
<Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
  <Logo />
  <Typography variant="h5" component="h1" fontWeight="bold">
  Premium Real Estate
  </Typography>
</Box>

<Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
  Your trusted platform for all real estate needs. We connect buyers and sellers to create successful property transactions.
</Typography>

<Box sx={{ display: "flex", gap: 2 }}>
  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
    <IconButton
      key={index}
      sx={{
        color: "#ffffff",
        opacity: 0.7,
        "&:hover": {
          opacity: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {/* Replace with actual social media icons */}
      <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "currentColor" }} />
    </IconButton>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Quick Links
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {["Home", "About Us", "Properties", "Pricing", "Contact"].map((link, index) => (
    <Link
      key={index}
      component="a"
      href="#"
      underline="none"
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {link}
    </Link>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Property Types
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {["Apartments", "Houses", "Villas", "Commercial", "Land", "Luxury"].map((type, index) => (
    <Link
      key={index}
      component="a"
      href="#"
      underline="none"
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {type}
    </Link>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Resources
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {["Blog", "Market Trends", "Guides", "FAQ", "Help Center", "Privacy Policy"].map((resource, index) => (
    <Link
      key={index}
      component="a"
      href="#"
      underline="none"
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
          color: "#ffffff",
        },
      }}
    >
      {resource}
    </Link>
  ))}
</Box>
</Grid>

<Grid item xs={6} sm={3} md={2}>
<Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Contact Us
</Typography>

<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    123 Real Estate Street
  </Typography>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    New York, NY 10001
  </Typography>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    info@PremiumRealEstate.com
  </Typography>
  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
    +1 (555) 123-4567
  </Typography>
</Box>
</Grid>
</Grid>

<Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
<Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
© {new Date().getFullYear()} Premium Real Estate. All rights reserved.
</Typography>

<Box sx={{ display: "flex", gap: 3 }}>
<Link
  component="a"
  href="#"
  underline="none"
  sx={{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#ffffff",
    },
  }}
>
  Terms of Service
</Link>

<Link
  component="a"
  href="#"
  underline="none"
  sx={{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#ffffff",
    },
  }}
>
  Privacy Policy
</Link>

<Link
  component="a"
  href="#"
  underline="none"
  sx={{
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#ffffff",
    },
  }}
>
  Cookies
</Link>
</Box>
</Box>
</Container>
</Box>
</Box>
);
};
export default Welcome;

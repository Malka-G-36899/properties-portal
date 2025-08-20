// import { useState, useEffect } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Avatar,
//   CircularProgress,
//   Divider
// } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import './about.css';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ff0000',
//     },
//     secondary: {
//       main: '#f5f5f5',
//     },
//     text: {
//       primary: '#000000',
//       secondary: '#666666',
//     },
//   },
//   typography: {
//     fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
//   },
// });

// // Team members data
// const teamMembers = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     position: 'CEO & Founder',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     bio: 'With over 15 years of experience in real estate, Sarah leads our company with vision and expertise.'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     position: 'Head of Sales',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     bio: 'Michael brings a wealth of knowledge in property valuation and market analysis to our team.'
//   },
//   {
//     id: 3,
//     name: 'Emma Rodriguez',
//     position: 'Marketing Director',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     bio: 'Emmas innovative marketing strategies have helped countless clients find their dream homes.'
//   },
//   {
//     id: 4,
//     name: 'David Wilson',
//     position: 'Property Manager',
//     image: 'https://randomuser.me/api/portraits/men/75.jpg',
//     bio: 'David ensures all our properties are maintained to the highest standards for our clients.'
//   }
// ];

// // Testimonials data
// const testimonials = [
//   {
//     id: 1,
//     name: 'Jennifer & Robert',
//     image: 'https://randomuser.me/api/portraits/women/33.jpg',
//     text: 'We found our dream home thanks to Premium Real Estate. The team was professional, responsive, and made the entire process smooth and stress-free.',
//     location: 'New York'
//   },
//   {
//     id: 2,
//     name: 'Thomas Baker',
//     image: 'https://randomuser.me/api/portraits/men/41.jpg',
//     text: 'As a first-time homebuyer, I was nervous about the process. The team at Premium Real Estate guided me every step of the way. Highly recommended!',
//     location: 'Chicago'
//   },
//   {
//     id: 3,
//     name: 'Sophia Martinez',
//     image: 'https://randomuser.me/api/portraits/women/57.jpg',
//     text: 'Ive worked with several real estate agencies, but Premium Real Estate stands out for their attention to detail and personalized service.',
//     location: 'Los Angeles'
//   }
// ];

// export const About = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <ThemeProvider theme={theme}>
//         <Box className="loading-container">
//           <CircularProgress color="primary" />
//           <Typography variant="h6" sx={{ mt: 2 }}>
//             Loading...
//           </Typography>
//         </Box>
//       </ThemeProvider>
//     );
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Box className="about-page">
//         {/* Hero Section */}
//         <Box className="about-hero">
//           <Container maxWidth="lg">
//             <Typography variant="h3" component="h1" className="about-title">
//               About Premium Real Estate
//             </Typography>
//             <Typography variant="h6" component="h2" className="about-subtitle">
//               Your Trusted Partner in Real Estate Since 2005
//             </Typography>
//           </Container>
//         </Box>

//         {/* Our Story */}
//         <Container maxWidth="lg" className="about-section">
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="h4" component="h2" className="section-title">
//                 Our Story
//               </Typography>
//               <Typography variant="body1" paragraph className="section-text">
//                 Premium Real Estate was founded with a simple mission: to help people find their perfect property while providing exceptional service every step of the way.
//               </Typography>
//               <Typography variant="body1" paragraph className="section-text">
//                 What began as a small local agency has grown into a trusted name in real estate, serving thousands of satisfied clients across the country. Our success is built on our commitment to understanding each client's unique needs and delivering personalized solutions.
//               </Typography>
//               <Typography variant="body1" paragraph className="section-text">
//                 Today, we continue to innovate and expand our services, leveraging the latest technology to make property searching and transactions smoother than ever before.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box className="about-image-container">
//                 <img 
//                   src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Our Office" 
//                   className="about-image"
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         {/* Our Values */}
//         <Box className="values-section">
//           <Container maxWidth="lg">
//             <Typography variant="h4" component="h2" className="section-title text-center">
//               Our Values
//             </Typography>
//             <Typography variant="body1" className="section-description text-center">
//               The principles that guide everything we do
//             </Typography>
            
//             <Grid container spacing={4} className="values-grid">
//               <Grid item xs={12} sm={6} md={3}>
//                 <Box className="value-item">
//                   <Box className="value-icon">🤝</Box>
//                   <Typography variant="h6" component="h3" className="value-title">
//                     Integrity
//                   </Typography>
//                   <Typography variant="body2" className="value-description">
//                     We conduct our business with honesty and transparency at all times
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Box className="value-item">
//                   <Box className="value-icon">⭐</Box>
//                   <Typography variant="h6" component="h3" className="value-title">
//                     Excellence
//                   </Typography>
//                   <Typography variant="body2" className="value-description">
//                     We strive for excellence in every aspect of our service
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Box className="value-item">
//                   <Box className="value-icon">🔍</Box>
//                   <Typography variant="h6" component="h3" className="value-title">
//                     Attention to Detail
//                   </Typography>
//                   <Typography variant="body2" className="value-description">
//                     We pay close attention to every detail to ensure client satisfaction
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <Box className="value-item">
//                   <Box className="value-icon">💡</Box>
//                   <Typography variant="h6" component="h3" className="value-title">
//                     Innovation
//                   </Typography>
//                   <Typography variant="body2" className="value-description">
//                     We embrace new ideas and technologies to improve our services
//                   </Typography>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>

//         {/* Our Team */}
//         <Container maxWidth="lg" className="about-section">
//           <Typography variant="h4" component="h2" className="section-title text-center">
//             Meet Our Team
//           </Typography>
//           <Typography variant="body1" className="section-description text-center">
//             Dedicated professionals committed to your success
//           </Typography>
          
//           <Grid container spacing={4} className="team-grid">
//             {teamMembers.map((member) => (
//               <Grid item xs={12} sm={6} md={3} key={member.id}>
//                 <Card className="team-card">
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={member.image}
//                     alt={member.name}
//                     className="team-image"
//                   />
//                   <CardContent className="team-content">
//                     <Typography variant="h6" component="h3" className="team-name">
//                       {member.name}
//                     </Typography>
//                     <Typography variant="subtitle2" color="primary" className="team-position">
//                       {member.position}
//                     </Typography>
//                     <Typography variant="body2" className="team-bio">
//                       {member.bio}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>

//         {/* Testimonials */}
//         <Box className="testimonials-section">
//           <Container maxWidth="lg">
//             <Typography variant="h4" component="h2" className="section-title text-center">
//               What Our Clients Say
//             </Typography>
//             <Typography variant="body1" className="section-description text-center">
//               Hear from our satisfied clients
//             </Typography>
            
//             <Grid container spacing={4} className="testimonials-grid">
//               {testimonials.map((testimonial) => (
//                 <Grid item xs={12} md={4} key={testimonial.id}>
//                   <Card className="testimonial-card">
//                     <CardContent className="testimonial-content">
//                       <Typography variant="body1" className="testimonial-text">
//                         "{testimonial.text}"
//                       </Typography>
//                       <Divider className="testimonial-divider" />
//                       <Box className="testimonial-author">
//                         <Avatar src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
//                         <Box>
//                           <Typography variant="subtitle2" className="testimonial-name">
//                             {testimonial.name}
//                           </Typography>
//                           <Typography variant="body2" color="textSecondary" className="testimonial-location">
//                             {testimonial.location}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Box>

//         {/* Stats */}
//         <Container maxWidth="lg" className="stats-section">
//           <Grid container spacing={4} className="stats-grid">
//             <Grid item xs={6} md={3}>
//               <Box className="stat-item">
//                 <Typography variant="h3" component="p" className="stat-number">
//                   15+
//                 </Typography>
//                 <Typography variant="body1" className="stat-label">
//                   Years of Experience
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={6} md={3}>
//               <Box className="stat-item">
//                 <Typography variant="h3" component="p" className="stat-number">
//                   5,000+
//                 </Typography>
//                 <Typography variant="body1" className="stat-label">
//                   Properties Sold
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={6} md={3}>
//               <Box className="stat-item">
//                 <Typography variant="h3" component="p" className="stat-number">
//                   10,000+
//                 </Typography>
//                 <Typography variant="body1" className="stat-label">
//                   Happy Clients
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={6} md={3}>
//               <Box className="stat-item">
//                 <Typography variant="h3" component="p" className="stat-number">
//                   20+
//                 </Typography>
//                 <Typography variant="body1" className="stat-label">
//                   Expert Agents
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         {/* Contact CTA */}
//         <Box className="contact-cta">
//           <Container maxWidth="md">
//             <Typography variant="h4" component="h2" className="cta-title">
//               Ready to Work With Us?
//             </Typography>
//             <Typography variant="body1" className="cta-description">
//               Contact our team today to discuss your real estate needs.
//             </Typography>
//             <Typography variant="h6" component="p" className="contact-info">
//               📞 Call us: (123) 456-7890
//             </Typography>
//             <Typography variant="h6" component="p" className="contact-info">
//               ✉️ Email: info@premiumrealestate.com
//             </Typography>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Stack,
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { Fade, Zoom, Slide, Grow, Collapse } from '@mui/material';
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import Logo from './logo.svg'; // Import your logo
// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const growIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000', // Dark Gray
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(14),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  textAlign: 'center',
}));
const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '900px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));
const Section = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: '#e53935', // Red
    borderRadius: '4px',
  },
}));
const TeamMemberCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.3)',
  },
  backgroundColor: '#ffffff',
  height: '100%', // Ensure all cards have the same height
}));
const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  textTransform: 'none',
  fontWeight: 600,
  backgroundColor: '#e53935', // Red
  color: '#ffffff',
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    backgroundColor: '#d32f2f', // Darker Red
  },
}));
const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: '#e0e0e0', // Light Gray for timeline line
    transform: 'translateX(-50%)',
    zIndex: -1,
  },
}));
const TimelineItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '15px',
  backgroundColor: '#f0f0f0', // Light Gray for item background
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 0, // Remove the red dot
    height: 0,
    borderRadius: '50%',
    backgroundColor: '#e53935', // Red for timeline dot
    zIndex: 1,
  },
  '&:nth-of-type(odd)': {
    marginLeft: 'auto',
    '&::before': {
      left: '100%',
      transform: 'translate(50%, -50%)',
    },
  },
}));
const About = () => {
  const [loaded, setLoaded] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const teamSection = document.getElementById('team');
      const servicesSection = document.getElementById('services');
      const historySection = document.getElementById('history');
      if (teamSection) {
        const rect = teamSection.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75) {
          setTeamVisible(true);
        }
      }
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75) {
          setServicesVisible(true);
        }
      }
      if (historySection) {
        const rect = historySection.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75) {
          setHistoryVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const timelineData = [
    {
      year: 2021,
      title: 'Foundation',
      description: 'Founded with a vision to simplify real estate and empower users with innovative solutions.',
    },
    {
      year: 2022,
      title: 'First Product Launch',
      description: 'Launched our initial platform, focusing on property listings and providing essential tools for both buyers and sellers.',
    },
    {
      year: 2023,
      title: 'Expansion',
      description: 'Expanded our services and team, introducing advanced features and reaching new markets to meet growing demand.',
    },
    {
      year: 'Now',
      title: 'Continued Growth',
      description: 'Ongoing development and expansion of our platform, with a commitment to innovation and user satisfaction.',
    },
  ];
  return (
    <Box sx={{ backgroundColor: '#ffffff', overflowX: 'hidden' }}>
      {/* App Bar (Navbar) */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              {/* <img src={Logo} alt="Logo" style={{ height: 40, marginRight: theme.spacing(2) }} /> */}
              <Typography variant="h6" fontWeight="bold" color="text.primary">
                Your Real Estate Platform
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="md">
          <ContentWrapper>
            <Fade in={loaded} timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Typography variant="h2" component="h1" fontWeight="bold" color="white" gutterBottom sx={{ animation: `${fadeIn} 1s ease-out` }}>
                About Us
              </Typography>
            </Fade>
            <Fade in={loaded} timeout={1000} style={{ transitionDelay: '400ms' }}>
              <Typography variant="h6" color="rgba(255, 255, 255, 0.8)" sx={{ animation: `${fadeIn} 1s ease-out` }}>
                We are dedicated to providing innovative real estate solutions.
              </Typography>
            </Fade>
          </ContentWrapper>
        </Container>
      </HeroSection>
      {/* History, Vision, Values Section */}
      <Section id="history">
        <Container maxWidth="md">
          <ContentWrapper>
            <SectionTitle variant="h4" component="h2" color="text.primary" sx={{ animation: `${fadeIn} 1s ease-out` }}>
              Our Story
            </SectionTitle>
            <TimelineContainer>
              {timelineData.map((item, index) => (
                <Slide direction={index % 2 === 0 ? "left" : "right"} in={historyVisible} timeout={500 + index * 200} mountOnEnter unmountOnExit key={index}>
                  <TimelineItem>
                    <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                      {item.year}
                    </Typography>
                    <Typography variant="h6" fontWeight="medium" color="text.primary" sx={{ mt: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {item.description}
                    </Typography>
                  </TimelineItem>
                </Slide>
              ))}
            </TimelineContainer>
            <SectionTitle variant="h4" component="h2" color="text.primary" sx={{ animation: `${fadeIn} 1s ease-out`, mt: 6 }}>
              Our Vision
            </SectionTitle>
            <Fade in={loaded} timeout={800} style={{ transitionDelay: '200ms' }}>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ animation: `${fadeIn} 1s ease-out` }}>
                To be the premier real estate platform, empowering individuals and businesses to make informed decisions and achieve their property aspirations.
              </Typography>
            </Fade>
            <SectionTitle variant="h4" component="h2" color="text.primary" sx={{ animation: `${fadeIn} 1s ease-out`, mt: 6 }}>
              Our Values
            </SectionTitle>
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 4, mt: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Fade in={loaded} timeout={800} style={{ transitionDelay: '200ms' }}>
                  <Typography variant="h6" fontWeight="medium" gutterBottom sx={{ animation: `${slideInLeft} 1s ease-out` }}>
                    Integrity
                  </Typography>
                </Fade>
                <Fade in={loaded} timeout={800} style={{ transitionDelay: '400ms' }}>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ animation: `${slideInLeft} 1s ease-out` }}>
                    We operate with honesty, transparency, and ethical conduct in all our interactions.
                  </Typography>
                </Fade>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Fade in={loaded} timeout={800} style={{ transitionDelay: '200ms' }}>
                  <Typography variant="h6" fontWeight="medium" gutterBottom sx={{ animation: `${slideInRight} 1s ease-out` }}>
                    Innovation
                  </Typography>
                </Fade>
                <Fade in={loaded} timeout={800} style={{ transitionDelay: '400ms' }}>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ animation: `${slideInRight} 1s ease-out` }}>
                    We embrace new technologies and ideas to continuously improve our services and user experience.
                  </Typography>
                </Fade>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Fade in={loaded} timeout={800} style={{ transitionDelay: '200ms' }}>
                  <Typography variant="h6" fontWeight="medium" gutterBottom sx={{ animation: `${slideInLeft} 1s ease-out` }}>
                    Customer Focus
                  </Typography>
                </Fade>
                <Fade in={loaded} timeout={800} style={{ transitionDelay: '400ms' }}>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ animation: `${slideInLeft} 1s ease-out` }}>
                    We prioritize our clients' needs and strive to exceed their expectations through exceptional service.
                  </Typography>
                </Fade>
              </Box>
            </Box>
          </ContentWrapper>
        </Container>
      </Section>
      {/* Team Section */}
      <Section id="team" sx={{ backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="md">
          <ContentWrapper>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <SectionTitle variant="h3" component="h2" color="text.primary">
                Meet Our Team
              </SectionTitle>
              <Typography variant="h6" color="text.secondary">
                The dedicated professionals who make our platform a success.
              </Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  name: 'Batya Hershberg',
                  title: 'Frontend Developer',
                  description: 'Batya is a skilled frontend developer, responsible for creating user-friendly and visually appealing interfaces. She is passionate about building intuitive and responsive web applications.',
                
                },
                {
                  name: 'Malka Borzikowski',
                  title: 'Backend Developer',
                  description: 'Malka is a talented backend developer, focusing on building robust and scalable server-side applications. He ensures the smooth operation of our platform and is dedicated to writing clean and efficient code.',
              
                },
              ].map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Grow in={teamVisible} timeout={800 + index * 200} mountOnEnter unmountOnExit>
                    <TeamMemberCard>
                      <CardContent sx={{ p: 2, textAlign: 'center' }}>
                        <Avatar
                          alt={member.name}
                          src={member.image}
                          sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '3px solid #e53935' }}
                        />
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {member.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.description}
                        </Typography>
                      </CardContent>
                    </TeamMemberCard>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </ContentWrapper>
        </Container>
      </Section>
      {/* Services Section */}
      <Section id="services">
        <Container maxWidth="md">
          <ContentWrapper>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <SectionTitle variant="h3" component="h2" color="text.primary">
                Our Services
              </SectionTitle>
              <Typography variant="h6" color="text.secondary">
                We offer a comprehensive suite of services to meet your real estate needs.
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {[
                {
                  title: 'List Your Property',
                  description: 'Easily publish your property listings with detailed descriptions and high-quality photos.',
                  icon: <CheckCircleOutlineIcon sx={{ color: '#e53935', mr: 1 }} />,
                },
                {
                  title: 'Track Serious Interest',
                  description: 'Monitor the number of serious inquiries about your property.',
                  icon: <CheckCircleOutlineIcon sx={{ color: '#e53935', mr: 1 }} />,
                },
                {
                  title: 'Smart Property Matching',
                  description: 'Get automatically matched with listings that meet your criteria.',
                  icon: <CheckCircleOutlineIcon sx={{ color: '#e53935', mr: 1 }} />,
                },
                {
                  title: 'Property Alerts',
                  description: 'Receive instant notifications about new listings that match your preferences.',
                  icon: <CheckCircleOutlineIcon sx={{ color: '#e53935', mr: 1 }} />,
                },
                {
                  title: 'Save Favorite Properties',
                  description: 'Save and organize your favorite properties for easy access.',
                  icon: <CheckCircleOutlineIcon sx={{ color: '#e53935', mr: 1 }} />,
                },
                {
                  title: 'Detailed Market Insights',
                  description: 'Access valuable market data and trends to make informed decisions.',
                  icon: <CheckCircleOutlineIcon sx={{ color: '#e53935', mr: 1 }} />,
                },
              ].map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Zoom in={servicesVisible} timeout={500 + index * 100}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {service.icon}
                      <Typography variant="body1" fontWeight="medium">
                        {service.title}
                      </Typography>
                    </Box>
                  </Zoom>
                  <Zoom in={servicesVisible} timeout={500 + index * 100}>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 3 }}>
                      {service.description}
                    </Typography>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </ContentWrapper>
        </Container>
      </Section>
      {/* Contact Section */}
      <Section sx={{ backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="md">
          <ContentWrapper>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <SectionTitle variant="h3" component="h2" color="text.primary">
                Get in Touch
              </SectionTitle>
              <Typography variant="h6" color="text.secondary">
                We'd love to hear from you! Contact us with any questions or inquiries.
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <ActionButton component={Link} to="/login">
                Contact Us
              </ActionButton>
            </Box>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight="medium" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 1, color: '#e53935' }} />
                  <Typography variant="body1" color="text.secondary">+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, color: '#e53935' }} />
                  <Typography variant="body1" color="text.secondary">info@example.com</Typography>
                </Box>
              </Box>
            </Box>
          </ContentWrapper>
        </Container>
      </Section>
    </Box>
  );
};
export default About;
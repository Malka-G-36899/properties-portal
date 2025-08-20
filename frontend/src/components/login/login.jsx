// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { loginThunk } from "../../redux/slices/loginThunk";
// import { editNameAndPassword } from "../../redux/slices/customersSlice";
// import { useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material";
// import PersonIcon from '@mui/icons-material/Person';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import LockIcon from '@mui/icons-material/Lock';
// import Button from '@mui/material/Button';
// import "./login.css";
// export const Login = () => {
//   const [details, setDetails] = useState({ name: "", password: "" });
//   const dispatch = useDispatch();
//   const customer = useSelector(state => state.customers.user);
//   const navigate = useNavigate();
//   //function
//   const login = async () => {
//     console.log("login");
//     await dispatch(loginThunk(details));
//   }
//   useEffect(
//     () => {
//       if (customer !== null && customer.customerId > 0) {
//         console.log(customer.customerId);
//         navigate(`/home`);
//       }
//       else if (customer === null) {
//         dispatch(editNameAndPassword(details));
//         //  console.log(customer.customer_name);
//         navigate(`/logon`);
//       }
//     }, [customer]
//   )
//   return <div id="login">
//     <br />
//     <PersonIcon id="personIcon"></PersonIcon><br />
//     <div id="details">
//       <div className="text">
//         <TextField id="outlined-basic" 
//  label="name*" variant="standard" onChange={(e) => setDetails({ ...details, name: e.target.value })} /><AccountBoxIcon id="icon" /><br />
//       </div>
//       <div className="text">
//       <TextField id="outlined-basic" label="password*" variant="standard" onChange={(e) => setDetails({ ...details, password: e.target.value })} /><LockIcon id="icon" /><br />
//       </div>
//       {/* <button onClick={login}>login</button> */}
//       <br />
//       <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={login}>
//                login
//             </Button></div>
//   </div>
// }
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/slices/loginThunk";
import { editNameAndPassword } from "../../redux/slices/customersSlice";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Container,
  InputAdornment,
  IconButton,
  Fade,
  Grow,
  useMediaQuery,
  Alert
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { motion } from "framer-motion";
import "./login.css";
//////////
// Add this import at the top with other imports

import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
 
  Collapse,
 
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';

/////////

// Styled components with animations
const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  backgroundColor: "#ffffff",
  "&:hover": {
    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-5px)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
    borderRadius: "12px",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const Logo = styled(HomeWorkIcon)(({ theme }) => ({
  fontSize: 60,
  color: "#e53935", // Red accent
  marginRight: theme.spacing(2),
  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 48,
    marginRight: 0,
    marginBottom: theme.spacing(1),
  },
}));
const AnimatedTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff !important", // רקע לבן קבוע
    transition: "all 0.3s ease",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#212121", // מסגרת שחורה
    },
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#212121", // מסגרת שחורה בריחוף
        borderWidth: "2px",
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#e53935", // מסגרת אדומה בפוקוס
        borderWidth: "2px",
        color: "black !important",
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: "#212121", // צבע תווית שחור
    transition: "all 0.3s ease",
    "&.Mui-focused": {
      color: "#212121", // צבע אדום בפוקוס
    }
  },
  "& .MuiInputBase-input": {
    color: "#212121", // צבע טקסט שחור
  },
  "& .MuiInputAdornment-root": {
    "& .MuiSvgIcon-root": {
      color: "#212121", // צבע אייקונים שחור
    },
  },
  // הוסף סגנונות לשגיאות
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    transition: "all 0.3s ease",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#e53935",
    fontWeight: 500,
    fontSize: "0.75rem",
  },
  "& .MuiOutlinedInput-root.Mui-error": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e53935",
      borderWidth: "2px",
    },
  },

  marginBottom: "20px",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  backgroundColor: "#212121", // Black
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
    backgroundColor: "#e53935", // Red on hover
    transform: "translateY(-3px)",
    boxShadow: "0 6px 20px rgba(229, 57, 53, 0.3)",
    "&::before": {
      transform: "translateX(100%)",
      transition: "all 0.7s ease",
    },
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

const BackgroundAnimation = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflow: "hidden",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    opacity: 0.05,
    animation: "pulse 15s infinite",
  },
  "&::before": {
    background: "#e53935", // Red accent
    top: "-150px",
    right: "-150px",
  },
  "&::after": {
    background: "#9e9e9e", // Gray
    bottom: "-150px",
    left: "-150px",
    animationDelay: "5s",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      opacity: 0.05,
    },
    "50%": {
      transform: "scale(1.1)",
      opacity: 0.08,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0.05,
    },
  },
}));




export const Login = () => {
  const [details, setDetails] = useState({ name: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    general: ""
  });

  const dispatch = useDispatch();
  const customer = useSelector(state => state.customers.user);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));



  /////////


  // Inside the Login component, add these new state variables
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetStatus, setResetStatus] = useState({ message: "", type: "" });

  // Add these functions to handle the forgot password flow
  const handleForgotPasswordClick = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
    setResetEmail("");
    setResetStatus({ message: "", type: "" });
  };

  const handleResetPassword = async () => {
    // Validate email
    if (!resetEmail || !/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetStatus({
        message: "Please enter a valid email address",
        type: "error"
      });
      return;
    }

    try {
      // Here you would typically call your API to handle password reset
      // For example:
      // await dispatch(resetPasswordThunk(resetEmail));

      // For now, we'll simulate a successful response
      setTimeout(() => {
        setResetStatus({
          message: "Password reset instructions sent to your email",
          type: "success"
        });

        // Close dialog after 3 seconds on success
        setTimeout(() => {
          handleForgotPasswordClose();
        }, 3000);
      }, 1500);
    } catch (error) {
      setResetStatus({
        message: "Failed to send reset instructions. Please try again.",
        type: "error"
      });
    }
  };
  /////
  // Animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setLogoVisible(true), 300);
    const timer2 = setTimeout(() => setFormVisible(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Login function with enhanced validations
  const login = async () => {
    // Reset all errors
    setErrors({ name: "", password: "", general: "" });

    let isValid = true;
    const newErrors = { name: "", password: "", general: "" };

    // Username validation: 2-14 characters, letters only
    if (!details.name) {
      newErrors.name = "Username is required";
      isValid = false;
    } else if (details.name.length < 2 || details.name.length > 14) {
      newErrors.name = "Username must be between 2-14 characters";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(details.name)) {
      newErrors.name = "Username must contain letters only";
      isValid = false;
    }

    // Password validation: 3-9 characters
    if (!details.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (details.password.length < 3 || details.password.length > 9) {
      newErrors.password = "Password must be between 3-9 characters";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // If all validations pass, proceed with login
    try {
      await dispatch(loginThunk(details));
    } catch (error) {
      setErrors({ ...newErrors, general: "Login failed. Please try again." });
    }
  };


  // Navigation effect
  useEffect(() => {
    if (customer !== null && customer.customerId > 0) {
      console.log(customer.customerId);
      navigate(`/home`);
    }
    else if (customer === null) {
      dispatch(editNameAndPassword(details));
      navigate(`/logon`);
    }
  }, [customer]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >


      <Container maxWidth="sm">
        <Fade in={true} timeout={800}>
          <LoginPaper elevation={6}>
            <BackgroundAnimation />

            <Grow in={logoVisible} timeout={800}>
              <LogoContainer>
                <Logo />
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  component="h1"
                  fontWeight="bold"
                  sx={{
                    textAlign: isMobile ? "center" : "left",
                    background: "linear-gradient(45deg, #212121 30%, #424242 90%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Real Estate Portal
                </Typography>
              </LogoContainer>
            </Grow>

            <Fade in={formVisible} timeout={500}>
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  align="center"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: "#212121",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "40px",
                      height: "3px",
                      backgroundColor: "#e53935", // Red accent
                      borderRadius: "3px",
                    }
                  }}
                >
                  Sign In
                </Typography>

                <Grow in={Boolean(errors.general)} timeout={500}>
                  <Box sx={{ width: "100%", mb: errors.general ? 2 : 0 }}>
                    {errors.general && (
                      <Alert
                        severity="error"
                        sx={{
                          width: "100%",
                          borderRadius: "8px",
                          animation: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
                          "@keyframes shake": {
                            "0%, 100%": { transform: "translateX(0)" },
                            "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
                            "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
                          }
                        }}
                      >
                        {errors.general}
                      </Alert>
                    )}
                  </Box>
                </Grow>


                <Box
                  component="form"
                  sx={{
                    width: "100%",
                    mt: 1,
                    "& .MuiTextField-root": {
                      transition: "transform 0.3s ease",
                      "&:focus-within": {
                        transform: "translateY(-5px)",
                      }
                    }
                  }}
                >
                  {/*                   
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Username"
                    name="name"
                    autoComplete="username"
                    autoFocus
                    variant="outlined"
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBoxIcon sx={{ color: "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                    }}
                  /> */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Username"
                    name="name"
                    autoComplete="username"
                    autoFocus
                    variant="outlined"
                    onChange={(e) => {
                      setDetails({ ...details, name: e.target.value });
                      // Clear error when user starts typing
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBoxIcon sx={{ color: errors.name ? "#e53935" : "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* 
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon sx={{ color: "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.1)" }
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  /> */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(e) => {
                      setDetails({ ...details, password: e.target.value });
                      // Clear error when user starts typing
                      if (errors.password) setErrors({ ...errors, password: "" });
                    }}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon sx={{ color: errors.password ? "#e53935" : "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.1)" }
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />


                  <LoginButton
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={login}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </LoginButton>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 3,
                      opacity: 0.8,
                    }}
                  >
                    <Typography
                      //   variant="body2"
                      //   sx={{
                      //     position: "relative",
                      //     color: "#212121",
                      //     fontWeight: 500,
                      //     position: "relative",
                      //     color: "#212121",
                      //     fontWeight: 500,
                      //     cursor: "pointer",
                      //     transition: "all 0.3s ease",
                      //     "&::after": {
                      //       content: '""',
                      //       position: "absolute",
                      //       width: "0%",
                      //       height: "2px",
                      //       bottom: -2,
                      //       left: 0,
                      //       backgroundColor: "#e53935",
                      //       transition: "width 0.3s ease",
                      //     },
                      //     "&:hover": {
                      //       color: "#e53935",
                      //       "&::after": {
                      //         width: "100%",
                      //       },
                      //     },
                      //   }}
                      // >
                      //   Forgot Password?
                      variant="body2"
                      onClick={handleForgotPasswordClick}
                      sx={{
                        position: "relative",
                        color: "#212121",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "0%",
                          height: "2px",
                          bottom: -2,
                          left: 0,
                          backgroundColor: "#e53935",
                          transition: "width 0.3s ease",
                        },
                        "&:hover": {
                          color: "#e53935",
                          "&::after": {
                            width: "100%",
                          },
                        },
                      }}
                    >
                      Forgot Password?
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        position: "relative",
                        color: "#212121",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "0%",
                          height: "2px",
                          bottom: -2,
                          left: 0,
                          backgroundColor: "#e53935",
                          transition: "width 0.3s ease",
                        },
                        "&:hover": {
                          color: "#e53935",
                          "&::after": {
                            width: "100%",
                          },
                        },
                      }}
                      onClick={() => navigate("/logon")}
                    >
                      Create Account
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
{/* Forgot Password Dialog - עיצוב משודרג */}
<Dialog 
  open={forgotPasswordOpen} 
  onClose={handleForgotPasswordClose}
  TransitionComponent={Fade}
  TransitionProps={{ timeout: 500 }}
  PaperProps={{
    sx: {
      borderRadius: "16px",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      background: "linear-gradient(to bottom, #ffffff, #f9f9f9)",
      maxWidth: "450px",
      width: "100%",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        background: "red",
      },
      p: 0,
    }
  }}
>
  <Box sx={{ position: "relative", overflow: "hidden" }}>
    {/* רקע דקורטיבי */}
    <Box
      sx={{
        position: "absolute",
        top: -100,
        right: -100,
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(229,57,53,0.05) 0%, rgba(229,57,53,0) 70%)",
        zIndex: 0,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: -80,
        left: -80,
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(33,33,33,0.05) 0%, rgba(33,33,33,0) 70%)",
        zIndex: 0,
      }}
    />

    <DialogTitle 
      sx={{ 
        fontWeight: 600, 
        color: "#212121", 
        pt: 3,
        pb: 2,
        px: 3,
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        position: "relative",
        zIndex: 1,
      }}
    >
      <LockIcon sx={{ color: "#e53935", fontSize: 28 }} />
      <Typography variant="h5" component="span" sx={{ fontWeight: 600 }}>
        Reset Password
      </Typography>
    </DialogTitle>

    <DialogContent sx={{ px: 3, pt: 1, pb: 2, position: "relative", zIndex: 1 }}>
      <DialogContentText sx={{ mb: 3, color: "#424242" }}>
        Enter your email address and we'll send you instructions to reset your password.
      </DialogContentText>
      
      <Grow in={true} timeout={800} style={{ transformOrigin: '0 0 0' }}>
        <Box>
          <AnimatedTextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            error={resetStatus.type === "error"}
            helperText={resetStatus.type === "error" ? resetStatus.message : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: resetEmail ? [0, -10, 10, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <EmailIcon sx={{ color: resetStatus.type === "error" ? "#e53935" : "#9e9e9e" }} />
                  </motion.div>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#ffffff",
                transition: "all 0.3s ease",
              }
            }}
          />
        </Box>
      </Grow>
      
      <Collapse in={resetStatus.type === "success"}>
        <Alert 
          severity="success" 
          sx={{ 
            mt: 2,
            borderRadius: "8px",
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.4)" },
              "70%": { boxShadow: "0 0 0 10px rgba(76, 175, 80, 0)" },
              "100%": { boxShadow: "0 0 0 0 rgba(76, 175, 80, 0)" },
            }
          }}
          icon={<CheckCircleIcon fontSize="inherit" />}
        >
          {resetStatus.message}
        </Alert>
      </Collapse>
    </DialogContent>

    <DialogActions sx={{ px: 3, pb: 3, pt: 1, position: "relative", zIndex: 1 }}>
      <Button 
        onClick={handleForgotPasswordClose}
        sx={{ 
          color: "#212121",
          fontWeight: 500,
          "&:hover": { 
            backgroundColor: "rgba(0,0,0,0.05)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease",
        }}
      >
        Cancel
      </Button>
      <LoginButton
        onClick={handleResetPassword}
        variant="contained"
        disabled={resetStatus.type === "success"}
        sx={{ 
          px: 3,
          py: 1,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          backgroundColor: "#212121",
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
            backgroundColor: "#e53935",
            transform: "translateY(-3px)",
            boxShadow: "0 6px 20px rgba(229, 57, 53, 0.3)",
            "&::before": {
              transform: "translateX(100%)",
              transition: "all 0.7s ease",
            },
          },
          "&:active": {
            transform: "translateY(0)",
          },
          "&.Mui-disabled": {
            backgroundColor: "#9e9e9e",
            color: "#ffffff",
          }
        }}
        endIcon={<SendIcon />}
      >
        Send Reset Link
      </LoginButton>
    </DialogActions>
  </Box>
</Dialog>

            {/* Decorative elements */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, rgba(158,158,158,0.1) 0%, rgba(229,57,53,0.05) 100%)",
                opacity: 0.5,
                animation: "float 6s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 30,
                left: 30,
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, rgba(158,158,158,0.1) 0%, rgba(229,57,53,0.05) 100%)",
                opacity: 0.5,
                animation: "float 8s ease-in-out infinite 1s",
              }}
            />
          </LoginPaper>
        </Fade>

        {/* Footer text */}
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 4,
            color: "#757575",
            opacity: 0,
            animation: "fadeIn 1s ease forwards 1.5s",
            "@keyframes fadeIn": {
              to: { opacity: 1 }
            }
          }}
        >
          © {new Date().getFullYear()} Real Estate Portal | All Rights Reserved
        </Typography>
      </Container>
    </Box>
    
  );
};

export default Login;

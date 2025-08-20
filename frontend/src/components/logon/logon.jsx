// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { logonThunk } from "../../redux/slices/logonThunk";
// import { useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material";
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
// import LockIcon from '@mui/icons-material/Lock';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import PasswordSharpIcon from '@mui/icons-material/PasswordSharp';
// import Button from '@mui/material/Button';
// export const Logon = () => {
//     const name = useSelector(state => state.customers.customer_name);
//     const password = useSelector(state => state.customers.customer_password);
//     const [customer, setCustomer] = useState({
//         customerId: 0, customerName: name, customerPassword: password, customerCreditCardNumber: "",
//         customerCvv: "", customerValidThru: "", customerEmail: "", customerMonthPrice: 0
//     });
//     const dispatch = useDispatch();
//     const user = useSelector(state => state.customers.user);
//     const navigate = useNavigate();
    
//     const logon = async () => {
//         console.log("logon");
//         await dispatch(logonThunk(customer));
//     }
//     useEffect(() => {
//         console.log(name);
//         console.log(password);
//         if (user !== null && user.customerId > 0) {
//             console.log(user.customerId);
//             navigate(`/home`);
//         }
//     }, [user])
//     return <div id="logon">
//         <br/>
//         <PersonAddAlt1Icon id="personIcon"></PersonAddAlt1Icon><br />
//         <div id="details2">
//           <div className="text">
//           <TextField id="outlined-basic"  label="name*"  placeholder={name} value={name} variant="standard" onChange={(e) => setCustomer({ ...customer, customerName: e.target.value })}/><AccountBoxIcon id="icon"/><br/><br/>
//           </div>
//           <div className="text">
//           <TextField id="outlined-basic" label="password*" value={password} variant="standard" onChange={(e) => setCustomer({ ...customer, customerPassword: e.target.value })}/><LockIcon id="icon"/><br/><br/>
//           </div>
//           <div className="text">
//           <TextField id="outlined-basic" label="email*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerEmail: e.target.value })}/><AlternateEmailIcon id="icon"/><br/><br/>
//           </div>
//           <div className="text">
//           <TextField id="outlined-basic" label="creditCardNumber*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerCreditCardNumber: e.target.value })} /><CreditCardIcon id="icon"/><br/><br/>
//           </div>
//           <div className="text">
//           <TextField id="outlined-basic" label="validThru*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerValidThru: e.target.value })} /><CalendarMonthIcon id="icon"/><br/><br/>
//           </div>
//           <div className="text">
//           <TextField id="outlined-basic" label="cvv*" variant="standard" onChange={(e) => setCustomer({ ...customer, customerCvv: e.target.value })}/><PasswordSharpIcon id="icon"/><br/><br/>
//           </div>
//         {/* <button onClick={logon}>logon</button> */}
// <br />
//         <Button id="loginb" variant="contained"  sx={{ textTransform: 'lowercase' }} onClick={logon}>
//                logon
//             </Button></div>
//     </div>
// }
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logonThunk } from "../../redux/slices/logonThunk";
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
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PasswordSharpIcon from '@mui/icons-material/PasswordSharp';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HomeWorkIcon from '@mui/icons-material/HomeWork';

// Styled components with animations
const LogonPaper = styled(Paper)(({ theme }) => ({
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

const Logo = styled(PersonAddAlt1Icon)(({ theme }) => ({
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
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: "#212121", // צבע תווית שחור
    transition: "all 0.3s ease",
    "&.Mui-focused": {
      color: "#212121", // צבע שחור בפוקוס
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
  // סגנונות לשגיאות
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

const LogonButton = styled(Button)(({ theme }) => ({
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

export const Logon = () => {
  const name = useSelector(state => state.customers.customer_name);
  const password = useSelector(state => state.customers.customer_password);
  const [customer, setCustomer] = useState({
    customerId: 0,
    customerName: name,
    customerPassword: password,
    customerCreditCardNumber: "",
    customerCvv: "",
    customerValidThru: "",
    customerEmail: "",
    customerMonthPrice: 0
  });
  
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    email: "",
    creditCard: "",
    validThru: "",
    cvv: "",
    general: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showCvv, setShowCvv] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.customers.user);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  // Animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setLogoVisible(true), 300);
    const timer2 = setTimeout(() => setFormVisible(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  
  // Validation function
  const validateForm = () => {
    const newErrors = {
      name: "",
      password: "",
      email: "",
      creditCard: "",
      validThru: "",
      cvv: "",
      general: ""
    };
    
    let isValid = true;
    
    // Name validation: 2-14 characters, letters only
    if (!customer.customerName) {
      newErrors.name = "Username is required";
      isValid = false;
    } else if (customer.customerName.length < 2 || customer.customerName.length > 14) {
      newErrors.name = "Username must be between 2-14 characters";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(customer.customerName)) {
      newErrors.name = "Username must contain letters only";
      isValid = false;
    }
    
    // Password validation: 3-9 characters
    if (!customer.customerPassword) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (customer.customerPassword.length < 3 || customer.customerPassword.length > 9) {
      newErrors.password = "Password must be between 3-9 characters";
      isValid = false;
    }
    
    // Email validation
    if (!customer.customerEmail) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(customer.customerEmail)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    
    // Credit card validation
    if (!customer.customerCreditCardNumber) {
      newErrors.creditCard = "Credit card number is required";
      isValid = false;
    } else if (!/^\d{16}$/.test(customer.customerCreditCardNumber)) {
      newErrors.creditCard = "Credit card must be 16 digits";
      isValid = false;
    }
    
    // Valid thru validation (MM/YY format)
    if (!customer.customerValidThru) {
      newErrors.validThru = "Expiration date is required";
      isValid = false;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(customer.customerValidThru)) {
      newErrors.validThru = "Format must be MM/YY";
      isValid = false;
    }
    
    // CVV validation
    if (!customer.customerCvv) {
      newErrors.cvv = "CVV is required";
      isValid = false;
    } else if (!/^\d{3,4}$/.test(customer.customerCvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Logon function
  const logon = async () => {
    if (validateForm()) {
      try {
        await dispatch(logonThunk(customer));
      } catch (error) {
        setErrors({ ...errors, general: "Registration failed. Please try again." });
      }
    }
  };
  
  // Navigation effect
  useEffect(() => {
    if (user !== null && user.customerId > 0) {
      navigate(`/home`);
    }
  }, [user]);
  
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
          <LogonPaper elevation={6}>
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
                  Create Account
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
                  Sign Up
                </Typography>
                
                <Grow in={errors.general !== ""} timeout={500}>
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
                  {/* Username field */}
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
                    value={customer.customerName}
                    onChange={(e) => {
                      setCustomer({ ...customer, customerName: e.target.value });
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
                  
                  {/* Password field */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    variant="outlined"
                    value={customer.customerPassword}
                    onChange={(e) => {
                      setCustomer({ ...customer, customerPassword: e.target.value });
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
                  
                  {/* Email field */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                    onChange={(e) => {
                      setCustomer({ ...customer, customerEmail: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon sx={{ color: errors.email ? "#e53935" : "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                  {/* Credit Card field */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    id="creditCard"
                    label="Credit Card Number"
                    name="creditCard"
                    autoComplete="cc-number"
                    variant="outlined"
                    onChange={(e) => {
                      setCustomer({ ...customer, customerCreditCardNumber: e.target.value });
                      if (errors.creditCard) setErrors({ ...errors, creditCard: "" });
                    }}
                    error={Boolean(errors.creditCard)}
                    helperText={errors.creditCard}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon sx={{ color: errors.creditCard ? "#e53935" : "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                  {/* Expiration Date field */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    id="validThru"
                    label="Expiration Date (MM/YY)"
                    name="validThru"
                    autoComplete="cc-exp"
                    variant="outlined"
                    placeholder="MM/YY"
                    onChange={(e) => {
                      setCustomer({ ...customer, customerValidThru: e.target.value });
                      if (errors.validThru) setErrors({ ...errors, validThru: "" });
                    }}
                    error={Boolean(errors.validThru)}
                    helperText={errors.validThru}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon sx={{ color: errors.validThru ? "#e53935" : "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                  {/* CVV field */}
                  <AnimatedTextField
                    margin="normal"
                    required
                    fullWidth
                    id="cvv"
                    label="CVV"
                    name="cvv"
                    autoComplete="cc-csc"
                    variant="outlined"
                    type={showCvv ? "text" : "password"}
                    onChange={(e) => {
                      setCustomer({ ...customer, customerCvv: e.target.value });
                      if (errors.cvv) setErrors({ ...errors, cvv: "" });
                    }}
                    error={Boolean(errors.cvv)}
                    helperText={errors.cvv}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordSharpIcon sx={{ color: errors.cvv ? "#e53935" : "#9e9e9e" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle cvv visibility"
                            onClick={() => setShowCvv(!showCvv)}
                            edge="end"
                            sx={{
                              transition: "transform 0.3s ease",
                              "&:hover": { transform: "scale(1.1)" }
                            }}
                          >
                            {showCvv ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                  {/* Sign Up Button */}
                  <LogonButton
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={logon}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Create Account
                  </LogonButton>
                  
                  {/* Back to Login link */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 3,
                      opacity: 0.8,
                    }}
                  >
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
                      onClick={() => navigate("/login")}
                    >
                      Already have an account? Sign In
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </LogonPaper>
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

export default Logon;


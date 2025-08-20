// import { useEffect, useRef, useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { getRequiredPropertiesThunk } from "../../redux/slices/getRequiredPropertiesThunk";
// import { TextField } from "@mui/material";
// import { addRequiredPropertyThunk } from "../../redux/slices/addRequiredProperty";
// import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
// import { useNavigate } from "react-router-dom";
// import './requiredProperties.css';
// import { deleteRequiredPropertyThunk } from "../../redux/slices/deleteRequiredPropertyThunk";
// import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import Tooltip from '@mui/material/Tooltip';
// import { updateRequiredPropertyThunk } from "../../redux/slices/updateRequiredPropertyThunk";
// import Button from '@mui/material/Button';
// import Fab from '@mui/material/Fab';
// export const RequiredProperties = () => {
//    const dispatch = useDispatch();
//    const userMonthPrice = sessionStorage.getItem("userPrice");
//    //useSelector(state=>state.customers.customer_month_price);
//    const user = useSelector(state => state.customers.user);
//    const price = useSelector(state => state.customers.price_for_advertisement_property);
//    const userId = sessionStorage.getItem("userId");
//    const requiredProperties = useSelector(state => state.customers.propertiesForPurchases);
//    const [property, setProperty] = useState({ purchaserId: userId, minAreaProperty: 0, maxAreaProperty: 0, city: "", maxPrice: 0, propertyForPurchaseId: 0 });
//    const navigate = useNavigate();
//    const ref = useRef();
//    const refU = useRef();
//    const refPrice = useRef();
//    const [propertyForPurchaseId, setPropertyForPurchaseId] = useState();
//    const [x, setX] = useState();
//    const [y, setY] = useState();
//    const [menu, setMenu] = useState(false);
//    //    const rightClick = (e) => {
//    //       setX(e.clientX);
//    //       setY(e.clientY);
//    //       setMenu(true);
//    //       // console.log(menu);
//    //       e.preventDefault();
//    //   }
//    const Click = (e) => {
//       // setmenuEvent(false);
//       setMenu(false);
//       setPropertyForPurchaseId(-1);
//    }
//    const add = () => {
//       ref.current.showModal();
//       setProperty({ purchaserId: userId, minAreaProperty: "", maxAreaProperty: "", city: "", maxPrice: "", propertyForPurchaseId: 0 })
//    }

//    const ok = async () => {
//       debugger
//       console.log("ok");
//       note2();
//       dispatch(editMonthPrice());
//       console.log("price" + price);
//       await dispatch(addRequiredPropertyThunk({ property: property, price: price }));

//       ref.current.close();
//       // setProperty({ purchaserId: userId, minAreaProperty: 0, maxAreaProperty: 0, city: "", maxPrice: 0, propertyForPurchaseId: 0 })
//    }
//    const cancel = () => {
//       ref.current.close();
//       refU.current.close();
//    }
//    const search = async () => {
//       sessionStorage.setItem("propertyForPurchaseId", propertyForPurchaseId);
//       dispatch(searchPropertiesThunk(sessionStorage.getItem("propertyForPurchaseId")));
//       navigate('/home/search')
//    }
//    const note = () => {
//       refPrice.current.close();
//    }
//    const note2 = () => {
//       refPrice.current.showModal();
//    }
//    const update = () => {
//       refU.current.showModal();
//    }
//    const okU = async () => {
//       dispatch(updateRequiredPropertyThunk(property));
//       refU.current.close();
//    }
//    // const favorite = () => {
//    //    navigate('favoriteProperties');
//    // }
//    const remove = async () => {
//       dispatch(deleteRequiredPropertyThunk({ propertyCode: propertyForPurchaseId, price: price }));
//       note2();
//       dispatch(editMonthPriceN());
//    }
//    useEffect(() => {
//       dispatch(getRequiredPropertiesThunk(userId))
//       window.addEventListener('click', Click);
//       return () => {
//          window.removeEventListener('click', Click)
//       }

//    }, [])
//    return <div>
//       {menu && <div
//          style={{ position: "absolute", top: y, left: x }}>
//          <button onClick={remove}>delate</button>
//          <br />
//          <button onClick={update}> edit</button>
//          <br />
//          <button onClick={search}>search</button>
//       </div>}
//       {/* <button onClick={add}>add</button> */}
//       <Tooltip title="Add new required property" arrow>
//          <Fab id="add" onClick={add}>
//          <AddIcon ></AddIcon>
//          </Fab>
//       </Tooltip>
//       <table>
//          <thead>
//             <tr>
//                <th>maximal size</th>
//                <th>minaml size</th>
//                <th>city</th>
//                <th>maximal price</th>
//             </tr>
//          </thead>
//          <tbody>
//             {requiredProperties.map(property =>
//                <tr key={property.propertyForPurchaseId}
//                   onContextMenu={(e) => {
//                      setPropertyForPurchaseId(property.propertyForPurchaseId);
//                      setProperty({
//                         purchaserId: userId, minAreaProperty: property.minAreaProperty, maxAreaProperty: property.maxAreaProperty,
//                         city: property.city, maxPrice: property.maxPrice, propertyForPurchaseId: property.propertyForPurchaseId
//                      })
//                      setX(e.clientX);
//                      setY(e.clientY);
//                      setMenu(true);
//                      // console.log(menu);
//                      e.preventDefault();
//                   }}
//                   //  onContextMenu={rightClick}
//                   className={property.propertyForPurchaseId === propertyForPurchaseId ? "selcet" : "unSelect"}>
//                   <td >{property.maxAreaProperty}</td>
//                   <td >{property.minAreaProperty}</td>
//                   <td >{property.city}</td>
//                   <td >{property.maxPrice}</td>
//                </tr>
//             )}
//          </tbody>
//       </table>
//       {/* <button onClick={favorite}>favorite properties<FavoriteIcon></FavoriteIcon></button> */}
//       <dialog ref={ref}>
//          <TextField id="outlined-basic" label="maximal size" variant="outlined" onChange={(e) => setProperty({ ...property, maxAreaProperty: e.target.value })} value={property.maxAreaProperty} />
//          <TextField id="outlined-basic" label="minaml size" variant="outlined" onChange={(e) => setProperty({ ...property, minAreaProperty: e.target.value })} value={property.minAreaProperty} />
//          <TextField id="outlined-basic" label="city" variant="outlined" onChange={(e) => setProperty({ ...property, city: e.target.value })} value={property.city} />
//          <TextField id="outlined-basic" label="maximal price" variant="outlined" onChange={(e) => setProperty({ ...property, maxPrice: e.target.value })} value={property.maxPrice} />
//          <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={ok}>
//             ok
//             </Button>
//             <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={cancel}>
//             cancel
//             </Button>
//       </dialog> <dialog ref={refPrice} >note:
//          your price will be update to <div>{userMonthPrice}$</div>
//          <button onClick={note}>ok</button>
//       </dialog>
//       <dialog ref={refU}>
//          <TextField id="outlined-basic" label="maximal size" variant="outlined" onChange={(e) => setProperty({ ...property, maxAreaProperty: e.target.value })} value={property.maxAreaProperty} />
//          <TextField id="outlined-basic" label="minaml size" variant="outlined" onChange={(e) => setProperty({ ...property, minAreaProperty: e.target.value })} value={property.minAreaProperty} />
//          <TextField id="outlined-basic" label="city" variant="outlined" onChange={(e) => setProperty({ ...property, city: e.target.value })} value={property.city} />
//          <TextField id="outlined-basic" label="maximal price" variant="outlined" onChange={(e) => setProperty({ ...property, maxPrice: e.target.value })} value={property.maxPrice} />
//          <button onClick={okU}>ok</button>
//          <button onClick={cancel}>cancel</button>
//       </dialog>
//    </div>
// }





















import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequiredPropertiesThunk } from "../../redux/slices/getRequiredPropertiesThunk";
import { addRequiredPropertyThunk } from "../../redux/slices/addRequiredProperty";
import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
import { useNavigate } from "react-router-dom";
import { deleteRequiredPropertyThunk } from "../../redux/slices/deleteRequiredPropertyThunk";
import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
import { updateRequiredPropertyThunk } from "../../redux/slices/updateRequiredPropertyThunk";
import {
   Box,
   Typography,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Button,
   Menu,
   MenuItem,
   Fade,
   Grow,
   Card,
   Tooltip,
   Chip,
   CircularProgress,
   Alert,
   Snackbar,
   TextField,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Fab,
   Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Styled components
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
   borderRadius: '16px',
   boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
   maxHeight: '500px',
   overflow: 'auto',
   transition: 'all 0.3s ease',
   '&:hover': {
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
   },
}));

const StyledTableRow = styled(TableRow)(({ theme, selected }) => ({
   transition: 'all 0.2s ease',
   backgroundColor: selected ? 'rgba(229, 57, 53, 0.08)' : 'inherit',
   '&:nth-of-type(odd)': {
      backgroundColor: selected ? 'rgba(229, 57, 53, 0.08)' : 'rgba(0, 0, 0, 0.02)',
   },
   '&:hover': {
      backgroundColor: 'rgba(229, 57, 53, 0.05)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
   },
   cursor: 'context-menu',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   padding: '16px',
   fontSize: '0.95rem',
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
   backgroundColor: '#212121',
   color: '#ffffff',
   padding: '16px',
   fontSize: '0.95rem',
   fontWeight: 600,
   position: 'sticky',
   top: 0,
   zIndex: 10,
}));

const EmptyStateCard = styled(Card)(({ theme }) => ({
   padding: '32px',
   textAlign: 'center',
   borderRadius: '16px',
   boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
   backgroundColor: '#ffffff',
}));

const StyledFab = styled(Fab)(({ theme }) => ({
   position: 'fixed',
   bottom: 32,
   right: 32,
   backgroundColor: '#e53935',
   color: '#ffffff',
   boxShadow: '0 8px 16px rgba(229, 57, 53, 0.3)',
   '&:hover': {
      backgroundColor: '#d32f2f',
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 20px rgba(229, 57, 53, 0.4)',
   },
   transition: 'all 0.3s ease',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
   margin: '8px 0',
   '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
         borderColor: '#e53935',
      },
      '&.Mui-focused fieldset': {
         borderColor: '#e53935',
      },
   },
   '& .MuiInputLabel-root.Mui-focused': {
      color: '#e53935',
   },
}));

const StyledButton = styled(Button)(({ theme }) => ({
   backgroundColor: '#e53935',
   color: '#ffffff',
   padding: '10px 24px',
   borderRadius: '8px',
   fontWeight: 600,
   textTransform: 'none',
   boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
   '&:hover': {
      backgroundColor: '#d32f2f',
      boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
   },
   margin: '8px',
}));

export const RequiredProperties = () => {
   const dispatch = useDispatch();
   const userMonthPrice = sessionStorage.getItem("userPrice");
   const user = useSelector(state => state.customers.user);
   const price = useSelector(state => state.customers.price_for_advertisement_property);
   const userId = sessionStorage.getItem("userId");
   const requiredProperties = useSelector(state => state.customers.propertiesForPurchases);

   const [property, setProperty] = useState({
      purchaserId: userId,
      minAreaProperty: 0,
      maxAreaProperty: 0,
      city: "",
      maxPrice: 0,
      propertyForPurchaseId: 0
   });

   const navigate = useNavigate();
   const [isEditing, setIsEditing] = useState(false);
   const [openDialog, setOpenDialog] = useState(false);
   const [openPriceDialog, setOpenPriceDialog] = useState(false);
   const [loading, setLoading] = useState(true);
   const [snackbar, setSnackbar] = useState({
      open: false,
      message: '',
      severity: 'success'
   });

   // Context Menu Handlers
   const [propertyForPurchaseId, setPropertyForPurchaseId] = useState(null);
   const [anchorEl, setAnchorEl] = useState(null);

   const handleContextMenu = (event, propertyId, propertyData) => {
      event.preventDefault();
      event.stopPropagation();
      setPropertyForPurchaseId(propertyId);
      setProperty(propertyData);
      setAnchorEl(event.currentTarget);
   };

   const handleCloseContextMenu = () => {
      setAnchorEl(null);
      setPropertyForPurchaseId(null);
   };

   // Dialog Handlers
   const handleOpenDialog = () => {
      setIsEditing(false);
      setOpenDialog(true);
      setProperty({
         purchaserId: userId,
         minAreaProperty: "",
         maxAreaProperty: "",
         city: "",
         maxPrice: "",
         propertyForPurchaseId: 0
      });
   };

   const handleOpenEditDialog = (propertyToEdit) => {
      setIsEditing(true);
      setOpenDialog(true);
      setProperty({ ...propertyToEdit });
   };

   const handleCloseDialog = () => {
      setOpenDialog(false);
   };

   const handleOpenPriceDialog = () => {
      setOpenPriceDialog(true);
   };

   const handleClosePriceDialog = () => {
      setOpenPriceDialog(false);
   };

   const handleSnackbarClose = () => {
      setSnackbar({
         ...snackbar,
         open: false
      });
   };

   // Validation
   const validate = () => {
      if (!property.minAreaProperty || property.minAreaProperty.length === 0) {
         setSnackbar({ open: true, message: 'Minimal size is required', severity: 'error' });
         return false;
      }
      if (!property.maxAreaProperty || property.maxAreaProperty.length === 0) {
         setSnackbar({ open: true, message: 'Maximal size is required', severity: 'error' });
         return false;
      }
      if (!property.city || property.city.length === 0 || property.city.length > 11) {
         setSnackbar({ open: true, message: 'City is required and must be up to 11 characters', severity: 'error' });
         return false;
      }
      if (!property.maxPrice || property.maxPrice.length === 0) {
         setSnackbar({ open: true, message: 'Maximal price is required', severity: 'error' });
         return false;
      }
      return true;
   };

   // Action Handlers
   const add = () => {
      handleOpenDialog();
   };

   const ok = async () => {
      if (!validate()) {
         return;
      }

      handleOpenPriceDialog();
      dispatch(editMonthPrice());
      await dispatch(addRequiredPropertyThunk({ property: property, price: price }));
      handleCloseDialog();
      setSnackbar({
         open: true,
         message: 'Property requirement added successfully',
         severity: 'success'
      });
   };

   const cancel = () => {
      handleCloseDialog();
   };

   const update = () => {
      handleOpenEditDialog(property);
      handleCloseContextMenu();
   };

   const okU = async () => {
      if (!validate()) {
         return;
      }

      await dispatch(updateRequiredPropertyThunk(property));
      handleCloseDialog();
      setSnackbar({
         open: true,
         message: 'Property requirement updated successfully',
         severity: 'success'
      });
   };

   const remove = async () => {
      await dispatch(deleteRequiredPropertyThunk({ propertyCode: propertyForPurchaseId, price: price }));
      handleOpenPriceDialog();
      dispatch(editMonthPriceN());
      handleCloseContextMenu();
      setSnackbar({
         open: true,
         message: 'Property requirement deleted successfully',
         severity: 'success'
      });
   };

   const search = async () => {
      sessionStorage.setItem("propertyForPurchaseId", propertyForPurchaseId);
      await dispatch(searchPropertiesThunk(sessionStorage.getItem("propertyForPurchaseId")));
      navigate('/home/search');
      handleCloseContextMenu();
   };

   const note = () => {
      handleClosePriceDialog();
   };

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         await dispatch(getRequiredPropertiesThunk(userId));
         setLoading(false);
      };
      fetchData();

      // Close context menu on click outside
      const handleClickOutside = () => {
         handleCloseContextMenu();
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
         document.removeEventListener('click', handleClickOutside);
      };
   }, [dispatch, userId]);

   if (loading) {
      return (
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               minHeight: '300px'
            }}
         >
            <CircularProgress
               color="error"
               size={50}
               thickness={4}
               sx={{
                  boxShadow: '0 0 20px rgba(229, 57, 53, 0.2)',
                  borderRadius: '50%',
                  p: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
               }}
            />
            <Typography
               variant="body1"
               sx={{
                  mt: 3,
                  fontWeight: 500,
                  color: '#666666',
               }}
            >
               Loading your property requirements...
            </Typography>
         </Box>
      );
   }

   return (
      <Fade in={true} timeout={800}>
         <Box sx={{ position: 'relative' }}>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 4
               }}
            >
               <Typography
                  variant="h5"
                  component="h1"
                  sx={{
                     fontWeight: 700,
                     position: 'relative',
                     display: 'inline-block',
                     '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        width: '40px',
                        height: '4px',
                        backgroundColor: '#e53935',
                        borderRadius: '2px',
                     }
                  }}
               >
                  <HomeWorkIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
                  Your Property Requirements
               </Typography>
               <Chip
                  label={`${requiredProperties?.length || 0} requirements`}
                  color="primary"
                  sx={{
                     fontWeight: 600,
                     backgroundColor: 'rgba(229, 57, 53, 0.1)',
                     color: '#e53935',
                     borderRadius: '8px',
                     '& .MuiChip-label': {
                        px: 2
                     }
                  }}
               />
            </Box>

            {requiredProperties?.length > 0 ? (
               <Grow in={true} timeout={800}>
                  <Box>
                     {/* Table with scroll */}
                     <StyledTableContainer component={Paper}>
                        <Table stickyHeader aria-label="required properties table">
                           <TableHead>
                              <TableRow>
                               

                                 <StyledTableHeadCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                       <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
                                       Minimal Size
                                    </Box>
                                 </StyledTableHeadCell>
                                 <StyledTableHeadCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                       <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
                                       Maximal Size
                                    </Box>
                                 </StyledTableHeadCell>

                                 <StyledTableHeadCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                       <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
                                       City
                                    </Box>
                                 </StyledTableHeadCell>
                                 <StyledTableHeadCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                       <AttachMoneyIcon sx={{ mr: 1, fontSize: 20 }} />
                                       Maximal Price
                                    </Box>
                                 </StyledTableHeadCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {requiredProperties.map(property => (
                                 <StyledTableRow
                                    key={property.propertyForPurchaseId}
                                    selected={property.propertyForPurchaseId === propertyForPurchaseId}
                                    onContextMenu={(e) => handleContextMenu(e, property.propertyForPurchaseId, {
                                       purchaserId: userId,
                                       minAreaProperty: property.minAreaProperty,
                                       maxAreaProperty: property.maxAreaProperty,
                                       city: property.city,
                                       maxPrice: property.maxPrice,
                                       propertyForPurchaseId: property.propertyForPurchaseId
                                    })}
                                 >
                                    <StyledTableCell>
                                       {property.minAreaProperty} m²
                                    </StyledTableCell>
                                    <StyledTableCell>
                                       {property.maxAreaProperty} m²
                                    </StyledTableCell>
                                    <StyledTableCell>{property.city}</StyledTableCell>
                                    <StyledTableCell>
                                       <Chip
                                          label={`$${property.maxPrice.toLocaleString()}`}
                                          sx={{
                                             fontWeight: 600,
                                             backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                             borderRadius: '8px',
                                          }}
                                       />
                                    </StyledTableCell>
                                 </StyledTableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </StyledTableContainer>
                  </Box>
               </Grow>
            ) : (
               <Grow in={true} timeout={800}>
                  <EmptyStateCard>
                     <HomeWorkIcon
                        sx={{
                           fontSize: 60,
                           color: 'rgba(229, 57, 53, 0.2)',
                           mb: 2
                        }}
                     />
                     <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        No Property Requirements Yet
                     </Typography>
                     <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Add your first property requirement using the + button below.
                     </Typography>
                     <StyledButton
                        startIcon={<AddIcon />}
                        onClick={handleOpenDialog}
                     >
                        Add Requirement
                     </StyledButton>
                  </EmptyStateCard>
               </Grow>
            )}

            {/* Context Menu - Using Material-UI Menu */}
            <Menu
               open={Boolean(anchorEl)}
               anchorEl={anchorEl}
               onClose={handleCloseContextMenu}
               PaperProps={{
                  elevation: 3,
                  sx: {
                     borderRadius: '12px',
                     minWidth: 200,
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
               <MenuItem
                  onClick={remove}
                  sx={{
                     py: 1.5,
                     transition: 'all 0.2s ease',
                     '&:hover': {
                        backgroundColor: 'rgba(229, 57, 53, 0.08)',
                        transform: 'translateX(5px)',
                     }
                  }}
               >
                  <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
                  Delete requirement
               </MenuItem>
               <MenuItem
                  onClick={update}
                  sx={{
                     py: 1.5,
                     transition: 'all 0.2s ease',
                     '&:hover': {
                        backgroundColor: 'rgba(76, 175, 80, 0.08)',
                        transform: 'translateX(5px)',
                     }
                  }}
               >
                  <EditIcon fontSize="small" sx={{ mr: 1.5, color: '#4caf50' }} />
                  Edit requirement
               </MenuItem>
               <MenuItem
                  onClick={search}
                  sx={{
                     py: 1.5,
                     transition: 'all 0.2s ease',
                     '&:hover': {
                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                        transform: 'translateX(5px)',
                     }
                  }}
               >
                  <SearchIcon fontSize="small" sx={{ mr: 1.5, color: '#2196f3' }} />
                  Search properties
               </MenuItem>
            </Menu>

            {/* Add/Edit Property Dialog */}
            <Dialog
               open={openDialog}
               onClose={handleCloseDialog}
               PaperProps={{
                  sx: {
                     borderRadius: '16px',
                     padding: '16px',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  }
               }}
               maxWidth="sm"
               fullWidth
            >
               <DialogTitle sx={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  pb: 1,
                  color: '#212121'
               }}>
                  {isEditing ? 'Edit Property Requirement' : 'Add New Property Requirement'}
               </DialogTitle>
               <DialogContent>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                     <Grid item xs={12} sm={6}>
                        <StyledTextField
                           fullWidth
                           label="Minimal Size (m²)"
                           variant="outlined"
                           type="number"
                           value={property.minAreaProperty}
                           onChange={(e) => setProperty({ ...property, minAreaProperty: e.target.value })}
                           InputProps={{
                              startAdornment: (
                                 <SquareFootIcon sx={{ color: '#757575', mr: 1 }} />
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <StyledTextField
                           fullWidth
                           label="Maximal Size (m²)"
                           variant="outlined"
                           type="number"
                           value={property.maxAreaProperty}
                           onChange={(e) => setProperty({ ...property, maxAreaProperty: e.target.value })}
                           InputProps={{
                              startAdornment: (
                                 <SquareFootIcon sx={{ color: '#757575', mr: 1 }} />
                              ),
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <StyledTextField
                           fullWidth
                           label="City"
                           variant="outlined"
                           value={property.city}
                           onChange={(e) => setProperty({ ...property, city: e.target.value })}
                           InputProps={{
                              startAdornment: (
                                 <LocationOnIcon sx={{ color: '#757575', mr: 1 }} />
                              ),
                           }}
                           error={property.city.length > 11}
                           helperText={property.city.length > 11 ? 'City must be 11 characters or less' : ''}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <StyledTextField
                           fullWidth
                           label="Maximal Price ($)"
                           variant="outlined"
                           type="number"
                           value={property.maxPrice}
                           onChange={(e) => setProperty({ ...property, maxPrice: e.target.value })}
                           InputProps={{
                              startAdornment: (
                                 <AttachMoneyIcon sx={{ color: '#757575', mr: 1 }} />
                              ),
                           }}
                        />
                     </Grid>
                  </Grid>
               </DialogContent>
               <DialogActions sx={{ px: 3, pb: 3 }}>
                  <Button
                     onClick={cancel}
                     sx={{
                        color: '#757575',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                           backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        }
                     }}
                  >
                     Cancel
                  </Button>
                  <StyledButton onClick={isEditing ? okU : ok}>
                     {isEditing ? 'Save Changes' : 'Add Requirement'}
                  </StyledButton>
               </DialogActions>
            </Dialog>

            {/* Price Update Dialog */}
            <Dialog
               open={openPriceDialog}
               onClose={handleClosePriceDialog}
               PaperProps={{
                  sx: {
                     borderRadius: '16px',
                     padding: '16px',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                     textAlign: 'center'
                  }
               }}
            >
               <DialogTitle sx={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  pb: 1,
                  color: '#212121'
               }}>
                  Price Update
               </DialogTitle>
               <DialogContent>
                  <DialogContentText sx={{ mb: 2 }}>
                     Your monthly price will be updated to:
                  </DialogContentText>
                  <Chip
                     label={`${userMonthPrice}$`}
                     sx={{
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        padding: '24px 16px',
                        backgroundColor: 'rgba(229, 57, 53, 0.1)',
                        color: '#e53935',
                        borderRadius: '12px',
                        '& .MuiChip-label': {
                           px: 2
                        }
                     }}
                  />
               </DialogContent>
               <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                  <StyledButton onClick={note}>OK</StyledButton>
               </DialogActions>
            </Dialog>

            {/* Floating Action Button */}
            <StyledFab
               color="primary"
               aria-label="add"
               onClick={add}
            >
               <AddIcon />
            </StyledFab>

            {/* Snackbar for notifications */}
            <Snackbar
               open={snackbar.open}
               autoHideDuration={4000}
               onClose={handleSnackbarClose}
               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
               <Alert
                  onClose={handleSnackbarClose}
                  severity={snackbar.severity}
                  variant="filled"
                  sx={{
                     width: '100%',
                     borderRadius: '8px',
                     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
               >
                  {snackbar.message}
               </Alert>
            </Snackbar>
         </Box>
      </Fade>
   );
};

export default RequiredProperties;



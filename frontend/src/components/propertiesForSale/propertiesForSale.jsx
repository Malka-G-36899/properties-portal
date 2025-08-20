// import { useDispatch, useSelector } from "react-redux"
// import { getPropertiesForSaleThunk } from "../../redux/slices/getPropertiesForSaleThunk";
// import { useEffect, useRef, useState } from "react";
// import { TextField } from "@mui/material";
// import { addPropertyForSaleThunk } from "../../redux/slices/addPropertyForSaleThunk";
// import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
// import { deletePropertyForSaleThunk } from "../../redux/slices/deletePropertyForSaleThunk";
// import { useNavigate } from "react-router-dom";
// import AddIcon from '@mui/icons-material/Add';
// import Tooltip from '@mui/material/Tooltip';
// import Fab from '@mui/material/Fab';
// import Button from '@mui/material/Button';
// import { updatePropertyForSaleThunk } from "../../redux/slices/updatePropertyForSaleThunk";
// export const PropertiesForSale = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const propertiesForSale = useSelector(state => state.customers.propertyForSales);
//     const userId = sessionStorage.getItem("userId");
//     const userMonthPrice = sessionStorage.getItem("userPrice");
//     //useSelector(state=>state.customers.customer_month_price);
//     const price = useSelector(state => state.customers.price_for_advertisement_property);
//     const [property, setProperty] = useState({
//         sellsId: userId, propertyId: 0, propertyArea: 0, propertyCity: "", propertyNeighborhood: "",
//         propertyPrice: 0, propertyGeneralDescription: "", propertyNumOfInterests: 0, sellsemail: ""
//     });
//     const ref = useRef();
//     const refU = useRef();
//     const refPrice = useRef();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [menu, setMenu] = useState(false);

//     const Click = (e) => {

//         setMenu(false);
//         setPropertyForSaleId(-1);
//     }
//     const add = () => {

//         ref.current.showModal();
//         setProperty({
//             sellsId: userId, propertyId: 0, propertyArea: "", propertyCity: "", propertyNeighborhood: "",
//             propertyPrice: "", propertyGeneralDescription: "", propertyNumOfInterests: 0, sellsemail: ""
//         })

//     }
//     const cancel = () => {
//         ref.current.close();
//         refU.current.close();
//     }
//     const update = () => {
//         refU.current.showModal();
//      }
//      const okU = async () => {
//         dispatch(updatePropertyForSaleThunk(property));
//         refU.current.close();
//      }
//     const ok = async () => {

//         console.log("ok");
//         note2();
//         dispatch(editMonthPrice());
//         console.log("price" + price);
//         dispatch(addPropertyForSaleThunk({ property: property, price: price }));
//         ref.current.close();
//     }
//     const note = () => {
//         refPrice.current.close();
//     }
//     const note2 = () => {
//         refPrice.current.showModal();
//     }
//     const remove = async () => {

//         dispatch(deletePropertyForSaleThunk({ propertyCode: propertyForSaleId, price: price }));
//         note2();
//         dispatch(editMonthPriceN());
//     }



//     useEffect(() => {
//         dispatch(getPropertiesForSaleThunk(userId))
//         window.addEventListener('click', Click);
//         return () => {
//             window.removeEventListener('click', Click)
//         }

//     }, [])   
//     return <div>
//         {menu && <div
//             style={{ position: "absolute", top: y, left: x }}>
//             <button
//                 onClick={remove} >delate</button>
//             <br />
//             <button
//             onClick={update}
//              >edit</button>
//         </div>}
//         {/* <button onClick={add}>add<AddIcon></AddIcon></button> */}
//         <Tooltip title="Add new property for sale" arrow>
//         <Fab id="add" onClick={add}>
//          <AddIcon></AddIcon>
//          </Fab>
//         </Tooltip>
//         <table>
//             <thead>
//                 <tr>
//                     <th>size</th>
//                     <th>city</th>
//                     <th>neighborhood</th>
//                     <th>price</th>
//                     <th>description</th>
//                     <th>number of interests</th>
//                 </tr>
//             </thead>
//             <tbody style={{
//                 overflowY:"scroll",
//                 height:"1px",
//                 border:'2px solid red'
//             }}>
//                 {propertiesForSale.map(property =>
//                     <tr key={property.propertyId}
//                         onContextMenu={(e) => {
//                             setPropertyForSaleId(property.propertyId);
//                             setProperty({
//                                 sellsId: userId, propertyId: property.propertyId, propertyArea: property.propertyArea, propertyCity: property.propertyCity, propertyNeighborhood:property.propertyNeighborhood,
//                                 propertyPrice: property.propertyPrice, propertyGeneralDescription: property.propertyGeneralDescription, propertyNumOfInterests: property.propertyNumOfInterests, sellsemail: property.sellsemail

//                              })
//                             setX(e.clientX);
//                             setY(e.clientY);
//                             setMenu(true);
//                             // console.log(menu);
//                             e.preventDefault();
//                         }}
//                         className={property.propertyId === propertyForSaleId ? "selcet" : "unSelect"}>
//                         <td>{property.propertyArea}</td>
//                         <td>{property.propertyCity}</td>
//                         <td>{property.propertyNeighborhood}</td>
//                         <td>{property.propertyPrice}</td>
//                         <td>{property.propertyGeneralDescription}</td>
//                         <td>{property.propertyNumOfInterests}</td>
//                     </tr>
//                 )}

//             </tbody>
//         </table>
//         <dialog ref={ref}>
//             <TextField id="outlined-basic" label="propertyArea" variant="outlined" onChange={(e) => setProperty({ ...property, propertyArea: e.target.value })} value={property.propertyArea} />
//             <TextField id="outlined-basic" label="propertyCity" variant="outlined" onChange={(e) => setProperty({ ...property, propertyCity: e.target.value })} value={property.propertyCity} />
//             <TextField id="outlined-basic" label="propertyNeighborhood" variant="outlined" onChange={(e) => setProperty({ ...property, propertyNeighborhood: e.target.value })} value={property.propertyNeighborhood} />
//             <TextField id="outlined-basic" label="propertyPrice" variant="outlined" onChange={(e) => setProperty({ ...property, propertyPrice: e.target.value })} value={property.propertyPrice} />
//             <TextField id="outlined-basic" label="propertyGeneralDescription" variant="outlined" onChange={(e) => setProperty({ ...property, propertyGeneralDescription: e.target.value })} value={property.propertyGeneralDescription} />
//             <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={ok}>
//             ok
//             </Button>
//             <Button id="loginb" variant="contained" disableElevation sx={{ textTransform: 'lowercase' }} onClick={cancel}>
//             cancel
//             </Button>
//             {/* <button onClick={ok}>ok</button> */}
//             {/* <button onClick={cancel}>cancel</button> */}
//         </dialog>
//         <dialog ref={refPrice} >note:
//             your price will be update to <div>{userMonthPrice}$</div>
//             <button onClick={note}>ok</button>
//         </dialog>
//         <dialog ref={refU}>
//         <TextField id="outlined-basic" label="propertyArea" variant="outlined" onChange={(e) => setProperty({ ...property, propertyArea: e.target.value })} value={property.propertyArea} />
//             <TextField id="outlined-basic" label="propertyCity" variant="outlined" onChange={(e) => setProperty({ ...property, propertyCity: e.target.value })} value={property.propertyCity} />
//             <TextField id="outlined-basic" label="propertyNeighborhood" variant="outlined" onChange={(e) => setProperty({ ...property, propertyNeighborhood: e.target.value })} value={property.propertyNeighborhood} />
//             <TextField id="outlined-basic" label="propertyPrice" variant="outlined" onChange={(e) => setProperty({ ...property, propertyPrice: e.target.value })} value={property.propertyPrice} />
//             <TextField id="outlined-basic" label="propertyGeneralDescription" variant="outlined" onChange={(e) => setProperty({ ...property, propertyGeneralDescription: e.target.value })} value={property.propertyGeneralDescription} />
//          <button onClick={okU}>ok</button>
//          <button onClick={cancel}>cancel</button>
//       </dialog>
//     </div>
// }












// import { useDispatch, useSelector } from "react-redux";
// import { getPropertiesForSaleThunk } from "../../redux/slices/getPropertiesForSaleThunk";
// import { useEffect, useRef, useState } from "react";
// import { addPropertyForSaleThunk } from "../../redux/slices/addPropertyForSaleThunk";
// import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
// import { deletePropertyForSaleThunk } from "../../redux/slices/deletePropertyForSaleThunk";
// import { useNavigate } from "react-router-dom";
// import {
//     Box,
//     Typography,
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Button,
//     IconButton,
//     Fade,
//     Grow,
//     Card,
//     Tooltip,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar,
//     TextField,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Fab,
//     Grid
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import InterestsIcon from '@mui/icons-material/Interests';

// // Styled components
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     maxHeight: '500px', // גובה קבוע לטבלה - זה יגרום לגלילה
//     overflow: 'auto', // זה מאפשר גלילה
//     transition: 'all 0.3s ease',
//     '&:hover': {
//         boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme, selected }) => ({
//     transition: 'all 0.2s ease',
//     backgroundColor: selected ? 'rgba(229, 57, 53, 0.08)' : 'inherit',
//     '&:nth-of-type(odd)': {
//         backgroundColor: selected ? 'rgba(229, 57, 53, 0.08)' : 'rgba(0, 0, 0, 0.02)',
//     },
//     '&:hover': {
//         backgroundColor: 'rgba(229, 57, 53, 0.05)',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//     },
//     cursor: 'context-menu',
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     padding: '16px',
//     fontSize: '0.95rem',
// }));

// const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
//     backgroundColor: '#212121',
//     color: '#ffffff',
//     padding: '16px',
//     fontSize: '0.95rem',
//     fontWeight: 600,
//     position: 'sticky', // זה חשוב לכותרות קבועות בזמן גלילה
//     top: 0, // זה חשוב לכותרות קבועות בזמן גלילה
//     zIndex: 10,
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// const ContextMenu = styled(Paper)(({ theme }) => ({
//     position: 'fixed', // מיקום קבוע ביחס לחלון הדפדפן
//     padding: '8px 0',
//     borderRadius: '12px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
//     backgroundColor: '#ffffff',
//     zIndex: 1000,
//     minWidth: '200px',
//     animation: 'fadeIn 0.2s ease-in-out',
//     '@keyframes fadeIn': {
//         '0%': {
//             opacity: 0,
//             transform: 'scale(0.95)'
//         },
//         '100%': {
//             opacity: 1,
//             transform: 'scale(1)'
//         }
//     }
// }));

// const ContextMenuItem = styled(Box)(({ theme }) => ({
//     padding: '10px 16px',
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     '&:hover': {
//         backgroundColor: 'rgba(229, 57, 53, 0.08)',
//         transform: 'translateX(5px)',
//     }
// }));

// const StyledFab = styled(Fab)(({ theme }) => ({
//     position: 'fixed',
//     bottom: 32,
//     right: 32,
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     boxShadow: '0 8px 16px rgba(229, 57, 53, 0.3)',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         transform: 'translateY(-4px)',
//         boxShadow: '0 12px 20px rgba(229, 57, 53, 0.4)',
//     },
//     transition: 'all 0.3s ease',
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//     margin: '8px 0',
//     '& .MuiOutlinedInput-root': {
//         '&:hover fieldset': {
//             borderColor: '#e53935',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: '#e53935',
//         },
//     },
//     '& .MuiInputLabel-root.Mui-focused': {
//         color: '#e53935',
//     },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     padding: '10px 24px',
//     borderRadius: '8px',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
//     },
//     margin: '8px',
// }));

// export const PropertiesForSale = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const propertiesForSale = useSelector(state => state.customers.propertyForSales);
//     const userId = sessionStorage.getItem("userId");
//     const userMonthPrice = sessionStorage.getItem("userPrice");
//     const price = useSelector(state => state.customers.price_for_advertisement_property);

//     const [property, setProperty] = useState({
//         sellsId: userId,
//         propertyId: 0,
//         propertyArea: 0,
//         propertyCity: "",
//         propertyNeighborhood: "",
//         propertyPrice: 0,
//         propertyGeneralDescription: "",
//         propertyNumOfInterests: 0,
//         sellsemail: ""
//     });

//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [contextMenu, setContextMenu] = useState({
//         show: false,
//         x: 0,
//         y: 0
//     });
//     const [openDialog, setOpenDialog] = useState(false);
//     const [openPriceDialog, setOpenPriceDialog] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });

//     // מיקום התפריט בדיוק במקום שנלחץ
//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault(); // מניעת התפריט הדפדפן המובנה
//         event.stopPropagation(); // מניעת התפשטות האירוע

//         setPropertyForSaleId(propertyId);

//         // מיקום מדויק של העכבר
//         setContextMenu({
//             show: true,
//             x: event.pageX, // שימוש ב-pageX במקום clientX
//             y: event.pageY  // שימוש ב-pageY במקום clientY
//         });
//     };

//     const handleClose = () => {
//         setContextMenu({
//             show: false,
//             x: 0,
//             y: 0
//         });
//         setPropertyForSaleId(-1);
//     };

//     const handleOpenDialog = () => {
//         setOpenDialog(true);
//         setProperty({
//             sellsId: userId,
//             propertyId: 0,
//             propertyArea: "",
//             propertyCity: "",
//             propertyNeighborhood: "",
//             propertyPrice: "",
//             propertyGeneralDescription: "",
//             propertyNumOfInterests: 0,
//             sellsemail: ""
//         });
//     };

//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     const handleOpenPriceDialog = () => {
//         setOpenPriceDialog(true);
//     };

//     const handleClosePriceDialog = () => {
//         setOpenPriceDialog(false);
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     const handleAddProperty = async () => {
//         try {
//             dispatch(editMonthPrice());
//             await dispatch(addPropertyForSaleThunk({ property: property, price: price }));
//             setOpenDialog(false);
//             handleOpenPriceDialog();
//             setSnackbar({
//                 open: true,
//                 message: 'Property added successfully',
//                 severity: 'success'
//             });
//         } catch (error) {
//             setSnackbar({
//                 open: true,
//                 message: 'Failed to add property',
//                 severity: 'error'
//             });
//         }
//     };

//     const handleDeleteProperty = async () => {
//         try {
//             await dispatch(deletePropertyForSaleThunk({
//                 propertyCode: propertyForSaleId,
//                 price: price
//             }));
//             handleOpenPriceDialog();
//             dispatch(editMonthPriceN());
//             setSnackbar({
//                 open: true,
//                 message: 'Property deleted successfully',
//                 severity: 'success'
//             });
//         } catch (error) {
//             setSnackbar({
//                 open: true,
//                 message: 'Failed to delete property',
//                 severity: 'error'
//             });
//         }
//         handleClose();
//     };

//     const handleEditProperty = () => {
//         // Find the property to edit
//         const propertyToEdit = propertiesForSale.find(p => p.propertyId === propertyForSaleId);
//         if (propertyToEdit) {
//             setProperty(propertyToEdit);
//             setOpenDialog(true);
//         }
//         handleClose();
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(getPropertiesForSaleThunk(userId));
//             setLoading(false);
//         };

//         fetchData();

//         // Close context menu on click outside
//         const handleClickOutside = () => {
//             handleClose();
//         };

//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, [dispatch, userId]);

//     if (loading) {
//         return (
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     minHeight: '300px'
//                 }}
//             >
//                 <CircularProgress
//                     color="error"
//                     size={50}
//                     thickness={4}
//                     sx={{
//                         boxShadow: '0 0 20px rgba(229, 57, 53, 0.2)',
//                         borderRadius: '50%',
//                         p: 1,
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)'
//                     }}
//                 />
//                 <Typography
//                     variant="body1"
//                     sx={{
//                         mt: 3,
//                         fontWeight: 500,
//                         color: '#666666',
//                     }}
//                 >
//                     Loading your properties for sale...
//                 </Typography>
//             </Box>
//         );
//     }

//     return (
//         <Fade in={true} timeout={800}>
//             <Box sx={{ position: 'relative' }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         mb: 4
//                     }}
//                 >
//                     <Typography
//                         variant="h5"
//                         component="h1"
//                         sx={{
//                             fontWeight: 700,
//                             position: 'relative',
//                             display: 'inline-block',
//                             '&::after': {
//                                 content: '""',
//                                 position: 'absolute',
//                                 bottom: '-8px',
//                                 left: 0,
//                                 width: '40px',
//                                 height: '4px',
//                                 backgroundColor: '#e53935',
//                                 borderRadius: '2px',
//                             }
//                         }}
//                     >
//                         <HomeWorkIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
//                         Your Properties For Sale
//                     </Typography>

//                     <Chip
//                         label={`${propertiesForSale?.length || 0} properties`}
//                         color="primary"
//                         sx={{
//                             fontWeight: 600,
//                             backgroundColor: 'rgba(229, 57, 53, 0.1)',
//                             color: '#e53935',
//                             borderRadius: '8px',
//                             '& .MuiChip-label': {
//                                 px: 2
//                             }
//                         }}
//                     />
//                 </Box>



//             {propertiesForSale?.length > 0 ? (
//                 <Grow in={true} timeout={800}>
//                     <Box>
//                         {/* טבלה עם גלילה */}
//                         <StyledTableContainer component={Paper}>
//                             <Table stickyHeader aria-label="properties for sale table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Size
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 City
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <HomeWorkIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Neighborhood
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <AttachMoneyIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Price
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InterestsIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Interests
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {propertiesForSale.map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>
//                                                 {property.propertyArea} m²
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Chip
//                                                     label={`$${property.propertyPrice.toLocaleString()}`}
//                                                     sx={{
//                                                         fontWeight: 600,
//                                                         backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                         borderRadius: '8px',
//                                                     }}
//                                                 />
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Chip
//                                                     label={property.propertyNumOfInterests}
//                                                     sx={{
//                                                         fontWeight: 600,
//                                                         backgroundColor: property.propertyNumOfInterests > 0 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.05)',
//                                                         color: property.propertyNumOfInterests > 0 ? '#4caf50' : '#757575',
//                                                         borderRadius: '8px',
//                                                     }}
//                                                 />
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </StyledTableContainer>
//                     </Box>
//                 </Grow>
//             ) : (
//                 <Grow in={true} timeout={800}>
//                     <EmptyStateCard>
//                         <HomeWorkIcon
//                             sx={{
//                                 fontSize: 60,
//                                 color: 'rgba(229, 57, 53, 0.2)',
//                                 mb: 2
//                             }}
//                         />
//                         <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                             No Properties For Sale Yet
//                         </Typography>
//                         <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                             Add your first property using the + button below.
//                         </Typography>
//                         <StyledButton
//                             startIcon={<AddIcon />}
//                             onClick={handleOpenDialog}
//                         >
//                             Add Property
//                         </StyledButton>
//                     </EmptyStateCard>
//                 </Grow>
//             )}

//             {/* Context Menu - מיקום מדויק במקום הקליק */}
//             {contextMenu.show && (
//                 <ContextMenu
//                     style={{
//                         position: 'fixed',
//                         top: contextMenu.y,
//                         left: contextMenu.x,
//                     }}
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     <ContextMenuItem onClick={handleDeleteProperty}>
//                         <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                         <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                             Delete property
//                         </Typography>
//                     </ContextMenuItem>
//                     <ContextMenuItem onClick={handleEditProperty}>
//                         <EditIcon fontSize="small" sx={{ mr: 1.5, color: '#4caf50' }} />
//                         <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                             Edit property
//                         </Typography>
//                     </ContextMenuItem>
//                 </ContextMenu>
//             )}

//             {/* Add/Edit Property Dialog */}
//             <Dialog
//                 open={openDialog}
//                 onClose={handleCloseDialog}
//                 PaperProps={{
//                     sx: {
//                         borderRadius: '16px',
//                         padding: '16px',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
//                     }
//                 }}
//                 maxWidth="sm"
//                 fullWidth
//             >
//                 <DialogTitle sx={{
//                     fontWeight: 700,
//                     fontSize: '1.5rem',
//                     pb: 1,
//                     color: '#212121'
//                 }}>
//                     {property.propertyId === 0 ? 'Add New Property' : 'Edit Property'}
//                 </DialogTitle>
//                 <DialogContent>
//                     <Grid container spacing={2} sx={{ mt: 1 }}>
//                         <Grid item xs={12} sm={6}>
//                             <StyledTextField
//                                 fullWidth
//                                 label="Size (m²)"
//                                 variant="outlined"
//                                 type="number"
//                                 value={property.propertyArea}
//                                 onChange={(e) => setProperty({ ...property, propertyArea: e.target.value })}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <SquareFootIcon sx={{ color: '#757575', mr: 1 }} />
//                                     ),
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <StyledTextField
//                                 fullWidth
//                                 label="Price ($)"
//                                 variant="outlined"
//                                 type="number"
//                                 value={property.propertyPrice}
//                                 onChange={(e) => setProperty({ ...property, propertyPrice: e.target.value })}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <AttachMoneyIcon sx={{ color: '#757575', mr: 1 }} />
//                                     ),
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <StyledTextField
//                                 fullWidth
//                                 label="City"
//                                 variant="outlined"
//                                 value={property.propertyCity}
//                                 onChange={(e) => setProperty({ ...property, propertyCity: e.target.value })}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <LocationOnIcon sx={{ color: '#757575', mr: 1 }} />
//                                     ),
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <StyledTextField
//                                 fullWidth
//                                 label="Neighborhood"
//                                 variant="outlined"
//                                 value={property.propertyNeighborhood}
//                                 onChange={(e) => setProperty({ ...property, propertyNeighborhood: e.target.value })}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <HomeWorkIcon sx={{ color: '#757575', mr: 1 }} />
//                                     ),
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <StyledTextField
//                                 fullWidth
//                                 label="Description"
//                                 variant="outlined"
//                                 multiline
//                                 rows={4}
//                                 value={property.propertyGeneralDescription}
//                                 onChange={(e) => setProperty({ ...property, propertyGeneralDescription: e.target.value })}
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InfoOutlinedIcon sx={{ color: '#757575', mr: 1, mt: 1 }} />
//                                     ),
//                                 }}
//                             />
//                         </Grid>
//                     </Grid>
//                 </DialogContent>
//                 <DialogActions sx={{ px: 3, pb: 3 }}>
//                     <Button
//                         onClick={handleCloseDialog}
//                         sx={{
//                             color: '#757575',
//                             fontWeight: 600,
//                             textTransform: 'none',
//                             '&:hover': {
//                                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                             }
//                         }}
//                     >
//                         Cancel
//                     </Button>
//                     <StyledButton onClick={handleAddProperty}>
//                         {property.propertyId === 0 ? 'Add Property' : 'Save Changes'}
//                     </StyledButton>
//                 </DialogActions>
//             </Dialog>

//             {/* Price Update Dialog */}
//             <Dialog
//                 open={openPriceDialog}
//                 onClose={handleClosePriceDialog}
//                 PaperProps={{
//                     sx: {
//                         borderRadius: '16px',
//                         padding: '16px',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
//                         textAlign: 'center'
//                     }
//                 }}
//             >
//                 <DialogTitle sx={{
//                     fontWeight: 700,
//                     fontSize: '1.5rem',
//                     pb: 1,
//                     color: '#212121'
//                 }}>
//                     Price Update
//                 </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText sx={{ mb: 2 }}>
//                         Your monthly price will be updated to:
//                     </DialogContentText>
//                     <Chip
//                         label={`$${userMonthPrice}`}
//                         sx={{
//                             fontWeight: 700,
//                             fontSize: '1.5rem',
//                             padding: '24px 16px',
//                             backgroundColor: 'rgba(229, 57, 53, 0.1)',
//                             color: '#e53935',
//                             borderRadius: '12px',
//                             '& .MuiChip-label': {
//                                 px: 2
//                             }
//                         }}
//                     />
//                 </DialogContent>
//                 <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
//                     <StyledButton onClick={handleClosePriceDialog}>
//                         OK
//                     </StyledButton>
//                 </DialogActions>
//             </Dialog>

//             {/* Floating Action Button */}
//             <StyledFab
//                 color="primary"
//                 aria-label="add"
//                 onClick={handleOpenDialog}
//             >
//                 <AddIcon />
//             </StyledFab>

//             {/* Snackbar for notifications */}
//             <Snackbar
//                 open={snackbar.open}
//                 autoHideDuration={4000}
//                 onClose={handleSnackbarClose}
//                 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//             >
//                 <Alert
//                     onClose={handleSnackbarClose}
//                     severity={snackbar.severity}
//                     variant="filled"
//                     sx={{
//                         width: '100%',
//                         borderRadius: '8px',
//                         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//                     }}
//                 >
//                     {snackbar.message}
//                 </Alert>
//             </Snackbar>
//         </Box>
//         </Fade >
//     );
// };

// export default PropertiesForSale;











































// import { useDispatch, useSelector } from "react-redux";
// import { getPropertiesForSaleThunk } from "../../redux/slices/getPropertiesForSaleThunk";
// import { useEffect, useRef, useState } from "react";
// import { addPropertyForSaleThunk } from "../../redux/slices/addPropertyForSaleThunk";
// import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
// import { deletePropertyForSaleThunk } from "../../redux/slices/deletePropertyForSaleThunk";
// import { updatePropertyForSaleThunk } from "../../redux/slices/updatePropertyForSaleThunk"; // Import the update thunk
// import { useNavigate } from "react-router-dom";
// import {
//     Box,
//     Typography,
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Button,
//     IconButton,
//     Fade,
//     Grow,
//     Card,
//     Tooltip,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar,
//     TextField,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     Fab,
//     Grid
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import InterestsIcon from '@mui/icons-material/Interests';

// // Styled components
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     maxHeight: '500px', // גובה קבוע לטבלה - זה יגרום לגלילה
//     overflow: 'auto', // זה מאפשר גלילה
//     transition: 'all 0.3s ease',
//     '&:hover': {
//         boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme, selected }) => ({
//     transition: 'all 0.2s ease',
//     backgroundColor: selected ? 'rgba(229, 57, 53, 0.08)' : 'inherit',
//     '&:nth-of-type(odd)': {
//         backgroundColor: selected ? 'rgba(229, 57, 53, 0.08)' : 'rgba(0, 0, 0, 0.02)',
//     },
//     '&:hover': {
//         backgroundColor: 'rgba(229, 57, 53, 0.05)',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//     },
//     cursor: 'context-menu',
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     padding: '16px',
//     fontSize: '0.95rem',
// }));

// const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
//     backgroundColor: '#212121',
//     color: '#ffffff',
//     padding: '16px',
//     fontSize: '0.95rem',
//     fontWeight: 600,
//     position: 'sticky', // זה חשוב לכותרות קבועות בזמן גלילה
//     top: 0, // זה חשוב לכותרות קבועות בזמן גלילה
//     zIndex: 10,
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// const ContextMenu = styled(Paper)(({ theme }) => ({
//     position: 'fixed', // מיקום קבוע ביחס לחלון הדפדפן
//     padding: '8px 0',
//     borderRadius: '12px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
//     backgroundColor: '#ffffff',
//     zIndex: 1000,
//     minWidth: '200px',
//     animation: 'fadeIn 0.2s ease-in-out',
//     '@keyframes fadeIn': {
//         '0%': {
//             opacity: 0,
//             transform: 'scale(0.95)'
//         },
//         '100%': {
//             opacity: 1,
//             transform: 'scale(1)'
//         }
//     }
// }));

// const ContextMenuItem = styled(Box)(({ theme }) => ({
//     padding: '10px 16px',
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     '&:hover': {
//         backgroundColor: 'rgba(229, 57, 53, 0.08)',
//         transform: 'translateX(5px)',
//     }
// }));

// const StyledFab = styled(Fab)(({ theme }) => ({
//     position: 'fixed',
//     bottom: 32,
//     right: 32,
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     boxShadow: '0 8px 16px rgba(229, 57, 53, 0.3)',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         transform: 'translateY(-4px)',
//         boxShadow: '0 12px 20px rgba(229, 57, 53, 0.4)',
//     },
//     transition: 'all 0.3s ease',
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//     margin: '8px 0',
//     '& .MuiOutlinedInput-root': {
//         '&:hover fieldset': {
//             borderColor: '#e53935',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: '#e53935',
//         },
//     },
//     '& .MuiInputLabel-root.Mui-focused': {
//         color: '#e53935',
//     },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     padding: '10px 24px',
//     borderRadius: '8px',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
//     },
//     margin: '8px',
// }));

// export const PropertiesForSale = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const propertiesForSale = useSelector(state => state.customers.propertyForSales);
//     const userId = sessionStorage.getItem("userId");
//     const userMonthPrice = sessionStorage.getItem("userPrice");
//     const price = useSelector(state => state.customers.price_for_advertisement_property);

//     const [property, setProperty] = useState({
//         sellsId: userId,
//         propertyId: 0,
//         propertyArea: 0,
//         propertyCity: "",
//         propertyNeighborhood: "",
//         propertyPrice: 0,
//         propertyGeneralDescription: "",
//         propertyNumOfInterests: 0,
//         sellsemail: ""
//     });

//     const [isEditing, setIsEditing] = useState(false); // New state to track edit mode
//     const [openDialog, setOpenDialog] = useState(false); // State for controlling the "Add/Edit" dialog
//     const [openPriceDialog, setOpenPriceDialog] = useState(false); // State for controlling the "Price Update" dialog
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });

//     // Context Menu Handlers
//     const [contextMenu, setContextMenu] = useState({
//         show: false,
//         x: 0,
//         y: 0
//     });

//     const [propertyForSaleId, setPropertyForSaleId] = useState(null);
//     // Removed unnecessary state variables, using contextMenu state
//     // const [x, setX] = useState(0);
//     // const [y, setY] = useState(0);
//     // const [menu, setMenu] = useState(false);

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         event.stopPropagation();
//         setPropertyForSaleId(propertyId);
//         setProperty(propertiesForSale.find(p => p.propertyId === propertyId) || {
//             sellsId: userId,
//             propertyId: 0,
//             propertyArea: 0,
//             propertyCity: "",
//             propertyNeighborhood: "",
//             propertyPrice: 0,
//             propertyGeneralDescription: "",
//             propertyNumOfInterests: 0,
//             sellsemail: ""
//         }); // Populate the property state for editing
//         setContextMenu({
//             show: true,
//             x: event.pageX,
//             y: event.pageY,
//         });
//     };

//     const handleCloseContextMenu = () => {
//         setContextMenu({ ...contextMenu, show: false });
//         setPropertyForSaleId(null);
//     };

//     // Dialog Handlers
//     const handleOpenDialog = () => {
//         setIsEditing(false); // Reset to add mode
//         setOpenDialog(true);
//         setProperty({
//             sellsId: userId,
//             propertyId: 0,
//             propertyArea: "",
//             propertyCity: "",
//             propertyNeighborhood: "",
//             propertyPrice: "",
//             propertyGeneralDescription: "",
//             propertyNumOfInterests: 0,
//             sellsemail: ""
//         });
//     };

//     const handleOpenEditDialog = (propertyToEdit) => {
//         setIsEditing(true); // Set to edit mode
//         setOpenDialog(true);
//         setProperty({ ...propertyToEdit }); // Populate the form with the selected property's data
//     };

//     const handleCloseDialog = () => {
//         setOpenDialog(false);
//     };

//     const handleOpenPriceDialog = () => {
//         setOpenPriceDialog(true);
//     };

//     const handleClosePriceDialog = () => {
//         setOpenPriceDialog(false);
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     // Action Handlers (Modified to handle add/edit)
//     const add = () => {
//         handleOpenDialog();
//     };

//     const ok = async () => {
//         if (isEditing) {
//             // Handle Edit
//             try {
//                 await dispatch(updatePropertyForSaleThunk(property));
//                 setSnackbar({
//                     open: true,
//                     message: 'Property updated successfully',
//                     severity: 'success'
//                 });
//             } catch (error) {
//                 setSnackbar({
//                     open: true,
//                     message: 'Failed to update property',
//                     severity: 'error'
//                 });
//             }
//         } else {
//             // Handle Add
//             console.log("ok");
//             handleOpenPriceDialog();
//             dispatch(editMonthPrice());
//             console.log("price" + price);
//             dispatch(addPropertyForSaleThunk({ property: property, price: price }));
//         }
//         handleCloseDialog();
//     };

//     const cancel = () => {
//         handleCloseDialog();
//     };

//     const update = () => {
//         // Find the property to edit
//         const propertyToEdit = propertiesForSale.find(p => p.propertyId === propertyForSaleId);
//         if (propertyToEdit) {
//             handleOpenEditDialog(propertyToEdit);
//         }
//         handleCloseContextMenu();
//     };

//     const remove = async () => {
//         dispatch(deletePropertyForSaleThunk({ propertyCode: propertyForSaleId, price: price }));
//         handleOpenPriceDialog();
//         dispatch(editMonthPriceN());
//         handleCloseContextMenu();
//     };

//     const note = () => {
//         handleClosePriceDialog();
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(getPropertiesForSaleThunk(userId));
//             setLoading(false);
//         };

//         fetchData();

//         // Close context menu on click outside
//         const handleClickOutside = (event) => {
//             if (contextMenu.show && event.target.closest('.context-menu') === null) {
//                 handleCloseContextMenu();
//             }
//         };

//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, [dispatch, userId, contextMenu.show]);

//     if (loading) {
//         return (
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     minHeight: '300px'
//                 }}
//             >
//                 <CircularProgress
//                     color="error"
//                     size={50}
//                     thickness={4}
//                     sx={{
//                         boxShadow: '0 0 20px rgba(229, 57, 53, 0.2)',
//                         borderRadius: '50%',
//                         p: 1,
//                         backgroundColor: 'rgba(255, 255, 255, 0.8)'
//                     }}
//                 />
//                 <Typography
//                     variant="body1"
//                     sx={{
//                         mt: 3,
//                         fontWeight: 500,
//                         color: '#666666',
//                     }}
//                 >
//                     Loading your properties for sale...
//                 </Typography>
//             </Box>
//         );
//     }

//     return (
//         <Fade in={true} timeout={800}>
//             <Box sx={{ position: 'relative' }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         mb: 4
//                     }}
//                 >
//                     <Typography
//                         variant="h5"
//                         component="h1"
//                         sx={{
//                             fontWeight: 700,
//                             position: 'relative',
//                             display: 'inline-block',
//                             '&::after': {
//                                 content: '""',
//                                 position: 'absolute',
//                                 bottom: '-8px',
//                                 left: 0,
//                                 width: '40px',
//                                 height: '4px',
//                                 backgroundColor: '#e53935',
//                                 borderRadius: '2px',
//                             }
//                         }}
//                     >
//                         <HomeWorkIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />

// Your Properties For Sale
// </Typography>

// <Chip
//     label={`${propertiesForSale?.length || 0} properties`}
//     color="primary"
//     sx={{
//         fontWeight: 600,
//         backgroundColor: 'rgba(229, 57, 53, 0.1)',
//         color: '#e53935',
//         borderRadius: '8px',
//         '& .MuiChip-label': {
//             px: 2
//         }
//     }}
// />
// </Box>

// {propertiesForSale?.length > 0 ? (
// <Grow in={true} timeout={800}>
//     <Box>
//         {/* Table with scroll */}
//         <StyledTableContainer component={Paper}>
//             <Table stickyHeader aria-label="properties for sale table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableHeadCell>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
//                                 Size
//                             </Box>
//                         </StyledTableHeadCell>
//                         <StyledTableHeadCell>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
//                                 City
//                             </Box>
//                         </StyledTableHeadCell>
//                         <StyledTableHeadCell>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <HomeWorkIcon sx={{ mr: 1, fontSize: 20 }} />
//                                 Neighborhood
//                             </Box>
//                         </StyledTableHeadCell>
//                         <StyledTableHeadCell>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <AttachMoneyIcon sx={{ mr: 1, fontSize: 20 }} />
//                                 Price
//                             </Box>
//                         </StyledTableHeadCell>
//                         <StyledTableHeadCell>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                 Description
//                             </Box>
//                         </StyledTableHeadCell>
//                         <StyledTableHeadCell>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <InterestsIcon sx={{ mr: 1, fontSize: 20 }} />
//                                 Interests
//                             </Box>
//                         </StyledTableHeadCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {propertiesForSale.map(property => (
//                         <StyledTableRow
//                             key={property.propertyId}
//                             selected={property.propertyId === propertyForSaleId}
//                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                         >
//                             <StyledTableCell>
//                                 {property.propertyArea} m²
//                             </StyledTableCell>
//                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                             <StyledTableCell>
//                                 <Chip
//                                     label={`$${property.propertyPrice.toLocaleString()}`}
//                                     sx={{
//                                         fontWeight: 600,
//                                         backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                         borderRadius: '8px',
//                                     }}
//                                 />
//                             </StyledTableCell>
//                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                             <StyledTableCell>
//                                 <Chip
//                                     label={property.propertyNumOfInterests}
//                                     sx={{
//                                         fontWeight: 600,
//                                         backgroundColor: property.propertyNumOfInterests > 0 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.05)',
//                                         color: property.propertyNumOfInterests > 0 ? '#4caf50' : '#757575',
//                                         borderRadius: '8px',
//                                     }}
//                                 />
//                             </StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </StyledTableContainer>
//     </Box>
// </Grow>
// ) : (
// <Grow in={true} timeout={800}>
//     <EmptyStateCard>
//         <HomeWorkIcon
//             sx={{
//                 fontSize: 60,
//                 color: 'rgba(229, 57, 53, 0.2)',
//                 mb: 2
//             }}
//         />
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//             No Properties For Sale Yet
//         </Typography>
//         <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//             Add your first property using the + button below.
//         </Typography>
//         <StyledButton
//             startIcon={<AddIcon />}
//             onClick={handleOpenDialog}
//         >
//             Add Property
//         </StyledButton>
//     </EmptyStateCard>
// </Grow>
// )}

// {/* Context Menu - מיקום מדויק במקום הקליק */}
// {contextMenu.show && (
// <ContextMenu
//     className="context-menu" // Add a class for the click outside handler
//     style={{
//         position: 'fixed',
//         top: contextMenu.y,
//         left: contextMenu.x,
//         zIndex: 1100, // Ensure it's above other elements
//     }}
//     onClick={(e) => e.stopPropagation()} // Prevent the click from closing the menu
// >
//     <ContextMenuItem onClick={remove}>
//         <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//         <Typography variant="body2" sx={{ fontWeight: 500 }}>
//             Delete property
//         </Typography>
//     </ContextMenuItem>
//     <ContextMenuItem onClick={update}>
//         <EditIcon fontSize="small" sx={{ mr: 1.5, color: '#4caf50' }} />
//         <Typography variant="body2" sx={{ fontWeight: 500 }}>
//             Edit property
//         </Typography>
//     </ContextMenuItem>
// </ContextMenu>
// )}

// {/* Add/Edit Property Dialog */}
// <Dialog
// open={openDialog}
// onClose={handleCloseDialog}
// PaperProps={{
//     sx: {
//         borderRadius: '16px',
//         padding: '16px',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
//     }
// }}
// maxWidth="sm"
// fullWidth
// >
// <DialogTitle sx={{
//     fontWeight: 700,
//     fontSize: '1.5rem',
//     pb: 1,
//     color: '#212121'
// }}>
//     {isEditing ? 'Edit Property' : 'Add New Property'} {/* Dynamic title */}
// </DialogTitle>
// <DialogContent>
//     <Grid container spacing={2} sx={{ mt: 1 }}>
//         <Grid item xs={12} sm={6}>
//             <StyledTextField
//                 fullWidth
//                 label="Size (m²)"
//                 variant="outlined"
//                 type="number"
//                 value={property.propertyArea}
//                 onChange={(e) => setProperty({ ...property, propertyArea: e.target.value })}
//                 InputProps={{
//                     startAdornment: (
//                         <SquareFootIcon sx={{ color: '#757575', mr: 1 }} />
//                     ),
//                 }}
//             />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <StyledTextField
//                 fullWidth
//                 label="Price ($)"
//                 variant="outlined"
//                 type="number"
//                 value={property.propertyPrice}
//                 onChange={(e) => setProperty({ ...property, propertyPrice: e.target.value })}
//                 InputProps={{
//                     startAdornment: (
//                         <AttachMoneyIcon sx={{ color: '#757575', mr: 1 }} />
//                     ),
//                 }}
//             />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <StyledTextField
//                 fullWidth
//                 label="City"
//                 variant="outlined"
//                 value={property.propertyCity}
//                 onChange={(e) => setProperty({ ...property, propertyCity: e.target.value })}
//                 InputProps={{
//                     startAdornment: (
//                         <LocationOnIcon sx={{ color: '#757575', mr: 1 }} />
//                     ),
//                 }}
//             />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <StyledTextField
//                 fullWidth
//                 label="Neighborhood"
//                 variant="outlined"
//                 value={property.propertyNeighborhood}
//                 onChange={(e) => setProperty({ ...property, propertyNeighborhood: e.target.value })}
//                 InputProps={{
//                     startAdornment: (
//                         <HomeWorkIcon sx={{ color: '#757575', mr: 1 }} />
//                     ),
//                 }}
//             />
//         </Grid>
//         <Grid item xs={12}>
//             <StyledTextField
//                 fullWidth
//                 label="Description"
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 value={property.propertyGeneralDescription}
//                 onChange={(e) => setProperty({ ...property, propertyGeneralDescription: e.target.value })}
//                 InputProps={{
//                     startAdornment: (
//                         <InfoOutlinedIcon sx={{ color: '#757575', mr: 1, mt: 1 }} />
//                     ),
//                 }}
//             />
//         </Grid>
//     </Grid>
// </DialogContent>
// <DialogActions sx={{ px: 3, pb: 3 }}>
//     <Button
//         onClick={cancel}
//         sx={{
//             color: '#757575',
//             fontWeight: 600,
//             textTransform: 'none',
//             '&:hover': {
//                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//             }
//         }}
//     >
//         Cancel
//     </Button>
//     <StyledButton onClick={ok}>
//         {isEditing ? 'Save Changes' : 'Add Property'} {/* Dynamic button text */}
//     </StyledButton>
// </DialogActions>
// </Dialog>

// {/* Price Update Dialog */}
// <Dialog
// open={openPriceDialog}
// onClose={handleClosePriceDialog}
// PaperProps={{
//     sx: {
//         borderRadius: '16px',
//         padding: '16px',
//         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
//         textAlign: 'center'
//     }
// }}
// >
// <DialogTitle sx={{
//     fontWeight: 700,
//     fontSize: '1.5rem',
//     pb: 1,
//     color: '#212121'
// }}>
//     Price Update
// </DialogTitle>
// <DialogContent>
//     <DialogContentText sx={{ mb: 2 }}>
//         Your monthly price will be updated to:
//     </DialogContentText>
//     <Chip
//         label={`${userMonthPrice}`}
//         sx={{
//             fontWeight: 700,
//             fontSize: '1.5rem',
//             padding: '24px 16px',
//             backgroundColor: 'rgba(229, 57, 53, 0.1)',
//             color: '#e53935',
//             borderRadius: '12px',
//             '& .MuiChip-label': {
//                 px: 2
//             }
//         }}
//     />
// </DialogContent>
// <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
//     <StyledButton onClick={note}>
//         OK
//     </StyledButton>
// </DialogActions>
// </Dialog>

// {/* Floating Action Button */}
// <StyledFab
// color="primary"
// aria-label="add"
// onClick={add}
// >
// <AddIcon />
// </StyledFab>

// {/* Snackbar for notifications */}
// <Snackbar
// open={snackbar.open}
// autoHideDuration={4000}
// onClose={handleSnackbarClose}
// anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// >
// <Alert
//     onClose={handleSnackbarClose}
//     severity={snackbar.severity}
//     variant="filled"
//     sx={{
//         width: '100%',
//         borderRadius: '8px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//     }}
// >
//     {snackbar.message}
// </Alert>
// </Snackbar>
// </Box>
// </Fade>
// );
// };

// export default PropertiesForSale;



import { useDispatch, useSelector } from "react-redux";
import { getPropertiesForSaleThunk } from "../../redux/slices/getPropertiesForSaleThunk";
import { useEffect, useState } from "react";
import { addPropertyForSaleThunk } from "../../redux/slices/addPropertyForSaleThunk";
import { editMonthPrice, editMonthPriceN } from "../../redux/slices/customersSlice";
import { deletePropertyForSaleThunk } from "../../redux/slices/deletePropertyForSaleThunk";
import { updatePropertyForSaleThunk } from "../../redux/slices/updatePropertyForSaleThunk";
import { useNavigate } from "react-router-dom";
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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InterestsIcon from '@mui/icons-material/Interests';

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

export const PropertiesForSale = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const propertiesForSale = useSelector(state => state.customers.propertyForSales);
    const userId = sessionStorage.getItem("userId");
    const userMonthPrice = sessionStorage.getItem("userPrice");
    const price = useSelector(state => state.customers.price_for_advertisement_property);
    const [property, setProperty] = useState({
        sellsId: userId,
        propertyId: 0,
        propertyArea: 0,
        propertyCity: "",
        propertyNeighborhood: "",
        propertyPrice: 0,
        propertyGeneralDescription: "",
        propertyNumOfInterests: 0,
        sellsemail: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [openPriceDialog, setOpenPriceDialog] = useState(false);
    const [loading, setLoading] = useState(true);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    // Context Menu Handlers - שימוש ב-anchorEl כמו בקוד שעובד
    const [propertyForSaleId, setPropertyForSaleId] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleContextMenu = (event, propertyId) => {
        event.preventDefault();
        event.stopPropagation();
        setPropertyForSaleId(propertyId);
        setAnchorEl(event.currentTarget); // שימוש ב-currentTarget במקום ביצירת אובייקט מותאם אישית
    };

    const handleCloseContextMenu = () => {
        setAnchorEl(null);
        setPropertyForSaleId(null);
    };

    // Dialog Handlers
    const handleOpenDialog = () => {
        setIsEditing(false);
        setOpenDialog(true);
        setProperty({
            sellsId: userId,
            propertyId: 0,
            propertyArea: "",
            propertyCity: "",
            propertyNeighborhood: "",
            propertyPrice: "",
            propertyGeneralDescription: "",
            propertyNumOfInterests: 0,
            sellsemail: ""
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
        if (!property.propertyArea || property.propertyArea.length === 0) {
            setSnackbar({ open: true, message: 'Size is required', severity: 'error' });
            return false;
        }
        if (!property.propertyCity || property.propertyCity.length === 0 || property.propertyCity.length > 11) {
            setSnackbar({ open: true, message: 'City is required and must be up to 11 characters', severity: 'error' });
            return false;
        }
        if (!property.propertyNeighborhood || property.propertyNeighborhood.length === 0 || property.propertyNeighborhood.length > 11) {
            setSnackbar({ open: true, message: 'Neighborhood is required and must be up to 11 characters', severity: 'error' });
            return false;
        }
        if (!property.propertyPrice || property.propertyPrice.length === 0) {
            setSnackbar({ open: true, message: 'Price is required', severity: 'error' });
            return false;
        }
        if (!property.propertyGeneralDescription || property.propertyGeneralDescription.length > 49) {
            setSnackbar({ open: true, message: 'Description must be up to 49 characters', severity: 'error' });
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

        if (isEditing) {
            try {
                await dispatch(updatePropertyForSaleThunk(property));
                setSnackbar({
                    open: true,
                    message: 'Property updated successfully',
                    severity: 'success'
                });
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: 'Failed to update property',
                    severity: 'error'
                });
            }
        } else {
            handleOpenPriceDialog();
            dispatch(editMonthPrice());
            dispatch(addPropertyForSaleThunk({ property: property, price: price }));
        }
        handleCloseDialog();
    };

    const cancel = () => {
        handleCloseDialog();
    };

    const update = () => {
        const propertyToEdit = propertiesForSale.find(p => p.propertyId === propertyForSaleId);
        if (propertyToEdit) {
            handleOpenEditDialog(propertyToEdit);
        }
        handleCloseContextMenu();
    };

    const remove = async () => {
        dispatch(deletePropertyForSaleThunk({ propertyCode: propertyForSaleId, price: price }));
        handleOpenPriceDialog();
        dispatch(editMonthPriceN());
        handleCloseContextMenu();
    };

    const note = () => {
        handleClosePriceDialog();
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(getPropertiesForSaleThunk(userId));
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
                    Loading your properties for sale...
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
                        Your Properties For Sale
                    </Typography>
                    <Chip
                        label={`${propertiesForSale?.length || 0} properties`}
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

                {propertiesForSale?.length > 0 ? (
                    <Grow in={true} timeout={800}>
                        <Box>
                            {/* Table with scroll */}
                            <StyledTableContainer component={Paper}>
                                <Table stickyHeader aria-label="properties for sale table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableHeadCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
                                                    Size
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
                                                    <HomeWorkIcon sx={{ mr: 1, fontSize: 20 }} />
                                                    Neighborhood
                                                </Box>
                                            </StyledTableHeadCell>
                                            <StyledTableHeadCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <AttachMoneyIcon sx={{ mr: 1, fontSize: 20 }} />
                                                    Price
                                                </Box>
                                            </StyledTableHeadCell>
                                            <StyledTableHeadCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                                                    Description
                                                </Box>
                                            </StyledTableHeadCell>
                                            <StyledTableHeadCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <InterestsIcon sx={{ mr: 1, fontSize: 20 }} />
                                                    Interests
                                                </Box>
                                            </StyledTableHeadCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {propertiesForSale.map(property => (
                                            <StyledTableRow
                                                key={property.propertyId}
                                                selected={property.propertyId === propertyForSaleId}
                                                onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
                                            >
                                                <StyledTableCell>
                                                    {property.propertyArea} m²
                                                </StyledTableCell>
                                                <StyledTableCell>{property.propertyCity}</StyledTableCell>
                                                <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
                                                <StyledTableCell>
                                                    <Chip
                                                        label={`$${property.propertyPrice.toLocaleString()}`}
                                                        sx={{
                                                            fontWeight: 600,
                                                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                            borderRadius: '8px',
                                                        }}
                                                    />
                                                </StyledTableCell>
                                                <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
                                                <StyledTableCell>
                                                    <Chip
                                                        label={property.propertyNumOfInterests}
                                                        sx={{
                                                            fontWeight: 600,
                                                            backgroundColor: property.propertyNumOfInterests > 0 ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                                                            color: property.propertyNumOfInterests > 0 ? '#4caf50' : '#757575',
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
                                No Properties For Sale Yet
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                Add your first property using the + button below.
                            </Typography>
                            <StyledButton
                                startIcon={<AddIcon />}
                                onClick={handleOpenDialog}
                            >
                                Add Property
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
                        Delete property
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
                        Edit property
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
                        {isEditing ? 'Edit Property' : 'Add New Property'}
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    fullWidth
                                    label="Size (m²)"
                                    variant="outlined"
                                    type="number"
                                    value={property.propertyArea}
                                    onChange={(e) => setProperty({ ...property, propertyArea: e.target.value })}
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
                                    label="Price ($)"
                                    variant="outlined"
                                    type="number"
                                    value={property.propertyPrice}
                                    onChange={(e) => setProperty({ ...property, propertyPrice: e.target.value })}
                                    InputProps={{
                                        startAdornment: (
                                            <AttachMoneyIcon sx={{ color: '#757575', mr: 1 }} />
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    fullWidth
                                    label="City"
                                    variant="outlined"
                                    value={property.propertyCity}
                                    onChange={(e) => setProperty({ ...property, propertyCity: e.target.value })}
                                    InputProps={{
                                        startAdornment: (
                                            <LocationOnIcon sx={{ color: '#757575', mr: 1 }} />
                                        ),
                                    }}
                                    error={property.propertyCity.length > 11}
                                    helperText={property.propertyCity.length > 11 ? 'City must be 11 characters or less' : ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    fullWidth
                                    label="Neighborhood"
                                    variant="outlined"
                                    value={property.propertyNeighborhood}
                                    onChange={(e) => setProperty({ ...property, propertyNeighborhood: e.target.value })}
                                    InputProps={{
                                        startAdornment: (
                                            <HomeWorkIcon sx={{ color: '#757575', mr: 1 }} />
                                        ),
                                    }}
                                    error={property.propertyNeighborhood.length > 11}
                                    helperText={property.propertyNeighborhood.length > 11 ? 'Neighborhood must be 11 characters or less' : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    fullWidth
                                    label="Description"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={property.propertyGeneralDescription}
                                    onChange={(e) => setProperty({ ...property, propertyGeneralDescription: e.target.value })}
                                    InputProps={{
                                        startAdornment: (
                                            <InfoOutlinedIcon sx={{ color: '#757575', mr: 1, mt: 1 }} />
                                        ),
                                    }}
                                    error={property.propertyGeneralDescription.length > 49}
                                    helperText={property.propertyGeneralDescription.length > 49 ? 'Description must be 49 characters or less' : ''}
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
                        <StyledButton onClick={ok}>{isEditing ? 'Save Changes' : 'Add Property'}</StyledButton>
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

export default PropertiesForSale;









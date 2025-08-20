// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import { useNavigate } from "react-router-dom";
// import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";

// export const FavoriteProperties = () => {
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const userId = sessionStorage.getItem("userId");
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [menu, setMenu] = useState(false);
//     const Click = () => {
//         setMenu(false);
//         setPropertyForSaleId(-1);
//     }

//     const unFavorite = async () => {
//     if(favoriteProperties.length>0)   await dispatch(removePropertyFromFavoriteListThunk({ customerCode: sessionStorage.getItem("userId"), propertyCode: propertyForSaleId }));
//     }
//     useEffect(() => {
//         dispatch(getFavoritePropertiesThunk(userId));
//         window.addEventListener('click', Click);
//         return () => {
//             window.removeEventListener('click', Click)
//         }
//     }, [])
//     return <div>
//         {menu && <div
//             style={{ position: "absolute", top: y, left: x }}>
//             <button onClick={unFavorite}>remove from favorite</button>
//         </div>}
//         <table>
//             <thead>
//                 <tr>
//                     <th>description</th>
//                     <th>size</th>
//                     <th>city</th>
//                     <th>neighborhood</th>
//                     <th>price</th>
//                     <th>sells email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {favoriteProperties?.map(property =>
//                     <tr key={property.propertyId}
//                         onContextMenu={(e) => {
//                             setPropertyForSaleId(property.propertyId);
//                             setX(e.clientX);
//                             setY(e.clientY);
//                             setMenu(true);
//                             e.preventDefault();
//                         }}
//                         className={property.propertyId === propertyForSaleId ? "selcet" : "unSelect"}>
//                         <td>{property.propertyGeneralDescription}</td>
//                         <td>{property.propertyArea}</td>
//                         <td>{property.propertyCity}</td>
//                         <td>{property.propertyNeighborhood}</td>
//                         <td>{property.propertyPrice}</td>
//                         <td>{property.sellsemail}</td>
//                     </tr>
//                 )}

//             </tbody>
//         </table>

//     </div>
// }
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import { useNavigate } from "react-router-dom";
// import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";
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
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// // Styled components
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     overflow: 'hidden',
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
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//     borderRadius: '8px',
//     padding: '8px 16px',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
//     },
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const FavoriteProperties = () => {
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const userId = sessionStorage.getItem("userId");
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         setPropertyForSaleId(propertyId);
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//         setPropertyForSaleId(-1);
//     };

//     const unFavorite = async () => {
//         if (favoriteProperties.length > 0) {
//             try {
//                 await dispatch(removePropertyFromFavoriteListThunk({ 
//                     customerCode: sessionStorage.getItem("userId"), 
//                     propertyCode: propertyForSaleId 
//                 }));
//                 setSnackbar({
//                     open: true,
//                     message: 'Property removed from favorites',
//                     severity: 'success'
//                 });
//             } catch (error) {
//                 setSnackbar({
//                     open: true,
//                     message: 'Failed to remove property from favorites',
//                     severity: 'error'
//                 });
//             }
//             handleClose();
//         }
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(getFavoritePropertiesThunk(userId));
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
//                     Loading your favorite properties...
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
//                         <FavoriteIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
//                         Your Favorite Properties
//                     </Typography>

//                     <Chip
//                         label={`${favoriteProperties?.length || 0} properties`}
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

//                 {favoriteProperties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="favorite properties table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
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
//                                                 <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Seller Email
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {favoriteProperties?.map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
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
//                                             <StyledTableCell>
//                                                 <Tooltip title="Send email">
//                                                     <Button
//                                                         startIcon={<EmailIcon />}
//                                                         href={`mailto:${property.sellsemail}`}
//                                                         sx={{
//                                                             textTransform: 'none',
//                                                             color: '#212121',
//                                                             '&:hover': {
//                                                                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                             }
//                                                         }}
//                                                     >
//                                                         {property.sellsemail}
//                                                     </Button>
//                                                 </Tooltip>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </StyledTableContainer>
//                     </Grow>
//                 ) : (
//                     <Grow in={true} timeout={800}>
//                         <EmptyStateCard>
//                             <FavoriteIcon
//                                 sx={{
//                                     fontSize: 60,
//                                     color: 'rgba(229, 57, 53, 0.2)',
//                                     mb: 2
//                                 }}
//                             />
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 No Favorite Properties Yet
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Browse properties and add them to your favorites to see them here.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}
//                     PaperProps={{
//                         elevation: 3,
//                         sx: {
//                             borderRadius: '12px',
//                             minWidth: 200,
//                             overflow: 'visible',
//                             '&:before': {
//                                 content: '""',
//                                 display: 'block',
//                                 position: 'absolute',
//                                 top: 0,
//                                 right: 14,
//                                 width: 10,
//                                 height: 10,
//                                 bgcolor: 'background.paper',
//                                 transform: 'translateY(-50%) rotate(45deg)',
//                                 zIndex: 0,
//                             },
//                         },
//                     }}
//                 >
//                     <MenuItem
//                         onClick={unFavorite}
//                         sx={{
//                             py: 1.5,
//                             transition: 'all 0.2s ease',

//                             '&:hover': {
//                                 backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                 transform: 'translateX(5px)',
//                             }
//                         }}
//                     >
//                         <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                         Remove from favorites
//                     </MenuItem>
//                 </Menu>

//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 >
//                     <Alert 
//                         onClose={handleSnackbarClose} 
//                         severity={snackbar.severity} 
//                         variant="filled"
//                         sx={{ 
//                             width: '100%',
//                             borderRadius: '8px',
//                             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//                         }}
//                     >
//                         {snackbar.message}
//                     </Alert>
//                 </Snackbar>
//             </Box>
//         </Fade>
//     );
// };

// export default FavoriteProperties;





























































// import 'jspdf-autotable'; // Import jspdf-autotable first
// import { jsPDF } from "jspdf";
// import { format } from 'date-fns';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";
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
//     Fade,
//     Grow,
//     Card,
//     Tooltip,
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// // Styled components (unchanged)
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     overflow: 'hidden',
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
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//     borderRadius: '8px',
//     padding: '8px 16px',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
//     },
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const FavoriteProperties = () => {
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const userId = sessionStorage.getItem("userId");
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         setPropertyForSaleId(propertyId);
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//         setPropertyForSaleId(-1);
//     };

//     const unFavorite = async () => {
//         if (favoriteProperties.length > 0) {
//             try {
//                 await dispatch(removePropertyFromFavoriteListThunk({
//                     customerCode: sessionStorage.getItem("userId"),
//                     propertyCode: propertyForSaleId
//                 }));
//                 setSnackbar({
//                     open: true,
//                     message: 'Property removed from favorites',
//                     severity: 'success'
//                 });
//             } catch (error) {
//                 setSnackbar({
//                     open: true,
//                     message: 'Failed to remove property from favorites',
//                     severity: 'error'
//                 });
//             }
//             handleClose();
//         }
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(getFavoritePropertiesThunk(userId));
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

//     const generatePDF = () => {
//         if (!favoriteProperties || favoriteProperties.length === 0) {
//             setSnackbar({
//                 open: true,
//                 message: 'No properties to export.',
//                 severity: 'info'
//             });
//             return;
//         }

//         try {
//             const doc = new jsPDF({
//                 orientation: 'landscape',
//                 unit: 'mm',
//                 format: 'a4'
//             });

//             const now = new Date();
//             const formattedDate = format(now, 'dd/MM/yyyy HH:mm');

//             doc.setFontSize(18);
//             doc.text('Favorite Properties', 14, 15);
//             doc.setFontSize(10);
//             doc.setTextColor(100);
//             doc.text(`Generated on: ${formattedDate}`, 14, 22);
//             doc.setTextColor(0);

//             const tableColumn = ["Description", "Size", "City", "Neighborhood", "Price", "Seller Email"];
//             const tableRows = [];

//             favoriteProperties.forEach(property => {
//                 const propertyData = [
//                     property.propertyGeneralDescription,
//                     `${property.propertyArea} m²`,
//                     property.propertyCity,
//                     property.propertyNeighborhood,
//                     property.propertyPrice.toLocaleString(),
//                     property.sellsemail
//                 ];
//                 tableRows.push(propertyData);
//             });

//             doc.autoTable({
//                 head: [tableColumn],
//                 body: tableRows,
//                 startY: 30,
//                 styles: {
//                     fontSize: 9,
//                     textColor: 0,
//                 },
//                 headStyles: {
//                     fillColor: [33, 33, 33], // Dark Grey
//                     textColor: 255, // White
//                     fontStyle: 'bold'
//                 },
//                 alternateRowStyles: {
//                     fillColor: [245, 245, 245] // Light Grey
//                 },
//             });

//             doc.save('favorite_properties.pdf');
//             setSnackbar({
//                 open: true,
//                 message: 'Properties exported to PDF',
//                 severity: 'success'
//             });
//         } catch (error) {
//             console.error("Error generating PDF:", error);
//             setSnackbar({
//                 open: true,
//                 message: 'Error exporting to PDF. Check console for details.',
//                 severity: 'error'
//             });
//         }
//     };

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
//                     Loading your favorite properties...
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
//                         <FavoriteIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
//                         Your Favorite Properties
//                     </Typography>

//                     <Chip
//                         label={`${favoriteProperties?.length || 0} properties`}
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

//                 <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={generatePDF}
//                     sx={{ mb: 2, backgroundColor: '#64b5f6', '&:hover': { backgroundColor: '#42a5f5' } }}
//                 >
//                     Export to PDF
//                 </Button>

//                 {favoriteProperties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="favorite properties table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
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
//                                                 <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Seller Email
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {favoriteProperties?.map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyArea} m²
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Chip
//                                                     label={`${property.propertyPrice.toLocaleString()}`}
//                                                     sx={{
//                                                         fontWeight: 600,
//                                                         backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                         borderRadius: '8px',
//                                                     }}
//                                                 />
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Tooltip title="Send email">
//                                                     <Button
//                                                         startIcon={<EmailIcon />}
//                                                         href={`mailto:${property.sellsemail}`}
//                                                         sx={{
//                                                             textTransform: 'none',
//                                                             color: '#212121',
//                                                             '&:hover': {
//                                                                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                             }
//                                                         }}
//                                                     >
//                                                         {property.sellsemail}
//                                                     </Button>
//                                                 </Tooltip>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </StyledTableContainer>
//                     </Grow>
//                 ) : (
//                     <Grow in={true} timeout={800}>
//                         <EmptyStateCard>
//                             <FavoriteIcon
//                                 sx={{
//                                     fontSize: 60,
//                                     color: 'rgba(229, 57, 53, 0.2)',
//                                     mb: 2
//                                 }}
//                             />
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 No Favorite Properties Yet
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Browse properties and add them to your favorites to see them here.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}
//                     PaperProps={{
//                         elevation: 3,
//                         sx: {
//                             borderRadius: '12px',
//                             minWidth: 200,
//                             overflow: 'visible',
//                             '&:before': {
//                                 content: '""',
//                                 display: 'block',
//                                 position: 'absolute',
//                                 top: 0,
//                                 right: 14,
//                                 width: 10,
//                                 height: 10,
//                                 bgcolor: 'background.paper',
//                                 transform: 'translateY(-50%) rotate(45deg)',
//                                 zIndex: 0,
//                             },
//                         },
//                     }}
//                 >
//                     <MenuItem
//                         onClick={unFavorite}
//                         sx={{
//                             py: 1.5,
//                             transition: 'all 0.2s ease',

//                             '&:hover': {
//                                 backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                 transform: 'translateX(5px)',
//                             }
//                         }}
//                     >
//                         <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                         Remove from favorites
//                     </MenuItem>
//                 </Menu>

//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 >
//                     <Alert
//                         onClose={handleSnackbarClose}
//                         severity={snackbar.severity}
//                         variant="filled"
//                         sx={{
//                             width: '100%',
//                             borderRadius: '8px',
//                             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//                         }}
//                     >
//                         {snackbar.message}
//                     </Alert>
//                 </Snackbar>
//             </Box>
//         </Fade>
//     );
// };

// export default FavoriteProperties;




















// import 'jspdf-autotable'; // Import jspdf-autotable first
// import { jsPDF } from "jspdf";
// import { format } from 'date-fns';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";
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
//     Fade,
//     Grow,
//     Card,
//     Tooltip,
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // Import the PDF icon

// // Styled components (unchanged)
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     overflow: 'hidden',
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
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//     borderRadius: '8px',
//     padding: '8px 16px',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
//     },
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const FavoriteProperties = () => {
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const userId = sessionStorage.getItem("userId");
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         setPropertyForSaleId(propertyId);
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//         setPropertyForSaleId(-1);
//     };

//     const unFavorite = async () => {
//         if (favoriteProperties.length > 0) {
//             try {
//                 await dispatch(removePropertyFromFavoriteListThunk({
//                     customerCode: sessionStorage.getItem("userId"),
//                     propertyCode: propertyForSaleId
//                 }));
//                 setSnackbar({
//                     open: true,
//                     message: 'Property removed from favorites',
//                     severity: 'success'
//                 });
//             } catch (error) {
//                 setSnackbar({
//                     open: true,
//                     message: 'Failed to remove property from favorites',
//                     severity: 'error'
//                 });
//             }
//             handleClose();
//         }
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(getFavoritePropertiesThunk(userId));
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

//     const generatePDF = () => {
//         if (!favoriteProperties || favoriteProperties.length === 0) {
//             setSnackbar({
//                 open: true,
//                 message: 'No properties to export.',
//                 severity: 'info'
//             });
//             return;
//         }

//         try {
//             const doc = new jsPDF({
//                 orientation: 'landscape',
//                 unit: 'mm',
//                 format: 'a4'
//             });

//             const now = new Date();
//             const formattedDate = format(now, 'dd/MM/yyyy HH:mm');

//             doc.setFontSize(18);
//             doc.text('Favorite Properties', 14, 15);
//             doc.setFontSize(10);
//             doc.setTextColor(100);
//             doc.text(`Generated on: ${formattedDate}`, 14, 22);
//             doc.setTextColor(0);

//             const tableColumn = ["Description", "Size", "City", "Neighborhood", "Price", "Seller Email"];
//             const tableRows = [];

//             favoriteProperties.forEach(property => {
//                 const propertyData = [
//                     property.propertyGeneralDescription,
//                     `${property.propertyArea} m²`,
//                     property.propertyCity,
//                     property.propertyNeighborhood,
//                     property.propertyPrice.toLocaleString(),
//                     property.sellsemail
//                 ];
//                 tableRows.push(propertyData);
//             });

//             doc.autoTable({
//                 head: [tableColumn],
//                 body: tableRows,
//                 startY: 30,
//                 styles: {
//                     fontSize: 9,
//                     textColor: 0,
//                 },
//                 headStyles: {
//                     fillColor: [33, 33, 33], // Dark Grey
//                     textColor: 255, // White
//                     fontStyle: 'bold'
//                 },
//                 alternateRowStyles: {
//                     fillColor: [245, 245, 245] // Light Grey
//                 },
//             });

//             doc.save('favorite_properties.pdf');
//             setSnackbar({
//                 open: true,
//                 message: 'Properties exported to PDF',
//                 severity: 'success'
//             });
//         } catch (error) {
//             console.error("Error generating PDF:", error);
//             setSnackbar({
//                 open: true,
//                 message: 'Error exporting to PDF. Check console for details.',
//                 severity: 'error'
//             });
//         }
//     };

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
//                     Loading your favorite properties...
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
//                         <FavoriteIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
//                         Your Favorite Properties
//                     </Typography>

//                     <Chip
//                         label={`${favoriteProperties?.length || 0} properties`}
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

//                 <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={generatePDF}
//                     startIcon={<PictureAsPdfIcon />} // Add the PDF icon
//                     sx={{
//                         mb: 2,
//                         backgroundColor: '#e53935', // Match the primary color
//                         '&:hover': {
//                             backgroundColor: '#d32f2f', // Darken on hover
//                         },
//                         // Add some spacing around the icon
//                         '& .MuiButton-startIcon': {
//                             marginRight: '8px',
//                         },
//                     }}
//                 >
//                     Export to PDF
//                 </Button>

//                 {favoriteProperties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="favorite properties table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
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
//                                                 <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Seller Email
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {favoriteProperties?.map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyArea} m²
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Chip
//                                                     label={`${property.propertyPrice.toLocaleString()}`}
//                                                     sx={{
//                                                         fontWeight: 600,
//                                                         backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                         borderRadius: '8px',
//                                                     }}
//                                                 />
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Tooltip title="Send email">
//                                                     <Button
//                                                         startIcon={<EmailIcon />}
//                                                         href={`mailto:${property.sellsemail}`}
//                                                         sx={{
//                                                             textTransform: 'none',
//                                                             color: '#212121',
//                                                             '&:hover': {
//                                                                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                             }
//                                                         }}
//                                                     >
//                                                         {property.sellsemail}
//                                                     </Button>
//                                                 </Tooltip>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </StyledTableContainer>
//                     </Grow>
//                 ) : (
//                     <Grow in={true} timeout={800}>
//                         <EmptyStateCard>
//                             <FavoriteIcon
//                                 sx={{
//                                     fontSize: 60,
//                                     color: 'rgba(229, 57, 53, 0.2)',
//                                     mb: 2
//                                 }}
//                             />
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 No Favorite Properties Yet
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Browse properties and add them to your favorites to see them here.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}
//                     PaperProps={{
//                         elevation: 3,
//                         sx: {
//                             borderRadius: '12px',
//                             minWidth: 200,
//                             overflow: 'visible',
//                             '&:before': {
//                                 content: '""',
//                                 display: 'block',
//                                  position: 'absolute',
//                                  top: 0,
//                                  right: 14,
//                                  width: 10,
//                                  height: 10,
//                                  bgcolor: 'background.paper',
//                                  transform: 'translateY(-50%) rotate(45deg)',
//                                  zIndex: 0,
//                              },
//                          },
//                      }}
//                  >
//                      <MenuItem
//                          onClick={unFavorite}
//                          sx={{
//                              py: 1.5,
//                              transition: 'all 0.2s ease',

//                              '&:hover': {
//                                  backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                  transform: 'translateX(5px)',
//                              }
//                          }}
//                      >
//                          <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                          Remove from favorites
//                      </MenuItem>
//                  </Menu>

//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 >
//                     <Alert
//                         onClose={handleSnackbarClose}
//                         severity={snackbar.severity}
//                         variant="filled"
//                         sx={{
//                             width: '100%',
//                             borderRadius: '8px',
//                             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//                         }}
//                     >
//                         {snackbar.message}
//                     </Alert>
//                 </Snackbar>
//             </Box>
//         </Fade>
//     );
// };

// export default FavoriteProperties;































// import 'jspdf-autotable'; // Import jspdf-autotable first
// import { jsPDF } from "jspdf";
// import { format } from 'date-fns';
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";
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
//     Fade,
//     Grow,
//     Card,
//     Tooltip,
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar,
//     IconButton
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // Import the PDF icon
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// // Styled components (unchanged)
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     maxHeight: '450px', // גובה קבוע לטבלה - זה יגרום לגלילה
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
//     position: 'sticky', // זה חשוב לכותרות קבועות בזמן גלילה
//     top: 0, // זה חשוב לכותרות קבועות בזמן גלילה
//     fontWeight: 600,
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//     borderRadius: '8px',
//     padding: '8px 16px',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
//     backgroundColor: '#e53935',
//     color: '#ffffff',
//     '&:hover': {
//         backgroundColor: '#d32f2f',
//         transform: 'translateY(-2px)',
//         boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
//     },
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const FavoriteProperties = () => {
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const userId = sessionStorage.getItem("userId");
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });
//     const [sortConfig, setSortConfig] = useState({ key: "price", direction: 'asc' });

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         setPropertyForSaleId(propertyId);
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//         setPropertyForSaleId(-1);
//     };

//     const unFavorite = async () => {
//         if (favoriteProperties.length > 0) {
//             try {
//                 await dispatch(removePropertyFromFavoriteListThunk({
//                     customerCode: sessionStorage.getItem("userId"),
//                     propertyCode: propertyForSaleId
//                 }));
//                 setSnackbar({
//                     open: true,
//                     message: 'Property removed from favorites',
//                     severity: 'success'
//                 });
//             } catch (error) {
//                 setSnackbar({
//                     open: true,
//                     message: 'Failed to remove property from favorites',
//                     severity: 'error'
//                 });
//             }
//             handleClose();
//         }
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(getFavoritePropertiesThunk(userId));
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

//     const generatePDF = () => {
//         if (!favoriteProperties || favoriteProperties.length === 0) {
//             setSnackbar({
//                 open: true,
//                 message: 'No properties to export.',
//                 severity: 'info'
//             });
//             return;
//         }

//         try {
//             const doc = new jsPDF({
//                 orientation: 'landscape',
//                 unit: 'mm',
//                 format: 'a4'
//             });

//             const now = new Date();
//             const formattedDate = format(now, 'dd/MM/yyyy HH:mm');

//             doc.setFontSize(18);
//             doc.text('Favorite Properties', 14, 15);
//             doc.setFontSize(10);
//             doc.setTextColor(100);
//             doc.text(`Generated on: ${formattedDate}`, 14, 22);
//             doc.setTextColor(0);

//             const tableColumn = ["Description", "Size", "City", "Neighborhood", "Price", "Seller Email"];
//             const tableRows = [];

//             favoriteProperties.forEach(property => {
//                 const propertyData = [
//                     property.propertyGeneralDescription,
//                     `${property.propertyArea} m²`,
//                     property.propertyCity,
//                     property.propertyNeighborhood,
//                     property.propertyPrice.
//                         toLocaleString(),
//                     property.sellsemail
//                 ];
//                 tableRows.push(propertyData);
//             });

//             doc.autoTable({
//                 head: [tableColumn],
//                 body: tableRows,
//                 startY: 30,
//                 styles: {
//                     fontSize: 9,
//                     textColor: 0,
//                 },
//                 headStyles: {
//                     fillColor: [33, 33, 33], // Dark Grey
//                     textColor: 255, // White
//                     fontStyle: 'bold'
//                 },
//                 alternateRowStyles: {
//                     fillColor: [245, 245, 245] // Light Grey
//                 },
//             });

//             doc.save('favorite_properties.pdf');
//             setSnackbar({
//                 open: true,
//                 message: 'Properties exported to PDF',
//                 severity: 'success'
//             });
//         } catch (error) {
//             console.error("Error generating PDF:", error);
//             setSnackbar({
//                 open: true,
//                 message: 'Error exporting to PDF. Check console for details.',
//                 severity: 'error'
//             });
//         }
//     };

//     const sortedProperties = () => {
//         if (!favoriteProperties) return [];
//         const { key, direction } = sortConfig;
//         const sorted = [...favoriteProperties];

//         if (key !== null) {
//             sorted.sort((a, b) => {
//                 let valueA, valueB;

//                 switch (key) {
//                     case 'price':
//                         valueA = a.propertyPrice;
//                         valueB = b.propertyPrice;
//                         break;
//                     case 'size':
//                         valueA = parseFloat(a.propertyArea);
//                         valueB = parseFloat(b.propertyArea);
//                         break;
//                     default:
//                         return 0;
//                 }

//                 if (valueA < valueB) {
//                     return direction === 'asc' ? -1 : 1;
//                 }
//                 if (valueA > valueB) {
//                     return direction === 'asc' ? 1 : -1;
//                 }
//                 return 0;
//             });
//         }

//         return sorted;
//     };

//     const requestSort = (key) => {
//         let direction = 'asc';
//         if (sortConfig.key === key && sortConfig.direction === 'asc') {
//             direction = 'desc';
//         }
//         setSortConfig({ key, direction });
//     };

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
//                     Loading your favorite properties...
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
//                         mb: 2
//                     }}
//                 >   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <Typography
//                             variant="h5"
//                             component="h1"
//                             sx={{
//                                 fontWeight: 700,
//                                 position: 'relative',
//                                 display: 'inline-block',
//                                 '&::after': {
//                                     content: '""',
//                                     position: 'absolute',
//                                     bottom: '-8px',
//                                     left: 0,
//                                     width: '40px',
//                                     height: '4px',
//                                     backgroundColor: '#e53935',
//                                     borderRadius: '2px',
//                                 }
//                             }}
//                         >
//                             <FavoriteIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
//                             Your Favorite Properties
//                         </Typography>
//                     </Box>
//                     <Box>
//                     <Chip
//                         label={`${favoriteProperties?.length || 0} properties`}
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
//                     />  <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={generatePDF}
//                         startIcon={<PictureAsPdfIcon />} // Add the PDF icon
//                         sx={{
//                             mb: 2,
//                             backgroundColor: '#e53935', // Match the primary color
//                             '&:hover': {
//                                 backgroundColor: '#c32f2c', // Darken on hover
//                             },
//                             ml: 2,
//                             mb: "none" // Added margin-left
//                             // Add some spacing around the icon
//                             // '& .MuiButton-startIcon': {
//                             //     marginRight: '8px',
//                             // },
//                         }}
//                     >
//                         Export to PDF
//                     </Button>
//                     </Box>      
//                 </Box>



//                 {favoriteProperties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="favorite properties table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('size')}>
//                                                 <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Size
//                                                 {sortConfig.key === 'size' && (
//                                                     sortConfig.direction === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
//                                                 )}
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
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('price')}>
//                                                 <AttachMoneyIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Price
//                                                 {sortConfig.key === 'price' && (
//                                                     sortConfig.direction === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
//                                                 )}
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Seller Email
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody >
//                                     {sortedProperties().map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
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
//                                             <StyledTableCell>
//                                                 <Tooltip title="Send email">
//                                                     <Button
//                                                         startIcon={<EmailIcon />}
//                                                         href={`mailto:${property.sellsemail}`}
//                                                         sx={{
//                                                             textTransform: 'none',
//                                                             color: '#212121',
//                                                             '&:hover': {
//                                                                 backgroundColor: 'rgba(0, 0, 0, 0.05)',
//                                                             }
//                                                         }}
//                                                     >
//                                                         {property.sellsemail}
//                                                     </Button>
//                                                 </Tooltip>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </StyledTableContainer>
//                     </Grow>
//                 ) : (
//                     <Grow in={true} timeout={800}>
//                         <EmptyStateCard>
//                             <FavoriteIcon
//                                 sx={{
//                                     fontSize: 60,
//                                     color: 'rgba(229, 57, 53, 0.2)',
//                                     mb: 2
//                                 }}
//                             />
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 No Favorite Properties Yet
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Browse properties and add them to your favorites to see them here.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}
//                     PaperProps={{
//                         elevation: 3,
//                         sx: {
//                             borderRadius: '12px',
//                             minWidth: 200,
//                             overflow: 'visible',
//                             '&:before': {
//                                 content: '""',
//                                 display: 'block',
//                                 position: 'absolute',
//                                 top: 0,
//                                 right: 14,
//                                 width: 10,
//                                 height: 10,
//                                 bgcolor: 'background.paper',
//                                 transform: 'translateY(-50%) rotate(45deg)',
//                                 zIndex: 0,
//                             },
//                         },
//                     }}
//                 >
//                     <MenuItem
//                         onClick={unFavorite}
//                         sx={{
//                             py: 1.5,
//                             transition: 'all 0.2s ease',

//                             '&:hover': {
//                                 backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                 transform: 'translateX(5px)',
//                             }
//                         }}
//                     >
//                         <DeleteOutlineIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                         Remove from favorites
//                     </MenuItem>
//                 </Menu>

//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                 >
//                     <Alert
//                         onClose={handleSnackbarClose}
//                         severity={snackbar.severity}
//                         variant="filled"
//                         sx={{
//                             width: '100%',
//                             borderRadius: '8px',
//                             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
//                         }}
//                     >
//                         {snackbar.message}
//                     </Alert>
//                 </Snackbar>
//             </Box>
//         </Fade>
//     );
// };

// export default FavoriteProperties;

import 'jspdf-autotable'; // Import jspdf-autotable first
import { jsPDF } from "jspdf";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
import { removePropertyFromFavoriteListThunk } from "../../redux/slices/removePropertyFromFavoriteListThunk";
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
    Fade,
    Grow,
    Card,
    Tooltip,
    Menu,
    MenuItem,
    Chip,
    CircularProgress,
    Alert,
    Snackbar,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Styled components
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    maxHeight: '450px',
    overflow: 'auto',
    transition: 'all 0.3s ease',
    position: 'relative',
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
    position: 'relative',
    zIndex: 1,
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#212121',
    color: '#ffffff',
    padding: '16px',
    fontSize: '0.95rem',
    position: 'sticky',
    top: 0,
    fontWeight: 600,
    zIndex: 10,
}));

const ActionButton = styled(Button)(({ theme }) => ({
    borderRadius: '8px',
    padding: '8px 16px',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 12px rgba(229, 57, 53, 0.2)',
    backgroundColor: '#e53935',
    color: '#ffffff',
    '&:hover': {
        backgroundColor: '#d32f2f',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(229, 57, 53, 0.3)',
    },
}));

const EmptyStateCard = styled(Card)(({ theme }) => ({
    padding: '32px',
    textAlign: 'center',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
}));

export const FavoriteProperties = () => {
    const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
    const userId = sessionStorage.getItem("userId");
    const dispatch = useDispatch();
    const [propertyForSaleId, setPropertyForSaleId] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    const [sortConfig, setSortConfig] = useState({ key: "price", direction: 'asc' });
    
    // State חדש לתפריט האימייל
    const [emailMenuAnchor, setEmailMenuAnchor] = useState(null);
    const [selectedEmail, setSelectedEmail] = useState(null);

    const handleContextMenu = (event, propertyId) => {
        event.preventDefault();
        setPropertyForSaleId(propertyId);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setPropertyForSaleId(-1);
    };

    // פונקציה לסגירת תפריט האימייל
    const handleEmailMenuClose = () => {
        setEmailMenuAnchor(null);
        setSelectedEmail(null);
    };

    const unFavorite = async () => {
        if (favoriteProperties.length > 0) {
            try {
                await dispatch(removePropertyFromFavoriteListThunk({
                    customerCode: sessionStorage.getItem("userId"),
                    propertyCode: propertyForSaleId
                }));
                setSnackbar({
                    open: true,
                    message: 'Property removed from favorites',
                    severity: 'success'
                });
            } catch (error) {
                setSnackbar({
                    open: true,
                    message: 'Failed to remove property from favorites',
                    severity: 'error'
                });
            }
            handleClose();
        }
    };

    const handleSnackbarClose = () => {
        setSnackbar({
            ...snackbar,
            open: false
        });
    };

    // פונקציה מעודכנת לפתיחת Gmail
    const handleSendEmail = (email, property) => {
        try {
            const subject = `Inquiry about property in ${property.propertyCity}`;
            const body = `Hello,

I am interested in your property with the following details:

Description: ${property.propertyGeneralDescription}
Location: ${property.propertyCity}, ${property.propertyNeighborhood}
Size: ${property.propertyArea} m²
Price: ${property.propertyPrice.toLocaleString()}

Please contact me for more information.

Best regards`;

            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.open(gmailUrl, '_blank');

            setSnackbar({
                open: true,
                message: 'Opening Gmail compose window...',
                severity: 'success'
            });

        } catch (error) {
            console.error('Error opening Gmail:', error);
            setSnackbar({
                open: true,
                message: 'Failed to open Gmail',
                severity: 'error'
            });
        }
    };

    // פונקציה לפתיחת Outlook Web
    const handleSendEmailOutlook = (email, property) => {
        try {
            const subject = `Inquiry about property in ${property.propertyCity}`;
            const body = `Hello,

I am interested in your property with the following details:

Description: ${property.propertyGeneralDescription}
Location: ${property.propertyCity}, ${property.propertyNeighborhood}
Size: ${property.propertyArea} m²
Price: ${property.propertyPrice.toLocaleString()}

Please contact me for more information.

Best regards`;

            const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.open(outlookUrl, '_blank');

            setSnackbar({
                open: true,
                message: 'Opening Outlook compose window...',
                severity: 'success'
            });

        } catch (error) {
            console.error('Error opening Outlook:', error);
            setSnackbar({
                open: true,
                message: 'Failed to open Outlook',
                severity: 'error'
            });
        }
    };

    // פונקציה לפתיחת אפליקציית אימייל מקומית
    const handleSendEmailLocal = (email, property) => {
        try {
            const subject = `Inquiry about property in ${property.propertyCity}`;
            const body = `Hello,

I am interested in your property with the following details:

Description: ${property.propertyGeneralDescription}
Location: ${property.propertyCity}, ${property.propertyNeighborhood}
Size: ${property.propertyArea} m²
Price: ${property.propertyPrice.toLocaleString()}

Please contact me for more information.

Best regards`;

            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            setSnackbar({
                open: true,
                message: 'Opening default email client...',
                severity: 'info'
            });

        } catch (error) {
            console.error('Error opening email client:', error);
            copyEmailToClipboard(email);
        }
    };

    // פונקציה להעתקת כתובת אימייל
    const copyEmailToClipboard = (email) => {
        navigator.clipboard.writeText(email).then(() => {
            setSnackbar({
                open: true,
                message: 'Email address copied to clipboard!',
                severity: 'success'
            });
        }).catch(() => {
            setSnackbar({
                open: true,
                message: 'Failed to copy email address',
                severity: 'error'
            });
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(getFavoritePropertiesThunk(userId));
            setLoading(false);
        };

        fetchData();

        const handleClickOutside = () => {
            handleClose();
            handleEmailMenuClose();
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dispatch, userId]);

    const generatePDF = () => {
        if (!favoriteProperties || favoriteProperties.length === 0) {
            setSnackbar({
                open: true,
                message: 'No properties to export.',
                severity: 'info'
            });
            return;
        }

        try {
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const now = new Date();
            const formattedDate = format(now, 'dd/MM/yyyy HH:mm');

            doc.setFontSize(18);
            doc.text('Favorite Properties', 14, 15);
            doc.setFontSize(10);
            doc.setTextColor(100);
            doc.text(`Generated on: ${formattedDate}`, 14, 22);
            doc.setTextColor(0);

            const tableColumn = ["Description", "Size", "City", "Neighborhood", "Price", "Seller Email"];
            const tableRows = [];

            favoriteProperties.forEach(property => {
                const propertyData = [
                    property.propertyGeneralDescription,
                    `${property.propertyArea} m²`,
                    property.propertyCity,
                    property.propertyNeighborhood,
                    property.propertyPrice.toLocaleString(),
                    property.sellsemail
                ];
                tableRows.push(propertyData);
            });

            doc.autoTable({
                head: [tableColumn],
                body: tableRows,
                startY: 30,
                styles: {
                    fontSize: 9,
                    textColor: 0,
                },
                headStyles: {
                    fillColor: [33, 33, 33],
                    textColor: 255,
                    fontStyle: 'bold'
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245]
                },
            });

            doc.save('favorite_properties.pdf');
            setSnackbar({
                open: true,
                message: 'Properties exported to PDF',
                severity: 'success'
            });
        } catch (error) {
            console.error("Error generating PDF:", error);
            setSnackbar({
                open: true,
                message: 'Error exporting to PDF. Check console for details.',
                severity: 'error'
            });
        }
    };

    const sortedProperties = () => {
        if (!favoriteProperties) return [];
        const { key, direction } = sortConfig;
        const sorted = [...favoriteProperties];

        if (key !== null) {
            sorted.sort((a, b) => {
                let valueA, valueB;

                switch (key) {
                    case 'price':
                        valueA = a.propertyPrice;
                        valueB = b.propertyPrice;
                        break;
                    case 'size':
                        valueA = parseFloat(a.propertyArea);
                        valueB = parseFloat(b.propertyArea);
                        break;
                    default:
                        return 0;
                }

                if (valueA < valueB) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (valueA > valueB) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        return sorted;
    };

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

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
Loading your favorite properties...
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
    mb: 2
}}
>   
<Box sx={{ display: 'flex', alignItems: 'center' }}>
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
        <FavoriteIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} />
        Your Favorite Properties
    </Typography>
</Box>
<Box>
    <Chip
        label={`${favoriteProperties?.length || 0} properties`}
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
    <Button
        variant="contained"
        color="secondary"
        onClick={generatePDF}
        startIcon={<PictureAsPdfIcon />}
        sx={{
            mb: 2,
            backgroundColor: '#e53935',
            '&:hover': {
                backgroundColor: '#c32f2c',
            },
            ml: 2,
            mb: "none"
        }}
    >
        Export to PDF
    </Button>
</Box>      
</Box>

{favoriteProperties?.length > 0 ? (
<Grow in={true} timeout={800}>
    <StyledTableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="favorite properties table">
            <TableHead>
                <TableRow>
                    <StyledTableHeadCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                            Description
                        </Box>
                    </StyledTableHeadCell>
                    <StyledTableHeadCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('size')}>
                            <SquareFootIcon sx={{ mr: 1, fontSize: 20 }} />
                            Size
                            {sortConfig.key === 'size' && (
                                sortConfig.direction === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
                            )}
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
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('price')}>
                            <AttachMoneyIcon sx={{ mr: 1, fontSize: 20 }} />
                            Price
                            {sortConfig.key === 'price' && (
                                sortConfig.direction === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />
                            )}
                        </Box>
                    </StyledTableHeadCell>
                    <StyledTableHeadCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                            Contact Seller
                        </Box>
                    </StyledTableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sortedProperties().map(property => (
                    <StyledTableRow
                        key={property.propertyId}
                        selected={property.propertyId === propertyForSaleId}
                        onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
                    >
                        <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
                        <StyledTableCell>
                            {property.propertyArea} m²
                        </StyledTableCell>
                        <StyledTableCell>{property.propertyCity}</StyledTableCell>
                        <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
                        <StyledTableCell>
                            <Chip
                                label={`${property.propertyPrice.toLocaleString()}`}
                                sx={{
                                    fontWeight: 600,
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderRadius: '8px',
                                }}
                            />
                        </StyledTableCell>
                        <StyledTableCell>
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 1,
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {/* כתובת האימייל */}
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#666',
                                        fontSize: '0.85rem',
                                        flex: 1,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {property.sellsemail}
                                </Typography>

                                {/* כפתור יחיד עם תפריט */}
                                <Tooltip title="Contact options">
                                    <IconButton
                                        size="small"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEmailMenuAnchor(e.currentTarget);
                                            setSelectedEmail({ email: property.sellsemail, property });
                                        }}
                                        sx={{
                                            color: '#e53935',
                                            width: 32,
                                            height: 32,
                                            zIndex: 1,
                                            '&:hover': {
                                                backgroundColor: 'rgba(229, 57, 53, 0.08)',
                                            }
                                        }}
                                    >
                                        <EmailIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </StyledTableContainer>
</Grow>
) : (
<Grow in={true} timeout={800}>
    <EmptyStateCard>
        <FavoriteIcon
            sx={{
                fontSize: 60,
                color: 'rgba(229, 57, 53, 0.2)',
                mb: 2
            }}
        />
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            No Favorite Properties Yet
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Browse properties and add them to your favorites to see them here.
        </Typography>
    </EmptyStateCard>
</Grow>
)}

{/* תפריט הקשר ימני למחיקה מהמועדפים */}
<Menu
anchorEl={anchorEl}
open={Boolean(anchorEl)}
onClose={handleClose}
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
    onClick={unFavorite}
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
    Remove from favorites
</MenuItem>
</Menu>

{/* תפריט אפשרויות אימייל */}
<Menu
anchorEl={emailMenuAnchor}
open={Boolean(emailMenuAnchor)}
onClose={handleEmailMenuClose}
PaperProps={{
    elevation: 3,
    sx: {
        borderRadius: '8px',
        minWidth: 150,
    },
}}
>
<MenuItem onClick={() => {
    handleSendEmail(selectedEmail?.email, selectedEmail?.property);
    handleEmailMenuClose();
}}>
    <Box sx={{ 
        backgroundColor: '#ea4335', 
        color: 'white', 
        borderRadius: '4px',
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        mr: 1 
    }}>
        G
    </Box>
    Gmail
</MenuItem>
<MenuItem onClick={() => {
    handleSendEmailOutlook(selectedEmail?.email, selectedEmail?.property);
    handleEmailMenuClose();
}}>
    <Box sx={{ 
        backgroundColor: '#0078d4', 
        color: 'white', 
        borderRadius: '4px',
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        mr: 1 
    }}>
        O
    </Box>
    Outlook
</MenuItem>
<MenuItem onClick={() => {
    handleSendEmailLocal(selectedEmail?.email, selectedEmail?.property);
    handleEmailMenuClose();
}}>
    <Box sx={{ mr: 1, fontSize: '1rem' }}>📧</Box>
    Default Email
</MenuItem>
<MenuItem onClick={() => {
    copyEmailToClipboard(selectedEmail?.email);
    handleEmailMenuClose();
}}>
    <Box sx={{ mr: 1, fontSize: '1rem' }}>📋</Box>
    Copy Email
</MenuItem>
</Menu>

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

export default FavoriteProperties;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
// import { addPropertyFoFavoriteListThunk } from "../../redux/slices/addPropertyFoFavoriteListThunk";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// export const Search = () => {
//     const propertyForPurchaseId = sessionStorage.getItem("propertyForPurchaseId");
//     const properties = useSelector(state => state.customers.propertiesFromSearch);
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const [r,setR]=useState();
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [menu, setMenu] = useState(false);
//     const userId = sessionStorage.getItem("userId");
// useEffect(()=>{
//     if(favoriteProperties===null&&properties!==null)
//      dispatch(getFavoritePropertiesThunk(userId));

// },[properties])

//     const Click = () => {
//         setMenu(false);
//         setPropertyForSaleId(-1);
//     }
//     const favorite = async() =>{
//         debugger
//         dispatch(addPropertyFoFavoriteListThunk({customerCode:sessionStorage.getItem("userId"),propertyCode:propertyForSaleId}));
//         setR();
//     }
//     useEffect(() => {

//         console.log("useEffect");
//         dispatch(searchPropertiesThunk(propertyForPurchaseId));

//         window.addEventListener('click', Click);
//         return () => {
//             window.removeEventListener('click', Click)
//         }
//     }, []
//     )
//     return <div>
//         {menu && <div
//             style={{ position: "absolute", top: y, left: x }}>
//             <button onClick={favorite}>mark as favorite</button>
//         </div>}
//         <table>
//             <thead>
//                 <tr>
//                     <th>size</th>
//                     <th>city</th>
//                     <th>neighborhood</th>
//                     <th>price</th>
//                     <th>description</th>
//                     <th>sellsEmail</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {properties?.map(property =>
//                     <tr key={property.propertyId}
//                         onContextMenu={(e) => {
//                             if(favoriteProperties?.find(v=> v.propertyId===property.propertyId)==null){
//                             setPropertyForSaleId(property.propertyId);
//                             setX(e.clientX);
//                             setY(e.clientY);
//                             setMenu(true);
//                             e.preventDefault();}
//                         }}
//                         className={property.propertyId === propertyForSaleId ? "selcet" : "unSelect"}
//                         // style={{backgroundColor: favoriteProperties.find(v=> v.propertyId==property.propertyId)!=null ? 'green':'yellow'}}
//                         >
//                         <td>{property.propertyArea}</td>
//                         <td>{property.propertyCity}</td>
//                         <td>{property.propertyNeighborhood}</td>
//                         <td>{property.propertyPrice}</td>
//                         <td>{property.propertyGeneralDescription}</td>
//                         <td>{property.sellsemail}</td>
//                         <td>{favoriteProperties?.find(v=> v.propertyId===property.propertyId)!=null?<FavoriteIcon  id="FavoriteIcon"/>:<FavoriteBorderIcon id="FavoriteBorderIcon"/>}</td>

//                     </tr>
//                 )}

//             </tbody>
//         </table>
//     </div>
// }
















// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
// import { addPropertyFoFavoriteListThunk } from "../../redux/slices/addPropertyFoFavoriteListThunk";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon
// import { // Import necessary components
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
//     Tooltip,
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar,
//     IconButton,
//     Card
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import arrow icons
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// // Styled components (Reusing styles from FavoriteProperties for consistency)
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     maxHeight: '450px', // Fixed table height for scroll
//     overflow: 'auto', // Enable scrolling
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
//     position: 'sticky', // Sticky header
//     top: 0, // Sticky header
//     fontWeight: 600,
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const Search = () => {
//     const propertyForPurchaseId = sessionStorage.getItem("propertyForPurchaseId");
//     const properties = useSelector(state => state.customers.propertiesFromSearch);
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const [r, setR] = useState();
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [menu, setMenu] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });
//     const userId = sessionStorage.getItem("userId");
//     const [sortConfig, setSortConfig] = useState({ key: "price", direction: 'asc' }); // State for sorting

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(searchPropertiesThunk(propertyForPurchaseId));
//             if (userId) {
//                 await dispatch(getFavoritePropertiesThunk(userId));
//             }
//             setLoading(false);
//         };
//         fetchData();

//         const handleClickOutside = () => {
//             setMenu(false);
//             setPropertyForSaleId(-1);
//         };

//         window.addEventListener('click', handleClickOutside);
//         return () => {
//             window.removeEventListener('click', handleClickOutside);
//         };
//     }, [propertyForPurchaseId, dispatch, userId]);

//     const favorite = async () => {
//         dispatch(addPropertyFoFavoriteListThunk({ customerCode: sessionStorage.getItem("userId"), propertyCode: propertyForSaleId }));
//         setR();
//         handleClose();
//         setSnackbar({
//             open: true,
//             message: 'Property added to favorites',
//             severity: 'success'
//         });
//     }

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         // Only show context menu if the property is NOT in favorites
//         if (!favoriteProperties?.some(prop => prop.propertyId === propertyId)) {
//             setPropertyForSaleId(propertyId);
//             // Set the menu position relative to the clicked row
//             setX(event.clientX);
//             setY(event.clientY);
//             setMenu(true);
//         }
//     };

//     const handleClose = () => {
//         setMenu(false);
//         setPropertyForSaleId(-1);
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     // Function to sort properties
//     const sortedProperties = () => {
//         if (!properties) return [];
//         const { key, direction } = sortConfig;
//         const sorted = [...properties];

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

//     // Function to handle sorting requests
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
//                     Loading properties...
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
//                         <SearchIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} /> {/* Changed icon */}
//                         Search Results
//                     </Typography>
//                     <Chip
//                         label={`${properties?.length || 0} properties`}
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

//                 {properties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="search results table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('size')}> {/* Added onClick for sorting */}
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
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('price')}> {/* Added onClick for sorting */}
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
//                                         <StyledTableHeadCell>
//                                             Favorite
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {sortedProperties().map(property => ( // Use sortedProperties()
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyArea}
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyPrice}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.sellsemail}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {favoriteProperties?.find(v => v.propertyId === property.propertyId) != null ? <FavoriteIcon id="FavoriteIcon" /> : <FavoriteBorderIcon id="FavoriteBorderIcon" />}
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
//                                 No Properties Found
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Try a different search.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     anchorEl={document.body} // Use document.body as anchor
//                     open={menu}
//                     onClose={handleClose}
//                     anchorReference="none" // Important for positioning
//                     anchorPosition={{ top: y, left: x }} // Use x, y from context menu
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
//                     {/* Only show the "Mark as favorite" option if the property is NOT already a favorite */}
//                     {propertyForSaleId && !favoriteProperties?.some(prop => prop.propertyId === propertyForSaleId) && (
//                         <MenuItem
//                             onClick={favorite}
//                             sx={{
//                                 py: 1.5,
//                                 transition: 'all 0.2s ease',
//                                 '&:hover': {
//                                     backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                     transform: 'translateX(5px)',
//                                 }
//                             }}
//                         >
//                             <FavoriteIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                             Mark as favorite
//                         </MenuItem>
//                     )}
//                 </Menu>
//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{

//                         vertical: 'bottom',
//                         horizontal: 'right'
//                     }}
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



























// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
// import { addPropertyFoFavoriteListThunk } from "../../redux/slices/addPropertyFoFavoriteListThunk";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon
// import { // Import necessary components
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
//     Tooltip,
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar,
//     IconButton,
//     Card
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import arrow icons
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// // Styled components (Reusing styles from FavoriteProperties for consistency)
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     maxHeight: '450px', // Fixed table height for scroll
//     overflow: 'auto', // Enable scrolling
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
//     position: 'sticky', // Sticky header
//     top: 0, // Sticky header
//     fontWeight: 600,
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const Search = () => {
//     const propertyForPurchaseId = sessionStorage.getItem("propertyForPurchaseId");
//     const properties = useSelector(state => state.customers.propertiesFromSearch);
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const [r, setR] = useState();
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [menu, setMenu] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });
//     const userId = sessionStorage.getItem("userId");
//     const [sortConfig, setSortConfig] = useState({ key: "price", direction: 'asc' }); // State for sorting
//     const [anchorEl, setAnchorEl] = useState(null); // Add anchorEl state

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(searchPropertiesThunk(propertyForPurchaseId));
//             if (userId) {
//                 await dispatch(getFavoritePropertiesThunk(userId));
//             }
//             setLoading(false);
//         };
//         fetchData();

//         const handleClickOutside = () => {
//             setMenu(false);
//             setPropertyForSaleId(-1);
//         };

//         window.addEventListener('click', handleClickOutside);
//         return () => {
//             window.removeEventListener('click', handleClickOutside);
//         };
//     }, [propertyForPurchaseId, dispatch, userId]);

//     const favorite = async () => {
//         dispatch(addPropertyFoFavoriteListThunk({ customerCode: sessionStorage.getItem("userId"), propertyCode: propertyForSaleId }));
//         setR();
//         handleClose();
//         setSnackbar({
//             open: true,
//             message: 'Property added to favorites',
//             severity: 'success'
//         });
//     }

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         // Only show context menu if the property is NOT in favorites
//         if (!favoriteProperties?.some(prop => prop.propertyId === propertyId)) {
//             setPropertyForSaleId(propertyId);
//             // Set the menu position relative to the clicked row
//             setAnchorEl(event.currentTarget); // Corrected: set anchorEl
//             setMenu(true);
//         }
//     };

//     const handleClose = () => {
//         setMenu(false);
//         setPropertyForSaleId(-1);
//         setAnchorEl(null); // Close the menu and reset anchorEl
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     // Function to sort properties
//     const sortedProperties = () => {
//         if (!properties) return [];
//         const { key, direction } = sortConfig;
//         const sorted = [...properties];

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

//     // Function to handle sorting requests
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
//                     Loading properties...
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
//                         <SearchIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} /> {/* Changed icon */}
//                         Search Results
//                     </Typography>
//                     <Chip
//                         label={`${properties?.length || 0} properties`}
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

//                 {properties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="search results table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('size')}> {/* Added onClick for sorting */}
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
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('price')}> {/* Added onClick for sorting */}
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
//                                         <StyledTableHeadCell>
//                                             Favorite
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {sortedProperties().map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyArea}
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyPrice}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.sellsemail}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {favoriteProperties?.find(v => v.propertyId === property.propertyId) != null ? <FavoriteIcon id="FavoriteIcon" /> : <FavoriteBorderIcon id="FavoriteBorderIcon" />}
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
//                                 No Properties Found
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Try a different search.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     // anchorEl={document.body} // Use document.body as anchor - REMOVED
//                     anchorEl={anchorEl} // Use anchorEl - ADDED
//                     open={menu}
//                     onClose={handleClose}
//                     anchorReference="anchorEl" // Important for positioning
//                     // anchorPosition={{ top: y, left: x }} // Use x, y from context menu - REMOVED
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
//                     {/* Only show the "Mark as favorite" option if the property is NOT already a favorite */}
//                     {propertyForSaleId && !favoriteProperties?.some(prop => prop.propertyId === propertyForSaleId) && (
//                         <MenuItem
//                             onClick={favorite}
//                             sx={{
//                                 py: 1.5,
//                                 transition: 'all 0.2s ease',
//                                 '&:hover': {
//                                     backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                     transform: 'translateX(5px)',
//                                 }
//                             }}
//                         >
//                             <FavoriteIcon fontSize="small" sx={{
//                                 mr: 1.5, color: '#e53935'

//                             }} />
//                             Mark as favorite
//                         </MenuItem>
//                     )}
//                 </Menu>
//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{
//                         vertical: 'bottom',
//                         horizontal: 'right'
//                     }}
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














// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
// import { addPropertyFoFavoriteListThunk } from "../../redux/slices/addPropertyFoFavoriteListThunk";
// import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon
// import { // Import necessary components
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
//     Tooltip,
//     Menu,
//     MenuItem,
//     Chip,
//     CircularProgress,
//     Alert,
//     Snackbar,
//     IconButton,
//     Card
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import EmailIcon from '@mui/icons-material/Email';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import arrow icons
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { format } from 'date-fns';

// // Styled components (Reusing styles from FavoriteProperties for consistency)
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     maxHeight: '450px', // Fixed table height for scroll
//     overflow: 'auto', // Enable scrolling
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
//     position: 'sticky', // Sticky header
//     top: 0, // Sticky header
//     fontWeight: 600,
// }));

// const EmptyStateCard = styled(Card)(({ theme }) => ({
//     padding: '32px',
//     textAlign: 'center',
//     borderRadius: '16px',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
//     backgroundColor: '#ffffff',
// }));

// export const Search = () => {
//     const propertyForPurchaseId = sessionStorage.getItem("propertyForPurchaseId");
//     const properties = useSelector(state => state.customers.propertiesFromSearch);
//     const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
//     const [r, setR] = useState();
//     const dispatch = useDispatch();
//     const [propertyForSaleId, setPropertyForSaleId] = useState();
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [menu, setMenu] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//     });
//     const userId = sessionStorage.getItem("userId");
//     const [sortConfig, setSortConfig] = useState({ key: "price", direction: 'asc' }); // State for sorting
//     const [anchorEl, setAnchorEl] = useState(null); // Add anchorEl state

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             await dispatch(searchPropertiesThunk(propertyForPurchaseId));
//             if (userId) {
//                 await dispatch(getFavoritePropertiesThunk(userId));
//             }
//             setLoading(false);
//         };
//         fetchData();

//         const handleClickOutside = () => {
//             setMenu(false);
//             setPropertyForSaleId(-1);
//         };

//         window.addEventListener('click', handleClickOutside);
//         return () => {
//             window.removeEventListener('click', handleClickOutside);
//         };
//     }, [propertyForPurchaseId, dispatch, userId]);

//     const favorite = async () => {
//         dispatch(addPropertyFoFavoriteListThunk({ customerCode: sessionStorage.getItem("userId"), propertyCode: propertyForSaleId }));
//         setR();
//         handleClose();
//         setSnackbar({
//             open: true,
//             message: 'Property added to favorites',
//             severity: 'success'
//         });
//     }

//     const handleContextMenu = (event, propertyId) => {
//         event.preventDefault();
//         // Only show context menu if the property is NOT in favorites
//         if (!favoriteProperties?.some(prop => prop.propertyId === propertyId)) {
//             setPropertyForSaleId(propertyId);
//             // Set the menu position relative to the clicked row
//             setAnchorEl(event.currentTarget); // Corrected: set anchorEl
//             setMenu(true);
//         }
//     };

//     const handleClose = () => {
//         setMenu(false);
//         setPropertyForSaleId(-1);
//         setAnchorEl(null); // Close the menu and reset anchorEl
//     };

//     const handleSnackbarClose = () => {
//         setSnackbar({
//             ...snackbar,
//             open: false
//         });
//     };

//     // Function to sort properties
//     const sortedProperties = () => {
//         if (!properties) return [];
//         const { key, direction } = sortConfig;
//         const sorted = [...properties];

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

//     // Function to handle sorting requests
//     const requestSort = (key) => {
//         let direction = 'asc';
//         if (sortConfig.key === key && sortConfig.direction === 'asc') {
//             direction = 'desc';
//         }
//         setSortConfig({ key, direction });
//     };

//     const exportToPdf = () => {
//         if (!properties || properties.length === 0) {
//             return;
//         }

//         const doc = new jsPDF({
//             orientation: 'landscape',
//             unit: 'mm',
//             format: 'a4'
//         });

//         const now = new Date();
//         const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');

//         doc.setFontSize(18);
//         doc.text('Search Results', 14, 15);
//         doc.setFontSize(10);
//         doc.text(`Exported on: ${formattedDate}`, 14, 20);

//         const tableColumn = ["Description", "Size", "City", "Neighborhood", "Price", "Seller Email"];
//         const tableRows = [];

//         sortedProperties().forEach(property => {
//             const propertyData = [
//                 property.propertyGeneralDescription,
//                 property.propertyArea,
//                 property.propertyCity,
//                 property.propertyNeighborhood,
//                 property.propertyPrice,
//                 property.sellsemail
//             ];
//             tableRows.push(propertyData);
//         });

//         doc.autoTable({
//             head: [tableColumn],
//             body: tableRows,
//             startY: 25,
//             styles: {
//                 fontSize: 9
//             },
//         });

//         doc.save('search_results.pdf');
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
//                     Loading properties...
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
//                         <SearchIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} /> {/* Changed icon */}
//                         Search Results
//                     </Typography>
//                     <Chip
//                         label={`${properties?.length || 0} properties`}
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
//                     <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={exportToPdf}
//                         sx={{
//                             backgroundColor: '#e53935',
//                             '&:hover': {
//                                 backgroundColor: '#c32f2c',
//                             },
//                         }}
//                     >
//                         Export to PDF
//                     </Button>
//                 </Box>

//                 {properties?.length > 0 ? (
//                     <Grow in={true} timeout={800}>
//                         <StyledTableContainer component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="search results table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                 <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
//                                                 Description
//                                             </Box>
//                                         </StyledTableHeadCell>
//                                         <StyledTableHeadCell>
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('size')}> {/* Added onClick for sorting */}
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
//                                             <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('price')}> {/* Added onClick for sorting */}
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
//                                         <StyledTableHeadCell>
//                                             Favorite
//                                         </StyledTableHeadCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {sortedProperties().map(property => (
//                                         <StyledTableRow
//                                             key={property.propertyId}
//                                             selected={property.propertyId === propertyForSaleId}
//                                             onContextMenu={(e) => handleContextMenu(e, property.propertyId)}
//                                         >
//                                             <StyledTableCell>{property.propertyGeneralDescription}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyArea}
//                                             </StyledTableCell>
//                                             <StyledTableCell>{property.propertyCity}</StyledTableCell>
//                                             <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.propertyPrice}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {property.sellsemail}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {favoriteProperties?.find(v => v.propertyId === property.propertyId) != null ? <FavoriteIcon id="FavoriteIcon" /> : <FavoriteBorderIcon id="FavoriteBorderIcon" />}
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
//                                 No Properties Found
//                             </Typography>
//                             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//                                 Try a different search.
//                             </Typography>
//                         </EmptyStateCard>
//                     </Grow>
//                 )}

//                 <Menu
//                     anchorEl={anchorEl}
//                     open={menu}
//                     onClose={handleClose}
//                     anchorReference="anchorEl"
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
//                     {propertyForSaleId && !favoriteProperties?.some(prop => prop.propertyId === propertyForSaleId) && (
//                         <MenuItem
//                             onClick={favorite}
//                             sx={{
//                                 py: 1.5,
//                                 transition: 'all 0.2s ease',
//                                 '&:hover': {
//                                     backgroundColor: 'rgba(229, 57, 53, 0.08)',
//                                     transform: 'translateX(5px)',
//                                 }
//                             }}
//                         >
//                             <FavoriteIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
//                             Mark as favorite
//                         </MenuItem>
//                     )}
//                 </Menu>
//                 <Snackbar
//                     open={snackbar.open}
//                     autoHideDuration={4000}
//                     onClose={handleSnackbarClose}
//                     anchorOrigin={{
//                         vertical: 'bottom',
//                         horizontal: 'right'
//                     }}
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPropertiesThunk } from "../../redux/slices/searchPropertiesThunk";
import { addPropertyFoFavoriteListThunk } from "../../redux/slices/addPropertyFoFavoriteListThunk";
import { getFavoritePropertiesThunk } from "../../redux/slices/getFavoritePropertiesThunk";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon
import { // Import necessary components
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
    Tooltip,
    Menu,
    MenuItem,
    Chip,
    CircularProgress,
    Alert,
    Snackbar,
    IconButton,
    Card
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import arrow icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';

// Styled components (Reusing styles from FavoriteProperties for consistency)
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    maxHeight: '450px', // Fixed table height for scroll
    overflow: 'auto', // Enable scrolling
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
    position: 'sticky', // Sticky header
    top: 0, // Sticky header
    fontWeight: 600,
}));

const EmptyStateCard = styled(Card)(({ theme }) => ({
    padding: '32px',
    textAlign: 'center',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
}));

export const Search = () => {
    const propertyForPurchaseId = sessionStorage.getItem("propertyForPurchaseId");
    const properties = useSelector(state => state.customers.propertiesFromSearch);
    const favoriteProperties = useSelector(state => state.customers.favoriteProperties);
    const [r, setR] = useState();
    const dispatch = useDispatch();
    const [propertyForSaleId, setPropertyForSaleId] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [menu, setMenu] = useState(false);
    const [loading, setLoading] = useState(true);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    const userId = sessionStorage.getItem("userId");
    const [sortConfig, setSortConfig] = useState({ key: "price", direction: 'asc' }); // State for sorting
    const [anchorEl, setAnchorEl] = useState(null); // Add anchorEl state

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(searchPropertiesThunk(propertyForPurchaseId));
            if (userId) {
                await dispatch(getFavoritePropertiesThunk(userId));
            }
            setLoading(false);
        };
        fetchData();

        const handleClickOutside = () => {
            setMenu(false);
            setPropertyForSaleId(-1);
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [propertyForPurchaseId, dispatch, userId]);

    const favorite = async () => {
        dispatch(addPropertyFoFavoriteListThunk({ customerCode: sessionStorage.getItem("userId"), propertyCode: propertyForSaleId }));
        setR();
        handleClose();
        setSnackbar({
            open: true,
            message: 'Property added to favorites',
            severity: 'success'
        });
    }

    const handleContextMenu = (event, propertyId) => {
        event.preventDefault();
        // Only show context menu if the property is NOT in favorites
        if (!favoriteProperties?.some(prop => prop.propertyId === propertyId)) {
            setPropertyForSaleId(propertyId);
            // Set the menu position relative to the clicked row
            setAnchorEl(event.currentTarget); // Corrected: set anchorEl
            setMenu(true);
        }
    };

    const handleClose = () => {
        setMenu(false);
        setPropertyForSaleId(-1);
        setAnchorEl(null); // Close the menu and reset anchorEl
    };

    const handleSnackbarClose = () => {
        setSnackbar({
            ...snackbar,
            open: false
        });
    };

    // Function to sort properties
    const sortedProperties = () => {
        if (!properties) return [];
        const { key, direction } = sortConfig;
        const sorted = [...properties];

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

    // Function to handle sorting requests
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const exportToPdf = () => {
        if (!properties || properties.length === 0) {
            return;
        }

        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const now = new Date();
        const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');

        doc.setFontSize(18);
        doc.text('Search Results', 14, 15);
        doc.setFontSize(10);
        doc.text(`Exported on: ${formattedDate}`, 14, 20);

        const tableColumn = ["Description", "Size", "City", "Neighborhood", "Price", "Seller Email"];
        const tableRows = [];

        sortedProperties().forEach(property => {
            const propertyData = [
                property.propertyGeneralDescription,
                `${property.propertyArea} m²`,
                property.propertyCity,
                property.propertyNeighborhood,
                property.propertyPrice,
                property.sellsemail
            ];
            tableRows.push(propertyData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 25,
            styles: {
                fontSize: 9,
                textColor: 0,
            },
            headStyles: {
                fillColor: [33, 33, 33], // Dark Grey
                textColor: 255, // White
                fontStyle: 'bold'
            },
        });

        doc.save('search_results.pdf');
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
                    Loading properties...
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
                        mb: 2 // Reduced margin-bottom
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
                            <SearchIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#e53935' }} /> {/* Changed icon */}
                            Search Results
                        </Typography>
                    </Box>
                    <Box>
                        <Chip
                            label={`${properties?.length || 0} properties`}
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
                            onClick={exportToPdf}
                         startIcon={<PictureAsPdfIcon />}
                            sx={{
                                backgroundColor: '#e53935',
                                '&:hover': {
                                    backgroundColor: '#c32f2c',
                                },
                                ml: 2 // Added margin-left
                            }}
                        >
                            Export to PDF
                        </Button>
                    </Box>
                </Box>

                {properties?.length > 0 ? (
                    <Grow in={true} timeout={800}>
                        <StyledTableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="search results table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableHeadCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <InfoOutlinedIcon sx={{ mr: 1, fontSize: 20 }} />
                                                Description
                                            </Box>
                                        </StyledTableHeadCell>
                                        <StyledTableHeadCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('size')}> {/* Added onClick for sorting */}
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
                                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => requestSort('price')}> {/* Added onClick for sorting */}
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
                                                Seller Email
                                            </Box>
                                        </StyledTableHeadCell>
                                        <StyledTableHeadCell>
                                            Favorite
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
                                                {property.propertyArea}
                                            </StyledTableCell>
                                            <StyledTableCell>{property.propertyCity}</StyledTableCell>
                                            <StyledTableCell>{property.propertyNeighborhood}</StyledTableCell>
                                            <StyledTableCell>
                                                {/* {property.propertyPrice} */}
                                                <Chip
                                                        label={`$${property.propertyPrice.toLocaleString()}`}
                                                        sx={{
                                                            fontWeight: 600,
                                                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                            borderRadius: '8px',
                                                        }}
                                                    />
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {/* {property.sellsemail} */}
                                                <Tooltip title="Send email">
                                                    <Button
                                                        startIcon={<EmailIcon />}
                                                        href={`mailto:${property.sellsemail}`}
                                                        sx={{
                                                            textTransform: 'none',
                                                            color: '#212121',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                            }
                                                        }}
                                                    >
                                                        {property.sellsemail}
                                                    </Button>
                                                </Tooltip>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                {favoriteProperties?.find(v => v.propertyId === property.propertyId) != null ? <FavoriteIcon id="FavoriteIcon" sx={{color:"red"}} /> : <FavoriteBorderIcon id="FavoriteBorderIcon"sx={{color:"red"}} />}
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
No Properties Found
</Typography>
<Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
Try a different search.
</Typography>
</EmptyStateCard>
</Grow>
)}

<Menu
anchorEl={anchorEl}
open={menu}
onClose={handleClose}
anchorReference="anchorEl"
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
{propertyForSaleId && !favoriteProperties?.some(prop => prop.propertyId === propertyForSaleId) && (
<MenuItem
onClick={favorite}
sx={{
py: 1.5,
transition: 'all 0.2s ease',
'&:hover': {
backgroundColor: 'rgba(229, 57, 53, 0.08)',
transform: 'translateX(5px)',
}
}}
>
<FavoriteIcon fontSize="small" sx={{ mr: 1.5, color: '#e53935' }} />
Mark as favorite
</MenuItem>
)}
</Menu>
<Snackbar
open={snackbar.open}
autoHideDuration={4000}
onClose={handleSnackbarClose}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'right'
}}
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

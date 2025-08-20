import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { STORE } from './redux/store';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
//////////////////////ai

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWeb;







const theme = createTheme();

  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={STORE}>
    {/* // מגדירים שהניווט מתבסס על הניווט בדפדפן */}
   
    {/* כדי שהסטור יוכר מכל קומפוננטה צריך לעטוף את הקומפוננטה הראשית
     בפרוביידר ולשלוח לה את הסטור */}
        
       <BrowserRouter>
 <ThemeProvider theme={theme}>
            <App /> 
          </ThemeProvider>
           </BrowserRouter>
        </Provider>  
        
   
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

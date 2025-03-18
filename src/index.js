import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
<script src="https://code.jquery.com/jquery-3.6.0.min.js" />;
<script type = "text/javascript" src = "scripts.js" />   

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

//TEST BrowserRouter, gammal kod ovanför
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* Collapse dropdown when clicking outside
document.addEventListener('click', e => {
    const dropdowns = document.querySelectorAll('.dropdown-container'); // Select all dropdowns

    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropbtn = dropdown.querySelector('.dropbtn');

        if (dropdownContent && dropbtn && !dropdown.contains(e.target) && e.target !== dropbtn) {
            dropdownContent.style.display = 'none';
        }
    });
}); */


/* Sub links 
function attachLinkListeners() {
    const links = document.querySelectorAll('.dropdown-container .dropdown-content ul li a');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
                    this.style.backgroundColor ="#81BD96";
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = "#e7f0ea";
        });
    });
};*/

// Call the function to attach listeners when the page loads
//window.addEventListener('load', attachLinkListeners);

/* Laboration 3 - Task 4 - jQuery - slideToggle 
$(document).ready(function() {
    $(".dropbtn").click(function() {
        $(this).next(".dropdown-content").slideToggle("slow");
    });
});*/   

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css';


function History() {
     const [dropdownOpen, setDropdownOpen] = useState(null);
      
        const handleMouseEnter = (menu) => {
          setDropdownOpen(menu);
        };
      
        const handleMouseLeave = () => {
          setDropdownOpen(null);
        };

 return React.createElement(
     'div',
     { style: { backgroundImage: 'url("/images/pix12.webp")',backgroundPosition: 'center', minHeight: '100vh' } },
     React.createElement(
       'header',
       { className: 'navbar' },
       React.createElement(Link, { to: '/', className: 'nav-link1' }, 'RESTAURANT'),
       React.createElement(Link, { to: '/locations', className: 'nav-link' }, 'LOCATIONS'),
       React.createElement(Link, { to: '/menu', className: 'nav-link' }, 'MENU'),
       React.createElement(
         'div',
         {
           className: 'nav-item',
           onMouseEnter: () => handleMouseEnter('about'),
           onMouseLeave: handleMouseLeave,
         },
         React.createElement(
           Link,
           { to: '/about', className: 'nav-link' },
           'ABOUT',
           React.createElement('span', { className: 'dropdown-icon' }, '▼')
         ),
         dropdownOpen === 'about' &&
           React.createElement(
             'div',
             { className: 'dropdown' },
             React.createElement(Link, { to: '/about/history', className: 'dropdown-link' }, 'History'),
             React.createElement(Link, { to: '/about/news', className: 'dropdown-link' }, 'News'),
             React.createElement(Link, { to: '/about/contact', className: 'dropdown-link' }, 'Contact')
           )
       ),
       React.createElement(
         'div',
         {
           className: 'nav-item',
           onMouseEnter: () => handleMouseEnter('templates'),
           onMouseLeave: handleMouseLeave,
         },
         React.createElement(
           Link,
           { to: '/templates', className: 'nav-link' },
           'TEMPLATES',
           React.createElement('span', { className: 'dropdown-icon' }, '▼')
         ),
         dropdownOpen === 'templates' &&
           React.createElement(
             'div',
             { className: 'dropdown' },
             React.createElement(Link, { to: '/templates/blog', className: 'dropdown-link' }, 'Blog'),
             React.createElement(Link, { to: '/templates/category', className: 'dropdown-link' }, 'Category'),
             React.createElement(Link, { to: '/templates/product', className: 'dropdown-link' }, 'Product'),
             React.createElement(Link, { to: '/templates/Product Category', className: 'dropdown-link' }, 'Product Category'),
             React.createElement(Link, { to: '/templates/Sidebar Page', className: 'dropdown-link' }, 'Sidebar Page')
           )
       ),
       React.createElement(Link, { to: '/order', className: 'nav-link2' }, 'ORDER ONLINE'),
    ),
        React.createElement(
             
             'main',
             
             { className: 'history-section' },
             React.createElement(
               'div',
               { className: 'history-content' },
               React.createElement('h1', { className: 'history-title' }, '  History'),
             )
           ),
     );
}

export default History
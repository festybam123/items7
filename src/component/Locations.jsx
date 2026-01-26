import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Locations.css';

function Locations() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const popularItems = [
    { id: 1, src: '/images/LCT2.jpg', title: 'ST. ARMANDS', subtitle: '29 N Boulevard of Presidents ', price: 'Sarasota, FL 34236' },
    { id: 2, src: '/images/LCT3.jpg', title: 'DOWNTOWN', subtitle: '61 Main St', price: 'Sarasota, FL 34236' },
    { id: 3, src: '/images/LCT4.jpg', title: 'LAKEWOOD RANSH', subtitle: '8764 E State Rd 70', price: 'Lakewood Ranch, FL 34202' },

  ];
  const [cartIds, setCartIds] = useState([]);
    const addToCart = (item) => {
      setCartIds(prev => prev.includes(item.id) ? prev : [...prev, item.id]);
    };

  return React.createElement(
     'div',
    { style: { backgroundColor: 'white' } }, // Set background color to white
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
          onMouseEnter: () => setAboutOpen(true),
          onMouseLeave: () => setAboutOpen(false),
        },
        React.createElement(
          Link,
          { to: '/about', className: 'nav-link' },
          'ABOUT',
          React.createElement('span', { className: 'dropdown-icon' }, '▼')
        ),
        aboutOpen &&
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
          onMouseEnter: () => setTemplatesOpen(true),
          onMouseLeave: () => setTemplatesOpen(false),
        },
        React.createElement(
          Link,
          { to: '/templates', className: 'nav-link' },
          'TEMPLATES',
          React.createElement('span', { className: 'dropdown-icon' }, '▼')
        ),
        templatesOpen &&
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
      React.createElement(Link, { to: '/order-online', className: 'nav-link2' }, 'ORDER ONLINE')
    ),
    React.createElement(
      
      'main',
      { className: 'hero-section' },
      React.createElement(
        'div',
        { className: 'hero-content' },
        React.createElement('h1', { className: 'hero-title' }, 'Locations'),
      )
    ),
    React.createElement(
      'div',
      { className: 'photo_cnt' },
      React.createElement(
        'div',
        { className: 'photo_cnt_inner' },
        React.createElement('p', { className: 'photo_subtitle' }, "Choose from one of our three locations in town."),
        React.createElement(
          'div',
          { className: 'photo_grid' },
          popularItems.map((item) =>
            React.createElement(
              'div',
              { key: item.id, className: 'photo_card' },
              React.createElement('h3', { className: 'card_price' }, item.title), // Add location title above the image
              React.createElement('img', { src: item.src, alt: item.title, className: 'card_img' }),
              React.createElement(
                'div',
                { className: 'photo_info' },
                React.createElement(
                  'h3',
                  { className: 'card_title' },
                    React.createElement('span', { className: 'card_price' }, item.subtitle)
                ),
                React.createElement(
                  'div',
                  { className: 'card_footer' },
                  React.createElement('span', { className: 'card_price' }, item.price)
                ),
              
              ),
              React.createElement(
                'div',
                { className: 'button-group' },
                React.createElement(Link, { to: '/menu', className: 'view-menu-btn' }, 'VIEW MENU'),
                React.createElement(Link, { to: '/directions', className: 'direction-btn' }, 'GET DIRECTIONS'),
                React.createElement(Link, { to: '/contact', className: 'telephone-btn' }, 'TEL 941-234-4567')
              ),
               
        ),
          )
        )
      )
    ),
    React.createElement('footer', { className: 'footer' },
           React.createElement('div', { className: 'footer-content' },
             React.createElement('div', { className: 'footer-section1' },
               React.createElement('h3', null, 'LOCATIONS'),
               React.createElement('hr', { className: 'footer-divider' }),
               React.createElement('ul', null,
                 React.createElement('li', null, React.createElement(Link, { to: '/locations/lagos' }, 'Sarasota, FL')),
                 React.createElement('li', null, React.createElement(Link, { to: '/locations/abuja' }, 'Honolulu, HI')),
                 React.createElement('li', null, React.createElement(Link, { to: '/locations/port-harcourt' }, 'San Diego, CA')),
                 React.createElement('li', null, React.createElement(Link, { to: '/locations/ibadan' }, 'Savannah, GA')),
                 React.createElement('li', null, React.createElement(Link, { to: '/locations/port-harcourt' }, 'Austin, TX')),
                 React.createElement('li', null, React.createElement(Link, { to: '/locations/ibadan' }, 'Seattle, WA'))
               )
             ),
             React.createElement('div', { className: 'footer-section' },
               React.createElement('h3', null, 'HOURS'),
               React.createElement('hr', { className: 'footer-divider' }),
               React.createElement('ul', null,
                     React.createElement('li', null, 'Monday  9:00 AM - 11:00 PM'),
                     React.createElement('li', null, 'Tuesday  9:00 AM - 11:00 PM'),
                     React.createElement('li', null, 'Wednesday  9:00 AM - 11:00 PM'),
                     React.createElement('li', null, 'Thursday  9:00 AM - 11:00 PM'),
                     React.createElement('li', null, 'Friday  9:00 AM - 11:00 PM'),
                     React.createElement('li', null, 'Saturday 9:00 AM - 11:00 PM'),
                     React.createElement('li', null, 'Sunday:  9:00 AM - 11:00 PM')
               )
             ),
             React.createElement('div', { className: 'footer-section' },
               React.createElement('h3', null, 'CONNECT'),
               React.createElement('hr', { className: 'footer-divider' }),
               React.createElement('p', null, 'Address:'),
               React.createElement('p', null, '19s Lemon St, Sarasota, FL 34236'),
               React.createElement('p', null, 'Phone: 941-123-4567'),
               React.createElement('p', null, 'Email: info@restaurant.com')
             ),
             React.createElement('div', { className: 'footer-section' },
               React.createElement('div', { className: 'footer-buttons' },
                 React.createElement(Link, { to: '/reservations', className: 'footer-btn' }, 'RESERVATIONS'),
                 React.createElement(Link, { to: '/order-online', className: 'footer-btn' }, 'ORDER ONLINE')
   
               )
             )
           ),
           React.createElement('div', { className: 'footer-bottom' },
             React.createElement('p', null, '© 2026 Restaurant. All rights reserved.')
           )
         )
  );
}

export default Locations;
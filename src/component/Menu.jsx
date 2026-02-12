import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return React.createElement(
    'div',
    { style: { backgroundColor: 'white' } },
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
            React.createElement(Link, { to: '/history', className: 'dropdown-link' }, 'History'),
            React.createElement(Link, { to: '/news', className: 'dropdown-link' }, 'News'),
            React.createElement(Link, { to: '/contact', className: 'dropdown-link' }, 'Contact')
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
            React.createElement(Link, { to: '/blog', className: 'dropdown-link' }, 'Blog'),
            React.createElement(Link, { to: '/category', className: 'dropdown-link' }, 'Category'),
            React.createElement(Link, { to: '/product', className: 'dropdown-link' }, 'Product'),
            React.createElement(Link, { to: '/product-category', className: 'dropdown-link' }, 'Product Category'),
            React.createElement(Link, { to: '/sidebar-page', className: 'dropdown-link' }, 'Sidebar Page')
          )
      ),
      React.createElement(Link, { to: '/order', className: 'nav-link2' }, 'ORDER ONLINE')
    ),
    React.createElement(
      
      'main',
      { className: 'hero-section' },
      React.createElement(
        'div',
        { className: 'hero-content_menu' },
        React.createElement('h1', { className: 'hero-title' }, '  Menu'),
      )
    ),
   React.createElement('div', { className: 'separator' },
    React.createElement('button', { className: 'btn_1', onClick: () => document.getElementById('appetizers').scrollIntoView({ behavior: 'smooth' }) }, 'APPETIZERS'),
    React.createElement('button', { className: 'btn_1', onClick: () => document.getElementById('breakfast').scrollIntoView({ behavior: 'smooth' }) }, 'BREAKFAST'),
    React.createElement('button', { className: 'btn_1', onClick: () => document.getElementById('lunch').scrollIntoView({ behavior: 'smooth' }) }, 'LUNCH'),
    React.createElement('button', { className: 'btn_1', onClick: () => document.getElementById('dinner').scrollIntoView({ behavior: 'smooth' }) }, 'DINNER'),
    React.createElement('button', { className: 'btn_1', onClick: () => document.getElementById('deserts').scrollIntoView({ behavior: 'smooth' }) }, 'DESERTS')
   ),
   React.createElement('div', { className: 'menu-content' },
    React.createElement('div', { className: 'menu-section', id: 'appetizers' },
      React.createElement('h2', { className: 'menu-title' }, 'APPETIZERS'),
      React.createElement('ul', { className: 'menu-items' },

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br', ), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
      )
    ),
    React.createElement('div', { className: 'menu-section', id: 'breakfast' },
      React.createElement('h2', { className: 'menu-title' }, 'BREAKFAST'),
      React.createElement('ul', { className: 'menu-items' },
       React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br', ), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
         ),
      )
    ),
    
    React.createElement('div', { className: 'menu-section', id: 'lunch' },
      React.createElement('h2', { className: 'menu-title' }, 'LUNCH'),
      React.createElement('ul', { className: 'menu-items' },
        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
         ),
      )
    ),

    React.createElement('div', { className: 'menu-section', id: 'dinner' },
      React.createElement('h2', { className: 'menu-title' }, 'DINNER'),
      React.createElement('ul', { className: 'menu-items' },
        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
         ),
      )
    ),

    React.createElement('div', { className: 'menu-section', id: 'deserts' },
      React.createElement('h2', { className: 'menu-title' }, 'DESERTS'),
      React.createElement('ul', { className: 'menu-items' },
        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
         ),
      )
    ),

     React.createElement('div', { className: 'menu-section', id: 'deserts' },
      React.createElement('h2', { className: 'menu-title' }, 'COCKTAILS'),
      React.createElement('ul', { className: 'menu-items' },
        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
         ),
    ) ),

     React.createElement('div', { className: 'menu-section', id: 'deserts' },
      React.createElement('h2', { className: 'menu-title' }, 'HAPPY HOUR'),
      React.createElement('ul', { className: 'menu-items' },
        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item one ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item two ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
          React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Three ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),

        React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Four ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
        ),
         React.createElement('li', { className: 'menu-item' },
           React.createElement('span', { className: 'item-name menu-item-number' }, 'Menu Item Five ', React.createElement('br',), React.createElement('span', { className: 'menu-item-description' }, 'This an example menu description')),
          React.createElement('span', { className: 'item-price' }, '$19.99')
         ),
      )
  ) ),
   React.createElement('footer', { className: 'footer' },
             React.createElement('div', { className: 'footer-content' },
               React.createElement('div', { className: 'footer-section' },
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


export default Menu;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
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
      React.createElement(Link, { to: '/order', className: 'nav-link2' }, 'ORDER ONLINE')
    ),
      React.createElement(
          
          'main',
          { className: 'hero-section' },
          React.createElement(
            'div',
            { className: 'hero-content_about' },
            React.createElement('h2', { className: 'hero-title' }, 'About'),
          ),
          React.createElement(
            'div',
            { className: 'theme-content' },
            React.createElement('h2', null, 'A theme so good you can practically taste it!'),
            React.createElement('p', null, 'Restaurant features an elegant design and layout catered towards restaurants, cafe’s, food bloggers and cuisine related industries.')
          )
      ),
      React.createElement('img', { className: 'about-image', src: '/images/CT2.jpg', alt: 'About Image' }),
      React.createElement(
        'div',
        { className: 'photo-credit' },
        React.createElement(
          'p',
          null,
          'Photo by ',
          React.createElement(
            'a',
            { href: 'https://unsplash.com/@asarodger', target: '_blank', rel: 'noopener noreferrer' },
            'Asa Rodger'
          ),
          ' on ',
          React.createElement(
            'a',
            { href: 'https://unsplash.com', target: '_blank', rel: 'noopener noreferrer' },
            'Unsplash'
          )
        )
      ),
       React.createElement('div', { className: 'main-cnt' },
          React.createElement('p', null, 'Nulla accumsan, elit quis vehicula auctor, enim ligula pharetra ligula, nec facilisis purus ipsum nec sem. ', React.createElement('br'),
           'Quisque vitae risus elit, quis lobortis augue. Duis dignissim ', React.createElement('a', { href: '#' }, 'example link'), ' mauris eu arcu consectetur in  ', React.createElement('br'),
           ' scelerisque risus iaculis. Maecenas ac sagittis libero. Maecenas consectetur, nunc et euismod malesuada,  ', React.createElement('br'),
           ' libero nunc vestibulum ante, sed tempor ligula sapien vitae enim. Nullam in elit quam. Maecenas feugiat  ', React.createElement('br'),
           ' euismod libero, quis feugiat enim elementum sit amet. Fusce in sem id mi venenatis hendrerit. Phasellus  ', React.createElement('br'), 
           ' tempus enim vel nulla accumsan volutpat.'
          ),
          React.createElement('h2', null, 'It’s difficult to think anything but pleasant thoughts while  ', React.createElement('br'),' eating a homegrown tomato'),
          React.createElement('span', null, '– Lewis Grizzard' ),

          React.createElement('p', null, 'Nunc eleifend, erat eu lacinia feugiat, erat tortor convallis justo, vel eleifend massa dui vitae nunc. Duis ', React.createElement('br'), 
          ' volutpat orci eu orci ultrices eget ultrices mi mollis. Integer in enim ut velit congue varius eu eget purus. ', React.createElement('br'), 
          ' Nulla eget molestie ipsum. Duis mollis cursus quam, non faucibus risus rutrum vitae. Vestibulum ', React.createElement('br'), 
          ' commodo convallis ipsum, nec hendrerit elit eleifend eu. Vestibulum non nisl ligula, id aliquet leo. Fusce ', React.createElement('br'), 
          ' vitae ligula nec lacus tincidunt porta. Vestibulum et elementum erat.'),

        ),
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

export default About;
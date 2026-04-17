import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Newlocation.css';

function Newlocation() {
    // Dropdown state
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const handleMouseEnter = (menu) => setDropdownOpen(menu);
    const handleMouseLeave = () => setDropdownOpen(null);

    // Dummy cart/search state and handlers to prevent errors
    const [query, setQuery] = useState("");
    const [keyword, setKeyword] = useState("");
    const [cartIds, setCartIds] = useState([]);
    const [popularItems] = useState([
        { id: 1, src: '/images/pix8.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
        { id: 2, src: '/images/pix9.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
        { id: 3, src: '/images/pix10.jpg', title: 'FRENSH TOAST', price: '$16.75' },
    ]);
    return React.createElement(
      'div',
      { style: { backgroundImage: 'url("/images/history new.jpg")', backgroundPosition: 'center', minHeight: '100vh' } },
      React.createElement(
        'header',
        { className: 'navbar-full' },
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
            { className: 'dropdown-full', onMouseEnter: () => handleMouseEnter('about'), onMouseLeave: handleMouseLeave },
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
            React.createElement('span', { className: 'dropdown-icon-full' }, '▼')
          ),
          dropdownOpen === 'templates' &&
          React.createElement(
            'div',
            { className: 'dropdown-full', onMouseEnter: () => handleMouseEnter('templates'), onMouseLeave: handleMouseLeave },
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
        'div',
        { className: 'news-main-flex-full2' },
        React.createElement(
          'main',
          { className: 'news-section-full2' },
          React.createElement('span', { className: 'news-image-text-full' }, 'We’ve Opened A New Location')
        ),
         React.createElement('p', null, 'We have opened a new location in Lakewood Ranch! We’re hosting our grand opening event this week,  and you can get any meal for 20% off.'),


         React.createElement(
        'div',
        { className: 'news-main-flex-full' },
        React.createElement(
          'main',
          { className: 'news-section-full3' },
        ),
      ),
         
      React.createElement(
        'div',
        { className: 'news-bottom-content-full' },
        React.createElement('p', null,
          'Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor pellentesque neque tempor feugiat. Vivamus odio tortor, pulvinar vitae placerat sed, ultricies nec augue. In fermentum nunc sit amet mauris tincidunt laoreet. Nulla accumsan, elit quis vehicula auctor, enim ligula pharetra ligula, nec facilisis purus ipsum nec sem. Quisque vitae risus elit, quis lobortis augue. Duis dignissim ',
          React.createElement('a', { href: 'https://example.com', target: '_blank', rel: 'noopener noreferrer', style: { color: '#8EB04A', textDecoration: 'underline' } }, 'example link'),
          ' mauris eu arcu consectetur in scelerisque risus iaculis. Maecenas ac sagittis libero.'
        ),
        React.createElement('p', null, 'Maecenas consectetur, nunc et euismod malesuada, libero nunc vestibulum ante, sed tempor ligula sapien vitae enim. Nullam in elit quam. Maecenas feugiat euismod libero, quis feugiat enim elementum sit amet. Fusce in sem id mi venenatis hendrerit. Phasellus tempus enim vel nulla accumsan volutpat.'),
    
        React.createElement('p', null, 'Cras aliquet viverra neque ac malesuada. Nullam tempor massa ut turpis fermentum vel laoreet diam tempor. Sed cursus nulla vel massa cursus et rhoncus erat pretium. In vehicula magna vitae ante sagittis ac semper risus feugiat. Morbi a massa lacus, quis congue massa. Suspendisse potenti. Fusce tristique, sem eu interdum laoreet, mauris justo malesuada purus, eget vehicula ligula justo eget elit. Duis dignissim mauris eu arcu consectetur in scelerisque risus iaculis. Maecenas ac sagittis libero.'),
        React.createElement('h1', { className: 'news-h1-full' }, 'Heading 1 Example'),
        React.createElement('h2', { className: 'news-h2-full' }, 'Heading 2 Example'),
        React.createElement('h3', { className: 'news-h3-full' }, 'Heading 3 Example'),
        React.createElement('h4', { className: 'news-h4-full' }, 'Heading 4 Example'),
        React.createElement('h5', { className: 'news-h5-full' }, 'Heading 5 Example'),
        React.createElement('h6', { className: 'news-h6-full' }, 'HEADING 6 EXAMPLE'),
        React.createElement('hr', { className: 'news-hr-full' }),
        React.createElement('p', null, 'Nunc eleifend, erat eu lacinia feugiat, erat tortor convallis justo, vel eleifend massa dui vitae nunc. Duis volutpat orci eu orci ultrices eget ultrices mi mollis. Integer in enim ut velit congue varius eu eget purus. Nulla eget molestie ipsum. Duis mollis cursus quam, non faucibus risus rutrum vitae. Vestibulum commodo convallis ipsum, nec hendrerit elit eleifend eu. Vestibulum non nisl ligula, id aliquet leo. Fusce vitae ligula nec lacus tincidunt porta. Vestibulum et elementum erat. Pellentesque rutrum velit et justo cursus a tempor quam lacinia. Duis blandit pulvinar tortor id rhoncus. Quisque malesuada malesuada fringilla. Phasellus et lorem tortor, sed convallis libero. Cras consequat, ipsum quis porttitor consectetur, lacus ipsum pulvinar turpis, ut facilisis orci augue vitae tellus. Etiam a neque quis turpis scelerisque pulvinar.'),
        React.createElement('blockquote', { className: 'news-blockquote-full' },
          'This is an example blockquote. Fusce lobortis, nisi vitae mattis viverra, diam magna ultrices urna, id fermentum lacus massa facilisis lectus. Proin nec metus leo.'
        ),
        React.createElement('p', null, 'Morbi tortor velit, mattis sed sagittis et, cursus sit amet sem. Morbi eget velit justo. Nunc suscipit eros eget arcu pretium accumsan. Etiam congue tempor quam. Sed sed eros vel neque vulputate mollis interdum vel leo. Maecenas id tristique metus. Morbi euismod dignissim dolor eget viverra. Curabitur sodales faucibus justo quis lobortis. Cras ligula velit, congue ac laoreet eu, porttitor sit amet nulla. Nunc scelerisque nulla vitae urna euismod elementum. Cras congue commodo libero ac condimentum. Nullam vel elit nunc, eu tempus lectus. Proin sodales molestie leo, et sodales tortor malesuada ac. Cras aliquet viverra neque ac malesuada. Nullam tempor massa ut turpis fermentum vel laoreet diam tempor. Sed cursus nulla vel massa cursus et rhoncus erat pretium. In vehicula magna vitae ante sagittis ac semper risus feugiat. Morbi a massa lacus, quis congue massa. Suspendisse potenti. Fusce tristique, sem eu interdum laoreet, mauris justo malesuada purus, eget vehicula ligula justo eget elit.'),

        ),
        // Comment Form
      ),

        React.createElement('div', { className: 'comment-form-full2' },
          React.createElement('h3', { className: 'comment-form-title2' }, 'LEAVE A REPLY'),
          React.createElement('p', { className: 'comment-form-note2' }, 'Your email address will not be published. Required fields are marked *'),
          React.createElement('form', { className: 'reply-form2' },
            React.createElement('div', { className: 'form-group2' },
              React.createElement('label', { htmlFor: 'comment' }, 'Comment *'),
              React.createElement('textarea', { id: 'comment', name: 'comment', rows: 5, required: true })
            ),
            React.createElement('div', { className: 'form-group2' },
              React.createElement('label', { htmlFor: 'name' }, 'Name *'),
              React.createElement('input', { type: 'text', id: 'name', name: 'name', required: true })
            ),
            React.createElement('div', { className: 'form-group2' },
              React.createElement('label', { htmlFor: 'email' }, 'Email *'),
              React.createElement('input', { type: 'email', id: 'email', name: 'email', required: true })
            ),
            React.createElement('div', { className: 'form-group2' },
              React.createElement('label', { htmlFor: 'website' }, 'Website'),
              React.createElement('input', { type: 'url', id: 'website', name: 'website' })
            ),
            React.createElement('button', { type: 'submit', className: 'submit-btn2' }, 'Post Comment')
          )
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
              React.createElement('button', { className: 'footer-btn', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, 'RESERVATIONS'),
              React.createElement('button', { className: 'footer-btn', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) }, 'ORDER ONLINE')
            )
          )
        ),
        React.createElement('div', { className: 'footer-bottom' },
          React.createElement('p', null, '© 2026 Restaurant. All rights reserved.')
        )
      )
    )
}

export default Newlocation;

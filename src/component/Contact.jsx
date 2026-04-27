import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    // Dropdown state
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const handleMouseEnter = (menu) => setDropdownOpen(menu);
    const handleMouseLeave = () => setDropdownOpen(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return React.createElement(
      'div',
           { style: { backgroundImage: 'url("/images/history new.jpg")', backgroundPosition: 'center', minHeight: '100vh' } },
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
                 { className: 'dropdown', onMouseEnter: () => handleMouseEnter('about'), onMouseLeave: handleMouseLeave },
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
                 { className: 'dropdown', onMouseEnter: () => handleMouseEnter('templates'), onMouseLeave: handleMouseLeave },
                 React.createElement(Link, { to: '/news', className: 'dropdown-link' }, 'Blog'),
                 React.createElement(Link, { to: '/category', className: 'dropdown-link' }, 'Category'),
                 React.createElement(Link, { to: '/templates/product', className: 'dropdown-link' }, 'Product'),
                 React.createElement(Link, { to: '/templates/Product Category', className: 'dropdown-link' }, 'Product Category'),
                 React.createElement(Link, { to: '/history', className: 'dropdown-link' }, 'Sidebar Page')
               )
             ),
             React.createElement(Link, { to: '/order', className: 'nav-link2' }, 'ORDER ONLINE'),
           ),

       React.createElement(
           'div',
           { className: 'contact-content-full' },
           React.createElement('h2', { className: 'contact-header-full' }, 'Contact'),
           React.createElement('p', { className: 'contact-intro-full' }, 'This page utilizes the contact form available in the ', React.createElement('a', { href: 'https://wordpress.org/plugins/jetpack/', target: '_blank', rel: 'noopener noreferrer' }, 'Jetpack'), ' plugin.'),
           React.createElement(
               'form',
               { className: 'contact-form-full', onSubmit: handleSubmit },
               React.createElement(
                   'div',
                   { className: 'contact-form-group-full' },
                   React.createElement('label', { htmlFor: 'name', className: 'contact-label-full' }, 
                       'Name',
                       React.createElement('span', { className: 'contact-required-full' }, '(required)')
                   ),
                   React.createElement('input', {
                       type: 'text',
                       id: 'name',
                       name: 'name',
                       value: formData.name,
                       onChange: handleChange,
                       className: 'contact-input-full',
                       required: true
                   })
               ),
               React.createElement(
                   'div',
                   { className: 'contact-form-group-full' },
                   React.createElement('label', { htmlFor: 'email', className: 'contact-label-full' }, 
                       'Email',
                       React.createElement('span', { className: 'contact-required-full' }, '(required)')
                   ),
                   React.createElement('input', {
                       type: 'email',
                       id: 'email',
                       name: 'email',
                       value: formData.email,
                       onChange: handleChange,
                       className: 'contact-input-full',
                       required: true
                   })
               ),
               React.createElement(
                   'div',
                   { className: 'contact-form-group-full' },
                   React.createElement('label', { htmlFor: 'message', className: 'contact-label-full' }, 'Message'),
                   React.createElement('textarea', {
                       id: 'message',
                       name: 'message',
                       value: formData.message,
                       onChange: handleChange,
                       className: 'contact-textarea-full',
                       rows: 6
                   })
               ),
               React.createElement(
                   'button',
                   { type: 'submit', className: 'contact-submit-btn-full' },
                   'Contact Us'
               ),
               submitted && React.createElement('p', { className: 'contact-success-full' }, 'Thank you! Your message has been sent.')
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
                  );
       
}

export default Contact;

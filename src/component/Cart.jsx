import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const location = useLocation();
  const cartItems = location.state?.items || [];
  
  const [couponCode, setCouponCode] = useState('');
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    country: 'Nigeria',
    streetAddress: '',
    houseNumber: '',
    apartment: '',
    townCity: '',
    state: '',
    phone: '',
    orderNotes: ''
  });
  
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('cash');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const priceToNumber = (p) => parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
  
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + priceToNumber(item.price);
  }, 0);
  
  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'SAVE10') {
      setDiscount(Number((subtotal * 0.10).toFixed(2)));
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };
  
  const total = Math.max(0, Number((subtotal - discount).toFixed(2)));
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required';
    }
    
    if (!formData.townCity.trim()) {
      newErrors.townCity = 'Town / City is required';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Order placed successfully! Thank you for your order.');
      // Here you would typically submit the order to a backend
    }
  };
  
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe',
    'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
  ];
  
  return React.createElement(
    'div',
    { className: 'checkout-page-container' },
    React.createElement(
      'header',
      { className: 'checkout-navbar' },
      React.createElement(Link, { to: '/', className: 'checkout-nav-link1' }, 'RESTAURANT'),
      React.createElement(
        'nav',
        null,
        React.createElement(Link, { to: '/locations', className: 'checkout-nav-link' }, 'LOCATIONS'),
        React.createElement(Link, { to: '/menu', className: 'checkout-nav-link' }, 'MENU'),
        React.createElement(Link, { to: '/about', className: 'checkout-nav-link' }, 'ABOUT'),
        React.createElement(Link, { to: '/order', className: 'checkout-nav-link2' }, 'ORDER ONLINE')
      )
    ),
    
    React.createElement(
      'div',
      { className: 'checkout-main-content' },
      React.createElement(
        'div',
        { className: 'checkout-form-section' },
        React.createElement(
          'div',
          { className: 'checkout-coupon-section' },
          !showCouponForm 
            ? React.createElement(
                'span',
                null,
                React.createElement('span', { className: 'checkout-coupon-label' }, 'Have a coupon? '),
                React.createElement(
                  'span',
                  { className: 'checkout-coupon-link', onClick: () => setShowCouponForm(true) },
                  'Click here to enter your code'
                )
              )
            : React.createElement(
                'div',
                { className: 'checkout-coupon-form' },
                React.createElement('input', {
                  type: 'text',
                  value: couponCode,
                  onChange: (e) => setCouponCode(e.target.value),
                  placeholder: 'Enter coupon code',
                  className: 'checkout-coupon-input'
                }),
                React.createElement(
                  'button',
                  { onClick: applyCoupon, className: 'checkout-coupon-button' },
                  'Apply'
                )
              )
        ),
        
        React.createElement('h2', { className: 'checkout-section-title' }, 'Billing details'),
        
        React.createElement('h2', { className: 'checkout-section-title', style: { marginTop: '30px' } }, 'Check payments'),
        React.createElement(
          'div',
          { className: 'payment-methods-section' },
          React.createElement(
            'div',
            { className: 'payment-option' },
            React.createElement('input', {
              type: 'radio',
              id: 'check',
              name: 'payment',
              value: 'check',
              checked: paymentMethod === 'check',
              onChange: (e) => setPaymentMethod(e.target.value)
            }),
            React.createElement('label', { htmlFor: 'check' }, 'Check payments'),
            paymentMethod === 'check' && React.createElement(
              'div',
              { className: 'payment-details' },
              React.createElement('p', null, 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.')
            )
          ),
          React.createElement(
            'div',
            { className: 'payment-option' },
            React.createElement('input', {
              type: 'radio',
              id: 'cod',
              name: 'payment',
              value: 'cash',
              checked: paymentMethod === 'cash',
              onChange: (e) => setPaymentMethod(e.target.value)
            }),
            React.createElement('label', { htmlFor: 'cod' }, 'Cash on delivery')
          ),
          React.createElement(
            'div',
            { className: 'payment-option' },
            React.createElement('input', {
              type: 'radio',
              id: 'paypal',
              name: 'payment',
              value: 'paypal',
              checked: paymentMethod === 'paypal',
              onChange: (e) => setPaymentMethod(e.target.value)
            }),
            React.createElement('label', { htmlFor: 'paypal' }, 'PayPal '),
            React.createElement('span', { className: 'paypal-icon' }, 'PayPal')
          )
        ),
        
        React.createElement('h2', { className: 'checkout-section-title', style: { marginTop: '30px' } }, 'Billing details'),
        
        React.createElement(
          'form',
          { onSubmit: handlePlaceOrder },
          React.createElement(
            'div',
            { className: 'checkout-form-grid' },
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'Email address ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement('input', {
                type: 'email',
                name: 'email',
                value: formData.email,
                onChange: handleInputChange,
                placeholder: 'your@email.com'
              }),
              errors.email && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.email)
            ),
            React.createElement('div', { className: 'checkout-form-group' }, null),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'First name ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement('input', {
                type: 'text',
                name: 'firstName',
                value: formData.firstName,
                onChange: handleInputChange,
                placeholder: 'First name'
              }),
              errors.firstName && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.firstName)
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'Last name ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement('input', {
                type: 'text',
                name: 'lastName',
                value: formData.lastName,
                onChange: handleInputChange,
                placeholder: 'Last name'
              }),
              errors.lastName && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.lastName)
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group checkout-form-full' },
              React.createElement('label', null, 'Company name (optional)'),
              React.createElement('input', {
                type: 'text',
                name: 'company',
                value: formData.company,
                onChange: handleInputChange,
                placeholder: 'Company name'
              })
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group checkout-form-full' },
              React.createElement('label', null, 'Country / Region ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement(
                'select',
                {
                  name: 'country',
                  value: formData.country,
                  onChange: handleInputChange,
                  className: 'checkout-country-select'
                },
                React.createElement('option', { value: 'Nigeria' }, 'Nigeria')
              )
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group checkout-form-full' },
              React.createElement('label', null, 'Street address ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement('input', {
                type: 'text',
                name: 'streetAddress',
                value: formData.streetAddress,
                onChange: handleInputChange,
                placeholder: 'Street address'
              }),
              errors.streetAddress && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.streetAddress)
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'House number and street name'),
              React.createElement('input', {
                type: 'text',
                name: 'houseNumber',
                value: formData.houseNumber,
                onChange: handleInputChange,
                placeholder: 'House number and street name'
              })
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'Apartment, suite, unit, etc. (optional)'),
              React.createElement('input', {
                type: 'text',
                name: 'apartment',
                value: formData.apartment,
                onChange: handleInputChange,
                placeholder: 'Apartment, suite, unit, etc.'
              })
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'Town / City ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement('input', {
                type: 'text',
                name: 'townCity',
                value: formData.townCity,
                onChange: handleInputChange,
                placeholder: 'Town / City'
              }),
              errors.townCity && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.townCity)
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group' },
              React.createElement('label', null, 'State ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement(
                'select',
                {
                  name: 'state',
                  value: formData.state,
                  onChange: handleInputChange,
                  className: 'checkout-country-select'
                },
                React.createElement('option', { value: '' }, 'Select an option…'),
                nigerianStates.map(state => 
                  React.createElement('option', { key: state, value: state }, state)
                )
              ),
              errors.state && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.state)
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group checkout-form-full' },
              React.createElement('label', null, 'Phone ', React.createElement('span', { className: 'required' }, '*')),
              React.createElement('input', {
                type: 'tel',
                name: 'phone',
                value: formData.phone,
                onChange: handleInputChange,
                placeholder: 'Phone'
              }),
              errors.phone && React.createElement('span', { style: { color: 'red', fontSize: '12px' } }, errors.phone)
            ),
            
            React.createElement(
              'div',
              { className: 'checkout-form-group checkout-form-full' },
              React.createElement('label', null, 'Additional information'),
              React.createElement('textarea', {
                name: 'orderNotes',
                value: formData.orderNotes,
                onChange: handleInputChange,
                placeholder: 'Notes about your order, e.g. special notes for delivery.'
              })
            )
          )
        )
      ),
      
      React.createElement(
        'div',
        { className: 'checkout-order-summary' },
        React.createElement('h2', { className: 'order-summary-title' }, 'Your order'),
        
        cartItems.length === 0 
          ? React.createElement('p', null, 'Your cart is empty')
          : React.createElement(
              React.Fragment,
              null,
              React.createElement(
                'div',
                { className: 'order-summary-items' },
                cartItems.map((item, index) => 
                  React.createElement(
                    'div',
                    { key: index, className: 'order-summary-item' },
                    React.createElement(
                      'span',
                      { className: 'order-summary-item-name' },
                      item.title,
                      React.createElement('span', { className: 'order-summary-item-qty' }, ' x1')
                    ),
                    React.createElement('span', { className: 'order-summary-item-price' }, item.price)
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'order-summary-totals' },
                React.createElement(
                  'div',
                  { className: 'order-summary-row' },
                  React.createElement('span', null, 'Subtotal'),
                  React.createElement('span', null, `$${subtotal.toFixed(2)}`)
                ),
                discount > 0 && React.createElement(
                  'div',
                  { className: 'order-summary-row', style: { color: 'green' } },
                  React.createElement('span', null, 'Discount'),
                  React.createElement('span', null, `-$${discount.toFixed(2)}`)
                ),
                React.createElement(
                  'div',
                  { className: 'order-summary-row' },
                  React.createElement('span', null, 'Total'),
                  React.createElement('span', null, `$${total.toFixed(2)}`)
                )
              ),
              React.createElement(
                'button',
                { type: 'submit', onClick: handlePlaceOrder, className: 'place-order-button' },
                'Place Order'
              )
            )
      )
    ),
    
    React.createElement(
      'footer',
      { className: 'checkout-footer' },
      React.createElement(
        'div',
        { className: 'checkout-footer-content' },
        React.createElement(
          'div',
          { className: 'checkout-footer-section' },
          React.createElement('h3', null, 'LOCATIONS'),
          React.createElement('ul', null,
            React.createElement('li', null, 'Sarasota, FL'),
            React.createElement('li', null, 'Honolulu, HI'),
            React.createElement('li', null, 'San Diego, CA'),
            React.createElement('li', null, 'Savannah, GA')
          )
        ),
        React.createElement(
          'div',
          { className: 'checkout-footer-section' },
          React.createElement('h3', null, 'HOURS'),
          React.createElement('ul', null,
            React.createElement('li', null, 'Monday — 9:00 am – 11:00 pm'),
            React.createElement('li', null, 'Tuesday — 9:00 am – 11:00 pm'),
            React.createElement('li', null, 'Wednesday — 9:00 am – 11:00 pm'),
            React.createElement('li', null, 'Thursday — 9:00 am – 11:00 pm'),
            React.createElement('li', null, 'Friday — 9:00 am – 11:00 pm'),
            React.createElement('li', null, 'Saturday — 11:00 am – 1:00 am'),
            React.createElement('li', null, 'Sunday — 11:00 am – 1:00 am')
          )
        ),
        React.createElement(
          'div',
          { className: 'checkout-footer-section' },
          React.createElement('h3', null, 'CONNECT'),
          React.createElement('ul', null,
            React.createElement('li', null, 'Address: 19s Lemon St, Sarasota, FL 34236'),
            React.createElement('li', null, 'Phone: 941-123-4567'),
            React.createElement('li', null, 'Email: info@restaurant.com')
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'checkout-footer-bottom' },
        React.createElement('p', null, '© 2026 Restaurant. All rights reserved.')
      )
    )
  );
}

export default Cart;
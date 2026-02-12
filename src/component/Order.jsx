import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Order.css';

function Order() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  
  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };
  
  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };
  
  const handleOrderDropdownClick = () => {
    setDropdownOpen(dropdownOpen === 'default sorting' ? null : 'default sorting');
  };
  
  // Calculate dropdown direction based on available space
  const getDropdownPosition = () => {
    if (!dropdownRef.current) return 'down';
    
    const rect = dropdownRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    
    // If more space above and less than 200px below, open upward
    if (spaceAbove > spaceBelow && spaceBelow < 200) {
      return 'up';
    }
    // If more space below, open downward
    return 'down';
  };
     const popularItems = [
    { id: 1, src: '/images/oder12.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
    { id: 2, src: '/images/oder1.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
    { id: 3, src: '/images/oder2.jpg', title: 'FRENSH TOAST', price: '$16.75' },
    { id: 4, src: '/images/pix8.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
    { id: 5, src: '/images/pix10.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
    { id: 6, src: '/images/oder3.jpg', title: 'FRENSH TOAST', price: '$16.75' },
    { id: 7, src: '/images/oder4.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
    { id: 8, src: '/images/oder5.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
    { id: 9, src: '/images/pix9.jpg', title: 'FRENSH TOAST', price: '$16.75' },
    { id: 10, src: '/images/oder6.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
    { id: 11, src: '/images/oder7.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
    { id: 12, src: '/images/oder8.jpg', title: 'FRENSH TOAST', price: '$16.75' },

  ];
  const [cartIds, setCartIds] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const addToCart = (item) => {
    setCartIds(prev => (prev.includes(item.id) ? prev : [...prev, item.id]));
    setQuantities(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  };

  const incQty = (id) => setQuantities(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  const decQty = (id) => setQuantities(prev => {
    const current = prev[id] || 1;
    const next = Math.max(1, current - 1);
    return { ...prev, [id]: next };
  });
  const removeItem = (id) => {
    setCartIds(prev => prev.filter(x => x !== id));
    setQuantities(prev => {
      const cp = { ...prev };
      delete cp[id];
      return cp;
    });
  };

  const priceToNumber = (p) => parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
  const cartSubtotal = cartIds.reduce((sum, id) => {
    const item = popularItems.find(i => i.id === id);
    if (!item) return sum;
    const qty = quantities[id] || 1;
    return sum + priceToNumber(item.price) * qty;
  }, 0);

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'SAVE10') {
      setDiscount(Number((cartSubtotal * 0.10).toFixed(2)));
    } else {
      setDiscount(0);
    }
  };

  const estimatedTotal = Math.max(0, Number((cartSubtotal - discount).toFixed(2)));

  const [query, setQuery] = useState('');
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const displayedItems = popularItems.filter(i => i.title.toLowerCase().includes(keyword.toLowerCase().trim()));
  
  const totalPages = Math.ceil(displayedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = displayedItems.slice(startIndex, startIndex + itemsPerPage);
  
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const gridElement = document.getElementById('store-browse');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  const dropdownDirection = dropdownOpen === 'default sorting' ? getDropdownPosition() : null;
  
  return React.createElement(
    'div',
    { className: 'hero-content_order' },
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
            React.createElement(Link, { to: '/templates/Sidebar Page', className: 'dropdown-link' }, 'Sidebar Page')
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
      React.createElement(Link, { to: '/order', className: 'nav-link2' }, 'ORDER ONLINE'),
    ),
    
    React.createElement('div', { className: 'order-main-container' },
      React.createElement('div', { className: 'order_grid' },
        React.createElement('div', { className: 'grid_inner' },
          React.createElement('div', { className: 'grid-header-row' },
            React.createElement('div', { className: 'grid-inner-title' },
              React.createElement('p', { className: 'order' }, 'Order'),
              React.createElement('p', { className: 'order-text' }, 'Showing 1–12 of 15 results.com')
            ),
            React.createElement(
              'div',
              {
                ref: dropdownRef,
                className: 'nav-order-dropdown' + (dropdownOpen === 'default sorting' ? ' open' : '') + (dropdownDirection === 'up' ? ' dropdown-up' : ' dropdown-down'),
                onClick: handleOrderDropdownClick,
              },
              React.createElement(
                Link,
                { to: '', className: 'nav-order' },
                'Deafult Sorting',
                React.createElement('span', { className: 'dropdown-order' }, '▼')
              ),
              React.createElement(
                'div',
                { className: 'dropdown-order-menu' },
                React.createElement(Link, { to: '', className: 'dropdown-order-link' }, 'Default Sorting'),
                React.createElement(Link, { to: '', className: 'dropdown-order-link' }, 'Sort by Popularity'),
                React.createElement(Link, { to: '', className: 'dropdown-order-link' }, 'sort by Average Rating'),
                React.createElement(Link, { to: '', className: 'dropdown-order-link' }, 'Sort by latest'),
                React.createElement(Link, { to: '', className: 'dropdown-order-link' }, 'Sort by Price: Low to High'),
                React.createElement(Link, { to: '', className: 'dropdown-order-link' }, 'Sort by Price: High to Low')
              )
            )
          ),
          React.createElement('div', { id: 'store-browse', className: 'img_grid' },
            displayedItems.map((item) => React.createElement('div', { key: item.id, className: 'grid_card' },
              React.createElement(Link, { to: '/menu' },
                React.createElement('img', { src: item.src, alt: item.title, className: 'grid_img' })
              ),
              React.createElement('div', { className: 'grid_info' },
                React.createElement('h3', { className: 'order_title' }, React.createElement(Link, { to: '/menu' }, item.title)),
                React.createElement('div', { className: 'order_footer' },
                  React.createElement('span', { className: 'order_price' }, item.price)
                ),
                cartIds.includes(item.id)
                  ? React.createElement('span', { className: 'order-cart-added' }, 'Added')
                  : React.createElement('button', { className: 'order_cart2', onClick: () => addToCart(item) }, 'ADD TO CART')
              )
            ))
          )
        )
      ),
      
      React.createElement('aside', { className: 'order-aside' },
        React.createElement('div', { className: 'search-container' },
          React.createElement('input', { type: 'text', value: query, onChange: (e) => setQuery(e.target.value), placeholder: 'Search products...', className: 'order-search-input' }),
          React.createElement('button', { onClick: () => setKeyword(query), className: 'order-search-button' }, 'Go')
        ),
        React.createElement(
          'div',
          { className: 'cart-container' },
          cartIds.length === 0
            ? React.createElement('div', null,
                React.createElement('p', { className: 'cart-empty' }, 'Your cart is currently empty!'),
                React.createElement('a', { href: '#store-browse', className: 'browse-store-link' }, 'Browse store')
              )
            : React.createElement(React.Fragment, null,
                React.createElement('h3', { className: 'cart-title' }, 'Products in cart'),
                React.createElement('ul', { className: 'cart-items-list' },
                  popularItems
                    .filter(i => cartIds.includes(i.id))
                    .map(i => React.createElement('li', { key: i.id, className: 'cart-item' },
                      React.createElement(Link, { to: '/menu' },
                        React.createElement('img', { src: i.src, alt: i.title, className: 'cart-item-image' })
                      ),
                      React.createElement('div', { className: 'cart-item-details' },
                        React.createElement('div', { className: 'cart-item-title' }, i.title),
                        React.createElement('div', { className: 'cart-item-price' }, i.price)
                      ),
                      React.createElement('div', { className: 'quantity-controls' },
                        React.createElement('button', { onClick: () => decQty(i.id), className: 'qty-button' }, '−'),
                        React.createElement('span', null, quantities[i.id] || 1),
                        React.createElement('button', { onClick: () => incQty(i.id), className: 'qty-button' }, '＋'),
                        React.createElement('button', { onClick: () => removeItem(i.id), className: 'remove-item-button' }, 'Remove item')
                      )
                    ))
                ),
                React.createElement('div', { className: 'coupon-section' },
                  React.createElement('div', { className: 'coupon-label' }, 'Add coupons'),
                  React.createElement('div', { className: 'coupon-input-container' },
                    React.createElement('input', { type: 'text', value: couponCode, onChange: (e) => setCouponCode(e.target.value), placeholder: 'Enter code', className: 'coupon-input' }),
                    React.createElement('button', { onClick: applyCoupon, className: 'apply-coupon-button' }, 'Apply')
                  ),
                  discount > 0 && React.createElement('div', { className: 'coupon-applied' }, `Coupon applied: -${discount.toFixed(2)}`)
                ),
                React.createElement('div', { className: 'estimated-total' },
                  React.createElement('strong', null, 'Estimated total'),
                  React.createElement('strong', null, `${estimatedTotal.toFixed(2)}`)
                ),
                React.createElement(Link, { to: '/cart', state: { items: popularItems.filter(i => cartIds.includes(i.id)) }, className: 'checkout-button' }, 'Proceed to Checkout')
              )
        ),
        React.createElement('div', { className: 'aside-info-section' },
          React.createElement('h4', { className: 'info-title' }, 'INFORMATION'),
          React.createElement('p', { className: 'phone-paragraph' }, React.createElement('strong', null, 'Phone:'), ' ', React.createElement('a', { href: 'tel:9411234567' }, '941-123-4567')),
          React.createElement('hr', { className: 'info-divider' }),
          React.createElement('h4', { className: 'hours-title' }, 'Hours'),
          React.createElement('ul', { className: 'hours-list' },
            React.createElement('li', null, React.createElement('strong', null, 'Monday'), ' — 9:00 am – 11:00 pm'),
            React.createElement('li', null, React.createElement('strong', null, 'Tuesday'), ' — 9:00 am – 11:00 pm'),
            React.createElement('li', null, React.createElement('strong', null, 'Wednesday'), ' — 9:00 am – 11:00 pm'),
            React.createElement('li', null, React.createElement('strong', null, 'Thursday'), ' — 9:00 am – 11:00 pm'),
            React.createElement('li', null, React.createElement('strong', null, 'Friday'), ' — 9:00 am – 11:00 pm'),
            React.createElement('li', null, React.createElement('strong', null, 'Saturday'), ' — 11:00 am – 1:00 am'),
            React.createElement('li', null, React.createElement('strong', null, 'Sunday'), ' — 11:00 am – 1:00 am')
          ),
          // React.createElement('h6', { className: 'categories-title' }, 'Categories'),
          // React.createElement('ul', { className: 'categories-list' },
          //   React.createElement('li', null, 'Category'),
          //   React.createElement('li', null, 'Featured'),
          //   React.createElement('li', null, 'Slider'),
          //   React.createElement('li', null, 'Uncategorized')
          // ),
          // React.createElement('h6', { className: 'comments-title' }, 'Recent Comments'),
          // React.createElement('ol', { className: 'comments-list' },
          //   React.createElement('li', null,
          //     React.createElement('div', null, React.createElement('strong', null, 'David Morgan'), ' on ', 'Closed For Remodel', ' — November 2, 2022'),
          //     React.createElement('div', { className: 'comment-text' }, 'This is an example reply.')
          //   ),
          //   React.createElement('li', null,
          //     React.createElement('div', null, React.createElement('strong', null, 'David Morgan'), ' on ', 'Closed For Remodel', ' — November 2, 2022'),
          //     React.createElement('div', { className: 'comment-text' }, 'This is an example comment.')
          //   )
          // )
        )
      )
    ),
    React.createElement('footer', { className: 'footer_order' },
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

export default Order;

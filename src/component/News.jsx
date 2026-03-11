import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';


function News() {

    // Dropdown state
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const handleMouseEnter = (menu) => setDropdownOpen(menu);
    const handleMouseLeave = () => setDropdownOpen(null);

    // Show more/less state
    const [showMore, setShowMore] = useState(false);

    // Dummy cart/search state and handlers to prevent errors
    const [query, setQuery] = useState("");
    const [keyword, setKeyword] = useState("");
    const [cartIds, setCartIds] = useState([]);
    const [popularItems] = useState([
        { id: 1, src: '/images/pix8.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
        { id: 2, src: '/images/pix9.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
        { id: 3, src: '/images/pix10.jpg', title: 'FRENSH TOAST', price: '$16.75' },
    ]);
    const [quantities, setQuantities] = useState({});
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [estimatedTotal, setEstimatedTotal] = useState(0);
    const incQty = (id) => setQuantities(q => ({ ...q, [id]: (q[id] || 1) + 1 }));
    const decQty = (id) => setQuantities(q => ({ ...q, [id]: Math.max(1, (q[id] || 1) - 1) }));
    const removeItem = (id) => setCartIds(ids => ids.filter(i => i !== id));
    const applyCoupon = () => setDiscount(5); // Dummy coupon logic

    // Optionally, recalculate estimated total when cart changes
    React.useEffect(() => {
        const total = cartIds.reduce((sum, id) => {
            const item = popularItems.find(i => i.id === id);
            const qty = quantities[id] || 1;
            if (!item) return sum;
            const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
            return sum + price * qty;
        }, 0);
        setEstimatedTotal(Math.max(0, total - discount));
    }, [cartIds, quantities, discount, popularItems]);

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
        { className: 'news-main-flex' },
        React.createElement(
          'main',
          { className: 'news-section' },
          React.createElement(
            'a',
            { href: '/menu', className: 'news-image-link' },
            React.createElement('img', { src: '/images/NewsIMG1.jpg', alt: 'News', className: 'news-main-image' })
          )
        )
      ),
          React.createElement(
            'div',
            { className: 'news-bottom-content' },
            React.createElement('p', null, 'This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform.'),
            React.createElement('p', null,
              'Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor pellentesque neque tempor feugiat. Vivamus odio tortor, pulvinar vitae placerat sed, ultricies nec augue. In fermentum nunc sit amet mauris tincidunt laoreet. Nulla accumsan, elit quis vehicula auctor, enim ligula pharetra ligula, nec facilisis purus ipsum nec sem. Quisque vitae risus elit, quis lobortis augue. Duis dignissim ',
              React.createElement('a', { href: 'https://example.com', target: '_blank', rel: 'noopener noreferrer', style: { color: '#8EB04A', textDecoration: 'underline' } }, 'example link'),
              ' mauris eu arcu consectetur in scelerisque risus iaculis. Maecenas ac sagittis libero.'
            ),
            React.createElement('p', null, 'Maecenas consectetur, nunc et euismod malesuada, libero nunc vestibulum ante, sed tempor ligula sapien vitae enim. Nullam in elit quam. Maecenas feugiat euismod libero, quis feugiat enim elementum sit amet. Fusce in sem id mi venenatis hendrerit. Phasellus tempus enim vel nulla accumsan volutpat.'),
            React.createElement('ul', { className: 'news-list' },
              React.createElement('li', null, 'Example List Item'),
              React.createElement('li', null, 'Example List Item'),
              React.createElement('li', null, 'Example List Item')
            ),
            React.createElement('p', null, 'Cras aliquet viverra neque ac malesuada. Nullam tempor massa ut turpis fermentum vel laoreet diam tempor. Sed cursus nulla vel massa cursus et rhoncus erat pretium. In vehicula magna vitae ante sagittis ac semper risus feugiat. Morbi a massa lacus, quis congue massa. Suspendisse potenti. Fusce tristique, sem eu interdum laoreet, mauris justo malesuada purus, eget vehicula ligula justo eget elit. Duis dignissim mauris eu arcu consectetur in scelerisque risus iaculis. Maecenas ac sagittis libero.'),
            React.createElement(
              'a',
              { 
                href: '/news/full', 
                className: 'news-more-link'
              },
              'more...'
            ),
        ),
        React.createElement(
          'aside',
          { className: 'order-aside', style: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', padding: '16px' } },
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
                React.createElement('a', { href: '#store-browse', className: 'browse-store-link' }, 'Browse store.')
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
            React.createElement('div', { className: 'aside-buttons' },
              React.createElement(Link, { to: '/reservations', className: 'aside-btn' }, 'RESERVATIONS'),
              React.createElement(Link, { to: '/order', className: 'aside-btn' }, 'ORDER ONLINE')
            ),
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
                    React.createElement(Link, { to: '/reservations', className: 'footer-btn' }, 'RESERVATIONS'),
                    React.createElement(Link, { to: '/order-online', className: 'footer-btn' }, 'ORDER ONLINE')
      
                  )
                )
              ),
              React.createElement('div', { className: 'footer-bottom' },
                React.createElement('p', null, '© 2026 Restaurant. All rights reserved.')
              )
            )
          )
}

export default News
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
    // Dropdown state
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const handleMouseEnter = (menu) => setDropdownOpen(menu);
    const handleMouseLeave = () => setDropdownOpen(null);

    // Search state
    const [query, setQuery] = useState("");
    const [_keyword, setKeyword] = useState("");

    // Cart state
    const [cartIds, setCartIds] = useState([]);
    const [recentlyAdded, setRecentlyAdded] = useState(null);
    const [popularItems] = useState([
        { id: 1, src: '/images/products1.jpg', title: 'The Dude', price: '$11.00' },
        { id: 2, src: '/images/oder7.jpg', title: 'Green Goblin', price: '$12.00' },
        { id: 3, src: '/images/oder6.jpg', title: 'Citrus Sangria', price: '$9.00' },
        { id: 4, src: '/images/oder3.jpg', title: 'Pink Lemonade Spritzer', price: '$11.00' },
        { id: 5, src: '/images/oder1.jpg', title: 'Old Fashioned', price: '$14.00' },
    ]);
    const [quantities, setQuantities] = useState({});
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [estimatedTotal, setEstimatedTotal] = useState(0);

    // Tab state
    const [activeTab, setActiveTab] = useState('description');

    const incQty = (id) => setQuantities(q => ({ ...q, [id]: (q[id] || 1) + 1 }));
    const decQty = (id) => setQuantities(q => ({ ...q, [id]: Math.max(1, (q[id] || 1) - 1 ) }));
    const removeItem = (id) => setCartIds(ids => ids.filter(i => i !== id));
    const applyCoupon = () => setDiscount(5);
    
    // Add to cart helper that tracks newly added items for animation
    const addToCart = (id) => {
      setRecentlyAdded(id);
      setCartIds(ids => [...ids, id]);
    };

    // Calculate estimated total
    React.useEffect(() => {
        const total = cartIds.reduce((sum, id) => {
            const item = popularItems.find(i => i.id === id);
            const qty = quantities[id] || 1;
            if (!item) return sum;
            const price = parseFloat(item.price.replace(/[^\d.]/g,""));
            return sum + price * qty;
        }, 0);
        setEstimatedTotal(Math.max(0, total - discount));
    }, [cartIds, quantities, discount, popularItems]);
    
    // Clear recentlyAdded state after animation delay
    React.useEffect(() => {
        if (recentlyAdded !== null) {
            const timer = setTimeout(() => {
                setRecentlyAdded(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [recentlyAdded]);

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
                    { to: '', className: 'nav-link' },
                    'TEMPLATES',
                    React.createElement('span', { className: 'dropdown-icon' }, '▼')
                ),
                dropdownOpen === 'templates' &&
                React.createElement(
                    'div',
                    { className: 'dropdown', onMouseEnter: () => handleMouseEnter('templates'), onMouseLeave: handleMouseLeave },
                    React.createElement(Link, { to: '/news', className: 'dropdown-link' }, 'Blog'),
                    React.createElement(Link, { to: '/category', className: 'dropdown-link' }, 'Category'),
                    React.createElement(Link, { to: '/products', className: 'dropdown-link' }, 'Product'),
                    React.createElement(Link, { to: '/productCategory', className: 'dropdown-link' }, 'Product Category'),
                   React.createElement(Link, { to: '/SidebarPage', className: 'dropdown-link' }, 'Sidebar Page')
                )
            ),
            React.createElement(Link, { to: '/order', className: 'nav-link2' }, 'ORDER ONLINE')
        ),
        React.createElement(
            'main',
            { className: 'products-main' },
            // Breadcrumb
            React.createElement(
                'div',
                { className: 'products-breadcrumb' },
                React.createElement(Link, { to: '/' }, 'Home'),
                ' / ',
                React.createElement(Link, { to: '/menu' }, 'Cocktails'),
                ' / ',
                React.createElement('span', null, 'The Dude')
            ),
            // Product hero section
            React.createElement(
                'section',
                { className: 'products-hero' },
                React.createElement(
                    'div',
                    { className: 'products-image-container' },
                    React.createElement('img', { src: '/images/products1.jpg', alt: 'The Dude', className: 'products-main-image' })
                ),
                React.createElement(
                    'div',
                    { className: 'products-info' },
                    React.createElement('h1', { className: 'products-title' }, 'The Dude'),
                    React.createElement('p', { className: 'products-price' }, '$11.00'),
                    React.createElement('p', { className: 'products-description' }, 'Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.'),

                    React.createElement('div', { className: 'products-add-to-cart-inline' },
                        React.createElement('div', { className: 'products-quantity-controls' },
                            React.createElement('button', { onClick: () => decQty(1), className: 'qty-button' }, '−'),
                            React.createElement('span', null, quantities[1] || 1),
                            React.createElement('button', { onClick: () => incQty(1), className: 'qty-button' }, '＋')
                        ),
                        React.createElement('button', { onClick: () => addToCart(1), className: 'add-to-cart-btn' }, 'Add to cart')
                    ),
                   // PayPal and Category section
                    React.createElement('div', { className: 'paypal-category-section' },
                            React.createElement('span', { className: 'pay-badge' },
                                React.createElement('span', { className: 'pay-purple' }, 'pay'),
                                React.createElement('span', { className: 'pay-pal' }, 'pal')
                            ),             
                    ),
                        React.createElement('hr', { className: 'paypal-divider' }),
                        React.createElement('div', { className: 'category-info' },
                            React.createElement('span', { className: 'menu-icon' }, '☰'),
                            React.createElement('span', null, 'Category: ', React.createElement('span', { className: 'category-link' }, 'Cocktails'))
                        ),
                    )
                ),
                    // Tabs section
                    React.createElement(
                        'div',
                        { className: 'products-tabs' },
                        React.createElement('button', { className: activeTab === 'description' ? 'products-tab active' : 'products-tab', onClick: () => setActiveTab('description') }, 'Description'),
                        React.createElement('button', { className: activeTab === 'reviews' ? 'products-tab1 active' : 'products-tab1', onClick: () => setActiveTab('reviews') }, 'Reviews (0)')
                    ),
                
            // Tab content
            React.createElement(
                'div',
                { className: 'products-description-content' },
                activeTab === 'reviews' && React.createElement('div', { className: 'reviews-section' },
                    React.createElement('h3', { className: 'section-title' }, 'Reviews'),
                    React.createElement('h4', null, 'There are no reviews yet.'),
                    React.createElement('p', null, 'Be the first to review "The Dude"'),
                    React.createElement('p', null, 'Your email address will not be published. Required fields are marked *'),
                    React.createElement('div', { className: 'review-form' },
                        React.createElement('div', { className: 'form-group' },
                            React.createElement('label', null, 'Your rating *'),
                            React.createElement('div', { className: 'star-rating' },
                                React.createElement('span', null, '★'),
                                React.createElement('span', null, '★'),
                                React.createElement('span', null, '★'),
                                React.createElement('span', null, '★'),
                                React.createElement('span', null, '★')
                            )
                        ),
                        React.createElement('div', { className: 'form-group' },
                            React.createElement('label', null, 'Your review *'),
                            React.createElement('textarea', { rows: 4 })
                        ),
                        React.createElement('div', { className: 'form-group' },
                            React.createElement('label', null, 'Name *'),
                            React.createElement('input', { type: 'text' })
                        ),
                        React.createElement('div', { className: 'form-group' },
                            React.createElement('label', null, 'Email *'),
                            React.createElement('input', { type: 'email' })
                        ),
                        React.createElement('button', { className: 'submit-review' }, 'submit')
                    ),
React.createElement('div', { className: 'review-related-products' },
                        React.createElement('h5', null, 'Related products'),
                        React.createElement('div', { className: 'review-products-grid' },
                            popularItems.slice(1).map(item =>
                                React.createElement(
                                    'div',
                                    { key: item.id, className: 'review-product-card' },
                                    React.createElement('img', { src: item.src, alt: item.title, className: 'review-product-image' }),
                                    React.createElement('p', { className: 'review-product-name' }, item.title),
                                    React.createElement('p', { className: 'review-product-price' }, item.price),
                                    React.createElement('button', { 
                                        className: 'review-add-btn',
                                        onClick: () => addToCart(item.id)
                                    }, 'Add to cart')
                                )
                            )
                    
                            
                        )
                    )

                ),
                activeTab === 'description' && React.createElement('h3', { className: 'section-title' }, 'Description'),
                activeTab === 'description' && React.createElement('p', null, 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.'
                ),
                activeTab === 'description' && React.createElement(
                    'section',
                    { className: 'products-related' },
                    React.createElement('h2', { className: 'related-title' }, 'Related products'),
                    React.createElement('div', { className: 'products-grid' },
                        popularItems.slice(1).map(item =>
                            React.createElement(
                                'div',
                                { key: item.id, className: 'product-card' },
                                React.createElement('img', { src: item.src, alt: item.title, className: 'product-image' }),
                                React.createElement('h3', { className: 'product-name' }, item.title),
                                React.createElement('p', { className: 'product-price' }, item.price),
                                 React.createElement('button', { onClick: () => addToCart(item.id), className: 'product-add-btn' }, 'Add to cart')
                            )  
                        )
                     
                    )
                )
            )   
                 
        ),
        // Cart aside
        React.createElement(
            'aside',
            { className: 'order-aside', style: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', padding: '16px' } },
            cartIds.length === 0
                ? React.createElement('div', { className: 'cart-empty-container' },
                    React.createElement('div', { className: 'search-container-top' },
                        React.createElement('input', { type: 'text', value: query, onChange: (e) => setQuery(e.target.value), placeholder: 'Search products...', className: 'order-search-input' }),
                        React.createElement('button', { onClick: () => setKeyword(query), className: 'order-search-button' }, 'Go')
                    ),
                    React.createElement('p', { className: 'cart-empty' }, 'Your cart is currently empty!'),
                    React.createElement('a', { href: '#store-browse', className: 'browse-store-link' }, 'Browse store.')
                )
                : React.createElement(React.Fragment, null,
                    React.createElement('div', { className: 'search-container' },
                        React.createElement('input', { type: 'text', value: query, onChange: (e) => setQuery(e.target.value), placeholder: 'Search products...', className: 'order-search-input' }),
                        React.createElement('button', { onClick: () => setKeyword(query), className: 'order-search-button' }, 'Go')
                    ),
                    React.createElement('h3', { className: 'cart-title' }, 'Products in cart'),
                     React.createElement('ul', { className: 'cart-items-list' },
                        popularItems
                            .filter(i => cartIds.includes(i.id))
                            .map(i => React.createElement('li', { key: i.id, className: `cart-item ${i.id === recentlyAdded ? 'newly-added' : ''}` },
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
                ),
            // Info section inside aside
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
                    React.createElement('p', null, '19 S Lemon Ave'),
                    React.createElement('p', null, 'Sarasota, FL 34236'),
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
                React.createElement('p', null, 'Copyright © 2022 · All Rights Reserved'),
                React.createElement('p', null, 'Theme: Restaurant by Organic Themes'),
            )
        ),
    );
}

export default Products;
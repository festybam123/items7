import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Items7() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const popularItems = [
    { id: 1, src: '/images/pix8.jpg', title: 'DOUBLE DOGS', price: '$22.00' },
    { id: 2, src: '/images/pix9.jpg', title: 'MAHI AHI TACOS', price: '$18.50' },
    { id: 3, src: '/images/pix10.jpg', title: 'FRENSH TOAST', price: '$16.75' },

  ];
  const [cartIds, setCartIds] = useState([]);
  const addToCart = (item) => {
    setCartIds(prev => prev.includes(item.id) ? prev : [...prev, item.id]);
  };

  return (
    React.createElement(React.Fragment, null,
      React.createElement('nav', { className: 'navbar' },
        React.createElement(Link, { to: '/', className: 'nav-link1' }, 'RESTAURANT'),
        React.createElement(Link, { to: '/locations', className: 'nav-link' }, 'LOCATIONS'),
        React.createElement(Link, { to: '/menu', className: 'nav-link' }, 'MENU'),
        React.createElement('div', { className: 'nav-item', onMouseEnter: () => setAboutOpen(true), onMouseLeave: () => setAboutOpen(false) },
          React.createElement(Link, { to: '/about', className: 'nav-link' }, 'ABOUT', React.createElement('span', { className: 'dropdown-icon' }, '▼')),
          aboutOpen && React.createElement('div', { className: 'dropdown' },
            React.createElement(Link, { to: '/about/history', className: 'dropdown-link' }, 'History'),
            React.createElement(Link, { to: '/about/news', className: 'dropdown-link' }, 'News'),
            React.createElement(Link, { to: '/about/contact', className: 'dropdown-link' }, 'Contact')
          )
        ),
        React.createElement('div', { className: 'nav-item', onMouseEnter: () => setTemplatesOpen(true), onMouseLeave: () => setTemplatesOpen(false) },
          React.createElement(Link, { to: '/templates', className: 'nav-link' }, 'TEMPLATES', React.createElement('span', { className: 'dropdown-icon' }, '▼')),
          templatesOpen && React.createElement('div', { className: 'dropdown' },
            React.createElement(Link, { to: '/templates/blog', className: 'dropdown-link' }, 'Blog'),
            React.createElement(Link, { to: '/templates/category', className: 'dropdown-link' }, 'Category'),
            React.createElement(Link, { to: '/templates/product', className: 'dropdown-link' }, 'Product'),
            React.createElement(Link, { to: '/templates/Product Category', className: 'dropdown-link' }, 'Product Category'),
            React.createElement(Link, { to: '/templates/Sidebar Page', className: 'dropdown-link' }, 'Sidebar Page')
          )
        ),
        React.createElement(Link, { to: '/order-online', className: 'nav-link2' }, 'ORDER ONLINE')
      ),


      React.createElement('section', { className: 'hero', style: { backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/pix1.jpg')", backgroundSize: '110% 110%', backgroundPosition: '0% 50%', backgroundRepeat: 'no-repeat', animation: 'slideBackground 20s linear infinite' } },
        React.createElement('div', { className: 'hero-inner' },
          React.createElement('h1', { className: 'hero-title' }, 'Farm To Table'),
          React.createElement('p', { className: 'hero-subtitle' }, 'FRESH INGREDIENTS DIRECTLY FROM THE SOURCE'),
          React.createElement(Link, { to: '/menu', className: 'hero-cta' }, 'LOCATIONS')
        )
      ),

      // Second background section directly after hero
      React.createElement('section', { className: 'hero hero-secondary' },

      React.createElement('div', { className: 'image-flex' },
        React.createElement('div', { className: 'flex-image flex-image1' },
          React.createElement('img', { src: '/images/pix2.jpeg', alt: 'Image 1' }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'image-text1' }, 'Dinner'),
            React.createElement(Link, { to: '/menu', className: 'image-button1' }, 'VIEW MENU')
          )
        ),
        React.createElement('div', { className: 'flex-image flex-image2' },
          React.createElement('img', { src: '/images/pix3.jfif', alt: 'Image 2' }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'image-text2' }, 'Lunch'),
            React.createElement(Link, { to: '/menu', className: 'image-button2' }, 'VIEW MENU')
          )
        ),
        React.createElement('div', { className: 'flex-image flex-image3' },
          React.createElement('img', { src: '/images/pix4.avif', alt: 'Image 3' }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'image-text3' }, 'Appetizers'),
            React.createElement(Link, { to: '/menu', className: 'image-button3' }, 'VIEW MENU')
          )
        ),
        React.createElement('div', { className: 'flex-image flex-image3' },  
          React.createElement('img', { src: '/images/pix5.webp', alt: 'Image 4' }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'image-text3' }, 'Breakfast'),
            React.createElement(Link, { to: '/menu', className: 'image-button3' }, 'VIEW MENU')
          )
        ),
        React.createElement('div', { className: 'flex-image flex-image4' },
          React.createElement('img', { src: '/images/pix6.avif', alt: 'Image 5' }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'image-text4' }, 'Desserts'),
            React.createElement(Link, { to: '/menu', className: 'image-button4' }, 'VIEW MENU')
          )
        ),
        React.createElement('div', { className: 'flex-image flex-image5' },
          React.createElement('img', { src: '/images/pix13.jpg', alt: 'Image 6' }),
          React.createElement('div', { className: 'image-overlay' },
            React.createElement('div', { className: 'image-text5' }, 'Cocktails'),
            React.createElement(Link, { to: '/menu', className: 'image-button5' }, 'VIEW MENU')
          )
        ),

        React.createElement('div', { className: 'img_cnt' },
          React.createElement('div', { className: 'img_cnt_inner' },
            React.createElement('h2', { className: 'img_cnt_title' }, 'Popular Orders'),
            React.createElement('p', { className: 'img_cnt_subtitle' }, 'Our customers can’t get enough of these dishes!'),
            React.createElement('div', { className: 'img_grid' },
              popularItems.map((item) => React.createElement('div', { key: item.id, className: 'img_card' },
                React.createElement('img', { src: item.src, alt: item.title, className: 'card_img' }),
                React.createElement('div', { className: 'img_info' },
                  React.createElement('h3', { className: 'card_title' }, React.createElement(Link, { to: '/menu' }, item.title), ),
                  React.createElement('div', { className: 'card_footer' },
                    React.createElement('span', { className: 'card_price' }, item.price)
                  ),
                  cartIds.includes(item.id)
                    ? React.createElement(Link, { to: '/cart', state: { items: popularItems.filter(i => cartIds.includes(i.id)) }, className: 'add_cart' }, 'View cart')
                    : (item.id === 1
                      ? React.createElement(Link, { to: '/menu', className: 'add_cart1' }, 'READ MORE')
                      : React.createElement('button', { className: 'add_cart2', onClick: () => addToCart(item) }, 'ADD TO CART')
                    )
                )
              ))
            ),
            React.createElement('div', null,
              React.createElement(Link, { to: '/order-online', className: 'oder_btn' }, 'ORDER NOW')
            )
          )
        ),

        // Spacer section with image and flex layout
        React.createElement('div', { className: 'spacer' },
          React.createElement('img', { className: 'spacer_img', src: '/images/div11.jpg', alt: 'Happy hour drinks' }),
          React.createElement('div', { className: 'spacer_copy' },
            React.createElement('h2', { className: 'spacer_text' }, 'HAPPY HOUR'),
            React.createElement('h3', { className: 'spacer_text2' }, 'Everyday 4pm-6pm'),
            React.createElement('hr', { className: 'spacer_divider' }),
            React.createElement('p', { className: 'spacer_text3' }, 'We have the best deals in town. Take a gander at our ', React.createElement('br', null), ' mouth watering Happy Hour specials.'),
            React.createElement(Link, { to: '/order-online', className: 'spacer_btn' }, 'VIEW SPECIALS')
          )
        ),

         React.createElement('div', { className: 'spacer2' },
          React.createElement('img', { className: 'spacer2_img', src: '/images/restaurant-card.png', alt: 'Happy hour drinks' }),
          React.createElement('div', { className: 'spacer2_copy' },
            React.createElement('h2', { className: 'spacer2_text' }, 'Gift Cards'),
            React.createElement('p', { className: 'spacer2_text2' }, 'Give the gift of delicious food'),

          ),
            React.createElement(Link, { to: '/order-online', className: 'spacer2_btn' }, 'BUY GIFT CARDS')
        )

      ),

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
    )
  );
}

export default Items7
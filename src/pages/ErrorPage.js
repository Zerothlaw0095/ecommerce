import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    // Define footMenu and footSocial data directly
    const footMenu = [
        {
            id: 1,
            title: "Help",
            menu: [
                { id: 1, link: "FAQs", path: "/faqs" },
                { id: 2, link: "Track Order", path: "/track-order" },
                { id: 3, link: "Cancel Order", path: "/cancel-order" },
                { id: 4, link: "Return Order", path: "/return-order" },
                { id: 5, link: "Warranty Info", path: "/warranty-info" }
            ]
        },
        {
            id: 2,
            title: "Policies",
            menu: [
                { id: 1, link: "Return Policy", path: "/return-policy" },
                { id: 2, link: "Security", path: "/security" },
                { id: 3, link: "Sitemap", path: "/sitemap" },
                { id: 4, link: "Privacy Policy", path: "/privacy-policy" },
                { id: 5, link: "Terms & Conditions", path: "/terms-and-conditions" }
            ]
        },
        {
            id: 3,
            title: "Company",
            menu: [
                { id: 1, link: "About Us", path: "/about-us" },
                { id: 2, link: "Contact Us", path: "/contact-us" },
                { id: 3, link: "Service Centres", path: "/service-centres" },
                { id: 4, link: "Careers", path: "/careers" },
                // { id: 5, link: "Affiliates", path: "/affiliates" }
            ]
        }
    ];

    const footSocial = [
        { id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com/" },
        { id: 2, icon: <FaTwitter />, url: "https://twitter.com/" },
        { id: 3, icon: <FaInstagram />, url: "https://www.instagram.com/" },
        { id: 4, icon: <FaLinkedinIn />, url: "https://in.linkedin.com/" }
    ];
    return (
        <>
            <section style={{ padding: '50px 0' }} id="error_page" className="section">
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }} className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="error_page_content">
                        {/* Display Foot Menu */}
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }} className="footer-menu">
                            {footMenu.map((menuItem) => (
                                <div key={menuItem.id} style={{ marginRight: '40px' }} className="menu-item">
                                    <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{menuItem.title}</h3>
                                    <ul style={{ listStyle: 'none', padding: '0' }}>
                                        {menuItem.menu.map((item) => (
                                            <li key={item.id} style={{ marginBottom: '10px' }}>
                                                <Link style={{ color: '#333', textDecoration: 'none', fontSize: '16px' }} to={item.path}>{item.link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Display Foot Social Icons */}
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="footer-social">
                            {footSocial.map((socialItem) => (
                                <a key={socialItem.id} href={socialItem.url} target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', fontSize: '20px', color: '#333' }}>
                                    {socialItem.icon}
                                </a>
                            ))}
                        </div>

                        {/* Go Home Button */}
                        <Link to="/" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s ease' }} className="btn">Go Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default  ErrorPage;
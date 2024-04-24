// footerData.js

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Help",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/faqs",
                url: "https://example.com/faqs"
            },
            {
                id: 2,
                link: "Track Order",
                path: "/track-order",
                url: "https://maps.google.com/"
            },
            {
                id: 3,
                link: "Cancel Order",
                path: "/cancel-order",
                url: "https://example.com/cancel"
            },
            {
                id: 4,
                link: "Return Order",
                path: "/return-order",
                url: "https://example.com/return"
            },
            {
                id: 5,
                link: "Warranty Info",
                path: "/warranty-info",
                url: "https://example.com/warranty"
            },
        ]
    },
    {
        id: 2,
        title: "Policies",
        menu: [
            {
                id: 1,
                link: "Return Policy",
                path: "/return-policy",
                url: "https://example.com/return-policy"
            },
            {
                id: 2,
                link: "Security",
                path: "/security",
                url: "https://example.com/security"
            },
            {
                id: 3,
                link: "Sitemap",
                path: "/sitemap",
                url: "https://example.com/sitemap"
            },
            {
                id: 4,
                link: "Privacy Policy",
                path: "/privacy-policy",
                url: "https://example.com/privacy-policy"
            },
            {
                id: 5,
                link: "Terms & Conditions",
                path: "/terms-conditions",
                url: "https://example.com/terms"
            },
        ]
    },
    {
        id: 3,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/about-us",
                url: "https://example.com/about"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "/contact-us",
                url: "https://example.com/contact"
            },
            {
                id: 3,
                link: "Service Centres",
                path: "/service-centres",
                url: "https://example.com/service-centres"
            },
            {
                id: 4,
                link: "Careers",
                path: "/careers",
                url: "https://example.com/careers"
            },
            {
                id: 5,
                link: "Affiliates",
                path: "/affiliates",
                url: "https://example.com/affiliates"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "/",
        url: "https://www.facebook.com/"
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
        url: "https://twitter.com/"
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
        url: "https://www.instagram.com/"
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
        url: "https://www.linkedin.com/"
    },
];

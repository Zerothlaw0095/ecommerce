import { FaShieldAlt, FaShippingFast, FaTags } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <a href="https://www.shiprocket.in/"><FaShippingFast /></a>,
        title: "Express Delivery",
        info: "Ships in 24 Hours",
        link: "https://www.shiprocket.in/",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Brand Warranty",
        info: "100% Original products",
    },
    {
        id: 3,
        icon: <FaTags/>,
        title: "Exciting Deals",
        info: "On all prepaid orders",
        
    },
    {
        id: 4,
        icon: <a href ="https://pay.google.com/about/"><FaTags/></a>,
        title: "Secure Payments",
        info: "SSL / Secure сertificate",
        link:" https://pay.google.com/about/",
    },
];

export default servicesData;
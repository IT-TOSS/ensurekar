'use client';
import { motion } from 'framer-motion';

const helpInfo = {
    email: "infoensurekar@gmail.com",
    phone: "+91 917470756060",
    liveChat: "Available 24/7 on our website",
    faqLink: "/FAQs"
};



const HelpPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-8 bg-gray-100  flex flex-col items-center justify-center"
        >
            <motion.h1 
                className="text-4xl font-bold mb-4 text-center text-blue-600"
                initial={{ y: -20 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                Help & Support
            </motion.h1>
            <motion.p 
                className="text-lg mb-6 text-center max-w-2xl"
                initial={{ y: -20 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                If you need assistance with your business, please contact us through one of the following methods:
            </motion.p>
            <motion.ul 
                className="list-disc list-inside mb-8 text-center max-w-2xl space-y-2"
                initial={{ y: -20 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <li>Email: <a href={`mailto:${helpInfo.email}`} className="text-blue-500 hover:underline">{helpInfo.email}</a></li>
                <li>Phone: <a href={`tel:${helpInfo.phone}`} className="text-blue-500 hover:underline">{helpInfo.phone}</a></li>
                <li>Live Chat: {helpInfo.liveChat}</li>
            </motion.ul>
            <motion.h2 
                className="text-2xl font-semibold mb-4 text-center text-blue-600"
                initial={{ y: -20 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                Frequently Asked Questions
            </motion.h2>
            <motion.p 
                className="text-lg text-center max-w-2xl"
                initial={{ y: -20 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                Check out our <a href={helpInfo.faqLink} className="text-blue-500 underline hover:text-blue-700">FAQ page</a> for quick answers to common questions.
            </motion.p>
        </motion.div>
    );
}

export default HelpPage;
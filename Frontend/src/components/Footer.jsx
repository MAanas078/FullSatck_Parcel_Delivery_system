import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" }
  ];

  const footerLinks = [
    {
      title: "Services",
      links: ["Express Delivery", "Standard Shipping", "International", "Bulk Orders"]
    },
    {
      title: "Support",
      links: ["Track Package", "Help Center", "Contact Us", "FAQ"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Partners"]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-10"
            animate={{
              x: [0, Math.random() * 1000],
              y: [0, Math.random() * 400],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="/logo.png" 
              alt="SendIT Logo" 
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              We understand that your parcels hold more than just items, they carry your trust. 
              With a commitment to excellence, we ensure every delivery is handled with care and reliability.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <span className="text-xl mr-3">📞</span>
                <span>+1 (425) 879-1676</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <span className="text-xl mr-3">📧</span>
                <span>support@sendit.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300"
              >
                <span className="text-xl mr-3">📍</span>
                <span>Delhi, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5, color: "#FDE047" }}
                    className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new features and special offers.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl hover:text-yellow-400 transition-colors"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Designed by <span className="text-yellow-400 font-semibold">SendIT Team</span>
            </p>
            <p className="text-gray-500 text-sm">
              &copy; 2025 SendIT. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 text-6xl opacity-10"
      >
        📦
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 text-4xl opacity-10"
      >
        🚚
      </motion.div>
    </footer>
  );
}

export default Footer;
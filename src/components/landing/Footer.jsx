import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Product",
      items: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#" },
        { name: "Updates", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "#" },
        { name: "Community", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Mail className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="pt-16 pb-8 bg-white border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {links.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-12 mt-12 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-6 md:mb-0"
            >
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text dark:from-blue-400 dark:to-purple-400">
                UserManage
              </span>
              <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">© {currentYear} All rights reserved</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 transition-colors hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                  <span className="sr-only">Social link</span>
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

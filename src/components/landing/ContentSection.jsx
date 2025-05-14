import { motion } from "framer-motion";
import { ShieldCheck, Users, BarChart2, Lock, Activity, Bell, Server, Zap } from "lucide-react";

const features = [
  {
    title: "Role Management",
    description: "Easily assign and customize roles with granular permissions for complete control over user access.",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    title: "Secure Access",
    description: "Enterprise-grade security with multi-factor authentication and single sign-on (SSO) support.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/30",
  },
  {
    title: "Detailed Analytics",
    description: "Real-time dashboards and reports to track user behavior and system activity.",
    icon: <BarChart2 className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
  },
  {
    title: "Activity Monitoring",
    description: "Comprehensive audit logs of all user actions with timestamped records.",
    icon: <Activity className="w-6 h-6" />,
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/30",
  },
  {
    title: "Data Encryption",
    description: "End-to-end encryption for all sensitive data both at rest and in transit.",
    icon: <Lock className="w-6 h-6" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
  },
  {
    title: "Automated Alerts",
    description: "Custom notifications for suspicious activities or important system events.",
    icon: <Bell className="w-6 h-6" />,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/30",
  },
  {
    title: "High Availability",
    description: "99.99% uptime with redundant infrastructure across multiple regions.",
    icon: <Server className="w-6 h-6" />,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
  },
  {
    title: "Lightning Fast",
    description: "Optimized for performance with sub-second response times even at scale.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/30",
  },
];

const ContentSection = () => {
  return (
    <section id="features" className="px-6 py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 rounded-full bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300">
            Powerful Features
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Advanced User Management</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to securely manage users at scale with enterprise-grade features and intuitive controls.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`p-1 rounded-2xl ${feature.bgColor} transition-all duration-300 group-hover:shadow-lg`}>
                <div className="p-6 bg-white rounded-xl dark:bg-gray-900">
                  <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-lg ${feature.bgColor}`}>
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial/Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="px-8 py-12 mt-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">10,000+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">99.99%</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Support Response</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;

import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    featured: false,
    description: "Perfect for small teams getting started",
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: ["Up to 10 users", "Basic access controls", "Email support", "Community access"],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    featured: true,
    description: "For growing teams with advanced needs",
    buttonText: "Upgrade Now",
    buttonVariant: "primary",
    features: ["Unlimited users", "Advanced roles & permissions", "Detailed analytics", "Priority email support", "API access"],
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    featured: false,
    description: "For large organizations with complex requirements",
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    features: ["Everything in Pro", "Dedicated account manager", "SAML/SSO integration", "On-premise deployment", "Custom SLAs", "24/7 phone support"],
    icon: <Rocket className="w-5 h-5" />,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="px-6 py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 rounded-full bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300">
            Pricing Plans
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Simple, transparent pricing</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">Choose the perfect plan for your team. Scale up or down as needed.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative ${plan.featured ? "lg:mt-0" : "lg:mt-8"}`}
            >
              {plan.featured && <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-600"></div>}
              <div
                className={`h-full p-1 rounded-xl ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/70 shadow-lg"
                    : "bg-gray-50 dark:bg-gray-800/50 shadow"
                } transition-all duration-300 group`}
              >
                <div className={`h-full p-6 rounded-lg ${plan.featured ? "bg-white dark:bg-gray-900" : "bg-white dark:bg-gray-900"}`}>
                  <div className="flex items-center mb-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 mr-3 rounded-full ${
                        plan.featured
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {plan.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${plan.featured ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{plan.name}</h3>
                  </div>

                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>}
                  </div>

                  <p className="mb-6 text-gray-600 dark:text-gray-400">{plan.description}</p>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <Check className="flex-shrink-0 w-5 h-5 mt-0.5 mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                      plan.featured
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700"
                        : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="px-8 py-12 mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Need something more?</h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              We offer custom solutions for large enterprises with complex requirements. Get in touch to discuss your needs.
            </p>
            <button className="px-6 py-3 font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

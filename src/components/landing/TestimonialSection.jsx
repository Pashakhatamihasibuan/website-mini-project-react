import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CTO, TechCorp",
    quote: "UserManage revolutionized our internal user management. We reduced admin time by 70% while improving security.",
    rating: 5,
    avatar: "JD",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
  },
  {
    name: "Sarah Lee",
    role: "HR Director, ScaleUp Inc.",
    quote: "Finally a user management system that's both powerful and intuitive. Our team adopted it instantly with no training needed.",
    rating: 5,
    avatar: "SL",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
  },
  {
    name: "Michael Chen",
    role: "Product Lead, Innovatech",
    quote: "The granular permission controls saved us from building custom solutions. It handles all our complex use cases effortlessly.",
    rating: 4,
    avatar: "MC",
    color: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
  },
  {
    name: "Emma Wilson",
    role: "Security Engineer, SafeNet",
    quote: "Enterprise-grade security features with a consumer-friendly interface. Our compliance audits have never been easier.",
    rating: 5,
    avatar: "EW",
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200",
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-950" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 rounded-full bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300">
            Customer Stories
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Trusted by Teams Worldwide</h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of satisfied customers who transformed their user management with our platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-1 transition-all duration-300 shadow-sm rounded-2xl bg-gradient-to-br from-transparent via-white/50 to-transparent dark:via-gray-800/30 group-hover:via-white/80 dark:group-hover:via-gray-800/70 group-hover:shadow-md">
                <div className="flex flex-col h-full p-6 bg-white rounded-xl dark:bg-gray-900">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 mb-4 text-gray-300 dark:text-gray-700" />

                  <p className="mb-6 text-gray-700 dark:text-gray-300 grow">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 mr-3 rounded-full ${testimonial.color} font-medium`}>{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="px-8 py-12 mt-20 bg-white shadow-sm dark:bg-gray-800/50 rounded-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">4.9/5</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Daily Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">98%</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Or any other icon library

const HeroSection = () => {
  return (
    <section className="relative px-6 py-24 overflow-hidden text-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" id="home">
      {/* Animated background elements */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 2 }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-100 border rounded-full bg-blue-900/30 backdrop-blur-md border-blue-500/30"
          >
            <span className="relative flex w-2 h-2 mr-2">
              <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 bg-blue-300 rounded-full"></span>
            </span>
            New: AI-powered user insights
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-transparent bg-gradient-to-r from-white to-blue-100 bg-clip-text">User Management</span>
            <br />
            <span className="text-blue-100">Made Simple</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-blue-100/90">
            The most intuitive platform for managing users, roles, and permissions with enterprise-grade security and beautiful interfaces.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 font-semibold text-blue-600 transition-all duration-300 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 gap-x-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 font-medium text-white transition-all duration-300 bg-transparent rounded-full hover:bg-white/10 backdrop-blur-md border border-white/20"
            >
              Live Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid max-w-2xl grid-cols-3 gap-8 mx-auto mt-16 text-white divide-x divide-white/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold md:text-4xl">10K+</div>
            <div className="text-sm text-white/80">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold md:text-4xl">99.9%</div>
            <div className="text-sm text-white/80">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold md:text-4xl">24/7</div>
            <div className="text-sm text-white/80">Support</div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-blue-400/10 blur-xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-0 right-0 w-40 h-40 rounded-full bg-indigo-400/10 blur-xl"
      ></motion.div>
    </section>
  );
};

export default HeroSection;

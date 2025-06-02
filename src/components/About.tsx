import React from 'react';
import { Code, Palette, Lightbulb, Users, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Proficient in building end-to-end web applications using modern technologies like React, Node.js, and MongoDB.'
    },
    {
      icon: Cpu,
      title: 'AI Integration Expert',
      description: 'Experienced in integrating AI tools and APIs to create intelligent, automated solutions for complex problems.'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Skilled in deploying and managing applications on cloud platforms, ensuring scalability and reliability.'
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      description: 'Creating visually stunning and user-friendly interfaces that deliver exceptional user experiences.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Analytical thinker with a passion for turning complex challenges into elegant, efficient solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'Strong communicator who thrives in collaborative environments and delivers results through teamwork.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Full Stack Developer transforming ideas into digital reality through code, creativity, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-2xl opacity-20"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="C:\Users\anapa\OneDrive\Desktop\mypic.jpg"
              alt="Vivek Vardhan - Full Stack Developer"
              className="relative rounded-2xl shadow-2xl border-4 border-white/20 dark:border-gray-700/20"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                rotateX: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I'm <span className="font-bold text-emerald-600 dark:text-emerald-400">Vivek Vardhan</span>, 
                a Full Stack Developer with a passion for creating innovative web solutions. My journey in tech has been 
                driven by curiosity and a desire to build applications that make a real difference.
              </p>
              <p>
                With expertise in the MERN stack and modern web technologies, I specialize in developing scalable 
                applications that combine powerful functionality with intuitive user experiences. From weather 
                applications to social platforms, I've built projects that solve real-world problems.
              </p>
              <p>
                I'm particularly interested in AI integration and cloud solutions, always staying current with the 
                latest technologies to deliver cutting-edge solutions. When I'm not coding, I'm exploring new 
                technologies or contributing to the developer community.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {['Full Stack Developer', 'AI Enthusiast', 'Cloud Expert', 'Problem Solver'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-emerald-200 dark:border-emerald-700 hover:shadow-2xl transition-all duration-300"
              variants={item}
              whileHover={{ 
                y: -10,
                rotateY: 10,
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotateZ: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <feature.icon className="text-white" size={24} />
              </motion.div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
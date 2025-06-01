
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'AI Tools',
      skills: [
        { name: 'ChatGPT', icon: '🤖' },
        { name: 'GitHub Copilot', icon: '💻' },
        { name: 'Claude AI', icon: '🧠' },
        { name: 'Midjourney', icon: '🎨' },
        { name: 'Gemini', icon: '💎' },
        { name: 'Figma AI', icon: '🎯' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React JS', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'HTML', icon: '🟧' },
        { name: 'CSS', icon: '🔵' },
        { name: 'Tailwind CSS', icon: '💨' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node JS', icon: '🟢' },
        { name: 'Express JS', icon: '⚡' },
        { name: 'MongoDB', icon: '🍃' }
      ]
    },
    {
      title: 'Design & Others',
      skills: [
        { name: 'UI/UX Design', icon: '🎨' },
        { name: 'Bootstrap', icon: '🅱️' }
      ]
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
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's my technical stack and the tools I use as a Full Stack Developer.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 dark:border-purple-700 hover:shadow-2xl transition-all duration-300"
              variants={item}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiDownload, FiArrowRight, FiGithub, FiExternalLink, FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { FaAws, FaDocker, FaPython, FaReact, FaJava, FaTrophy, FaCertificate, FaToolbox, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiLinux, SiMysql, SiMongodb, SiPostgresql, SiCplusplus, SiJavascript, SiGithubactions, SiHackerrank } from 'react-icons/si';
import heroImage from './assets/profile.jpg';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg object-contain' : 'py-5 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
            Chanti<span className="text-[#0ea5e9]">.dev</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white hover:text-[#0ea5e9] transition-colors">{link.name}</a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all text-sm font-medium">
              Hire Me
            </a>
          </div>
          <button className="md:hidden text-2xl text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">{link.name}</a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      <main>
        {/* HERO */}
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -z-10" />
          <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-[#0ea5e9]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-300">Available for Opportunities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                Hi, I'm <span className="text-gradient">Chanti</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 h-16">
                Cloud Engineer | DevOps Enthusiast |
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-3 rounded-full bg-[#0ea5e9] text-white font-medium hover:bg-[#0ea5e9]/90 transition flex items-center space-x-2">
                  <span>View Projects</span> <FiArrowRight />
                </a>
                <a href="/resume.pdf" download="Pathlavath_Chanti_Resume.pdf" target="_blank" className="px-8 py-3 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/10 transition flex items-center space-x-2">
                  <span>Resume</span> <FiDownload />
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative justify-self-center md:justify-self-end">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[#0ea5e9] to-purple-500 relative overflow-hidden">
                <div className="absolute inset-2 bg-slate-300 rounded-full"></div>
                <img src={heroImage} alt="Pathlavath Chanti" className="w-full h-full object-cover relative z-10 rounded-full border-4 border-[#050505] mix-blend-normal" />
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl shadow-2xl border border-white/10 z-20">
                <p className="font-bold text-white text-xl">Cloud & DevOps</p>
                <p className="text-sm text-[#0ea5e9]">Engineer</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
            </motion.div>
            <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto flex flex-col space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I am a results-driven <span className="text-white font-medium">Cloud & DevOps Engineer</span> with a strong foundation in building scalable, high-availability architectures and automating complex deployment pipelines. My expertise lies firmly across the AWS ecosystem, containerization with Docker and Kubernetes, and robust infrastructure-as-code paradigms.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Driven by a proven passion for backend optimization and predictive system analytics, I excel at bridging the gap between innovative software engineering and resilient operational performance. Whether it’s optimizing RDS for complex SQL queries or leading AI-powered application deployments, I focus on delivering seamless, production-ready platforms.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I am actively seeking professional opportunities to leverage my full-stack and cloud architecture skills within a forward-thinking SDE or DevOps team. Let's build scalable systems that make a lasting impact.
              </p>
            </div>
          </div>
        </section>



        {/* SKILLS */}
        <section id="skills" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Stack</h2>
              <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Programming', items: [{ name: 'Python', icon: <FaPython className="text-[#3776AB]" /> }, { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> }, { name: 'C', icon: <SiCplusplus className="text-[#A8B9CC]" /> }] },
                { title: 'Cloud & DevOps', items: [{ name: 'AWS (EC2, S3, RDS)', icon: <FaAws className="text-[#FF9900]" /> }, { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> }, { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" /> }, { name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088FF]" /> }, { name: 'Linux', icon: <SiLinux className="text-white" /> }] },
                { title: 'Backend & Databases', items: [{ name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> }, { name: 'AWS RDS', icon: <FaAws className="text-[#FF9900]" /> }] },
                { title: 'Tools & Technologies', items: [{ name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> }, { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> }, { name: 'Git & GitHub', icon: <FiGithub className="text-white" /> }, { name: 'VMware & OpenStack', icon: <FaToolbox className="text-[#607078]" /> }, { name: 'MySQL Workbench', icon: <FaDatabase className="text-[#4479A1]" /> }] },
                { title: 'Soft Skills', items: [{ name: 'Adaptability', icon: <FaTrophy className="text-yellow-500" /> }, { name: 'Leadership', icon: <FaTrophy className="text-yellow-500" /> }, { name: 'Time Management', icon: <FaTrophy className="text-yellow-500" /> }] }
              ].map((cat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass-card p-8 rounded-2xl border border-white/5">
                  <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">{cat.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {cat.items.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition cursor-pointer group col-span-2 sm:col-span-1">
                        <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{skill.icon}</span>
                        <span className="text-gray-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: 'Database Management System', date: "Mar' 25 – Apr' 25", desc: 'Designed and deployed a cloud-based relational database on AWS RDS and EC2. Applied 3NF normalization, optimized SQL queries, and developed stored procedures to reduce latency.', tags: ['AWS RDS', 'EC2', 'MySQL', 'Optimization'], github: 'https://github.com/PathlavathChanti/Database', live: '#', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
                { title: 'AI-Powered OS Performance Analyzer', date: "Feb' 25 – Apr' 25", desc: 'Developed real-time monitoring for OS processes using Python and LSTM-based anomaly detection. Features predictive alerts and Plotly dashboards for metric visualization.', tags: ['Python', 'LSTM', 'Plotly', 'AI'], github: 'https://github.com/PathlavathChanti/AI-Powered-Performance-Analyzer-for-OS-Processes', live: '#', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' }
              ].map((proj, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className="group glass-card overflow-hidden rounded-2xl relative flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 z-10" />
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-8 relative z-20 bg-[#171717] grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#0ea5e9] transition">{proj.title}</h3>
                    <p className="text-sm text-[#0ea5e9] font-medium mb-4">{proj.date}</p>
                    <p className="text-gray-400 mb-6 line-clamp-4">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {proj.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-[#0ea5e9] rounded-full border border-[#0ea5e9]/20">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition cursor-pointer"><FiGithub /> <span>Code</span></a>
                      {proj.live !== '#' && <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-[#0ea5e9] transition cursor-pointer"><FiExternalLink /> <span>Live Preview</span></a>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section id="training" className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Training</h2>
              <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
            </motion.div>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { course: "AWS Academy Graduate – Cloud Architecting", date: "Jan' 26", desc: "Focus on AWS Well-Architected Framework, VPC, EC2, S3, Auto Scaling, and decoupled architecture with SQS.", link: "https://www.credly.com/badges/e8ee4219-edcc-4d13-8084-6895f3eaff13/print" },
                { course: "Responsive Web Design – freeCodeCamp", date: "Nov' 25", desc: "Certified in building complex, adaptive web layouts, accessibility-friendly sites, and modern UI techniques.", link: "https://www.freecodecamp.org/certification/fcc2794790b-ff8d-4e29-b495-ad9aea75fe2a/responsive-web-design" }
              ].map((item, i) => (
                <motion.a href={item.link} target="_blank" rel="noopener noreferrer" key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="block glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-[#0ea5e9] hover:bg-white/5 transition-colors group">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors">{item.course}</h4>
                      <p className="text-[#0ea5e9] font-medium my-2">{item.date}</p>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                    <FiExternalLink className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-xl flex-shrink-0 ml-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATES & ACHIEVEMENTS */}
        <section id="certificates" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                <FaCertificate className="text-[#0ea5e9]" /> <span>Certifications</span>
              </motion.h3>
              <div className="space-y-4">
                {[
                  { name: "Oracle Cloud Infrastructure 2025 AI Foundations", date: "Mar' 26", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=92E6CBE56C9727325E6C99E053A0DD917EFA6E34BF54FB0912CAFC5E690B4E6A" },
                  { name: "Computational Theory & Finite Automata", date: "Aug' 25", link: "https://drive.google.com/file/d/1MKNngj9fZcDANrC8ZcNcBxumcOhPzKAL/view" },
                  { name: "Build Generative AI Apps with No-Code Tools", date: "Aug' 25", link: "https://drive.google.com/file/d/1ADUP--NLSZGHR-Arg1SMHpcWSC7lvo-R/view" },
                  { name: "Python for Data Science, AI & Development", date: "Feb' 24", link: "https://www.coursera.org/account/accomplishments/verify/2AF6RBJ4WEW2" }
                ].map((cert, i) => (
                  <motion.a href={cert.link} target="_blank" rel="noopener noreferrer" key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-xl flex items-center justify-between hover:-translate-y-1 transition-all group block cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors flex-shrink-0"><FaCertificate /></div>
                      <div>
                        <span className="text-gray-200 font-medium text-sm block group-hover:text-white transition-colors">{cert.name}</span>
                        <span className="text-gray-500 text-xs">{cert.date}</span>
                      </div>
                    </div>
                    <FiExternalLink className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div id="achievements">
              <motion.h3 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                <FaTrophy className="text-yellow-500" /> <span>Achievements</span>
              </motion.h3>
              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-purple-500/30 flex items-start space-x-4 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-[#0ea5e9]/20 rounded-full blur-2xl" />
                  <FaTrophy className="text-4xl text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white">Top 10 - Blue Bit Hackathon 2.0</h4>
                    <p className="text-gray-400 text-sm mt-1">Developed a functional prototype within 48 hours and secured a top 10 place in 2024.</p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 flex items-start space-x-4">
                  <SiHackerrank className="text-4xl text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white">5★ C++ on HackerRank</h4>
                    <p className="text-gray-400 text-sm mt-1">Achieved 5-star rating by solving advanced algorithmic and data structure challenges.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
              <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8 border-l-2 border-white/10 ml-3 md:ml-6 pl-8 relative">
                {[
                  { school: "Lovely Professional University Phagwara, Punjab", degree: "B.Tech in Computer Science and Engineering", score: "CGPA: 7.25", date: "Aug' 23 - Present" },
                  { school: "Narayana Junior College Ranga Reddy, Telangana", degree: "Intermediate (MPC)", score: "Percentage: 95.3", date: "Jul' 22 - Mar' 23" },
                  { school: "Sloka The School Hyderabad, Telangana", degree: "Matriculation", score: "Percentage: 100", date: "Apr' 20 - Jun' 21" }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative glass-card p-6 md:p-8 rounded-r-xl rounded-bl-xl border md:border-transparent hover:border-white/10 transition-colors">
                    <div className="absolute -left-[41px] top-8 w-5 h-5 rounded-full bg-[#050505] border-4 border-[#0ea5e9]" />
                    <h4 className="text-xl md:text-2xl font-bold text-white">{item.school}</h4>
                    <p className="text-[#0ea5e9] font-medium my-2 text-lg">{item.degree}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                      <span className="inline-block px-3 py-1.5 bg-white/5 rounded-md text-sm text-gray-300 border border-white/10 font-medium">{item.score}</span>
                      <span className="text-gray-500 font-medium">{item.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#0ea5e9]/10 rounded-full blur-[100px] -z-10" />
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something <span className="text-gradient">impactful</span> together.</h2>
              <p className="text-gray-400 text-lg mb-10">
                Open to SDE and DevOps Roles. Feel free to reach out to discuss opportunities, collaborations, or just to say hi!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#0ea5e9] text-xl"><FiMail /></div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:pathlavathchanti986@gmail.com" className="text-white font-medium hover:text-[#0ea5e9] transition">pathlavathchanti986@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#0ea5e9] text-xl"><FiPhone /></div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+919392616675" className="text-white font-medium hover:text-[#0ea5e9] transition">+91-9392616675</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#0ea5e9] text-xl"><FiMapPin /></div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white font-medium">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-10">
                <a href="https://www.linkedin.com/in/pathlavathchanti" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:bg-[#0ea5e9] hover:text-white transition"><FiLinkedin /></a>
                <a href="https://github.com/pathlavathchanti" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:bg-[#0ea5e9] hover:text-white transition"><FiGithub /></a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <form className="glass-card p-8 rounded-2xl flex flex-col space-y-5" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition" placeholder="your@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition" placeholder="Your message here..."></textarea>
                </div>
                <button className="w-full py-4 rounded-lg bg-[#0ea5e9] text-white font-bold hover:bg-[#0ea5e9]/90 transition shadow-lg shadow-[#0ea5e9]/30">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>
      <footer className="py-8 text-center text-gray-500 border-t border-white/10">
        <p>© {new Date().getFullYear()} Pathlavath Chanti. All rights reserved.</p>
      </footer>
    </div>
  );
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, ChevronUp, Code, Brain, Database, Globe } from "lucide-react"

export default function Portfolio() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Soumojit Konar</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/young-computer-science-student-headshot.png"
                alt="Soumojit Konar - Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Hi, I'm <span className="text-blue-600">Soumojit Konar</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-6">
              2nd-year B.Tech student in Computer Science & Engineering
            </p>
            <p className="text-lg text-slate-500 mb-8">AI & ML specialization at MCKV Institute of Engineering</p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-200"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a passionate computer science student with a deep love for <strong>coding</strong> and artificial
                intelligence. Currently pursuing my B.Tech in Computer Science & Engineering with a specialization in AI
                & ML at MCKV Institute of Engineering.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                My journey in technology is driven by curiosity and the desire to create innovative solutions that can
                make a positive impact. I enjoy exploring the intersection of artificial intelligence and practical
                applications.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/soumojitkonar" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </Button>
                </a>
                <a href="mailto:soumojitkonar8@gmail.com">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>2nd-year B.Tech Student</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>AI & ML Specialization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>MCKV Institute of Engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Passionate about Coding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Code className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Brain className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">AI & ML</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Neural Networks</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Globe className="w-12 h-12 mx-auto text-green-600 mb-2" />
                <CardTitle className="text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Database className="w-12 h-12 mx-auto text-orange-600 mb-2" />
                <CardTitle className="text-lg">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">AI Project 1</CardTitle>
                <CardDescription>Machine Learning Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  An innovative machine learning project focusing on data analysis and predictive modeling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Python</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>Pandas</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Web Application</CardTitle>
                <CardDescription>Full-Stack Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  A responsive web application built with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-teal-50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Data Science Project</CardTitle>
                <CardDescription>Analytics & Visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Comprehensive data analysis project with interactive visualizations and insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Python</Badge>
                  <Badge>Matplotlib</Badge>
                  <Badge>Jupyter</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Experience</h2>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Student Developer</CardTitle>
                <CardDescription className="text-slate-600">
                  MCKV Institute of Engineering • 2023 - Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Currently developing my skills in computer science and artificial intelligence through coursework,
                  projects, and hands-on learning experiences. Actively participating in coding competitions and
                  collaborative projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Maintaining strong academic performance in Computer Science & Engineering with AI & ML specialization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Coding Enthusiast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Passionate about coding with continuous learning and improvement in programming skills and
                  technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8">
                I'm always interested in discussing new opportunities, collaborations, or just having a chat about
                technology and AI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a
                    href="mailto:soumojitkonar8@gmail.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    soumojitkonar8@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-blue-600" />
                  <a
                    href="https://github.com/soumojitkonar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    github.com/soumojitkonar
                  </a>
                </div>
              </div>
            </div>
            <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="border-slate-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="border-slate-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} className="border-slate-200 focus:border-blue-500" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300">© 2024 Soumojit Konar. Built with passion and code.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
          size="sm"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}

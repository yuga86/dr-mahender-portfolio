
import React, { useState, useEffect } from 'react';
import { 
  personalInfo, 
  experiences, 
  education, 
  topPublications, 
  awards, 
  trainings, 
  skills 
} from './data';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['About', 'Experience', 'Education', 'Research', 'Trainings', 'Awards'];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-irri-green text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded">
                <i className="fa-solid fa-seedling text-irri-green text-xl"></i>
              </div>
              <span className="font-bold text-lg hidden sm:inline uppercase tracking-wider">
                Dr. Mahender Anumalla
              </span>
              <span className="font-bold text-lg sm:hidden">MA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {sections.map(section => (
                <a 
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-colors font-medium text-sm"
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Mobile Burger */}
            <button 
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar/Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-irri-green border-t border-green-700 animate-in slide-in-from-top">
            {sections.map(section => (
              <a 
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block px-8 py-4 hover:bg-green-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Header */}
      <header className="bg-irri-light py-12 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-irri-green text-white text-xs font-bold rounded-full mb-4">
              RESEARCHER • GENETICIST • SCIENTIST
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-irri-green font-semibold mb-6">
              {personalInfo.designation}
            </p>
            <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">
              Specializing in Late Maturity Breeding and Rice Breeding Innovation at the 
              <span className="font-bold text-gray-800"> International Rice Research Institute (IRRI)</span>. 
              Dedicated to accelerating genetic gain and developing climate-resilient rice varieties for global food security.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#research" className="bg-irri-green text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition-shadow shadow-lg flex items-center gap-2">
                <i className="fa-solid fa-file-lines"></i> View Publications
              </a>
              <a href={`mailto:${personalInfo.email}`} className="bg-white border-2 border-irri-green text-irri-green px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2">
                <i className="fa-solid fa-envelope"></i> Contact Me
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-200 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-location-dot mt-1 text-irri-green"></i>
                    <div>
                      <p className="font-bold text-gray-800">Location</p>
                      <p className="text-sm text-gray-600">{personalInfo.office}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-envelope mt-1 text-irri-green"></i>
                    <div>
                      <p className="font-bold text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">{personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-brands fa-skype mt-1 text-irri-green"></i>
                    <div>
                      <p className="font-bold text-gray-800">Skype</p>
                      <p className="text-sm text-gray-600">{personalInfo.skype}</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-irri-green"></span>
              Professional Profile
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Dr. Mahender Anumalla is a seasoned rice breeder and biotechnologist with over a decade of experience 
              in agricultural research. His work spans from molecular biology to field-level plant breeding, with a 
              primary focus on enhancing rice productivity under abiotic stresses like drought, salinity, and flooding. 
              He plays a pivotal role in IRRI's South Asia Hub, driving the Accelerated Genetic Gain in Rice Alliance (AGGRi) 
              projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-irri-green">
                <h3 className="font-bold text-xl mb-4 text-irri-green">Core Expertise</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {skills.slice(0, 4).map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <i className="fa-solid fa-check text-green-500"></i> {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-irri-green">
                <h3 className="font-bold text-xl mb-4 text-irri-green">Technical Skills</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {skills.slice(4).map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <i className="fa-solid fa-check text-green-500"></i> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-irri-green"></span>
            Professional Journey
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-irri-green text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <i className="fa-solid fa-briefcase text-xs"></i>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-irri-green font-bold text-sm uppercase tracking-wide">{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.designation}</h3>
                  <p className="text-gray-600 font-medium mb-3 italic">{exp.institute}</p>
                  <div className="bg-irri-light p-3 rounded-lg text-sm">
                    <p className="text-gray-700 font-semibold mb-1">Project:</p>
                    <p className="text-gray-600">{exp.project}</p>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">Advisor: {exp.advisor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-right justify-end">
            Academic Credentials
            <span className="w-8 h-1 bg-irri-green"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-irri-green transition-colors flex flex-col h-full shadow-sm">
                <div className="text-irri-green text-4xl mb-6">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <span className="text-gray-400 font-bold mb-2 uppercase text-xs tracking-widest">{edu.year}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{edu.degree}</h3>
                <p className="text-gray-600 font-semibold mb-4 leading-tight">{edu.university}</p>
                {edu.details && (
                  <p className="text-gray-500 text-sm mt-auto border-t pt-4 italic">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-irri-green text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
              <p className="text-green-100 max-w-2xl text-lg">
                Prolific contributor to international journals with a strong focus on crop science, 
                genetics, and rice breeding innovations.
              </p>
            </div>
            <a href="#" className="bg-white text-irri-green px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors inline-block text-center shadow-lg">
              Download Full List (PDF)
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {topPublications.map((pub, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">{pub.year}</span>
                  {pub.impactFactor && (
                    <span className="bg-yellow-400 text-irri-green px-2 py-0.5 rounded text-[10px] font-black">IF: {pub.impactFactor}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors leading-snug">
                  {pub.title}
                </h3>
                <p className="text-green-100 text-sm mb-4 line-clamp-2">{pub.authors}</p>
                <div className="flex items-center justify-between text-xs font-semibold pt-4 border-t border-white/10">
                  <span className="italic">{pub.journal}</span>
                  {pub.doi && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-400">
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Review/Preparation Mention */}
          <div className="mt-12 text-center p-8 border-2 border-dashed border-white/30 rounded-2xl bg-white/5">
             <p className="text-lg italic text-green-100">
               Currently leading 3 major manuscripts under review for high-impact journals (2025).
             </p>
          </div>
        </div>
      </section>

      {/* Trainings & Awards Section */}
      <section id="trainings" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
          {/* Training */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-irri-green"></span>
              Global Training Programs
            </h2>
            <div className="space-y-6">
              {trainings.map((t, idx) => (
                <div key={idx} className="p-5 bg-gray-50 rounded-xl hover:bg-irri-light transition-colors group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-irri-green font-bold text-xs">{t.location}</span>
                    <span className="text-gray-400 text-xs">{t.duration}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-irri-green transition-colors">{t.training}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div id="awards">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-irri-green"></span>
              Recognitions & Awards
            </h2>
            <div className="space-y-6">
              {awards.map((a, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-yellow-100 text-yellow-600 w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-xl">
                    <i className="fa-solid fa-trophy"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">{a.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Leadership Summary */}
      <section className="py-16 bg-irri-light border-y border-green-100">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-5xl font-black text-irri-green mb-2">42+</p>
                <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Publications</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-black text-irri-green mb-2">15+</p>
                <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Talks Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-black text-irri-green mb-2">6+</p>
                <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Editorial Roles</p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl font-black text-irri-green mb-2">7+</p>
                <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Global Awards</p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-irri-green p-2 rounded">
                  <i className="fa-solid fa-seedling text-white text-2xl"></i>
                </div>
                <span className="font-bold text-xl uppercase tracking-widest">
                  Dr. M. Anumalla
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Advancing rice science for a resilient and food-secure future. 
                Bridging the gap between laboratory research and farmers' fields.
              </p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {sections.map(s => (
                    <a key={s} href={`#${s.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors py-1">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2">Connect</h4>
                <div className="space-y-4">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <i className="fa-solid fa-envelope w-5"></i> {personalInfo.email}
                  </a>
                  <p className="flex items-start gap-3 text-gray-400">
                    <i className="fa-solid fa-location-dot w-5 mt-1"></i> 
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Dr. Mahender Anumalla. All rights reserved.</p>
            <p>Affiliated with International Rice Research Institute (IRRI).</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

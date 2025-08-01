// src/App.jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold tracking-tight mb-2">Carson Holg</h1>
        <p className="text-xl text-gray-400">Web Developer & Designer</p>
      </header>
      
      <main className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-emerald-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate web developer with a keen eye for modern design and user experience. I specialize in building responsive and dynamic web applications using React and Tailwind CSS. I'm always eager to learn new technologies and take on new challenges.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-emerald-400">My Work</h2>
          <div className="space-y-4">
            <a href="#" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
              <h3 className="text-xl font-bold">Project One</h3>
              <p className="text-gray-400">A web application for managing tasks and projects.</p>
            </a>
            <a href="#" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
              <h3 className="text-xl font-bold">Project Two</h3>
              <p className="text-gray-400">A mobile-first e-commerce site for a small business.</p>
            </a>
          </div>
        </section>
      </main>
      
      <footer className="mt-8 text-center text-gray-500">
        <p>Connect with me on <a href="#" className="text-emerald-400 hover:underline">GitHub</a> or <a href="#" className="text-emerald-400 hover:underline">LinkedIn</a>.</p>
      </footer>
    </div>
  );
}

export default App;

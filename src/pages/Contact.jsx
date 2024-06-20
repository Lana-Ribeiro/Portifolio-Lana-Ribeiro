import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Entre em contato</h1>
      <div className="space-y-6">
        <a
          href="https://github.com/Lana-Ribeiro"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 00-2.996 15.472c.465.085.634-.203.634-.454v-1.604c-2.574.56-3.118-1.242-3.118-1.242-.422-1.073-1.031-1.36-1.031-1.36-.843-.576.064-.566.064-.566 1.086.076 1.658 1.112 1.658 1.112.964 1.655 2.525 1.177 3.144.898.097-.695.377-1.177.686-1.446-2.344-.267-4.802-1.172-4.802-5.21 0-1.15.41-2.091 1.083-2.832-.108-.267-.47-1.334.104-2.788 0 0 .88-.28 2.882 1.068a9.95 9.95 0 012.593-.35c.877.004 1.756.12 2.593.35 2.002-1.348 2.88-1.068 2.88-1.068.573 1.454.212 2.52.104 2.788.674.741 1.084 1.682 1.084 2.832 0 4.046-2.458 4.943-4.807 5.203.387.334.732.995.732 2.004v2.972c0 .253.167.542.637.451A8 8 0 0010 2z"/>
          </svg>
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/lana-ribeiro/"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="h-6 w-6 text-blue-700" alt="LinkedIn"/>
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:lana.carolinesribeiro@gmail.com"
          className="flex items-center space-x-5 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
        >
          <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" className="h-6 w-6 text-blue-700" alt="Gmail"/>
          <span>Gmail</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;

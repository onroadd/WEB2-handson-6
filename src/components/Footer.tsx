import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#403D94] text-gray-300 px-8 py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start md:mx-auto md:w-[1000px] w-full">
        
        <div className="flex flex-col space-y-4 md:w-1/3">
          <h2 className="text-xl font-bold text-white">About Us</h2>
          <p className="text-sm leading-6">
            We provide quality resources and tools to help you grow in technology. Join us and be part of our journey.
          </p>
        </div>

        <div className="flex flex-col space-y-3 md:w-1/5 mt-8 md:mt-0">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <a href="https://unai.edu/" target="_blank" rel="noopener noreferrer">UNAI</a>
          <a href="https://fti.unai.edu/" target="_blank" rel="noopener noreferrer">FTI</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
        </div>

        <div className="flex flex-col space-y-3 md:w-1/5 mt-8 md:mt-0">
          <h3 className="font-semibold text-white">Resources</h3>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React JS</a>
          <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer">Axios</a>
        </div>

        <div className="flex flex-col space-y-3 md:w-1/5 mt-8 md:mt-0">
          <h3 className="font-semibold text-white">Tools</h3>
          <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer">Tanstack Query</a>
          <a href="https://reactnavigation.org/" target="_blank" rel="noopener noreferrer">React Navigation</a>
        </div>

      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
        </div>
        <p className="text-xs text-center">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

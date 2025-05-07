import React from 'react';
import { PhoneIcon, MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <PhoneIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <a href="tel:+94775896223" className="text-lg font-medium hover:text-blue-600 transition-colors">
                    0775896223
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MailIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href="mailto:jwaduge819@gmail.com" className="text-lg font-medium hover:text-blue-600 transition-colors">
                    jwaduge819@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-8 mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/janithwaduge" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors">
                <GithubIcon size={24} className="text-slate-700" />
              </a>
              <a href="https://linkedin.com/in/janithwaduge" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors">
                <LinkedinIcon size={24} className="text-slate-700" />
              </a>
              <a href="https://twitter.com/janithwaduge" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors">
                <TwitterIcon size={24} className="text-slate-700" />
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Project Inquiry" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
import { Navigation } from '../components/Navigation';
import { QuestionOfTheDay } from '../components/QuestionOfTheDay';
import { EntryPoints } from '../components/EntryPoints';
import { SarahSideEye } from '../components/SarahSideEye';
import { Coffee } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function HomePage() {
  return (
    <div className="min-h-screen graph-paper-bg relative">
      {/* Warm gradient overlay for 2026 feel */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(224, 218, 231, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(166, 201, 187, 0.12) 0%, transparent 50%)',
        }}
      />

      {/* Navigation Sidebar */}
      <Navigation />

      {/* Main Content Area */}
      <div className="ml-72 p-8 lg:p-12 relative z-0">
        {/* Hero Section */}
        <section className="mb-16 pt-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Headline with typewriter effect */}
            <div className="mb-16 text-center">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="text-6xl font-bold text-[#493751] mb-3"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0 }}
                >S</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.05 }}
                >c</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                >h</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.15 }}
                >o</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                >o</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.25 }}
                >l</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >h</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.35 }}
                >o</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                >u</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.45 }}
                >s</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                >e</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.55 }}
                >B</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.6 }}
                >o</motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.65 }}
                >t</motion.span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-3xl handwritten text-[#493751]"
              >
                AI literacy for people who saw the movie and know how this ends
              </motion.p>
            </div>

            {/* Question of the Day + Sarah Side-Eye */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 mb-16"
            >
              <div className="flex-shrink-0 hidden lg:block">
                <SarahSideEye />
              </div>
              <div className="flex-1 flex justify-center lg:justify-start">
                <QuestionOfTheDay />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="border-t-2 border-[#A7AFC8] relative">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#F8F1F2] px-6 py-2 handwritten text-[#493751] text-2xl">
              Start exploring...
            </div>
          </div>
        </motion.div>

        {/* Entry Points Section */}
        <section className="mb-16">
          <div className="max-w-7xl mx-auto">
            <EntryPoints />
          </div>
        </section>

        {/* Why This Exists Section */}
        <section className="mb-16 bg-white border-t border-b border-[#A7AFC8] py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-12"
            >
              {/* Left Column - 35% */}
              <div className="md:w-[35%] flex flex-col items-center text-center">
                {/* Circle Image Frame */}
                <div className="relative mb-4">
                  <div className="w-48 h-48 rounded-full bg-[#F8F1F2] border-4 border-[#493751] flex items-center justify-center overflow-hidden">
                    <img 
                      src="figma:asset/808b8eb5f5c9aa8ba2e798042e38db961e9b9c80.png"
                      alt="Lexi Roark"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Name */}
                <div className="text-xl font-bold text-[#493751] mb-2">
                  Lexi Roark
                </div>
                
                {/* Title/Descriptor */}
                <div className="handwritten text-lg text-[#3B3B58] italic">
                  Tweak Your Geek
                </div>
              </div>

              {/* Right Column - 65% */}
              <div className="md:w-[65%]">
                {/* Section Label with Arrow */}
                <div className="flex items-center gap-2 mb-4">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="text-[#493751]">
                    <path d="M1 8h20M17 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="handwritten text-[16px] text-[#493751] italic">
                    Why this exists
                  </span>
                </div>
                
                {/* Headline */}
                <h2 className="text-[26px] font-bold text-[#493751] mb-6">
                  You've been building businesses since before "pivot" was a startup term
                </h2>
                
                {/* Body Copy */}
                <div className="text-[15px] text-[#3B3B58] leading-[1.8] space-y-4 mb-8">
                  <p>You remember when computers came with instruction manuals. You learned HTML when it was actually hard. You've watched enough tech hype cycles to know the difference between revolution and repackaging.</p>
                  <p>Now everyone's acting like AI is either going to solve everything or destroy everything, and you're just trying to figure out what's real. You don't need another breathless "AI will change your life!" pitch. You need straight talk from someone who gets that you're running a real business, not a science experiment.</p>
                  <p>SchoolhouseBot is AI literacy for people who've seen this movie before. No venture capital. No hustle culture. Just practical knowledge, a healthy dose of skepticism, and resources built by someone who thinks you're smart enough to handle the truth.</p>
                </div>
                
                {/* CTA */}
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 text-[#B375A0] font-semibold hover:gap-3 transition-all"
                >
                  <span>More about this project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto pt-8 border-t-2 border-[#A7AFC8]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-2 items-start">
              <div className="text-[#3B3B58] text-sm">
                © 2026 SchoolhouseBot
              </div>
              <div className="text-[#3B3B58] text-xs opacity-75">
                SchoolhouseBot is a Tweak Your Geek property
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#A6C9BB] text-[#493751] rounded-lg text-sm font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Coffee className="w-4 h-4" />
                Keep the lights on ☕
              </a>
            </div>

            <div className="text-[#3B3B58] text-sm italic">
              Built with care, not venture capital
            </div>
          </div>

          <div className="flex justify-center gap-6 text-sm mt-6 pt-4 border-t border-[#A7AFC8]">
            <a href="#" className="text-[#3B3B58] hover:text-[#493751] hover:underline">
              About
            </a>
            <a href="#" className="text-[#3B3B58] hover:text-[#493751] hover:underline">
              Contact
            </a>
            <a href="#" className="text-[#3B3B58] hover:text-[#493751] hover:underline">
              Privacy
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
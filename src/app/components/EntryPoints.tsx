import { Compass, Search, Target, AlertTriangle, Book, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const entryPoints = [
  {
    title: 'Explore the Roadmap',
    description: '[COPY]',
    icon: Compass,
    href: '#',
  },
  {
    title: 'Read the Research',
    description: '[COPY]',
    icon: Search,
    href: '#',
  },
  {
    title: 'Take the Assessment',
    description: '[COPY]',
    icon: Target,
    href: '#',
  },
  {
    title: 'The Naughty 9',
    description: '[COPY]',
    icon: AlertTriangle,
    href: '#naughty9',
  },
  {
    title: 'The Glossary',
    description: '[COPY]',
    icon: Book,
    href: '#',
  },
  {
    title: 'The Frameworks',
    description: '[COPY]',
    icon: Layers,
    href: '#',
  },
];

export function EntryPoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {entryPoints.map((entry, index) => {
        const Icon = entry.icon;
        return (
          <motion.a
            key={entry.title}
            href={entry.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.08,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -4,
              boxShadow: '0 8px 24px rgba(73, 55, 81, 0.12)'
            }}
            className="group block bg-white border-[1.5px] border-[#A7AFC8] rounded-[12px] p-6 transition-all"
          >
            <div className="flex flex-col h-full">
              {/* Icon top left */}
              <div className="mb-4">
                <Icon className="w-6 h-6 text-[#A6C9BB]" />
              </div>
              
              {/* Headline */}
              <h3 className="text-[16px] font-bold text-[#493751] mb-2">
                {entry.title}
              </h3>
              
              {/* Description - max 2 lines */}
              <p className="text-[14px] text-[#3B3B58] mb-4 flex-grow line-clamp-2">
                {entry.description}
              </p>
              
              {/* CTA link */}
              <div className="flex items-center gap-1 text-[#B375A0] text-[14px] font-semibold group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
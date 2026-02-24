import { BookOpen, Lightbulb, FlaskConical, Grid3x3, FileText, Wrench, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router';

const navSections = [
  {
    title: 'Start Here',
    items: [
      { label: 'Welcome', href: '/' },
      { label: 'How to Use This Site', href: '/' },
    ],
  },
  {
    title: 'The Naughty 9',
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'The Nine Patterns', href: '/' },
      { label: 'The Shiny Chaser', href: '/pattern/the-shiny-chaser' },
    ],
  },
  {
    title: 'The Research',
    items: [
      { label: 'Overview', href: '/' },
      { label: 'Key Studies', href: '/' },
      { label: 'Citations', href: '/' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { label: 'AI Literacy Model', href: '/' },
      { label: 'Decision Trees', href: '/' },
      { label: 'Implementation Guide', href: '/' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { label: 'Glossary', href: '/' },
      { label: 'FAQ', href: '/' },
      { label: 'Resources', href: '/' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Prompt Templates', href: '/' },
      { label: 'Worksheets', href: '/' },
      { label: 'Checklists', href: '/' },
    ],
  },
  {
    title: 'Take the Assessment',
    items: [
      { label: 'Get Started', href: '/' },
    ],
  },
];

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Start Here': BookOpen,
  'The Naughty 9': Lightbulb,
  'The Research': FlaskConical,
  'Frameworks': Grid3x3,
  'Reference': FileText,
  'Tools': Wrench,
  'Take the Assessment': ClipboardCheck,
};

export function Navigation() {
  return (
    <nav className="w-72 h-screen bg-[#F8F1F2] border-r-2 border-[#A7AFC8] overflow-y-auto fixed left-0 top-0 z-10">
      <div className="p-6">
        {/* Logo/Header */}
        <div className="mb-8 pb-6 border-b-2 border-[#A7AFC8]">
          <Link to="/" className="block">
            <h1 className="text-2xl font-bold text-[#493751] mb-1 hover:text-[#A6C9BB] transition-colors">SchoolhouseBot</h1>
          </Link>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navSections.map((section) => {
            const Icon = sectionIcons[section.title];
            return (
              <div key={section.title}>
                <div className="flex items-center gap-2 mb-2">
                  {Icon && <Icon className="w-4 h-4 text-[#493751]" />}
                  <h3 className="font-semibold text-[#493751] text-sm uppercase tracking-wide">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-1 ml-6">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-[#3B3B58] hover:text-[#493751] hover:underline text-sm block py-1 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-6 border-t border-[#A7AFC8]">
          <p className="text-xs text-[#3B3B58] opacity-60 handwritten">
            Built by a smart person, not a marketing team
          </p>
        </div>
      </div>
    </nav>
  );
}
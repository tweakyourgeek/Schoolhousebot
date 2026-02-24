import { useParams, Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import wantedPosterImage from 'figma:asset/16a57b1969a781377ec4c8b8faeee150c9eae60d.png';

const patterns = [
  { id: 'the-hoarder', name: 'The Hoarder' },
  { id: 'the-perfectionist', name: 'The Perfectionist' },
  { id: 'the-dabbler', name: 'The Dabbler' },
  { id: 'the-comparison-bandit', name: 'The Comparison Bandit' },
  { id: 'the-shiny-chaser', name: 'The Shiny Tool Chaser' },
  { id: 'the-tutorial-junkie', name: 'The Tutorial Junkie' },
  { id: 'the-over-prompter', name: 'The Over-Prompter' },
  { id: 'the-tool-collector', name: 'The Tool Collector' },
  { id: 'the-fantasy-planner', name: 'The Fantasy Planner' },
];

export function PatternPage() {
  const { patternId } = useParams();
  const currentIndex = patterns.findIndex(p => p.id === patternId);
  const currentPattern = patterns[currentIndex];
  const prevPattern = currentIndex > 0 ? patterns[currentIndex - 1] : null;
  const nextPattern = currentIndex < patterns.length - 1 ? patterns[currentIndex + 1] : null;

  // Example pattern data - "The Shiny Tool Chaser"
  const patternData = {
    'the-hoarder': {
      name: 'THE HOARDER',
      crime: 'Saving every AI prompt, template, and output "just in case".',
      evidence: 'Folders full of ChatGPT conversations you\'ll never read again.',
      sentence: 'Delete half. Use what\'s left. (The 50% Rule.)',
      sarahNote: 'Cute. Now delete the other half.',
      aigcNote: 'Digital hoarding with AI outputs creates noise that prevents you from finding actually useful patterns. The best AI users curate ruthlessly—they know that saved content has zero value if you never revisit it.',
    },
    'the-perfectionist': {
      name: 'THE PERFECTIONIST',
      crime: 'Endlessly tweaking prompts to get the "perfect" AI response.',
      evidence: 'Spending 3 hours perfecting a prompt for a 5-minute task.',
      sentence: 'Ship it. Then iterate. (The Done is Better Rule.)',
      sarahNote: 'Honey, it\'s AI. Not brain surgery.',
      aigcNote: 'AI outputs are starting points, not finished products. The perfectionist mindset treats AI like a magic oracle that must deliver flawless results. Real AI literacy means understanding that iteration happens AFTER you take action, not before.',
    },
    'the-dabbler': {
      name: 'THE DABBLER',
      crime: 'Trying AI for everything but committing to nothing.',
      evidence: 'Started 47 AI projects. Finished zero.',
      sentence: 'Pick one use case. Master it. Move on. (The One Thing Rule.)',
      sarahNote: 'Jack of all prompts, master of none.',
      aigcNote: 'AI works best when you deeply understand one application before expanding. The dabbler mistake is assuming breadth equals expertise. It doesn\'t. Pick one workflow, learn it cold, then expand. Depth before breadth.',
    },
    'the-comparison-bandit': {
      name: 'THE COMPARISON BANDIT',
      crime: 'Comparing your AI results to influencer highlights.',
      evidence: 'Convinced everyone else is getting better outputs than you.',
      sentence: 'Focus on your progress, not their highlight reel. (The Blinders Rule.)',
      sarahNote: 'Those screenshots are lies, sweetheart.',
      aigcNote: 'Social media AI content is heavily curated. You\'re seeing the 1% that worked, not the 99% of iterations it took to get there. This pattern wastes energy on anxiety instead of experimentation. Your messy process is normal.',
    },
    'the-shiny-chaser': {
      name: 'THE SHINY CHASER',
      crime: 'Hoarding every new AI tool and feature that launches.',
      evidence: 'Subscriptions to multiple AI tools doing exactly the same thing.',
      sentence: 'Sign up for ONE tool. Master it. Add another. (Rule of One.)',
      sarahNote: 'She\'s clocked this one. Repeatedly.',
      aigcNote: 'This pattern often emerges from FOMO and a misunderstanding of how AI tools actually complement each other. The solution isn\'t more tools—it\'s clearer understanding of what you actually need to accomplish.',
    },
    'the-tutorial-junkie': {
      name: 'THE TUTORIAL JUNKIE',
      crime: 'Watching endless tutorials but never actually using AI.',
      evidence: 'Bookmarked 200+ "How to Use AI" videos. Used AI: twice.',
      sentence: 'Watch one. Try it immediately. Repeat. (The Do It Now Rule.)',
      sarahNote: 'Learning by osmosis doesn\'t work.',
      aigcNote: 'Tutorial consumption creates the illusion of progress without actual skill development. AI literacy requires hands-on practice, not passive watching. The tutorial junkie mistake is treating knowledge as a substitute for experience.',
    },
    'the-over-prompter': {
      name: 'THE OVER-PROMPTER',
      crime: 'Writing novel-length prompts for simple tasks.',
      evidence: 'Your prompts have table of contents.',
      sentence: 'Start simple. Add detail only when needed. (The KISS Rule.)',
      sarahNote: 'It\'s a chatbot, not your therapist.',
      aigcNote: 'Over-prompting stems from mistrust—belief that AI needs exhaustive instruction to perform. In reality, verbose prompts often confuse models. Start minimal, then add constraints based on what the AI actually gets wrong.',
    },
    'the-tool-collector': {
      name: 'THE TOOL COLLECTOR',
      crime: 'Signing up for every new AI beta that launches.',
      evidence: 'Your inbox is 87% AI waitlist confirmations.',
      sentence: 'Cancel everything you haven\'t used in 30 days. (The 30-Day Rule.)',
      sarahNote: 'Access ≠ accomplishment.',
      aigcNote: 'The tool collector confuses access with action. Having 47 AI tools doesn\'t make you productive—it makes you distracted. This pattern is FOMO disguised as preparation. Use or lose.',
    },
    'the-fantasy-planner': {
      name: 'THE FANTASY PLANNER',
      crime: 'Planning elaborate AI workflows you\'ll never build.',
      evidence: 'Notion boards full of "AI automation ideas" with zero execution.',
      sentence: 'Build the smallest version. Use it once. Expand if needed. (The MVP Rule.)',
      sarahNote: 'Planning is procrastination in a nice outfit.',
      aigcNote: 'This pattern mistakes planning for doing. AI workflows should emerge from actual needs, not imagined future states. Start with the smallest automatable task, prove it works, then expand. Fantasy planning is resistance wearing a productivity costume.',
    },
  };

  const data = patternData[patternId as keyof typeof patternData] || patternData['the-shiny-chaser'];

  return (
    <div className="min-h-screen graph-paper-bg relative">
      <Navigation />
      
      <div className="ml-72 p-8 lg:p-12 relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="text-[#3B3B58] hover:text-[#493751] inline-flex items-center gap-2 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Wanted Poster Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#E8DCC8] via-[#D4C5B0] to-[#C9B89A] rounded-lg shadow-2xl p-12 mb-8 transform rotate-[-0.5deg] border-8 border-[#8B7355] relative"
            style={{
              backgroundImage: 'linear-gradient(rgba(139, 115, 85, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 115, 85, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {/* Weathered texture overlay */}
            <div 
              className="absolute inset-0 rounded-lg opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,0,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.08) 0%, transparent 50%)',
              }}
            />

            <div className="relative">
              {/* WANTED Header */}
              <div className="text-center mb-8 border-b-4 border-[#8B7355] pb-6">
                <h1 
                  className="text-7xl font-bold mb-4 tracking-wider"
                  style={{ 
                    fontFamily: 'serif',
                    color: '#3B3B58',
                    textShadow: '2px 2px 0px rgba(139, 115, 85, 0.3)',
                    letterSpacing: '0.05em',
                  }}
                >
                  WANTED
                </h1>
                <h2 className="text-3xl font-bold text-[#493751] tracking-wide" style={{ fontFamily: 'serif' }}>
                  {data.name}
                </h2>
              </div>

              {/* The Crime */}
              <div className="mb-6">
                <h3 
                  className="text-2xl font-bold mb-3 text-[#493751] tracking-wide border-b-2 border-[#8B7355] pb-2"
                  style={{ fontFamily: 'serif' }}
                >
                  THE CRIME:
                </h3>
                <p className="text-lg text-[#3B3B58] leading-relaxed">
                  {data.crime}
                </p>
              </div>

              {/* The Evidence */}
              <div className="mb-6">
                <h3 
                  className="text-2xl font-bold mb-3 text-[#493751] tracking-wide border-b-2 border-[#8B7355] pb-2"
                  style={{ fontFamily: 'serif' }}
                >
                  THE EVIDENCE:
                </h3>
                <p className="text-lg text-[#3B3B58] leading-relaxed">
                  {data.evidence}
                </p>
              </div>

              {/* The Sentence */}
              <div className="mb-8">
                <h3 
                  className="text-2xl font-bold mb-3 text-[#493751] tracking-wide border-b-2 border-[#8B7355] pb-2"
                  style={{ fontFamily: 'serif' }}
                >
                  THE SENTENCE:
                </h3>
                <p className="text-lg text-[#3B3B58] leading-relaxed font-semibold">
                  {data.sentence}
                </p>
              </div>

              {/* Stamp Badge */}
              <div className="absolute top-8 right-8 transform rotate-12">
                <div className="w-32 h-32 rounded-full border-8 border-[#8B2C2C] bg-[#A83232] flex items-center justify-center shadow-xl">
                  <span 
                    className="text-white text-2xl font-bold tracking-widest transform -rotate-12"
                    style={{ fontFamily: 'serif' }}
                  >
                    CAUGHT!
                  </span>
                </div>
              </div>

              {/* Sarah's Note */}
              <div className="mt-6 text-center">
                <p className="handwritten text-2xl text-[#493751] transform rotate-[-2deg] inline-block bg-white px-6 py-3 border-2 border-[#493751] rounded shadow-md">
                  {data.sarahNote}
                </p>
              </div>
            </div>
          </motion.div>

          {/* AIGC Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#E0DAE7] border-l-4 border-[#493751] rounded-lg p-6 mb-12 shadow-lg"
          >
            <h4 className="font-bold text-[#493751] mb-2 text-lg">
              Why This Pattern Matters
            </h4>
            <p className="text-[#3B3B58] leading-relaxed">
              {data.aigcNote}
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t-2 border-[#A7AFC8]">
            <div>
              {prevPattern && (
                <Link
                  to={`/pattern/${prevPattern.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#A6C9BB] text-[#493751] rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <ChevronLeft className="w-5 h-5" />
                  {prevPattern.name}
                </Link>
              )}
            </div>
            <div className="text-center">
              <p className="text-sm text-[#3B3B58] mb-1">
                Pattern {currentIndex + 1} of {patterns.length}
              </p>
              <Link
                to="/#naughty9"
                className="text-[#A6C9BB] hover:text-[#493751] text-sm hover:underline"
              >
                View All Patterns
              </Link>
            </div>
            <div>
              {nextPattern && (
                <Link
                  to={`/pattern/${nextPattern.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#A6C9BB] text-[#493751] rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  {nextPattern.name}
                  <ChevronRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
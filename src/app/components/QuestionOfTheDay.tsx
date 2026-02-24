import { useState } from 'react';
import { Sparkles, CheckCircle, ArrowRight, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function QuestionOfTheDay() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = {
    text: "When an AI confidently gives you wrong information, that's called:",
    options: [
      { id: 'a', text: 'A glitch in the matrix', correct: false },
      { id: 'b', text: 'A hallucination', correct: true },
      { id: 'c', text: 'Fake news', correct: false },
      { id: 'd', text: 'The robot uprising', correct: false },
    ],
    explanation: "AI hallucinations happen when the model generates plausible-sounding but incorrect information.",
    deepLink: '/pattern/the-perfectionist',
  };

  const handleAnswerClick = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswer(optionId);
    setTimeout(() => setShowResult(true), 400);
  };

  const handleReset = () => {
    setShowResult(false);
    setTimeout(() => setSelectedAnswer(null), 300);
  };

  const selectedOption = question.options.find(opt => opt.id === selectedAnswer);

  // Sarah annotation state logic
  const getSarahAnnotation = () => {
    if (!selectedAnswer) {
      return "She's seen it all. She's not impressed.";
    }
    if (selectedOption?.correct) {
      return "Sarah approves ✓";
    }
    return "She's not surprised.";
  };

  return (
    <div className="relative pb-16">
      <div className="relative w-full max-w-2xl">
        <div className="quiz-flip-container">
          <div className={`quiz-card-flipper ${showResult ? 'flipped' : ''}`}>
            {/* Front Face - Question */}
            <div className="quiz-card-face">
              <div 
                className={`bg-white border-3 border-[#A6C9BB] rounded-lg shadow-[0_10px_30px_rgba(73,55,81,0.15)] p-8 transform rotate-[-0.5deg] min-h-[500px] ${
                  !selectedAnswer ? 'quiz-card-pulse' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#A6C9BB] rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#493751]">Question of the Day</h2>
                    <p className="text-sm text-[#3B3B58] opacity-75">Test your AI literacy</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg text-[#3B3B58] leading-relaxed">
                    {question.text}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {question.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    const isCorrect = option.correct;
                    const showAsCorrect = isSelected && isCorrect;

                    return (
                      <motion.button
                        key={option.id}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerClick(option.id)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-150 ease-in-out relative ${
                          isSelected
                            ? 'bg-[#A6C9BB] border-[#A6C9BB] border-2 text-[#493751]'
                            : 'bg-white border-[#A6C9BB] border-[1.5px] text-[#3B3B58]'
                        } cursor-pointer`}
                      >
                        <span className="font-semibold mr-2 text-[#493751]">{option.id.toUpperCase()}.</span>
                        {option.text}
                        
                        {showAsCorrect && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -right-3 -top-3"
                          >
                            <div className="bg-[#493751] rounded-full p-1.5 shadow-lg">
                              <CheckCircle className="w-5 h-5 text-[#A6C9BB]" />
                            </div>
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Back Face - Result */}
            <div className="quiz-card-face quiz-card-back">
              <div className={`border-3 border-[#493751] rounded-lg shadow-[0_10px_30px_rgba(73,55,81,0.2)] p-8 transform rotate-[0.5deg] min-h-[500px] flex flex-col justify-center ${
                selectedOption?.correct 
                  ? 'bg-gradient-to-br from-[#A6C9BB] to-[#8DB3A5]' 
                  : 'bg-gradient-to-br from-[#493751] to-[#3B3B58]'
              }`}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={showResult ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    {selectedOption?.correct ? (
                      <CheckCircle className="w-12 h-12 text-white" />
                    ) : (
                      <X className="w-12 h-12 text-white" />
                    )}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={showResult ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.6 }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {selectedOption?.correct ? "That's right!" : "Not quite..."}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={showResult ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg text-white opacity-90 mb-6"
                  >
                    {question.explanation}
                  </motion.p>
                  {selectedOption?.correct && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={showResult ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.8, duration: 0.2 }}
                      className="text-xl handwritten text-white mb-8"
                    >
                      — {getSarahAnnotation()}
                    </motion.p>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={showResult ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col gap-3"
                  >
                    <Link
                      to={question.deepLink}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#493751] rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Go deeper <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={handleReset}
                      className="text-white opacity-75 hover:opacity-100 text-sm underline"
                    >
                      Try another answer
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sarah's Side-Eye annotation - state-driven */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedAnswer ? 1 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute -bottom-12 left-0 handwritten text-[#493751] text-xl italic"
      >
        {!showResult && !selectedAnswer && getSarahAnnotation()}
        {showResult && !selectedOption?.correct && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            {getSarahAnnotation()}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}

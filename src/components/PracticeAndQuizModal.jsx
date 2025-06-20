import React, { useState } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  X as XIcon,
  RotateCw,
  Award,
} from "lucide-react";

const PracticeAndQuizModal = ({
  mode, // 'practice' or 'quiz'
  isOpen,
  onClose,
  practiceExamples = [],
  quizQuestions = [],
}) => {
  // Shared state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Reset all states when mode changes
  const resetStates = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  // Handle answer selection (quiz mode)
  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === quizQuestions[currentIndex].answer;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
    setShowFeedback(true);
  };

  // Navigate to next item
  const nextItem = () => {
    if (mode === "quiz") {
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizCompleted(true);
      }
    } else {
      setCurrentIndex((prev) => (prev + 1) % practiceExamples.length);
    }
  };

  // Navigate to previous item
  const prevItem = () => {
    if (mode === "quiz" && !quizCompleted) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else {
      setCurrentIndex(
        (prev) => (prev - 1 + practiceExamples.length) % practiceExamples.length
      );
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  // Reset quiz
  const resetQuiz = () => {
    resetStates();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-2xl border border-border max-w-md w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-foreground">
              {mode === "practice" ? "Latihan Praktik" : "Kuis Aksara Batak"}
            </h3>
            <button
              onClick={onClose}
              className="text-foreground/70 hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content based on mode */}
          {mode === "practice" ? (
            <>
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-2">
                  {practiceExamples[currentIndex].question}
                </h4>
                <div className="text-4xl font-bold text-primary my-3 text-center">
                  {practiceExamples[currentIndex].answer}
                </div>
                <p className="text-foreground/80 text-sm">
                  {practiceExamples[currentIndex].explanation}
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevItem}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-foreground/80 text-sm self-center">
                  {currentIndex + 1}/{practiceExamples.length}
                </div>
                <button
                  onClick={nextItem}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            <>
              {!quizCompleted ? (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-lg font-medium text-foreground">
                        {quizQuestions[currentIndex].question}
                      </p>
                      <div className="text-sm text-foreground/80">
                        Soal {currentIndex + 1}/{quizQuestions.length}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {quizQuestions[currentIndex].options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswerSelect(option)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            selectedAnswer === option
                              ? option === quizQuestions[currentIndex].answer &&
                                showFeedback
                                ? "border-green-500 bg-green-50"
                                : option !==
                                    quizQuestions[currentIndex].answer &&
                                  showFeedback
                                ? "border-red-500 bg-red-50"
                                : "border-primary bg-primary/10"
                              : "border-border bg-background hover:bg-primary/5"
                          }`}
                          disabled={showFeedback}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {showFeedback && (
                      <div
                        className={`mt-4 p-3 rounded-lg ${
                          selectedAnswer === quizQuestions[currentIndex].answer
                            ? "bg-green-50 text-green-800"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        <div className="flex items-start">
                          {selectedAnswer ===
                          quizQuestions[currentIndex].answer ? (
                            <Check className="w-5 h-5 mt-0.5 mr-2 text-green-500" />
                          ) : (
                            <XIcon className="w-5 h-5 mt-0.5 mr-2 text-red-500" />
                          )}
                          <div>
                            <p className="font-medium">
                              {selectedAnswer ===
                              quizQuestions[currentIndex].answer
                                ? "Jawaban Anda benar!"
                                : `Jawaban benar: ${quizQuestions[currentIndex].answer}`}
                            </p>
                            <p className="text-sm mt-1">
                              {quizQuestions[currentIndex].explanation}
                            </p>
                            <button
                              onClick={nextItem}
                              className="mt-2 px-3 py-1 bg-foreground text-background rounded text-sm hover:bg-foreground/90 transition-colors"
                            >
                              {currentIndex < quizQuestions.length - 1
                                ? "Lanjut"
                                : "Selesai"}
                              <ChevronRight className="w-4 h-4 ml-1 inline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Kuis Selesai!
                  </h3>
                  <p className="text-lg text-foreground mb-4">
                    Skor Anda: {quizScore} dari {quizQuestions.length}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div
                      className="bg-gradient-to-r from-primary to-green-500 h-2.5 rounded-full"
                      style={{
                        width: `${(quizScore / quizQuestions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Tutup
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="px-4 py-2 bg-card text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center"
                    >
                      <RotateCw className="w-5 h-5 mr-1" />
                      Ulangi Kuis
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeAndQuizModal;

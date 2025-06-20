import React, { useState, useRef } from "react";
import {
  Edit3,
  RotateCw,
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const LatihanMenulis = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#3b82f6"); // Primary color

  const exercises = [
    {
      title: "Level Dasar: Huruf Tunggal",
      difficulty: "★☆☆",
      exercises: [
        {
          prompt: "Tulis aksara 'ba' (ᯅ)",
          answer: "ᯅ",
          tips: "Dimulai dari garis berat di bagian bawah",
        },
      ],
    },
    {
      title: "Level Menengah: Gabungan Huruf",
      difficulty: "★★☆",
      exercises: [
        {
          prompt: "Tulis 'bang' (ᯅᯰ)",
          answer: "ᯅᯰ",
          tips: "Tambahkan paninggil (ᯰ) di atas",
        },
      ],
    },
    {
      title: "Level Mahir: Kalimat Lengkap",
      difficulty: "★★★",
      exercises: [
        {
          prompt: "Tulis 'horas' (ᯂᯬᯒᯘ᯲)",
          answer: "ᯂᯬᯒᯘ᯲",
          tips: "Gabungkan dengan bindu penutup",
        },
      ],
    },
  ];

  // Setup canvas drawing
  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = strokeColor;
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const checkAnswer = () => {
    const correct =
      userInput === exercises[currentExercise].exercises[0].answer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const nextExercise = () => {
    setCurrentExercise((prev) => (prev + 1) % exercises.length);
    setShowFeedback(false);
    clearCanvas();
  };

  const prevExercise = () => {
    setCurrentExercise(
      (prev) => (prev - 1 + exercises.length) % exercises.length
    );
    setShowFeedback(false);
    clearCanvas();
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-background min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold ">
          <Edit3 className="inline mr-2" />
          Latihan <span className="text-primary">Menulis</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Praktik menulis profesional dengan sistem evaluasi mandiri
        </p>
      </div>

      {/* Exercise area */}
      <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-2">
                {exercises[currentExercise].difficulty}
              </span>
              <h2 className="text-2xl font-bold text-foreground">
                {exercises[currentExercise].title}
              </h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevExercise}
                className="p-2 rounded-full bg-background shadow hover:bg-primary/10 text-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextExercise}
                className="p-2 rounded-full bg-background shadow hover:bg-primary/10 text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Instruction panel */}
          <div className="space-y-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {exercises[currentExercise].exercises[0].prompt}
              </h3>
              <p className="text-muted-foreground">
                Tips: {exercises[currentExercise].exercises[0].tips}
              </p>
            </div>

            {/* Reference example */}
            <div className="p-4 bg-background border border-border rounded-lg">
              <h4 className="font-medium text-foreground mb-3">
                Bentuk Standar:
              </h4>
              <div className="text-7xl text-center py-8 font-serif bg-primary/5 rounded">
                {exercises[currentExercise].exercises[0].answer}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium">Teknik Penulisan:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Arah guratan yang benar</li>
                  <li>Proporsi yang tepat</li>
                  <li>Penempatan diakritik</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practice area */}
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-foreground">Area Praktik:</h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setStrokeColor("#3b82f6")}
                    className="w-5 h-5 rounded-full bg-primary border-2 border-primary"
                  ></button>
                  <button
                    onClick={() => setStrokeColor("#ef4444")}
                    className="w-5 h-5 rounded-full bg-red-500 border-2 border-red-500"
                  ></button>
                  <button
                    onClick={clearCanvas}
                    className="flex items-center text-sm text-foreground hover:text-primary ml-2"
                  >
                    <RotateCw className="w-4 h-4 mr-1" /> Reset
                  </button>
                </div>
              </div>

              {/* Drawing canvas */}
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width="100%"
                  height="220"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    startDrawing(e.touches[0]);
                  }}
                  onTouchMove={(e) => {
                    e.preventDefault();
                    draw(e.touches[0]);
                  }}
                  onTouchEnd={stopDrawing}
                  className="border-2 border-muted-foreground/20 rounded bg-background w-full h-48 touch-none"
                ></canvas>
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <div className="h-full w-full grid grid-cols-4 grid-rows-4">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="border border-muted-foreground/10"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text input */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-foreground mb-1">
                Input Teks (Opsional):
              </label>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                placeholder="Ketik aksara yang benar..."
              />
            </div>

            {/* Action buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={checkAnswer}
                className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Periksa Jawaban
              </button>
              <button
                onClick={clearCanvas}
                className="px-5 py-2 bg-card text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Mulai Lagi
              </button>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div
                className={`mt-4 p-3 rounded-lg ${
                  isCorrect
                    ? "bg-green-100 text-green-900"
                    : "bg-red-100 text-red-900"
                }`}
              >
                <div className="flex items-center">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 mr-2 text-red-600" />
                  )}
                  <p className="font-medium">
                    {isCorrect
                      ? "Tepak benar! Lanjut ke latihan berikutnya."
                      : `Belum tepat. Bentuk yang benar: ${exercises[currentExercise].exercises[0].answer}`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Exercise navigation */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setCurrentExercise(index)}
            className={`p-4 rounded-lg transition-all text-left ${
              currentExercise === index
                ? "bg-primary/20 border-2 border-primary"
                : "bg-card border border-border hover:bg-muted"
            }`}
          >
            <h3 className="font-medium text-foreground">{exercise.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Level: {exercise.difficulty}
            </p>
          </button>
        ))}
      </div>

      {/* Writing guide */}
      <div className="mt-8 bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          Panduan Menulis Profesional
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-2">
              ✍️ Teknik Dasar
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Pegang alat tulis dengan sudut 45°</li>
              <li>Gunakan tekanan yang konsisten</li>
              <li>Mulai dari garis dasar</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">
              🔍 Evaluasi Mandiri
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Bandingkan dengan contoh standar</li>
              <li>Perhatikan proporsi aksara</li>
              <li>Verifikasi posisi diakritik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatihanMenulis;

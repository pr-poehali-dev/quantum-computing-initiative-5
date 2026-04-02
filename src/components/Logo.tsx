export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 210 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Shield icon */}
      <path
        d="M18 4L6 8V18C6 24.5 11.2 30.5 18 32C24.8 30.5 30 24.5 30 18V8L18 4Z"
        fill="url(#shieldGrad)"
      />
      {/* Lock icon inside shield */}
      <rect x="13" y="19" width="10" height="7" rx="1.5" fill="white" opacity="0.95"/>
      <path d="M15 19V16.5C15 14.6 16.3 13 18 13C19.7 13 21 14.6 21 16.5V19" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.95"/>
      <circle cx="18" cy="22.5" r="1.2" fill="#3B82F6"/>
      {/* OGRIZOK VPN text */}
      <text x="40" y="27" fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="700" fill="white" letterSpacing="0.5">OGRIZOK</text>
      <text x="131" y="27" fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="300" fill="#60A5FA" letterSpacing="2">VPN</text>
      <defs>
        <linearGradient id="shieldGrad" x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#1D4ED8"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

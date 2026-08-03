const RunningDog = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <div className="absolute bottom-[4%] left-0 animate-dog-run">
        <svg viewBox="0 0 120 70" className="w-20 h-auto overflow-visible animate-dog-bob">
          {/* Tail */}
          <path
            d="M 22 34 Q 8 24 14 40"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-dog-tail"
            style={{ transformOrigin: '22px 34px', transformBox: 'fill-box' }}
          />

          {/* Body */}
          <ellipse cx="55" cy="40" rx="30" ry="15" fill="white" stroke="black" strokeWidth="2.5" />

          {/* Head */}
          <circle cx="93" cy="27" r="13" fill="white" stroke="black" strokeWidth="2.5" />

          {/* Snout */}
          <path d="M 103 27 q 10 -1 11 4 q -1 5 -11 3 Z" fill="white" stroke="black" strokeWidth="2" />

          {/* Ear */}
          <path d="M 88 20 q -14 4 -8 22 q 10 2 14 -10 Z" fill="black" />

          {/* Eye */}
          <circle cx="97" cy="23" r="1.6" fill="black" />

          {/* Collar */}
          <path d="M 80 36 q 6 4 12 0" stroke="#E25C5C" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Legs - stride frame A */}
          <g className="dog-legs-a">
            <line x1="80" y1="50" x2="70" y2="68" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="36" y1="50" x2="46" y2="68" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Legs - stride frame B */}
          <g className="dog-legs-b">
            <line x1="80" y1="50" x2="90" y2="68" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="36" y1="50" x2="26" y2="68" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RunningDog;

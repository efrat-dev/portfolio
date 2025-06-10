import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={800}
    height={300}
    viewBox="0 0 800 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "#0a0a0f",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="25%"
          style={{
            stopColor: "#1a1a2e",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#16213e",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="75%"
          style={{
            stopColor: "#1e293b",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#0f172a",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <radialGradient id="spotlightGradient" cx="30%" cy="40%" r="50%">
        <stop
          offset="0%"
          style={{
            stopColor: "#3b82f6",
            stopOpacity: 0.2,
          }}
        />
        <stop
          offset="40%"
          style={{
            stopColor: "#1e40af",
            stopOpacity: 0.1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#1e293b",
            stopOpacity: 0.05,
          }}
        />
      </radialGradient>
      <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#67E8F9",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#0EA5E9",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#1E3A8A",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#3b82f6",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="25%"
          style={{
            stopColor: "#1d4ed8",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#1e40af",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="75%"
          style={{
            stopColor: "#1e3a8a",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#312e81",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "#60a5fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="33%"
          style={{
            stopColor: "#3b82f6",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="66%"
          style={{
            stopColor: "#2563eb",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#1d4ed8",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#f8fafc",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#e2e8f0",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#cbd5e1",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#10b981",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#059669",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#047857",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <filter id="premiumShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow
          dx={0}
          dy={4}
          stdDeviation={8}
          floodColor="#3b82f6"
          floodOpacity={0.15}
        />
        <feDropShadow
          dx={0}
          dy={2}
          stdDeviation={4}
          floodColor="#000000"
          floodOpacity={0.3}
        />
      </filter>
      <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation={2} result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation={3} result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation={1.5} result="coloredBlur" />
        <feGaussianBlur stdDeviation={4} result="bigBlur" />
        <feMerge>
          <feMergeNode in="bigBlur" />
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <pattern
        id="techPattern"
        x={0}
        y={0}
        width={40}
        height={40}
        patternUnits="userSpaceOnUse"
      >
        <rect width={40} height={40} fill="none" />
        <circle cx={20} cy={20} r={1} fill="#3b82f6" opacity={0.2}>
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={5} cy={5} r={0.5} fill="#10b981" opacity={0.15}>
          <animate
            attributeName="opacity"
            values="0.05;0.25;0.05"
            dur="3s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        <circle cx={35} cy={35} r={0.8} fill="#64748b" opacity={0.2}>
          <animate
            attributeName="opacity"
            values="0.1;0.3;0.1"
            dur="3.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
      </pattern>
    </defs>
    <style>
      {
        "\n    .fade-in {\n      opacity: 0;\n      animation: fadeIn 1.5s ease forwards;\n    }\n\n    .slide-in-left {\n      opacity: 0;\n      transform: translateX(-50px);\n      animation: slideInLeft 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n    }\n\n    .slide-in-right {\n      opacity: 0;\n      transform: translateX(50px);\n      animation: slideInRight 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n    }\n\n    .slide-in-up {\n      opacity: 0;\n      transform: translateY(30px);\n      animation: slideInUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n    }\n\n    .pulse {\n      animation: pulse 2s ease-in-out infinite;\n    }\n\n    .pulse-fast {\n      animation: pulse 1s ease-in-out infinite;\n    }\n\n    .float {\n      animation: float 6s ease-in-out infinite;\n    }\n\n    .float-reverse {\n      animation: floatReverse 5s ease-in-out infinite;\n    }\n\n    .rotate {\n      animation: rotate 8s linear infinite;\n    }\n\n    .rotate-reverse {\n      animation: rotateReverse 10s linear infinite;\n    }\n\n    .scale-pulse {\n      animation: scalePulse 3s ease-in-out infinite;\n    }\n\n    .shimmer {\n      animation: shimmer 2s linear infinite;\n    }\n\n    .typing {\n      animation: typing 4s steps(20) infinite;\n    }\n\n    .delay-1 {\n      animation-delay: 0.2s;\n    }\n\n    .delay-2 {\n      animation-delay: 0.4s;\n    }\n\n    .delay-3 {\n      animation-delay: 0.6s;\n    }\n\n    .delay-4 {\n      animation-delay: 0.8s;\n    }\n\n    .delay-5 {\n      animation-delay: 1.0s;\n    }\n\n    .delay-6 {\n      animation-delay: 1.2s;\n    }\n\n    .delay-7 {\n      animation-delay: 1.4s;\n    }\n\n    .delay-8 {\n      animation-delay: 1.6s;\n    }\n\n    @keyframes fadeIn {\n      to {\n        opacity: 1;\n      }\n    }\n\n    @keyframes slideInLeft {\n      to {\n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n\n    @keyframes slideInRight {\n      to {\n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n\n    @keyframes slideInUp {\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes pulse {\n\n      0%,\n      100% {\n        opacity: 0.5;\n      }\n\n      50% {\n        opacity: 1;\n      }\n    }\n\n    @keyframes float {\n\n      0%,\n      100% {\n        transform: translateY(0px) rotate(0deg);\n      }\n\n      50% {\n        transform: translateY(-10px) rotate(3deg);\n      }\n    }\n\n    @keyframes floatReverse {\n\n      0%,\n      100% {\n        transform: translateY(0px) rotate(0deg);\n      }\n\n      50% {\n        transform: translateY(8px) rotate(-2deg);\n      }\n    }\n\n    @keyframes rotate {\n      from {\n        transform: rotate(0deg);\n      }\n\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes rotateReverse {\n      from {\n        transform: rotate(360deg);\n      }\n\n      to {\n        transform: rotate(0deg);\n      }\n    }\n\n    @keyframes scalePulse {\n\n      0%,\n      100% {\n        transform: scale(1);\n      }\n\n      50% {\n        transform: scale(1.1);\n      }\n    }\n\n    @keyframes shimmer {\n      0% {\n        opacity: 0.3;\n      }\n\n      50% {\n        opacity: 0.8;\n      }\n\n      100% {\n        opacity: 0.3;\n      }\n    }\n\n    @keyframes typing {\n\n      0%,\n      50% {\n        opacity: 1;\n      }\n\n      51%,\n      100% {\n        opacity: 0;\n      }\n    }\n\n    .main-name {\n      font-size: 42px;\n      font-weight: 800;\n      font-family: 'SF Pro Display', 'Inter', 'Segoe UI', sans-serif;\n      letter-spacing: 2px;\n    }\n\n    .subtitle {\n      font-size: 20px;\n      font-weight: 600;\n      font-family: 'SF Pro Display', 'Inter', 'Segoe UI', sans-serif;\n      letter-spacing: 1px;\n    }\n\n    .description {\n      font-size: 16px;\n      font-weight: 400;\n      font-family: 'SF Pro Text', 'Inter', 'Segoe UI', sans-serif;\n      letter-spacing: 0.5px;\n    }\n\n    .link-text {\n      font-size: 14px;\n      font-weight: 600;\n      font-family: 'SF Pro Text', 'Inter', 'Segoe UI', sans-serif;\n      letter-spacing: 0.3px;\n    }\n\n    .code-text {\n      font-size: 18px;\n      font-weight: 500;\n      font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;\n      letter-spacing: 0.5px;\n    }\n\n    .link-hover:hover {\n      opacity: 0.8;\n      transform: translateY(-2px) scale(1.05);\n      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    }\n\n    .glow-effect {\n      filter: drop-shadow(0 0 10px currentColor);\n    }\n  "
      }
    </style>
    <rect width={800} height={300} fill="url(#bgGradient)" />
    <rect width={800} height={300} fill="url(#spotlightGradient)" />
    <rect width={800} height={300} fill="url(#techPattern)" opacity={0.1} />
    <g opacity={0.4}>
      <g className="float delay-1">
        <polygon
          points="150,40 160,35 170,40 165,50"
          fill="#00f5ff"
          opacity={0.3}
        />
      </g>
      <g className="float-reverse delay-2">
        <circle
          cx={650}
          cy={70}
          r={8}
          fill="none"
          stroke="#feca57"
          strokeWidth={2}
          opacity={0.4}
        />
      </g>
      <g className="float delay-3">
        <rect
          x={100}
          y={220}
          width={12}
          height={12}
          fill="#ff6b6b"
          opacity={0.3}
          transform="rotate(45 106 226)"
        />
      </g>
      <g className="float-reverse delay-4">
        <path
          d="M 700 200 L 710 205 L 700 210 L 690 205 Z"
          fill="#6c5ce7"
          opacity={0.4}
        />
      </g>
      <circle
        cx={200}
        cy={50}
        r={2}
        fill="#00f5ff"
        className="pulse delay-1"
        opacity={0.6}
      />
      <circle
        cx={600}
        cy={250}
        r={1.5}
        fill="#feca57"
        className="pulse delay-3"
        opacity={0.5}
      />
      <circle
        cx={750}
        cy={120}
        r={2.5}
        fill="#ff6b6b"
        className="pulse delay-2"
        opacity={0.7}
      />
      <circle
        cx={50}
        cy={180}
        r={1}
        fill="#6c5ce7"
        className="pulse delay-4"
        opacity={0.4}
      />
      <circle
        cx={400}
        cy={280}
        r={1.8}
        fill="#48dbfb"
        className="pulse delay-5"
        opacity={0.6}
      />
    </g>
    <g
      className="fade-in delay-1"
      transform="translate(20, 30) scale(1.8)"
      filter="url(#iconGlow)"
    >
      <g transform="translate(50, 60)">
        <path
          d="M -25 -18 Q -30 -30 -18 -35 Q 0 -40 18 -35 Q 30 -30 25 -18 Q 32 -8 28 8 Q 25 20 12 24 Q 0 26 -12 24 Q -25 20 -28 8 Q -32 -8 -25 -18 Z"
          fill="none"
          stroke="url(#iconGradient)"
          strokeWidth={3}
          opacity={0.9}
          className="pulse delay-1"
        />
        <g className="scale-pulse delay-2">
          <circle
            cx={-12}
            cy={-12}
            r={3}
            fill="#00f5ff"
            opacity={0.9}
            className="pulse delay-1"
          />
          <circle
            cx={12}
            cy={-12}
            r={3}
            fill="#feca57"
            opacity={0.9}
            className="pulse delay-3"
          />
          <circle
            cx={0}
            cy={0}
            r={4}
            fill="#ff6b6b"
            opacity={1}
            className="pulse delay-2"
          />
          <circle
            cx={-15}
            cy={12}
            r={2.5}
            fill="#6c5ce7"
            opacity={0.8}
            className="pulse delay-4"
          />
          <circle
            cx={15}
            cy={12}
            r={2.5}
            fill="#48dbfb"
            opacity={0.8}
            className="pulse delay-5"
          />
          <circle
            cx={-8}
            cy={6}
            r={2}
            fill="#00f5ff"
            opacity={0.7}
            className="pulse delay-6"
          />
          <circle
            cx={8}
            cy={6}
            r={2}
            fill="#feca57"
            opacity={0.7}
            className="pulse delay-1"
          />
        </g>
        <g className="shimmer delay-1">
          <path
            d="M -12 -12 L 0 0 L 12 -12"
            stroke="#00f5ff"
            strokeWidth={2}
            opacity={0.8}
          />
          <path
            d="M 0 0 L -15 12"
            stroke="#feca57"
            strokeWidth={2}
            opacity={0.7}
          />
          <path
            d="M 0 0 L 15 12"
            stroke="#ff6b6b"
            strokeWidth={2}
            opacity={0.8}
          />
          <path
            d="M -12 -12 L -8 6"
            stroke="#6c5ce7"
            strokeWidth={1.5}
            opacity={0.6}
          />
          <path
            d="M 12 -12 L 8 6"
            stroke="#48dbfb"
            strokeWidth={1.5}
            opacity={0.6}
          />
          <path
            d="M -8 6 L 8 6"
            stroke="#00f5ff"
            strokeWidth={1.5}
            opacity={0.5}
          />
        </g>
        <g className="rotate delay-2" transform-origin="0 0">
          <circle
            cx={0}
            cy={0}
            r={20}
            fill="none"
            stroke="#00f5ff"
            strokeWidth={1}
            opacity={0.3}
          />
          <circle
            cx={0}
            cy={0}
            r={25}
            fill="none"
            stroke="#feca57"
            strokeWidth={0.8}
            opacity={0.2}
          />
          <circle
            cx={20}
            cy={0}
            r={1.5}
            fill="#00f5ff"
            opacity={0.9}
            className="pulse delay-1"
          />
          <circle
            cx={-20}
            cy={0}
            r={1.2}
            fill="#feca57"
            opacity={0.8}
            className="pulse delay-3"
          />
          <circle
            cx={0}
            cy={25}
            r={1}
            fill="#ff6b6b"
            opacity={0.7}
            className="pulse delay-2"
          />
          <circle
            cx={0}
            cy={-25}
            r={1.3}
            fill="#6c5ce7"
            opacity={0.8}
            className="pulse delay-4"
          />
        </g>
      </g>
      <g transform="translate(0, 30)">
        <g className="float delay-1">
          <g transform="translate(15, 40)">
            <rect
              x={0}
              y={0}
              width={20}
              height={20}
              fill="#00f5ff"
              opacity={0.7}
              rx={2}
            />
            <path
              d="M 0 0 L 5 -5 L 25 -5 L 20 0 Z"
              fill="#feca57"
              opacity={0.8}
            />
            <path
              d="M 20 0 L 25 -5 L 25 15 L 20 20 Z"
              fill="#ff6b6b"
              opacity={0.6}
            />
            <g className="pulse delay-2">
              <circle cx={5} cy={5} r={1.5} fill="#ffffff" opacity={0.9} />
              <circle cx={15} cy={8} r={1.2} fill="#ffffff" opacity={0.8} />
              <circle cx={8} cy={15} r={1.8} fill="#ffffff" opacity={0.9} />
              <circle cx={15} cy={15} r={1} fill="#ffffff" opacity={0.7} />
            </g>
            <path
              d="M 5 5 L 15 8 L 8 15 L 15 15"
              stroke="#ffffff"
              strokeWidth={1}
              opacity={0.6}
              fill="none"
            />
          </g>
          <g transform="translate(10, 80)">
            <g className="shimmer delay-3">
              <circle cx={0} cy={0} r={2} fill="#00f5ff" opacity={0.9} />
              <circle cx={0} cy={8} r={2} fill="#00f5ff" opacity={0.9} />
              <circle cx={0} cy={16} r={2} fill="#00f5ff" opacity={0.9} />
              <circle cx={15} cy={2} r={2.5} fill="#feca57" opacity={0.9} />
              <circle cx={15} cy={10} r={2.5} fill="#feca57" opacity={0.9} />
              <circle cx={15} cy={18} r={2.5} fill="#feca57" opacity={0.9} />
              <circle cx={30} cy={8} r={3} fill="#ff6b6b" opacity={0.9} />
              <g stroke="#ffffff" strokeWidth={1} opacity={0.6} fill="none">
                <path d="M 2 0 L 13 2" />
                <path d="M 2 0 L 13 10" />
                <path d="M 2 0 L 13 18" />
                <path d="M 2 8 L 13 2" />
                <path d="M 2 8 L 13 10" />
                <path d="M 2 8 L 13 18" />
                <path d="M 2 16 L 13 2" />
                <path d="M 2 16 L 13 10" />
                <path d="M 2 16 L 13 18" />
                <path d="M 17 2 L 27 8" />
                <path d="M 17 10 L 27 8" />
                <path d="M 17 18 L 27 8" />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g transform="translate(95, 30)">
        <g className="slide-in-up delay-1">
          <g transform="translate(0, 40)">
            <rect
              x={0}
              y={0}
              width={35}
              height={10}
              rx={5}
              fill="url(#accentGradient)"
              opacity={0.8}
              className="subtle-glow"
            />
            <text
              x={17.5}
              y={7}
              textAnchor="middle"
              style={{
                fontSize: 6,
                fontWeight: 600,
              }}
              fill="white"
            >
              {"FRONTEND"}
            </text>
            <g className="pulse delay-1">
              <rect
                x={5}
                y={15}
                width={8}
                height={3}
                rx={1}
                fill="#3b82f6"
                opacity={0.6}
              />
              <rect
                x={15}
                y={15}
                width={5}
                height={3}
                rx={1}
                fill="#10b981"
                opacity={0.6}
              />
              <rect
                x={22}
                y={15}
                width={8}
                height={3}
                rx={1}
                fill="#60a5fa"
                opacity={0.6}
              />
            </g>
          </g>
          <g transform="translate(3, 70)">
            <rect
              x={0}
              y={0}
              width={29}
              height={8}
              rx={4}
              fill="url(#techGradient)"
              opacity={0.7}
              className="subtle-glow"
            />
            <text
              x={14.5}
              y={6}
              textAnchor="middle"
              style={{
                fontSize: 6,
                fontWeight: 600,
              }}
              fill="white"
            >
              {"API GATEWAY"}
            </text>
            <g className="shimmer delay-2">
              <circle cx={7} cy={12} r={1.2} fill="#3b82f6" opacity={0.7} />
              <circle cx={14.5} cy={12} r={1.2} fill="#10b981" opacity={0.7} />
              <circle cx={22} cy={12} r={1.2} fill="#60a5fa" opacity={0.7} />
            </g>
          </g>
          <g transform="translate(8, 95)">
            <rect
              x={0}
              y={0}
              width={19}
              height={7}
              rx={3}
              fill="url(#iconGradient)"
              opacity={0.6}
              className="subtle-glow"
            />
            <text
              x={9.5}
              y={5}
              textAnchor="middle"
              style={{
                fontSize: 5,
                fontWeight: 600,
              }}
              fill="white"
            >
              {"DATABASE"}
            </text>
            <g className="pulse delay-3">
              <rect
                x={3}
                y={10}
                width={4}
                height={2}
                fill="#3b82f6"
                opacity={0.5}
              />
              <rect
                x={8}
                y={10}
                width={3}
                height={2}
                fill="#10b981"
                opacity={0.5}
              />
              <rect
                x={12}
                y={10}
                width={4}
                height={2}
                fill="#60a5fa"
                opacity={0.5}
              />
            </g>
          </g>
          <g className="shimmer delay-1">
            <path
              d="M 17.5 50 L 17.5 70"
              stroke="#3b82f6"
              strokeWidth={2.5}
              opacity={0.7}
            />
            <path
              d="M 17.5 78 L 17.5 95"
              stroke="#10b981"
              strokeWidth={2.5}
              opacity={0.7}
            />
            <circle
              cx={17.5}
              cy={60}
              r={1.5}
              fill="#3b82f6"
              opacity={0.8}
              className="pulse delay-1"
            >
              <animateMotion dur="2.5s" repeatCount="indefinite">
                <path d="M 0 -10 L 0 10" />
              </animateMotion>
            </circle>
            <circle
              cx={17.5}
              cy={87}
              r={1.5}
              fill="#10b981"
              opacity={0.8}
              className="pulse delay-2"
            >
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s">
                <path d="M 0 -9 L 0 9" />
              </animateMotion>
            </circle>
          </g>
        </g>
        <g transform="translate(10, 170)" className="float delay-2">
          <path
            d="M 8 12 Q 4 8 8 4 Q 12 0 18 4 Q 24 0 30 4 Q 34 8 30 12 Q 36 16 30 20 Q 24 24 18 20 Q 12 24 8 20 Q 2 16 8 12 Z"
            fill="url(#iconGradient)"
            opacity={0.8}
            className="glow-effect"
          />
          <circle
            cx={12}
            cy={11}
            r={1.5}
            fill="#ffffff"
            opacity={0.9}
            className="pulse delay-1"
          />
          <circle
            cx={18}
            cy={9}
            r={1.5}
            fill="#ffffff"
            opacity={0.9}
            className="pulse delay-3"
          />
          <circle
            cx={24}
            cy={11}
            r={1.5}
            fill="#ffffff"
            opacity={0.9}
            className="pulse delay-5"
          />
          <g className="shimmer delay-2">
            <path
              d="M 18 20 L 18 16"
              stroke="#00f5ff"
              strokeWidth={2}
              opacity={0.8}
            />
            <polygon points="17,17 18,16 19,17" fill="#00f5ff" opacity={0.8} />
            <text
              x={18}
              y={28}
              textAnchor="middle"
              style={{
                fontSize: 4,
                fontWeight: "bold",
              }}
              fill="#00f5ff"
            >
              {"LIVE"}
            </text>
          </g>
        </g>
      </g>
      <g transform="translate(65, 125)">
        <g className="rotate-reverse delay-2" transform-origin="0 0">
          <path
            d="M -15 0 Q -15 -10 -6 -10 Q 6 -10 6 0 Q 6 10 15 10 Q 24 10 24 0 Q 24 -10 15 -10 Q 6 -10 6 0 Q 6 10 -6 10 Q -15 10 -15 0 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth={2}
            opacity={0.6}
          />
        </g>
        <circle
          cx={0}
          cy={0}
          r={2.5}
          fill="#00f5ff"
          opacity={0.9}
          className="pulse delay-1"
        >
          <animateMotion dur="6s" repeatCount="indefinite">
            <path d="M -20 0 Q -20 -15 -8 -15 Q 8 -15 8 0 Q 8 15 20 15 Q 32 15 32 0 Q 32 -15 20 -15 Q 8 -15 8 0 Q 8 15 -8 15 Q -20 15 -20 0 Z" />
          </animateMotion>
        </circle>
        <circle
          cx={0}
          cy={0}
          r={2}
          fill="#feca57"
          opacity={0.8}
          className="pulse delay-3"
        >
          <animateMotion dur="6s" repeatCount="indefinite" begin="2s">
            <path d="M -20 0 Q -20 -15 -8 -15 Q 8 -15 8 0 Q 8 15 20 15 Q 32 15 32 0 Q 32 -15 20 -15 Q 8 -15 8 0 Q 8 15 -8 15 Q -20 15 -20 0 Z" />
          </animateMotion>
        </circle>
        <circle
          cx={0}
          cy={0}
          r={1.8}
          fill="#ff6b6b"
          opacity={0.9}
          className="pulse delay-5"
        >
          <animateMotion dur="6s" repeatCount="indefinite" begin="4s">
            <path d="M -20 0 Q -20 -15 -8 -15 Q 8 -15 8 0 Q 8 15 20 15 Q 32 15 32 0 Q 32 -15 20 -15 Q 8 -15 8 0 Q 8 15 -8 15 Q -20 15 -20 0 Z" />
          </animateMotion>
        </circle>
        <circle
          cx={0}
          cy={0}
          r={6}
          fill="url(#iconGradient)"
          opacity={0.9}
          className="scale-pulse delay-2"
          filter="url(#neonGlow)"
        />
        <text
          x={0}
          y={2}
          textAnchor="middle"
          style={{
            fontSize: 8,
            fontWeight: "bold",
          }}
          fill="white"
        >
          {"AI"}
        </text>
        <circle
          cx={0}
          cy={0}
          r={10}
          fill="none"
          stroke="#00f5ff"
          strokeWidth={1}
          opacity={0.4}
          className="pulse delay-1"
        />
        <circle
          cx={0}
          cy={0}
          r={15}
          fill="none"
          stroke="#feca57"
          strokeWidth={0.8}
          opacity={0.3}
          className="pulse delay-3"
        />
        <circle
          cx={0}
          cy={0}
          r={20}
          fill="none"
          stroke="#ff6b6b"
          strokeWidth={0.6}
          opacity={0.2}
          className="pulse delay-5"
        />
      </g>
    </g>
    <g transform="translate(280, 100)">
      <text
        x={0}
        y={10}
        className="main-name slide-in-left delay-2"
        fill="url(#nameGradient)"
        filter="url(#textGlow)"
      >
        {"\n      Efrat Bdil\n    "}
      </text>
      <text
        x={240}
        y={15}
        className="slide-in-right delay-3"
        fill="#4fd1c7"
        opacity={0.9}
        style={{
          fontSize: 16,
          fontWeight: 500,
          fontFamily: "'Fira Code', 'Consolas', monospace",
        }}
      >
        {"\n      { Code with Intelligence }\n    "}
      </text>
      <g className="slide-in-left delay-4">
        <text x={0} y={45} className="subtitle" fill="#e2e8f0">
          {"Full Stack & AI Developer"}
        </text>
        <line
          x1={0}
          y1={52}
          x2={270}
          y2={52}
          stroke="url(#accentGradient)"
          strokeWidth={2}
          opacity={0.7}
        />
      </g>
      <a xlinkHref="https://creatingai.onrender.com" target="_blank">
        <text
          x={0}
          y={75}
          className="description fade-in delay-5"
          fill="#cbd5e0"
        >
          {'\n        Founder of "'}
          <tspan textDecoration="underline" fill="#63b3ed">
            {"Creating AI"}
          </tspan>
          {'" \u2013 Data Science Learning Platform\n      '}
        </text>
      </a>
      <g className="fade-in delay-6" transform="translate(0, 50)">
        <g
          className=""
          style={{
            cursor: "pointer",
          }}
          transform="translate(0, 75)"
        >
          <circle
            cx={12}
            cy={12}
            r={10}
            fill="url(#iconGradient)"
            opacity={0.2}
            className="pulse delay-1"
          />
          <circle
            cx={12}
            cy={12}
            r={7}
            fill="none"
            stroke="#00f5ff"
            strokeWidth={2}
            opacity={0.9}
            className="glow-effect"
          />
          <path
            d="M 5 12 Q 12 6 19 12"
            stroke="#00f5ff"
            strokeWidth={1.5}
            fill="none"
            opacity={0.8}
          />
          <path
            d="M 5 12 Q 12 18 19 12"
            stroke="#00f5ff"
            strokeWidth={1.5}
            fill="none"
            opacity={0.8}
          />
          <line
            x1={12}
            y1={5}
            x2={12}
            y2={19}
            stroke="#00f5ff"
            strokeWidth={1.5}
            opacity={0.8}
          />
          <circle
            cx={8}
            cy={9}
            r={1}
            fill="#00f5ff"
            opacity={0.7}
            className="pulse delay-2"
          />
          <circle
            cx={16}
            cy={15}
            r={1}
            fill="#00f5ff"
            opacity={0.7}
            className="pulse delay-4"
          />
          <a
            xlinkHref="https://your-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <text
              x={28}
              y={17}
              className="link-text"
              fill="#67E8F9"
              filter="url(#textGlow)"
            >
              {"\n          Portfolio Website\n        "}
            </text>
          </a>
        </g>
        <g
          className=""
          style={{
            cursor: "pointer",
          }}
          transform="translate(200, 75)"
        >
          <circle
            cx={12}
            cy={12}
            r={10}
            fill="url(#accentGradient)"
            opacity={0.2}
            className="pulse delay-2"
          />
          <rect
            x={6}
            y={7}
            width={12}
            height={10}
            rx={2}
            fill="none"
            stroke="#feca57"
            strokeWidth={2}
            opacity={0.9}
            className="glow-effect"
          />
          <line
            x1={8}
            y1={10}
            x2={16}
            y2={10}
            stroke="#feca57"
            strokeWidth={1.5}
            opacity={0.8}
          />
          <line
            x1={8}
            y1={12}
            x2={16}
            y2={12}
            stroke="#feca57"
            strokeWidth={1.5}
            opacity={0.8}
          />
          <line
            x1={8}
            y1={14}
            x2={14}
            y2={14}
            stroke="#feca57"
            strokeWidth={1.5}
            opacity={0.8}
          />
          <circle
            cx={10}
            cy={5}
            r={0.8}
            fill="#feca57"
            opacity={0.6}
            className="float delay-1"
          />
          <circle
            cx={14}
            cy={19}
            r={0.6}
            fill="#feca57"
            opacity={0.5}
            className="float delay-3"
          />
          <a
            href="https://creatingai.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <text
              x={28}
              y={17}
              className="link-text"
              fill="#67E8F9"
              filter="url(#textGlow)"
            >
              {"\n          Tech Blog\n        "}
            </text>
          </a>
        </g>
        <g
          className=""
          style={{
            cursor: "pointer",
          }}
          transform="translate(350, 75)"
        >
          <circle
            cx={12}
            cy={12}
            r={10}
            fill="#6c5ce7"
            opacity={0.3}
            className="pulse delay-3"
          />
          <circle
            cx={12}
            cy={12}
            r={7}
            fill="#1a1a2e"
            opacity={0.9}
            stroke="#ffffff"
            strokeWidth={1}
          />
          <path
            d="M8 14 C8 15.5, 13 15.5, 13 14 C13 12.5, 12 12.5, 12 11 C12 9.5, 13 9.5, 13 8 C13 6, 11 6.5, 10 8 C9 6.5, 7 6, 7 8 C7 9.5, 8 9.5, 8 11 C8 12.5, 7 12.5, 7 14 Z"
            fill="#ffffff"
            opacity={0.9}
          />
          <rect
            x={4}
            y={4}
            width={2}
            height={1}
            fill="#00f5ff"
            opacity={0.7}
            className="pulse delay-1"
          />
          <rect
            x={18}
            y={6}
            width={1.5}
            height={1}
            fill="#feca57"
            opacity={0.6}
            className="pulse delay-2"
          />
          <rect
            x={6}
            y={20}
            width={1}
            height={1}
            fill="#ff6b6b"
            opacity={0.5}
            className="pulse delay-3"
          />
          <a
            xlinkHref="https://github.com/efrat-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <text
              x={28}
              y={17}
              className="link-text"
              fill="#67E8F9"
              filter="url(#textGlow)"
            >
              {"\n          GitHub\n        "}
            </text>
          </a>
        </g>
      </g>
    </g>
    <g opacity={0.15} className="fade-in delay-8">
      <text
        x={680}
        y={80}
        style={{
          fontSize: 24,
          fontFamily: "monospace",
        }}
        fill="#00f5ff"
        className="float delay-1"
        opacity={0.4}
      >
        {"{}"}
      </text>
      <text
        x={720}
        y={220}
        style={{
          fontSize: 18,
          fontFamily: "monospace",
        }}
        fill="#feca57"
        className="float delay-2"
        opacity={0.3}
      >
        {"</>"}
      </text>
      <text
        x={50}
        y={280}
        style={{
          fontSize: 20,
          fontFamily: "monospace",
        }}
        fill="#ff6b6b"
        className="float delay-3"
        opacity={0.3}
      >
        {"[]"}
      </text>
      <line
        x1={0}
        y1={150}
        x2={50}
        y2={150}
        stroke="url(#accentGradient)"
        strokeWidth={2}
        opacity={0.4}
        className="shimmer delay-4"
      />
      <line
        x1={720}
        y1={100}
        x2={800}
        y2={100}
        stroke="url(#nameGradient)"
        strokeWidth={2}
        opacity={0.4}
        className="shimmer delay-5"
      />
      <path
        d="M 0 0 L 30 0 L 30 2 L 2 2 L 2 30 L 0 30 Z"
        fill="#00f5ff"
        opacity={0.3}
      />
      <path
        d="M 800 300 L 770 300 L 770 298 L 798 298 L 798 270 L 800 270 Z"
        fill="#ff6b6b"
        opacity={0.3}
      />
    </g>
    <g opacity={0.05}>
      <circle cx={100} cy={100} r={1} fill="#00f5ff" className="pulse delay-1">
        <animate
          attributeName="r"
          values="1;3;1"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={300} cy={200} r={1} fill="#feca57" className="pulse delay-3">
        <animate
          attributeName="r"
          values="1;2.5;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={500} cy={80} r={1} fill="#ff6b6b" className="pulse delay-5">
        <animate
          attributeName="r"
          values="1;2;1"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={650} cy={180} r={1} fill="#6c5ce7" className="pulse delay-2">
        <animate
          attributeName="r"
          values="1;2.8;1"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);
export default SVGComponent;

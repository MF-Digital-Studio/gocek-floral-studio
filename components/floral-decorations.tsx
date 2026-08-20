import React from 'react'

export function FloralCornerTL({ className = '' }: { className?: string }) {
  return (
    <div className={`floral-corner floral-corner-tl ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g opacity="0.92">
          {/* Main Organic Vines & Stems */}
          <path
            d="M0 0 C40 10 90 35 120 75 C145 110 160 165 175 220"
            stroke="#476b63"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M15 0 C55 35 75 80 85 130 C90 160 80 185 70 210"
            stroke="#5a8279"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 25 C35 55 90 70 140 65 C175 60 205 45 230 30"
            stroke="#476b63"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Delicate Tendrils */}
          <path
            d="M120 75 C140 85 160 82 175 70 C185 60 180 48 168 52 C158 55 160 70 172 75"
            stroke="#6b948a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M85 130 C105 145 125 140 135 125 C142 115 136 105 125 108"
            stroke="#6b948a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Sage Leaves */}
          {/* Leaf 1 */}
          <path
            d="M60 45 C80 30 110 38 118 55 C100 65 72 60 60 45 Z"
            fill="#567a72"
            stroke="#3d5c55"
            strokeWidth="1"
          />
          <path d="M60 45 Q90 48 118 55" stroke="#3d5c55" strokeWidth="0.8" />
          
          {/* Leaf 2 */}
          <path
            d="M30 85 C42 110 35 135 18 145 C12 125 18 98 30 85 Z"
            fill="#628880"
            stroke="#44665e"
            strokeWidth="1"
          />
          <path d="M30 85 Q26 115 18 145" stroke="#44665e" strokeWidth="0.8" />

          {/* Leaf 3 */}
          <path
            d="M135 65 C165 58 190 70 198 88 C175 92 148 82 135 65 Z"
            fill="#53776f"
            stroke="#3d5c55"
            strokeWidth="1"
          />
          <path d="M135 65 Q168 76 198 88" stroke="#3d5c55" strokeWidth="0.8" />

          {/* Leaf 4 */}
          <path
            d="M95 145 C120 160 130 185 125 202 C108 195 98 170 95 145 Z"
            fill="#6b9289"
            stroke="#476b63"
            strokeWidth="1"
          />

          {/* Leaf 5 near corner */}
          <path
            d="M15 15 C35 5 55 12 60 25 C45 30 25 25 15 15 Z"
            fill="#476b63"
          />

          {/* Top-Right Secondary Flower Bud */}
          <g transform="translate(195, 40)">
            <ellipse cx="0" cy="0" rx="14" ry="10" transform="rotate(-20)" fill="#d85b84" opacity="0.85" />
            <ellipse cx="-4" cy="-2" rx="11" ry="8" transform="rotate(-10)" fill="#e8799e" />
            <ellipse cx="-2" cy="-1" rx="7" ry="5" fill="#f6a9c1" />
            <path d="M-8 8 C-12 18 -5 22 5 18" stroke="#476b63" strokeWidth="1.8" fill="none" />
          </g>

          {/* Bottom Secondary Flower Bud */}
          <g transform="translate(68, 185)">
            <ellipse cx="0" cy="0" rx="12" ry="16" transform="rotate(15)" fill="#d85b84" opacity="0.85" />
            <ellipse cx="2" cy="-2" rx="9" ry="13" transform="rotate(25)" fill="#e8799e" />
            <ellipse cx="1" cy="-1" rx="6" ry="9" fill="#f4afc5" />
            <path d="M0 14 C-2 24 6 28 12 25" stroke="#476b63" strokeWidth="1.8" fill="none" />
          </g>

          {/* Main Bloomed Flower (Peony / Rose) */}
          <g transform="translate(75, 75)">
            {/* Outer Petals */}
            <path
              d="M0 -34 C18 -38 36 -24 38 -6 C40 14 26 32 6 36 C-16 40 -34 26 -38 6 C-42 -14 -24 -30 0 -34 Z"
              fill="#c64771"
              opacity="0.8"
            />
            <path
              d="M-22 -24 C-6 -42 22 -36 34 -18 C46 0 38 26 18 34 C-4 42 -28 30 -34 12 C-38 -6 -32 -16 -22 -24 Z"
              fill="#d45781"
              opacity="0.9"
            />
            {/* Middle Petals */}
            <path
              d="M-16 -18 C-2 -30 20 -26 26 -12 C32 2 24 20 10 24 C-4 28 -20 18 -24 6 C-26 -6 -22 -12 -16 -18 Z"
              fill="#e36b93"
            />
            <path
              d="M14 -12 C24 2 18 18 4 22 C-10 26 -22 14 -20 0 C-18 -14 -4 -20 14 -12 Z"
              fill="#ed82a6"
            />
            {/* Inner Petals */}
            <ellipse cx="-1" cy="1" rx="12" ry="10" fill="#f59dbb" />
            <ellipse cx="1" cy="-1" rx="8" ry="7" fill="#fabed2" />
            <ellipse cx="0" cy="0" rx="5" ry="4" fill="#fde5ee" />
            {/* Flower Center Stamen Details */}
            <circle cx="-2" cy="-1" r="1.5" fill="#fce598" />
            <circle cx="2" cy="0" r="1.5" fill="#fce598" />
            <circle cx="0" cy="2" r="1.2" fill="#f7d468" />
          </g>

          {/* Small Floating Petals */}
          <path
            d="M135 125 C142 120 152 124 150 132 C148 138 138 140 134 135 C132 130 130 128 135 125 Z"
            fill="#e8799e"
            opacity="0.75"
          />
          <path
            d="M155 35 C160 30 168 33 166 40 C164 45 156 46 153 42 Z"
            fill="#f4afc5"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  )
}

export function FloralCornerBR({ className = '' }: { className?: string }) {
  return (
    <div className={`floral-corner floral-corner-br ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g opacity="0.92">
          {/* Main Organic Vines & Stems rising from bottom-right */}
          <path
            d="M240 240 C200 230 150 205 120 165 C95 130 80 75 65 20"
            stroke="#476b63"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M225 240 C185 205 165 160 155 110 C150 80 160 55 170 30"
            stroke="#5a8279"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M240 215 C205 185 150 170 100 175 C65 180 35 195 10 210"
            stroke="#476b63"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Delicate Tendrils */}
          <path
            d="M120 165 C100 155 80 158 65 170 C55 180 60 192 72 188 C82 185 80 170 68 165"
            stroke="#6b948a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M155 110 C135 95 115 100 105 115 C98 125 104 135 115 132"
            stroke="#6b948a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Sage Leaves */}
          {/* Leaf 1 */}
          <path
            d="M180 195 C160 210 130 202 122 185 C140 175 168 180 180 195 Z"
            fill="#567a72"
            stroke="#3d5c55"
            strokeWidth="1"
          />
          <path d="M180 195 Q150 192 122 185" stroke="#3d5c55" strokeWidth="0.8" />
          
          {/* Leaf 2 */}
          <path
            d="M210 155 C198 130 205 105 222 95 C228 115 222 142 210 155 Z"
            fill="#628880"
            stroke="#44665e"
            strokeWidth="1"
          />
          <path d="M210 155 Q214 125 222 95" stroke="#44665e" strokeWidth="0.8" />

          {/* Leaf 3 */}
          <path
            d="M105 175 C75 182 50 170 42 152 C65 148 92 158 105 175 Z"
            fill="#53776f"
            stroke="#3d5c55"
            strokeWidth="1"
          />
          <path d="M105 175 Q72 164 42 152" stroke="#3d5c55" strokeWidth="0.8" />

          {/* Leaf 4 */}
          <path
            d="M145 95 C120 80 110 55 115 38 C132 45 142 70 145 95 Z"
            fill="#6b9289"
            stroke="#476b63"
            strokeWidth="1"
          />

          {/* Leaf 5 near corner */}
          <path
            d="M225 225 C205 235 185 228 180 215 C195 210 215 215 225 225 Z"
            fill="#476b63"
          />

          {/* Top Secondary Flower Bud */}
          <g transform="translate(45, 200)">
            <ellipse cx="0" cy="0" rx="14" ry="10" transform="rotate(20)" fill="#d85b84" opacity="0.85" />
            <ellipse cx="4" cy="2" rx="11" ry="8" transform="rotate(10)" fill="#e8799e" />
            <ellipse cx="2" cy="1" rx="7" ry="5" fill="#f6a9c1" />
            <path d="M8 -8 C12 -18 5 -22 -5 -18" stroke="#476b63" strokeWidth="1.8" fill="none" />
          </g>

          {/* Upper Secondary Flower Bud */}
          <g transform="translate(172, 55)">
            <ellipse cx="0" cy="0" rx="12" ry="16" transform="rotate(-15)" fill="#d85b84" opacity="0.85" />
            <ellipse cx="-2" cy="2" rx="9" ry="13" transform="rotate(-25)" fill="#e8799e" />
            <ellipse cx="-1" cy="1" rx="6" ry="9" fill="#f4afc5" />
            <path d="M0 -14 C2 -24 -6 -28 -12 -25" stroke="#476b63" strokeWidth="1.8" fill="none" />
          </g>

          {/* Main Bloomed Flower (Peony / Rose) */}
          <g transform="translate(165, 165)">
            {/* Outer Petals */}
            <path
              d="M0 34 C-18 38 -36 24 -38 6 C-40 -14 -26 -32 -6 -36 C16 -40 34 -26 38 -6 C42 14 24 30 0 34 Z"
              fill="#c64771"
              opacity="0.8"
            />
            <path
              d="M22 24 C6 42 -22 36 -34 18 C-46 0 -38 -26 -18 -34 C4 -42 28 -30 34 -12 C38 6 32 16 22 24 Z"
              fill="#d45781"
              opacity="0.9"
            />
            {/* Middle Petals */}
            <path
              d="M16 18 C2 30 -20 26 -26 12 C-32 -2 -24 -20 -10 -24 C4 -28 20 -18 24 -6 C26 6 22 12 16 18 Z"
              fill="#e36b93"
            />
            <path
              d="M-14 12 C-24 -2 -18 -18 -4 -22 C10 -26 22 -14 20 0 C18 14 4 20 -14 12 Z"
              fill="#ed82a6"
            />
            {/* Inner Petals */}
            <ellipse cx="1" cy="-1" rx="12" ry="10" fill="#f59dbb" />
            <ellipse cx="-1" cy="1" rx="8" ry="7" fill="#fabed2" />
            <ellipse cx="0" cy="0" rx="5" ry="4" fill="#fde5ee" />
            {/* Flower Center Stamen Details */}
            <circle cx="2" cy="1" r="1.5" fill="#fce598" />
            <circle cx="-2" cy="0" r="1.5" fill="#fce598" />
            <circle cx="0" cy="-2" r="1.2" fill="#f7d468" />
          </g>

          {/* Small Floating Petals */}
          <path
            d="M105 115 C98 120 88 116 90 108 C92 102 102 100 106 105 C108 110 110 112 105 115 Z"
            fill="#e8799e"
            opacity="0.75"
          />
          <path
            d="M85 205 C80 210 72 207 74 200 C76 195 84 194 87 198 Z"
            fill="#f4afc5"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  )
}

import React from 'react'

export function ArrowUpRight({
  className = '',
  size = 14,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow-svg ${className}`}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

export function ArrowDownRight({
  className = '',
  size = 18,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow-svg ${className}`}
      aria-hidden="true"
    >
      <path d="M7 7l10 10M17 7v10H7" />
    </svg>
  )
}

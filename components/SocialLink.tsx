'use client'
import Link from 'next/link'
import type { SocialLink } from '@/types'

export default function SocialLink({ href, label }: SocialLink) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-[0.5rem] w-full"
    >
      <button className="hover:bg-accent w-full rounded-[0.5rem] bg-gray-700 py-[0.75rem] text-center font-medium transition-colors duration-200 hover:cursor-pointer hover:text-gray-800">
        {label}
      </button>
    </Link>
  )
}

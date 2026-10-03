'use client'

import { profile } from '@/data'
import SocialLink from './SocialLink'
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="flex max-w-[380px] flex-col items-center rounded-[1rem] bg-gray-800 px-[1.5rem] py-[1rem] font-sans text-[0.9rem] text-white">
      <Image
        className="my-[1rem] w-1/3 rounded-full object-cover"
        src="/avatar-jessica.jpeg"
        alt="Profile Picture"
        width={176}
        height={176}
      />
      <h1 className="text-[1.5rem]">{profile.name}</h1>
      <p className="text-accent mt-[0.25rem] font-medium">{profile.location}</p>
      <p className="mt-[1.5rem] mb-[1rem] font-light">{profile.bio}</p>
      {profile.links.map((link, index) => (
        <SocialLink key={index} href={link.href} label={link.label} />
      ))}
    </div>
  )
}

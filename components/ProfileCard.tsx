"use client";

import { profile } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="text-white bg-gray-800 rounded-[1rem] p-[1rem] font-sans flex flex-col items-center">
      <Image
        className="rounded-full w-1/4 object-cover"
        src="/avatar-jessica.jpeg"
        alt="Profile Picture"
        width={176}
        height={176}
      />
      <h1>{profile.name}</h1>
      <p>{profile.location}</p>
      <p>{profile.bio}</p>
      <ul>
        {profile.links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

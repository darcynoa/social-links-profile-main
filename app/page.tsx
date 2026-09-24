import { profile } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <Image
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
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

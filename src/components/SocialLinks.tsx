import { FaGithub, FaLinkedin, FaOrcid, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import type { IconType } from "react-icons";
import type { Social, SocialIcon } from "@/data/profile";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialIcon, IconType> = {
  scholar: SiGooglescholar,
  github: FaGithub,
  linkedin: FaLinkedin,
  orcid: FaOrcid,
  researchgate: FaResearchgate,
};

interface SocialLinksProps {
  socials?: readonly Social[];
  className?: string;
  size?: "sm" | "md";
}

export function SocialLinks({ socials = profile.socials, className, size = "md" }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        if (!Icon) return null;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className={cn(
                "inline-flex items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                size === "sm" ? "h-9 w-9" : "h-10 w-10",
              )}
            >
              <Icon size={size === "sm" ? 17 : 19} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

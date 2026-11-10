import {
  Calendar,
  Code2,
  Flag,
  GraduationCap,
  Handshake,
  Map,
  Megaphone,
  Shield,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/site";

const icons: Record<IconName, LucideIcon> = {
  flag: Flag,
  code: Code2,
  users: Users,
  trophy: Trophy,
  map: Map,
  megaphone: Megaphone,
  handshake: Handshake,
  school: GraduationCap,
  calendar: Calendar,
  shield: Shield,
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = icons[name];
  return <Glyph className={className} aria-hidden="true" />;
}

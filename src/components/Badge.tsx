interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return <span className="project-badge">{label}</span>;
}
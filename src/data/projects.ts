export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce Store for Upcycled Products",
    description:
      "A Next.js e-commerce platform built in collaboration with Kloth Circularity for upcycled products.",
    tags: ["Next.js", "E-commerce"],
  },
  {
    title: "Eco Quest",
    description:
      "A Unity 2D RPG-style interactive quiz game raising environmental awareness. Built in C# and exported to Android.",
    tags: ["Unity", "C#", "Android"],
    githubUrl: "https://github.com/adrianteh126/eco-quest",
  },
  {
    title: "Detectify",
    description:
      "A Django app integrated with the Roboflow API to recommend suitable glasses based on the user's face shape.",
    tags: ["Django", "Roboflow", "Python"],
    githubUrl: "https://github.com/adrianteh126/detectify",
    liveUrl: "https://detectify.onrender.com/",
  },
];

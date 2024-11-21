import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <h2 className="font-bold">Projects</h2>
      <p>🛠️ Work In progress ...</p>
      <Link href="/" className="text-primary hover:underline">
        Bring me back!
      </Link>
    </div>
  );
};

export default Projects;

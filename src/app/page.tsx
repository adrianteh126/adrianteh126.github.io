import {
  EntypoMail,
  EntypoSocialGithub,
  EntypoSocialLinkedin,
  SkillIconsJavaLight,
  SkillIconsPythonLight,
  SkillIconsReactLight,
  SkillIconsSpringLight,
  SkillIconsTypescript,
  SkillIconsVuejsLight,
} from "@/components/icon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-screen grid-flow-dense grid-cols-12 grid-rows-12 gap-4 bg-base-100 p-8 *:rounded-lg *:px-6 *:py-4">
      {/* About Me */}
      <div className="col-span-4 row-span-4 bg-slate-300">
        <h2 className="font-bold">Hi , I&apos;m Adrian Teh! 🙋‍♂️</h2>
        <br />
        <p>
          A passionate software engineer graduate who enjoys traveling, jogging,
          and solving real-world problems through code.
        </p>
      </div>
      {/* Education */}
      <div className="col-span-4 row-span-3 bg-blue-300">
        <h2 className="font-bold">Education</h2>
        <ul>
          <li>
            <span className="font-semibold">
              University of Malaya, Malaysia
            </span>{" "}
            - B.CS. (Software Engineering)
          </li>
        </ul>
      </div>
      {/* Projects */}
      <div className="col-span-4 row-span-7 flex flex-col justify-between bg-purple-300">
        <h2 className="font-bold">Projects</h2>
        <div className="flex flex-col gap-4">
          <div>
            <strong>E-commerce Store for Upcycled Products</strong>
            <br />A Next.js e-commerce platform collaborated with{" "}
            <Link
              href="https://www.instagram.com/klothcircularity"
              target="_blank"
              className="text-primary"
            >
              Kloth Circularity
            </Link>{" "}
            for upcycled products
          </div>
          <div>
            <strong>Eco Quest</strong>
            <br /> A Unity 2D RPG-like interactive quiz game to raise
            environmental awareness topics. Built in C# exported to Android
            Application
          </div>
          <div>
            <strong>Detectify</strong>
            <br /> Django application integrate with roboflow api to find
            suitable glassess based on face shape
          </div>
        </div>

        <Link href="/projects" target="_blank">
          <div className="tooltip" data-tip="More Projects">
            <h2 className="font-bold transition-transform duration-300 ease-in-out hover:translate-x-2">
              →
            </h2>
          </div>
        </Link>
      </div>
      {/* Contact */}
      <div className="col-span-4 row-span-4 bg-green-300">
        <h2 className="font-bold">Contact</h2>
        <br />
        <div className="flex flex-col gap-2 *:flex *:items-center *:gap-2">
          <Link href="mailto:adrianteh02@hotmail.com">
            <EntypoMail />
            <span>adrianteh02@hotmail.com</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/adrian-teh-kuan-kiat"
            target="_blank"
          >
            <EntypoSocialLinkedin />
            <span>Adrian Teh</span>
          </Link>
          <Link href="https://github.com/adrianteh126" target="_blank">
            <EntypoSocialGithub />
            <span>adrianteh126</span>
          </Link>
        </div>
      </div>
      {/* Skills */}
      <div className="col-span-4 row-span-3 bg-orange-300">
        <h2 className="font-bold">Skills</h2>

        <div className="flex flex-col gap-2 *:flex *:flex-wrap *:gap-2">
          <div className="*:flex *:items-center *:gap-2">
            <span className="font-semibold">Language </span>
            <span>
              <SkillIconsTypescript />
              TypeScript
            </span>
            <span>
              <SkillIconsJavaLight />
              Java
            </span>
            <span>
              <SkillIconsPythonLight />
              Python
            </span>
          </div>
          <div className="*:flex *:items-center *:gap-2">
            <span className="font-semibold"> Framework </span>

            <span>
              <SkillIconsReactLight />
              React.js
            </span>
            <span>
              <SkillIconsVuejsLight />
              Vue.js
            </span>
            <span>
              <SkillIconsSpringLight />
              Spring Boot
            </span>
          </div>
        </div>

        {/* <ul>
   
          <li className="flex"></li>
          <li>React, Next.js</li>
          <li>MongoDB, PostgreSQL</li>
        </ul> */}
      </div>
      {/* Experience */}
      <div className="col-span-3 row-span-6 bg-teal-300">
        <h2 className="font-bold">Experience</h2>
        <p>
          <strong>Junior Software Developer</strong> @ AppFuxion Consulting
          <br />
          Sep 2024 - Dec 2024 (Contract)
        </p>
        <br />
        <p>
          <strong>Software Engineer Intern</strong> @ Fuxionex Group <br />
          Aug 2023 - Jan 2024
        </p>
      </div>
      {/* Testimonials */}
      <div className="col-span-3 row-span-6 bg-red-300">
        <span className="flex h-full w-full select-none flex-col items-center justify-center text-[8rem]">
          🧑‍💻
        </span>
        {/* <h2 className="font-bold">Testimonials</h2>
        <p>
          <strong>John Doe</strong> - "Adrian's attention to detail and coding
          expertise are exceptional."
        </p>
        <p>
          <strong>Jane Smith</strong> - "His ability to tackle complex problems
          with creative solutions is impressive."
        </p> */}
      </div>
      {/* Blog */}
      <div className="col-span-6 row-span-6 flex flex-col justify-between bg-yellow-300">
        <h2 className="font-bold">Blog</h2>
        <ul>
          <li>
            {/* <Link href="#blog1">Blog 1</Link> */}
            <p>🛠️ Work In progress ...</p>
          </li>
          {/* <li>
            <Link href="#blog2">"10 React Tips for Cleaner Code"</Link>
          </li>
          <li>
            <Link href="#blog3">"My Experience in Japan as an Exchange Student"</Link>
          </li> */}
        </ul>
        <Link href="/blog" target="_blank">
          <div className="tooltip" data-tip="More Blog Content">
            <h2 className="font-bold transition-transform duration-300 ease-in-out hover:translate-x-2">
              →
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

import {
  EntypoMail,
  EntypoSocialGithub,
  EntypoSocialLinkedin,
} from "@/components/icon";

export default function Home() {
  return (
    <div className="mx-[5rem] mt-[68px] flex flex-col h-[calc(100dvh-68px-10px)] items-center justify-center gap-3 py-12 ">
      <h1 className="font-bold">Hi , I&apos;m Adrian! 🙋‍♂️</h1>
      <div className="flex flex-col items-start gap-3">
        <p className="text-lg">
          I&apos;m a software developer with a passion for creating amazing web
          applications.
        </p>
        <div className="flex justify-center w-full">
          <a
            href="https://github.com/adrianteh126?tab=repositories"
            target="_blank"
            className="hover:underline text-primary"
          >
            Check out my projects (WIP 🛠️)
          </a>
        </div>
        <div className="w-full">
          <div className="divider">
            <p className="text-neutral">Approach me via</p>
          </div>
          <div className="flex gap-3 mt-4 justify-center w-full">
            <a
              href="mailto:adrianteh02@hotmail.com"
              className="hover:text-primary"
            >
              <EntypoMail height={25} width={25} />
            </a>
            <a
              href="https://github.com/adrianteh126"
              target="_blank"
              className="hover:text-primary"
            >
              <EntypoSocialGithub height={25} width={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-teh-kuan-kiat"
              target="_blank"
              className="hover:text-primary"
            >
              <EntypoSocialLinkedin height={25} width={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

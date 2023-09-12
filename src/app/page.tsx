import Container from './components/Container';
import { CustomSocialIcon } from './components/CustomSocialIcon';

export default function Home() {
  return (
    <main>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Software engineer and Machine Learning engineer.</h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Marcos, a software designer and entrepreneur based in Dublin City (Ireland). I'm a software engineer, and I have a master's degree in computer
            science in the Artificial intelligence line, where we develop technologies that empower regular people.
          </p>
          <div className="mt-6 flex gap-6">
            <CustomSocialIcon
              url="mailto:marcos.v.silva@live.com"
              ariaLabel="Send a message"
            />
            <CustomSocialIcon
              url="https://www.instagram.com/marcosvvsilva/"
              ariaLabel="Follow on Instagram"
            />
            <CustomSocialIcon
              url="https://github.com/marcosvsilva"
              ariaLabel="Follow on GitHub"
            />
            <CustomSocialIcon
              url="https://www.linkedin.com/in/marcos-v-silva/"
              ariaLabel="Follow on LinkedIn"
            />
            <CustomSocialIcon
              url="https://www.facebook.com/marcos.vinicius.5454021/"
              ariaLabel="Follow on Facebook"
            />
            <CustomSocialIcon
              url="https://discord.com/users/758742162502058065"
              ariaLabel="Send a message on Discord"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24"></div>
        </div>
      </Container>
    </main>
  );
}

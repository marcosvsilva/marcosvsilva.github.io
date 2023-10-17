import Image from 'next/image';

import Container from '../components/Container';
import avatarImage from '../images/avatar/avatar.jpg';
import CustomSocialIconDescrition from '../images/icons/CustomSocialIconDescription';

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={avatarImage}
              alt="Marcos Silva"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Marcos Silva. I live in Dublin, where I work as a SDE and Machine Learning Engineer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Marcos Silva, a software engineer. I graduated from the Federal University of Goiás in 2017 and earned a master’s degree in Computer Science,
              defending my thesis in 2023.
            </p>
            <p>
              I began my career in 2011 in technical support and ventured into software development in 2013. Since then, I’ve gained experience in both software
              development and machine learning engineering, working with various technologies, programming languages, tools, and frameworks.
            </p>
            <p>
              I particularly enjoy working on back-end software engineering and machine learning, but I’ve also worn hats as a full-stack software engineer and
              a data scientist.
            </p>
            <p>
              During my free time, I indulge in my photography hobby and satisfy my passion for aviation by capturing airplane moments. I find joy in being
              surrounded by these engineering marvels. Additionally, I love reading both fiction and research books, as well as watching documentaries about
              historical events.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <CustomSocialIconDescrition
              url="https://twitter.com/MarcosVVSilva"
              ariaLabel="Follow on Twitter"
            />
            <CustomSocialIconDescrition
              url="https://www.instagram.com/marcosvvsilva/"
              ariaLabel="Follow on Instagram"
            />
            <CustomSocialIconDescrition
              url="https://github.com/marcosvsilva"
              ariaLabel="Follow on GitHub"
            />
            <CustomSocialIconDescrition
              url="https://www.linkedin.com/in/marcos-v-silva/"
              ariaLabel="Follow on LinkedIn"
            />
            <CustomSocialIconDescrition
              url="https://www.facebook.com/marcos.vinicius.5454021/"
              ariaLabel="Follow on Facebook"
            />
            <div className="mt-5 border-t border-zinc-100 pt-5 dark:border-zinc-700/40" />
            <CustomSocialIconDescrition
              url="mailto:marcos.v.silva@live.com"
              ariaLabel="marcos.v.silva@live.com"
            />
          </ul>
        </div>
      </div>
    </Container>
  );
}

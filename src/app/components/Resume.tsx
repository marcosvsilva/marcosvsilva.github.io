import React, { ReactNode } from 'react';

import ArrowDownIcon from '../images/icons/ArrowDownIcon';
import BriefcaseIcon from '../images/icons/BriefcaseIcon';
import Aliare from '../images/logos/Aliare';
import Ceia from '../images/logos/Ceia';
import Jave from '../images/logos/Jave';
import Siacon from '../images/logos/Siacon';
import Softworks from '../images/logos/Softworks';
import Ufg from '../images/logos/Ufg';
import Button from './Button';

interface ResumeRole {
  company: string;
  title: string;
  logo: () => ReactNode;
  start: string;
  end: string;
}

function Resume() {
  const resume: ResumeRole[] = [
    {
      company: 'Softworks.com',
      title: 'SDE & Data Scientist',
      logo: () => <Softworks />,
      start: '2023',
      end: 'Present',
    },
    {
      company: 'CEIA - Center of Excellence in AI',
      title: 'SDE & ML Engineer',
      logo: () => <Ceia />,
      start: '2020',
      end: '2023',
    },
    {
      company: 'Federal University of Goiás',
      title: 'Researcher',
      logo: () => <Ufg />,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Aliare',
      title: 'Software Engineer',
      logo: () => <Aliare />,
      start: '2017',
      end: '2019',
    },
    {
      company: 'Siacon',
      title: 'Software Engineer',
      logo: () => <Siacon />,
      start: '2017',
      end: '2017',
    },
    {
      company: 'Jave Informática',
      title: 'Software Engineer',
      logo: () => <Jave />,
      start: '2013',
      end: '2016',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {role.logo()}
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time> <span aria-hidden="true">—</span> <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/files/resume.pdf"
        download="MRSilvaResume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

export default Resume;

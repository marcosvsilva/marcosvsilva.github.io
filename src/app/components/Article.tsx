import React from 'react';

import Card from './Card';

interface ArticleRole {
  title: string;
  description: string;
  date: string;
  link: string;
}

function Article() {
  const articles: ArticleRole[] = [
    {
      title: 'PupRN: a method for ophthalmic abnormalities diagnosis in newborn based on pupillary dynamics',
      description:
        'This model aims to serve as a trial screening method to assist health professionals in diagnosing ophthalmological abnormalities in newborns. Furthermore, we have created an annotated benchmark as part of this study, which is available and provides context while highlighting the challenges associated with working with pupillometry exams in newborns',
      date: 'September, 2021',
      link: 'https://files.cercomp.ufg.br/weby/up/1289/o/Dissertacao_Marcos-Vinicius-Ribeiro-Silva.pdf',
    },
  ];

  return (
    <ol className="mt-6 space-y-4">
      {articles.map((role, roleIndex) => (
        <li key={roleIndex}>
          <Card as="article">
            <Card.Title href={role.link}>{role.title}</Card.Title>
            <Card.Eyebrow
              as="time"
              decorate={true}
            >
              {role.date}
            </Card.Eyebrow>
            <Card.Description>{role.description}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export default Article;

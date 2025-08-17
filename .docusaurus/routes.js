import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/practical-therapeutic-pharmacology/blog',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog', '6f4'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/archive',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/archive', '046'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/authors',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/authors', '26b'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/authors/all-sebastien-lorber-articles', 'b80'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/authors/yangshun',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/authors/yangshun', '96d'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/first-blog-post',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/first-blog-post', '760'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/long-blog-post',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/long-blog-post', '7e7'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/mdx-blog-post',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/mdx-blog-post', '1dc'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/tags',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/tags', '2d3'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/tags/docusaurus',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/tags/docusaurus', '1b3'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/tags/facebook',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/tags/facebook', '40b'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/tags/hello',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/tags/hello', 'cbf'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/tags/hola',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/tags/hola', '9f6'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/blog/welcome',
    component: ComponentCreator('/practical-therapeutic-pharmacology/blog/welcome', '010'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/markdown-page',
    component: ComponentCreator('/practical-therapeutic-pharmacology/markdown-page', 'e00'),
    exact: true
  },
  {
    path: '/practical-therapeutic-pharmacology/docs',
    component: ComponentCreator('/practical-therapeutic-pharmacology/docs', '272'),
    routes: [
      {
        path: '/practical-therapeutic-pharmacology/docs',
        component: ComponentCreator('/practical-therapeutic-pharmacology/docs', 'ab7'),
        routes: [
          {
            path: '/practical-therapeutic-pharmacology/docs',
            component: ComponentCreator('/practical-therapeutic-pharmacology/docs', '726'),
            routes: [
              {
                path: '/practical-therapeutic-pharmacology/docs/intro',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/intro', 'bd1'),
                exact: true
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-1-part-i',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-1-part-i', '79c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-1-part-i/adverse-drug-reactions-and-safety-monitoring',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-1-part-i/adverse-drug-reactions-and-safety-monitoring', '6e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-1-part-i/introduction-to-therapeutic-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-1-part-i/introduction-to-therapeutic-pharmacology', 'd34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-1-part-i/pharmacodynamics-and-mechanisms-of-action',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-1-part-i/pharmacodynamics-and-mechanisms-of-action', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-1-part-i/pharmacokinetics-in-clinical-practice',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-1-part-i/pharmacokinetics-in-clinical-practice', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-1-part-i/special-populations-in-therapeutic-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-1-part-i/special-populations-in-therapeutic-pharmacology', '0aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii', '943'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/cardiovascular-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/cardiovascular-pharmacology', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/central-nervous-system-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/central-nervous-system-pharmacology', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/dermatological-and-musculoskeletal-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/dermatological-and-musculoskeletal-pharmacology', 'e92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/endocrine-and-metabolic-disorders',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/endocrine-and-metabolic-disorders', 'a08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/gastrointestinal-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/gastrointestinal-pharmacology', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/hematology-and-immunology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/hematology-and-immunology', '060'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/infectious-diseases-and-antimicrobial-therapy',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/infectious-diseases-and-antimicrobial-therapy', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/oncology-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/oncology-pharmacology', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/renal-and-electrolyte-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/renal-and-electrolyte-pharmacology', 'fba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-2-part-ii/respiratory-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-2-part-ii/respiratory-pharmacology', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-3-part-iii',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-3-part-iii', 'a8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-3-part-iii/drug-interactions-in-practice',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-3-part-iii/drug-interactions-in-practice', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-3-part-iii/emergency-and-critical-care-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-3-part-iii/emergency-and-critical-care-pharmacology', 'cea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-3-part-iii/future-of-therapeutic-pharmacology',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-3-part-iii/future-of-therapeutic-pharmacology', '632'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-3-part-iii/rational-prescribing-in-practice',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-3-part-iii/rational-prescribing-in-practice', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-3-part-iii/therapeutic-drug-monitoring-tdm',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-3-part-iii/therapeutic-drug-monitoring-tdm', 'e61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-4-appendices',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-4-appendices', 'fd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-4-appendices/common-drug-drug-interaction-tables',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-4-appendices/common-drug-drug-interaction-tables', 'b88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-4-appendices/dosing-adjustments-in-renal-hepatic-impairment',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-4-appendices/dosing-adjustments-in-renal-hepatic-impairment', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-4-appendices/normal-lab-values-relevant-to-drug-therapy',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-4-appendices/normal-lab-values-relevant-to-drug-therapy', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/practical-therapeutic-pharmacology/docs/part-4-appendices/who-essential-medicines-list-abridged',
                component: ComponentCreator('/practical-therapeutic-pharmacology/docs/part-4-appendices/who-essential-medicines-list-abridged', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/practical-therapeutic-pharmacology/',
    component: ComponentCreator('/practical-therapeutic-pharmacology/', 'c40'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

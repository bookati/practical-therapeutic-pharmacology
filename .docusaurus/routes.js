import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c33'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'cbe'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1aa'),
            routes: [
              {
                path: '/docs/part-1-part-i',
                component: ComponentCreator('/docs/part-1-part-i', '7fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-part-i/adverse-drug-reactions-and-safety-monitoring',
                component: ComponentCreator('/docs/part-1-part-i/adverse-drug-reactions-and-safety-monitoring', 'fb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-part-i/introduction-to-therapeutic-pharmacology',
                component: ComponentCreator('/docs/part-1-part-i/introduction-to-therapeutic-pharmacology', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-part-i/pharmacodynamics-and-mechanisms-of-action',
                component: ComponentCreator('/docs/part-1-part-i/pharmacodynamics-and-mechanisms-of-action', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-part-i/pharmacokinetics-in-clinical-practice',
                component: ComponentCreator('/docs/part-1-part-i/pharmacokinetics-in-clinical-practice', 'ed6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-1-part-i/special-populations-in-therapeutic-pharmacology',
                component: ComponentCreator('/docs/part-1-part-i/special-populations-in-therapeutic-pharmacology', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii',
                component: ComponentCreator('/docs/part-2-part-ii', 'da3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/cardiovascular-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/cardiovascular-pharmacology', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/central-nervous-system-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/central-nervous-system-pharmacology', 'd59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/dermatological-and-musculoskeletal-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/dermatological-and-musculoskeletal-pharmacology', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/endocrine-and-metabolic-disorders',
                component: ComponentCreator('/docs/part-2-part-ii/endocrine-and-metabolic-disorders', 'c80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/gastrointestinal-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/gastrointestinal-pharmacology', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/hematology-and-immunology',
                component: ComponentCreator('/docs/part-2-part-ii/hematology-and-immunology', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/infectious-diseases-and-antimicrobial-therapy',
                component: ComponentCreator('/docs/part-2-part-ii/infectious-diseases-and-antimicrobial-therapy', '6cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/oncology-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/oncology-pharmacology', 'd2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/renal-and-electrolyte-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/renal-and-electrolyte-pharmacology', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-2-part-ii/respiratory-pharmacology',
                component: ComponentCreator('/docs/part-2-part-ii/respiratory-pharmacology', '844'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-part-iii',
                component: ComponentCreator('/docs/part-3-part-iii', 'd5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-part-iii/drug-interactions-in-practice',
                component: ComponentCreator('/docs/part-3-part-iii/drug-interactions-in-practice', '757'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-part-iii/emergency-and-critical-care-pharmacology',
                component: ComponentCreator('/docs/part-3-part-iii/emergency-and-critical-care-pharmacology', 'f1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-part-iii/future-of-therapeutic-pharmacology',
                component: ComponentCreator('/docs/part-3-part-iii/future-of-therapeutic-pharmacology', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-part-iii/rational-prescribing-in-practice',
                component: ComponentCreator('/docs/part-3-part-iii/rational-prescribing-in-practice', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-3-part-iii/therapeutic-drug-monitoring-tdm',
                component: ComponentCreator('/docs/part-3-part-iii/therapeutic-drug-monitoring-tdm', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-appendices',
                component: ComponentCreator('/docs/part-4-appendices', '70b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-appendices/common-drug-drug-interaction-tables',
                component: ComponentCreator('/docs/part-4-appendices/common-drug-drug-interaction-tables', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-appendices/dosing-adjustments-in-renal-hepatic-impairment',
                component: ComponentCreator('/docs/part-4-appendices/dosing-adjustments-in-renal-hepatic-impairment', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-appendices/normal-lab-values-relevant-to-drug-therapy',
                component: ComponentCreator('/docs/part-4-appendices/normal-lab-values-relevant-to-drug-therapy', 'c63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part-4-appendices/who-essential-medicines-list-abridged',
                component: ComponentCreator('/docs/part-4-appendices/who-essential-medicines-list-abridged', '56c'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

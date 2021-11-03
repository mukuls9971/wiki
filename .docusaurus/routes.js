
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki/astrodao',
    component: ComponentCreator('/wiki/astrodao','a0a'),
    exact: true
  },
  {
    path: '/wiki/blog/archive',
    component: ComponentCreator('/wiki/blog/archive','e07'),
    exact: true
  },
  {
    path: '/wiki/docs',
    component: ComponentCreator('/wiki/docs','7e2'),
    routes: [
      {
        path: '/wiki/docs/Developers/dev-docs',
        component: ComponentCreator('/wiki/docs/Developers/dev-docs','78a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-education',
        component: ComponentCreator('/wiki/docs/Developers/dev-education','80b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-events',
        component: ComponentCreator('/wiki/docs/Developers/dev-events','bf5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-gaming',
        component: ComponentCreator('/wiki/docs/Developers/dev-gaming','b73'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-guides',
        component: ComponentCreator('/wiki/docs/Developers/dev-guides','590'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-overview',
        component: ComponentCreator('/wiki/docs/Developers/dev-overview','5b0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-support',
        component: ComponentCreator('/wiki/docs/Developers/dev-support','ffe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/dev-training',
        component: ComponentCreator('/wiki/docs/Developers/dev-training','fa5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Developers/gaming',
        component: ComponentCreator('/wiki/docs/Developers/gaming','85e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-community',
        component: ComponentCreator('/wiki/docs/End Users/user-community','c02'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-dapps',
        component: ComponentCreator('/wiki/docs/End Users/user-dapps','b5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-earn',
        component: ComponentCreator('/wiki/docs/End Users/user-earn','6b4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-education',
        component: ComponentCreator('/wiki/docs/End Users/user-education','fa5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-events',
        component: ComponentCreator('/wiki/docs/End Users/user-events','d22'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-overview',
        component: ComponentCreator('/wiki/docs/End Users/user-overview','d84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/End Users/user-support',
        component: ComponentCreator('/wiki/docs/End Users/user-support','e52'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Forum/near-forum-guidelines',
        component: ComponentCreator('/wiki/docs/Forum/near-forum-guidelines','c57'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Forum/what-is-the-near-governance-forum',
        component: ComponentCreator('/wiki/docs/Forum/what-is-the-near-governance-forum','02c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Founders/founder-education',
        component: ComponentCreator('/wiki/docs/Founders/founder-education','fb8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Founders/founder-events',
        component: ComponentCreator('/wiki/docs/Founders/founder-events','e57'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Founders/founder-overview',
        component: ComponentCreator('/wiki/docs/Founders/founder-overview','188'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/ecosystem-success/business-development',
        component: ComponentCreator('/wiki/docs/Getting Started/ecosystem-success/business-development','961'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/ecosystem-success/ecosystem-intelligence',
        component: ComponentCreator('/wiki/docs/Getting Started/ecosystem-success/ecosystem-intelligence','a48'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/ecosystem-success/ecosystem-success',
        component: ComponentCreator('/wiki/docs/Getting Started/ecosystem-success/ecosystem-success','19a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/ecosystem-success/README',
        component: ComponentCreator('/wiki/docs/Getting Started/ecosystem-success/README','891'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/ecosystem-success/resources-available',
        component: ComponentCreator('/wiki/docs/Getting Started/ecosystem-success/resources-available','55b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/grants-and-funding',
        component: ComponentCreator('/wiki/docs/Getting Started/grants-and-funding','a4f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/near-token/delegation',
        component: ComponentCreator('/wiki/docs/Getting Started/near-token/delegation','bdf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/near-token/lockups',
        component: ComponentCreator('/wiki/docs/Getting Started/near-token/lockups','a08'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/near-token/README',
        component: ComponentCreator('/wiki/docs/Getting Started/near-token/README','456'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/near-token/token-balance',
        component: ComponentCreator('/wiki/docs/Getting Started/near-token/token-balance','065'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/near-token/token-custody',
        component: ComponentCreator('/wiki/docs/Getting Started/near-token/token-custody','bd6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/near-token/whats-an-nft',
        component: ComponentCreator('/wiki/docs/Getting Started/near-token/whats-an-nft','d61'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Getting Started/resources',
        component: ComponentCreator('/wiki/docs/Getting Started/resources','f70'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Governance/astrodao',
        component: ComponentCreator('/wiki/docs/Governance/astrodao','b11'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Governance/near-forum-guidelines',
        component: ComponentCreator('/wiki/docs/Governance/near-forum-guidelines','bf9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Governance/what-is-the-near-governance-forum',
        component: ComponentCreator('/wiki/docs/Governance/what-is-the-near-governance-forum','8f9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Governance/your-guide-to-daos-on-near',
        component: ComponentCreator('/wiki/docs/Governance/your-guide-to-daos-on-near','ead'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Guilds/guild-community',
        component: ComponentCreator('/wiki/docs/Guilds/guild-community','9b8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Guilds/guild-getstarted',
        component: ComponentCreator('/wiki/docs/Guilds/guild-getstarted','3be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Guilds/guild-overview',
        component: ComponentCreator('/wiki/docs/Guilds/guild-overview','bf4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Guilds/guild-reporting',
        component: ComponentCreator('/wiki/docs/Guilds/guild-reporting','efb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Guilds/guild-support',
        component: ComponentCreator('/wiki/docs/Guilds/guild-support','b77'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/intro',
        component: ComponentCreator('/wiki/docs/intro','619'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Investors/investor-overview',
        component: ComponentCreator('/wiki/docs/Investors/investor-overview','55b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Investors/investor-resources',
        component: ComponentCreator('/wiki/docs/Investors/investor-resources','a02'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Investors/investor-support',
        component: ComponentCreator('/wiki/docs/Investors/investor-support','c4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/News/whats-new',
        component: ComponentCreator('/wiki/docs/News/whats-new','ad3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/News/why-near',
        component: ComponentCreator('/wiki/docs/News/why-near','b89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/analytics',
        component: ComponentCreator('/wiki/docs/Resources/analytics','806'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/contributing',
        component: ComponentCreator('/wiki/docs/Resources/contributing','85e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/faq/integrator-faq',
        component: ComponentCreator('/wiki/docs/Resources/faq/integrator-faq','8ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/faq/onboarding-with-linkdrop',
        component: ComponentCreator('/wiki/docs/Resources/faq/onboarding-with-linkdrop','402'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/faq/README',
        component: ComponentCreator('/wiki/docs/Resources/faq/README','585'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/legal-resources/legal-checklist',
        component: ComponentCreator('/wiki/docs/Resources/legal-resources/legal-checklist','65c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Resources/legal-resources/README',
        component: ComponentCreator('/wiki/docs/Resources/legal-resources/README','756'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Technology/overview-of-near-protocol',
        component: ComponentCreator('/wiki/docs/Technology/overview-of-near-protocol','dd5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Technology/research',
        component: ComponentCreator('/wiki/docs/Technology/research','c4e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Technology/technical-documentation/access-keys',
        component: ComponentCreator('/wiki/docs/Technology/technical-documentation/access-keys','624'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Technology/technical-documentation/README',
        component: ComponentCreator('/wiki/docs/Technology/technical-documentation/README','a2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/staking-overview',
        component: ComponentCreator('/wiki/docs/Validators/staking-overview','026'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-docs/hardware',
        component: ComponentCreator('/wiki/docs/Validators/validator-docs/hardware','4f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-docs/README',
        component: ComponentCreator('/wiki/docs/Validators/validator-docs/README','8f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-docs/validator-economics',
        component: ComponentCreator('/wiki/docs/Validators/validator-docs/validator-economics','0dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-education',
        component: ComponentCreator('/wiki/docs/Validators/validator-education','788'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-events',
        component: ComponentCreator('/wiki/docs/Validators/validator-events','752'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-guides/README',
        component: ComponentCreator('/wiki/docs/Validators/validator-guides/README','b3a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-guides/running-a-validator',
        component: ComponentCreator('/wiki/docs/Validators/validator-guides/running-a-validator','e80'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-guides/running-a-validator-kr',
        component: ComponentCreator('/wiki/docs/Validators/validator-guides/running-a-validator-kr','682'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-guides/running-a-validator-pt',
        component: ComponentCreator('/wiki/docs/Validators/validator-guides/running-a-validator-pt','30a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-support/faq',
        component: ComponentCreator('/wiki/docs/Validators/validator-support/faq','597'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-support/README',
        component: ComponentCreator('/wiki/docs/Validators/validator-support/README','611'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/docs/Validators/validator-training',
        component: ComponentCreator('/wiki/docs/Validators/validator-training','46e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/wiki/',
    component: ComponentCreator('/wiki/','eb2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

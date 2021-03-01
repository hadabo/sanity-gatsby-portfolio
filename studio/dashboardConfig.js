export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603caf0bd579f1bbb27c7253',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zuuzn1ps',
                  apiId: '49fce684-c49e-4c3f-8390-8eaa937ab5dd'
                },
                {
                  buildHookId: '603caf0cbb172b7b4971891f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2bxe7kp4',
                  apiId: 'abae1c61-82b0-4cd5-a5d6-a7ee86df4bd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hadabo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2bxe7kp4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

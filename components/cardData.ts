export interface CardData {
  key: number
  imgUrl: string
  title: string
  description: string
  tags: string[]
}

export const cardData: CardData[] = [
  {
    key: 1,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'AI Jumpstart',
    description:
      'Support professionals in embracing AI and learning the fundamentals of using it in the workplace',
    tags: ['Prompt Engineering', 'AI ethics', 'Generative AI'],
  },
  {
    key: 2,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'Software Engineering',
    description:
      'Create a pipeline of full stack engineers, trained on your tech stack to increase engineering productivity',
    tags: ['Full Stack', 'UI-UX', 'REST APIs', 'Databases', 'CI/CD', 'Testing'],
  },
  {
    key: 3,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'Advanced Analytics',
    description:
      'Equip entry-level data analysts with the technical and business skills to increase data quality, and automate processes...',
    tags: ['Python', 'Excel', 'SQL', 'PowerBI', 'Machine Learning', 'Predictive Analytics'],
  },
  {
    key: 4,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'Applied Analytics Accelerator',
    description:
      'An accelerated program equipping professionals with foundational data and leadership skills to evangelize data-driven change across their organization',
    tags: ['Excel', 'Tableau', 'Power BI'],
  },
  {
    key: 5,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'Strategic Analytics',
    description:
      'Enable business professionals to deliver data driven initiatives, improve storytelling and drive business decisions with data',
    tags: ['Excel', 'Google Sheets', 'Tableau', 'Power BI'],
  },
  {
    key: 6,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'Data Business Accelerator',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
    tags: ['Python', 'Excel', 'SQL', 'PowerBI'],
  },
  {
    key: 7,
    imgUrl:
      'https://cdn.sanity.io/images/6y1mknvo/prod-20240319/b4d8d0691899fe0924ce0d77d41969cfea8a3b97-1500x900.png?w=960&q=75&fit=clip&auto=format',
    title: 'Strategic Analytics',
    description:
      'Enable business professionals to deliver data driven initiatives, improve storytelling and drive business decisions with data',
    tags: ['Excel', 'Google Sheets', 'Tableau', 'Power BI'],
  },
]

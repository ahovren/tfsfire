export type NewsArticle = {
    id: number
    title: string
    excerpt: string
    content: string // HTML string for now
    date: string // ISO yyyy-mm-dd
    image: string
    category: string
  }
  
  export const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'TFS Launches New Website',
      excerpt:
        'TFS Volunteer Fire Department formally announces the launch of its new official website, created to improve public access to information and enhance communication with the community it serves.',
      content: `
        <p>
          The TFS Volunteer Fire Department formally announces the launch of its new official website, created to improve public access to information and enhance communication with the community it serves.
        </p>
        <p>
          The website provides residents and visitors with centralized access to department information, including an overview of services, contact details, department updates, and public resources. The platform is intended to serve as a reliable and authoritative source for official communications from the department.
        </p>
        <p>
          The launch of the website reflects the department’s ongoing commitment to transparency, preparedness, and community engagement. By modernizing its digital presence, the TFS Volunteer Fire Department aims to ensure timely dissemination of information and improve accessibility for the public.
        </p>
        <p>
          The website will be updated on an ongoing basis to reflect department news, operational updates, and relevant public information. Community members are encouraged to visit the site regularly for the most current and accurate information.
        </p>
        <p>
          The TFS Volunteer Fire Department remains dedicated to protecting life and property through professional service, training, and community involvement. The department appreciates the continued support of the community and looks forward to using this platform to strengthen communication and public awareness.
        </p>
      `,
      date: '2026-01-13',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80',
      category: 'Department News',
    },
  
    // Add more articles here later with normal block comments:
    /*
    {
      id: 2,
      ...
    }
    */
  ]
  
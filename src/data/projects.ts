// export type Project = {
//   title: string;
//   description: string;
//   tech: string[];
//   link?: string;
// };

// export const projects: Project[] = [
//   {
//   title: 'Deutsch Car Wash',
//   description:
//     'A service booking platform with dynamic forms, conditional UI flows, and API-driven data handling for a smooth booking experience.',
//   tech: ['React', 'TypeScript', 'Vite', 'Redux', 'Bootstrap'],
//   link: 'https://deutsch.alcyone.in/welcome',
// }
// ,
//   {
//   title: 'Loops',
//   description:
//     'A contact management system with real-time updates, dynamic forms, and API-driven workflows.',
//   tech: ['React', 'Redux', 'Bootstrap', 'Axios', 'WebSockets'],
//   link: 'https://heyloops.com/',
// },
//   {
//     title: 'API Metrics Monitor',
//     description:
//       'Dashboard that visualizes REST API performance, error rates, and uptime using real-time charts and alerting rules.',
//     tech: ['TypeScript', 'Bootstrap', 'SQL', 'React'],
//     link: '#',
//   },
//   {
//     title: 'API Metrics Monitor',
//     description:
//       'Dashboard that visualizes REST API performance, error rates, and uptime using real-time charts and alerting rules.',
//     tech: ['TypeScript', 'Bootstrap', 'SQL', 'React'],
//     link: '#',
//   },
//   {
//     title: 'API Metrics Monitor',
//     description:
//       'Dashboard that visualizes REST API performance, error rates, and uptime using real-time charts and alerting rules.',
//     tech: ['TypeScript', 'Bootstrap', 'SQL', 'React'],
//     link: '#',
//   }
// ];
export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link: string;
}

export const projects: Project[] = [
  // {
  //   title: 'Deutsch Car Wash',
  //   description:
  //     'A service booking platform that allows users to select services, fill dynamic forms, and complete bookings through a smooth and guided flow.',
  //   tech: ['React', 'TypeScript', 'Vite', 'Redux', 'Bootstrap'],
  //   features: [
  //     'Built dynamic and reusable global form components',
  //     'Implemented conditional rendering and validation for better user flow',
  //     'Integrated APIs for fetching and updating booking data',
  //     'Managed service listings and application state using Redux',
  //     'Created responsive UI layouts with Bootstrap 5',
  //   ],
  //   link: 'https://deutsch.alcyone.in/welcome',
  // },
  {
  title: 'Deutsch Car Wash',
  description:
    'A service booking platform with an admin-controlled setup, where wash plans, pricing, and location-based availability are configured by administrators and consumed by end users through a guided booking flow.',
  tech: ['React', 'TypeScript', 'Vite', 'Redux'],
  features: [
    'Built admin UI to create and manage prepaid and unlimited wash plans',
    'Implemented location-based configuration to control available plans for users',
    'Developed dynamic service and plan listings driven by admin-configured data',
    'Created reusable global form components for booking and plan selection',
    'Implemented conditional rendering based on selected location and plan type',
    'Integrated APIs to fetch and update plans, locations, and booking data',
    'Managed application state and booking flow using Redux',
    'Ensured responsive and consistent UI using Bootstrap 5',
  ],
  link: 'https://deutsch.alcyone.in/welcome',
},
  {
  title: 'Loops',
  description:
    'A contact management system that helps users build stronger relationships by organizing contacts, managing interactions, and handling dynamic workflows through an intuitive UI.',
  tech: ['React', 'Redux', 'Axios'],
  features: [
    'Manage and organize contact details with dynamic, configurable fields',
    'Create and handle multi-step forms for contact-related workflows',
    'Assign, select, and filter contacts based on different use cases',
    'Share surveys and links with selected contacts through the platform',
    'Integrated REST APIs for creating, updating, and fetching contact data',
    'Implemented real-time updates using WebSockets for live interactions',
    'Added search, filtering, and pagination for efficient data handling',
    'Built reusable form components to handle complex input flows',
    'Optimized UI performance and state management using Redux',
  ],
  link: 'https://heyloops.com/',
},
{
  title: 'FareCheapo',
  description:
    'An in-house flight booking platform that allows users to search, compare, and book flights through a responsive and user-friendly interface.',
  tech: ['React', 'Redux', 'Axios', 'REST API'],
  features: [
    'Implemented flight search and listing using API-driven data',
    'Added filtering, sorting, and pagination for better search results',
    'Managed booking flow and UI state using Redux',
    'Developed reusable and configurable form components for passenger details',
    'Integrated REST APIs for fetching flight data and booking information',
    'Handled dynamic UI updates based on user selections and API responses',
    'Ensured responsive design and smooth user experience across devices',
  ],
  link: '#', // internal / in-house project
},
{
  title: 'Business360',
  description:
    'An admin-driven React application for managing company policies and documents, where administrators can create, update, and assign documents to specific employees through a centralized interface.',
  tech: [
    'React',
    'TypeScript',
    'Vite',
    'Redux Toolkit',
    'RTK Query',
    // 'Formik',
  ],
  features: [
    'Implemented authentication flows including login, signup, and forgot password',
    'Created reusable global form components using Formik for consistent form handling',
    'Implemented drag-and-drop file upload inputs for document management',
    'Built common listing and table components for API-driven data display',
    'Integrated APIs using RTK Query for data fetching, caching, and updates',
    'Managed application state with Redux and persisted state on refresh',
    'Handled conditional rendering based on admin actions and application state',
    'Ensured responsive layouts and clean component structure using Bootstrap',
  ],
  link: '#', // in-house / internal project
}



];

export interface ProjectType {
    title: string;
    description: string;
    imagePath: string;
    githubLink: string;
    previewLink: string;
}

const projectData: ProjectType[] = [
    {
        title: 'Prompt Central',
        description: 'Full stack NextJS application that allows users to discover, create, and share creative prompts to ask AI models. Complete with NextAuth for user authentification.',
        imagePath: '/images/3.png',
        githubLink: 'https://github.com/JoshRosenfeld10/PromptCentral',
        previewLink: 'https://prompt-central-two.vercel.app/'
    },
    {
        title: 'Blog Posts!',
        description: 'Full stack CRUD application that allows users to create their own blog posts or view others.',
        imagePath: '/images/1.png',
        githubLink: 'https://github.com/JoshRosenfeld10/Blog-Posts',
        previewLink: 'https://posts-project-jr.netlify.app/'
    },
    {
        title: 'Sudoku-Solver',
        description: 'Interactive game of Sudoku that can solve itself.',
        imagePath: '/images/2.png',
        githubLink: 'https://github.com/JoshRosenfeld10/Sudoku-Solver',
        previewLink: '/'
    },
    {
        title: 'Wordle Clone',
        description: 'Clone of the popular New York Times word game, Wordle.',
        imagePath: '/images/4.png',
        githubLink: 'https://github.com/JoshRosenfeld10/WordleClone',
        previewLink: 'https://josh-rosenfeld-wordle-clone.vercel.app/'
    }
]

export default projectData

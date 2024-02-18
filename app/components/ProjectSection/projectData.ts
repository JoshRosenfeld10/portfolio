export interface ProjectType {
    title: string;
    description: string;
    imagePath: string;
    githubLink: string;
    previewLink: string;
}

const projectData: ProjectType[] = [
    {
        title: 'Blog Posts!',
        description: 'Full stack application that allows users to create their own blog posts or view others.',
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
    }
]

export default projectData

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
        description: 'Full stack application that allows the user to create their own blog posts or view others.',
        imagePath: '/images/1.png',
        githubLink: 'https://github.com/JoshRosenfeld10/Blog-Posts',
        previewLink: 'https://posts-project-jr.netlify.app/'
    }
]

export default projectData

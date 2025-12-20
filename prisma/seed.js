const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const en = {
    profile: {
        firstName: 'Abhinandan',
        lastName: 'Mishra',
        fullName: 'Abhinandan Mishra',
    },
    links: {
        resume: 'https://drive.google.com/file/d/1Gsj-Ww_6gSDKAXeiWW3r6K09JVdwHxnu/view',
        github: 'https://github.com/abhinandanmishra1',
        linkedin: 'https://www.linkedin.com/in/abhinandanmishra1/',
        blog: 'https://abhinandanmishra1.hashnode.dev/',
    },
    banner: {
        roles: ['Developer', 'Technical Writer', 'Freelancer', 'Blogger'],
        subtitle: 'I am a Frontend Developer with great interest in JavaScript, React and CSS.',
        image: "https://abhicdn.netlify.app/images/avatar.svg",
    },
    about: {
        subtitle: "I'm a software developer proficient in React, CSS, and JavaScript.",
        description: 'Passionate about creating stunning, user-friendly web applications and always eager to learn and grow.',
    },
    work: {
        projects: [
            { title: 'Portfolio Website', subtitle: 'Personal portfolio website', link: '/', github: 'https://github.com/abhinandanmishra1/portfolio', image: 'https://abhicdn.netlify.app/images/portfolio.png' },
            { title: 'CodersPortfolio', subtitle: 'Platform to create portfolio', link: 'https://codersportfolio.vercel.app/', github: 'https://github.com/abhinandanmishra1/coders-portfolio', image: 'https://abhicdn.netlify.app/images/coders-portfolio.png' },
            { title: 'Leetcode IDE Clone', subtitle: 'It is clone of leetcode IDE', link: 'https://leetcode-ide.vercel.app/', github: 'https://github.com/abhinandanmishra1/leetcode-ide', image: 'https://abhicdn.netlify.app/images/leetcode-ide.png' },
        ],
    },
};

async function main() {
    console.log('Seeding database...');

    // 1. Profile
    await prisma.profile.upsert({
        where: { id: 'default-profile' }, // This won't work with auto() but findFirst + update/create will
        update: {},
        create: {
            name: en.profile.fullName,
            headline: en.banner.roles.join(', '),
            bio: en.banner.subtitle,
            image: en.banner.image,
            resume: en.links.resume,
            github: en.links.github,
            linkedin: en.links.linkedin,
            email: 'abhinandanmishra1@gmail.com', // fallback
        },
    }).catch(async () => {
        // MongoDB doesn't support cuid/cuid2 by default in prisma if we use auto()
        // So if upsert fails due to ID mismatch, let's just create if not exists
        const existing = await prisma.profile.findFirst();
        if (!existing) {
            await prisma.profile.create({
                data: {
                    name: en.profile.fullName,
                    headline: en.banner.roles.join(', '),
                    bio: en.banner.subtitle,
                    image: en.banner.image,
                    resume: en.links.resume,
                    github: en.links.github,
                    linkedin: en.links.linkedin,
                    email: 'abhinandanmishra1@gmail.com',
                }
            });
        }
    });

    // 2. Projects
    for (const project of en.work.projects) {
        await prisma.project.create({
            data: {
                title: project.title,
                description: project.subtitle,
                image: project.image,
                link: project.link,
                github: project.github,
                featured: true,
            },
        });
    }

    // 3. Experience (Mock data based on en.js counters)
    await prisma.experience.create({
        data: {
            role: 'Software Developer',
            company: 'Freelance',
            startDate: new Date('2023-01-01'),
            description: 'Worked on various frontend and fullstack projects.',
            skills: ['React', 'JavaScript', 'Tailwind CSS'],
        },
    });

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

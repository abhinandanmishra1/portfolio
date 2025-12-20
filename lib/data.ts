import prisma from './prisma';
import { unstable_cache } from 'next/cache';

export const getProfile = unstable_cache(
    async () => {
        try {
            // @ts-ignore
            const profile = await prisma.profile.findFirst();
            console.log(profile)
            return profile;
        } catch (error) {
            console.error('Error fetching profile:', error);
            return null;
        }
    },
    ['profile'],
    { revalidate: 3600, tags: ['profile'] }
);

export const getExperiences = unstable_cache(
    async () => {
        try {
            // @ts-ignore
            const experiences = await prisma.experience.findMany({
                orderBy: { startDate: 'desc' },
            });
            return experiences;
        } catch (error) {
            console.error('Error fetching experiences:', error);
            return [];
        }
    },
    ['experiences'],
    { revalidate: 3600, tags: ['experiences'] }
);

export const getFeaturedProjects = unstable_cache(
    async () => {
        try {
            // @ts-ignore
            const projects = await prisma.project.findMany({
                where: { featured: true },
                orderBy: { createdAt: 'desc' },
            });
            return projects;
        } catch (error) {
            console.error('Error fetching featured projects:', error);
            return [];
        }
    },
    ['featured-projects'],
    { revalidate: 3600, tags: ['projects'] }
);

export const getAllProjects = unstable_cache(
    async () => {
        try {
            // @ts-ignore
            const projects = await prisma.project.findMany({
                orderBy: { createdAt: 'desc' },
            });
            return projects;
        } catch (error) {
            console.error('Error fetching all projects:', error);
            return [];
        }
    },
    ['all-projects'],
    { revalidate: 3600, tags: ['projects'] }
);

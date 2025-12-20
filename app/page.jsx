import Home from '../views/Home';
import { Nav } from '../components/Nav';
import { getProfile, getExperiences, getFeaturedProjects } from '../lib/data';

export default async function Page() {
  const profile = await getProfile();
  const experiences = await getExperiences();
  const projects = await getFeaturedProjects();

  console.log({
    profile,
    experiences,
    projects
  })

  return (
    <>
      <Home profile={profile} experiences={experiences} projects={projects} />
      <Nav />
    </>
  );
}

import { getGithubRepositories, getGithubUserData } from '~/lib/github'

export const GithubStats = async () => {
  const { followers, public_repos } = await getGithubUserData()
  const repositories = await getGithubRepositories()
  const stars = repositories.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  )
  return (
    <div className="group relative h-full w-full transform-gpu overflow-hidden rounded-xl bg-[#f7f2f2] duration-500 hover:scale-[.97] dark:bg-[#0d1117]">
      <a
        href="http://github.com/robpitt0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BackgroundPattern />
        <div className="absolute bottom-1 flex flex-row flex-wrap gap-x-6 p-2 sm:gap-x-4 md:gap-x-6">
          <GitHubStatsData label="Stars" value={stars} />
          <GitHubStatsData label="Followers" value={followers} />
          <GitHubStatsData label="Repos" value={public_repos} />
        </div>
      </a>
    </div>
  )
}

const GitHubStatsData = ({
  label,
  value
}: {
  label: React.ReactNode
  value: number
}) => {
  return (
    <div>
      <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">
        {label}:
      </span>
      {value}
    </div>
  )
}

const BackgroundPattern = () => {
  let seed = 1
  function seededRandom() {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
  const colours = ['#39d353', '#0e4429', '#0e4429', '#006d32', '#161b22']
  const days = new Array(62)
    .fill(null)
    .map(_ => colours[Math.floor(seededRandom() * colours.length)])
  return (
    <div className="z-0 grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1 opacity-90">
      {days.map((c, i) => (
        <div key={i} className="size-3 rounded" style={{ background: c }} />
      ))}
    </div>
  )
}

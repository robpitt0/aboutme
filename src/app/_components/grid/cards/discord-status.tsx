import { DiscordLogo } from '@phosphor-icons/react/dist/ssr'

enum status {
  online,
  idle,
  dnd
  //   offline,
}

export type LanyardResponse = {
  data: {
    discord_user: {
      id: string
      username: string
      discriminator: string
      avatar: string
    }
    discord_status: status
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
    listening_to_spotify: boolean
    activities: {
      id: string
      name: string
      type: number
      state: string
      timestamps: {
        end: number
      }
      emoji: {
        name: string
      }
      created_at: number
    }[]
    success: boolean
  }
}

export async function DiscordStatus() {
  const { data }: LanyardResponse = await fetch(
    'https://api.lanyard.rest/v1/users/274521154230812672',
    {
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  ).then(data => data.json())

  return (
    <div className="flex h-36 w-fit items-center justify-center overflow-hidden rounded-xl p-2 text-white">
      <div className="relative flex -rotate-12 items-center justify-center gap-[0.35rem]">
        {/* <DiscordLogoIcon className="w-48 h-48 text-blue-800 absolute top-0" /> */}
        <DiscordLogo
          size="1em"
          className="absolute -bottom-6 -z-50 h-40 w-40 -rotate-45 text-white/35 brightness-50"
        />

        <p className="text-xl font-semibold text-black dark:text-white">
          {data.discord_status}
          <p className="text-sm">(@robpitt0)</p>
        </p>
      </div>
    </div>
  )
}

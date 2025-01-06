import { SpotifyLogo } from '@phosphor-icons/react/dist/ssr'

import { Card } from '../card'
import { getLastFmUserInfo } from '~/lib/lastFm'

export async function SpotifyPlays() {
  const response = await getLastFmUserInfo()

  if (response?.playcount) {
    return (
      <Card
        title="Spotify Plays"
        icon={<SpotifyLogo size="1em" weight="duotone" />}
        content={response.playcount}
      />
    )
  }
}

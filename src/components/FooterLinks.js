import { IconBrandDiscord, IconBrandGithub, IconBrandLinktree, IconBrandX } from '@tabler/icons-react'
import React from 'react'
import { IconLink } from './IconLink'

export function FooterLinks() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <IconLink href="https://x.com/deanslistDAO" icon={IconBrandX} title="Follow us on X" />
      <IconLink href="https://github.com/dean-s-list" icon={IconBrandGithub} title="Follow us on Github" />
      <IconLink href="https://discord.gg/deanslist" icon={IconBrandDiscord} title="Join us on Discord" />
      <IconLink href="https://linktr.ee/deanslistdao" icon={IconBrandLinktree} title="Visit our Linktree" />
    </div>
  )
}

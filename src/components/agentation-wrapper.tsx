'use client'

import dynamic from 'next/dynamic'

const Agentation = dynamic(() => import('agentation'), {
  ssr: false,
  loading: () => null,
})

export default function AgentationWrapper() {
  return <Agentation />
}

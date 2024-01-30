import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Daniel Griffiths - Senior software engineer, student of mathematics, and classical pianist.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={avatarImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Daniel Griffiths. I live in NC, where I write code and make music.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember.
              The house I grew up in was an artistic one, primarily,
              but in hindsight on the second order I was surrounded by mathematicians and engineers (I just didn't notice it).
              I started playing classical piano at 3 and participated in all of the competitions and performances any young musician does.
            </p>
            <p>
              When I was 15 I left home to study with Eric Larsen at the North Carolina School of the Arts where I was a finalist in international competitions
              like the Arthur Fraser International Concerto Competition; it is where I stayed until my time with Barbara Lister-Sink
              where we focused on rehabilitating a repetitive stress injury I sustained during my freshman year of college.
            </p>
            <p>
              I eventually decided to spread my eggs around some other baskets, metaphorically.
              I had never deeply focused on anything aside from classical music,
              in fact, I didn't even own a computer at the time. Nonetheless, I began learning software.
            </p>
            <p>
              The puzzle-y nature of code, and the structure, were two familiar elements I
              could rely on enjoying even when the learning curve felt steep.
            </p>
            <p>
              A few years later and I'm a senior software engineer at a wonderful company with elite peers and I have a deepening understanding of the academic perspective of software in addition to extensive professional experience.
              There is a new fold in my learning; a B.S. in Mathematics I'm currently pursuing.
              These my days look a lot like coding at work and for pleasure, studying math, and relaxing while learning a new Scriabin etude or Rachmaninoff Sonata.
            </p>
            <p>
              When I was managing my repetitive stress injury, with all my eggs in the piano-bucket, there were very few obvious and appealing futures.
              That isn't the case now and all the credit goes to starting from zero, and learning. And then doing it again.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/danielbgriffiths" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/danielgriffiths1182/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:danielbgriffiths@protonmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              danielbgriffiths@protonmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

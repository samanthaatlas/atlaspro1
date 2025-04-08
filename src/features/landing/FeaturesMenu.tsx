'use client';

import Link from 'next/link';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Block Explorer',
    description: 'Real-time blockchain data visualization and exploration.',
    href: '/features/block-explorer'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    title: 'Transaction Tracking',
    description: 'Instant transaction monitoring and analysis.',
    href: '/features/transaction-tracking'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 13h2" />
        <path d="M8 17h2" />
        <path d="M14 13h2" />
        <path d="M14 17h2" />
      </svg>
    ),
    title: 'Smart Contract Analysis',
    description: 'Interactive smart contract auditing and testing.',
    href: '/features/smart-contract-analysis'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    title: 'Network Analytics',
    description: 'Cross-chain insights and network monitoring.',
    href: '/features/network-analytics'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="m19 12 2 0" />
        <path d="m3 12 2 0" />
        <path d="m18.364 5.636-1.414 1.414" />
        <path d="m7.05 16.95-1.414 1.414" />
        <path d="m18.364 18.364-1.414-1.414" />
        <path d="m7.05 7.05-1.414-1.414" />
      </svg>
    ),
    title: 'AtlasInsight Engine',
    description: 'AI-powered pattern detection and threat analysis.',
    href: '/features/atlas-insight'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M12 2a9 9 0 0 1 9 9" />
      </svg>
    ),
    title: 'Heuristics Layer',
    description: 'Advanced wallet behavior analysis and clustering.',
    href: '/features/heuristics'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Dark Web Monitoring',
    description: 'Proactive off-chain threat detection.',
    href: '/features/dark-web-monitoring'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: 'Risk Alerts',
    description: 'Real-time high-risk activity notifications.',
    href: '/features/risk-alerts'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Enterprise Tools',
    description: 'Secure team collaboration with audit trails.',
    href: '/features/enterprise'
  }
];

export const FeaturesMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
      <div className="grid grid-cols-1 gap-4">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="group flex items-start gap-4 rounded-lg border border-border/40 bg-card/50 p-4 transition-colors hover:bg-card/80"
          >
            <div className="text-primary">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 
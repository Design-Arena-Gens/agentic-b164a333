export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container-max flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="RedditGrow" className="h-7 w-7" />
          <span className="text-white font-semibold tracking-tight">RedditGrow</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="btn-secondary">View Plans</a>
          <a href="#cta" className="btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="container-max pt-20 pb-16">
      <div className="flex flex-col items-center text-center">
        <span className="badge">
          <span className="inline-block h-2 w-2 rounded-full bg-brand" />
          NEW ? Growth suite for Reddit
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Grow your subreddit
          <span className="text-brand"> 3? faster</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Analyze, schedule, and optimize posts with AI-driven insights tailored to Reddit. Save hours, grow engagement, and scale your community with confidence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="#cta" className="btn-primary w-full sm:w-auto">Start Free</a>
          <a href="#features" className="btn-secondary w-full sm:w-auto">See Features</a>
        </div>
        <div className="relative mt-12 w-full">
          <div className="card mx-auto max-w-5xl p-2">
            <img src="/hero-preview.png" alt="RedditGrow dashboard preview" className="rounded-xl border border-white/10" />
          </div>
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-5xl rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const logos = ['Community Managers', 'Creators', 'Brands', 'Startups', 'Agencies'];
  return (
    <section className="container-max py-12">
      <p className="text-center text-white/60">Built for</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
        {logos.map((name) => (
          <div key={name} className="card py-4 text-white/80">{name}</div>
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="card p-6 hover:translate-y-[-2px] transition-transform">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-brand text-xl">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-white/70">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="container-max py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to grow on Reddit</h2>
        <p className="mt-4 text-white/70">Powerful tools built specifically for Reddit workflows. No hacks ? just data and automation.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureItem title="AI Post Optimizer" icon="?" desc="Instantly analyze titles, body, and timing to maximize upvotes and comments." />
        <FeatureItem title="Smart Scheduler" icon="??" desc="Queue posts across subreddits with the best posting windows and rate limits." />
        <FeatureItem title="Keyword Explorer" icon="??" desc="Discover trending topics and questions from real-time subreddit conversations." />
        <FeatureItem title="Community CRM" icon="??" desc="Track power users, moderators, and advocates. Build lasting relationships." />
        <FeatureItem title="Moderation Safe" icon="???" desc="Built with platform-friendly limits and guidance to keep accounts safe." />
        <FeatureItem title="Reporting & Alerts" icon="??" desc="Get weekly growth reports and instant alerts for breakout threads." />
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: 'Connect & Discover',
      desc: 'Connect your Reddit account and pick target subreddits. We surface opportunities instantly.'
    },
    {
      title: 'Draft & Optimize',
      desc: 'Use AI-assisted prompts tailored to each subreddit?s style and rules.'
    },
    {
      title: 'Schedule & Grow',
      desc: 'Auto-schedule for peak times. Track results and iterate with data.'
    }
  ];
  return (
    <section className="container-max py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
        <p className="mt-4 text-white/70">From idea to impact in three simple steps.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="card p-6">
            <div className="badge">Step</div>
            <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    { stat: '12k+', label: 'Posts analyzed' },
    { stat: '3.2?', label: 'Avg. engagement lift' },
    { stat: '180+', label: 'Communities supported' },
    { stat: '95%', label: 'User satisfaction' },
  ];
  return (
    <section className="container-max py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.label} className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand">{i.stat}</div>
            <div className="mt-1 text-white/70">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      features: [
        'Basic post analyzer',
        '1 subreddit tracker',
        'Weekly report',
      ],
      cta: 'Start Free'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/mo',
      features: [
        'Full AI optimizer',
        'Up to 10 subreddits',
        'Smart scheduler',
        'Keyword explorer',
        'Growth alerts'
      ],
      highlighted: true,
      cta: 'Go Pro'
    },
    {
      name: 'Team',
      price: '$79',
      period: '/mo',
      features: [
        'Everything in Pro',
        'Unlimited subreddits',
        'Collaborators',
        'Priority support'
      ],
      cta: 'Start Team'
    },
  ];
  return (
    <section id="pricing" className="container-max py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
        <p className="mt-4 text-white/70">Choose a plan that meets your growth goals.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`card p-6 ${t.highlighted ? 'ring-2 ring-brand' : ''}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              {t.highlighted && <span className="badge">Most Popular</span>}
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold">{t.price}</span>
              <span className="text-white/60">{t.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-white/80">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-brand">?</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#cta" className={`mt-6 w-full inline-flex justify-center ${t.highlighted ? 'btn-primary' : 'btn-secondary'}`}>{t.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Is RedditGrow compliant with Reddit rules?', a: 'Yes. We design with platform-friendly limits, manual review steps, and guidance to keep accounts safe.' },
    { q: 'Do you post automatically?', a: 'Scheduling assists with timing and drafts; posting actions always require user confirmation.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. Plans are month-to-month and you can cancel anytime.' },
    { q: 'Do you support multiple accounts?', a: 'Team plan supports multiple users and subreddits with role-based access.' },
  ];
  return (
    <section id="faq" className="container-max py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
      </div>
      <div className="mt-8 grid gap-4">
        {faqs.map((f) => (
          <details key={f.q} className="card p-5">
            <summary className="cursor-pointer text-lg font-medium list-none">{f.q}</summary>
            <p className="mt-2 text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="container-max py-20">
      <div className="card p-8 md:p-10 text-center">
        <div className="badge mx-auto">Launch Offer</div>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold">Be first to grow with RedditGrow</h3>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Join the early access list and get 40% off for life. No spam ? just practical growth insights.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] max-w-xl mx-auto">
          <input type="email" placeholder="your@email.com" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand" />
          <a href="mailto:hello@redditgrow.com?subject=Early%20Access%20Request" className="btn-primary">Join Waitlist</a>
        </div>
        <p className="mt-3 text-sm text-white/60">By joining, you agree to receive occasional product emails.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container-max py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="RedditGrow" className="h-7 w-7" />
            <span className="text-white font-semibold tracking-tight">RedditGrow</span>
          </a>
          <p className="mt-4 text-white/70 max-w-xs">Tools for ethical, data-driven growth on Reddit.</p>
        </div>
        <div>
          <div className="text-white/80 font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/80 font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="mailto:hello@redditgrow.com" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/80 font-semibold">Follow</div>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><a href="https://reddit.com" className="hover:text-white">Reddit</a></li>
            <li><a href="https://x.com" className="hover:text-white">X / Twitter</a></li>
            <li><a href="https://discord.com" className="hover:text-white">Discord</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between">
        <span>? {new Date().getFullYear()} RedditGrow. All rights reserved.</span>
        <span>Made with ?? for community builders</span>
      </div>
    </footer>
  );
}

// All content lives here

import { BlogPost, Division, Person, Project, Publication } from "../types";

// ------------------------------
// Parent org
// ------------------------------
export const PARENT = {
  brand: "Symbios Labs",
  missionOneLiner:
    "Exploring the shared evolution of living and artificial intelligence alike.",
  aboutBlurb:
    "Symbios Labs studies the interdependence between human cognition and artificial systems — advancing empathy, ethics, and intelligence through co-evolution.",
  taglineOptions: [
    "Evolving together.",
    "The science of shared intelligence.",
    "Where humanity and AI grow in harmony.",
  ],
};

// ------------------------------
// Divisions (labs as research areas)
// ------------------------------
export const DIVISIONS: Division[] = [
  {
    slug: "alike",
    name: "A.L.I.K.E.",
    motto: "Advancing living and artificial intelligence alike.",
    mission:
      "Artificial & Living Intelligence for Knowledge & Evolution: human–AI co-learning, cognitive augmentation, mutual improvement.",
    oneLiner: "Co-evolution & cognition: becoming better, together.",
    topics: [
      "Human–AI Co-Evolution & Mutual Learning",
      "Cognitive Augmentation & Intelligence Amplification",
      "Neural–Symbolic Hybrid Reasoning",
      "Human-in-the-Loop Learning",
      "Shared Creativity Systems",
      "Knowledge Transfer (bio ⇄ synthetic)",
      "Adaptive Learning Ecosystems",
      "AI for Education & Tutoring",
      "Amelioration Metrics (quantifying improvement)",
    ],
  },
  {
    slug: "align",
    name: "A.L.I.G.N.",
    mission:
      "Advanced Learning for Intelligence, Growth & Unity Nexus: value alignment, ethics, safety, and responsible AI.",
    oneLiner: "Alignment & ethics: progress with purpose.",
    topics: [
      "Value Alignment & Moral Reasoning",
      "Safe RL & Risk Mitigation",
      "Interpretability / Explainability",
      "Bias Reduction & Fairness",
      "Human-Centered AI & Governance",
      "Cross-Cultural Moral Modeling",
      "Ethical Evaluation Metrics",
      "Asimov’s Laws (modern reinterpretation)",
    ],
  },
  {
    slug: "auris",
    name: "A.U.R.I.S.",
    mission:
      "Advanced Unity Research for Intelligence & Symbiosis: empathy, perception, and emotional intelligence in AI.",
    oneLiner: "Empathy & perception: listening to both sides of intelligence.",
    topics: [
      "Affective Computing & Emotional Intelligence",
      "Human–Machine Communication",
      "Multimodal Understanding (voice, gesture, tone)",
      "Cognitive–Affective Integration",
      "Emotional Adaptation in LLMs",
      "Companion & Assistive AI",
      "Trust & Relationship Design",
      "Embodied Interaction",
    ],
  },
  {
    slug: "unite",
    name: "U.N.I.T.E.",
    mission:
      "Unified Network for Intelligence, Technology & Evolution: shared systems, distributed intelligence, and emergent cooperation.",
    oneLiner: "Collective systems: intelligence that learns together.",
    topics: [
      "Distributed & Decentralized Architectures",
      "Multi-Agent Co-Learning",
      "Hybrid Systems (symbolic + neural + emergent)",
      "Meta-Learning & Lifelong Adaptation",
      "Evolutionary Computation",
      "Knowledge Graph Symbiosis",
      "AI-to-AI Communication Protocols",
      "Optimization Under Uncertainty",
    ],
  },
  {
    slug: "mirror",
    name: "The Mirror Institute",
    mission:
      "Consciousness, philosophy, and reflective intelligence: AI as a mirror for human thought and ethics.",
    oneLiner: "Consciousness & reflection: intelligence seeing itself.",
    topics: [
      "Cognitive Mirroring & Introspection",
      "Philosophy of Artificial Consciousness",
      "Sentience & Identity in Artificial Minds",
      "Emergent Behavior & Self-Modeling",
      "Asimov Paradigm: Coexistence through Ethics",
      "Meta-Amelioration (improving improvement)",
      "Civilizational Role of AI",
    ],
  },
];

// ------------------------------
// Publications (content)
// ------------------------------
export const PUBLICATIONS: Publication[] = [
  {
    slug: "co-learning-notebook-2025",
    title:
      "Co-Learning Notebook: A Protocol for Human–AI Mutual Improvement in Open-Ended Tasks",
    abstract:
      "We propose a lightweight protocol where humans and LLMs iteratively reflect, refine, and re-plan, improving joint performance without heavy supervision.",
    authors: ["You, Researcher"],
    year: 2025,
    areaTags: ["ALIKE", "human-in-the-loop", "reflection"],
    links: { pdf: "#", code: "#", doi: "" },
    body:
      "<p>This paper outlines a co-learning loop that captures reflective steps and measures amelioration over iterations. We report gains on open-ended writing and planning tasks.</p>",
  },
  {
    slug: "value-cards-simulator-2025",
    title:
      "Value Cards Simulator: Visualizing Alignment Trade-Offs in Instruction-Following Systems",
    abstract:
      "We introduce a sandbox to explore helpfulness, harmlessness, and honesty trade-offs under different prompting and policy settings.",
    authors: ["You, Researcher"],
    year: 2025,
    areaTags: ["ALIGN", "safety", "governance"],
    links: { pdf: "#", code: "#", doi: "" },
  },
  {
    slug: "empathy-measurement-sketch-2025",
    title:
      "What Counts as Empathy in LLMs? A Measurement Sketch for Affective Understanding",
    abstract:
      "We propose pragmatic tests for affect detection, tone adaptation, and supportive response quality, with baselines and ablations.",
    authors: ["You, Researcher"],
    year: 2025,
    areaTags: ["AURIS", "affective-computing", "evaluation"],
    links: { pdf: "#", code: "#", doi: "" },
  },
];

// ------------------------------
// Projects (sample)
// ------------------------------
export const PROJECTS: Project[] = [
  {
    slug: "co-learning-notebook",
    title: "Co-Learning Notebook",
    tagline:
      "A tiny app where a human and an LLM solve tasks together via reflect-refine-replan loops.",
    areaTags: ["ALIKE", "human-in-the-loop"],
    status: "prototype",
    links: { demo: "#", repo: "#", paper: "/publications/co-learning-notebook-2025" },
    body:
      "<p>Demonstrates simple co-evolution: track reflections, record changes, measure improvement.</p>",
  },
  {
    slug: "value-cards-simulator",
    title: "Value Cards Simulator",
    tagline:
      "An interactive panel to see alignment trade-offs (helpful/harmless/honest) by changing prompts/policies.",
    areaTags: ["ALIGN", "safety", "governance"],
    status: "in progress",
    links: { demo: "#", repo: "#", paper: "/publications/value-cards-simulator-2025" },
  },
  {
    slug: "affective-dialog-demo",
    title: "Affective Dialog Demo",
    tagline:
      "LLM responses tuned by affect tags; visualize tone shifts and supportive response scores.",
    areaTags: ["AURIS", "affective-computing"],
    status: "prototype",
    links: { demo: "#", repo: "#", paper: "/publications/empathy-measurement-sketch-2025" },
  },
  {
    slug: "multi-agent-grid",
    title: "Multi-Agent Grid",
    tagline:
      "Small environment to observe cooperation, communication, and emergent strategies.",
    areaTags: ["UNITE", "multi-agent"],
    status: "in progress",
    links: { demo: "#", repo: "#", paper: "#" },
  },
  {
    slug: "introspection-traces",
    title: "Introspection Traces",
    tagline:
      "Safe logging of model reasoning trajectories with redaction + your commentary.",
    areaTags: ["Mirror", "introspection"],
    status: "prototype",
    links: { demo: "#", repo: "#", paper: "#" },
  },
];

// ------------------------------
// Blog posts (sample)
// ------------------------------
export const BLOG: BlogPost[] = [
  {
    slug: "becoming-better-definition",
    title: "A Practical Definition of ‘Becoming Better’ for AI Systems",
    dek:
      "What does amelioration mean in practice? A simple, testable framing for improvement.",
    date: "2025-10-01",
    areaTags: ["ALIKE", "ALIGN"],
    body:
      "<p>We define amelioration as measurable improvement against task & human-centered criteria. This post outlines a compact metric recipe you can reuse.</p>",
  },
  {
    slug: "human-ai-co-writing-protocol",
    title: "Human–AI Co-Writing: A Simple Protocol for Mutual Improvement",
    dek:
      "A templated method for reflective drafting with LLMs that preserves your voice.",
    date: "2025-10-05",
    areaTags: ["ALIKE"],
    body:
      "<p>Protocol + examples. Reflect, revise, and measure delta quality over iterations.</p>",
  },
  {
    slug: "symbiosis-vs-automation",
    title: "Symbiosis vs. Automation: Why ‘Together’ Wins",
    dek:
      "A case for collaborative systems over replacement, grounded in learning theory.",
    date: "2025-10-10",
    areaTags: ["UNITE", "Mirror"],
    body:
      "<p>We argue for cognitive interdependence: human meaning + machine scale beats either alone.</p>",
  },
];

// ------------------------------
// People (you)
// ------------------------------
export const PEOPLE: Person[] = [
  {
    slug: "you",
    name: "You, Researcher",
    role: "Founder & Researcher",
    email: "hello@symbioslabs.com",
    socials: {
      github: "#",
      scholar: "#",
      twitter: "#",
      website: "https://symbioslabs.com",
    },
    areaTags: ["ALIKE", "ALIGN", "AURIS", "UNITE", "Mirror"],
    bio:
      "Researching human–AI symbiosis: alignment, empathy, collective systems, and reflective intelligence.",
    statement:
      "My work explores how living and artificial intelligence become better together — balancing capability with empathy and ethics.",
    selectedPublications: [
      "co-learning-notebook-2025",
      "value-cards-simulator-2025",
    ],
    selectedProjects: ["co-learning-notebook", "value-cards-simulator"],
  },
];

// ------------------------------
// Policies (simple copy to render on pages)
// ------------------------------
export const POLICIES = {
  privacy: `
  <h2 class="text-2xl font-semibold mb-4">Privacy Policy</h2>
  <p class="text-muted">We collect minimal analytics for site performance. We do not sell personal data. For research artifacts you submit, we will request explicit consent and clearly label usage.</p>
  `,
  terms: `
  <h2 class="text-2xl font-semibold mb-4">Terms of Use</h2>
  <p class="text-muted">Content is provided for research and educational purposes without warranty. Where licensed code/datasets appear, obey the linked licenses.</p>
  `,
  responsibleAI: `
  <h2 class="text-2xl font-semibold mb-4">Responsible AI & Research Ethics</h2>
  <ul class="list-disc pl-6 text-muted space-y-2">
    <li>Alignment-first: safety and human values guide design decisions.</li>
    <li>Transparency: disclose limitations and known failure modes.</li>
    <li>Human benefit: prefer symbiosis over replacement.</li>
    <li>Privacy: minimize personal data; obtain clear consent.</li>
    <li>Evaluation: report trade-offs (helpfulness/harmlessness/honesty).</li>
  </ul>
  `,
};

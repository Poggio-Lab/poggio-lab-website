"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { TeamSection } from "@/components/team-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { ArrowRight, ArrowUpRight, Brain, Network, Sparkles, Eye, ExternalLink } from "lucide-react"

const researchAreas = [
  {
    icon: Brain,
    title: "Statistical learning theory and limits of learnability",
    description:
      "Foundational research into the mathematical principles of learning and the theoretical boundaries of predictive models.",
  },
  {
    icon: Network,
    title: "Generalization and optimization in high-dimensional models",
    description:
      "Analyzing how complex neural networks generalize and the optimization dynamics in high-dimensional parameter spaces.",
  },
  {
    icon: Sparkles,
    title: "Deep learning and alternative training paradigms",
    description:
      "Exploring novel architectures and training methods that move beyond standard approaches to improve efficiency and robustness.",
  },
  {
    icon: Eye,
    title: "Learning principles shaped by biological constraints",
    description:
      "Investigating how biological systems process information to derive principles for human-like machine intelligence.",
  },
]

const publications = [
  {
    year: "2026",
    papers: [
      {
        title: "Attention Mechanisms in Biological and Artificial Neural Networks: A Comparative Analysis",
        authors: "Chen, S., Torres, M., Zhang, E.",
        venue: "Nature Neuroscience",
        doi: "10.1038/nn.2026.001",
      },
      {
        title: "Predictive Coding as a Unifying Principle for Understanding Intelligence",
        authors: "Chen, S., Park, J.",
        venue: "Annual Review of Neuroscience",
        doi: "10.1146/annurev-neuro-2026",
      },
    ],
  },
  {
    year: "2025",
    papers: [
      {
        title: "Deep Network Models of the Visual Cortex: Successes and Limitations",
        authors: "Sharma, P., Torres, M., Chen, S.",
        venue: "Neuron",
        doi: "10.1016/j.neuron.2025.08.012",
      },
      {
        title: "Sleep-Dependent Memory Consolidation: A Computational Perspective",
        authors: "Zhang, E., Kim, A., Chen, S.",
        venue: "Cell Reports",
        doi: "10.1016/j.celrep.2025.09.043",
      },
      {
        title: "Sparse Distributed Representations in Hippocampal Memory Systems",
        authors: "Park, J., Zhang, E., Torres, M.",
        venue: "PNAS",
        doi: "10.1073/pnas.2025.115",
      },
      {
        title: "Interpretable AI Through the Lens of Neuroscience",
        authors: "Torres, M., Sharma, P., Chen, S.",
        venue: "NeurIPS 2025",
        doi: "10.arxiv.2025.12345",
      },
    ],
  },
  {
    year: "2024",
    papers: [
      {
        title: "Neural Mechanisms of Context-Dependent Decision Making",
        authors: "Chen, S., Zhang, E., Park, J.",
        venue: "Science",
        doi: "10.1126/science.2024.abc",
      },
      {
        title: "Transformer Architectures as Models of Prefrontal Cortex Function",
        authors: "Kim, A., Torres, M., Chen, S.",
        venue: "ICLR 2024",
        doi: "10.arxiv.2024.67890",
      },
      {
        title: "The Role of Temporal Structure in Neural Computation",
        authors: "Zhang, E., Sharma, P., Park, J.",
        venue: "Current Biology",
        doi: "10.1016/j.cub.2024.05.021",
      },
    ],
  },
  {
    year: "2023",
    papers: [
      {
        title: "Biologically Plausible Learning Rules for Deep Neural Networks",
        authors: "Torres, M., Chen, S.",
        venue: "Nature Machine Intelligence",
        doi: "10.1038/s42256-023-001",
      },
      {
        title: "Neural Correlates of Abstract Reasoning in Humans and Machines",
        authors: "Park, J., Kim, A., Zhang, E., Chen, S.",
        venue: "eLife",
        doi: "10.7554/eLife.2023.78901",
      },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Massachusetts Institute of Technology
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-8">
            Poggio Lab
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-pretty">
            At the Center for Biological and Computational Learning (CBCL), we study the theory of learning under physical, computational, and biological constraints. Using a multidisciplinary approach, we investigate when and how learning is possible to better understand the brain and to build better machines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#blog"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Blogs and Updates
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#publications"
              className="inline-flex items-center gap-2 text-foreground px-6 py-3 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              View Publications
            </Link>
          </div>
        </div>
      </section>

      <BlogSection />

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Principal Investigator
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6 text-balance">
                Tomaso Poggio
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Tomaso A. Poggio is a founder of computational neuroscience. He pioneered models of visual perception, bridged neuroscience and machine learning, and helped establish regularization theory and learning theory in vision. His work now focuses on the mathematics of deep learning and visual recognition.

                He has founded, advised, or invested in multiple technology companies, including DeepMind and Mobileye, and mentored leaders such as Christof Koch, Amnon Shashua, and Demis Hassabis. Poggio is the Eugene McDermott Professor at MIT and former co-director of the Center for Brains, Minds, and Machines.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  Google Scholar
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:tp@mit.edu"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  tp@csail.mit.edu
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/assets/HistoryNeuroscienceAutobioTomasoPoggio%20(1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  Autobiography
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/assets/PoggioCV-2020Draft.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  CV
                  <ArrowUpRight className="w-4 h-4" />
                </a>

              </div>
            </div>
            {/* <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden max-w-md mx-auto lg:max-w-none">
                <img
                  src="/people/poggio-240x300.jpg"
                  alt="Tomaso Poggio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Research Focus
            </p>
            {/* <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6 text-balance">
              Pushing the boundaries of what we know about intelligence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our interdisciplinary approach combines experimental neuroscience,
              computational modeling, and machine learning.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Publications Section */}
      <section id="publications" className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Selected Works
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
              Publications
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Selected publications from the Poggio Lab. For a complete list,
              see our <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Google Scholar</a> page.
            </p>
          </div>

          <div className="max-w-4xl">
            {publications.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-semibold text-foreground mb-8 pb-4 border-b border-border">
                  {yearGroup.year}
                </h2>
                <div className="flex flex-col gap-8">
                  {yearGroup.papers.map((paper) => (
                    <article key={paper.doi} className="group">
                      <h3 className="text-lg font-medium text-foreground mb-2 text-balance">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {paper.authors}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-foreground/80">
                          {paper.venue}
                        </span>
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          DOI
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}

# The Missing Foundations of Intelligence
Date: January 10, 2026
By Tomaso Poggio, John Gabrieli

Modern AI works, but we don’t know why. Here is a proposal for the fundamental principles that explain it.

We are living through the fastest expansion of technological capability in human history. Every month, a new AI system appears that writes code, analyzes genomes, composes music, translates languages, and generates images that look indistinguishable from photographs.

From the outside, it looks as though we have cracked the code of intelligence.

But beneath the surface is a paradox: we have astonishing systems, but we do not understand how and why they work as well as they do. If we look at the history of electricity, AI today is somewhere between Volta in 1800 and Maxwell in 1864: we can build useful artifacts, but we do not yet have a theory.

Modern AI is driven largely by engineering intuition and brute force. While this approach works for now, it is likely unsustainable. To build reliable, understandable AI—and to truly com-prehend intelligence itself—we need to move beyond alchemy and toward chemistry.

## The Search for Fundamental Principles

This blog series begins from a simple conviction:

Intelligence—natural or artificial—must rest on fundamental principles, just as physics rests on conservation laws and thermodynamics.

This is not merely philosophical. It is an empirical necessity. Three facts constrain us in the search for principles of intelligence:

1. Intelligence exists in nature. Biological evolution, through a long and blind optimization process, produced human intelligence. Any true theory of intelligence must therefore be compatible with evolution.

2. Artificial intelligence now exists. Transformers, diffusion models, and large associative memories succeed because they exploit deep structural regularities—not because of magic. They are a physical reality. Their success is evidence of underlying principles we have not yet articulated.

3. These two forms of intelligence cannot be unrelated. Evolution discovered natural intel-ligence; engineering discovered artificial intelligence. The principles that explain both are likely to be shared or tightly connected.

From these constraints and a survey of scientific evidence, two mathematical ideas repeatedly emerge as candidates for foundational laws:

1. Sparse Compositionality

2. Genericity

These are not architectural details or engineering heuristics. They are candidates for the laws that make intelligence possible.

## Pillar 1: Sparse Compositionality

The world is not random. Meaningful functions in nature—visual scenes, motor control, language, physics—are built by composing a small number of potentially reusable parts. They are hierarchi-cal, modular, and sparse.

This is the principle of Sparse Compositionality. It explains why deep networks need depth; why convolution works; why transfer learning exists; and how interpretability can arise.

More importantly, sparse compositionality is a necessary consequence of efficient Turing com-putability, as we shall see. It tells us which parametric family should be used for empirical risk minimization (ERM). If the target function is realized by a sparse, bounded-fan-in computation graph, then a deep network with a corresponding sparse compositional architecture is the natural hypothesis class. In this setting, ERM is not searching over arbitrary functions; it is fitting the parameters of a structured computation that mirrors the generative structure of the target function. This is the precise sense in which sparse compositionality provides a representation principle that guarantees that deep neural nets are the right parametrization for learning from input–output data.

Without sparse compositional structure, no finite learner could generalize beyond its training data.

## Pillar 2: Genericity

Even if the world has structure, why can a simple algorithm like gradient descent find it in a massive, high-dimensional space? Why does optimization not get perpetually stuck in poor local minima?

This brings us to the second principle: Genericity.

Genericity is a property of the target functions we are trying to learn. Generic functions do not depend on a special choice of the origin of the input variables: they are qualitatively invariant to shifts of the x variables. Genericity implies that the loss landscapes induced by real-world learning problems are not adversarially pathological. Instead, they contain stable, detectable low-order signals that guide optimization.

Genericity explains why gradients do not vanish everywhere, why stochastic gradient descent is reliable, and why solutions are robust to noise and initialization. While less established than

sparse compositionality, it is a critical conjecture that explains the unreasonable effectiveness of simple optimization algorithms.

## Two Independent but Complementary Principles

Sparse compositionality explains the structure of the world and why it is learnable in principle. Genericity explains the dynamics of learning: why simple algorithms can actually find good solu-tions.

One is a property of the environment. The other is a requirement on the geometry of the learning problem.

Together, they point toward a unified picture of intelligence—one that explains not only how modern AI systems succeed, but why they succeed, and why evolution found similar solutions.

## From Principles to Mathematics

These two principles are not slogans. Each corresponds to precise mathematical properties.

- Sparse compositionality follows from the requirement that the functions we aim to learn are efficiently computable. Under standard computational models (Turing machines, Boolean circuits), efficient computability forces any such function to be realized by a bounded-fan-in, layered computation graph—a sparse compositional DAG.1

- Genericity is more conjectural but equally concrete. It corresponds to assuming that the functions we care about possess sufficiently strong low-order components (for example, non-negligible linear terms) and are stable under small perturbations. These properties ensure informative gradients and robust solutions.

Some of these links are already provable as theorems; others remain working assumptions guiding ongoing research.

## The Road Ahead

Over the coming weeks, this blog will explore:

- the mathematics of sparse compositionality and genericity,

- the role of evolution in developing the first learning systems,

- the computational logic of reflexes, perception, memory, and reasoning,

- the strengths and limitations of modern architectures such as Transformers and Diffusion models.

We are not at the end of the AI story. We are at the end of the beginning.

To build AI we understand—AI we can trust, extend, and reason about—we must stop only engineering and start explaining. This series, based on the book Twenty-Six Lectures on the Foun-dations of Deep Learning, is an invitation to join that search.

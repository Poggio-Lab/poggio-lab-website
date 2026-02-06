# Intelligence Begins with Memory: From Reflexes to Attention
Date: January 15, 2026
By Tomaso Poggio

Why associative memory is the oldest mechanism of intelligence—and still its computational core.

Modern AI systems—transformers, diffusion models, large language models—appear aston-ishingly sophisticated. Yet beneath their apparent complexity lies a very simple and ancient idea:

Store associations between patterns, and retrieve them by similarity.

This is associative memory. It is not merely an engineering trick: it is the first form of intelli-gence invented by evolution, and it remains the conceptual core of modern learning architectures.

This post traces a precise line—from biological reflexes, through classical associative memo-ries, radial basis functions, and kernels, to attention mechanisms.

## 1. Reflexes as Evolutionary Associative Memories

Long before learning in the lifetime of an organism, evolution discovered a basic computational primitive:

When a pattern appears, trigger the associated action.

A reflex is not just hard-wired behavior. It is:

- a memory acquired over evolutionary time,

- encoded genetically,

- implemented as a fixed neural microcircuit.

A withdrawal reflex is essentially a one-entry associative memory:

stimulus \( \longrightarrow \) response.

In modern terms, it is a degenerate content-addressable lookup table with a single stored pair. As nervous systems evolved, synaptic plasticity allowed these associations to be modified dur-ing an organism’s lifetime. But the architecture remained the same:

- detect an input pattern x,

- retrieve an associated output y,

- update the association based on outcome.

Intelligence begins as associative lookup.

## 2. Linear Associative Memories

The earliest mathematical models of associative memory in machine learning made this explicit.

Given stored input–output pairs {( xi , yi )} i=1 , a linear associative memory seeks a matrix A N such that

Axi = yi for all i.

If the input patterns xi are approximately orthogonal (as happens for high-dimensional, noise-like representations), then a simple solution is

\( A=Y X^{\top} \),

where \( X=\left[x_{1}, \ldots, x_{N}\right] \) and \( Y=\left[y_{1}, \ldots, y_{N}\right] \).
This construction appears, in various forms, in:

- Willshaw and Longuet-Higgins' associative matrices,

- Kohonen-style linear associative memories,

- early content-addressable memory models.

These models already implement the essential idea: retrieve outputs by similarity in a high-dimensional space.

## 3. Classical Radial Basis Function Networks

Linear associative memories are brittle. Radial Basis Function (RBF) networks introduce smooth-ness.

A classical RBF network has the form

\[
f(x)=\sum_{i=1}^{n} w_{i} \exp \left(-\frac{\left\|x-\mu_{i}\right\|_{2}^{2}}{2 \sigma^{2}}\right),
\]

where:

- $\mu$i are fixed centers (stored prototypes),

- $\sigma$ is a shared bandwidth,

- distance is Euclidean and isotropic.

This is a smooth associative memory: nearby inputs retrieve similar stored values.

## Kernel interpretation

Equation (1) can be written equivalently as

\( f(x)=\sum_{i=1}^{n} c_{i} K\left(x, \mu_{i}\right), \quad K(x, z)=\exp \left(-\frac{\left\|x-z\right\|_{2}^{2}}{2 \sigma^{2}}\right) \)

Thus classical RBF networks are linear models in a reproducing kernel Hilbert space. They perform content-addressable recall using a fixed similarity kernel.

## 4. Learned Geometry: Metric-Based RBFs

A natural generalization is to learn the geometry in which similarity is measured. Replacing the Euclidean norm with a Mahalanobis metric yields

\[
f(x)=\sum_{i=1}^{n} c_{i} \exp \left(-\frac{\left\|x-t_{i}\right\|_{M}^{2}}{2 \sigma^{2}}\right), \quad\left\|u\right\|_{M}^{2}=u^{\top} M u, M \succeq 0
\]

This is no longer a classical RBF network. It is an associative memory with learned represen-tation space.

Here:

- the prototypes \( t_{i} \) are learned,

	- the metric \( M \) is learned,

- similarity itself becomes adaptive.

This is already representation learning.

## 5. Attention as Normalized Associative Memory

Transformers generalize this idea further.

An attention head computes

\( \alpha_{i j}=\operatorname{softmax}_{j}\left(\frac{q_{i}^{\top} k_{j}}{\sqrt{d}}\right), \quad \operatorname{out}_{i}=\sum_{j} \alpha_{i j} v_{j} \).

This is a normalized, temperature-controlled associative read:

- queries q probe memory,

- keys k define similarity,

- values v are retrieved content.

In fact, softmax attention is a close relative of kernel regression with an adaptive, learned kernel. Unlike RBFs, however, the memory (keys and values) is recomputed at every layer and every time step.

Attention is associative memory with dynamic, learned geometry.

## 6. From Memory to Computation

Stacking associative reads with local nonlinear updates yields a computational system. Each trans-former layer performs:

1. associative read (attention),

2. local update (MLP),

3. write-back to state (residual).

In separate technical work, we show that this pattern is sufficient for universal computation: associative memories combined with local updates are Turing-complete.

## Takeaway

Across biology and machine learning, the same structure appears again and again:

## Intelligence is built on associative memory.

Reflexes, linear associative memories, RBFs, kernel methods, and transformers are not separate ideas. They are successive refinements of a single computational principle: store, retrieve, and recombine memories by similarity.

In the next posts, we examine how sparse compositionality and genericity constrain and enable these memory-based computations.

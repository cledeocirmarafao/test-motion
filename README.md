# Motion Animations Test Project 👾
This project is a collection of React components designed to test and demonstrate various features of the Motion library (formerly Framer Motion) in a Vite + React + TypeScript environment.
It serves as a playground for exploring animations, interactions, and effects such as visibility detection, scroll-based transformations, SVG animations, path morphing, drag snapping, and staggered variants.
The components are built based on examples from Motion's documentation, covering key concepts like hooks (*e.g., useInView, useTransform*), SVG manipulations, and advanced interactions.
Each component is self-contained and can be imported into the main *App.tsx* for testing.

## Purpose
 - Learning and Testing: Ideal for developers learning Motion or debugging specific features.
 - Modular Design: Each test component is isolated, making it easy to extend or modify.
 - Real-World Examples: Reproduces documentation snippets with practical implementations, including fixes for common issues like TypeScript errors and runtime bugs.

## Key Features/Components
Here's a list of the test components included in this project:

1. Visibility Detection (useInView):
Demonstrates detecting when an element enters/exits the viewport.
Changes background color and text based on visibility.
Includes options like amount: 0.5 for partial visibility triggers.

2. Scroll-Based Transformation (useTransform + useScroll):
Applies progressive blur to text as the user scrolls.
Uses scrollYProgress to map scroll position to CSS filters.

3. SVG Animation with Filters (feTurbulence + feDisplacementMap):
Animates an SVG circle with turbulence effects and color/position changes.
Shows how to use Motion for SVG elements and filters.

4. SVG ViewBox Animation:
Animates the viewBox for panning and zooming effects.
Includes examples for "Pan Right" and "Zoom Out" with infinite reverse transitions.

5. SVG Transforms Comparison:
Compares rotation behaviors between CSS-like divs and SVG elements.
Demonstrates transformBox: "view-box" to make SVG rotations intuitive (center-based).

6. Path Morphing (with Flubber):
Morphs between different SVG paths (e.g., lightning to hand to plane) with color transitions.
Handles complex shapes using interpolate from Flubber, with fixes for invalid path errors (e.g., maxSegmentLength: 0.05).

7. Drag with Snap (modifyTarget):
Allows dragging a div that snaps to a 50px grid on release.
Uses dragTransition with inertia and custom target modification.

8. Variants with 'when' (afterChildren):
Animates a list where child items animate first, followed by the parent container.
Supports staggering and order control (e.g., switch to beforeChildren for reverse).

> These components are located in the src/components/ directory (*e.g., VisibilityTest.tsx, ScrollTransformTest.tsx, etc.*). The main *App.tsx* can import and render any of them for demonstration.

## Technologies Used

- React: For building UI components.
- Vite: Fast build tool and development server.
- TypeScript: For type safety and better developer experience.
- Motion: Core library for animations (install via npm install motion).
- Flubber: Helper for SVG path morphing (install via npm install flubber and @types/flubber for types).

## Installation
Follow these steps to set up the project locally:
### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/cledeocirmarafao/test-motion.git

# 2. Acesse a pasta do projeto
cd test-motion

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

```bash
Scripts Disponíveis

npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção

# Testes
npm test             # Executa testes
npm run test:watch   # Modo watch (re-executa ao salvar)
npm run test:coverage # Relatório de cobertura

# Qualidade de Código
npm run lint         # Executa linter
```

```
Important: The component that must be imported into App.tsx whenever you want it to be displayed.
```

Troubleshooting

TypeScript Errors: Ensure @types/flubber is installed for path morphing.
Runtime Errors (e.g., Invalid Path): Adjust maxSegmentLength in useFlubber to a lower value (e.g., 0.02) for complex shapes.
No Animations Visible: Check console for errors; ensure Motion is imported correctly from 'motion/react'.
Browser Compatibility: Test in modern browsers (Chrome, Firefox); Motion uses CSS variables and Web Animations API.

## 📄 Licença
This project is licensed under [Licença MIT](https://opensource.org/).
Visit the page for more details.

## 📬 Contact

<div align="center">

> ### If you'd like to discuss the project or technologies, please contact me.:

  <a href="https://github.com/cledeocirmarafao" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white" alt="Icone do github" />
  </a>
  <a href="https://www.linkedin.com/in/cledeocir-maraf%C3%A3o-267768193/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Icone do linkedin"/>
  </a>
</div>

## ✨ Author

**Cledeocir Marafão** — `Full-Stack Developer [in training]`
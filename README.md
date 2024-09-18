# ![rck logo](rck.png) Quicksketch and RCK (react-canvas-kit v2)

## What is Quicksketch?

[Quicksketch](https://quicksketch.io) is a simple yet powerful multi-collaboration tool for creating system diagrams—think of it as a free, open-source alternative to tools like Miro or Excalidraw. It also serves as a showcase for RCK (react-canvas-kit v2), which I am building from the ground up to improve upon the original [react-canvas-kit](https://reactcanvaskit.com).

## RCK Roadmap

- Flexible Rendering Pipeline

  In V1, the render logic was quite basic. With v2, you'll be able to:

  - Target specific layers.
  - Support offline rendering outside the main thread.
  - Batch redraw calls to fit within a single animation frame, improving overall performance.

* Enhanced Canvas Customization

  v2 gives you full control over the canvas configuration, including:

  - Adjustable screen scaling between devices.
  - Customizable backgrounds (dotted, grid, solid color).
  - The ability to provide custom CSS or image backgrounds.

* Improved UI Integration

  The CanvasContainer no longer takes children directly, which means:

  - Easier management of UI elements like FABs without event propagation issues.

* Other Key Features
  - Support for infinite layers (no longer limited to two)
  - Built-in scrollbars and mini-maps for easier navigation
  - Enhanced touch controls, adding support beyond just mouse and trackpad
  - Offline rendering capabilities for better performance.

## Stay in the Loop

Quicksketch is still very much a work in progress, but feel free to check it out at [Quicksketch](https://quicksketch.io) and follow along as things evolve. With time, I hope to roll out new features and improvements!

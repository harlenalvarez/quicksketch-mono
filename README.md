# Quicksketch

Quicksketch is a straightforward multi-collaboration tool, similar to Miro or Excalidraw. The main idea is to offer a free and easy-to-use platform for creating system diagrams. It’s also an opportunity to showcase the new RCK libraries, which I’m building from scratch as the v2 of react-canvas-kit.
If you're curious about the original version, you can find the V1 documentation at [react-canvas-kit](https://reactcanvaskit.com). The new version introduces several important updates. First, I'm reworking the render pipeline. In V1, the render logic was quite basic, allowing requestRedraw to be called from anywhere. In v2, you'll be able to target specific layers for redrawing, even handle offline rendering (outside of the main thread), and eventually batch redraw calls to fit within a single animation frame for better performance. The goal is to make the rendering more efficient and flexible without needing users to manually manage animation frames.

On the customization front, v2 will give developers more control over the canvas configuration. You'll be able to adjust things like screen scaling between devices, choose between different background types (dotted, grid, or solid colors), and even provide custom CSS or images for the background. A key change is that the CanvasContainer will no longer take children directly, making it easier to manage UI elements like FABs without having to handle event propagation issues.

Other exciting updates include support for infinite layers (a big improvement over V1's two-layer restriction), built-in scrollbars and mini-maps, and improved touch controls, since currently only mouse and trackpad support is available. Offline rendering will also be supported.

Quicksketch is still very much a work in progress, but feel free to check it out at [Quicksketch](https://quicksketch.io) and follow along as things evolve. With time, I hope to roll out new features and improvements!

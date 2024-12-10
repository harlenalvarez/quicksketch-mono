###NX commands to create libs

For pure JS lib use:
`npx nx g @nx/js:lib {name} --bundler=vite --unitTestRunner=vitest --directory=packages/{name} --importPath=@qsketch/{name} --publishable=true`

For React lib use:
`npx nx g @nx/react:lib {name} --bundler=vite --directory=packages --importPath=@qsketch/{name} style=none --publishable=true unitTestRunner=vitest --dry-run`

To add storybooks to a react lib modify the command to:
`npx nx g @nx/react:lib core --bundler=vite --directory=packages --importPath=@qsketch/{name} style=none --publishable=true unitTestRunner=vitest --dry-run --storybook`

# React Native Starter

![CI status](https://github.com/newaperio/react-native-starter/workflows/CI/badge.svg)

![Multiple devices running the React Native Starter app](https://user-images.githubusercontent.com/423798/151121628-bb2b6f20-5ec1-43b0-aed3-70598364ef9b.jpeg)

_Mockup by [Previewed]_

This repo contains the base app we use to get our React Native apps started at [NewAperio].

The goal of this repo is to enable our development teams to start fast with a solid foundation. This app is updated with new releases and includes the boilerplate configuration we typically use when bootstrapping new products.

## Technologies

This project bootstraps the following technologies using our defaults:

- [React Native] for developing cross-platform mobile apps
- [TypeScript] for writing type-safe JavaScript
- [Apollo Client] for declaratively fetching data from a GraphQL API
- [Storybook] for isolating components during development and QA
- [React Navigation] for routing and navigation
- [react-native-svg] for SVG support
- [react-native-config] for exposing environment variables
- [Babel] for next generation JavaScript compilation
- [Metro] for code-bundling
- [Jest] for testing
- [Sentry] for error reporting
- [asdf] for managing runtime versions
- [Tailwind React Native Classnames], a styling toolkit based on [TailwindCSS]
- [FontAwesome], an extensive icon set
- [GitHub Actions] for CI
- A suite of code quality tools:
  - [ESLint] for code linting
  - [Prettier] for code formatting
  - [EditorConfig] to maintain code style across editors

## Demo App

The app that comes with this starter is meant to clearly demostrate different features of the project and should prove useful as a jumping-off point:

- Recommended project layout (components, screens, navigation, etc.)
- Tab bar customizations
- Data fetching from a GraphQL API
- Tailwind configuration
- Using SVG image assets
- Embedding and using fonts
- Writing tests and stories

## Usage

The repo is setup as a [GitHub template] to make it easy to get started.

1. Click the ["Use this template" button]. This will setup a new repo with a clean history.
2. Clone the new repo locally.
3. Run the init script to rename the starter project and do some other housekeeping: `./bin/init.sh MyApp com.mycompany`.
4. Initialize Sentry if you plan to use it (can be done at any time): `npx @sentry/wizard -i reactNative -p ios android`
5. Commit the result: `git add --all . && git commit -m "Initalize starter project"`.

## License

React Native Starter is Copyright © 2022 NewAperio. It is free software, and may be redistributed under the terms specified in the [LICENSE](/LICENSE) file.

## About NewAperio

React Native Starter is built by NewAperio, LLC.

NewAperio is a web and mobile design and development studio. We offer [expert React Native][services] development as part of our portfolio of services. [Get in touch][contact] to see how our team can help you.

Check out our other starter projects:

- [🔥 Phoenix Starter]

[previewed]: https://previewed.app/template/3F40C34E
[newaperio]: https://newaperio.com?utm_source=github
[react native]: https://reactnative.dev/
[typescript]: https://www.typescriptlang.org/
[apollo client]: https://www.apollographql.com/docs/react/
[storybook]: https://storybook.js.org/
[react navigation]: https://reactnavigation.org/
[react-native-svg]: https://github.com/react-native-svg/react-native-svg
[react-native-config]: https://github.com/luggit/react-native-config
[babel]: https://babeljs.io/
[metro]: https://facebook.github.io/metro/
[jest]: https://jestjs.io/
[sentry]: https://sentry.io/welcome/
[asdf]: https://asdf-vm.com/
[tailwind react native classnames]: https://github.com/jaredh159/tailwind-react-native-classnames
[fontawesome]: https://fontawesome.com/
[tailwindcss]: https://tailwindcss.com/
[github actions]: https://github.com/features/actions
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[editorconfig]: https://editorconfig.org/
[github template]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
["use this template" button]: https://github.com/newaperio/react-native/generate
[services]: https://newaperio.com/services/#mobile-development?utm_source=github
[contact]: https://newaperio.com/contact?utm_source=github
[🔥 Phoenix Starter]: https://github.com/newaperio/phoenix_starter

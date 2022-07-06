# ReactNativeStarter

_Use this introductory section to give the project's elevator pitch. Explain the idea. What are we building? Who is it for? What problems does it solve? What are the primary, proprietary aspects of the technology?_

## Preflight

To develop and run this app, a few dependencies are required. To check if you have them installed, run the preflight script:

```sh
./bin/preflight.sh
```

This will report which dependencies, if any, still needs to be installed and configured.

If all dependencies are present, it'll run `asdf` to install language versions.

### Prerequisites

If the preflight script reports any missing executables or you run into any other errors, here are the prerequisites for running the app. Check that you have all of these installed.

1. [asdf], which manages language versions. We recommend [installing with the `git` method][asdf-install]. We also need plugins for the versions specified in `.tool-versions` (the preflight script will install these for you). Don’t forget to [load asdf in your shell][asdf-shell].
    - `gnupg` is [required][node-req] to verify Node.js; `brew install gnupg`
2. [Watchman], a filesystem watcher that will improve your developer experience while working on this project. You can install this with [Homebrew][brew-watchman]: `brew install watchman`.
3. [Xcode], which is required for building the iOS version of the project. The best way to install it is via the [Mac App Store][mas-xcode].
4. [Cocoapods], for managing iOS dependencies. It is recommended to install this using the default system Ruby: `sudo gem install cocoapods`.
5. The Java Development Kit (JDK), version 8 or newer. This can be installed with [Homebrew][brew-jdk]: `brew install --cask adoptopenjdk/openjdk/adoptopenjdk8`.
6. [Android Studio], which is required for building the Android version of the project. You can install this application using [Homebrew][brew-android-studio]: `brew install android-studio`.
    - Be sure to launch Android Studio once it's installed and complete the installation wizard—the defaults are fine.
    - The [Android 10 (Q) SDK][android-10] is required by React Native and not installed by default. Open the SDK Manager from Android Studio (**Tools > SDK Manager**) and install **Android 10 (Q)** if necessary.
    - You'll need some Android tool paths in your `$PATH` — the preflight script can guide you here if necessary.

## Setup

Once you've finished preflight setup, run the setup script:

```sh
npm run setup
```

This will do two things:

1. Run `npm install` to fetch Node.js dependencies
2. Run `pod install` to fetch iOS dependencies

## Running

### Bundling

To start the Metro bundler, run the start command:

```sh
npm start
```

Note: If you run the app without starting Metro, a Metro instance will be started for you in your default terminal app.

### In a Simulator

You can launch the iOS or Android app in a simulator with `npm run ios` or `npm run android`.

## Contributing

Refer to our [contributing guide] for our current standard practices for contributing new features and opening pull requests.

## Project Structure

Whether you're just get oriented to the project or need a helpful reminder of where something should go, here's a list of the most commonly-used project directories.

- `android`: The Android wrapper project.
- `assets`: Static assets such as images and fonts. Each asset type gets a dedicated directory within `assets`.
- `bin`: Shell scripts used to bootstrap and manage the project.
- `ios`: The iOS wrapper project. Contains a `Podfile` to manage iOS dependencies.
- `scripts`: Node.js code that is useful for development, e.g. code generation scripts.
- `src`: The vast majority of the the application code lives in here.
  - `components`: React components that are meant to be used throughout the app.
  - `graphql`: Definitions and types for GraphQL queries, mutations, and subscriptions.
  - `navigation`: React Navigation navigators that define how users move around the app.
  - `screens`: React components representing screens of the app, including their logic, dependencies, and composition.
  - `services`: Tools for interacting with the outside world, e.g. HTTP communication and device storage.
  - `theme`: Code used to shape the overall look and feel of the app, including color definitions and the Tailwind configuration.
  - `utils:` Miscellaneous utility functions for things like formatting, sorting, etc.
- `storybook`: Storybook initialization, addons, and decorators.

The root directory contains the app's entry point (`index.ts`) and root component (`App.tsx`). It also contains configurations for various tools used to build and develop the app.

### Typing

This app is written in TypeScript wherever possible, and new functions should be fully typed. The [TypeScript Language Server] can be integrated into your editor/IDE for on-the-fly type checking (and more!). You can also check types on demand:

```sh
npm run type-check
```

### Testing

This project uses test-driven and snapshot-based development. Tests are colocated with the files they test, i.e. `Button.test.tsx` should live in the same directory as `Button.tsx`.

To run the test suite, use Jest:

```sh
npm test
```

Test run as part of our CI pipeline.

Refer to our [testing guide] for our current standard practices on test-driven development.

### Linting

We use ESLint to ensure code meets our standards for quality and consistency. It's useful to run ESLint in your editor/IDE, but you can also lint the codebase at any time:

```sh
npm run lint
```

ESLint has the capability to fix some linting errors:

```sh
npm run lint-fix
```

Linting runs as part of our CI pipeline.

### Formatting

We use Prettier so that we don't have to think about code formatting. You can set up your editor/IDE to run Prettier on save, but you can also invoke it manually on the entire codebase:

```sh
npm run format
```

If you just want to check if anything is incorrectly formatted, you can do that:

```sh
npm run check-format
```

Formatting is checked as part of our CI pipeline.

### Storybook

Each app-wide React component, i.e. those in `src/components`, should have an associated story that demonstrates the different states and capabilities that component has. Stories are colocated with the components they are for, i.e. `Button.stories.tsx` should live in the same directory as `Button.tsx`.

When you add a new story, run the generator script to add it to the list of stories that gets loaded:

```sh
npm run generate-storybook
```

You can run the Storybook web app locally to more easily interact with the storybook:

```sh
npm run storybook
```

## Template

This app is based on the NewAperio [React Native Starter] project, which is updated from time to time. Refer to that project for documentation and routine updates.

## About NewAperio

ReactNativeStarter is built by [NewAperio], LLC.

[asdf]: https://asdf-vm.com/
[asdf-install]: https://asdf-vm.com/#/core-manage-asdf?id=install
[asdf-shell]: https://asdf-vm.com/#/core-manage-asdf?id=add-to-your-shell
[node-req]: https://github.com/asdf-vm/asdf-nodejs#install
[watchman]: https://facebook.github.io/watchman/
[brew-watchman]: https://formulae.brew.sh/formula/watchman
[xcode]: https://developer.apple.com/xcode/
[mas-xcode]: https://apps.apple.com/us/app/xcode/id497799835?mt=12
[cocoapods]: https://cocoapods.org/
[brew-jdk]: https://formulae.brew.sh/cask/temurin
[android studio]: https://developer.android.com/studio/
[brew-android-studio]: https://formulae.brew.sh/cask/android-studio
[android-10]: https://developer.android.com/about/versions/10/setup-sdk
[contributing guide]: https://github.com/newaperio/guides/blob/master/contributing/README.md
[typescript language server]: https://github.com/typescript-language-server/typescript-language-server
[testing guide]: https://github.com/newaperio/guides/blob/master/testing/README.md
[react native starter]: https://github.com/newaperio/react-native-starter
[newaperio]: https://newaperio.com

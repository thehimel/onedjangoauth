# One Project

Welcome to One!

## Developing

Run your One app in development:

```bash
npm dev
```

## Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

If you encounter version conflicts, use:

```bash
npm install --legacy-peer-deps
```

> This option allows installation while ignoring strict peer dependency rules. 🚀

## Production

To build your app for production:

### Web

```bash
npm build:web
```

### iOS

First, you'll need to generate the native code for your app:

```bash
npm prebuild:native
```

Afterward, follow the instructions printed in the terminal to build and upload your iOS app for distribution.

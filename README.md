# Core

## Getting Started

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
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

## Run the Server

### Development

Run your One app in development:

```bash
npm run dev
```

### Production

To build your app for production:

#### Web

```bash
npm run build:web
```

> This will create the production-ready build for the web version of your app, typically located in the `dist` directory.

#### iOS

First, you'll need to generate the native code for your app:

```bash
npm run prebuild:native
```

Afterward, follow the instructions printed in the terminal to build and upload your iOS app for distribution.

#### Serve

Serve the production build locally:

```bash
npm run serve
```

This will serve the built project on a local server, typically available at `http://0.0.0.0:3000`

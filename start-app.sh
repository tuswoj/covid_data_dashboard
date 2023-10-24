#!/bin/bash

# Install Dependencies
echo "Installing dependencies..."
npm install

# Build app
echo "Building the app..."
npm run build

# Serve the built app with Vite
echo "Serving the app with Vite..."
./node_modules/.bin/vite preview



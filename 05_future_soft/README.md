# Future Soft --- [live](https://astounding-faun-76da14.netlify.app/)

### `npx create-react-app future_soft`

## In this project I use Tailwind in UI design

### Tailwind installation

## STEP-1

### `npm install -D tailwindcss`

### `npx tailwindcss init`

## STEP-2

### add into tailwind.config.js

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## STEP-3

### add into index.css

```json
@tailwind base;
@tailwind components;
@tailwind utilities;
```

###

## Install Hero Icons

### `npm install @heroicons/react`

```json
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500"/>
      <p>...</p>
    </div>
  )
}

```

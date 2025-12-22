# T3-Hdussert

T3-Hdussert is a modern web application built with the T3 stack, leveraging Next.js, TypeScript, and React. The project includes features such as 3D rendering, email sending, and a responsive portfolio showcasing projects.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

- **3D Rendering**: Interactive 3D scenes using `@react-three/fiber` and `@react-three/drei`.
- **Email Sending**: Server-side email functionality with validation using `zod` and ReCAPTCHA verification.
- **TypeScript**: Strongly typed codebase for better developer experience.
- **Next.js**: Server-side rendering, API routes, and optimized performance.

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn (preferred package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/t3-hdussert.git
   cd t3-hdussert
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and configure the required variables. Refer to the [Environment Variables](#environment-variables) section for details.

4. Run the development server:

   ```bash
   yarn dev
   ```

---

## Environment Variables

The application requires the following environment variables:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your ReCAPTCHA site key.
- `RECAPTCHA_SECRET_KEY`: Your ReCAPTCHA secret key.
- `EMAIL_USER`: Gmail email address.
- `EMAIL_APP_PASSWORD`: Gmail App password

Ensure these variables are set in a `.env` file in the root directory.

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
EMAIL_USER=your-email@example.com
EMAIL_APP_PASSWORD=your-emai-app-password
```

---

License
This project is licensed under the MIT License. See the LICENSE file for details.

# Relatronica

Relatronica is an open-source platform combining speculative design, civic technology, and knowledge mapping. Born at CERN in 2024, the project develops tools and curricula to anticipate technological transformations, assess systemic risks, and foster civic empowerment.

## Overview

The platform provides a comprehensive suite of civic tech tools and educational modules:

- **Relatronica Academy**: Interactive courses covering speculative design, artificial intelligence ethics, systemic futures, and civic technology. Includes interactive exercises, module assessments, and verifiable cryptographic certificates.
- **Civic Observatory**: Curated intelligence aggregating independent research, digital rights reports, and policy updates across technology and society.
- **NextHuman Exploration**: Interactive 3D data visualization and exploratory models built with Three.js and React Three Fiber.
- **Probabilistic Forecasting & Deadlines**: Timeline mapping and scenario generation tools for civic foresight.
- **Multilingual Support**: First-class internationalization (English and Italian) powered by `next-intl`.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D & Visualizations**: Three.js, React Three Fiber, React Three Drei, D3 Force
- **Animation**: Framer Motion
- **Internationalization**: next-intl
- **Certificate Verification**: Supabase (server-side cryptographic verification)
- **PDF Generation**: jsPDF

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Relatronica/Relatronica-Website.git
cd Relatronica-Website
npm install
```

### Environment Variables

Copy the example environment configuration file:

```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local` according to your deployment needs:

- `NEXT_PUBLIC_SITE_URL`: Canonical site URL (e.g., `https://relatronica.com` or `http://localhost:3000`).
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Optional Google Search Console verification token.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Optional privacy-first analytics domain.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Optional Google Analytics measurement ID.
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL for certificate issuance and validation.
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key (server-side only; never expose to the client).

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks and Build

Run static analysis and build production bundles:

```bash
# Run ESLint checks
npm run lint

# Compile production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
├── app/                  # Next.js App Router pages, APIs, and metadata routes
├── components/           # Reusable React UI components and layouts
│   ├── academy/          # Academy, lesson viewer, quiz, and certificate components
│   ├── home/             # Homepage sections and bento grids
│   ├── nexthuman/        # 3D interactive canvas components
│   └── ui/               # Core atomic design components
├── data/                 # Course curricula, timelines, and static datasets
├── docs/                 # Extended documentation and architecture notes
├── i18n/                 # Localization configuration and routing
├── lib/                  # Helper utilities, certificate generators, and clients
├── messages/             # Translation dictionaries (it.json, en.json)
├── public/               # Static assets, icons, and logos
└── types/                # Shared TypeScript definitions
```

## Contributing

We welcome contributions from designers, researchers, educators, and developers. Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines, coding conventions, and pull request workflows.

All contributors must respect our [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

For vulnerability disclosures and reporting procedures, consult [SECURITY.md](SECURITY.md).

## License

This project is licensed under the **GNU Affero General Public License v3.0 or later** (AGPL-3.0-or-later). See the [LICENSE](LICENSE) file for complete details.

Under the terms of the AGPLv3, any modifications hosted or deployed across a network must make their complete source code publicly available under the same license terms.

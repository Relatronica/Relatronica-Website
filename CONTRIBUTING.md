# Contributing to Relatronica

Thank you for your interest in contributing to Relatronica. This project exists to advance civic technology, speculative design, and open knowledge for the public interest.

## Code of Conduct

All contributors and maintainers are expected to maintain an inclusive, collaborative, and respectful environment.

## License Terms

Relatronica is licensed under the **GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)**.

By submitting a pull request, you confirm that:
1. Your contributions are your own original work or you have the legal right to license them.
2. You agree that your contributions will be licensed under the AGPL-3.0-or-later license.
3. You understand that any network-accessible service using modified versions of this code must make the corresponding source code available to all network users.

## Development Workflow

1. Fork the repository and create a branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your local environment configuration:
   ```bash
   cp .env.example .env.local
   ```
4. Verify your changes locally before submitting:
   ```bash
   npm run lint
   npm run build
   ```

## Coding and Contribution Standards

- **TypeScript**: All new code must be written in TypeScript with explicit types where appropriate. Avoid `any`.
- **Localization**: User-facing text must be added to translation dictionaries in `messages/en.json` and `messages/it.json`.
- **Styling**: Use Tailwind CSS utilities in line with the existing design system. Avoid arbitrary one-off styles when matching tokens exist.
- **Formatting**: Keep code structured, readable, and consistent with the existing repository layout.
- **Commit Messages**: Write clear and descriptive commit messages following the Conventional Commits specification (e.g., `feat: add module filter to academy`, `fix: correct locale redirect in middleware`).

## Pull Request Guidelines

- Ensure your branch is rebased on the latest `main`.
- Document any new environment variables in `.env.example`.
- Fill out the provided pull request template completely.
- Verify that both linting and build checks succeed prior to requesting review.


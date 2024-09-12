# Secure by Design

## Plan:
1. Set up Git Hook Automation (using Husky):
    - install Husky ✅
    - Add a pre-commit hook to run tests, lint, or format code before committing. ✅

2. Set up GitHub Actions Automation:
    - Trigger a GitHub Action on commit/merge to the main branch that checks for vulnerabilities (e.g., using Snyk, Gitleaks, or CodeQL).

3. Stretch Goal:
    - Containerize the Express app using Docker and add a container security scan (e.g., using Anchore).

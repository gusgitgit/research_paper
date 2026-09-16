# AGENTS.md

## 1. Project Overview & Boundaries
- Purpose: Quantitative Trading Backtesting & Execution Engine (Python 3.11+)
- Core Principles: YAGNI (do not over-engineer), Fail-Fast (raise explicit errors).
- Boundaries:
  - NEVER modify existing API response contracts or DB schemas unless explicitly instructed.
  - DO NOT install new third-party packages without prior confirmation.
  - Preserve existing code comments and operational logic.

## 2. Environment & Commands
- Package Manager: `poetry` (or `pip / venv`)
- Install Dependencies: `poetry install`
- Type Check & Lint: `poetry run ruff check .`
- Run Tests: `poetry run pytest tests/`
- Run Single Test: `poetry run pytest tests/test_risk.py -k <test_name>`

## 3. Workflow & Coding Rules
- Step 1 (Reproduce/Plan): Reproduce issues via failing test cases first.
- Step 2 (Minimal Implementation): Write the minimum code necessary to pass tests. Keep diffs small.
- Step 3 (Validation): Ensure all pytest suites and lint checks are green before submitting PR.
- PR Standards: Title must follow Conventional Commits (`fix:`, `feat:`, `refactor:`).

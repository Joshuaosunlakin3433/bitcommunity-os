# BitCommunity OS

**BitCommunity OS** is a non-custodial Social-Fi infrastructure layer for the Bitcoin Ecosystem. It enables Discord communities to utilize **sBTC**, **STX** and **SIP-010** tokens for tipping, token-gating, and governance without custodial risk.

## 🏗 Architecture

BitCommunity OS utilizes a "Vault & Operator" pattern to ensure security:
1.  **Smart Contracts (Clarity):** Users deposit funds into a non-custodial Vault.
2.  **Indexing (Hiro Chainhook):** Real-time event streaming for instant UI updates.
3.  **Backend (NestJS):** An event-driven API that manages "Allowances" and executes gasless transactions on behalf of users.

## 🚀 Tech Stack

-   **Blockchain:** Stacks
-   **Contracts:** Clarity (SIP-010 Trait Support)
-   **Backend:** NestJS (Node.js) + TypeScript
-   **Database:** PostgreSQL + Prisma ORM
-   **Infrastructure:** Hiro Chainhook

## 📂 Repository Structure

-   `/contracts`: Clarity smart contracts and Clarinet configuration.
-   `/backend`: NestJS API for handling Discord webhooks and Chainhook events.
-   `/frontend`: Next.js dashboard for user wallet management.
-   `/chainhook`: Predicate definitions for the Hiro Indexer.

> **Note on Smart Contracts:**
> We have included a local copy of `sip-010-trait` in `/contracts` to ensure offline testing reliability and CI/CD isolation during the prototyping phase. In the production mainnet deployment, the contract will utilize `impl-trait` pointing to the canonical mainnet deployment via `clarinet requirements`.

## 🗺 Roadmap (Grant Application)

-   **Phase 1:** Smart Contract Development & Security Audits
-   **Phase 2:** NestJS Backend & Chainhook Integration
-   **Phase 3:** Discord Bot Interface & Mainnet Launch

## 💼 Sustainability & Business Model

BitCommunity OS is designed to transition from a grant-funded prototype to a self-sustaining SaaS:
1.  **Open Core:** The smart contracts and bot logic remain open-source.
2.  **Hosted Pro Tier:** We offer a managed version ($30/mo) for communities that require 99.9% uptime and managed Chainhook infrastructure, ensuring the project covers its own OpEx within 12 months.

## 📄 License

Open Source (MIT) - *Building Public Goods for the Stacks Ecosystem.*

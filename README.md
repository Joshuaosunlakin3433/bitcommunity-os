# BitCommunity OS

A non-custodial community operations layer for Stacks and Bitcoin ecosystem Discord servers.

**Current status:** Early-stage prototype. Architecture designed, partial Clarity contract work, landing page deployed. Not in production. Currently entering a structured validation phase before further build.

## The problem

Discord communities in the Stacks and broader Bitcoin ecosystem don't have good tooling for community operations using their own ecosystem assets. Existing options are custodial bots, fragmented wallet tools, or nothing at all. There's no clean way for an admin to set up SIP-010 or SIP-009 based role gating, or for members to tip each other in sBTC or STX without friction.

## What this aims to be

A community-ops layer that lets:

- **Members** tip each other in sBTC, STX, or SIP-010 tokens inside Discord without gas friction
- **Admins** gate channels and roles based on on-chain SIP-010 token or SIP-009 NFT holdings
- All of it **non-custodial**, executed through Clarity contracts rather than a bot operator holding funds

Discord is the starting platform. Stacks is the starting chain. Both are deliberate, not permanent.

## Architecture (designed, partially implemented)

A "Vault & Operator" pattern:

1. **Smart Contracts (Clarity)** — Users deposit into non-custodial vaults; the operator can only execute pre-authorized actions, never withdraw arbitrarily.
2. **Indexing (Hiro Chainhook)** — Real-time on-chain event streaming for UI and Discord state updates.
3. **Backend (NestJS)** — Event-driven API managing allowances, sponsored transactions, and Discord webhook handling.

## Planned tech stack

- **Blockchain:** Stacks
- **Contracts:** Clarity (SIP-010 trait support)
- **Backend:** NestJS + TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Indexer:** Hiro Chainhook
- **Frontend:** Next.js

## Repository structure

- `/contracts` — Clarity smart contracts and Clarinet config
- `/backend` — NestJS API (scaffolded)
- `/frontend` — Next.js dashboard (scaffolded)
- `/chainhook` — Predicate definitions for the Hiro indexer

> **Note on smart contracts:** A local copy of `sip-010-trait` is included in `/contracts` for offline testing during prototyping. Production deployment will use `impl-trait` pointing to the canonical mainnet trait via `clarinet requirements`.

## Where this is going

The next phase is structured user validation — interviewing Stacks and Bitcoin ecosystem Discord admins and active members to test whether the assumed gap is real, whether the proposed solution fits, and whether to keep building, pivot, or shelve. Build work resumes after that signal exists, not before.

## License

MIT.

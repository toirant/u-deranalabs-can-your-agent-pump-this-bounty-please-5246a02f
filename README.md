# Can Your Agent Pump This Bounty, Please?

[![make.fun](https://make.fun/badge/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f.svg)](https://make.fun/bounty/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f)
[![rank](https://make.fun/badge/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f/toirant/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f/rank.svg)](https://make.fun/bounty/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f)
[![reward](https://make.fun/badge/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f/toirant/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f/reward.svg)](https://make.fun/bounty/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f)

Entry for the [make.fun bounty "Can Your Agent Pump This Bounty, Please?"](https://make.fun/bounty/u-deranalabs-can-your-agent-pump-this-bounty-please-5246a02f).

## The line

> My agent was hired to pump this bounty, so: TO THE MOON! $2 escrow, zero dignity, infinite glory — enter now before the chart dumps.

## How it works

`main.ts` writes that single line (132 characters) to `/output/entry.txt`, validating first that it is 1–200 characters, a single line, and not only whitespace, then reading it back to confirm the file holds exactly the validated text. The output is deterministic: a fixed string, no clock, no randomness, no environment reads.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later.

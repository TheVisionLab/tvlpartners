import { LINKEDIN_ARTICLES_URL } from "./site";

export type Article = { tag: string; date: string; title: string; summary: string; url: string };

// Newest first. Dates are editorial; url points to the author's LinkedIn articles until each article link is added.
export const ARTICLES: Article[] = [
  {
    tag: "OUTREACH",
    date: "1 NOVEMBER 2026",
    title: "The handshake is the new cold email.",
    summary: "AI has taken over the inbox. Why human connection is becoming the way through, and what to do about it.",
    url: LINKEDIN_ARTICLES_URL,
  },
  {
    tag: "PROOF OF CONCEPT",
    date: "1 OCTOBER 2026",
    title: "Why so many POCs fail, and how to make yours a success.",
    summary: "POCs drag on, lose focus and fail to prove business value. How to set clear expectations, measure the right metrics and manage timelines.",
    url: LINKEDIN_ARTICLES_URL,
  },
  {
    tag: "PIPELINE",
    date: "1 SEPTEMBER 2026",
    title: "Building a sales pipeline for an AI startup: process, tools and pitfalls.",
    summary: "Define your ICP, apply MEDDPICC in complex deals, pick the tools and track ROI. Plus the traps to avoid, like the POC graveyard and over-automation.",
    url: LINKEDIN_ARTICLES_URL,
  },
  {
    tag: "QUALIFICATION",
    date: "1 AUGUST 2026",
    title: "The hard truth: why MEDDPICC often fails in AI and SaaS sales.",
    summary: "Applied well, it exposes risk early and ties deals to real outcomes. Applied badly, it becomes CRM theater.",
    url: LINKEDIN_ARTICLES_URL,
  },
  {
    tag: "FUNNEL",
    date: "1 JULY 2026",
    title: "The power of a points-based sales funnel: turning MQLs into revenue.",
    summary: "MQL to SQL scoring gives revenue teams clarity, alignment and predictable growth.",
    url: LINKEDIN_ARTICLES_URL,
  },
];

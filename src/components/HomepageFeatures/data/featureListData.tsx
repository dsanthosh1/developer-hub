import React from "react";
import { CardItem, docType } from "../../LandingPage/TutorialCard";
import { MODULES } from "../../../constants";

export const featureList: CardItem[] = [
  {
    title: "Code Repository",
    module: MODULES.code,
    icon: "img/icon_code.svg",
    description: <>Accelerate development with security at scale.</>,
    link: "docs/category/get-started-with-code",
    type: [docType.Documentation],
  },
  {
    title: "Continuous Integration",
    module: MODULES.ci,
    icon: "img/icon_ci.svg",
    description: "Build faster and be more productive.",
    link: "docs/category/get-started-with-ci",
    type: [docType.Documentation],
  },
  {
    title: "Continuous Delivery",
    module: MODULES.cd,
    icon: "img/icon_cd.svg",
    description:
      "More efficient and reliable deployments.",
    link: "docs/category/get-started-with-cd",
    type: [docType.Documentation],
  },
  {
    title: "Infrastructure as Code Management",
    module: MODULES.iacm,
    icon: "img/icon_iacm.svg",
    description: <>Manage your infrastructure as code, end-to-end.</>,
    link: "docs/category/get-started-with-iacm",
    type: [docType.Documentation],
  },
  {
    title: "Feature Flags",
    module: MODULES.ff,
    icon: "img/icon_ff.svg",
    description: <>Roll out new features progressively.</>,
    link: "docs/category/get-started-with-feature-flags",
    type: [docType.Documentation],
  },
  {
    title: "Cloud Cost Management",
    module: MODULES.ccm,
    icon: "img/icon_ccm.svg",
    description: <>Achieve cost transparency and cut costs.</>,
    link: "docs/category/get-started-with-ccm",
    type: [docType.Documentation],
  },
  {
    title: "Security Testing Orchestration",
    module: MODULES.sto,
    icon: "img/icon_sto.svg",
    description: <>Scan code, containers, and live applications.</>,
    link: "docs/category/get-started-with-sto",
    type: [docType.Documentation],
  },
  {
    title: "Software Supply Chain Assurance",
    module: MODULES.ssca,
    icon: "img/icon_ssca.svg",
    description: <>Secure your software supply chain.</>,
    link: "docs/category/get-started-with-ssca",
    type: [docType.Documentation],
  },
  {
    title: "Service Reliability Management",
    module: MODULES.srm,
    icon: "img/icon_srm.svg",
    description: <>Monitor SLOs, track error budgets, and analyze impact of changes.</>,
    link: "docs/category/get-started-with-srm",
    type: [docType.Documentation],
  },
  {
    title: "Chaos Engineering",
    module: MODULES.ce,
    icon: "img/icon_ce.svg",
    description: <>Ensure application and infrastructure resilience.</>,
    link: "docs/category/get-started-with-ce",
    type: [docType.Documentation],
  },
  {
    title: "Continuous Error Tracking",
    module: MODULES.cet,
    icon: "img/icon_cet.svg",
    description: (
      <>Identify, triage, and resolve errors proactively.</>
    ),
    link: "docs/category/get-started-with-cet",
    type: [docType.Documentation],
  },
  {
    title: "Internal Developer Portal",
    module: MODULES.idp,
    icon: "img/icon_idp.svg",
    description: <>A home for developers to create, manage, and explore software.</>,
    link: "docs/category/get-started-with-idp",
    type: [docType.Documentation],
  },
  {
    title: "Software Engineering Insights",
    module: MODULES.sei,
    icon: "img/icon_sei.svg",
    description: <>Use data-led insights to remove bottlenecks and improve productivity.</>,
    link: "docs/category/get-started-with-sei",
    type: [docType.Documentation],
  },
  {
    title: "Harness Platform",
    module: MODULES.platform,
    icon: "img/logo.svg",
    description: <>Deliver software with the highest velocity, quality, security, reliability, and resilience.</>,
    link: "docs/category/get-started-with-platform",
    type: [docType.Documentation],
  },
  {
    title: "Harness Self-Managed Enterprise Edition",
    module: MODULES.platform,
    icon: "img/logo.svg",
    description: <>Install Harness Platform on self-managed Kubernetes cluster.</>,
    link: "docs/category/get-started-with-smp",
    type: [docType.Documentation],
  },
];
---
title: Metasploit scanner reference for STO
description: Scan application instances with Metasploit Framework.
sidebar_label: Metasploit Framework scanner reference
sidebar_position: 230
---

You can scan your application instances and ingest results from Metasploit Framework.


## For more information

import StoMoreInfo from '/docs/security-testing-orchestration/sto-techref-category/shared/_more-information.md';

<StoMoreInfo />


## Security step settings for Metasploit scans in STO

### Target and variant


import StoLegacyTargetAndVariant  from './shared/legacy/_sto-ref-legacy-target-and-variant.md';


<StoLegacyTargetAndVariant />

### Metasploit scan settings

* `product_name` = `metasploit`
* [`scan_type`](/docs/security-testing-orchestration/sto-techref-category/security-step-settings-reference#scanner-categories) = `instance`
* [`policy_type`](/docs/security-testing-orchestration/sto-techref-category/security-step-settings-reference#data-ingestion-methods) = `orchestratedScan` or `ingestionOnly`
* `product_config_name`
   - `metasploit-weak-ssh` &nbsp; &nbsp;  Brute-force test a host for SSH weak ssh/pass
   - `metasploit-openssl-heartbleed`  &nbsp; &nbsp; Check HTTPS (443) for Heartbleed vulnerability
   - `dynamic-by-cve`  &nbsp; &nbsp; Finds and applies Metaspoit module by CVE 
* `fail_on_severity` - See [Fail on Severity](#fail-on-severity).

### Instance scan settings


import StoLegacyInstance from './shared/legacy/_sto-ref-legacy-instance.md';


<StoLegacyInstance />

### Ingestion file


import StoLegacyIngest from './shared/legacy/_sto-ref-legacy-ingest.md';


<StoLegacyIngest />

### Fail on Severity


import StoSettingFailOnSeverity from './shared/step_palette/all/_fail-on-severity.md';



<StoSettingFailOnSeverity />
---
title: "H2A: Seeing Sketchiness in Data"
author: Evan Denmark
date: 2020-08-22
excerpt: "In part two, we examine how the missing data associated with H2A hints
  at potentially nefarious behavior. "
tags:
  - Economy
  - Data
hero: images/totalinstances.png
---
The H2A Visa program has become [increasingly essential](https://blog.civicdatadesignlab.mit.edu/america's-essential-yet-unknown-program:-h2a) to the American food supply chain. Since 2012, the number of participating farms, visa applications, worker hours, and total expense of the program have risen significantly. However, it hasn't all been good. 

“With the explosion in usage of the H2A program … we’ve seen the abuse of the program grow,” said Caitlin Ryland, the Supervising Attorney at the Legal Aid of North Carolina, a nonprofit law firm dedicated to equal access to justice for low income workers.

Farmers employing foreign workers through the H2A program must abide by strict [labor laws](https://www.dol.gov/agencies/whd/agriculture) to ensure that their workers are treated fairly and paid appropriately. However, [recent reports](https://www.buzzfeednews.com/article/kenbensinger/the-pushovers) have shown the potential for worker abuse in the H2A program. Inspired by these multiple reports, we decided to investigate the data surrounding the violations in the H2A program.

According to the US Department of Labor (DOL) Wage and Hour Division’s public data on enforcement, the number of federal H2A violations has dramatically increased in the past two decades. H2A violations may include improper housing requirements, poor working conditions, or improper payment of workers. The data displayed in the graph below shows the number of H2A violations since 2000. In this data, a list of farms that have violated H2A policy, the number of violations per investigation, and the duration of the violations are all provided.



![](https://lh6.googleusercontent.com/0ARiQGoswpnFFuxDilxkwkZzERn3aVo5136q60ljyl3PmjE3K2w6-Ur-3e2akwff0eHQmp7eQ80LNApi5MgIM4oDAHQ_I-o7ouPNSWJ-TYK-XG9A9jWJCbTM0nAvQgztjkdrep4y)*Data provided by the US Department of Labor Wage and Hour Division’s WHISARD data, updated in July 2020.*



This increase in violations comes from an increased reporting of violations in addition to a lack of government oversight of the program.

“Most of \[DOL’s] inspections are complaint driven,” says Ryland, which means that many farms may be committing H2A violations that are not represented in the data.

Despite the growth of the program, the multiple agencies that enforce the H2A laws are significantly lacking. According to Ryland, the North Carolina Department of Labor has only “five or six inspectors for about two thousand labor camp sites.”

To make matters even more complicated, Rylands believes that during COVID, they’re not “doing any onsite investigations.”

Notably, the data displayed shows a significant decrease in violations in recent years. One possible reason is that it can take time to investigate and confirm a set of violations. Ryland said that workers “typically don’t learn about the results of their complaint for about a two year period,” which renders the visualization incomplete.

The lack of government oversight also points to serious questions in the H2A application procedure. In addition to the violation enforcement data, the Department of Labor Employment and Training Administration also publishes the H2A visa applications of each farm. By combining these two datasets, there are some jarring artifacts.

For example, Lewis M. Bailey IV Farms, a Mississippi potato grower, had a total of 180 accepted visa applications in early 2019 to work the fields until November. However, by the end of June, the DOL confirmed 178 violations on the Bailey Farm, resulting in over $325,000 in worker backwages (i.e. over 1 month of pay for 178 workers).

Despite a violation of this magnitude, the DOL approved 230 H2A applications to the Bailey Farm for the August to November harvest on July 9 - only three weeks after the end of the major violation.

Although the data cannot tell us the full story, it does point to potentially glaring missteps by the Department of Labor. The fact that a farm like Bailey Farm can be approved even after a large violation questions forces us to not only question the DOL’s application process but also to wonder how farms respond to violations. That is, after a violation, do farms respect the authority of the DOL?

Of all of the farms who applied for H2A applications in 2019, 2.25% had previously violated H2A policy. With this in mind, we wondered if farms who had previously violated H2A policy tended to violate again. As shown in the below graph, we examined the recidivism - the tendency to reoffend - of farms who have broken H2A protocols at least three times in the last two decades.



![](https://lh4.googleusercontent.com/bqpd3z76Dk0tV2ZlocL9GYSUW_LcmuUu5b0g7mL5B2dQcbZkAst-QU2rqzPlGlwoKgwYXFdedXcZ2Fz2MDI3m8FYQ_JzSNTxCx23rMlM37b12y8dHCIHs-tjusoDfylKm3FZcp2l)



From this data, those multi-violating offenders tended to not offend nearly as bad as before.

In addition to potentially sketchy farms, some law firms (who are contracted by farms to apply for H2A visas) stick out as outliers when examining their rates of violation. For example, over 35% of the nearly 4,000 visas applied for by Farmer, Farmer, & Brown PLLC - a firm based out of Georgia - were contracted by farms who had previously violated H2A policy. Why is is that some law firms are associated with this sketchy behavior? 

As with many data projects, the data is only a single source and in order to understand the full story, deeper investigations must be done. However, these initial investigations show that data can hint at a larger behavior, including a lack of government oversight, a lack of violation reporting, and potentially nefarious behavior by both farms and law firms.

What is evident, however, is the amount of missing data within this realm, and because of the magnitude of it, it can be difficult to grasp the scale of the worker abuse problem by the data alone.
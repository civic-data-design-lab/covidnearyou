---
title: Finding the Critical Mass for COVID Regional Growth
author: Griffin Kantz
date: 2020-06-12T00:00:00.000Z
excerpt: What's the best left bound? Synchronizing COVID death counts by U.S. MSA.
tags:
  - Covid
  - Data
  - Visualization
hero: images/placeholder.png
---
All analyses tracking the regional spread of coronavirus must define a starting point, when a certain early condition triggers the forward measurement of time. That starting point cannot be as simple as the first confirmed COVID case, firstly because testing in the early stage of an outbreak is sparse, and secondly because the progression of the first few infections is tied to the randomness of individuals’ daily interactions.

In New York state, coronavirus [may have arrived more than one month before the first confirmed case](https://www.cdc.gov/mmwr/volumes/69/wr/mm6922e1.htm?s_cid=mm6922e1_w) on March 1, 2020. There, fatalities soared from 1 to nearly 500 in two weeks. Conversely, the Norfolk-Newport News area of Virginia had still not witnessed ten deaths 30 days after its first.

To account for this early-stage uncertainty, while attempting to model the disease's growth in later stages, COVID data analysts measure its growth from a defined threshold of initial cases (or deaths). These chosen thresholds reflect the notion that COVID proceeds to grow in a semi-predictable manner once a **critical mass** has been surpassed.

Different modelers will choose different thresholds. The *[Financial Times](https://ig.ft.com/coronavirus-chart/?areas=usa&areas=gbr&cumulative=0&logScale=1&perMillion=0&values=deaths)* measures new cases or deaths by country from the day 10 cases/day or 3 deaths/day is reached, and cumulative cases/deaths from the day of the 100th case/death. The [data visualization at 91-divoc.com](http://91-divoc.com/pages/covid-visualization/) measures cases by country from the day of the 100th case and deaths from the day of the 10th death; for regions, it uses 20 cases or 5 deaths, respectively; for *per capita* figures, it uses 1 case or death per 1 million people. These amounts correspond with the lower bound of the x-axis on time series graphs.



## What critical mass makes the most sense at a regional level?

Here we examine the [Johns Hopkins CSSE time series dataset](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series) to determine for ourselves (using data up to 5/31/20). We choose to analyze counts of confirmed COVID fatalities, which are more reliable early-stage figures than confirmed COVID cases. (However, deaths are a lagging indicator, and the concept of *critical mass* really pertains to infections.)

First, we group U.S. county-level COVID death counts into the top 100 Census Bureau metropolitan statistical areas (MSAs), which adhere to county boundaries.

Next, we shift the daily figures for each MSA to synchronize the two weeks before and two weeks after the day *X* total deaths were observed, where *X* = 1, 2, 5, 10, 20, 50, 100, 200, 500, 1,000, and 2,000. (Why these amounts? Contagions spread exponentially, and these numbers break the span from 1 to 2,000 into roughly equal logarithmic intervals. As of today, only three MSAs have reached 5,000 total deaths. And why two weeks? That is roughly the duration of a COVID infection.)

Then, for each level of *X*, we create linear regressions for the two weeks before and two weeks after the day of *X* deaths, based on the logarithmic formulae below:

![Equations: log(deaths) = alpha + beta*days + epsilon. Deaths = lambda*e^(beta*days) + epsilon, lambda = e^alpha.](images/covid-19-critical-mass_equations.png)

Below in Chart 1, see an interactive graph for *X* = 1 death.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/3.embed"></iframe>

*Chart 1. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

The data on the right side are extremely divergent, signifying that this threshold is too early in the spread of coronavirus to make a meaningful prediction or comparison of trajectories. Additionally, for this and the next few values of *X*, any data that would appear on the left side of the graph are inscrutable, since zero values cannot be calculated logarithmically and must therefore be discarded.

Higher values of *X* are where we can make more useful before/after comparisons. Below are the last six values of *X*, visualized.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/5.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/7.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/9.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/11.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/13.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/15.embed"></iframe>

*Charts 2-7. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

We can calculate the mean square error (MSE) of the *before* and *after* regression lines to the observed counts. A low MSE means that the observations fit well around the regression line, indicating some uniform predictability. For the first few values of *X*, the MSE is lower on the *before* (left) side than on the *after* (right) side. For larger *X*, the opposite is true: the MSE of *after* is lower.

What happens at the point where the MSE of the *after* side becomes less than that of the *before* side? This means that the near future from *X* deaths is finally more predictable than the near past. Let’s see where that point occurs:

<iframe width="500" height="500" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/17.embed"></iframe>

*Chart 8. Mean square error and degrees of freedom.*

In the bottom half of this graphic, we see how the *before* MSE surpasses the *after* MSE just shy of *X* = 50 deaths. This implies that the growth in the COVID fatality rate truly becomes comparable between urban regions after the 50th death. Measuring from the 100th or 200th death enables even more accuracy, but a longer starting delay may needlessly discard weeks of data that could otherwise be informative.

See how both MSE curves decrease sharply towards the right edge. This is an artificial improvement in accuracy—reflected in the low degrees of freedom in the top graph—owing to the rarity of MSAs reaching those high death counts to date.



## In conclusion

This analysis shows how the growth in COVID fatalities in U.S. urban regions reaches a consistent pace at some time around the 50th death. This is an important finding for comparisons between regions and future COVID time-series data visualizations.

Download our data tables for this article here. \[GitHub link]
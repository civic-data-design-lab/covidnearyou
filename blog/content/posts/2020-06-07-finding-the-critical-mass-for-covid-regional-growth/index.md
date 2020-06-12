---
title: Finding the Region-Level Critical Mass for COVID
author: Griffin Kantz
date: 2020-06-12T00:00:00.000Z
excerpt: What's the best left bound? Synchronizing COVID death counts by U.S. MSA.
tags:
  - Covid
  - Data
  - Visualization
hero: images/placeholder.png
---
In tracking the regional spread of coronavirus, a modeler must define a starting point, when a certain early condition triggers the forward measurement of time. That starting point cannot be as simple as the first confirmed COVID case, firstly because testing in the early stage of an outbreak is relatively unreliable, and secondly because the progression of the first few infections is tied to the randomness of individuals’ daily interactions.

In New York state, coronavirus [may have arrived more than one month before the first confirmed case](https://www.cdc.gov/mmwr/volumes/69/wr/mm6922e1.htm?s_cid=mm6922e1_w) on March 1, 2020. There, confirmed fatalities soared from 1 to nearly 500 in two weeks. Conversely, the Norfolk-Newport News area of Virginia had still not witnessed ten deaths 30 days after its first.

To account for this early-stage uncertainty, while attempting to model the disease's growth in later stages, COVID data analysts measure its growth from a defined threshold of initial cases (or deaths). These chosen thresholds reflect the notion that COVID proceeds to spread in a semi-predictable manner once a **critical mass** has been surpassed.

Different modelers will choose different thresholds. The *[Financial Times](https://ig.ft.com/coronavirus-chart/?areas=usa&areas=gbr&cumulative=0&logScale=1&perMillion=0&values=deaths)* measures new cases or deaths by country from the day 10 cases/day or 3 deaths/day is reached, and cumulative cases/deaths from the day of the 100th case/death. The [data visualization at 91-divoc.com](http://91-divoc.com/pages/covid-visualization/) measures cases by country from the day of the 100th case and deaths from the day of the 10th death; for regions, it uses 20 cases or 5 deaths, respectively; for *per capita* figures, it uses 1 case or death per 1 million people. These amounts correspond with the lower bound of the x-axis on time series graphs.

## What critical mass makes the most sense at a regional level?

Here we examine the [Johns Hopkins CSSE time series dataset](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series) to determine for ourselves (using data up to 5/31/20). We choose to analyze counts of confirmed COVID fatalities, which are more reliable early-stage figures than confirmed COVID cases. (However, deaths are a lagging indicator, and the concept of *critical mass* really pertains to infections.)

First, we group U.S. county-level COVID death counts into the top 100 most populous Census Bureau metropolitan statistical areas (MSAs), which adhere to county boundaries. The largest of these is New York-Newark-Jersey City and the smallest in our list is Chattanooga.

Next, we shift the daily figures for each MSA to synchronize the two weeks before and two weeks after the day *X* total deaths were observed, where *X* = 1, 2, 5, 10, 20, 50, 100, 200, 500, 1,000, and 2,000. (*Why these amounts?* Contagions spread exponentially, and these numbers break the span from 1 to 2,000 into roughly equal logarithmic intervals. As of today, only three MSAs have reached 5,000 total deaths. *And why two weeks?* That is roughly the duration of a COVID infection.)

Then, for each level of *X*, we create regressions for the two weeks before and two weeks after the day of *X* deaths, based on the linear formula and its exponential transformation below:

![Equations: log(deaths) = alpha + beta*days + epsilon. Deaths = lambda*e^(beta*days) + epsilon, lambda = e^alpha.](images/covid-19-critical-mass_equations.png)

(*What do these parameters mean?* α and β are the y-intercept and slope of the regression, whereas ε is the residual error. *What is a regression?* In short, an approximation of the data as a trendline plus error. The regressions are important for a later step.)

Below in Chart 1, see an interactive graph for *X* = 1 death.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/3.embed"></iframe>

*Chart 1. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

The data on the right side are extremely divergent, signifying that this threshold is too early in the spread of coronavirus to make a meaningful comparison between trajectories. Additionally, for this and the next few values of *X*, any data that would appear on the left side of the graph are inscrutable, since zero values have an infinitesimal logarithmic value and must therefore be discarded. [Some approaches in public health research](https://www.annualreviews.org/doi/full/10.1146/annurev-publhealth-040119-094437) use methods like synthetic minority oversampling to correct for such constraints, but these are not necessary for our purposes.

Higher values of *X* are where we can make more useful before/after comparisons. Below are some selected values of *X*, visualized.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/5.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/9.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/15.embed"></iframe>

*Charts 2-4. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

The error of the regression lines is what draws our attention. We can calculate the mean square error (MSE) of the *before* and *after* regression lines to the data. A low MSE means that the observations fit well around the regression line, indicating some uniformity. For the first few values of *X*, the MSE is lower on the *before* (left) side than on the *after* (right) side. For larger *X*, the opposite is true: the MSE of *after* is lower.

What happens at the point where the MSE of the *after* side becomes less than that of the *before* side? This means that the near future from *X* deaths is finally more consistent than the near past. Let’s see where that point occurs:

<iframe width="500" height="500" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/17.embed"></iframe>

*Chart 5. Degrees of freedom (top) and mean square error (bottom) for each value of* X*.*

In the bottom panel of this graphic, we see how the *before* MSE curve surpasses the *after* MSE curve just shy of *X* = 50 deaths. This implies that the fatality curves have lost most of their early-stage variability around the time of the 50th death. After this point, they behave more consistently—not totally in lockstep, in fact far from it, but more consistently than at any point before.

See how both MSE curves decrease sharply on the far right side of the graph. Here, error is unexpectedly low. This is an exogenous improvement in the regression's precision owing to the rarity of cities reaching those high COVID death counts to date. The decreasing availability of data is reflected in the downward trend of the curves in the top panel, showing degrees of freedom. If more U.S. urban regions were suffering COVID death counts that severe, we would see the *before* MSE curve trend further and further upwards.

## What we can learn

This analysis shows how the growth in COVID fatalities in U.S. urban regions reaches a "critical mass" and loses its early-stage variability at some time around the 50th death. Chart 5 implies that measuring from the 100th or 200th death could enable even more precision, but bear in mind the passage of time: a longer starting delay may needlessly discard weeks of data that could otherwise be informative. Comparison does, after all, include identifying differences.

This is an important finding for comparative analysis and future COVID time-series data visualizations. Yet, we must caution against overstating the rigor of this analysis. We are not epidemiologists and this is not a professional epidemiological study. We have regressed over the variable of time but not over variables of human behavior or systems factors. The way we use the term "critical mass" is different from the way it is used elsewhere. Hopefully this analysis, albeit rough, can impart some mathematical basis to the assumptions underlying future analysis.

Download our data tables for this post from [here](https://github.mit.edu/kantz/COVID-critical-mass).
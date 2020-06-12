---
title: Finding the Region-Level Critical Mass for COVID
author: Griffin Kantz
date: 2020-06-12T00:00:00.000Z
excerpt: When does the early phase end and the growth phase begin? Synchronizing
  COVID death counts by U.S. MSA.
tags:
  - Covid
  - Data
  - Visualization
hero: images/covid-19-critical-mass_graphic.png
---
### **The Importance of the Starting Point**

When comparing how different metropolitan areas have been affected by the coronavirus, it is often useful to compare the COVID-related death toll over time. Because COVID was introduced to each city at different times, it is necessary to define a starting point in order to compare cities equally. Although one may think that the natural place to start is the city's first recorded death, it can be advantageous to define the starting point at varying death totals to allow COVID data analysts to model and predict the disease’s impact. Due to the unreliable nature of testing at the beginning of the pandemic and the random behavior of those who initially contracted the virus, varying the start point can allow for better predictability of future deaths.

In New York state, where COVID[may have arrived more than one month before the first confirmed case](https://www.cdc.gov/mmwr/volumes/69/wr/mm6922e1.htm?s_cid=mm6922e1_w)on March 1, 2020, confirmed fatalities soared from 1 death to nearly 500 in just two weeks. Conversely, the Norfolk-Newport News area of Virginia had still not witnessed ten deaths one month after its first confirmed fatality.

To account for this early-stage uncertainty, COVID data analysts measure the death toll from a defined threshold - the starting point. Because COVID deaths are semi-predictable once acritical masshas been reached, it becomes easier to compare the impact of the virus between metropolitan areas.

Different modelers will choose different thresholds. The[Financial Times](https://ig.ft.com/coronavirus-chart/?areas=usa&areas=gbr&cumulative=0&logScale=1&perMillion=0&values=deaths) measures deaths by country from the day 3 deaths per day was reached. The [data visualization at 91-divoc.com](http://91-divoc.com/pages/covid-visualization/) measures deaths by country from the day of the 10th death; for regions, it starts at 5 deaths.

## What critical mass makes the most sense?

In our data analysis, we examined the[Johns Hopkins CSSE time series dataset](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series)(up to 5/31/20) to determine how varying the death starting point affects the predictability of the disease in the future . We chose to analyze counts of confirmed COVID fatalities, which are more reliable early-stage figures than confirmed COVID cases.

First, we grouped U.S. county-level COVID death counts into the top 100 most populous metropolitan statistical areas (MSAs) according to the US Census Bureau, which adhere to county boundaries. By population, the largest is New York-Newark-Jersey City and the smallest is Chattanooga.

Next, we determined relevant death thresholds to test -X= 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, and 2000. Due to the exponential spread of the virus, these numbers break the span from 1 to 2000 into roughly equal logarithmic intervals.

We then shifted the daily figures for each MSA back two weeks - roughly the duration of a COVID infection - in order to see the impact before and after the starting threshold.

To determine the effectiveness of each threshold, we created regressions for the two weeks before and after the starting point day ofXdeaths, based on the linear formula and its exponential transformation, which are described below:

![Equations: log(deaths) = alpha + beta*days + epsilon. Deaths = lambda*e^(beta*days) + epsilon, lambda = e^alpha.](images/covid-19-critical-mass_equations.png)

Here, α is the y-intercept, β the slope of the regression and ε the residual error. In short, a regression is an approximation of the data as a line of best fit. After calculating the line, we are able to determine the mean square error (MSE), which is a value that determines how different the data is from the line. The lower the error, the better the line of best fit.

Below in Chart 1, see an interactive graph for *X* = 1 death.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/3.embed"></iframe>

*Chart 1. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

When *X* = 1 (the day of the first death), the data on the right side diverge greatly, signifying that the death threshold occurs too early in time to meaningfully predict and compare death trajectories. Additionally, for this and the next few values ofX, any data that would appear on the left side of the graph are inscrutable, since zero values have an infinitesimal logarithmic value and must therefore be discarded.

We found that when using higher starting point thresholds, we were able to make more useful comparisons between our data before and after the start point. In particular, we found that a starting point of 50 deaths began to show higher levels of regression, meaning that MSAs tend to follow the same trajectories after 50 deaths. Increasing our starting point even higher to 2000 deaths shows even greater regression, but limits the number of data points because few MSAs have reached 2000 deaths.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/5.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/9.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/15.embed"></iframe>

*Charts 2-4. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

The mean square error value draws our attention because it allows us to understand how closely the observations fit around the regression line. We can calculate the MSE of the observationsbeforeandafterthe starting point in time by comparing to the lines of best fit. A low MSE implies that the observations fit the regression line well, indicating that the line is a good predictor of the data. For the first few values ofX, the MSE is lower on the before(left) side than on the after(right) side. For larger *X*, the opposite is true: the MSE ofafteris lower.

The point in which the MSE of the right side becomes less than the MSE of the left side indicates that the future is more correlated than the past. In the tests we performed, this point occurs just shy of *X* = 50, as shown in the above graphic.

<iframe width="500" height="300" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/19.embed"></iframe>

*Chart 5. Mean square error for each value of* X*.*

The data shown in this graphic imply that the fatality curves have lost most of their early-stage variability around the time of the 50th death. After this point, they behave more consistently—not totally in lockstep, in fact far from it, but more consistently than at any point before. As the death threshold increases, the MSE continues to decrease, indicating that as X increases, the future death toll is more predictable, regardless of the metropolitan area.

## What we can learn

This analysis shows how the growth in COVID fatalities in U.S. urban regions reaches a "critical mass" and loses its early-stage variability at some time around the 50th death. The MSE chart implies that increasing the starting death threshold enables even more precision, but comes at a price: a longer starting delay may needlessly discard weeks of data that could otherwise be informative.

This is an important finding for comparative analysis and future COVID time-series data visualizations. Yet, we must caution against overstating the rigor of this analysis. We are not epidemiologists and this is not a professional epidemiological study. We have regressed over the variable of time but not over variables of human behavior or systems factors. The way we use the term "critical mass" is different from the way it is used elsewhere. Hopefully this analysis, albeit rough, can impart some mathematical basis to the assumptions underlying future analysis.

**Download our data tables for this post[here](https://github.mit.edu/kantz/COVID-critical-mass).**
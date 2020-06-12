---
title: The Importance of the "Starting Point" in Tracking COVID
author: Griffin Kantz
date: 2020-06-12
excerpt: ""
tags:
  - Covid
  - Data
  - Visualization
hero: images/covid-19-critical-mass_graphic.png
---
When comparing how different regions have been impacted by the coronavirus over time, it is important to define a "starting point" in the spread of the virus from which future observations can be measured. Although one may think that the natural place to start is the timepoint of a region's first recorded COVID case or fatality, this can lead to improper or uninformative region-to-region comparisons. Testing at the beginning of a local COVID outbreak can be seriously unreliable, and the spread of the disease from the first handful of cases to the next is tied to the [idiosyncrasy of people's daily behaviors](https://www.cdc.gov/mmwr/volumes/69/wr/mm6915e1.htm).

In New York state, where COVID [may have arrived more than one month before the first confirmed case](https://www.cdc.gov/mmwr/volumes/69/wr/mm6922e1.htm?s_cid=mm6922e1_w) on March 1, 2020, confirmed fatalities soared from 1 death to nearly 500 in just two weeks. Conversely, the Norfolk-Newport News area of Virginia had still not witnessed ten deaths one month after its first confirmed death. 

COVID metrics between different afflicted regions appear to begin behaving in a predictable manner once the disease has reached a critical mass and begun spreading widely. To account for early-stage uncertainty, COVID data analysts measure the disease's spread from a defined threshold (or starting point). 

Different modelers will choose different thresholds. The *[Financial Times](https://ig.ft.com/coronavirus-chart/?areas=usa&areas=gbr&cumulative=0&logScale=1&perMillion=0&values=deaths)* measures new cases or deaths by country from the day 10 cases/day or 3 deaths/day was reached, and cumulative cases/deaths from the day of the 100th case or death. The [data visualization at 91-divoc.com](http://91-divoc.com/pages/covid-visualization/) measures from the day of the 100th case or the 10th death; for regions, it starts at 20 cases or 5 deaths.

## What threshold makes the most sense?

In our data analysis, we examined the [Johns Hopkins CSSE time series dataset](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series) (up to 5/31/20) to determine how varying the choice of starting point affects the precision of forecasts. We chose to analyze counts of confirmed COVID fatalities, which are more reliable early-stage figures than confirmed COVID cases. (However, deaths always lag cases by up to two weeks.)

First, we grouped U.S. county-level COVID death counts into the top 100 most populous Census metropolitan statistical areas (MSAs), which adhere to county boundaries. By population, the largest of these is New York-Newark-Jersey City and the smallest is Chattanooga.

Next, we shifted the daily figures for each MSA to synchronize two weeks before and two weeks after the day *X* total deaths was reached, where *X* = 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, and 2000. (*Why these amounts?* Contagions spread exponentially , and these numbers break the span from 1 to 2,000 into roughly equal logarithmic intervals. As of today, only three MSAs have reached 5,000 total deaths. *And why two weeks?* That is roughly the duration of a COVID infection.)

To determine the effectiveness of each threshold, we created regressions (line of best fit) for the two weeks before and after the starting point day of *X* deaths, based on the linear formula and its exponential transformation, which are described below:

![Equations: log(deaths) = alpha + beta*days + epsilon. Deaths = lambda*e^(beta*days) + epsilon, lambda = e^alpha.](images/covid-19-critical-mass_equations.png)

Here, α is the y-intercept, β the slope of the regression and ε the residual error. After calculating the line, we are able to determine the mean square error (MSE), which is a value that determines how different the actual data is from the calculated line. The lower the error, the better the line of best fit.

Below in Chart 1, see an interactive graph for *X* = 1 death.

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/3.embed"></iframe>

*Chart 1. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

When *X* = 1 (the day of the first death), the data on the right side diverge greatly, signifying that the death threshold occurs too early in time to meaningfully predict and compare death trajectories. Additionally, for this and the next few values of *X*, any data that would appear on the left side of the graph are inscrutable, since zero values have an infinitesimal logarithmic value and must therefore be discarded.

We found that when using higher starting point thresholds, we were able to make more useful comparisons between our data before and after the start point. In particular, we found that a starting point of 50 deaths began to show higher levels of regression, meaning that MSAs tend to follow the same trajectories after 50 deaths. Increasing our starting point even higher to 2000 deaths shows even greater regression, but limits the number of data points because few MSAs have reached 2000 deaths.  Below are the plots for *X* = 50, 200, and 2000. As the starting point threshold increases, fewer cities hit the minimum threshold. 

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/5.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/9.embed"></iframe>

<iframe width="500" height="400" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/15.embed"></iframe>

*Charts 2-4. Rendered in R, ggplot2, and Plotly. Hover over points to see more information.*

The mean square error value draws our attention because it allows us to understand how closely the observations fit around the regression line. We can calculate the MSE of the observations before and after the starting point in time by comparing to the lines of best fit. A low MSE implies that the observations fit the regression line well, indicating that the line is a good predictor of the data. For the first few values of *X*, the MSE is lower on the *before* (left) side than on the *after* (right) side. For larger *X*, the opposite is true: the MSE of *after* is lower.

The point in which the MSE of the right side becomes less than the MSE of the left side indicates that the future is more correlated than the past. In the tests we performed, this point occurs just shy of *X* = 50, as shown in the above graphic.

<iframe width="500" height="300" frameborder="0" scrolling="no" src="//plotly.com/~GriffinK/19.embed"></iframe>

*Chart 5. Mean square error for each value of* X*.*

The data shown in this graphic imply that the fatality curves have lost most of their early-stage variability around the time of the 50th death. After this point, they behave more consistently —  not in total lockstep, but more consistently than at any point before. As the death threshold increases, the MSE continues to decrease, indicating that, as *X* increases, the future death toll is more predictable, regardless of the metropolitan area.

## What we can learn

This analysis shows how the growth in COVID fatalities in U.S. urban regions reaches a "critical mass" and loses its early-stage variability at some time around the 50th death. The MSE chart implies that increasing the starting death threshold enables even more precision, but comes at a price: a longer starting delay may needlessly discard weeks of data that could otherwise be informative.

This is an important finding for comparative analysis and future COVID time-series data visualizations. Yet, we must caution against overstating the rigor of this analysis. We are not epidemiologists and this is not a professional epidemiological study. We have regressed over the variable of time but not over variables of human behavior or systems factors. The way we use the term "critical mass" is different from the way it is used elsewhere. Hopefully this analysis, albeit rough, can impart some mathematical basis to the assumptions underlying future analysis.

Download our data tables for this post [here](https://github.mit.edu/kantz/COVID-critical-mass).
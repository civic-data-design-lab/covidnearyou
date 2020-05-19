---
title: Covid-19 Tests and Inequality
author: Zhuangyuan (Yuan) Fan
date: 2020-05-18T00:00:00.000Z
tags:
  - General
  - Covid
hero: images/image1.png
---
###### \[Chart 1. html, current image1 ]

*Chart 1 Caption. Graph* 

*shows the changes of test per capita and percentage of positive tests returned. The size of the circle indicate the median household income*

## Introduction

[New York City was slow to respond to COVID-19.](https://www.newyorker.com/magazine/2020/05/04/seattles-leaders-let-scientists-take-the-lead-new-yorks-did-not)It took the city over a month to shift testing resources toward places that were suffering most: lower income neighborhoods and households. How can we do better?

## Background

Many recent reports are suggesting a widening divide between the rich and the poor in the American society brought by the Covid-19 pandemic. In the few states and cities that have released the breakdown of fatalities, we observe an clear uneven pattern - low income communities have been much harder hit by the disease than higher income communities. We also know that widespread testing is essential to both helping infected individuals and also containing the virus at a regional level. Several recent studies have attempted to analyze if testing follows the same patterns of inequality across income groups.  Borjas, G. J. (2020) and Schmitt-Grohé (2020) both began with a similar hypothesis: that testing resources prioritize high-income regions. Both studies used zip code level data in New York City, but the two studies had different conclusions. Borjas finds that people residing in poor neighborhoods were less likely to be tested than people residing in rich neighborhoods using data from April 5th, while Schmitt-Grohé finds that the distribution of Covid-19 tests was equal across income brackets with accumulated data from April 2nd to April 13th. It seems from a comparison of these two studies, that the key condition was ***time***.

## Study Results

These confounding conclusions motivated our team to re-examine the relationship of Covid-19 testing, income levels, and time. In our study, we compare the zip code level testing and confirmed cases data from April 1st to May 4th in New York City. The results comply with the previous mentioned two studies. Low-income zip codes show a higher fraction of positive testing results across time. While the early April data shows testing distribution was leaning towards higher income zip code, this trend reversed itself over time in the last month.

![](images/image2.png "New York City Median Household Income and % Positive Cases Per Test")

![](images/image4.png "New York City Median Household Income and Test Per Capita ")

\[Chart 2, 3 we could covert these all into interactive charts]

From here, we wanted to go one step further and understand and visualize the geospatial distribution of testing and income. We divided the median household income and the testing rate per capita into quintiles. We assigned each quintile a score from 1 to 5, 1 representing the lowest quintile and 5 representing the highest quintile of each dataset. We then combined these scores and created a map that illuminates where this trend is happening. A score of 10 represents high incomes and high testing rates, while a score of 2 represents lowest income and lowest testing rates. In the map (Graph 4.1) we can see the extreme color of blue and red diminishing over time between early April and early May. However, there are still places that remain at score 2.

Again, if we plot positive per test rate by quantile against the test per capita by quantile (Graph 4.2), we see a series map with extremely red indicating highest positive per test return rate while still lacking test per capita. The lighter color indicates a very low positive per test rate but high test per capita rate. These maps uncover the fact that even with the trend reversing, we still have many zip codes that are left behind.



\[Maps]

## Conclusion

We don’t know what might have driven the testing resources to move towards lower income zip codes from April to May. Is our healthcare system simply responding to the number of confirmed cases? If so, what prolonged the process of distributing more resources to those zip codes that obviously suffered the most even at the very beginning? Working remotely is a convenience only afforded to high income populations; those who perform the city’s essential services—sanitation, food services and delivery, cab drivers, transit workers—predominantly live in lower income areas. Cities must be concerned foremost with the health of these essential workers, especially as cities are considering reopening in the coming months, to maintain a stable transition and avoid a second wave of the virus.

## Reference:

\
\[1] Borjas, G. J. (2020).*Demographic determinants of testing incidence and COVID-19 infections in New York City neighborhoods*(No. w26952). National Bureau of Economic Research.

\[2] Schmitt-Grohé, S., Teoh, K., & Uribe, M. (2020).*Covid-19: Testing Inequality in New York City*(No. w27019). National Bureau of Economic Research.
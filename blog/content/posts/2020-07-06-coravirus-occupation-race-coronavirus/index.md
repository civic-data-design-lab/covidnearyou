---
title: Coronavirus, Occupation, Race, & Coronavirus
author: Griffin Kantz
date: 2020-07-13
tags:
  - Covid
  - Mapping
hero: images/casespercapita_20200703.png
---
The connection between COVID-19 and the health of the economy is obvious. Yet, the direct cause & effect relationship between the two is intricate to measure, because it is neither one-dimensional nor unidirectional.

Here are two striking animated maps illustrating this asymmetrical relationship. First is a map representing daily new confirmed coronavirus cases per capita in the U.S. by county from March 1, 2020 to July 6, 2020 (a one-week trailing average to account for regular fluctuations).

![Animated map of new coronavirus cases per capita in the U.S. (seven-day rolling average).](images/casespercapita.gif)

*Map 1. Daily new confirmed coronavirus cases per capita (one-week trailing average), United States, 3/1/2020-7/6/2020. Produced with QGIS and Photoshop.*

Here it was important to represent cases in the vertical dimension as well as choropleth fill to highlight counties both large and small.

This second animated map displays the unemployment rate by county from Feb. 1, 2020 to June 1, 2020. The Bureau of Labor Statistics releases unemployment figures for each month, which we assign to the first day of the following month and approximate linearly for all other days. Preliminary figures for May were released last week. Figures for Puerto Rico are not available for April or May, so the territory was not included here.

![Animated map of unemployment in the U.S.](images/unemployment.gif)

*Map 2. Unemployment rate, United States, 2/1/2020-6/1/2020. Produced with QGIS and Photoshop.*

Scrutinize these two maps in close comparison with each other. Their timeframes are offset by one month, but they cover the recent surges in each variable. Notice the incredible differences in the regions most affected by coronavirus (and in what order) versus those affected by high unemployment.

Coronavirus cases per capita first peaked in a handful of urban hot-spots (New York, NY; New Orleans, LA; Detroit, MI; Cincinnati, OH; Albany, GA), then spread to an entirely different set of rural hot-spots (the Oklahoma panhandle; Iowa and Southern Minnesota; Northeast Arizona; and several extreme spikes in the Midwest and South), and finally experienced a surge across the entire Sun Belt which is still ongoing.

Unemployment, meanwhile, demonstrated a ubiquitous surge across the entire country, with Las Vegas, NV, and the entirety of Hawai'i and Michigan particularly impacted.

If coronavirus is the clear precursor to the economic crisis, why do we witness these regional differences, and why do they seem to transcend political jurisdictions? Beginning our inquiry from these maps leads directly to some initial hypotheses.

### Race

![](images/race.png "Map of percent non-white population, United States.")

*Map 3. Percent non-white population, United States, U.S. Census Bureau. Produced with QGIS.*

[Race](https://www.nytimes.com/interactive/2020/07/05/us/coronavirus-latinos-african-americans-cdc-data.html) appears to correlate significantly with the areas experiencing the largest coronavirus surges. The [Black Belt](https://en.wikipedia.org/wiki/Black_Belt_in_the_American_South) in the South and the expansive cluster of Native American reservations (particularly the [Navajo Nation](https://navajotimes.com/coronavirus-updates/covid-19-across-the-navajo-nation/)) in the Southwest appear to be epicenters of large outbreaks. Counties along the U.S.-Mexico land border, where many migrant laborers work often without being reflected in Census figures, have also been sites of outbreaks. Structural inequities in healthcare, workplace conditions/protections, infrastructure, and crisis preparedness almost certainly contributed to the case severity in these regions. These vectors of vulnerability have also contributed to disparities in unemployment, although it is difficult to observe this at the county level. The chart below is from a recent [report](https://www.epi.org/publication/black-workers-covid/) by the Economic Policy Institute covering "two of the most lethal preexisting conditions for coronavirus--racism and economic inequality".

<iframe width="100%" height="802" src="https://www.epi.org?p=197235&view=embed&embed_template=charts_v2013_08_21&embed_date=20200712&onp=193246&utm_source=epi_press&utm_medium=chart_embed&utm_campaign=charts_v2" frameborder="0"></iframe>

### Occupation Type

Intertwined with race, differences in occupation type also serve to distort the economic burden of coronavirus. Manufacturing and front-line service jobs are more exposed to infection, as well as more susceptible to layoffs (due the combination of the shutdowns, thinner profit margins, and looser workplace protections). Three of the counties (seen clearly in [Iowa](https://siouxlandnews.com/news/coronavirus/buena-vista-county-tops-national-list-for-fastest-growing-covid-19-hotpost), [Indiana](https://www.indystar.com/story/news/environment/2020/04/27/cass-county-coronavirus-cases-spike-county-home-meat-plant/3033246001/), and [Nebraska](https://journalstar.com/lifestyles/health-med-fit/health/dakota-county-one-of-the-nations-fastest-growing-coronavirus-hot-spots/article_c91b8158-776f-56fa-a550-e98dd89a68fe.html) in the first map) reaching the highest new-cases-per-capita rates throughout the pandemic are sites of Tyson Foods meat processing plants, although these particular outbreaks did not happen to result in layoffs. These occupational dynamics are suspected to be responsible for the unemployment surges in [Hawai'i](https://uhero.hawaii.edu/covid-19s-uneven-impact-on-businesses-and-workers-results-from-a-uhero-chamber-of-commerce-hawaii-survey/), [Michigan](https://www.brookings.edu/blog/the-avenue/2020/06/04/why-covid-19-hit-michigan-so-hard/), and [Nevada](https://www.npr.org/sections/coronavirus-live-updates/2020/05/28/864398303/the-sheer-volume-is-hard-to-capture-unemployment-in-nevada-soars-to-historic-hig), states which are home to large tourism, manufacturing, and accommodations industries, respectively. Differences in occupation type correlate strongly with race, and the same Economic Policy Institute [report](https://www.epi.org/publication/black-workers-covid/) mentioned above covers how Black workers disproportionately serve in vulnerable industries.

<iframe width="100%" height="637" src="https://www.epi.org?p=193254&view=embed&embed_template=charts_v2013_08_21&embed_date=20200712&onp=193246&utm_source=epi_press&utm_medium=chart_embed&utm_campaign=charts_v2" frameborder="0"></iframe>

### Incarceration

Lastly, the extreme per-capita spikes appearing in rural [Arkansas](https://wreg.com/news/small-arkansas-county-dealing-with-rise-in-covid-19-cases/), [Ohio](https://www.marionstar.com/story/news/local/2020/04/25/marion-prison-ohio-coronavirus-outbreak-seeping-into-larger-community/3026133001/), and [Tennessee](https://www.wkrn.com/community/health/coronavirus/trousdale-county-leads-us-in-virus-cases-per-capita-due-to-prison/) in the first map happen to be in counties home to large prisons. Coronavirus has posed a profound threat to the incarcerated, a threat which [some policy officials](https://www.prisonpolicy.org/virus/virusresponse.html) are taking steps to counteract. Hear & read the statements from the inmates of one Maryland jail afflicted by coronavirus [here](https://www.gaspingforjustice.org/).

This is only an abbreviated overview of the dynamics at play here, and each of them could be the subject of countless studies. Together, they create an image of a self-sustaining crisis with intricate cause-&-effect relationships. The diagram below summarizes our Lab's thoughts on how these pandemic vectors are interdependent. In it we also attempt to show the difficulties in reconciling data of phenomena occurring at different spatial scales: regional and local.

![Diagram of relationships between coronavirus, occupation type, new unemployment, and race/income.](images/covid-19-theoretical-framework_20200624.png)
---
title: Missing Racial Data in COVID-19 Reporting
author: Brian Williams
date: 2020-07-31
tags:
  - Covid
  - Health
  - Race
  - Visualization
  - Data
hero: images/newplot.png
---
**Missing Racial Data in COVID-19 Reporting**

In the past six months, hospitals, clinics, and medical institutions across the United States have conducted millions of COVID-19 tests. The data from the tests has been made publicly available through multiple avenues for public use. [The Covid Tracking Project](https://covidtracking.com/), a volunteer organization launched fromThe Atlantic, has collected and published metadata to accompany the testing data. One such piece of metadata: race.

When analyzing the reported race data, I’ve noticed that some states report race data much more consistently and thoroughly than others. This prompted me to dig into why this is, why a testing center does or does not report race, and how the state, county, municipal, and lab policies vary with regards to collecting and reporting race information.

As a part of the CDDL’s Missing Data Project, this investigation tries to tackle just that: the missing data that is inherent in reported health data. By trying to highlight this missing data, we may be able to better illuminate issues within this larger system.

**At First glance.**

Below is a graphic representing the racial breakdown of positive cases in each U.S. state and territory over time, as data is made available.

\[insert bar graph]

**Notes:** 

It’s an interactive visualization! (1) Use the options in the top right to start/pause the animation, or even select states to compare percentages over time. You can highlight one racial category (like Asian or white) and see those individual trends in the states over time. This is a very useful feature! 

I urge you to pay attention to the *Unknown* category as percentages move over time. **Notice these states and territories in particular:** North Dakota (ND), New York (NY), Puerto Rico (PR), Texas (TX), Northern Marianas (MS), and Virgin Islands (VI). These regions do a particularly poor job in reporting race in their testing results.

When investigating, I wondered “What’s the functional difference between the *Other* designation and the *Unknown* designation?” In the context of the other racial and ethnic categories: *American Indian or Alaska Native, Asian, Black or African American, Latinx, Native Hawaiian or Other Pacific Islander*, and *White*, the *Other* category doesn’t give any description of value more than the *Unknown* category. And in some states, reported race data seems to switch categories - from *Unknown* to *Other* - after a certain date. Therefore, I decided *Other* will be treated as *Unknown* for the purposes of this project. Regardless, it speaks to how “missing data” is pervasive throughout the healthcare system.

**The Bigger Picture**

As of July 26th, there were 4.2 million positive COVID-19 tests in the United States, however, only about 2.2 million of those cases have race data associated. TheOthercategory is purposefully **not** considered to be a race designation in this calculation because of how it differs descriptively from *Multiracial*. (2)

In other words, for any given COVID test, you could flip a coin to determine whether the patient’s race is known. With that level of (un)certainty, I ask: what aren’t we seeing? What could all this missing racial data mean for real COVID testing results? And how is it impacting our communities?

From various [sources](https://www.nytimes.com/interactive/2020/07/05/us/coronavirus-latinos-african-americans-cdc-data.html), we know that the pandemic impacts varying demographics differently, notably, disproportionately impacting Black and Latinx communities. To that end, how accurately can we create solutions or policy decisions to alleviate and support these communities with only 50% certainty of data?

In the below visualization, the known percentages of cases with reported race is plotted against each state’s testing per capita. (3) The plot is animated to show how each state has progressed over time.

\[insert animated scatter plot]

**Notes:**

Another interactive visualization! Use the options in the top right to pan around the graph and select states to highlight their path over time. You can also select multiple states with Shift+Select for easy comparisons. Hover over each state bubble for more relevant data. You can press each category name to only view states of that category as well.

The size of each state bubble represents its total positive tests. So a state with more cases will be represented as a larger bubble than a state with fewer cases in this visualization.

**Categories**

\[Increasing, Decreasing, and Constant]

States are categorized by whether this “known percentage” factor has increased, decreased, or remained relatively constant from the first time data is available for that state to the latest data available. In order for a state to be considered “increasing,” it would need to increase by 5 or more percentage points. Similarly, “decreasing” states are those that decreased by 5 or more percentage points. “Constant” states are those that lie in the middle.

For example, if a state’s “known percentage” is 69.7% on it’s earliest date and on it’s latest date it’s 85.4%, the state will be placed in the “Increasing” category which is labeled green in the visualization.

**Discussion**

The motivation to use testing per capita as a metric rather than absolute state population was because we thought the rate of reporting race could be affected by the total number of tests, which correlates with a state’s population. Rather, we were interested in comparing states with similar tests per capita as that could correlate better with similar testing practices.

*Category: Highly Impacted States*

We expected states with large amounts of total positive tests (states like Arizona, California, Florida, Texas, and New York) to have very low amounts of race data reported compared to other states. We suspected that as people flooded into testing locations and the states’ testing per capita increased, some aspects of the testing process would give way. As testing locations made operational decisions to keep the testing process optimized and safe for patients and medical staff, we thought patient identification would be overlooked from the strain of this increased testing density.

Looking back at this, we weren’t necessarily wrong! But considering how the state bubbles fluctuate over time and how scattered they are (suggesting little correlation between reported race data and testing density), we understand there are other variables contributing to discrepancies in reported race data other than just the impact of rising testing density.

Nonetheless, here are some interesting numbers:

As of July 26th,

* The percent of cases that have race data in those **five** highly impacted states: 32.81%
* The percent of cases that have race data in every state and territory: 51.75%
* The percent of cases that have race data in the non-vulnerable states: 66.29%

In Arizona, California, Florida, Texas, and New York, for every 3 cases, only 1 case has race data reported, but in every other region in the United States combined, 2 out of 3 cases have race data reported. Yet, when you combine these two sets, the national average moves to 1 out of 2 cases having race data reported. This means that around half of all COVID-19 cases in the United States are in these **five, most impacted** states.

*Category: Increasing - Green*

**Arizona (AZ)**, Connecticut (CT), Delaware (DE), Georgia (GA), Illinois (IL), Louisiana (LA), Massachusetts (MA), Maryland (MD), Maine (ME), Michigan (MI), Missouri (MO), Nebraska (NE), New Hampshire (NH), New Jersey (NJ), Nevada (NV), Pennsylvania (PA), Virginia (VA), Vermont (VT), and Washington (WA) fall into this category.

Generally, green should represent positive trends as these states are reporting more race data over time.

*Category: Decreasing - Red*

Alaska (AK), Alabama (AL), Arkansas (AR), Colorado (CO), District of Columbia (DC), **Florida (FL)**, Hawaii (HI), Iowa (IA), Idaho (ID), Indiana (IN), Minnesota (MN), Mississippi (MS), Montana (MT), North Carolina (NC), Oklahoma (OK), Oregon (OR), Rhode Island (RI), South Carolina (SC), **Texas (TX)**, Utah (UT), and Wyoming (WY) fall into this category.

This is a red flag category and some concern should be shown toward data management and reporting around race from these areas as time goes on during the pandemic.

*Category: Constant - Neutral*

**California (CA)**, Guam (GU), Kansas (KS), Kentucky (KY), Northern Mariana Islands (MP), North Dakota (ND), New Mexico (NM), **New York (NY)**, Ohio (OH), Puerto Rico (PR), South Dakota (SD), Tennessee (TN), Virgin Islands (VI), Wisconsin (WI), and West Virginia (WV) fall into this category.

Notably, North Dakota, New York, and Puerto Rico do not report **any** race data for their reported cases. This is alarming, and we need better data from these regions.

\[insert US Map here]

**Interview Insights**

To get a more qualitative explanation of what is happening in the data, I sought experts and health officials to help me understand why so much race data could be missing and where in the process - from patient arrival to lab collection to data reporting - the missing link could occur. Additionally, I wanted to understand what the process of race designation is and how it is reported accurately.

First, I consulted with MIT Medical Associate Medical Director & Chief of Student Health Shawn Ferullo. He explained that policies and procedures could vary greatly not only from state to state but from institution to institution. For example, Massachusetts General Hospital may have a completely different reporting protocol than MIT Medical, associated with a higher education institution, which has a much more rigidly defined community. But at the end of the day, Ferullo says, “**what is being reported is what the State mandates to be reported.**” Let’s keep this in mind.

From what I gathered, this is the testing methodology at MIT Medical, broken down into three key areas:

1. Clinical Testing: Someone is sick or has symptoms and needs to be monitored, typically done in the office
2. Contact Tracing Testing: a separate waiting area for people who may have been potentially exposed to COVID-19 but may still be healthy
3. **Asymptomatic Testing:** Outside testing booths for people who don’t have symptoms but want testing, low-risk large volume testing is performed here, most similar to the concept of *drive-thru* testing (4)

I’m most interested in how demographic data is being organized at these pop-up sites.

As Ferullo explained, since MIT Medical uses an online health record system, with demographic data already on file, race data is automatically associated with a patient’s test, positive or negative. And in practice, this system minimizes the risk of losses of qualitative data even in the presence of high testing stress.

He leaves this closing remark:

“As a clinician, so much of the day to day work is so patient-focused, as you can imagine... The lab has whatever requirements it has to submit, so a lot of clinicians on the front lines may not even know what data is reported... because they’re tasked with seeing the patient, collecting the test, and all of that. More of these bigger, drive up, population-based testing sites, I wonder how many are scrambling, quite honestly, if some states are just scrambling to get testing that they’re not as thoughtful with how they are setting up their systems \[for data collecting]. I hate to think about how many states just don’t want to know or are intentionally not asking the question” \[about race].

Next, an excerpt from an interview with Sarita Shah, who is an epidemiologist at Emory University, studying racial disparities in areas with high rates of COVID-19 and volunteering with Fulton County’s health department. Notably, Shah sees the data collection problem firsthand. After doing nasal swabs at a drive-up testing site, she later calls those who test positive to fill in personal information, including race. **\[self-identification]** However, even after multiple attempts, the team reaches only about half of these people. Shah says she’d love to note a person’s race when they’re sitting in front of her at the test site, but so far, the forms provided by labs that process the samples don’t have a place to note it. “I wish it was something more complex than that,” she says, “but it’s not.” **\[the researcher also lacks an opportunity to identify patients and race data is lost]** \[4]

Her experience is not in isolation. Shortly after the interview with Ferullo, I followed up with MIT Medical Lab Director Jonathan Pelletier who confirmed that the template form used at MIT Medical to report testing results - sent directly from the Massachusetts Department of Public Health - has no column or option for reporting race designations. This is especially confusing because the previous data suggests Massachusetts is one of the leading states in which race data is being reported. It raises the question of how this is even possible? And where are they getting their data from if it’s not required, as Massachusetts historically has done a good job with their race data reporting. But these questions and many more, I do not have the answers to and as I leave them unexplored, I assume other laboratories across the nation are facing similar data issues.

But maybe there’s hope; an amendment to the Coronavirus Aid, Relief, and Economic Security (CARES) Act passed back on June 4th will require laboratories to include relevant demographic data, such as age and race, on every test. 6. However, this is scheduled to go into effect on August 1st, leaving many passionate researchers and relief organizations in the dark about this crucial piece of metadata. I guess we’ll have to wait and see if this makes a difference in the data.

**Conclusions**

I believe the lack of normalized and uniform systems of reporting demographic data at the local level - individual laboratories, medical institutions, testing locations, communities, and counties - results in these large discrepancies that we see at the state and national level when researchers try to draw conclusions from data aggregates. This needs to change, and fast.

"One problem that epidemiologists, in particular, have seen with all of this new lab testing sites data (pharmacies, drive-throughs, non-traditional lab settings) is incomplete data," Scott Becker of the Association of Public Health Laboratories wrote in an email to NPR. And public health experts say what's been needed are detailed breakdowns on how the virus is affecting Black and other marginalized communities. These groups have been hit especially hard, suffering higher case numbers per capita, serious illness, hospitalizations, and death.” 3.

Lastly, accurate information on race is critical in making policy decisions, particularly for civil rights and federal programs like unemployment stimulus packages and eviction moratoriums. Race data is also used to promote equal employment opportunities and to assess racial disparities in health and environmental risks. 2. And in this case, laboratory testing data, in conjunction with case reports and other demographic data, provide vital guidance for mitigation and control activities, as well as properly allocating resources for relief. 6.

As the country begins to reopen its doors, access to clear and accurate data is essential to communities and leadership as they make data-driven decisions for a phased reopening. For individuals, access to clear representations of real-world data improves feelings of safety, security, and awareness, and empowers them to take action to support themselves, their families, and their communities. I hope we are able to see real change soon.

**Project Notes - Methodology**

(1) On some days, a state’s percentages may add up to more than 100%, we understand these to be inaccuracies in the original data set of which the visualization was made. This could be attributed to either compiling errors or reporting errors from the individual medical institutions \[labs].

(2) For the purposes of this project, we considered the race designation *Other* to be functionally the same as *Unknown* and therefore we included all cases reported having a race of *Other* as unknown. We carry over this adjustment in all calculations made for unknown visualizations.

This first suggestion came about after some manually screening of the CSV file used to generate the visualizations showed some interesting patterns in data management which in shorter words, looked like some cases originally designated as *Unknown* were swapped over to the *Other* category. As the running totals continued in the spreadsheet, it seemed suspicious and we think this is a better way to account for that uncertainty.

For instance, on May 13th in Iowa, 2878 cases are reported as *Unknown* and 232 cases as Other, then on May 17th, 3144 cases are now reported as *Other* and 0 cases as *Unknown*, and from this moment forward, case numbers increase in the *Other* category but remain stagnant in the *Unknown* category until June 17th. This is only noticeable because of how large a change it is but would be virtually undetectable if an individual laboratory chose to reinterpret data in this way. This seems more like a shift in data management rather than real testing results, and it’s these shifts that are most interesting to us as we try to interpret the gaps in the data.

(3) What does testing per capita mean?

After much deliberation, we choose to map the “known percentages” - the percent of positive cases in which race data exists - to testing per capita instead of positive tests because of some confounding variables. Testing per capita represents the total amount of tests performed in that state by the date specified divided by the state’s population. In short, we were looking for a good way to visualize magnitudes of uncertainty as states increase their number of tests. Do testing strategies change (per state, per district, per county?) as testing density increases, especially looking at race and ethnicity data?

Generally speaking, the rate of infection of a disease multiplied by the total number of tests, should result in the total number of positive tests. Therefore, inherent differences in the rate of infection in separate states may impact positive test results without increasing the total number of tests - a confounding variable that made using total positive tests undesirable.

And by using raw positive tests as an axis label, we would be assuming that increases in testing density are the only cause of increases in positive tests, when this may not be valid; the rate of infection also matters. There are many social regulations and restrictions in states, such as mask mandates or general climate patterns, which can impact the rate of infection. Especially considering the timing of this legislation varies greatly from state to state. Therefore, we thought testing per capita would be a more normalized metric off which to make conclusions.

(4) Drive-thru refers to making tests more available in communities in an easier way, which would increase the volume of testing. With drive-thru testing, it is easier to keep patients social distancing by staying in their vehicles and to preserve clinician PPE.

**Sources**

*Non-Data*

\[1] [About Race](https://www.census.gov/topics/population/race/about.html)

\[2] [Race, Ethnicity Data To Be Required With Coronavirus Tests In U.S.](https://www.npr.org/sections/coronavirus-live-updates/2020/06/04/869815033/race-ethnicity-data-to-be-required-with-coronavirus-tests-in-u-s)

\[3] [‘Huge hole’ in COVID-19 testing data makes it harder to study racial disparities](https://www.sciencemag.org/news/2020/07/huge-hole-covid-19-testing-data-makes-it-harder-study-racial-disparities)

\[4] [The Fullest Look Yet at the Racial Inequity of Coronavirus](https://www.nytimes.com/interactive/2020/07/05/us/coronavirus-latinos-african-americans-cdc-data.html)

\[5] [CARES Act Section 18115](https://www.hhs.gov/sites/default/files/covid-19-laboratory-data-reporting-guidance.pdf)

*Data*

\[6] [The COVID Tracking Project | The COVID Tracking Project](https://covidtracking.com/)

* For raw case data.

*For region populations*

\[7] [2019 National and State Population Estimates](https://www.census.gov/newsroom/press-kits/2019/national-state-estimates.html)

\[8] [Islands We Serve | US Department of the Interior](https://www.doi.gov/oia/islands)

* American Samoa, Guam, Northern Mariana Islands, Virgin Islands.
---
title: "Creating Best Practices for COVID Data Visualization "
author: Griffin Kantz
date: 2020-05-15T00:00:00.000Z
tags:
  - General
hero: images/screen-shot-2020-05-15-at-4.53.05-am.png
jupyterfiles: []
---
The global impact of the SARS-CoV-2/COVID-19 pandemic, and the salience of eye-catching data visualizations in these times, necessitate a profoundly judicious use of data variables and normalizations. Inappropriate choices in these respects can contribute to misconceptions about the magnitudes of various aspects of the crisis, either in comparison to each other or in comparison to other global issues. Unchecked misconceptions about quantitative data in public health have the potential to enable harm, a hazard which such tags as[\#datasaveslives](https://twitter.com/hashtag/datasaveslives?lang=en)may have the effect of blanketing over.

Epidemiology in particular is wrought with terminology and dynamic relationships which are not immediately intuitive to understand. In the first weeks of COVID-19’s arrival to the English-speaking world, sage precautionary advice in this vein made its way through the data science Twitterverse:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;m in the high-risk zone for having adjacent, sophomoric knowledge myself (know statistics, have written about epidemiology) which is why I&#39;m mostly trying to shut up about coronavirus. But I will say be wary of overconfidence and trust folks who express uncertainty/doubt.</p>&mdash; Nate Silver (@NateSilver538) <a href="https://twitter.com/NateSilver538/status/1238319062549233664?ref_src=twsrc%5Etfw">March 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Creating data-driven maps of <a href="https://twitter.com/hashtag/COVID19?src=hash&amp;ref_src=twsrc%5Etfw">#COVID19</a> is hard, but I worry that a lot of people are being mislead because designers aren&#39;t externalizing the tradeoffs of their visual representations.<br><br>-- Why it&#39;s hard --<br>Problem 1: What do you do when your numbers probably don&#39;t reflect reality?</p>&mdash; EvanMPeck (@EvanMPeck) <a href="https://twitter.com/EvanMPeck/status/1235568532840120321?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

^See the linked thread for an imperative discussion on the issues in visualizing COVID. More recent words of wisdom:

        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I have nothing to promote but please stay home, wash your hands, and stop publishing charts with default Excel formatting</p>&mdash; Emma Wager (@emmawage) <a href="https://twitter.com/emmawage/status/1255264411025051653?ref_src=twsrc%5Etfw">April 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

^(Ahem, anyone using a "cubic model".)
See the thread below and the Atlantic piece covering the tweet that prompted it for a demonstration of the hazard of well-intentioned but under-informed data analysis.

        <blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Following numerous critiques, the most inaccurate tweet in the original viral thread disappeared/was probably deleted without explanation or follow-up correction. For transparency and posterity, this is what it looked like.<br><br>The info in the pictured tweet is unequivocally wrong <a href="https://t.co/MgWb6CnCPd">pic.twitter.com/MgWb6CnCPd</a></p>&mdash; Ferris Jabr (@ferrisjabr) <a href="https://twitter.com/ferrisjabr/status/1221145299084726273?ref_src=twsrc%5Etfw">January 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Even among infectious disease experts, consensus on the best practices for modeling the incoming data would adapt over time:

        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">1/4 - I think it would be helpful if I cleared up some confusion that has emerged in recent days. Some have interpreted my evidence to a UK parliamentary committee as indicating we have substantially revised our assessments of the potential mortality impact of COVID-19.</p>&mdash; neil_ferguson (@neil_ferguson) <a href="https://twitter.com/neil_ferguson/status/1243294815200124928?ref_src=twsrc%5Etfw">March 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

All these epistemological limitations fit under the umbrella of the Dunning-Kruger effect:



Following this evolving consensus on best practices, we can often observe improvements over time in some of the COVID data visualizations which have managed to reach a wider audience, and these revisions are instructive.
For example, covidactnow.org has added models of the infection growth rate (with confidence intervals) and the positive test rate to its forecasts of state-by-state hospital capacity, which were more simplistic in the site's first few weeks.
The interactive COVID tool at 91-divoc.com was already making the best of multiple approaches upon its debut, showing gross and per-capita case counts by country and region, and allowing users to toggle between linear and logarithmic scales on the y-axis. Like other popular COVID tools, 91-divoc brackets the x-axes of its graphs around early quantitative thresholds such as days since 100 cases, and by late April had shifted its default view from total cases to one-week trailing averages of new cases to better illustrate flattening growth. In mid-April the site added forecast trendlines for countries, but days later opted to truncate those forecasts to seven days forward so as to “avoid extreme extrapolation”. Peruse 91-divoc’s change log here.
The most important prevailing debates on best practices for COVID data visualization concern the proper selection of variables and denominators.
The modeler’s choice between gross counts and per-capita normalizations depends on the purpose of their model. Gross counts accurately measure the growth of local outbreaks, whereas per-capita rates better depict the burden on a nation/region’s healthcare system and policymaking apparatus. Some sentiments in favor of per-capita normalizations are quite inflexble, but perhaps wrongly so. Observe the linear graph of cases by country captured on March 25 from 91-divoc’s tool:



Now observe the linear graph of cases per capita, captured on the same day from the same tool:




Pouring one out for the Vatican City, apparently careening towards anarchy faster than any other nation, would be the incorrect conclusion to draw from these data.
Here John Burn-Murdoch, whose graphs for the Financial Times have earned praise, makes his team’s case against using per-capita rates in graphs:
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">And a chart showing why we&#39;re using absolute numbers rather than population-adjusted rates: <a href="https://t.co/YvJ8PA7kIt">https://t.co/YvJ8PA7kIt</a></p>&mdash; John Burn-Murdoch (@jburnmurdoch) <a href="https://twitter.com/jburnmurdoch/status/1249445458264698880?ref_src=twsrc%5Etfw">April 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In this linked thread Carl T. Bergstrom of the University of Washington explains how per-capita rates can be responsibly compared between countries if the curves are left-aligned to starting positions of a given fractional infection rate. However, he also advises that per-capita comparisons between regions are preferable to those between countries.

        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">1. When plotting epidemic curves or death totals, should we divide by population size? Here on twitter this question has generated a lot more heat than light. <br><br>The answer is a bit subtle and so while I’ve tweeted about this before I want to address it in more detail.</p>&mdash; Carl T. Bergstrom (@CT_Bergstrom) <a href="https://twitter.com/CT_Bergstrom/status/1249930293928030209?ref_src=twsrc%5Etfw">April 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There is also volatile disagreement on the proper selection of variables. Many sources, FiveThirtyEight among them, point out the futility of using reported case counts from governments (of inconsistent reliability) using inconsistent testing methods. Burn-Murdoch’s detractors critique the face-value acceptance of China’s published counts in his visuals. Datawrapper advocates for using confirmed death counts instead.
What are some general best practices and precautions for analyzing and visualizing COVID data? Here are some excellent sources addressing this question.
• 10 considerations before you create another chart about COVID-19 (03/13/20) by Amanda Makulec, Operations Director for the Data Visualization Society;
• 3 Questions: Catherine D’Ignazio on visualizing COVID-19 data (04/13/20) profiling MIT assistant professor D’Ignazio;
• Mapping coronavirus, responsibly (02/25/20) by Kenneth Field for ESRI;
• Why It’s So Freaking Hard to Make a Good COVID-19 Model by Maggie Koerth, Laura Bronner, and Jasmine Mithani for FiveThirtyEight;
• Once again, this Twitter thread by Evan M. Peck of Bucknell University.
For trustworthy visualizations, explore these gems selected by Tableau or the charts featured by Datawrapper.
The COVID-19 pandemic has underscored the importance of informed epidemiological data analysis. Often, the niche expertise required for this analysis can be a hazard even to credentialed experts. The democratic, collaborative nature of public forum data science can help us meet the demands of this vexing global problem. But, this does not suggest that every individual or team reporting on COVID has an equal claim to accuracy; rather, it implies that the analysis challenges are larger than any one mind can confidently answer.














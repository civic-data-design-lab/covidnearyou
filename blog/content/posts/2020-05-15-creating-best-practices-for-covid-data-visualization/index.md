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








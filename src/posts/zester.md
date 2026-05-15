---
title: The Data Problem Nobody Is Solving
date: 2026-04-22
excerpt: AI and robotics companies need real-world training data from mines, farms, and factories. That data exists. Nobody has built the supply chain to move it. That is what Zester Data Studios is for.
tags: Ventures, Data
published: false
---

Every AI and robotics company I talk to has the same problem.

They need real footage. Not stock video, not rendered environments, not carefully staged demos. They need dashcam footage from actual trucks driving actual roads. Factory floor footage from real production lines. Agricultural footage from actual fields in actual weather.

That footage exists. Billions of hours of it. Sitting on dashcams, phones, and GoPros owned by people who have no idea that an AI company would pay good money to train on it.

Nobody has built the supply chain that moves it from one place to the other. That is what Zester Data Studios is building.

## The three problems

We identified three separate problems that all need to be solved at the same time.

**First: real-world data is locked away.** A truck driver has a dashcam running twelve hours a day. A factory worker has a phone in their pocket. A farmer has cameras on every piece of equipment. None of them know their footage is worth anything to anyone, and there is no mechanism for them to find out or to get paid if they wanted to participate.

**Second: synthetic data alone does not cut it.** This one is more nuanced. Synthetic datasets are genuinely useful and we generate them ourselves through a product called Crucible. But models trained on synthetic-only data hit a ceiling. They can handle clean conditions and expected scenarios, and they struggle with the messy, unpredictable reality of actual deployment. You need real data in the mix. The ratio matters.

**Third: annotation quality is inconsistent.** Crowdsourced labeling at scale produces inconsistent results. Multilingual annotation is worse. Most platforms outsource to workers who do not actually speak the language they are annotating, and the quality shows. For models that need to understand regional dialects, local signage, or culturally specific contexts, this is a serious problem.

## The metallurgy chain

We describe our production process as a metallurgy chain. Raw material gets smelted and shaped. The metaphor actually fits.

**Ore** is the individual data marketplace. Anyone with a dashcam, a phone, or a GoPro can upload their footage and earn a revenue share when an AI or robotics company licenses it. Thirty percent of every sale goes to the contributor. We handle annotation, provenance, and delivery.

**Crucible** is the synthetic data and annotation platform. Raw data goes in, AI-ready data comes out. Crucible generates statistically faithful synthetic datasets with human expert validation as the final gate before anything gets delivered. The validation step matters. Automated quality checks miss things that a domain expert catches in two minutes.

**Forge** is the multilingual human labeling network. In-country workers across India, Africa, the Middle East, and Southeast Asia. Data stays in the country where it was processed, under that country's laws. We own the annotation infrastructure rather than outsourcing to a staffing platform, which means we can actually enforce quality standards.

## Sovereign by design

The infrastructure piece is not a marketing decision. It is an operational one.

A lot of the data that AI and robotics companies need comes from regions with data sovereignty requirements. Healthcare data, government footage, infrastructure video. That data cannot legally leave the country it was collected in, and even where the law is flexible, the political reality is increasingly pointing in one direction.

We built on Canadian-owned, Canadian-jurisdiction infrastructure. Not AWS, not Azure, not Google Cloud. The supply chain from individual contributor to finished dataset stays under our control, which means we can make actual guarantees about where data goes and who can see it.

## Why this is harder than it looks

Building a two-sided marketplace is always harder than it looks. The contributor side requires trust. People need to believe that uploading their footage is safe, that they will actually get paid, and that the use of their data will be limited to what they agreed to. That trust is earned slowly and lost quickly.

The buyer side requires quality guarantees. An AI company licensing footage cannot afford to discover at training time that thirty percent of the dataset is unusable. The annotation needs to be right before it gets delivered. The Crucible validation step exists specifically to solve this, but validation at scale is its own engineering problem.

We are working through both. The supply chain exists. The products are live. The work now is on volume and quality at scale.

If you are building something that needs real-world training data, or if you have footage that you think might be worth something, the conversation is worth having.

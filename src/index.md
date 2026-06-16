---
title: home page
layout: "layouts/base.html"
---

# hi, call me nico.

this is where people usually put their self-introduction.

unfortunately, writing an introduction assumes that one has figured at least a little bit about themselves.

if the state of this site is any indication... that's something i'm still working on.

- - -

## recent posts

{% for post in collections.blog | reverse %}

\>> [{{ post.data.title }}]({{ post.url }}) <small>({{ post.date.toLocaleDateString('en-US', { dateStyle: 'short' }) }})</small>

{% endfor %}

- - -

## changelog

{% for post in collections.changes | reverse %}

\>> [{{ post.data.title }}]({{ post.url }}) <small>({{ post.date.toLocaleDateString('en-US', { dateStyle: 'short' }) }})</small>

{% endfor %}

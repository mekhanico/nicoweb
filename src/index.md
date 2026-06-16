---
title: home page
layout: "layouts/base.html"
date: 2026-06-11
---

# hi, call me nico.

this is where people usually put their self-introduction.

unfortunately, writing an introduction assumes that one has figured at least a little bit about themselves.

if the state of this site is any indication... that's something i'm still working on.

- - -

## recent posts

{% for post in collections.blog.slice(0, 4) | reverse %}

\>> [{{ post.data.title }}]({{ post.url }}) <small>({{ post.date.toLocaleDateString('en-US', { dateStyle: 'short' }) }})</small>
{% endfor %}

- - -

## changelog

{% for post in collections.changes.slice(0, 4) | reverse %}

\>> [{{ post.data.title }}]({{ post.url }}) <small>({{ post.date.toLocaleDateString('en-US', { dateStyle: 'short' }) }})</small>

{% endfor %}

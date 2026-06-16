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

{% for post in collections.blog %}
<!--TODO: sort in reverse chrono order, add dates-->

\>> [{{ post.data.title }}]({{ post.url }})

{% endfor %}

- - -

## changelog

{% for post in collections.changes %}

\>> [{{ post.data.title }}]({{ post.url }})

{% endfor %}

---
title: Organisers
layout: page
---

{% for organiser in site.organisers %}
<div class="organiser">
    <dl>
        <dt>Name</dt>
        <dd>{{ organiser.name }}</dd>
    </dl>
</div>
{% endfor %}

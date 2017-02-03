---
title: Organisers
layout: page
---

{% for organiser in site.organisers %}
<div class="organiser">
    <dl>
        <dt>Name</dt>
            <dd>{{ organiser.name }}</dd>
        {% if organiser.twitter %}
            <dt>Twitter</dt>
            <dd>
                <a href="https://twitter.com/{{ organiser.twitter }}">@{{ organiser.twitter }}</a>
            </dd>
        {% endif %}
        {% if organiser.email %}
            <dt>Email</dt>
            <dd>
                <a href="mailto:{{ organiser.email }}">{{ organiser.email }}</a>
            </dd>
        {% endif %}
    </dl>
</div>
{% endfor %}

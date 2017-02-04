---
title: Organisers
layout: page
---

{% for organiser in site.organisers %}
<div class="organiser">
    {% if organiser.github %}
        {% avatar user=organiser.github size=120 %}
    {% endif %}
    <h2>{{ organiser.name }}</h2>
    <ul>
        {% if organiser.twitter %}
            <li><strong>Twitter</strong>:
                <a href="https://twitter.com/{{ organiser.twitter }}">@{{ organiser.twitter }}</a>
            </li>
        {% endif %}
        {% if organiser.email %}
            <li><strong>Email</strong>:
                <a href="mailto:{{ organiser.email }}">{{ organiser.email }}</a>
            </li>
        {% endif %}
        {% if organiser.github %}
            <li><strong>GitHub</strong>: @{{ organiser.github }}</li>
        {% endif %}
    </ul>
</div>
{% endfor %}

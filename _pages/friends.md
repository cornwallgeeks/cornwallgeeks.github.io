---
title: Friends
layout: page
---

{% for friend in site.friends %}
<div class="friend">
    {% if friend.image %}
        <img src="{{ site.baseurl }}{{friend.image}}" width="120" alt="{{fiend.name}} logo">
    {% endif %}
    <h2>{{ friend.name }}</h2>
    <ul>
        {% if friend.twitter %}
            <li><strong>Twitter</strong>:
                <a href="https://twitter.com/{{ friend.twitter }}" title="{{friend.name}} twitter profile">@{{ friend.twitter }}</a>
            </li>
        {% endif %}
        {% if friend.link %}
            <li><strong>URL</strong>:
                <a href="{{ friend.link }}" title="{{friend.name}}" title="More info about {{friend.name}}">{{ friend.link }}</a>
            </li>
        {% endif %}
    </ul>
</div>
{% endfor %}

---
title: Friends
layout: page
---

{% for friend in site.friends %}
<div class="friend">
    {% if friend.image %}
        <img src="{{ site.baseurl }}{{friend.image}}" width="120">
    {% endif %}
    <h2>{{ friend.name }}</h2>
    <ul>
        {% if friend.twitter %}
            <li><strong>Twitter</strong>:
                <a href="https://twitter.com/{{ friend.twitter }}">@{{ friend.twitter }}</a>
            </li>
        {% endif %}
        {% if friend.link %}
            <li><strong>URL</strong>:
                <a href="{{ friend.link }}">{{ friend.link }}</a>
            </li>
        {% endif %}
    </ul>
</div>
{% endfor %}

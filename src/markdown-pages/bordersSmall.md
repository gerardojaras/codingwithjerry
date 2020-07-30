---
slug: "/how-to-make-borders-smaller-than-the-size-of-the-div"
date: "2019-07-16"
title: "How to make borders smaller than the size of the div."
description: "A collection of coding recipes that have help me to build projects and apps"
keywords: "coding, app, recipe, windows, linux, mac, c#, javascript, gatsby, angular, react, vue"
author: "Gerardo Jaramillo, jerry@codingwithjerry.com"
category: "CSS"
tags: "css, link, colors, borders"
---
<pre>
.page-title:after {
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 50%; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 1px solid black; /* This creates the border. Replace black with whatever color you want. */
}
</pre>

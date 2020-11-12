---
title: About
---

**TMViz** is a lightweight, web-based controller visualisation widget for streaming apps like [OBS](https://obsproject.com/) or [XSplit](https://www.xsplit.com/). It is primarily created for [TrackMania](https://trackmania.com/), but it can be easily reconfigured to work with other racing games.

## Why does this exist?

- I want an overlay that can be included as a browser source.
- I want my overlays to be customisable with a single click.
- I don't want to run any other app locally just to run an overlay.
- The most popular controller visualisation tool available out here only supports a limited range of controllers.

## How does this work?

This tool utilises the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API), available on all modern desktop browsers ([see compatibility table](https://caniuse.com/gamepad)), including the OBS browser source. The Gamepad API is a browser API which allows developers to gain access to signals from gamepads and other game controllers and respond to them.

It supports many controller models outside Xbox and PlayStation controllers, as long as the Gamepad API supports it. Please check if your controller is compatible with the Gamepad API by running [Gamepad Tester](https://gamepad-tester.com/).

A list of compatible controllers is also available [here](https://gamepad-tester.com/controllers).

## Who made this?

[Me!](https://twitter.com/resir014) You can also find me on [these places](https://resir014.xyz/linktree) and take a look at my previous stuff [here](https://resir014.xyz/projects).

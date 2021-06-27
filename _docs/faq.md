---
title: FAQ
---

## Why does this exist?

- I want an overlay that can be included as a browser source.
- I want my overlays to be customisable with a single click.
- I don't want to run any other app locally just to run an overlay.
- The most popular, similar tool only supports a limited range of controllers.

## How does this work?

This tool utilises the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API), available on all modern desktop browsers ([see compatibility table](https://caniuse.com/gamepad)), including the OBS browser source. It supports many controller models outside of the Xbox and PlayStation controllers. Please check if your controller is compatible with the Gamepad API by running [Gamepad Tester](https://gamepad-tester.com/).

A list of compatible controllers is also available [here](https://gamepad-tester.com/controllers).

## Help! I added the overlay, but nothing is happening!

It was noticed that controllers are not properly picked up if they have been turned on after the streaming software has been started. Reloading the browser source without cache doesn't seem to fix it, so the only real solution is a full restart of the streaming software.

## Who made this?

[Me!](https://twitter.com/resir014) You can also find me on [these places](https://resir014.xyz/linktree) and take a look at my previous stuff [here](https://resir014.xyz/projects).

If you think this project is helpful, consider [buying me a cup of coffee](https://ko-fi.com/resir014)!

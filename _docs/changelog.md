---
template: changelog
title: Changelog
---

## 23 November 2021

- <span class="feature--changed">Changed</span> TMVIZ just got a performance boost! Not much changes visually, but under the hood, there's a major rework in how gamepads are rendered. This makes the overlay much less demanding in terms of render count, which (hopefully) results in way less memory usage + freezing on OBS. For the technically-minded, here's a [simple architecture diagram](https://user-images.githubusercontent.com/5663877/142922932-dbd4ef65-92fe-43a0-bf16-b1c7632d8d27.png) of the new overlay.

## 18 October 2021

- <span class="feature--fixed">Fixed</span> Fixed an issue where hiding the steering makes the whole overlay disappear.

## 02 March 2021

- <span class="feature--new">New</span> Added Docs section! For now, this contains the existing information from the About page, but over time it will be updated to include detailed guides, etc.
- <span class="feature--new">New</span> You can now hide certain elements of the gamepad overlay (e.g. accelerator, brake, steering). This is useful in case you need to run multiple instances of TMViz for different controllers.
- <span class="feature--fixed">Fixed</span> When steering axis is not set, the overlay shouldn't fallback to axis 0.

## 03 January 2021

- <span class="feature--fixed">Fixed</span> Correctly handled edge case where selected button does not exist in the controller.
- <span class="feature--fixed">Fixed</span> Improved overlay error UI.

## 29 December 2020

- <span class="feature--fixed">Fixed</span> Fixed overlay not working when 2 or more controllers are connected.
- <span class="feature--new">New</span> Allow selecting the active controller when 2 or more controllers are connected.

## 19 December 2020

- <span class="feature--changed">Changed</span> Revamped keybinds settings to support additional controller actions
- <span class="feature--changed">Changed</span> Major design tweaks
- <span class="feature--new">New</span> Double-binds for steering
- <span class="feature--new">New</span> Allow binding steering input to d-pad/non-axis buttons

## 02 December 2020

- <span class="feature--new">New</span> You can now save your current settings. Settings are stored locally.
- <span class="feature--new">New</span> Added colour picker to appearance customizer.
- <span class="feature--fixed">Fixed</span> Steering deadzone settings now work properly.

## 11 November 2020

- <span class="feature--fixed">Fixed</span> Addressed memory leak issue which causes overlay to freeze after a while.

## 09 November 2020

- <span class="feature--new">New</span> Initial release.

# Expo Camera Preview Freeze Bug

This repository demonstrates a bug where the Expo Camera preview freezes after capturing an image. The preview remains stuck on the last captured image, requiring a full app restart to resolve. The issue is intermittent and may be related to state management or asynchronous operations.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on a physical device or emulator using Expo Go.
4. Take several pictures using the app.  Observe that after a variable amount of times, the preview will freeze and become unresponsive.

## Potential Causes

- Asynchronous operations within the Camera component.
- Incorrect state management of camera parameters.
- Race conditions when updating the camera preview.
- Underlying issue within Expo Camera API itself.  This bug may not be found in all versions of Expo.

## Solution

The proposed solution involves using a state variable to explicitly control the camera's state and adding error handling mechanisms to properly manage the camera. This approach helps resolve the intermittent freezing issue by creating a state machine that helps to ensure consistent behavior.

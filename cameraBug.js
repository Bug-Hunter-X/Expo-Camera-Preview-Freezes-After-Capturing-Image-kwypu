This bug occurs when using the Expo Camera API with custom camera controls.  The problem is that after taking a picture using the camera, the preview freezes and becomes unresponsive.  The app doesn't crash, but the camera preview is stuck on the last captured image, and users can't take any more pictures until they restart the app.  This is intermittent and doesn't happen consistently on all devices or under all conditions. The following code is a simplified example that demonstrates this behavior.  Note: AsyncStorage is used to demonstrate a possible cause related to state management, though this error happens even without the AsyncStorage interaction.
var feed = new Instafeed({
  accessToken: 'IGQWROZAi1KbkdMOFR5ZA1RUMlRodHc3RnJTNFpKbDBFdkVGVUFJNUZA2UzYxUWgtUFBTWnFRd2NTUk4taGNfRmUyRTlqWmlKNjVpR0s4Qm1CM2NlTE5abnY0eG4tcTA4ZAGxhNWw5ZAEFYSmxIZADdaNkxjT1paQWFGalEZD',
  resolution: 'high_resolution',
  template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
  limit: 16,
});
feed.run();
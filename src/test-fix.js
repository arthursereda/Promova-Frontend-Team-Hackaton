const div_1_sizes = [
  [300, 250],
  [320, 100],
  [320, 50],
];

export const loadAd = (name) => {
  window.googletag = window.googletag || { cmd: [] };

  googletag.cmd.push(() => {
    // Define an ad slot for div with id "banner-ad".
    googletag
      .defineSlot('/21668216007/amomama.de_intext_10', div_1_sizes, name)
      .addService(googletag.pubads());

    // Enable the PubAdsService.
    googletag.enableServices();

    // Request and render an ad for the "banner-ad" slot.
    googletag.display(name);
  });
};

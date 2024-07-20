module.exports = {
  securityHeaders: [
    {
      source: '/',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'Content-Security-Policy',
          value: "frame-ancestors 'self' https://x.com https://twitter.com",
        },
      ],
    },
  ],
};

/* eslint-disable no-param-reassign */
const { withSentryConfig } = require('@sentry/nextjs');

const { VERCEL_GIT_COMMIT_SHA } = process.env;
const COMMIT_SHA = VERCEL_GIT_COMMIT_SHA ? VERCEL_GIT_COMMIT_SHA.substring(0, 8) : undefined;

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextConfig = {
  env: {
    // Make the COMMIT_SHA available to the client so that Sentry events can be
    // marked for the release they belong to. It may be undefined if running
    // outside of Vercel
    SENTRY_RELEASE: `tmviz@${COMMIT_SHA}`,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/about',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/docs/about',
        permanent: true,
      },
      {
        source: '/changelog',
        destination: '/docs/changelog',
        permanent: true,
      },
    ];
  },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

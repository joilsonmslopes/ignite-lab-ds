const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal (config, { configType }) {
    if(configType === 'PRODUCTION') {
      config.base = '/ignite-lab-ds/'
    }

    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@kamari/ignite-lab-design-system",
            replacement: path.resolve(__dirname, "./src"),
          },
        ],
      }
    }
  },
}
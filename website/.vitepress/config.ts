import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NL-Encyclopedia",
  description: "NetLimiter Guide",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Taskeren/NL-Encyclopedia' }
    ]
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    }
  }
})

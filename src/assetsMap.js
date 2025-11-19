// Centralized asset map using Google Drive direct-embed links
// Update IDs here to swap images everywhere they’re used.

const gdrive = (id) => `https://drive.google.com/uc?export=view&id=${id}`

export const assets = {
  // Branding
  logoHeader: gdrive('1sMw9SUswBnH0Xk_AZngkjpmyDAD94axC'), // dark header logo
  logoFooter: gdrive('1YUVVcnlvr0MCpGynK2ZTps_R9WyMzfL-'), // light/white footer logo

  // Hero
  heroImage: gdrive('122cK5L3jeb7IvLi8jS0DaK3OlMj_Z7HH'),
  // Optional animated background
  heroBgGif: gdrive('1rOgoxSSi7QPnUHElJuGtfCwC5WEx5DZb'),

  // Drone services (4)
  drone: {
    building: gdrive('1rKu3bWsHhbNeYrYi7h5Ke3M2w0Hp7UlO'),
    facade: gdrive('1nmfrJxqDyRjftAmwTIXE0_d75pKzKeTo'),
    roof: gdrive('1fvXrDBLsUJIdzRqFS_e6EtmpfLzisNpa'),
    solar: gdrive('1mTxRCJtLKntoElK1FRneNM-BJ6M34HaW'),
  },

  // Traditional services (4)
  traditional: {
    pressure: gdrive('12LujOmwk_4OrrUnudOwKmkKy4uGBgdfB'),
    softwash: gdrive('14jruPnhUg6UmUQ4iXwhPRE5BQs9OrJzi'),
    roofMoss: gdrive('17bwb9RHTkg18uS3gGlnMHE2tZfSGIA1s'),
    gutter: gdrive('1X4yda5v8EkDwKhJIOfaQj9uBH0sI0itO'),
  },

  // Additional visuals
  aboutImage: gdrive('1K8CBtD8kfrhK0iJUi0hX5KqY4YsaFGgL'),
  sectorCommercial: gdrive('1XZZJvUGfnckv3i-XMIw1-S7SSb0hc6WX'),
  sectorIndustrial: gdrive('131k5Nc5D6o9CUTF8VvY8B8DqirCdot3u'),
  supportImage: gdrive('1l3qwZCiq6tbpQ7VzJlDPz0cO43FUQcwl'),

  // Contact page background
  contactBg: gdrive('1oDFF_ahmy87P1QV60IcF4XdhGbLMZa5s'),
}

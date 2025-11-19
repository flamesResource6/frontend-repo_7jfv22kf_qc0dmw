// Centralized asset map using Google Drive direct-embed links
// You can replace any of these IDs with new ones without touching components.

const gdrive = (id) => `https://drive.google.com/uc?export=view&id=${id}`

export const assets = {
  // Branding
  logoHeader: gdrive('1-hGCIimpweRPPOxX1XFOdJ07c7nFB4ih'), // dark
  logoFooter: gdrive('10MYcpb_G0t0G3HGBsDjboXPd3vjcHs1E'), // white/invert

  // Hero
  heroImage: gdrive('122cK5L3jeb7IvLi8jS0DaK3OlMj_Z7HH'),
  heroBgGif: gdrive('19frsZhpaW3uXfPdxxNcpNyXRY_jmc2Xn'),

  // Drone services (4)
  drone: {
    building: gdrive('12LujOmwk_4OrrUnudOwKmkKy4uGBgdfB'),
    facade: gdrive('131k5Nc5D6o9CUTF8VvY8B8DqirCdot3u'),
    roof: gdrive('135nDhzV8I3l63-YMj4e6kjskbgn4IjFU'),
    solar: gdrive('137-XMoUgmVVHOyV5SubTXjmLP-LhxJcU'),
  },

  // Traditional services (5)
  traditional: {
    pressure: gdrive('14jruPnhUg6UmUQ4iXwhPRE5BQs9OrJzi'),
    softwash: gdrive('16v9-RvZtIW0YHkQGJ8tS6klG9pcHtEVv'),
    roofMoss: gdrive('17bwb9RHTkg18uS3gGlnMHE2tZfSGIA1s'),
    gutter: gdrive('17lrJb9JRFLkd3vPrmzCPIgT5OegRFR85'),
    windows: gdrive('18456ayVDxG7rbO_n__mUBnDg6LF127zZ'),
  },

  // Contact page background
  contactBg: gdrive('1984Iyy7SD8OePEeIBdByG06H1JoPGRgd'),
}

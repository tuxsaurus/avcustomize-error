module.exports = {
  async redirects() {
    return [
      {
        source: "/shop/item",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

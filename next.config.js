module.exports = {
  async redirects() {
    return [
      {
        source: "/shop/item",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
};

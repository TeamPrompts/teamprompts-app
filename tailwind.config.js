module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addComponents }) {
      const toggle = {
        '.toggle__dot': {
          top: '-.25rem !important',
          left: '-.25rem !important',
          transition: 'all 0.3s ease-in-out'
        },
        '.toggle__dot--checked': {
          transform: 'translateX(100%) !important',
          backgroundColor: '#48bb78 !important'
        }
      };
      addComponents(toggle, {
        respectPrefix: false
      });
    }
  ]
};

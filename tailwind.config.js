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
        'input[type=checkbox]:checked ~ .toggle__dot': {
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

module.exports = {
  theme: {
    extend: {
      keyframes: {
        cardTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.9)",
            filter: "blur(6px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(-80px) scale(1.05)",
            filter: "blur(0)",
          },
          "100%": {
            transform: "translateY(-60px) scale(1)",
          },
        },
        cardBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px) scale(0.9)",
            filter: "blur(6px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(80px) scale(1.05)",
            filter: "blur(0)",
          },
          "100%": {
            transform: "translateY(60px) scale(1)",
          },
        },
      },
      animation: {
        cardTop: "cardTop 1s cubic-bezier(0.22,1,0.36,1) forwards",
        cardBottom:
          "cardBottom 1s cubic-bezier(0.22,1,0.36,1) forwards 0.15s",
      },
    },
  },
};
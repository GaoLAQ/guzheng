export const style = {
  methods: {
    textSizeFunc(name) {
      let size;
      switch (name) {
        case "xs":
          size = "12px";
          break;
        case "sm":
          size = "18px";
          break;
        case "md":
          size = "20px";
          break;
        case "lg":
          size = "22px";
          break;
        case "xl":
          size = "28px";
          break;
        default:
          size = "28px";
      }
      return size;
    },
  },
};

import Toasted from "vue-toasted";
export default Vue => {
  Vue.use(Toasted);
  Vue.toasted.register(
    "toatal_error",
    payload => {
      return payload ? payload : "Something Went Wrong..";
    },
    {
      type: "error",
      duration: 10000,
      position: "bottom-right",
      className: "toasted-customize",
      action: [
        {
          text: "关闭",
          onClick: (e, t) => {
            t.goAway(0);
          }
        }
      ]
    }
  );
};

import Box from "./Box.vue";
import CirclingSquares from "./CirclingSquares.vue";
import FlippingHexagons from "./FlippingHexagons.vue";
import JumpingDots from "./JumpingDots.vue";
import Overlay from "./Overlay.vue";
import PulsatingDot from "./PulsatingDot.vue";
import SpinningCircle from "./SpinningCircle.vue";
import TravellingBar from "./TravellingBar.vue";
import WanderingSquares from "./WanderingSquares.vue";

export default {
  install: (app, options) => {
    app.component("Box", Box);
    app.component("CirclingSquares", CirclingSquares);
    app.component("FlippingHexagons", FlippingHexagons);
    app.component("JumpingDots", JumpingDots);
    app.component("Overlay", Overlay);
    app.component("PulsatingDot", PulsatingDot);
    app.component("SpinningCircle", SpinningCircle);
    app.component("TravellingBar", TravellingBar);
    app.component("WanderingSquares", WanderingSquares);
  },
};

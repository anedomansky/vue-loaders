import Box from "./components/Box.vue";
import CirclingSquares from "./components/CirclingSquares.vue";
import FlippingHexagons from "./components/FlippingHexagons.vue";
import JumpingDots from "./components/JumpingDots.vue";
import Overlay from "./components/Overlay.vue";
import PulsatingDot from "./components/PulsatingDot.vue";
import SpinningCircle from "./components/SpinningCircle.vue";
import TravellingBar from "./components/TravellingBar.vue";
import WanderingSquares from "./components/WanderingSquares.vue";

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

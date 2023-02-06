// https://qlik.dev/libraries-and-tools/nebulajs/configuration
// https://qlik.dev/libraries-and-tools/nebulajs/supported-charts
//https://www.npmjs.com/package/@motor-js/nebula?activeTab=dependencies
import { embed } from "@nebula.js/stardust";
import barChart from "@nebula.js/sn-bar-chart";
import lineChart from "@nebula.js/sn-line-chart";
import piechart from "@nebula.js/sn-pie-chart";
import sankeyChart from "@nebula.js/sn-sankey-chart";
import funnel from "@nebula.js/sn-funnel-chart";
import mekkoChart from "@nebula.js/sn-mekko-chart";

const baseConfig = embed.createConfiguration({
  context: {
    theme: "light",
    language: "en-US",
    constraints: {
      active: false,
      passive: false,
      select: false,
    },
  },
  types: [
    {
      name: "barchart",
      load: () => Promise.resolve(barChart),
    },
    {
      name: "linechart",
      load: () => Promise.resolve(lineChart),
    },
    {
      name: "piechart",
      load: () => Promise.resolve(piechart),
    },
    {
      name: "qlik-sankey-chart-ext",
      load: () => Promise.resolve(sankeyChart),
    },
    {
      name: "qlik-funnel-chart",
      load: () => Promise.resolve(funnel),
    },
    {
      name: "mekkochart",
      load: () => Promise.resolve(mekkoChart),
    },
  ],
});

export default baseConfig;

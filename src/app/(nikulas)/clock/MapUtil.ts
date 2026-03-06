import { useEffect, useRef, useState } from "react";
// Charts Library
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

export function useMap(mapELID: string) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const mapRef = useRef<HTMLElement>(null);
  useEffect(() => {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new(mapELID);
    root.interfaceColors.set("primaryButton", am5.color("#3a3a65"));
    root.interfaceColors.set("primaryButtonDisabled", am5.color("#1f1f38"));
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Dark.new(root)]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        // wheelable: false,
        // wheelX: "none",
        // wheelY: "none",

        projection: am5map.geoMercator(),
      }),
    );

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color("#5dffd1"),
      }),
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "[bold #fff fontVariant:small-caps]{name}",
      toggleKey: "active",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color("#2879fb"),
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: am5.color("#5dffd1"),
    });

    var previousPolygon: any;

    polygonSeries.mapPolygons.template.on("active", function (active, target) {
      if (previousPolygon && previousPolygon != target) {
        previousPolygon.set("active", false);
      }
      if (target && target.get("active") && target.dataItem) {
        // console.log(target.dataItem);
        polygonSeries.zoomToDataItem(target.dataItem as any);
        const country = target.dataItem.dataContext as any;
        console.log(country.id);
        // onCountryChange(country.id);
        setSelectedCountry(country.id);
        // const timezoneList = ct.getCountry(country);
        // console.log(timezoneList);
      } else {
        chart.goHome();
      }
      previousPolygon = target;
    });

    // Add zoom control
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
    var zoomControl = chart.set(
      "zoomControl",
      am5map.ZoomControl.new(root, {}),
    );
    zoomControl.homeButton.set("visible", true);

    const bg = chart.chartContainer.get("background");
    // Set clicking on "water" to zoom out
    bg?.events.on("click", function () {
      chart.goHome();
    });

    // Make stuff animate on load
    chart.appear(1000, 100);

    const hovered = chart.chartContainer.get("hover" as any);
    hovered?.events.on();
    chart.remove;

    return () => {
      root.dispose();
    };
  }, []);

  return [selectedCountry];
}
export function exception(atz: any, country: string) {
  const exceptions: { [key: string]: any } = {
    SE: {
      "Europe/Berlin": "Sweden/Stockholm",
    },
    NO: {
      "Europe/Berlin": "Norway/Oslo",
    },
  };

  // If the country has a list of exceptions
  if (Object.hasOwn(exceptions, country)) {
    // If the exceptions matched inside to be replaced
    if (Object.hasOwn(exceptions[country], atz)) {
      return exceptions[country][atz];
    }
  }
  return atz;
}

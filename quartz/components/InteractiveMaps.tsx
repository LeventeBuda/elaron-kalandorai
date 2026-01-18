import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((() => {
  function InteractiveMap() {
    return (
      <div class="quartz-map-wrapper">
        <div id="drakhal-map-web" style={{ height: "850px", width: "95%", background: "#161618", borderRadius: "8px" }}></div>
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener("nav", () => {
            const container = document.getElementById('drakhal-map-web');
            if (!container || container.classList.contains('leaflet-container')) return;
            const map = L.map('drakhal-map-web', { crs: L.CRS.Simple, minZoom: -1.5, maxZoom: 1 });
            const bounds = [[0, 0], [1642, 2048]];
            L.imageOverlay('/static/Drakhal.jpg', bounds).addTo(map);
            map.fitBounds(bounds);
            map.setZoom(-1);
          })
        `}} />
      </div>
    )
  }

  return InteractiveMap
}) satisfies QuartzComponentConstructor)
"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

export function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    let isMounted = true;

    async function initMap() {
      // Leaflet depend de window/document : on le chargé seulement cote navigateur.
      const L = await import("leaflet");

      if (!isMounted || !mapContainer.current || map.current) return;

      const position: [number, number] = [site.map.latitude, site.map.longitude];

      // La carte se centre sur les coordonnées configurees dans .env.local.
      map.current = L.map(mapContainer.current, {
        scrollWheelZoom: false,
        zoomControl: true
      }).setView(position, site.map.zoom);

      // Fond OpenStreetMap clair, sobre et compatible avec une page corporate.
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map.current);

      // Marqueur CSS pour eviter les icônes Leaflet cassees dans Next.js.
      const markerIcon = L.divIcon({
        className: "map-marker",
        html: '<span aria-hidden="true"></span>',
        iconAnchor: [9, 9],
        iconSize: [18, 18]
      });

      L.marker(position, {
        icon: markerIcon,
        title: `${site.map.label} - ${site.map.city}`
      })
        .addTo(map.current)
        .bindPopup(
          `<strong>${site.map.label}</strong><br>${site.map.city}<br>${site.address}`
        );
    }

    initMap();

    return () => {
      isMounted = false;
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="contact-map"
      aria-label={`Carte interactive - ${site.map.label} à ${site.map.city}`}
    />
  );
}


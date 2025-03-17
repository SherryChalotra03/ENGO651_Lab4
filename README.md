# ENGO651_Lab4: Traffic Incidents Visualization Map

## 🗺️ Overview
This project visualizes **2017 Traffic Incidents in Calgary** using **Leaflet.js** with a **custom Mapbox style**. Users can toggle between the **styled Mapbox layer** and a **basic OpenStreetMap (OSM) layer**, ensuring an interactive and informative map experience.

## 🎨 Map Design Choices

### 1️⃣ Base Map Style
-  **Custom Mapbox Style:** Provides a modern and visually appealing background.
-  **Toggle Functionality:** Users can switch between the **styled Mapbox map** and **basic OpenStreetMap (OSM)**.

### 2️⃣ Traffic Incident Layer Styling
- **Color:**  **Red (#FF0000)** – Highlights incidents clearly.
- **Radius:**  **5px** – Ensures points are noticeable but not overwhelming.
- **Blur:**  **0.5** – Softens edges for a refined look.
- **Opacity:**  **0.8** – Allows overlapping points to remain distinguishable.
- **Stroke Color:**  **Black (#000000)** – Provides contrast for better visibility.
- **Stroke Width:**  **1 px** – Maintains definition without clutter.
- **Stroke Opacity:** **0.8** – Subtle but effective border enhancement.
- **Translate:** **(0,0)** – No position shifts applied, ensuring accurate placement.

**Additional Road and Land Use Styling**
**🛤️ Road Motorways and Trunks Color:** Greenish Palette to distinguish major roads naturally.
**🏷️ Road Labels:** Color: Yellowish (Bright gold tone for clear, readable labels.)
**🏘️ Internal Roads:** 
- **Color:** Dark Blue (Deep Dodger Blue for a modern, urban feel)
- **Outline Color:** Light Blue (Sky Blue outline for contrast)
**🏥 Land Use - Medical Properties (from Land Use Tile):**
- **Color:**  Yellowish (Bright gold tone for clear) to highlight medical facilities distinctly.

### 3️⃣ Design Considerations
- **Readability & Contrast:** Ensures clear distinction between incidents and base map.
- **Minimal Clutter:** A clean design that balances data density and legibility.
- **User Control:** Toggle function lets users focus on **traffic data** when needed.

## ⚙️ Technologies Used
- **Mapbox GL JS** for custom map styling.
- **Leaflet.js** for interactive mapping.
- **JavaScript, HTML, CSS** for implementation.

## Conclusion
This map design prioritizes **clarity, usability, and aesthetics**, making traffic incidents **easy to interpret** while maintaining an engaging user experience. 

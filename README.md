# Marvel Rivals Roll‑A‑Roller

A web-based tool for randomizing player roles for Marvel Rivals matches. Supports up to 6 players, with role assignment logic and a clean, modern UI.

## Features
- Add/remove players (2–6)
- Random role assignment with streak and balance logic
- Option to allow 3 of a role (Vanguard, Duellist, Strategist)
- Flex role with a small chance
- Dark mode toggle
- Capture the current state as an image (clipboard)

## Recent Refactor
- **CSS extracted to `style.css`** for easier maintenance and improved readability.
- HTML cleaned up and now links to the external stylesheet.

## Usage
1. Open `index.html` in your web browser (double-click or right-click and choose "Open with" > your browser).
2. Add player names using the "Add Player" button.
3. Click "Roll All" to assign roles, or use the dice button for individual rolls.
4. Use the options panel to toggle dark mode or capture the current state.

## File Structure
- `index.html` – Main application HTML and JavaScript
- `css/style.css` – All styles for the app
- `images/FlexIcon.png` – Flex role icon
- `images/VanguardIcon.png` – Vanguard role icon
- `images/StrategistIcon.png` – Strategist role icon
- `images/DuellistIcon.png` – Duellist role icon
- `images/logo.png` – App logo (large)
- `images/logo250px.png` – App logo (250px)
- `images/Logo.jpg` – App logo (old, to be deprecated or removed)

---

For any further improvements or issues, please open a ticket or contact the maintainer. 
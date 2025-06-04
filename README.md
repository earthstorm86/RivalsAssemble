# Marvel Rivals Roll‑A‑Roller

A web-based tool for randomizing player roles for Marvel Rivals matches. Supports up to 6 players with role assignment logic and a clean, modern UI.

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
- `images/` – Application images and icons

## Development
Run the small validation script to ensure `index.html` parses correctly:

```bash
python validate_html.py index.html
```

To verify the randomness helpers, run the accompanying Node test script:

```bash
node test_random.js
```

The repository includes a GitHub Actions workflow that automatically updates the
timestamp shown at the bottom of `index.html` whenever changes are pushed to the
`master` branch. No manual edits are required to keep the "Last published" date
current.

---

For any further improvements or issues, please open a ticket or contact the maintainer.

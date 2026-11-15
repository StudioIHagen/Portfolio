# Studioihagen Portfolio

Static architecture portfolio for GitHub Pages.

## Structure

- `index.html` is the home page with a project list and a PDF button.
- `assets/projects.js` contains the home page projects and their visibility settings.
- `about.html` is the about page with placeholder copy.
- `projects/` contains one page for each project.
- `assets/` contains shared styling, small script, and placeholder images.

## GitHub Pages

Upload these files to a GitHub repository and enable GitHub Pages from the repository settings. Use the repository root as the Pages source.

Replace the SVG placeholders in `assets/` with real project images when they are ready. The PDF button currently opens the browser print dialog, so the page can be saved as a PDF.

## Show or hide projects

Edit `assets/projects.js` and set `visible` on each project:

```js
visible: true  // Show on the home page.
visible: false // Hide from the home page.
```

Use boolean values without quotes. All current projects start with `visible: true`.
Projects are displayed in the order listed in this file. A missing `visible` value
defaults to visible. Hiding a project removes its image and title from the home
page (including the PDF printout); its project page is still accessible by direct
URL. This is a display setting, not access control.

Commit the change and let GitHub Pages deploy it to update the website.

## Project filenames

| Project | Page | Images |
| --- | --- | --- |
| Rovenveien 466 | `projects/RVV466.html` | `assets/RVV466-1.png` etc. |
| John Blond House | `projects/JohnBlond.html` | `assets/JohnBlond-1.jpg` etc. |
| Maridalsveien 31C | `projects/Maridalsveien31.html` | `assets/Maridalsveien31-1.jpg` etc. |
| Isielva | `projects/Isielva.html` | `assets/Isielva-1.jpg` etc. |

Cover images use the same prefix with `-cover`.

## All Projects and Resources

- `All-Projects.html`: All Projects, with a three-column desktop grid.
- `Resources.html`: Resources catalog.
- `assets/resources.js`: resource content.

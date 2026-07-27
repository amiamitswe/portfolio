import { techStack } from "./techStack";

// Single source of truth for the numbers shown in the stat tiles.

// Derived from ./techStack so the tiles never drift out of sync with the grid.
export const toolsInStack = techStack.length;
export const toolsInStackLabel = `${toolsInStack}`;

// Not derived — update this by hand as more work ships.
export const projectsDelivered = 14;
export const projectsDeliveredLabel = `${projectsDelivered}+`;
import { ElementTree } from '.';

export const convertToHTML = (node: ElementTree) => {
  const { type, props } = node;
  const children = props.children || [];

  // Open the tag
  let html = `<${type}`;

  // Close the opening tag if no props
  if (Object.keys(props).length === 0) {
    html += '>';
  } else {
    // Add the props
    for (const [key, value] of Object.entries(props)) {
      if (key === 'children') continue; // Skip the children prop
      html += ` ${key}="${value}"`;
    }
    // Close the opening tag
    html += '>';
  }

  // Add the children recursively
  for (const child of children) {
    if (typeof child === 'string') {
      html += child; // Text content

    } else {
      html += convertToHTML(child); // Nested node
    }
  }

  // Close the tag
  html += `</${type}>`;

  return html;
};
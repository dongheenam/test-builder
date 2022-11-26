/**
 * portals the element inside another element
 * ref: https://github.com/carbon-design-system/carbon-components-svelte/issues/835
 * @param {HTMLElement} element
 * @param {HTMLElement | string} targetElementOrSelector
 */
const portal = (element, targetElementOrSelector) => {
  const targetElement =
    typeof targetElementOrSelector == "string"
      ? document.querySelector(targetElementOrSelector)
      : targetElementOrSelector;
  const portalChildren = [...element.children];

  if (targetElement == null)
    throw new Error("Target element not found/undefined.");

  targetElement.append(...portalChildren);

  return {
    destroy() {
      for (const portalChild of portalChildren) portalChild.remove();
    },
  };
};
export default portal;

import { css } from '@emotion/react';

/**
 * The clearfix utility ensures that a parent element, including flex containers,
 * properly wraps around its content without collapsing margins.
 *
 * This utility is applied to mitigate Safari-specific issues where margins of flex
 * containers collapse unexpectedly. It achieves this by adding a `::after` pseudo-element
 * that clears both left and right floats and prevents margin collapse.
 *
 * The pseudo-element is invisible and doesn't affect layout, while maintaining proper
 * margin behavior across browsers.
 *
 *
 * Example:
 * ```jsx
 * import { clearfix } from '@lafourchette/react-tasty/system';
 *
 * const Container = styled.div`
 *   ${clearfix}
 *   display: flex;
 * `;
 *
 * const MyComponent = () => (
 *   <Container>
 *     <div>Content with margin</div>
 *   </Container>
 * );
 * ```
 */
export const clearfix = css`
  &::after {
    display: block;
    clear: both;
    content: '\a0 '; /* &nbsp; - just a space doesn't uncollapse margins */
    visibility: hidden; /* make sure not to show anything */
    height: 0;
  }
`;

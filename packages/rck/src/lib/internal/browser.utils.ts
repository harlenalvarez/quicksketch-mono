export const getRckStyle = (offset?: number) => {
  const minHeight = offset ? `calc(100vh - ${offset}px)` : '100vh';
  const top = offset ? `${offset}px` : '0';
  return { top, minWidth: '100%', minHeight } as React.CSSProperties
}
export const clsx = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(' ');
export const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

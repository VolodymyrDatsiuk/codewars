export function bouncingBall(
  initialHeight: number,
  bounce: number,
  windowHeight: number,
): number {
  if (initialHeight <= 0) return -1;
  if (windowHeight >= initialHeight) return -1;
  if (bounce <= 0 || bounce >= 1) return -1;

  let ballSeenTimes = 1;
  let lastBounceHeight = initialHeight;

  while (lastBounceHeight > windowHeight) {
    const isFirstFalling = lastBounceHeight === initialHeight;

    ballSeenTimes += isFirstFalling ? 0 : 2;
    lastBounceHeight = lastBounceHeight - lastBounceHeight * (1 - bounce);
  }

  return ballSeenTimes;
}

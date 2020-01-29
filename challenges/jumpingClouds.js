function jumpingOnClouds(c) {
  let steps = 0;
  for (let i = 0; i < c.length - 1;) {
    let nextStep = c[i + 1],
      next2step = c[i + 2];

    if (c[i] === 1) {
      i += 1;
    } else {
      if (nextStep === 0 && next2step === 0) {
        steps++;
        i += 2
      } else {
        steps++;
        i++;
      }
    }
  }
  return steps;
}

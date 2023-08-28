export const getWaveHeight = (
  impediment: number,
  waveHeight: number,
  beachOrientation: number,
  swellDirection: number
) => {
  // Convert angles to radians
  const beachOrientationRad = (beachOrientation * Math.PI) / 180;
  const swellDirectionRad = (swellDirection * Math.PI) / 180;

  // Calculate the dot product coefficient using cosine of the inverted angle difference
  const dotProductCoefficient = Math.sin(
    swellDirectionRad - beachOrientationRad
  );

  // Adjust the wave size based on the dot product coefficient and impediment
  const waveSize = waveHeight * (1 - impediment) * dotProductCoefficient;

  return waveSize.toFixed(1);
};

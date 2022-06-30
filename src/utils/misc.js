const MEASURE_REGEX = /^(\d*\.?\d*)(px|rem|em)?/;

function addToMeasure(measureVal, addend = 0) {
  if (typeof measureVal === 'string') {
    const [, strNum, measure = 'px'] = measureVal.match(MEASURE_REGEX);
    const sumResult = parseFloat(strNum) + addend;

    return `${sumResult}${measure}`;
  }

  if (!isNaN(measureVal)) {
    return measureVal + addend;
  }

  return measureVal;
}

function subtractToMeasure(measureVal, subtrahend = 0) {
  if (typeof measureVal === 'string') {
    const [, strNum, measure = 'px'] = measureVal.match(MEASURE_REGEX);
    const sumResult = parseFloat(strNum) - subtrahend;

    return `${sumResult}${measure}`;
  }

  if (!isNaN(measureVal)) {
    return measureVal - subtrahend;
  }

  return measureVal;
}

export { addToMeasure, subtractToMeasure };

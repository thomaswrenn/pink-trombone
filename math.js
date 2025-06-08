Math.clamp = function(number, min, max) {
  if (number < min) return min;
  else if (number > max) return max;
  else return number;
};

Math.moveTowards = function(current, target, amountUp, amountDown) {
  if (current < target) return Math.min(current + amountUp, target);
  else return Math.max(current - amountDown, target);
};

module.exports = {};

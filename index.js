import math from './node_modules/mathjs';
import ChangeTypes from './lib/ChangeTypes';
import simplifyExpression from './lib/simplifyExpression';
import solveEquation from './lib/solveEquation';
import mathQuill from './node_modules/mathquill';

window.mathsteps = {
  simplifyExpression:simplifyExpression,
  solveEquation:solveEquation,
  ChangeTypes:ChangeTypes
};
window.math = math;
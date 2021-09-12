import {v4 as uuidv4} from 'uuid';
import validator from 'validator';
const {isUUID} = validaotr;

function ID(id = uuidv4()) {
  try {
    if (new.target === undefined) return new ID();

  }
  catch (error) {

  }
}

export default ID;

// HELPER FUNCTIONS
function validateID(string) {
  try {
    if (typeof string !== 'string' && !string) throw new Error('value is invalid.');
  }
  catch (error) {

  }
}
import {v4 as uuidv4} from 'uuid';
import validator from 'validator';
const {isUUID} = validator;

function ID() {
  try {
    if (new.target === undefined) return new ID();
    Object.defineProperties(this, {
      get: {
        value: function getID() {
          try {
            if (this.id) return this.id;
            else return null;
          }
          catch (error) {
            throw error;
          }
        },
        enumerable: true
      },
      set: {
        value: function setID(string = uuidv4()) {
          try {
            if (!validateID(string)) throw new Error('ID value is invalid.');
            else {
              Object.defineProperty(this, 'id', {
                value: string,
                configurable: true
              });

              return this.id;
            }
          } catch (error) {
            throw error;
          }
        },
        enumerable: true
      },
      validate: {
        value: validateID,
        enumerable: true
      }
    });
  }
  catch (error) {
    throw error;
  }
}

export default ID;

// HELPER FUNCTIONS
function validateID(string) {
  try {
    if (typeof string !== 'string' && !string) throw new Error('value is invalid.');
    if (isUUID(string)) return true;
    else return false;
  }
  catch (error) {
    throw error;
  }
}
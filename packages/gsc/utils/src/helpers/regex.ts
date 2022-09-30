export const RX_NUMBER = /^[0-9]*\.?[0-9]+$/

// --- Date ---

// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'
export const RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/

// Used to split off the date parts of the YYYY-MM-DD string
export const RX_DATE_SPLIT = /-|\s|T/

// Time string RegEx (optional seconds)
export const RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/

// --- URL ---

// HREFs must end with a hash followed by at least one non-hash character
export const RX_HREF = /^.*(#[^#]+)$/

export const RX_ENCODED_COMMA = /%2C/g
export const RX_ENCODE_REVERSE = /[!'()*]/g
export const RX_QUERY_START = /^(\?|#|&)/

import fs from "fs"
import Writer from "objects-to-csv"
import Parser from "data-to-json"

export default {
  write: async (object, location, options = {}) => {
    /*
      ======================================
        Data must be an array of objects.
        The keys of the object may or may
        not be same but they're the ones
        that'll form the columns of the CSV.
      ======================================
    */
    const converted = new Writer(object)
    if (location) await converted.toDisk(location, { allColumns: true, ...options })
    return await converted.toString()
  },
  read: location => {
    /*
      ======================================
        The file must exist, that's all.
        It'll read in a CSV and then return
        an object, which will be valid JSON data.
      ======================================
    */
    return Parser.csv({ filePath: location }).toJson()
  }
}

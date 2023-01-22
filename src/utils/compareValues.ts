export const extractSimilarArrayValue = (comparo: string, comparee: string) => {
  let similarValue = ""
  
  for (let i = 1; i < comparo.length; i++) {
    /**
     * Compare the two arrays in same index value
     * append the index value to the if same value
     * break if not the same value
     */
    if (comparo[i - 1] === comparee[i - 1]) {
      similarValue += comparo[i - 1]
    } else {
      break
    }
  }

  return similarValue
}

export const getLongestValue = (values: string[]) => {
  let extractedValue = ""
  /**
   * check if params is array
   * sort the array to have the longest value string as first value
   */
  if (Array.isArray(values)) {
    extractedValue = values.sort((a, b) => b.length - a.length)[0]
  }

  return extractedValue
}
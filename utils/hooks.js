export const usePrice = (n) => {
    let str = n.toString()
    let result = ''

    for (let i = 0; i < str.length; i++){
        result += str[i]

        if ((str.length - i - 1) % 3 === 0 && i < str.length - 1) {
            result += ".";
          }
    }

    return result
}


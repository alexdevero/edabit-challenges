const fruitSalad = (arr) => {
  return arr
    .flatMap(str => [str.slice(0, str.length / 2), str.slice(str.length / 2)])
    .sort()
    .join('')
}

fruitSalad(['apple', 'pear', 'grapes']) // 'apargrapepesple'
fruitSalad(['banana', 'kiwi', 'strawberry', 'blueberries']) // 'anabanberryblueberrieskistrawwi'
fruitSalad(['raspberries', 'mango']) // 'erriesmangoraspb'
fruitSalad(['banana']) // 'anaban'

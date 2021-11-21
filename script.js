for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
  var bottleWord = 'bottle'
  if (numberOfBottles <= 0) {
    bottleWord = 'bottles'
    document.write('No more ' + bottleWord + ' of beer on the wall,')
    document.write('<br>')
    document.write('No more ' + bottleWord + ' of beer,')
    document.write('<br>')
    document.write(
      'Go to the store and buy some more, 99 bottles of beer on the wall',
    )
  } else if (numberOfBottles == 1) {
    bottleWord = 'bottle'
    document.write(numberOfBottles + ' ' + bottleWord + ' of beer on the wall')
    document.write('<br>')
    document.write(numberOfBottles + ' ' + bottleWord + ' of beer,')
    document.write('<br>')
    document.write('Take one down, pass it around,')
    document.write('<br>')
  } else if (numberOfBottles >= 2) {
    bottleWord = 'bottles'
    document.write(numberOfBottles + ' ' + bottleWord + ' of beer on the wall')
    document.write('<br>')
    document.write(numberOfBottles + ' ' + bottleWord + ' of beer,')
    document.write('<br>')
    document.write('Take one down, pass it around,')
    document.write('<br>')
  }
}

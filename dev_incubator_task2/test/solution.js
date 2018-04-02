function solution(map) {
  let count = 0;
  let _island_count = 100; // индивидуальный номер каждого нового острова (со 100: 101 - 1-й, 102 - 2-й)

  map.forEach((el_i, i)=>{
    el_i.forEach((el_j, j)=> {
      if (map[i][j] === 1) {
        count++
        _island_count++
        floodFill(i, j);
      }
    })
  })

  function floodFill (i, j) {
    map[i][j] = _island_count;
    //верхний левый угол
    if( !map[i - 1] && !map[i][j - 1] && map[i + 1][j] === 1 ){
      floodFill (i + 1, j)
    }
    //верхний правый угол
    if( !map[i - 1] && !map[i][j - 1] && map[i][j + 1] === 1 ){
      floodFill (i, j + 1)
    }
    //нижний левый угол
    if( !map[i][j - 1] && !map[i+1] && map[i][j + 1] === 1 ){
      floodFill (i, j + 1)
    }
    //нижний правый угол
    if( !map[i-1] && !map[i][j + 1] && map[i + 1][j] === 1 ){
      floodFill (i + 1, j)
    }

    // верх или низ с лева на право
    if( (!map[i - 1] && map[i][j + 1] === 1) || (!map[i + 1] && map[i][j + 1] === 1) ){
      floodFill (i, j + 1)
    }
    // верх или низ с права на лево
    if( (!map[i - 1] && map[i][j - 1] === 1) || (!map[i + 1] && map[i][j - 1] === 1) ){
      floodFill (i, j - 1)
    }

    // лево или право сверху в низ и
    if( ( map[i+1] && !map[i][j - 1] && map[i+1][j] === 1) || ( map[i+1] && !map[i][j + 1] && map[i+1][j] === 1)  ){
      floodFill (i + 1, j)
    }

    // лево или право снизу в верх
    if( ( map[i-1] && !map[i][j - 1] && map[i-1][j] === 1) || ( map[i-1] && !map[i][j + 1] && map[i-1][j] === 1)  ){
      floodFill (i - 1, j)
    }

    // внутри с лева на право
    if( map[i][j+1] === 1){
      floodFill(i, j+1);
    }

    // внутри с права на лево
    if( map[i][j-1] === 1){
      floodFill(i, j-1);
    }

    // внутри с верху в низ
    if( map[i+1] && map[i+1][j] === 1){
      floodFill(i + 1, j);
    }

    // внутри с низу в верх
    if( map[i-1] && map[i-1][j] === 1){
      floodFill(i - 1, j);
    }
  }

  // возврат массиву прехднего вида
  map.forEach((el_i, i)=>{
    el_i.forEach((el_j, j)=> {
      if (map[i][j] !== 0) {
        map[i][j] = 1;
      }
    })
  })

  return count;
}
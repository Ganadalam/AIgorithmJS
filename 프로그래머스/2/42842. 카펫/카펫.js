function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= total / height; height++) {
    const width = total / height;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

//function solution(brown, yellow) {
//    const total = brown + yellow;

// 전체 타일 수의 약수 쌍 탐색
//    for (let height = 3; height <= Math.sqrt(total); height++) {
//        if (total % height === 0) {
//            const width = total / height;

// 노란색 영역이 조건에 맞는지 확인
//            if ((width - 2) * (height - 2) === yellow) {
//                return [width, height];
//            }
//        }
//    }
//}

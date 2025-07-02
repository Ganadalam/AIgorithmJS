//sort() & some() + startsWith() : O(n log n)
function solution(phone_book) {
  phone_book.sort();
  return !phone_book.some((v, i) => phone_book[i + 1]?.startsWith(v));
}

// // 정렬(sort & for) + 인접 비교 : O(n log n)O(n)
// function solution(phone_book) {
//     phone_book.sort();

//     for (let i = 0; i < phone_book.length - 1; i++) {
//         if (phone_book[i + 1].startsWith(phone_book[i])) {
//             return false;
//         }
//     }

//     return true;
// }
